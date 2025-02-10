# routes/webhook.py
from flask import Blueprint, request, jsonify
import stripe
from logging_config import logger
from services.smartbill_service import process_stripe_session_event
from helpers.tracking import track_usage
from config import STRIPE_WEBHOOK_SECRET
from helpers.idempotency import is_event_processed, mark_event_processed, cleanup_processed_events

webhook_bp = Blueprint("webhook", __name__)

@webhook_bp.route("/stripe-webhook", methods=["POST"])
@track_usage("total_webhook_calls")  # Count every call to the webhook
def stripe_webhook():
    cleanup_processed_events()
    payload = request.get_data()
    sig_header = request.headers.get("Stripe-Signature")
    logger.debug("Received Stripe-Signature: %s", sig_header)
    logger.debug("Using webhook secret: %s", STRIPE_WEBHOOK_SECRET.strip() if STRIPE_WEBHOOK_SECRET else "Not set")

    try:
        event = stripe.Webhook.construct_event(payload, sig_header, STRIPE_WEBHOOK_SECRET.strip())
    except ValueError as e:
        logger.error("Invalid payload: %s", e)
        increment_metric("invalid_payloads")
        return jsonify(success=False, error="Invalid payload"), 400
    except stripe.error.SignatureVerificationError as e:
        logger.error("Invalid signature: %s", e)
        increment_metric("signature_verification_failures")
        return jsonify(success=False, error="Invalid signature"), 400
    except Exception as e:
        logger.exception("Unexpected error:")
        increment_metric("unhandled_exceptions")
        return jsonify(success=False, error="Unexpected error"), 400

    event_id = event.get("id")
    if is_event_processed(event_id):
        logger.info("Event %s already processed. Skipping duplicate.", event_id)
        increment_metric("duplicate_events_detected")
        return jsonify(success=True), 200
    mark_event_processed(event_id)
    increment_metric("unique_events_processed")

    logger.info("Webhook event received: %s", event["type"])
    if event["type"] == "checkout.session.completed":
        session = event["data"]["object"]
        process_stripe_session_event(session)
    else:
        logger.warning("Unhandled event type: %s", event["type"])
    return jsonify(success=True), 200

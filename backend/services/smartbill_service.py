# services/smartbill_service.py
import json
import base64
import requests
from logging_config import logger
from config import SMARTBILL_USERNAME, SMARTBILL_TOKEN, SMARTBILL_INVOICE_ENDPOINT
from helpers.invoice_helpers import extract_created_date, compute_invoice_dates, build_invoice_payload
from helpers.tracking import increment_metric

def process_stripe_session_event(session):
    created_date = extract_created_date(session)
    if not created_date:
        logger.warning("No creation date available for session %s", session.get("id"))
        return
    issue_date, due_date, delivery_date = compute_invoice_dates(created_date)
    invoice_payload = build_invoice_payload(session, issue_date, due_date, delivery_date)
    logger.debug("Invoice Payload: %s", json.dumps(invoice_payload, indent=4, ensure_ascii=False))
    invoice_result = create_smartbill_invoice(invoice_payload)
    if invoice_result:
        logger.info("Smartbill Invoice Creation Response: %s", json.dumps(invoice_result, indent=4, ensure_ascii=False))
        increment_metric("successful_invoice_creations")
    else:
        logger.error("Invoice creation failed.")
        increment_metric("invoice_creation_failures")

def create_smartbill_invoice(invoice_payload):
    credentials = f"{SMARTBILL_USERNAME}:{SMARTBILL_TOKEN}"
    encoded_credentials = base64.b64encode(credentials.encode("utf-8")).decode("utf-8")
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Basic {encoded_credentials}"
    }
    response = requests.post(SMARTBILL_INVOICE_ENDPOINT, headers=headers, json=invoice_payload)
    if response.status_code in (200, 201):
        logger.info("Invoice created successfully in Smartbill.")
        increment_metric("successful_invoice_creations")
        return response.json()
    else:
        logger.error("Failed to create invoice in Smartbill. Status code: %s", response.status_code)
        increment_metric("invoice_creation_failures")
        logger.error("Response: %s", response.text)
        return None

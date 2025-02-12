from flask import Blueprint, Response
import os
import stripe
import requests
import base64
import json
from config import COMPANY_VAT_CODE, SMARTBILL_USERNAME, SMARTBILL_TOKEN, SMARTBILL_SERIES_URL
from logging_config import logger

# Create the health check blueprint
health_bp = Blueprint('health', __name__)

# Set the Stripe API key from the environment variable
stripe.api_key = os.environ.get("STRIPE_API_KEY")

@health_bp.route("/health", methods=["GET"])
def health():
    output = []
    output.append("SmartBridge MVP Health Check")
    output.append("-----------------------------")
    output.append("App Status: ok")
    output.append("Version: 0.1.0-alpha")
    output.append("")

    # Stripe Health Check: Retrieve account details to verify connectivity
    try:
        account = stripe.Account.retrieve()
        stripe_status = "ok"
    except stripe.error.PermissionError as e:
        logger.warning("Stripe permission issue: %s", e)
        stripe_status = "degraded: insufficient permissions"
    except Exception as e:
        logger.error("Stripe health check failed: %s", e)
        stripe_status = f"error: {str(e)}"
    output.append(f"Stripe API: {stripe_status}")

    # Smartbill Invoice Series Health Check:
    try:
        # Construct the full URL by appending the company's tax code and type parameter to the base URL
        series_url = f"{SMARTBILL_SERIES_URL}{COMPANY_VAT_CODE}&type=f"

        # Build the Basic Auth credentials for Smartbill
        credentials = f"{SMARTBILL_USERNAME}:{SMARTBILL_TOKEN}"
        encoded_credentials = base64.b64encode(credentials.encode("utf-8")).decode("utf-8")
        headers = {
            "Authorization": f"Basic {encoded_credentials}",
            "Content-Type": "application/json"
        }

        # Make the GET request with a short timeout (3 seconds)
        response = requests.get(series_url, headers=headers, timeout=3)
        if response.status_code == 200:
            data = json.loads(response.text)
            series_list = data.get("list", [])
            if series_list:
                smartbill_status = "ok"
            else:
                smartbill_status = "error: no data returned"
        else:
            smartbill_status = f"unexpected status: {response.status_code}"
    except Exception as e:
        logger.error("Smartbill API Check failed: %s", e)
        smartbill_status = f"error: {str(e)}"
    output.append(f"Smartbill API : {smartbill_status}")

    # Join output lines into a single plain-text response
    result = "\n".join(output)
    return Response(result, mimetype="text/plain")

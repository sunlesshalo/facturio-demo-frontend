import os

# Stripe configuration
STRIPE_API_KEY = os.environ.get("STRIPE_API_KEY")
STRIPE_WEBHOOK_SECRET = os.environ.get("STRIPE_WEBHOOK_SECRET")

# SmartBill configuration
SMARTBILL_USERNAME = os.environ['SMARTBILL_USERNAME']
SMARTBILL_TOKEN = os.environ['SMARTBILL_TOKEN']
SMARTBILL_INVOICE_ENDPOINT = "https://ws.smartbill.ro/SBORO/api/invoice"
SMARTBILL_PAYMENT_ENDPOINT = "https://ws.smartbill.ro/SBORO/api/payment"
SMARTBILL_SERIES_URL = "https://ws.smartbill.ro/SBORO/api/series?cif="

# Company and document settings
COMPANY_VAT_CODE = "40670956"  # Replace with your actual company VAT code
DEFAULT_SERIES_NAME = "RO"     # Use "RO" if billing address is in Romania, else "EXT"

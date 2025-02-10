from datetime import datetime, timedelta
import stripe
from config import DEFAULT_SERIES_NAME, COMPANY_VAT_CODE

def extract_created_date(session_data):
    created_ts = session_data.get("created")
    if created_ts is not None:
        return datetime.fromtimestamp(created_ts).strftime("%Y-%m-%d")
    return None

def compute_invoice_dates(issue_date_str, days_offset=0):
    try:
        issue_date_obj = datetime.strptime(issue_date_str, "%Y-%m-%d")
        due_date_obj = issue_date_obj + timedelta(days=days_offset)
        due_date_str = due_date_obj.strftime("%Y-%m-%d")
        return issue_date_str, due_date_str, due_date_str
    except Exception as e:
        print("Error computing invoice dates:", e)
        return issue_date_str, None, None

def get_promotion_discount_info(session):
    discounts = session.get("discounts", [])
    if discounts:
        discount_obj = discounts[0]
        promo_code_id = discount_obj.get("promotion_code")
        if promo_code_id:
            try:
                promo_data = stripe.PromotionCode.retrieve(promo_code_id)
                coupon = promo_data.get("coupon")
                if coupon:
                    if coupon.get("percent_off") is not None:
                        return {
                            "discountType": 2,
                            "discountPercentage": coupon.get("percent_off")
                        }
                    elif coupon.get("amount_off") is not None:
                        return {
                            "discountType": 1,
                            "discountValue": coupon.get("amount_off")
                        }
            except Exception as e:
                print("Error retrieving promotion code:", e)
    return None

def get_service_name_from_payment_link(payment_link_id):
    try:
        payment_link = stripe.PaymentLink.retrieve(
            payment_link_id,
            expand=["line_items.data.price.product"]
        )
        line_items = payment_link.get("line_items", {}).get("data", [])
        if line_items:
            product = line_items[0]["price"]["product"]
            service_name = product.get("name")
            if service_name:
                return service_name
    except Exception as e:
        print("Error retrieving service name from payment link:", e)
    return "Service Payment"

def build_invoice_payload(session, issue_date, due_date, delivery_date):
    customer_details = session.get("customer_details", {})
    address_info = customer_details.get("address", {})

    client_name  = customer_details.get("name", "No Name")
    client_email = customer_details.get("email", "")

    line1 = address_info.get("line1", "")
    line2 = address_info.get("line2", "")
    postal_code = address_info.get("postal_code", "")
    city = address_info.get("city", "")
    state = address_info.get("state", "")
    country = address_info.get("country", "").upper()

    client_address = line1
    if line2 and line2.strip() != "-":
        client_address += f", {line2}"
    if postal_code:
        client_address += f", {postal_code}"

    tax_ids = customer_details.get("tax_ids", [])
    # client_vat_code is extracted from the buyer's data; if not provided, use "-"
    client_vat_code = tax_ids[0].get("value") if tax_ids else ""
    is_tax_payer = bool(client_vat_code)

    currency = session.get("currency", "RON").upper()

    series = DEFAULT_SERIES_NAME if country == "RO" else "EXT"

    payment_link_id = session.get("payment_link")
    service_name = get_service_name_from_payment_link(payment_link_id) if payment_link_id else "Service Payment"

    raw_amount_subtotal = session.get("amount_subtotal", 100.0)
    product_price = raw_amount_subtotal / 100.0

    main_product = {
        "name": service_name,
        "isDiscount": False,
        "measuringUnitName": "buc",
        "currency": currency,
        "quantity": 1,
        "price": product_price,
        "isTaxIncluded": False,
        "taxName": "Redusa",
        "taxPercentage": 19,
        "saveToDb": False,
        "isService": True
    }
    products = [main_product]

    discount_info = get_promotion_discount_info(session)
    if discount_info:
        if discount_info.get("discountType") == 2:
            discount_percentage = discount_info.get("discountPercentage")
            discount_line = {
                "name": "Discount",
                "isDiscount": True,
                "numberOfItems": 1,
                "discountType": 2,
                "discountPercentage": discount_percentage,
                "measuringUnitName": "buc",
                "currency": currency,
                "quantity": 1,
                "isTaxIncluded": False,
                "taxName": "Redusa",
                "taxPercentage": 19,
                "saveToDb": False,
                "isService": True
            }
        elif discount_info.get("discountType") == 1:
            discount_value = discount_info.get("discountValue") / 100.0
            if discount_value > 0:
                discount_value = -discount_value
            discount_line = {
                "name": "Discount",
                "isDiscount": True,
                "numberOfItems": 1,
                "discountType": 1,
                "discountValue": discount_value,
                "measuringUnitName": "buc",
                "currency": currency,
                "quantity": 1,
                "isTaxIncluded": False,
                "taxName": "Redusa",
                "taxPercentage": 19,
                "saveToDb": False,
                "isService": True
            }
        else:
            discount_line = None

        if discount_line:
            products.append(discount_line)

    payload = {
        "companyVatCode": COMPANY_VAT_CODE,  # Always use the seller's VAT code from config
        "client": {
            "name": client_name,
            "vatCode": client_vat_code if client_vat_code else "-",
            "isTaxPayer": is_tax_payer,
            "address": client_address,
            "city": city,
            "county": state,
            "country": country,
            "email": client_email,
            "saveToDb": False
        },
        "issueDate": issue_date,
        "seriesName": series,
        "isDraft": True,
        "dueDate": due_date,
        "products": products
    }
    return payload

import os
from flask import Flask
from logging_config import logger
from routes.webhook import webhook_bp
from flask import jsonify
from replit import db
from routes.health import health_bp
from helpers.tracking import get_metrics

app = Flask(__name__)
app.register_blueprint(webhook_bp)
app.register_blueprint(health_bp)

@app.route("/metrics", methods=["GET"])
def metrics():
    metric_keys = [
        "total_webhook_calls",
        "successful_invoice_creations",
        "invoice_creation_failures"
    ]
    return jsonify(get_metrics(metric_keys))

@app.route("/")
def index():
    return "Stripe-Smartbill Webhook is Running."

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    logger.info("Starting app on port %d", port)
    app.run(host="0.0.0.0", port=port)
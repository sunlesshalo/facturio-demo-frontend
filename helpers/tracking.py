# helpers/tracking.py

from replit import db

def increment_metric(metric_name, increment=1):
    """
    Increment the counter for the given metric in Replit DB.

    If the metric does not exist yet, it is initialized to 0.
    """
    current_value = db.get(metric_name, 0)
    db[metric_name] = current_value + increment

def track_usage(metric_name):
    """
    A decorator that increments the given metric each time the decorated function is called.

    Usage:
        @track_usage("total_webhook_calls")
        def some_function(...):
            ...
    """
    def decorator(func):
        def wrapper(*args, **kwargs):
            increment_metric(metric_name)
            return func(*args, **kwargs)
        return wrapper
    return decorator

def get_metrics(metric_keys):
    """
    Retrieve the current values for a list of metric keys from Replit DB.

    Returns a dictionary where keys are the metric names and values are their counts.
    """
    return {key: db.get(key, 0) for key in metric_keys}

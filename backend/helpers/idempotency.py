import time
from replit import db

# Define the retention period in seconds (30 days)
RETENTION_PERIOD = 30 * 24 * 3600  # 30 days = 2,592,000 seconds

def get_processed_events():
    """
    Retrieve the processed events from Replit DB.
    We store them as a dictionary with event IDs as keys and processing timestamps as values.
    """
    return db.get("processed_event_ids", {})

def is_event_processed(event_id):
    """
    Check if the event_id is already processed.
    """
    processed = get_processed_events()
    return event_id in processed

def mark_event_processed(event_id):
    """
    Add the event_id with the current timestamp to the processed events in Replit DB.
    """
    processed = get_processed_events()
    if event_id not in processed:
        processed[event_id] = time.time()
        db["processed_event_ids"] = processed

def cleanup_processed_events():
    """
    Remove event IDs that were processed more than RETENTION_PERIOD seconds ago.
    """
    processed = get_processed_events()
    current_time = time.time()
    updated = {}
    for event_id, timestamp in processed.items():
        if current_time - timestamp <= RETENTION_PERIOD:
            updated[event_id] = timestamp
    db["processed_event_ids"] = updated

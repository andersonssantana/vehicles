#!/bin/bash

# Exit immediately if any command fails
set -e

# ===========================================
# CONFIGURATION
# ===========================================
# Change these values for your app
APP_NAME="my-app.meteorapp.com"
ENVIRONMENT="prod"

echo "Deploying $APP_NAME ($ENVIRONMENT)"

# ===========================================
# STEP 1: Verify Infisical authentication
# ===========================================
# Tries to fetch secrets from Infisical
# If it fails, the user is not logged in or the project is not initialized
if ! infisical secrets --env=$ENVIRONMENT &> /dev/null; then
    echo "Not authenticated. Run: infisical login"
    exit 1
fi

# ===========================================
# STEP 2: Export secrets to temporary file
# ===========================================
# Creates a unique temporary filename using the process ID ($$)
# This avoids conflicts if multiple deploys run at the same time
TEMP_SETTINGS=".settings-deploy-$$.json"

# Fetches the SETTINGS_JSON secret from Infisical and saves to the temp file
infisical secrets get SETTINGS_JSON --env=$ENVIRONMENT --plain > $TEMP_SETTINGS

# ===========================================
# STEP 3: Validate JSON
# ===========================================
# Uses Python to check if the file contains valid JSON
if ! python3 -c "import json; json.load(open('$TEMP_SETTINGS'))" 2>/dev/null; then
    echo "Invalid JSON in SETTINGS_JSON"
    rm -f $TEMP_SETTINGS
    exit 1
fi

# ===========================================
# STEP 4: Deploy to Galaxy
# ===========================================
meteor deploy $APP_NAME --settings $TEMP_SETTINGS

# ===========================================
# STEP 5: Clean up
# ===========================================
# Removes the temporary file so secrets don't stay on disk
rm -f $TEMP_SETTINGS

echo "Done!"

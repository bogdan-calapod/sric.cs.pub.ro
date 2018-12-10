#!/bin/bash

# This deployment script is used to build and deploy the
# SRIC website. The HARMONIA_LOCATION envvar needs to be set
# to the root of the folder where the repo `harmonia/downloader` is cloned.

# VARIABLES
startDir="$(pwd)"
downloaderConfig="config.json"

if  [[ -z "${HARMONIA_LOCATION}" ]]; then
  echo $"❗  Harmonia location envvar unset. Quitting...";
elif  [[ -z "${SRIC_DESTINATION_LOCATION}" ]]; then
  echo $"❗  SRIC destination location envvar unset. Quitting...";
else 
  echo "➰  Current dir is ${startDir}";
  echo "➰  Running downloader..."
  cd "${HARMONIA_LOCATION}"
  npm run start "-- --config=${downloaderConfig}"
  echo "➰  Running builder..."
  cd "${startDir}"
  npm run build
  echo "➰  Copying files..."
  cp -r public/* "${SRIC_DESTINATION_LOCATION}"
  echo "✔  Build finished."
fi
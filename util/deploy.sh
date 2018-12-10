#!/bin/bash

# This deployment script is used to build and deploy the
# SRIC website. The HARMONIA_LOCATION envvar needs to be set
# to the root of the folder where the repo `harmonia/downloader` is cloned.

# VARIABLES
startDir="$(pwd)"
downloaderConfig="config.json"
destination="/home/bogdan/test/"

if  [[ -z "${HARMONIA_LOCATION}" ]]; then
  echo $"❗  Envvar unset. Quitting...";
else 
  echo "➰  Current dir is ${startDir}";
  echo "➰  Running downloader..."
  cd "${HARMONIA_LOCATION}"
  npm run start "-- --config=${downloaderConfig}"
  echo "➰  Running builder..."
  cd "${startDir}"
  npm run build
  echo "➰  Copying files..."
  cp -r public/* "${destination}"
  echo "✔  Build finished."
fi
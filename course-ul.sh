#!/bin/bash

# MIT Licence
# Scott Morgan 2023

# Check for sudo and exit if not
if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root." 
   exit 1
fi

# Checks if unzip is installed and installs if not
if [ $(dpkg-query -W -f='${Status}' unzip 2>/dev/null | grep -c "ok installed") -eq 0 ];
then
  sudo apt install unzip;
fi

# Loops over .zip files in directory and unzips using user-defined folder name as final URL. Only works if 'raw' is in the title of the .zip file (consistent with Rise 360 output).
any_files_switch=0
for f in *.zip; do
  if [[ "$f" == *"raw"* ]]; then
    echo "Unzipping ${f}."
    read -p "Enter the name of this resource: " user_input

    folder_name=$(echo "${user_input// /-}" | tr '[:upper:]' '[:lower:]')

    unzip -q $f content/* -d $folder_name; mv $folder_name/content/* $folder_name/; rm -r $folder_name/content
    any_files_switch=1
    echo "Finished unzipping ${f}. Deploying to Github now." 
    git add --all; git commit -m "Adds $folder_name to repository."; git push origin main
    echo "Finished uploading. Use https://bc-it-services.github.io/etutorial/${folder_name}/index.html for the iFrame."

  else
    echo "The file ${f} doesn't look like a Rise 360 SCORM file. Check the filename contains the word 'raw' and unzip manually if needs be."
    break 
  fi
done

# Outputs if no appropriate .zip files found 
if [[ $any_files_switch -eq 0 ]]; then
  echo "No appropriate file found. Are you sure there's a compatible SCORM file in this directory?"
fi


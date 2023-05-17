# Bridgend College e-tutorial Hosting Platform 

This repository serves a Github Pages site (which is noindexed and nofollowed) to host the HTML content of the e-tutorial packages used by the Anvil server. 

## Usage

Drop a Rise 360 html file (always created to contain \*-raw-\*.zip) into the top-level directory, but do not unzip it.

Run `course-ul.sh` in bash. This unzips the file appropriately and uploads it to the site. The output of the script contains the URL to be used in the Anvil iFrame. 

## Licence

Licensed under the MIT license. Comments can be made to Scott Morgan <smorgan@bridgend.ac.uk>.

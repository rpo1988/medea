#!/bin/bash

# NPM Registry name
REGISTRY_URL="https://nexus.dev.air.hospitales.sanitas.dom/repository/npm-library/"
# Library package name
PACKAGE_NAME="ui-medea-lib"


# Updating tags
git fetch


# Check git status
if ! git diff-index --quiet HEAD --; then
  echo "Working directory is not clean"
  exit 1;
fi


# Generate new package version and store it in a variable to reuse it
echo
read -p "Enter npm version option: " VERSION_OPTION
NEW_VERSION=$(npm version $VERSION_OPTION)

if [ $? != 0 ]
then
  echo "Error trying to update package version"
  exit 1;
fi


# Confirmation step
CONTINUE=true

while $CONTINUE
do
  echo
  read -p "Do you want to publish the new version? (Type '$PACKAGE_NAME' to Confirm or Press CTRL+C to Exit): " CONFIRMED

  if [ "$CONFIRMED" == "$PACKAGE_NAME" ]
    then
      CONTINUE=false
    else
      echo "Answer invalid"
  fi
done


# Commit changes
git commit -am "chore(deploy): create package version -> $NEW_VERSION"
# Create git tag because npm version not create it when execute it in another directory of .git file
git tag -a "$NEW_VERSION" -m "Create package version -> $NEW_VERSION"
# Push git changes and tags to remote (There is a hook that will run a npm run build script before to push it)
git push --follow-tags

if [ $? != 0 ]
then
  echo "Error trying to push changes"
  exit 3;
fi


# Disable ssl check before publish to be sure
npm config set strict-ssl false
# Publish package to npm registry. Need to be login
npm --registry=$REGISTRY_URL publish "./dist/$PACKAGE_NAME"

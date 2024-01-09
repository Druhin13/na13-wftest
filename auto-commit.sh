#!/bin/bash

# Set the default commit message
COMMIT_MESSAGE="Automated build and bundling"

# Add changes to the staging area
git add -A

# Commit with the default message
git commit -m "$COMMIT_MESSAGE"

# Push to the remote repository
git push

# Print the script and link tags
REPO_NAME=$(git remote get-url origin | sed -n 's#.*/\([^/]*\)\.git#\1#p')
echo "<script src=\"https://${REPO_NAME}.vercel.app/dist/index.js\"></script>"
echo "<link rel=\"stylesheet\" href=\"https://${REPO_NAME}.vercel.app/dist/index.css\"></link>"

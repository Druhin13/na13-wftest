#!/bin/bash

# Set the default commit message
COMMIT_MESSAGE="Automated build and bundling"

# Add changes to the staging area
git add -A

# Commit with the default message
git commit -m "$COMMIT_MESSAGE"

# Push to the remote repository
git push

# Get the repository name from the Git remote URL
REPO_NAME=$(git remote get-url origin | sed -n 's#.*/\([^/]*\)\.git#\1#p')

# Create or update the README.md file with script and link tags
echo "<script src=\"https://${REPO_NAME}.vercel.app/dist/index.js\"></script>" > README.md
echo "<link rel=\"stylesheet\" href=\"https://${REPO_NAME}.vercel.app/dist/index.css\"></link>" >> README.md
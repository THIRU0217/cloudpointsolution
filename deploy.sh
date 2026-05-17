#!/bin/bash

set -e

echo "=========================================="
echo "Cloud Point Solutions - GitHub Deploy"
echo "=========================================="
echo ""

# Prompt for GitHub username
read -p "Enter your GitHub username: " OWNER
if [ -z "$OWNER" ]; then
  echo "Error: GitHub username cannot be empty."
  exit 1
fi

# Prompt for GitHub token
read -sp "Enter your GitHub personal access token (repo scope): " GITHUB_TOKEN
echo ""
if [ -z "$GITHUB_TOKEN" ]; then
  echo "Error: GitHub token cannot be empty."
  exit 1
fi

# Set repo name and directory
REPO="cloudpointsolution"
CDIR="$(pwd)"
REMOTE="git@github.com:${OWNER}/${REPO}.git"
DOMAIN="cloudpointsolution.com"

echo ""
echo "Configuration:"
echo "  Owner:    $OWNER"
echo "  Repo:     $REPO"
echo "  Domain:   $DOMAIN"
echo "  Remote:   $REMOTE"
echo ""

# Step 1: Create GitHub repo via API
echo "[1/6] Creating GitHub repository..."
REPO_RESPONSE=$(curl -s -X POST \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/user/repos \
  -d "{\"name\":\"${REPO}\",\"private\":false,\"description\":\"Cloud Point Solutions - Enterprise AI & SaaS\"}")

# Check if repo creation succeeded or already exists
if echo "$REPO_RESPONSE" | grep -q '"id"'; then
  echo "  ✓ Repository created/verified."
elif echo "$REPO_RESPONSE" | grep -q 'already exists'; then
  echo "  ✓ Repository already exists."
else
  echo "  ✗ Error creating repository:"
  echo "$REPO_RESPONSE"
  exit 1
fi

# Step 2: Configure git remote
echo "[2/6] Configuring git remote..."
git remote remove origin 2>/dev/null || true
git remote add origin "$REMOTE"
git branch -M main
echo "  ✓ Remote configured."

# Step 3: Push main branch
echo "[3/6] Pushing code to GitHub..."
git push -u origin main --force
echo "  ✓ Code pushed to main."

# Step 4: Build and deploy to gh-pages
echo "[4/6] Building and deploying to gh-pages..."
npm run deploy
echo "  ✓ Deployed to gh-pages."

# Step 5: Register custom domain with Pages
echo "[5/6] Registering custom domain with GitHub Pages..."
DOMAIN_RESPONSE=$(curl -s -X POST \
  -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/${OWNER}/${REPO}/pages/domains \
  -d "{\"domain\":\"${DOMAIN}\"}")

if echo "$DOMAIN_RESPONSE" | grep -q '"domain"'; then
  echo "  ✓ Custom domain registered: $DOMAIN"
elif echo "$DOMAIN_RESPONSE" | grep -q 'already exists'; then
  echo "  ✓ Domain already registered."
else
  echo "  ✗ Warning: Could not register domain. Response:"
  echo "$DOMAIN_RESPONSE"
fi

# Step 6: Check Pages status
echo "[6/6] Checking Pages configuration..."
PAGES_INFO=$(curl -s -H "Authorization: token ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  https://api.github.com/repos/${OWNER}/${REPO}/pages)

echo "  Pages Status:"
echo "$PAGES_INFO" | jq -r '.status, .cname, .https_enforced' 2>/dev/null || echo "$PAGES_INFO"

echo ""
echo "=========================================="
echo "✓ Deployment Complete!"
echo "=========================================="
echo ""
echo "Next steps:"
echo "1. Add DNS A records for $DOMAIN to your DNS provider:"
echo "   - 185.199.108.153"
echo "   - 185.199.109.153"
echo "   - 185.199.110.153"
echo "   - 185.199.111.153"
echo ""
echo "2. Wait 10-60 minutes for DNS propagation."
echo "3. Once DNS is live, GitHub will automatically enable HTTPS."
echo "4. Visit: https://${DOMAIN}"
echo ""
echo "Repository: https://github.com/${OWNER}/${REPO}"
echo ""

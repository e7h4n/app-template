# Preview Deployment Setup

This repository is configured to automatically create preview deployments for pull requests using Vercel and Neon database branches.

## How It Works

1. **Automatic Deployments Disabled**: Vercel's automatic Git deployments are disabled via `vercel.json`
2. **PR Opens**: When a PR is opened, the CI workflow:
   - Creates a new Neon database branch named `preview-pr-{PR_NUMBER}`
   - Runs database migrations on the branch
   - Deploys to Vercel with the branch database URL
   - Comments on the PR with deployment links
3. **PR Updates**: On new commits, the deployment is updated
4. **PR Closes**: When merged or closed, the Neon branch is automatically deleted

## Required GitHub Secrets

Configure these secrets in your GitHub repository settings:

### Vercel
- `VERCEL_TOKEN`: Your Vercel personal access token
  - Generate at: https://vercel.com/account/tokens
- `VERCEL_ORG_ID`: Your Vercel organization ID
  - Find in Vercel project settings → General → Project ID section
- `VERCEL_PROJECT_ID`: Your Vercel project ID
  - Find in Vercel project settings → General → Project ID section

### Neon
- `NEON_API_KEY`: Your Neon API key
  - Generate at: https://console.neon.tech/app/settings/api-keys
- `NEON_PROJECT_ID`: Your Neon project ID
  - Find in Neon console → Project Settings → General

## Initial Setup

1. Link your project to Vercel (one-time setup):
   ```bash
   npx vercel link
   ```

2. Set up your production database in Neon

3. Add all required secrets to GitHub

4. The workflow will automatically handle preview deployments for PRs

## Database Migrations

The workflow automatically runs migrations on preview branches using:
```bash
pnpm db:migrate
```

Make sure your migration scripts are configured in `turbo/apps/web/package.json`.
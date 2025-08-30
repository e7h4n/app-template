# Makita

A modern, production-ready monorepo template featuring TypeScript, Next.js, and automated CI/CD with comprehensive deployment tracking.

## 🚀 Quick Start

To create a new project from this template, copy and paste the following prompt to your preferred coding AI assistant:

```
I want to create a new project based on the Makita monorepo template. Please help me set up everything automatically.

Here's what I need you to do:
1. Ask me for my GitHub username and the new project name
2. Ask me for all the required tokens and secrets (tell me where to get each one)
3. Use GitHub CLI to create a new repository from the makita template
4. Use Vercel API to create web and docs projects automatically
5. Set up all repository secrets and variables using GitHub CLI
6. Replace all "makita" references in the code with my project name
7. Guide me through any additional setup steps

Required GitHub repository secrets (use `gh secret set`):
- NEON_API_KEY (get from: https://console.neon.tech/app/settings/api-keys)
- NPM_TOKEN (get from: https://www.npmjs.com/settings/tokens)  
- VERCEL_TOKEN (get from: https://vercel.com/account/tokens)
- DATABASE_URL (production database connection string from Neon)

Required GitHub repository variables (use `gh variable set`):
- NEON_PROJECT_ID (from your Neon project dashboard)
- VERCEL_TEAM_ID (from Vercel team settings, leave empty for personal account)
- VERCEL_PROJECT_ID_WEB (will be auto-created via Vercel API)
- VERCEL_PROJECT_ID_DOCS (will be auto-created via Vercel API)

Template repository: https://github.com/e7h4n/makita

Use Vercel API to automatically create:
- Web project: POST https://api.vercel.com/v11/projects with name "{project-name}-web"
- Docs project: POST https://api.vercel.com/v11/projects with name "{project-name}-docs"
- Get project IDs and set as VERCEL_PROJECT_ID_WEB and VERCEL_PROJECT_ID_DOCS

Please guide me through this process step by step, asking for one piece of information at a time and explaining what each token is used for.
```

After pasting this prompt, your coding AI will automatically:

- Create the repository from this template
- Set up Vercel projects for web and docs
- Configure all required secrets and environment variables
- Replace project names throughout the codebase
- Set up the complete CI/CD pipeline

## 🚀 Features

- **Type-Safe Monorepo**: Full TypeScript support with strict type checking across all packages
- **Modern Stack**: Next.js 15, React 19, Drizzle ORM, and Neon Database
- **Advanced CI/CD**: Automated builds, testing, and deployments with GitHub deployment tracking
- **Multi-Environment**: Preview environments for PRs with isolated database branches
- **Developer Experience**: Hot reload, comprehensive testing, and development containers

## 📁 Project Structure

```
turbo/
├── apps/
│   ├── cli/           # CLI tool (published to NPM)
│   ├── web/           # Next.js web application
│   └── docs/          # Documentation site (Fumadocs)
├── packages/
│   ├── core/          # Shared utilities and types
│   ├── ui/            # Reusable UI components
│   ├── eslint-config/ # ESLint configuration
│   └── typescript-config/ # TypeScript configuration
└── e2e/               # End-to-end tests
```

## 🛠 Applications

### Web Application (`apps/web`)
- **Framework**: Next.js 15 with React 19
- **Database**: Neon PostgreSQL with Drizzle ORM
- **Deployment**: Vercel with preview environments
- **Features**: Server-side rendering, API routes, database migrations

### CLI Tool (`apps/cli`)
- **Build**: TSup for fast TypeScript compilation
- **Distribution**: NPM package with binary executable
- **Features**: Commander.js for CLI interface, Chalk for styling

### Documentation (`apps/docs`)
- **Framework**: Fumadocs for modern documentation
- **Features**: MDX support, auto-generated navigation, search

## 🏗 Development

### Prerequisites
- Node.js 20+
- pnpm 9+

### Getting Started

```bash
# Install dependencies
cd turbo && pnpm install

# Start development servers
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Type checking
pnpm check-types
```

### Database Setup

```bash
# Generate migration files
cd turbo/apps/web && pnpm db:generate

# Run migrations
pnpm db:migrate

# Open Drizzle Studio
pnpm db:studio
```

## 🚀 Deployment

### Automated CI/CD
- **GitHub Actions**: Automated testing, building, and deployment
- **Preview Environments**: Automatic PR deployments with isolated database branches
- **Release Management**: Automated releases with release-please
- **Multi-Platform Testing**: Ubuntu and macOS E2E testing

### Environment Configuration

#### Repository Secrets
- `NEON_API_KEY`: Neon database API key
- `NPM_TOKEN`: NPM publishing token
- `VERCEL_TOKEN`: Vercel deployment token
- `DATABASE_URL`: Production database connection string

#### Repository Variables  
- `NEON_PROJECT_ID`: Neon database project ID
- `VERCEL_PROJECT_ID_WEB`: Vercel project ID for web app (auto-created via API)
- `VERCEL_PROJECT_ID_DOCS`: Vercel project ID for docs (auto-created via API)
- `VERCEL_TEAM_ID`: Vercel team identifier (optional, for team accounts)

### Deployment Targets
- **Web App**: Automatically deployed to Vercel on PR merge
- **CLI Package**: Published to NPM on release
- **Documentation**: Deployed to Vercel (if configured)

## 🧪 Testing

### Unit Tests
```bash
pnpm test          # Run all tests
pnpm test:watch    # Watch mode
pnpm test:ui       # Interactive UI
```

### E2E Tests
```bash
cd e2e && make test
```

## 🏛 Architecture Principles

### 1. Strict Type Safety
- Zero `any` types allowed
- Comprehensive TypeScript configuration
- Runtime validation with Zod

### 2. Monorepo Benefits
- Shared configurations and dependencies
- Consistent code quality across packages
- Efficient build caching with Turbo

### 3. Modern Deployment
- Preview environments for every PR
- Database branching for isolation
- Comprehensive deployment tracking

### 4. Developer Experience
- Fast hot reload with Turbopack
- Container-based development
- Automated code formatting and linting

## 📦 Package Management

This project uses **pnpm** with workspace protocol for efficient package management and **Turbo** for optimized builds and caching.


## 📄 License

This project is a template - feel free to use it as a starting point for your own projects.

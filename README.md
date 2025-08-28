# E7h4n's App Template

A modern monorepo template with strict typing, comprehensive testing support, and multi-language capabilities.

## Core Principles

### 1. Strict Typing
All code must be strictly typed with no compromises on type safety.

### 2. Comprehensive Testing Support
- All components are testable with unit tests
- All unit tests can run offline without external dependencies
- Full test isolation and no shared state

### 3. E2E Testing Isolation
End-to-end tests run in completely isolated environments without depending on shared resources.

### 4. Multi-Language Monorepo
Single repository supporting multiple programming languages and frameworks.

### 5. Dev Container & Codespace Friendly
Optimized for development in containers with full support for GitHub Codespaces and VS Code Dev Containers.

## Project Structure

```
turbo/
├── packages/
│   └── core/          # Shared dependencies package
├── apps/
│   ├── cli/           # NPM package example
│   └── web/           # Next.js application for Vercel
```

### Components

- **packages/core**: Common dependencies shared across all packages
- **apps/cli**: CLI tool example for NPM publishing
- **apps/web**: Next.js application deployed to Vercel

## Environment Configuration

### Secrets
- `NEON_API_KEY`: Database API key
- `NPM_TOKEN`: NPM authentication token
- `VERCEL_TOKEN`: Vercel deployment token

### Variables
- `NEON_PROJECT_ID`: Neon database project identifier
- `VERCEL_PROJECT_ID`: Vercel project identifier
- `VERCEL_TEAM_ID`: Vercel team identifier

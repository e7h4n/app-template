# Claude Code Project Guidelines

## Architecture Design Principles

### YAGNI (You Aren't Gonna Need It)
**This is a core principle for this project.** We follow the YAGNI principle strictly to keep the codebase simple and maintainable.

#### What this means:
- **Don't add functionality until it's actually needed**
- **Start with the simplest solution that works**
- **Avoid premature abstractions**
- **Delete unused code aggressively**

#### Examples in this project:
- Test helpers should only include functions that are actively used
- Configuration files should start minimal and grow as needed
- Avoid creating "utility" functions for single use cases
- Don't add "just in case" parameters or options

### Avoid Defensive Programming
**Let exceptions propagate naturally.** Don't wrap everything in try/catch blocks.

#### What this means:
- **Only catch exceptions when you can meaningfully handle them**
- **Let errors bubble up to where they can be properly addressed**
- **Avoid defensive try/catch blocks that just log and re-throw**
- **Trust the runtime and framework error handling**

#### Examples in this project:
- Database operations should fail fast if connection is broken
- File operations should naturally throw if permissions are wrong
- Don't wrap every async operation in try/catch
- Only use try/catch when you have specific error recovery logic

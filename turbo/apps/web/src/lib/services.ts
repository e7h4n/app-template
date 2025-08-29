import { getContainer } from "./container";

/**
 * Example of extending the container with additional services
 * 
 * Usage:
 * 1. Add new service types to the Services interface in container.ts
 * 2. Register the service here
 * 3. Use getService() to access it
 */

/**
 * Generic helper to get any service from the container
 */
export async function getService<K extends Parameters<ReturnType<typeof getContainer>["get"]>[0]>(
  name: K
): ReturnType<ReturnType<typeof getContainer>["get"]> {
  const container = getContainer();
  return container.get(name);
}

/**
 * Example: Register a cache service
 * 
 * First, add to Services interface in container.ts:
 * interface Services {
 *   ...
 *   cache: CacheService;
 * }
 * 
 * Then register it:
 * container.register("cache", () => new CacheService());
 */

/**
 * Example: Register an email service
 * 
 * container.register("email", async () => {
 *   const config = await container.get("config");
 *   return new EmailService(config.emailApiKey);
 * });
 */
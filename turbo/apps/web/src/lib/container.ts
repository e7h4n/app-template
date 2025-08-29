import type { Pool } from "pg";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";

interface Services {
  config: {
    databaseUrl: string;
    nodeEnv: "development" | "production" | "test";
  };
  pool: Pool;
  db: NodePgDatabase<any>;
}

type ServiceFactory<K extends keyof Services> = () => Services[K] | Promise<Services[K]>;

class ServiceContainer {
  private services: Partial<Services> = {};
  private factories: Partial<{ [K in keyof Services]: ServiceFactory<K> }> = {};
  private initializing: Partial<{ [K in keyof Services]: Promise<Services[K]> }> = {};

  register<K extends keyof Services>(
    name: K,
    factory: ServiceFactory<K>
  ): void {
    this.factories[name] = factory;
  }

  async get<K extends keyof Services>(name: K): Promise<Services[K]> {
    // Return cached service if exists
    if (this.services[name]) {
      return this.services[name] as Services[K];
    }

    // Wait for ongoing initialization
    if (this.initializing[name]) {
      return this.initializing[name] as Promise<Services[K]>;
    }

    // Initialize service
    const factory = this.factories[name];
    if (!factory) {
      throw new Error(`Service "${String(name)}" not registered`);
    }

    // Mark as initializing to prevent race conditions
    const initPromise = Promise.resolve(factory()).then((service) => {
      this.services[name] = service;
      delete this.initializing[name];
      return service;
    });

    this.initializing[name] = initPromise as Promise<Services[K]>;
    return initPromise;
  }

  has<K extends keyof Services>(name: K): boolean {
    return name in this.services || name in this.factories;
  }

  async close(): Promise<void> {
    // Clean up resources
    const pool = this.services.pool;
    if (pool) {
      await pool.end();
    }
    this.services = {};
    this.initializing = {};
  }
}

// Global container with development mode support
declare global {
  var __container: ServiceContainer | undefined;
}

function getContainer(): ServiceContainer {
  if (process.env.NODE_ENV === "development") {
    // Use global container in development to survive hot reloads
    if (!globalThis.__container) {
      globalThis.__container = new ServiceContainer();
    }
    return globalThis.__container;
  }

  // Production uses module-level singleton
  if (!container) {
    container = new ServiceContainer();
  }
  return container;
}

let container: ServiceContainer | undefined;

export { getContainer };
export type { Services, ServiceContainer };
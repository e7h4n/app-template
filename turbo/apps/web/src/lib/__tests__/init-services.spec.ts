import { describe, expect, it, beforeEach, vi, afterEach } from "vitest";
import type { Services } from "../../types/global";

interface MockServices {
  env: {
    DATABASE_URL: string;
    NODE_ENV: string;
  };
  pool: { mock: string };
  db: { mock: string };
}

let mockServices: MockServices | undefined;

// Mock initServices to avoid actual database connections
vi.mock("../init-services", () => {
  return {
    initServices: vi.fn(() => {
      if (!mockServices) {
        mockServices = {
          env: {
            DATABASE_URL: "postgresql://test:test@localhost:5432/test",
            NODE_ENV: "test",
          },
          pool: { mock: "pool" },
          db: { mock: "db" },
        };

        Object.defineProperty(globalThis, "services", {
          get() {
            if (!mockServices) {
              throw new Error(
                "Services not initialized. Call initServices() first.",
              );
            }
            return mockServices;
          },
          configurable: true,
        });
      }
    }),
  };
});

import { initServices } from "../init-services";

describe("initServices", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockServices = undefined;
    if ("services" in globalThis) {
      const descriptor = Object.getOwnPropertyDescriptor(
        globalThis,
        "services",
      );
      if (descriptor && descriptor.configurable) {
        delete (globalThis as { services?: Services }).services;
      }
    }
  });

  afterEach(() => {
    vi.clearAllMocks();
    mockServices = undefined;
  });

  it("should initialize services on globalThis", () => {
    expect((globalThis as { services?: Services }).services).toBeUndefined();

    initServices();

    const global = globalThis as unknown as { services: MockServices };
    expect(global.services).toBeDefined();
    expect(global.services.env).toBeDefined();
    expect(global.services.env.DATABASE_URL).toBe(
      "postgresql://test:test@localhost:5432/test",
    );
  });

  it("should not reinitialize if already initialized", () => {
    initServices();
    const global = globalThis as unknown as { services: MockServices };
    const firstEnv = global.services.env;

    initServices();
    const secondEnv = global.services.env;

    expect(firstEnv).toBe(secondEnv);
    expect(initServices).toHaveBeenCalledTimes(2);
  });

  it("should provide access to pool and db", () => {
    initServices();

    const global = globalThis as unknown as { services: MockServices };
    expect(global.services.pool).toBeDefined();
    expect(global.services.db).toBeDefined();
  });
});

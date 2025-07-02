import '@testing-library/jest-dom'
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function createMockRouter(overrides?: Partial<AppRouterInstance>): AppRouterInstance {
  return {
    push: jest.fn(),
    replace: jest.fn(),
    refresh: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    ...overrides,
  };
}
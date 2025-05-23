import { defineConfig } from 'vitest/config';

// shared config
export default defineConfig({
  test: {
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.stories.{ts,tsx}'],
    },
    mockReset: true,
    restoreMocks: true,
    unstubEnvs: true,
  },
});

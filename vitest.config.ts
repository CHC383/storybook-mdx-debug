import { defineConfig } from "vitest/config";

// shared config
export default defineConfig({
  test: {
    globals: true, // This is needed by @testing-library to be cleaned up after each test
    mockReset: true,
    restoreMocks: true,
    unstubEnvs: true,
  },
  // optimizeDeps: {
  //   include: ["react/jsx-runtime"],
  // },
});

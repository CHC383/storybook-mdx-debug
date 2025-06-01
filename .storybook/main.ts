import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.{ts,tsx}"],
  addons: ["@storybook/addon-vitest", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;

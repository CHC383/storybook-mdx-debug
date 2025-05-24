import type { StorybookConfig } from '@storybook/experimental-nextjs-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.{ts,tsx}'],
  addons: ['@storybook/addon-essentials', '@storybook/experimental-addon-test'],
  framework: {
    name: '@storybook/experimental-nextjs-vite',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;

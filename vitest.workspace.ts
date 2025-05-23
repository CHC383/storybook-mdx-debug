import mdx from '@mdx-js/rollup';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { storybookNextJsPlugin } from '@storybook/nextjs-vite/vite-plugin';
import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: 'vitest.config.ts',
    plugins: [
      // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
      storybookTest({ storybookScript: 'pnpm storybook --ci' }),
      // More info at: https://github.com/storybookjs/vite-plugin-storybook-nextjs
      storybookNextJsPlugin(),
      mdx(),
    ],
    test: {
      name: 'storybook',
      browser: {
        enabled: true,
        headless: true,
        provider: 'playwright',
        instances: [
          {
            browser: 'chromium',
          },
        ],
      },
      setupFiles: ['.storybook/vitest.setup.ts'],
      environment: 'jsdom',
    },
  },
]);

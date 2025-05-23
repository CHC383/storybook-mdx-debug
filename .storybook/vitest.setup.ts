import { setProjectAnnotations } from '@storybook/nextjs-vite';
import { beforeAll } from 'vitest';

import * as projectAnnotations from './preview';

// https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
const annotations = setProjectAnnotations([projectAnnotations]);

beforeAll(annotations.beforeAll);

import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './sanity/schemaTypes';
import { dataset, projectId, apiVersion } from './sanity/env';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  apiVersion,
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});

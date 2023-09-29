import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const {
  PUBLIC_SANITY_PROJECT_ID,
  PUBLIC_SANITY_DATASET,
  PUBLIC_SANITY_API_VERSION
} = loadEnv(process.env.NODE_ENV, process.cwd(), "");


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [sanity({
    projectId: PUBLIC_SANITY_PROJECT_ID,
    dataset: PUBLIC_SANITY_DATASET,
    apiVersion: PUBLIC_SANITY_API_VERSION,
    useCdn: false,
    studioBasePath: '/admin'
  })
  , react()]
});
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;
const title = process.env.NEXT_PUBLIC_SANITY_TITLE as string;
const basePath = process.env.NEXT_PUBLIC_SANITY_BASE_PATH as string;

const config = defineConfig({
  projectId,
  dataset,
  title,
  apiVersion,
  basePath,
  plugins: [deskTool()],
});

export default config;

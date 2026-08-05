import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import project from './schemas/project';
import service from './schemas/service';

export default defineConfig({
    name: 'default',
    title: 'Blambangan Website',
    projectId: 'w4qhjkc1',
    dataset: 'production',
    plugins: [
        structureTool(),
        visionTool(),
    ],
    schema: {
        types: [project, service],
    },
})
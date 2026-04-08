// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    // Make the page on the server
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
});

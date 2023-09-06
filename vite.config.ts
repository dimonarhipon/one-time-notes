import path from 'path';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/one-time-notes/',
	plugins: [
		react(),
		legacy({
			targets: ['defaults', 'not IE 11']
		}),
	],
	resolve: {
		alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {
				additionalData: '@import "./src/shared/styles/_vars.scss";',
				sassOptions: {
					includePaths: [path.resolve(__dirname, 'src/styles')],
				},
			},
		},
	},
	build: {
		sourcemap: true,
	},
	server: {
		proxy: {
			'/api': {
				target: process.env.VITE_BACKEND_URL,
				changeOrigin: true,
				secure: false,
				ws: true,
				rewrite: (path) => path.replace('/api/', ''),
			},
		},
	},
});

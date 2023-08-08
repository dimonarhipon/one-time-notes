import path from 'path';

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';

import 'dotenv/config';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/develop/',
	plugins: [
		react(),
		legacy({
			targets: ['defaults', 'not IE 11']
		}),
		createSvgIconsPlugin({
			iconDirs: [path.resolve(process.cwd(), 'public/icons')],
			symbolId: 'icon-[dir]-[name]',
			customDomId: 'svg-sprite',
			svgoOptions: {
				plugins: [
					{
						name: 'convertColors',
						params: {currentColor: true}
					}
				]
			}
		})
	],
	resolve: {
		alias: [{find: '@', replacement: path.resolve(__dirname, 'src')}],
	},
	css: {
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
});

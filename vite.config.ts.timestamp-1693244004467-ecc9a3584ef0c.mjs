// vite.config.ts
import path from "path";
import { defineConfig } from "file:///C:/Users/dimon/work/projects/one-time-notes/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/dimon/work/projects/one-time-notes/node_modules/@vitejs/plugin-react/dist/index.mjs";
import legacy from "file:///C:/Users/dimon/work/projects/one-time-notes/node_modules/@vitejs/plugin-legacy/dist/index.mjs";
import { createSvgIconsPlugin } from "file:///C:/Users/dimon/work/projects/one-time-notes/node_modules/vite-plugin-svg-icons/dist/index.mjs";
import "dotenv/config";
var __vite_injected_original_dirname = "C:\\Users\\dimon\\work\\projects\\one-time-notes";
var vite_config_default = defineConfig({
  base: "/one-time-notes/",
  plugins: [
    react(),
    legacy({
      targets: ["defaults", "not IE 11"]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), "public/icons")],
      symbolId: "icon-[dir]-[name]",
      customDomId: "svg-sprite",
      svgoOptions: {
        plugins: [
          {
            name: "convertColors",
            params: { currentColor: true }
          }
        ]
      }
    })
  ],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/shared/styles/_vars.scss";',
        sassOptions: {
          includePaths: [path.resolve(__vite_injected_original_dirname, "src/styles")]
        }
      }
    }
  },
  build: {
    sourcemap: true
  },
  server: {
    proxy: {
      "/api": {
        target: process.env.BACKEND_URL,
        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path2) => path2.replace("/api/", "")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkaW1vblxcXFx3b3JrXFxcXHByb2plY3RzXFxcXG9uZS10aW1lLW5vdGVzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxkaW1vblxcXFx3b3JrXFxcXHByb2plY3RzXFxcXG9uZS10aW1lLW5vdGVzXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9kaW1vbi93b3JrL3Byb2plY3RzL29uZS10aW1lLW5vdGVzL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG5pbXBvcnQge2RlZmluZUNvbmZpZ30gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBsZWdhY3kgZnJvbSAnQHZpdGVqcy9wbHVnaW4tbGVnYWN5JztcclxuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnO1xyXG5cclxuaW1wb3J0ICdkb3RlbnYvY29uZmlnJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblx0YmFzZTogJy9vbmUtdGltZS1ub3Rlcy8nLFxyXG5cdHBsdWdpbnM6IFtcclxuXHRcdHJlYWN0KCksXHJcblx0XHRsZWdhY3koe1xyXG5cdFx0XHR0YXJnZXRzOiBbJ2RlZmF1bHRzJywgJ25vdCBJRSAxMSddXHJcblx0XHR9KSxcclxuXHRcdGNyZWF0ZVN2Z0ljb25zUGx1Z2luKHtcclxuXHRcdFx0aWNvbkRpcnM6IFtwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3B1YmxpYy9pY29ucycpXSxcclxuXHRcdFx0c3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXHJcblx0XHRcdGN1c3RvbURvbUlkOiAnc3ZnLXNwcml0ZScsXHJcblx0XHRcdHN2Z29PcHRpb25zOiB7XHJcblx0XHRcdFx0cGx1Z2luczogW1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiAnY29udmVydENvbG9ycycsXHJcblx0XHRcdFx0XHRcdHBhcmFtczoge2N1cnJlbnRDb2xvcjogdHJ1ZX1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XSxcclxuXHRyZXNvbHZlOiB7XHJcblx0XHRhbGlhczogW3tmaW5kOiAnQCcsIHJlcGxhY2VtZW50OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9XSxcclxuXHR9LFxyXG5cdGNzczoge1xyXG5cdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG5cdFx0XHRzY3NzOiB7XHJcblx0XHRcdFx0YWRkaXRpb25hbERhdGE6ICdAaW1wb3J0IFwiLi9zcmMvc2hhcmVkL3N0eWxlcy9fdmFycy5zY3NzXCI7JyxcclxuXHRcdFx0XHRzYXNzT3B0aW9uczoge1xyXG5cdFx0XHRcdFx0aW5jbHVkZVBhdGhzOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9zdHlsZXMnKV0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRidWlsZDoge1xyXG5cdFx0c291cmNlbWFwOiB0cnVlLFxyXG5cdH0sXHJcblx0c2VydmVyOiB7XHJcblx0XHRwcm94eToge1xyXG5cdFx0XHQnL2FwaSc6IHtcclxuXHRcdFx0XHR0YXJnZXQ6IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMLFxyXG5cdFx0XHRcdGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuXHRcdFx0XHRzZWN1cmU6IGZhbHNlLFxyXG5cdFx0XHRcdHdzOiB0cnVlLFxyXG5cdFx0XHRcdHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoJy9hcGkvJywgJycpLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUErVCxPQUFPLFVBQVU7QUFFaFYsU0FBUSxvQkFBbUI7QUFDM0IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLDRCQUE0QjtBQUVyQyxPQUFPO0FBUFAsSUFBTSxtQ0FBbUM7QUFVekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1IsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ04sU0FBUyxDQUFDLFlBQVksV0FBVztBQUFBLElBQ2xDLENBQUM7QUFBQSxJQUNELHFCQUFxQjtBQUFBLE1BQ3BCLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsY0FBYyxDQUFDO0FBQUEsTUFDdEQsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLFFBQ1osU0FBUztBQUFBLFVBQ1I7QUFBQSxZQUNDLE1BQU07QUFBQSxZQUNOLFFBQVEsRUFBQyxjQUFjLEtBQUk7QUFBQSxVQUM1QjtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRCxDQUFDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1IsT0FBTyxDQUFDLEVBQUMsTUFBTSxLQUFLLGFBQWEsS0FBSyxRQUFRLGtDQUFXLEtBQUssRUFBQyxDQUFDO0FBQUEsRUFDakU7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNKLHFCQUFxQjtBQUFBLE1BQ3BCLE1BQU07QUFBQSxRQUNMLGdCQUFnQjtBQUFBLFFBQ2hCLGFBQWE7QUFBQSxVQUNaLGNBQWMsQ0FBQyxLQUFLLFFBQVEsa0NBQVcsWUFBWSxDQUFDO0FBQUEsUUFDckQ7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNOLFdBQVc7QUFBQSxFQUNaO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDUCxRQUFRLFFBQVEsSUFBSTtBQUFBLFFBQ3BCLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLElBQUk7QUFBQSxRQUNKLFNBQVMsQ0FBQ0EsVUFBU0EsTUFBSyxRQUFRLFNBQVMsRUFBRTtBQUFBLE1BQzVDO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJwYXRoIl0KfQo=

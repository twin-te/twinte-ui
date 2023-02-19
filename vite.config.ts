/// <reference types="vitest" />

import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      // 複数のエントリーポイントのディクショナリや配列にもできます
      entry: "src/main.ts",
      // 適切な拡張子が追加されます
      fileName: "twinte-ui",
      formats: ["es"],
    },
    rollupOptions: {
      // ライブラリにバンドルされるべきではない依存関係を
      // 外部化するようにします
      external: ["vue"],
    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  plugins: [vue(), dts()],
  test: {
    globals: true,
    environment: "happy-dom",
  },
});

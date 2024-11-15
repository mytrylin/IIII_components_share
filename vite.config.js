import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// import autoprefixer from 'autoprefixer';

/**
 * @param newFilename {string}
 * @returns {import('vite').Plugin}
 */

const renameIndexPlugin = newFilename => {
  if (!newFilename) return

  return {
    name: 'renameIndex',
    enforce: 'post',
    generateBundle(options, bundle) {
      const indexHtml = bundle['index.html']
      indexHtml.fileName = newFilename
    },
  };
};

export default ({ mode, command }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
    // console.log('process.env.VITE_API_ENV ', process.env.VITE_API_ENV );
    return defineConfig({
        base: process.env.VITE_BASE_URL, // 專案路徑
        plugins: [
          vue(),
          renameIndexPlugin('index.asp'),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        css: {
          devSourcemap: true, // 在開發環境中啟用 Source Map
          // postcss: {
          //   plugins: [
          //     autoprefixer({
          //       overrideBrowserslist: [
          //         '> 1%',            // 支持使用者佔有率大於 1% 的瀏覽器
          //         'last 2 versions', // 支持最近的兩個版本的瀏覽器
          //         'ie 11'            // 支持 IE 11
          //       ],
          //       flexbox: 'no-2009',   // 強制為舊的 flex 規範添加前綴
          //       grid: true            // 啟用 grid 前綴
          //     }),
          //   ],
          // },
          // preprocessorOptions: {
          //   scss: {
          //     // 自動引入多個全局 SCSS 檔案
          //     additionalData: `
          //       @import "@/assets/scss/style.scss";
          //     `
          //   },
          // },
      },
        build: {
            // sourcemap: false,
            minify: 'terser', // 使用 terser 進行壓縮
            terserOptions: {
                compress: {
                  drop_console: command === "build" && process.env.VITE_API_ENV === "prod",
                  drop_debugger: command === "build" && process.env.VITE_API_ENV === "prod",
                },
            },
            // outDir:'public',   // 指定輸出路徑
            // assetsDir: "wap", // 指定生成靜態資源的存放路徑
        },
        define: {
            'process.env': {},
        },
    });
};

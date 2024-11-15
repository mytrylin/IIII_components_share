export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        '> 1%',            // 支持使用者佔有率大於 1% 的瀏覽器
        'last 2 versions', // 支持最近的兩個版本的瀏覽器
        'ie 11'            // 支持 IE 11
      ],
      flexbox: 'no-2009',   // 強制為舊的 flex 規範添加前綴
      grid: true            // 啟用 grid 前綴
    },
  },
}

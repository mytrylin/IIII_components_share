/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'min320': '320px',
      // => @media (min-width: 320px) { ... }
      'min576': '576px',
      // => @media (min-width: 576px) { ... }
      'min768': '768px',
      // => @media (min-width: 768px) { ... }
      'min992': '992px',
      // => @media (min-width: 992px) { ... }
      'min1200': '1200px',
      // => @media (min-width: 1200px) { ... }
      'min1400': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    fontFamily: {
      'JhengHei': ['"Microsoft JhengHei"', 'sans-serif', 'Arial'],
      'NotoTC': ['"Noto Sans TC"', 'sans-serif', 'Arial'],
      'Roboto': ['Roboto', '"Noto Sans TC"', 'sans-serif', 'Arial'],
    },
    fontSize: {
      'Display1': '64px',
      'Display2': '56px',
      'Display3': '40px',
      'Title1': '36px',
      'Title2': '28px',
      'Title3': '24px',
      'Subtitle1': '20px',
      'Subtitle2': '18px',
      'Subtitle3': '17px',
      'Body1': '16px',
      'Body2': '15px',
      'Body3': '14px',
      'Caption1': '13px',
      'Caption2': '12px',
      'Caption3': '11px',
    },
    letterSpacing: {
      normal: '0',
      '0': '0px',
      '0.2': '0.2px',
      '0.15': '0.15px',
    },
    extend: {
      colors: {
        // ====== 企業色 ======
        'logo-red': '#e50012',
        // ====== brandColor/system/blue ======
        'System-blue-000': '#e9f0fd', // 常用於底色
        'System-blue-100': '#d2e0fb',
        'System-blue-150': '#bcd1f9',
        'System-blue-200': '#a6c2f7',
        'System-blue-300': '#79a3f4',
        'System-blue-400': '#4d85f0',
        'System-blue-500': '#2066ec', // Primary 主要色
        'System-blue-600': '#1a52bd',
        'System-blue-700': '#133d8e',
        'System-blue-800': '#0d295e',
        'System-blue-900': '#06142f',
        'System-blue-950': '#030a18',
        // ====== neutral/system/grey ======
        'System-grey-000': '#ffffff', // 純白
        'System-grey-050': '#f8f9fa', // 常用於背景底色
        'System-grey-100': '#e9ecef',
        'System-grey-200': '#ced4da',
        'System-grey-300': '#adb5bd',
        'System-grey-400': '#939da7',
        'System-grey-500': '#636e78', // 附屬文字色
        'System-grey-600': '#495057', // 次要文字色
        'System-grey-700': '#343a40',
        'System-grey-800': '#212529', // 主要文字色
        'System-grey-900': '#141618',
        'System-grey-1000': '#000000', // 純黑（少用）
        // ====== system/Background ======
        'System-Bg-000': '#f6fafa', // 用於頁面或卡片之底色
        // ====== system/Vibrant ======
        'System-red-000': '#fdedf0',
        'System-red-100': '#fbdbe0',
        'System-red-150': '#f9c9d1',
        'System-red-200': '#f7b7c1',
        'System-red-300': '#f293a3',
        'System-red-400': '#ee6f84',
        'System-red-500': '#ea4b65', // 主要色，收藏 icon 用色
        'System-red-600': '#cd2742',
        'System-red-700': '#a51028',
        'System-red-800': '#820f21',
        'System-red-850': '#590b17',
        'System-red-900': '#36040d',
        'System-red-950': '#200208',
        // ====== Base Color / Orange ======
        'Base-Color-Orange-bg': '#fff8f5', // 可用於背景色
        'Base-Color-Orange-bg-2': '#ffe0d1',
        'Base-Color-Orange-light-1': '#ffaa80',
        'Base-Color-Orange-bright': '#ff722b',
        'Base-Color-Orange': '#f25b3d',
        'Base-Color-Orange-dark': '#d9482b',
        // ====== Base Color / Yellow ======
        'Base-Color-Yellow-bg': '#fffbf0', // 可用於背景色
        'Base-Color-Yellow-light-2': '#ffecb2',
        'Base-Color-Yellow-light-1': '#ffd966',
        'Base-Color-Yellow-bright': '#ffbf00',
        'Base-Color-Yellow': '#e08e00',
        'Base-Color-Yellow-dark': '#bf7300',
        // ====== Base Color / Teal ======
        'Base-Color-Teal-bg': '#f0faf9', // 可用於背景色
        'Base-Color-Teal-light-2': '#c7f2ef',
        'Base-Color-Teal-light-1': '#73e5e5',
        'Base-Color-Teal-bright': '#2bd9d9',
        'Base-Color-Teal': '#00b2b2',
        'Base-Color-Teal-dark': '#03a1a1',
        // ====== Base Color / Cyan ======
        'Base-Color-Cyan-bg': '#f2fbff', // 可用於背景色
        'Base-Color-Cyan-light-2': '#cceeff',
        'Base-Color-Cyan-light-1': '#66ccff',
        'Base-Color-Cyan-bright': '#1ab2ff',
        'Base-Color-Cyan': '#009ceb',
        'Base-Color-Cyan-dark': '#0088cc',
        // ====== Base Color / Magenta ======
        'Base-Color-Magenta-bg': '#fff5fb', // 可用於背景色
        'Base-Color-Magenta-light-2': '#ffd1ed',
        'Base-Color-Magenta-light-1': '#ff99d6',
        'Base-Color-Magenta-bright': '#ff1aa3',
        'Base-Color-Magenta': '#e0098a',
        'Base-Color-Magenta-dark': '#b21272',
        // ====== Base Color / Purple ======
        'Base-Color-Purple-bg': '#f7f5ff', // 可用於背景色
        'Base-Color-Purple-light-2': '#e9e0fe',
        'Base-Color-Purple-light-1': '#c6adff',
        'Base-Color-Purple-bright': '#824dff',
        'Base-Color-Purple': '#6b38e0',
        'Base-Color-Purple-dark': '#522bad',
      },
      lineHeight: {
        '130': '130%',
        '150': '150%',
        '160': '160%',
      },
      backgroundSize: {
        '24px': '24px',
        '26px': '26px',
      },
      backgroundImage: {
        'icon-category': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-category-b.svg')",
        'icon-map': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-map-b.svg')",
        'icon-filter': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-filter-b.svg')",
        'icon-arrow-left': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-arrow-left-b.svg')",
        'icon-bold-warning': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-bold-warning-b.svg')",
        'icon-bell': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-bell-b.svg')",
        'icon-account': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-account-b.svg')",
        'icon-company': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-company-b.svg')",
        'icon-language': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-language-b.svg')",
        'icon-menu': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-menu-b.svg')",
        'icon-close': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-close-b.svg')",
        'icon-fb': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-facebook-b.svg')",
        'icon-ig': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-instagram-b.svg')",
        'icon-fb-original': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-facebook.svg')",
        'icon-ig-original': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-instagram.svg')",
        'icon-folded': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-folded-b.svg')",
        'icon-unfolded': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-unfolded-b.svg')",
        'icon-close': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-close-b.svg')",
        'icon-search': "url('https://images.1111.com.tw/event/img/zone/1111site/public/icon-search-b.svg')",
        'backward': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/backward.svg')",
        'backward-disabled': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/backward_no.svg')",
        'gofirst': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/gofirst.svg')",
        'gofirst-disabled': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/gofirst_no.svg')",
        'forward': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/forward.svg')",
        'forward-disabled': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/forward_no.svg')",
        'golast': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/golast.svg')",
        'golast-disabled': "url('https://images.1111.com.tw/event/img/event24/salarycomparison/golast_no.svg')",
        'icon-favorite': "url('https://www.1111.com.tw/Content2/assets/images/icon/Btn-AddtoFav-Default.svg')",
        'icon-favorite-hover': "url('https://www.1111.com.tw/Content2/assets/images/icon/Btn-AddtoFav-Hover.svg')",
        'radio-checked': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%231383B5'/%3e%3c/svg%3e\")"
      },
      boxShadow: {
        'qtb-shadow': '0px 2px 6px 0px rgba(0, 0, 0, 0.15)'
      },
      transitionDuration: {
        '350': '350ms',
      }
    },
  },
  plugins: [],
}


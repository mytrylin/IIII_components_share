<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, defineProps, defineEmits } from 'vue';
import twDropdown from '@/components/twDropdown.vue';
import twSideMenu from '@/components/twSideMenu.vue';

// 接收 props
const props = defineProps({
  userName: String,
  userImage: String,
  isLoggedIn: Boolean,
  bellItems: Array
});

// 定義 emit 事件
const emit = defineEmits(['loginStatusChanged']);

// 登入處理函數
const loginHandler = () => {
  emit('loginStatusChanged');
};

// groupedCategory
const groupedCategoryItem = ref([
  {
    "id": "1",
    "title": "地區",
    "txt": "中部找工作",
    "link": "#"
  },
  {
    "id": "2",
    "title": "地區",
    "txt": "南部找工作",
    "link": "#"
  },
  {
    "id": "3",
    "title": "工作型態",
    "txt": "轉職專區",
    "link": "#"
  },
  {
    "id": "4",
    "title": "工作型態",
    "txt": "兼差打工",
    "link": "#"
  },
  {
    "id": "5",
    "title": "工作型態",
    "txt": "實習專區",
    "link": "#"
  },
  {
    "id": "6",
    "title": "工作型態",
    "txt": "家教網",
    "link": "#"
  },
  {
    "id": "7",
    "title": "工作型態",
    "txt": "接案外包",
    "link": "#"
  },
  {
    "id": "8",
    "title": "工作型態",
    "txt": "人才派遣",
    "link": "#"
  },
  {
    "id": "9",
    "title": "熱門",
    "txt": "遠距工作",
    "link": "#"
  },
  {
    "id": "10",
    "title": "熱門",
    "txt": "無經驗可",
    "link": "#"
  },
  {
    "id": "11",
    "title": "熱門",
    "txt": "月薪四萬起↑",
    "link": "#"
  },
  {
    "id": "12",
    "title": "熱門",
    "txt": "固定休六日",
    "link": "#"
  },
  {
    "id": "13",
    "title": "熱門",
    "txt": "年薪14個月",
    "link": "#"
  },
  {
    "id": "14",
    "title": "熱門",
    "txt": "行政工作",
    "link": "#"
  },
  {
    "id": "15",
    "title": "熱門",
    "txt": "醫護專屬職缺",
    "link": "#"
  },
  {
    "id": "16",
    "title": "熱門",
    "txt": "限時回應職缺",
    "link": "#"
  },
  {
    "id": "17",
    "title": "身份",
    "txt": "校園徵才",
    "link": "#"
  },
  {
    "id": "18",
    "title": "身份",
    "txt": "社會新鮮人",
    "link": "#"
  },
  {
    "id": "19",
    "title": "身份",
    "txt": "中高階獵才",
    "link": "#"
  },
  {
    "id": "20",
    "title": "身份",
    "txt": "研發替代役",
    "link": "#"
  },
  {
    "id": "21",
    "title": "身份",
    "txt": "公職考訊",
    "link": "#"
  },
  {
    "id": "22",
    "title": "身份",
    "txt": "教職網",
    "link": "#"
  },
  {
    "id": "23",
    "title": "身份",
    "txt": "大學網",
    "link": "#"
  },
  {
    "id": "24",
    "title": "身份",
    "txt": "接受身障",
    "link": "#"
  },
  {
    "id": "25",
    "title": "企業",
    "txt": "幸福企業",
    "link": "#"
  },
  {
    "id": "26",
    "title": "企業",
    "txt": "外商專區",
    "link": "#"
  }
]);

const groupedCategory = computed(() => {
  return groupedCategoryItem.value.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    };
    acc[item.title].push(item);
    return acc;
  }, {});
});

// groupedUserCard
const groupedUserCard = ref([
  {
    "id": "1",
    "title": "企業通知",
    "link": "#"
  },
  {
    "id": "2",
    "title": "履歷總覽",
    "link": "#"
  },
  {
    "id": "3",
    "title": "自我推薦函",
    "link": "#"
  },
  {
    "id": "4",
    "title": "面試管理",
    "link": "#"
  },
  {
    "id": "5",
    "title": "主動應徵紀錄",
    "link": "#"
  },
  {
    "id": "6",
    "title": "封鎖產業及公司",
    "link": "#"
  }
]);

// groupedCompany
const groupedCompany = ref([
  {
    "id": "1",
    "title": "招募服務介紹",
    "link": "#"
  },
  {
    "id": "2",
    "title": "刊登價格方案",
    "link": "#"
  },
  {
    "id": "3",
    "title": "我要刊登職缺",
    "link": "#"
  },
  {
    "id": "4",
    "title": "求才系統登入",
    "link": "#"
  }
]);

// groupedCompanyImg
const groupedCompanyImg = ref([
  {
    "id": "1",
    "title": "公司廣告",
    "link": "#",
    "src": "https://images.1111.com.tw/event/img/zone/1111site/public/company-login-img.webp"
  }
]);

// groupedLanguage
const groupedLanguage = ref([
  {
    "id": "1",
    "lang": "繁體中文",
    "img": "flag-ZH.svg",
    "title": "回到繁體中文",
    "link": "https://www.1111.com.tw/"
  },
  {
    "id": "2",
    "lang": "ENGLISH",
    "img": "flag-EN.svg",
    "title": "English Version",
    "link": "https://www.1111.com.tw/Expats/"
  }
]);

// sideMenu JS
// 側邊選單是否可見
const isSideMenuVisible = ref(false); // 黑底
const isSideMenuContentVisible = ref(false); // 側邊選單

// 點擊切換 sideMenu
const toggleSideMenu = async () => {
  if (!isSideMenuVisible.value) { // 開啟
    isSideMenuVisible.value = !isSideMenuVisible.value;
    await nextTick(); // 等待 DOM 更新
    if (!isSideMenuContentVisible.value) {
      setTimeout(() => {
        isSideMenuContentVisible.value = !isSideMenuContentVisible.value;
      }, 0);
    };
  } else { // 關閉
    if (isSideMenuContentVisible.value) {
      isSideMenuContentVisible.value = !isSideMenuContentVisible.value;
    };
    await nextTick(); // 等待 DOM 更新
    setTimeout(() => {
      isSideMenuVisible.value = !isSideMenuVisible.value;
    }, 0);
  };
};

// Google 翻譯
const menuLanguage = ref(null);
const isScriptLoaded = ref(null); // 標誌來跟蹤腳本是否已加載
let scriptElement = null; // 用來儲存腳本元素

const observer = new MutationObserver(() => {
  const menu = document.querySelector('.tw-dropdown-language .tw-dropdown-menu');
  menuLanguage.value = menu ? true : false;

  if (menu && !isScriptLoaded.value) {
    // 當菜單顯示且腳本尚未加載時，載入 Google 翻譯腳本
    scriptElement = document.createElement('script');
    scriptElement.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(scriptElement);
    isScriptLoaded.value = true; // 設置標誌為已加載
    // 設置 onload 事件處理器
    scriptElement.onload = () => {
      // 確保 googleTranslateElementInit 在全局範圍內可訪問
      window.googleTranslateElementInit = () => {
        // 確保 google.translate.TranslateElement 可用
        if (typeof google !== 'undefined' && google.translate && google.translate.TranslateElement) {
          new google.translate.TranslateElement({
            pageLanguage: 'zh-TW', // 頁面主要語言
            includedLanguages: 'zh-TW,en,vi,id', // 包含的語言
          }, 'google_translate_element');
        };
      };
      // 調用初始化函數
      googleTranslateElementInit();
    };
  } else if (!menu && isScriptLoaded.value) {
    // 當菜單隱藏且腳本已加載時，移除腳本
    if (scriptElement && scriptElement.parentNode) { // 確保 scriptElement 仍在 DOM 中
      document.body.removeChild(scriptElement); // 使用儲存的元素進行移除
      isScriptLoaded.value = false; // 設置標誌為未加載
      scriptElement = null; // 重置腳本元素變量
    }
  }
});

onMounted(() => {
  observer.observe(document.body, { childList: true, subtree: true });
});

onUnmounted(() => {
  observer.disconnect();
});

</script>

<template>
  <header class="sticky top-0 z-[999] box-border w-full h-[64px] bg-System-grey-000 transition-none">
    <div
      class="flex justify-between items-center flex-row flex-nowrap size-full max-w-[calc(100%-48px)] min768:max-w-[736px] min992:max-w-[960px] min1200:max-w-[1120px] min1400:max-w-[1320px] mx-[24px] min768:mx-auto">
      <a href="https://www.1111.com.tw/" target="_self" title="1111人力銀行">
        <img class="v-footer-logo" src="https://images.1111.com.tw/event/img/zone/1111site/public/logo.svg"
          title="1111人力銀行" alt="1111人力銀行" width="118" height="28" loading="eager" decoding="auto" />
      </a>
      <div
        class="hidden min576:flex justify-start items-center gap-[6px] min576:gap-[8px] min768:gap-[16px] min992:gap-[12px] min1200:gap-[16px] h-full ml-[16px] min576:ml-[32px] min768:ml-[36px] min992:ml-[52px] min1200:ml-[115px] mr-auto text-System-grey-700 Chinese-Medium-Body3 min768:Chinese-Medium-Body1">
        <twDropdown class="tw-dropdown-category">
          <template #toggle>
            <i class="tw-icon bg-icon-category tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
            <span class="hidden min1200:inline">主題找工作</span>
          </template>
          <template #menu>
            <div class="flex justify-start items-start flex-col w-full max-w-[calc((100%-(4*12px))/5)]"
              v-for="(items, title) in groupedCategory" :key="title">
              <p class="p-0 m-0 text-System-grey-800 Chinese-Regular-Caption2">{{ title }}</p>
              <ol>
                <li class="p-0 m-0 text-System-grey-800 Chinese-Regular-Body1" v-for="item in items" :key="item.id">
                  <a :href="item.link" target="_blank" :title="item.txt">{{ item.txt }}</a>
                </li>
              </ol>
            </div>
          </template>
        </twDropdown>
        <a class="tw-nav-link" href="https://www.1111.com.tw/jobmap/" target="_blank" title="地圖找工作">
          <i class="tw-icon bg-icon-map tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
          <span class="hidden min1200:inline">地圖找工作</span>
        </a>
        <a class="tw-nav-link" href="https://www.1111.com.tw/search/category" target="_blank" title="分類找工作">
          <i class="tw-icon bg-icon-filter tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
          <span class="hidden min1200:inline">分類找工作</span>
        </a>
      </div>
      <div
        class="flex justify-start items-center gap-[6px] min576:gap-[8px] min768:gap-[16px] min992:gap-[12px] min1200:gap-[16px] h-full ml-auto mr-0 text-System-grey-700 Chinese-Medium-Body3 min768:Chinese-Medium-Body1">
        <a class="tw-nav-link v-nav-unLogin relative h-full mr-[6px] min576:mr-[16px] min768:mr-[16px] min992:mr-[12px] min1200:mr-[16px] after:content-[''] after:absolute after:right-0 after:block after:w-[1px] after:h-[24px] after:mr-[calc(0px-6px)] min576:after:mr-[calc(0px-16px)] min768:after:mr-[calc(0px-16px)] min992:after:mr-[calc(0px-12px)] min1200:after:mr-[calc(0px-16px)] after:bg-System-grey-200"
          href="javascript:;" target="_self" title="求職登入 / 註冊" @click="loginHandler" v-if="!props.isLoggedIn">
          <i class="tw-icon bg-icon-account tw-icon-grey-1 size-[32px] aspect-square bg-24px"></i>
          <span class="inline break-keep whitespace-nowrap">求職登入 / 註冊</span>
        </a>
        <div
          class="static min768:relative flex justify-center items-center flex-row flex-nowrap gap-[16px] h-full mr-[6px] min576:mr-[16px] min768:mr-[16px] min992:mr-[12px] min1200:mr-[16px] after:content-[''] after:absolute after:right-0 after:block after:w-[1px] after:h-[24px] after:mr-[calc(0px-6px)] min576:after:mr-[calc(0px-16px)] min768:after:mr-[calc(0px-16px)] min992:after:mr-[calc(0px-12px)] min1200:after:mr-[calc(0px-16px)] after:bg-System-grey-200"
          v-else>
          <twDropdown class="tw-dropdown-bell">
            <template #toggle>
              <i class="tw-icon bg-icon-bell tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
              <span
                class="absolute flex justify-center items-center w-fit h-[15px] min-w-[15px] p-[2px] scale-[.9] translate-x-[12px] translate-y-[-12px] rounded-full text-System-grey-100 Chinese-Medium-Caption3 bg-logo-red after:content-[attr(data-after)]"
                :data-after="bellItems.length" v-if="bellItems.length > 0"></span>
            </template>
            <template #menu>
              <div
                class="flex justify-start items-start flex-col flex-nowrap w-full max-w-full *:w-full *:max-w-full *:box-border">
                <div
                  class="inline-flex justify-center items-center px-0 py-[12px] text-System-grey-800 Chinese-Medium-Subtitle2">
                  <p class="v-bell-txt">企業通知</p>
                </div>
                <div class="tw-bell-body max-h-[350px] p-[10px] overflow-y-auto bg-System-grey-100"
                  v-if="bellItems.length <= 0">
                  <div
                    class="flex justify-start items-center flex-col flex-nowrap gap-[10px] w-full p-[40px] box-border text-center"
                    v-if="bellItems.length <= 0">
                    <img src="https://images.1111.com.tw/event/img/zone/1111site/public/icon-bell-no.webp" title="企業通知"
                      alt="企業通知" width="85" height="80" loading="lazy" decoding="async" />
                    <p class="text-logo-red Chinese-Regular-Subtitle2">您尚未收到企業通知</p>
                    <p class="text-System-grey-700 Chinese-Medium-Body1"><a
                        class="inline text-System-blue-400 underline" href="#" target="_blank">開啟履歷</a>或主動應徵可以提升您的面試機會唷!
                    </p>
                  </div>
                </div>
                <template v-else>
                  <div class="tw-bell-body max-h-[350px] p-[10px] overflow-y-auto bg-System-grey-100">
                    <ul
                      class="flex justify-start items-start flex-col flex-nowrap gap-[10px] w-full max-w-full box-border">
                      <li v-for="item in bellItems" :key="item.id" class="w-full max-w-full box-border">
                        <a class="flex justify-between items-stretch flex-row flex-wrap gap-[6px_3px] w-full max-w-full px-[10px] py-[20px] box-border rounded-[8px] bg-System-grey-000 border-[3px] border-solid border-System-grey-000 hover:border-System-blue-150 hover:shadow-[2px_5px_15px_rgba(0,0,0,.161)]"
                          :href="item.link" target="_blank">
                          <p class="w-fit text-System-blue-500 Chinese-Regular-Subtitle2 text-start">{{ item.caption }}
                          </p>
                          <span class="w-fit text-System-grey-500 Chinese-Regular-Body1 text-end">{{ item.time }}</span>
                          <p class="w-full max-w-full text-System-grey-800 Chinese-Medium-Subtitle2 text-start">{{
                            item.title }}</p>
                          <p class="w-full max-w-full text-System-grey-500 Chinese-Medium-Body1 text-start">{{
                            item.subtitle }}</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="inline-flex justify-center items-center px-0 py-[10px]">
                    <a class="px-[32px] py-[8px] text-System-blue-500 Chinese-Regular-Body1 bg-System-blue-150 rounded-full"
                      href="javascript:;" target="_self">查看全部</a>
                  </div>
                </template>
              </div>
            </template>
          </twDropdown>
          <twDropdown class="tw-dropdown-user flex justify-start items-center">
            <template #toggle>
              <div class="size-[32px] aspect-square overflow-hidden rounded-full">
                <img class="w-full h-full max-w-full max-h-full object-cover" :src="props.userImage"
                  :title="props.userName" :alt="props.userName" width="32" height="32" loading="lazy"
                  decoding="async" />
              </div>
              <span class="hidden min768:inline">{{ props.userName }}</span>
            </template>
            <template #menu>
              <div
                class="flex justify-start items-start flex-col flex-nowrap gap-0 w-full max-w-full *:w-full *:max-w-full *:box-border">
                <div class="flex justify-start items-center flex-row gap-[15px] p-[20px] ">
                  <div
                    class="size-[56px] aspect-square rounded-full border-[2px] border-solid border-System-blue-300 overflow-hidden">
                    <img :src="props.userImage" :title="props.userName" :alt="props.userName" width="56" height="56"
                      loading="lazy" decoding="async" />
                  </div>
                  <div class="flex justify-start items-start flex-col gap-[10px]">
                    <p class="text-System-grey-800 Chinese-Medium-Body">{{ props.userName }}，您好！</p>
                    <a class="inline-flex justify-center items-center px-[12px] py-[6px] rounded-full bg-System-blue-300 text-System-grey-000 Chinese-Medium-Body1"
                      href="#" target="_self">會員中心</a>
                  </div>
                </div>
                <div
                  class="flex justify-start items-center flex-col w-full max-w-full px-0 py-[12px] bg-System-red-200">
                  <p
                    class="inline-flex items-center gap-[3px] p-0 m-0 text-System-grey-600 Chinese-Regular-Body2 align-middle">
                    <i
                      class="tw-icon bg-icon-bold-warning tw-icon-red-1 size-[24px] aspect-square bg-24px"></i>廠商還看不到你的履歷！
                  </p>
                  <a class="text-System-grey-600 Chinese-Medium-Body1 underline" href="#" target="_self">來去開啟履歷</a>
                </div>
                <div
                  class="flex justify-between items-start flex-row flex-wrap gap-[10px] max-h-[350px] p-[10px] bg-System-grey-100">
                  <p class="text-System-grey-500 Chinese-Medium-Body1">我的捷徑</p>
                  <a class="text-System-grey-500 Chinese-Medium-Body1 underline" href="#" target="_self">編輯</a>
                  <ul
                    class="flex justify-start items-start flex-row flex-wrap gap-[10px] w-full max-w-full *:w-full *:h-[60px] *:max-w-[calc((100%-(2*10px))/3)] *:box-border">
                    <li
                      class="flex justify-self-center self-stretch content-center text-System-grey-600 Chinese-Medium-Body2"
                      v-for="item in groupedUserCard" :key="item.id">
                      <a class="flex justify-center items-center w-full max-w-full p-[6px] rounded-[8px] bg-System-grey-000"
                        :href="item.link" target="_self" :title="item.title">{{ item.title }}</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <a class="flex justify-center items-center w-full p-[10px] m-[10px] box-border text-System-grey-500 Chinese-Medium-Body1"
                    href="javascript:;" target="_self" @click="loginHandler">登出</a>
                </div>
              </div>
            </template>
          </twDropdown>
        </div>
        <twDropdown class="tw-dropdown-company">
          <template #toggle>
            <i class="tw-icon bg-icon-company tw-icon-grey-1 size-[32px] aspect-square bg-24px"></i>
            <span class="inline">企業求才</span>
          </template>
          <template #menu>
            <ul class="w-full px-[8px]">
              <li
                class="block rounded-[16px] break-keep *:flex *:justify-center *:items-center *flex-row *:flex-nowrap *:gap-[10px] *:w-full *:h-full *:box-border *:px-[12px] *:py-[8px] *:rounded-[16px]"
                v-for="item in groupedCompany" :key="item.id">
                <a class="Chinese-Regular-Body1 bg-transparent hover:bg-System-grey-100" :href="item.link"
                  target="_blank" :title="item.title">{{ item.title }}</a>
              </li>
              <hr class="w-full my-[10px] bg-System-grey-100" />
              <li class="w-full h-full p-0 rounded-[8px] overflow-hidden">
                <a :href="groupedCompanyImg[0].link" target="_blank" :title="groupedCompanyImg[0].title">
                  <img :src="groupedCompanyImg[0].src" :title="groupedCompanyImg[0].title"
                    :alt="groupedCompanyImg[0].title" width="200" height="70" loading="lazy" decoding="async" />
                </a>
              </li>
            </ul>
          </template>
        </twDropdown>
        <twDropdown class="tw-dropdown-language">
          <template #toggle>
            <i class="tw-icon bg-icon-language tw-icon-grey-1 size-[32px] aspect-square bg-24px"></i>
            <span class="hidden min768:inline">ENG</span>
          </template>
          <template #menu>
            <ul class="w-full px-[8px]">
              <li
                class="block rounded-[16px] break-keep *:flex *:justify-start *:items-center *flex-row *:flex-nowrap *:gap-[10px] *:w-full *:h-full *:box-border *:px-[12px] *:py-[8px] *:rounded-[16px]"
                v-for="item in groupedLanguage" :key="item.id">
                <a class="bg-transparent hover:bg-System-grey-100" :href="item.link" target="_blank"
                  :title="item.title">
                  <img :src="`https://images.1111.com.tw/event/img/zone/1111site/public/${item.img}`" :title="item.lang"
                    :alt="item.lang" width="20" height="20" loading="lazy" decoding="async" />
                  {{ item.title }}
                </a>
              </li>
              <li class="tw-language-google w-full max-w-full px-[8px] py-0">
                <div id="google_translate_element"></div>
              </li>
            </ul>
          </template>
        </twDropdown>
        <button class="tw-nav-link" href="javascript:;" target="_self" title="menu" @click="toggleSideMenu">
          <i class="tw-icon bg-icon-menu tw-icon-grey-1 size-[32px] aspect-square bg-24px"></i>
        </button>
        <Teleport to="body">
          <Transition name="tw-sideMenu" enter-active-class="transition-all duration-350 ease-in-out"
            enter-from-class="opacity-0" enter-to-class="opacity-100"
            leave-active-class="transition-all duration-350 ease-in-out" leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <twSideMenu v-if="isSideMenuVisible" :class="{ show: isSideMenuVisible }"
              :isSideMenuVisible="isSideMenuVisible" :isSideMenuContentVisible="isSideMenuContentVisible"
              @close-menu="toggleSideMenu"></twSideMenu>
          </Transition>
        </Teleport>
      </div>
    </div>
  </header>
</template>

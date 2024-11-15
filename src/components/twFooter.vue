<script setup>
import { ref, computed } from 'vue';

// footerCollapseBody
const footerCollapseBody = ref([
  {
    "id": "1",
    "title": "求職",
    "txt": "中部專區",
    "link": "#"
  },
  {
    "id": "2",
    "title": "求職",
    "txt": "南部專區",
    "link": "#"
  },
  {
    "id": "3",
    "title": "求職",
    "txt": "兼差打工",
    "link": "#"
  },
  {
    "id": "4",
    "title": "求職",
    "txt": "高階獵頭",
    "link": "#"
  },
  {
    "id": "5",
    "title": "求職",
    "txt": "家教網",
    "link": "#"
  },
  {
    "id": "6",
    "title": "求職",
    "txt": "外包網",
    "link": "#"
  },
  {
    "id": "7",
    "title": "求職",
    "txt": "求職QA",
    "link": "#"
  },
  {
    "id": "8",
    "title": "求才",
    "txt": "企業註冊",
    "link": "#"
  },
  {
    "id": "9",
    "title": "求才",
    "txt": "徵才方案",
    "link": "#"
  },
  {
    "id": "10",
    "title": "求才",
    "txt": "人才試搜",
    "link": "#"
  },
  {
    "id": "11",
    "title": "求才",
    "txt": "廣告合作",
    "link": "#"
  },
  {
    "id": "12",
    "title": "求才",
    "txt": "線上客服",
    "link": "#"
  },
  {
    "id": "13",
    "title": "求才",
    "txt": "求才QA",
    "link": "#"
  },
  {
    "id": "14",
    "title": "職涯資源",
    "txt": "科技島",
    "link": "#"
  },
  {
    "id": "15",
    "title": "職涯資源",
    "txt": "幸福企業",
    "link": "#"
  },
  {
    "id": "16",
    "title": "職涯資源",
    "txt": "OPT歐趴糖",
    "link": "#"
  },
  {
    "id": "17",
    "title": "職涯資源",
    "txt": "職涯論壇",
    "link": "#"
  },
  {
    "id": "18",
    "title": "職涯資源",
    "txt": "產經新聞",
    "link": "#"
  },
  {
    "id": "19",
    "title": "職涯資源",
    "txt": "進修網",
    "link": "#"
  },
  {
    "id": "20",
    "title": "職涯資源",
    "txt": "面試經驗談",
    "link": "#"
  },
  {
    "id": "21",
    "title": "關於1111",
    "txt": "網站指引",
    "link": "#"
  },
  {
    "id": "22",
    "title": "關於1111",
    "txt": "1111簡介",
    "link": "#"
  },
  {
    "id": "23",
    "title": "關於1111",
    "txt": "加入1111",
    "link": "#"
  },
  {
    "id": "24",
    "title": "關於1111",
    "txt": "合作提案",
    "link": "#"
  },
  {
    "id": "25",
    "title": "關於1111",
    "txt": "電子報訂閱",
    "link": "#"
  },
  {
    "id": "26",
    "title": "關於1111",
    "txt": "隱私權保護",
    "link": "#"
  },
  {
    "id": "27",
    "title": "關於1111",
    "txt": "意見反應",
    "link": "#"
  }
]);

const groupedFooterCollapseBody = computed(() => {
  return footerCollapseBody.value.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {});
});

// 點擊切換 collapse
const expandedIndex = ref(null);

const toggle = (index) => {
  expandedIndex.value = expandedIndex.value === index ? null : index;
};

</script>

<template>
  <footer class="relative box-border w-full px-[24px] min992:px-[12px] pt-[56px] min992:pt-[72px] pb-[24px] min768:pb-[32px] min992:pb-[16px] bg-System-grey-100 transition-none">
    <div class="v-container flex justify-start items-center flex-col flex-nowrap gap-[60px] w-full min992:max-w-[960px] min1200:max-w-[1140px] min1400:max-w-[1320px] mx-auto">
      <div class="box-border flex justify-between items-stretch flex-col min992:flex-row gap-[32px] min992:gap-0 w-full max-w-full">
        <div class="flex justify-between flex-col w-full max-w-full min992:max-w-[calc((100%/12)*2)] bg-transparent">
          <a href="https://www.1111.com.tw/" target="_blank" title="1111人力銀行">
            <img class="flex w-full h-full max-w-[106px] object-contain bg-transparent" src="https://images.1111.com.tw/event/img/zone/1111site/public/logo.svg"
              title="1111人力銀行" alt="1111人力銀行" width="106" height="27" loading="lazy" decoding="async" />
          </a>
          <a class="!hidden min992:!display-inherit" href="https://www.1111.com.tw/1111app/" target="_blank" title="下載找工作App">
            <div class="hidden min992:flex justify-start items-start flex-col gap-[8px] mb-[16px]">
              <span class="Chinese-Regular-Body3 text-System-grey-600">下載找工作App</span>
              <img class="size-[72px] aspect-square opacity-70"
                src="https://images.1111.com.tw/event/img/zone/1111site/public/Pic-QRcode-1111AppDownload.webp"
                title="下載找工作App" alt="下載找工作App" width="72" height="72" loading="lazy" decoding="async" />
            </div>
          </a>
          <div class="hidden min992:flex justify-start items-start flex-col gap-[6px]">
            <span class="Chinese-Regular-Body3 text-System-grey-600">追蹤我們</span>
            <div class="flex justify-start items-start flex-row gap-[8px]">
              <a class="group" href="https://www.facebook.com/1111jobbank/?locale=zh_TW" target="_blank"
                title="1111人力銀行 Facebook">
                <i class="tw-icon bg-icon-fb tw-icon-grey-1 group-hover:filter-none group-hover:bg-icon-fb-original size-[32px] aspect-square bg-26px"></i>
              </a>
              <a class="group" href="https://www.instagram.com/1111.com.tw/" target="_blank"
                title="1111人力銀行 Instagram">
                <i class="tw-icon bg-icon-ig tw-icon-grey-1 group-hover:filter-none group-hover:bg-icon-ig-original size-[32px] aspect-square bg-26px"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex justify-start items-start flex-col min992:flex-row flex-nowrap gap-[8px] min992:gap-[36px] min1200:gap-[48px] w-full max-w-full min992:max-w-[calc((100%/12)*5)]">
          <div class="v-footer-collapse flex justify-start items-start flex-col flex-nowrap gap-[10px] w-full max-w-full min992:w-fit group" v-for="(items, title, index) in groupedFooterCollapseBody" :key="title">
            <a class="flex min992:inline items-center gap-[16px] !w-full min992:!w-fit pr-[4px] min992:pr-0 py-[7.5px] min992:py-0 text-System-grey-700 Chinese-Medium-Body2 min992:Chinese-Medium-Body1 border-b min992:border-none border-solid border-System-grey-200 pointer-events-auto min992:pointer-events-none cursor-pointer min992:cursor-auto hover:!no-underline after:content-[''] after:inline-flex min992:after:hidden after:size-[16px] after:ml-auto after:mr-0 after:bg-icon-unfolded after:bg-center after:bg-no-repeat after:bg-[length:16px] after:tw-icon-grey-2 group-has-[.tw-collapse-body.show]:after:bg-icon-icon-folded" href="javascript:;" target="_self" :title="title"
              @click="toggle(index)">{{ title }}</a>
            <ol class="tw-collapse-body min992:!flex justify-start items-start flex-col flex-nowrap gap-[4px]" :class="{ show: expandedIndex === index }">
              <li class="m-0 text-System-grey-600 Chinese-Regular-Body3" v-for="item in items" :key="item.id">
                <a class="m-0 text-System-grey-600 Chinese-Regular-Body3" :href="item.link" target="_blank" :title="item.txt">{{ item.txt }}</a>
              </li>
            </ol>
          </div>
        </div>
        <div class="v-footer-wrapper-info flex justify-start min768:justify-between items-start flex-col min768:flex-row flex-nowrap gap-[32px] min992:gap-[36px] min1200:gap-[48px] w-full max-w-full min992:max-w-[calc((100%/12)*5)]">
          <div class="w-full max-w-full min768:max-w-[calc((100%-32px))/2] min992:max-w-[calc((100%-48px))/2]">
            <p class="mb-[10px] text-System-grey-700 Chinese-Medium-Body1" title="求職服務中心">求職服務中心</p>
            <div class="v-footer-block-body">
              <p class="m-0 mb-[4px] text-System-grey-700 Chinese-Medium-Body3" title="服務時間">服務時間</p>
              <div class="flex justify-start items-start flex-col flex-nowrap gap-[4px]">
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">週一至週五</span>
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">8:30&nbsp;~&nbsp;21:00</span>
                </p>
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">週六、日、國定假日</span>
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">9:00&nbsp;~&nbsp;17:30</span>
                </p>
              </div>
            </div>
            <div class="v-footer-block-body">
              <p class="m-0 mb-[4px] text-System-grey-700 Chinese-Medium-Body3" title="服務電話">服務電話</p>
              <div class="v-footer-info-body">
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3 v-column">
                  <span
                    class="w-full max-w-full min992:max-w-fit break-all whitespace-normal">24&nbsp;小時免費服務專線（21:00&nbsp;PM&nbsp;-&nbsp;08:00&nbsp;AM&nbsp;轉語音信箱）</span>
                  <a class="w-full max-w-full min992:max-w-fit break-all whitespace-normal" href="tel:0800091111" type="tel">0800&nbsp;-&nbsp;09&nbsp;-&nbsp;1111</a>
                </p>
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">電話</span>
                  <a class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap" href="tel:0287871111"
                    type="tel">02&nbsp;-&nbsp;8787&nbsp;-&nbsp;1111&nbsp;轉&nbsp;8</a>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full max-w-full min768:max-w-[calc((100%-32px))/2] min992:max-w-[calc((100%-48px))/2]">
            <p class="mb-[10px] text-System-grey-700 Chinese-Medium-Body1" title="求才服務中心">求才服務中心</p>
            <div class="v-footer-block-body">
              <p class="m-0 mb-[4px] text-System-grey-700 Chinese-Medium-Body3" title="服務時間">服務時間</p>
              <div class="v-footer-info-body">
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">週一至週五</span>
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">8:30&nbsp;~&nbsp;21:00</span>
                </p>
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">週六、日、國定假日</span>
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">9:00&nbsp;~&nbsp;21:00</span>
                </p>
              </div>
            </div>
            <div class="v-footer-block-body">
              <p class="m-0 mb-[4px] text-System-grey-700 Chinese-Medium-Body3" title="服務電話">服務電話</p>
              <div class="v-footer-info-body">
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">苗栗以北</span>
                  <a class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap" href="tel:0800091111" type="tel">02&nbsp;-&nbsp;8787&nbsp;-&nbsp;1111</a>
                </p>
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">中部地區</span>
                  <a class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap" href="tel:0422031111" type="tel">04&nbsp;-&nbsp;2203&nbsp;-&nbsp;1111</a>
                </p>
                <p class="inline-flex justify-start items-start flex-row flex-wrap gap-[0_8px] w-full text-System-grey-600 Chinese-Regular-Body3">
                  <span class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap">南部地區</span>
                  <a class="w-full max-w-full min992:max-w-fit break-keep whitespace-nowrap" href="tel:079581111" type="tel">07&nbsp;-&nbsp;958&nbsp;-&nbsp;1111</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex min992:hidden justify-start items-start flex-col flex-nowrap gap-[12px]">
          <div class="flex min992:hidden justify-start items-start flex-col gap-[6px]">
            <span class="Chinese-Regular-Body3 text-System-grey-600">追蹤我們</span>
            <div class="flex justify-start items-start flex-row gap-[8px]">
              <a class="group" href="https://www.facebook.com/1111jobbank/?locale=zh_TW" target="_blank"
                title="1111人力銀行 Facebook">
                <i class="tw-icon bg-icon-fb tw-icon-grey-1 group-hover:filter-none group-hover:bg-icon-fb-original size-[32px] aspect-square bg-26px"></i>
              </a>
              <a class="group" href="https://www.instagram.com/1111.com.tw/" target="_blank"
                title="1111人力銀行 Instagram">
                <i class="tw-icon bg-icon-ig tw-icon-grey-1 group-hover:filter-none group-hover:bg-icon-ig-original size-[32px] aspect-square bg-26px"></i>
              </a>
            </div>
          </div>
          <p class="text-System-grey-600 Chinese-Regular-Body3">下載找工作App</p>
          <div class="flex justify-start items-start flex-row flex-nowrap gap-[9px]">
            <a href="#" target="_blank" title="Download on the App Store">
              <img src="https://images.1111.com.tw/event/img/zone/1111site/public/download-ios.svg"
                title="Download on the App Store" alt="Download on the App Store" width="120" height="36"
                decoding="async" loading="lazy" />
            </a>
            <a href="#" target="_blank" title="GET IT ON Google Play">
              <img src="https://images.1111.com.tw/event/img/zone/1111site/public/download-andriod.svg"
                title="GET IT ON Google Play" alt="GET IT ON Google Play" width="120" height="36" decoding="async"
                loading="lazy" />
            </a>
          </div>
        </div>
      </div>
      <div class="box-border flex justify-center items-center flex-col gap-[8px] min992:gap-[4px] w-full max-w-full">
        <p class="m-0 text-System-grey-600 text-start min992:text-center Chinese-Regular-Caption2">全球華人股份有限公司（私業許字第 2218 號）・全球華人股份有限公司臺中分公司（私業許字第 2218 - 2 號）・全球華人股份有限公司高雄分公司（私業許字第
          2218 - 1 號）・壹一壹一科技股份有限公司（私業許字第 3410 號）</p>
        <p class="inline-flex justify-center items-start min992:center flex-col min992:flex-row gap-0 min992:gap-[8px] w-full min992:w-fit m-0 text-System-grey-500 text-start min992:text-center Chinese-Regular-Caption2">
          <span>全球華人股份有限公司版權所有© 2021 1111 Job Bank All Rights Reserved.</span>
          <span>建議最佳瀏覽器：Google Chrome、Safari、Firefox。</span>
        </p>
      </div>
    </div>
  </footer>
</template>

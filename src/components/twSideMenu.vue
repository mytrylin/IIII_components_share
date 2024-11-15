<script setup>
import { ref, computed, defineProps, defineEmits, onMounted } from 'vue';
import twCollapse from '@/components/twCollapse.vue';

// 創建一個 emit 事件來通知父元件關閉側邊選單
const emit = defineEmits();

// 接收 props
const props = defineProps({
    isSideMenuVisible: Boolean,
    isSideMenuContentVisible: Boolean
});

// 點擊關閉 sideMenu
const closeSideMenu = () => {
    // 使用 emit 將事件傳遞到父層
    emit('close-menu');
};

// 防止點擊 .tw-sideMenu-content 時觸發關閉
const stopPropagation = (event) => {
    event.stopPropagation();
};

// 提供一個 ref 以便 Header.vue 可以操作 DOM
const sideMenuRef = ref(null);

onMounted(() => {
    // 在元件掛載後做一些初始化操作
    if (sideMenuRef.value) {
        sideMenuRef.value.classList.remove('show'); // 初始不顯示
        sideMenuRef.value.classList.remove('showing'); // 初始不顯示
    }
});

// sideMenu
const sideMenuList = ref([
    {
        "id": "1",
        "title": "工作快找",
        "subtitle": "工作類型",
        "bodyTitle": "轉職專區",
        "bodyTxt": "熱門轉職職缺、多種轉職工具",
        "link": "#"
    },
    {
        "id": "2",
        "title": "工作快找",
        "subtitle": "工作類型",
        "bodyTitle": "兼差打工",
        "bodyTxt": "學生寒暑期、開學打工、臨時兼差",
        "link": "#"
    },
    {
        "id": "3",
        "title": "工作快找",
        "subtitle": "工作類型",
        "bodyTitle": "實習專區",
        "bodyTxt": "提供所有實習相關職缺，包含學生實習及一般實習",
        "link": "#"
    },
    {
        "id": "4",
        "title": "工作快找",
        "subtitle": "工作類型",
        "bodyTitle": "家教網",
        "bodyTxt": "免費找家教，找案件免仲介費用",
        "link": "#"
    },
    {
        "id": "5",
        "title": "工作快找",
        "subtitle": "工作類型",
        "bodyTitle": "接案外包",
        "bodyTxt": "SOHO接案不煩惱",
        "link": "#"
    },
    {
        "id": "6",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "校園徵才",
        "bodyTxt": "知名大學線上線下就業博覽會",
        "link": "#"
    },
    {
        "id": "7",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "社會新鮮人",
        "bodyTxt": "專屬求職工具，幫助新鮮人找舞台",
        "link": "#"
    },
    {
        "id": "8",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "公職考訊",
        "bodyTxt": "公家機關招聘工作與年度國家考試",
        "link": "#"
    },
    {
        "id": "9",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "教職網",
        "bodyTxt": "教育相關職缺及優質教職工作福利",
        "link": "#"
    },
    {
        "id": "10",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "高階獵頭",
        "bodyTxt": "『Accurate愛客獵』獵才服務",
        "link": "#"
    },
    {
        "id": "11",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "研發替代役",
        "bodyTxt": "替代役徵才資訊與研替職務說明",
        "link": "#"
    },
    {
        "id": "12",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "二度就業",
        "bodyTxt": "二度就業也能領高薪？這裡職缺上看７萬",
        "link": "#"
    },
    {
        "id": "13",
        "title": "工作快找",
        "subtitle": "身分類別",
        "bodyTitle": "接受身障",
        "bodyTxt": "為了實現多元包容，我們提供專屬身障者的工作機會",
        "link": "#"
    },
    {
        "id": "14",
        "title": "工作快找",
        "subtitle": "精選類別",
        "bodyTitle": "精密機械",
        "bodyTxt": "優質精密機械職缺",
        "link": "#"
    },
    {
        "id": "15",
        "title": "工作快找",
        "subtitle": "精選類別",
        "bodyTitle": "幸福企業",
        "bodyTxt": "幸福企業福利資訊，提供優質工作",
        "link": "#"
    },
    {
        "id": "16",
        "title": "工作快找",
        "subtitle": "精選類別",
        "bodyTitle": "外商專區",
        "bodyTxt": "提供外商公司即時工作機會",
        "link": "#"
    },
    {
        "id": "17",
        "title": "工作快找",
        "subtitle": "精選類別",
        "bodyTitle": "外商專區",
        "bodyTxt": "提供外商公司即時工作機會",
        "link": "#"
    },
    {
        "id": "18",
        "title": "工作快找",
        "subtitle": "地區徵才",
        "bodyTitle": "中台灣",
        "bodyTxt": "中、彰、投、雲、嘉等工作機會",
        "link": "#"
    },
    {
        "id": "19",
        "title": "工作快找",
        "subtitle": "地區徵才",
        "bodyTitle": "南台灣",
        "bodyTxt": "高雄、台南、屏東求職資訊平台",
        "link": "#"
    },
    {
        "id": "20",
        "title": "工作快找",
        "subtitle": "地區徵才",
        "bodyTitle": "地圖找工作",
        "bodyTxt": "透過定位、通勤、商圈找工作",
        "link": "#"
    },
    {
        "id": "21",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "薪資公秤",
        "bodyTxt": "薪資行情、待遇與分析",
        "link": "#"
    },
    {
        "id": "22",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "九大職能星",
        "bodyTxt": "性向職能測驗，理想職務適配度",
        "link": "#"
    },
    {
        "id": "23",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "自傳魔法師",
        "bodyTxt": "自動撰寫、範例、履歷表範本",
        "link": "#"
    },
    {
        "id": "24",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "測評中心",
        "bodyTxt": "提供找工作/找人才最客觀的職能評鑑工具",
        "link": "#"
    },
    {
        "id": "25",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "Holland 興趣測驗",
        "bodyTxt": "人格特質與職業興趣，幫你分析適合的工作類型",
        "link": "#"
    },
    {
        "id": "26",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "多元智能測驗",
        "bodyTxt": "測驗只要7分鐘，推薦未來升學與求職方向",
        "link": "#"
    },
    {
        "id": "27",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "工作價值觀",
        "bodyTxt": "用遊戲測驗你的隱性求職需求",
        "link": "#"
    },
    {
        "id": "28",
        "title": "專區快選",
        "subtitle": "職涯工具",
        "bodyTitle": "履歷健診",
        "bodyTxt": "百位職涯顧問替求職者提供專業履歷檢查優化服務",
        "link": "#"
    },
    {
        "id": "29",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "粉絲團",
        "bodyTxt": "1111人力銀行粉絲團，首創社群凝聚",
        "link": "#"
    },
    {
        "id": "30",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "職涯網Career+",
        "bodyTxt": "幫你掌握職涯大小事，職涯探索不可少",
        "link": "#"
    },
    {
        "id": "31",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "職務大辭典",
        "bodyTxt": "彙整各職務資訊，職涯上的秘密武器",
        "link": "#"
    },
    {
        "id": "32",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "職涯大師",
        "bodyTxt": "你一生的職涯導師，專屬規劃找到好工作",
        "link": "#"
    },
    {
        "id": "33",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "求職防詐騙",
        "bodyTxt": "職場安全，帶你一一破解",
        "link": "#"
    },
    {
        "id": "34",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "醫護甘苦談",
        "bodyTxt": "讓醫護發聲，成為醫護人的堅強後盾",
        "link": "#"
    },
    {
        "id": "35",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "面試經驗談",
        "bodyTxt": "超多職場生存指南，讓你輕鬆應對",
        "link": "#"
    },
    {
        "id": "36",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "職涯論壇",
        "bodyTxt": "職涯論壇是上班族交流的最佳論壇",
        "link": "#"
    },
    {
        "id": "37",
        "title": "專區快選",
        "subtitle": "職場資訊",
        "bodyTitle": "職點",
        "bodyTxt": "多元職場話題，傳授你工作心法",
        "link": "#"
    },
    {
        "id": "38",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "人資專區",
        "bodyTxt": "歡迎人資領域朋友共同前進",
        "link": "#"
    },
    {
        "id": "39",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "人資系統",
        "bodyTxt": "1HR人資管理系統，解決人事管理問題",
        "link": "#"
    },
    {
        "id": "40",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "人才培訓",
        "bodyTxt": "推動人力資源管理與發展",
        "link": "#"
    },
    {
        "id": "40",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "企業大學",
        "bodyTxt": "積極推動產學無縫接軌、引領企業設計思考",
        "link": "#"
    },
    {
        "id": "41",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "企業測評",
        "bodyTxt": "1HR人資系統，為找人才提供專屬人才評測",
        "link": "#"
    },
    {
        "id": "42",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "人力派遣",
        "bodyTxt": "1111人力銀行擁有資料庫資源，為企業甄選出專業人才",
        "link": "#"
    },
    {
        "id": "43",
        "title": "專區快選",
        "subtitle": "企業服務",
        "bodyTitle": "IPAS人才專區",
        "bodyTxt": "經濟部產業人才能力鑑定，助青年找工作企業找人才",
        "link": "#"
    },
    {
        "id": "43",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "TechNice科技島",
        "bodyTxt": "專注討論科技與行銷話題的人才社群",
        "link": "#"
    },
    {
        "id": "44",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "OPT歐趴糖",
        "bodyTxt": "專屬大學生的課程評價查詢網",
        "link": "#"
    },
    {
        "id": "45",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "進修學習",
        "bodyTxt": "提供免費課程，培養第二專長",
        "link": "#"
    },
    {
        "id": "46",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "商搜網",
        "bodyTxt": "匯聚全台工商名錄，提供B2B平台服務",
        "link": "#"
    },
    {
        "id": "47",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "玩出競爭力",
        "bodyTxt": "觀光產業人才、玩樂趨勢調查..等旅遊資訊平台",
        "link": "#"
    },
    {
        "id": "48",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "創業加盟",
        "bodyTxt": "讓您快速找到加盟主，是創業路上的好夥伴",
        "link": "#"
    },
    {
        "id": "49",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "大學網",
        "bodyTxt": "一手掌握全台大學發燒議題!",
        "link": "#"
    },
    {
        "id": "50",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "落點分析",
        "bodyTxt": "提供大學生精確學測分析，未來職涯超前部署",
        "link": "#"
    },
    {
        "id": "51",
        "title": "專區快選",
        "subtitle": "多元服務",
        "bodyTitle": "產經新聞",
        "bodyTxt": "分析台灣產業趨勢，帶你掌握第1手資訊",
        "link": "#"
    },
    {
        "id": "52",
        "title": "求職服務",
        "subtitle": "會員登入",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "53",
        "title": "求職服務",
        "subtitle": "搜尋工作",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "54",
        "title": "求職服務",
        "subtitle": "分類找工作",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "55",
        "title": "求職服務",
        "subtitle": "意見反應",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "56",
        "title": "求職服務",
        "subtitle": "求職Q&A",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "57",
        "title": "求職服務",
        "subtitle": "求職者見證",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "58",
        "title": "求職服務",
        "subtitle": "電子報訂閱",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "59",
        "title": "求職服務",
        "subtitle": "找工作App",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "60",
        "title": "求才服務",
        "subtitle": "刊登職缺",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "61",
        "title": "求才服務",
        "subtitle": "企業登入",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "62",
        "title": "求才服務",
        "subtitle": "瀏覽人才",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "63",
        "title": "求才服務",
        "subtitle": "加入VIP",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "64",
        "title": "求才服務",
        "subtitle": "廣告刊登",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "65",
        "title": "求才服務",
        "subtitle": "紅利積點",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "66",
        "title": "求才服務",
        "subtitle": "電子報訂閱",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "67",
        "title": "求才服務",
        "subtitle": "找人才APP",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "68",
        "title": "求才服務",
        "subtitle": "企業徵才",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "69",
        "title": "求才服務",
        "subtitle": "即時通訊",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "70",
        "title": "關於1111",
        "subtitle": "1111簡介",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "71",
        "title": "關於1111",
        "subtitle": "隱私權保護",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "72",
        "title": "關於1111",
        "subtitle": "專利公告",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "73",
        "title": "關於1111",
        "subtitle": "合作提案",
        "bodyTitle": "",
        "bodyTxt": "",
        "link": "#"
    },
    {
        "id": "74",
        "title": "新功能介紹",
        "subtitle": "求職系統",
        "bodyTitle": "多筆應徵",
        "bodyTxt": "輕鬆點選一次應徵",
        "link": "#"
    },
    {
        "id": "75",
        "title": "新功能介紹",
        "subtitle": "求職系統",
        "bodyTitle": "快速求職新功能",
        "bodyTxt": "簡歷找工作、即時通、作品連結",
        "link": "#"
    }
]);

const activeTitle = ref('工作快找');

// 根據 title 生成標題列表
const titlesCount = computed(() => {
    const titles = new Set(sideMenuList.value.map(item => item.title));
    return Array.from(titles);
});

// 根據 activeTitle 過濾並分組數據
const filteredGroupedSubMenuList = computed(() => {
    const filteredItems = sideMenuList.value.filter(item => item.title === activeTitle.value);
    return filteredItems.reduce((acc, item) => {
    if (!acc[item.subtitle]) {
        acc[item.subtitle] = [];
    }
    acc[item.subtitle].push(item);
    return acc;
    }, {});
});

// 設置活動標題
const setActiveTitle = (title) => {
    activeTitle.value = title;
};

const shouldShowCollapse = (subGroups) => {
    // 檢查 subGroups 中是否有任何項目有有效內容
    return subGroups.some(subItem => subItem.bodyTitle == "" || subItem.bodyTxt == "");
};

</script>

<template>
    <div class="tw-sideMenu z-[999] cursor-pointer" ref="sideMenuRef" @click="closeSideMenu">
        <Transition name="tw-sideMenu-content"
        enter-active-class="transition-all duration-350 delay-0 ease-in-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-350 delay-0 ease-in-out"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full">
            <div class="tw-sideMenu-content fixed right-0 top-0 flex justify-start items-start flex-row flex-nowrap gap-[24px] w-[calc(100vw/3)] h-[100vh] min-w-full min768:min-w-[630px] px-[32px] py-[64px] bg-System-grey-000 cursor-auto" v-if="isSideMenuVisible && isSideMenuContentVisible" :class="{ show: isSideMenuVisible && isSideMenuContentVisible }"  @click.stop="stopPropagation">
                <!-- 關閉按鈕 -->
                <button class="absolute right-[32px] top-[32px] size-[24px] p-0 m-0 border-none bg-transparent cursor-pointer" @click="closeSideMenu">
                    <i class="tw-icon bg-icon-close tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
                </button>

                <!-- 主選單 -->
                <nav class="flex justify-start items-start flex-col flex-nowrap gap-[24px] w-full max-w-[calc((100%-24px)/3)]">
                    <p class="text-System-grey-800 Chinese-Regular-Subtitle1">服務總覽</p>
                    <ul class="w-full max-w-full">
                        <li class="w-full max-w-full" v-for="(title, index) in titlesCount" :key="index">
                            <button class="tw-sideMenu-nav-btn w-full max-w-full px-[15px] py-[10px] bg-transparent border-none rounded-[8px] text-System-grey-600 Chinese-Regular-Subtitle2 text-start cursor-pointer hover:text-System-blue-400 hover:bg-System-grey-100" :class="{ active: activeTitle === title }" @click="setActiveTitle(title)">
                                {{ title }}
                            </button>
                        </li>
                    </ul>
                </nav>

                <!-- 次選單 -->
                <div class="tw-sideMenu-subList flex justify-start items-start flex-col flex-nowrap gap-0 w-full h-full max-w-[calc((100%-24px)/3*2)] overflow-y-auto">
                    <p class="mb-[24px] text-System-blue-400 Chinese-Regular-Subtitle1">{{ activeTitle }}</p>
                    <template v-for="(subGroups, subtitle) in filteredGroupedSubMenuList" :key="subtitle">
                        <twCollapse class="tw-sideMenu-collapse w-full max-w-full" v-if="!shouldShowCollapse(subGroups)">
                            <template #title>
                                {{ subtitle }}
                            </template>
                            <template #body>
                                <ul class="flex justify-start items-start flex-col flex-nowrap gap-0 w-full max-w-full">
                                    <li class="flex justify-start items-start flex-col flex-nowrap gap-0 w-full max-w-full rounded-[8px] hover:text-System-blue-400 hover:bg-System-grey-100" v-for="subItem in subGroups" :key="subItem.id">
                                        <a class="flex justify-start items-start flex-col flex-nowrap gap-0 w-full max-w-full px-[15px] py-[12px]" :href="subItem.link" target="_blank" :title="subItem.bodyTitle">
                                            <p class="text-System-grey-800 Chinese-Regular-Subtitle3">{{ subItem.bodyTitle }}</p>
                                            <p class="text-System-grey-700 Chinese-Regular-Body3">{{ subItem.bodyTxt }}</p>
                                        </a>
                                    </li>
                                </ul>
                            </template>
                        </twCollapse>
                        <template v-else>
                            <a class="v-subList-link flex justify-start items-center flex-row flex-nowrap w-full max-w-full box-border p-[15px] border-none bg-transparent text-start rounded-8px text-System-grey-800 Chinese-Regular-Body1 cursor-pointer hover:text-System-blue-400 hover:bg-System-grey-100" :href="subGroups[0].link" target="_blank">
                                {{ subtitle }}
                            </a>
                        </template>
                    </template>
                </div>

            </div>
        </Transition>
    </div>
</template>

<script setup>
import { nextTick, onMounted } from 'vue';

const initDom = () => {
  nextTick(() => {
  });
};

onMounted(() => {
  initDom();
});

/* Header Components 引入 START */
import { ref } from 'vue';
import twHeader from "@/components/twHeader.vue";

// 使用者資訊
const userName = "王曉明";
const userImage = "https://images.1111.com.tw/event/img/zone/1111site/public/user-img.webp";

// 登入狀態
const isLoggedIn = ref(false);
// 處理登入狀態變更
const handleLoginStatusChange = () => {
  isLoggedIn.value = !isLoggedIn.value;  // 切換登入狀態
};

// tw-bell-item 的資料
const bellItems = ref([
  {
    id: 1,
    caption: "面試邀約",
    time: "15分鐘前",
    title: "職缺名稱A",
    subtitle: "職缺說明A",
    link: "#"
  },
  {
    id: 2,
    caption: "面試邀約",
    time: "30分鐘前",
    title: "職缺名稱B",
    subtitle: "職缺說明B",
    link: "#"
  },
  {
    id: 3,
    caption: "面試邀約",
    time: "1小時前",
    title: "職缺名稱C",
    subtitle: "職缺說明C",
    link: "#"
  },
  {
    id: 4,
    caption: "面試邀約",
    time: "8小時前",
    title: "職缺名稱D",
    subtitle: "職缺說明D",
    link: "#"
  }
]);
/* Header Components 引入 END */

/* Footer Components 引入 START */
import twFooter from "@/components/twFooter.vue";
/* Footer引入 END */

/* SearchBar Components 引入 START */
import { provide } from 'vue';
import twSearchBar from "@/components/twSearchBar.vue";

// inside
// const isInSide = ref(false); // 在內/外顯示 true: 內, false: 外;

// searchBarBTN
// tCode選項START //
// 職務 / duty_NM
// 地區 / city
// 科系 / major
// 產業 / trade
// 國家 / nation
// 大專院校 / college
// 捷運站 / mrt
// 火車站 / tra
// 商圈 / shopping
// 工作技能 / workability
// 專業證照 / certify_Title
// 電腦技能 / CompSkill
// tCode選項END //
const searchBarBTN = ref([
  {
    "id": "1",
    "title": "產業",
    "type": 0, //0: tCode, 1: dropdown;
    "args": "trade" //tCode選項
  },
  {
    "id": "2",
    "title": "職務",
    "type": 0, //0: tCode, 1: dropdown;
    "args": "duty_NM" //tCode選項
  },
  {
    "id": "3",
    "title": "地區",
    "type": 0, //0: tCode, 1: dropdown;
    "args": "city" //tCode選項
  },
  {
    "id": "4",
    "title": "計薪",
    "type": 1, //0: tCode, 1: dropdown;
    "menuItem": ["選項A", "選項B", "選項C"] //dropdown選項
  },
  {
    "id": "5",
    "title": "進階搜尋",
    "type": 1, //0: tCode, 1: dropdown;
    "menuItem": ["選項1", "選項2", "選項3"] //dropdown選項
  }
]);

// 最近搜尋 searchHistory
const searchHistory = ref([
  {
    "id": "1",
    "title": "最近搜尋",
    "item": []
  }
]);

// 熱門關鍵字, 自動完成 searchBarDropdown
const searchBarDropdown = ref([
  {
    "id": "1",
    "title": "熱門關鍵字",
    "item": [
      {
        "itemTitle": "新鮮人",
        "itemLink": "#"
      },
      {
        "itemTitle": "AI簡歷",
        "itemLink": "#"
      },
      {
        "itemTitle": "急徵",
        "itemLink": "#"
      },
      {
        "itemTitle": "實習",
        "itemLink": "#"
      },
      {
        "itemTitle": "醫護職缺",
        "itemLink": "#"
      },
      {
        "itemTitle": "幸福企業",
        "itemLink": "#"
      },
      {
        "itemTitle": "休六日",
        "itemLink": "#"
      },
      {
        "itemTitle": "兼職工讀",
        "itemLink": "#"
      },
      {
        "itemTitle": "二度就業",
        "itemLink": "#"
      },
      {
        "itemTitle": "中高齡",
        "itemLink": "#"
      },
      {
        "itemTitle": "月薪四萬起",
        "itemLink": "#"
      },
      {
        "itemTitle": "行政總務",
        "itemLink": "#"
      },
      {
        "itemTitle": "無經驗可",
        "itemLink": "#"
      },
      {
        "itemTitle": "餐飲旅宿",
        "itemLink": "#"
      },
      {
        "itemTitle": "資訊科技",
        "itemLink": "#"
      }
    ]
  },
  {
    "id": "2",
    "title": "自動完成",
    "item": [
      "平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計平面設計",
      "工業設計",
      "產品設計",
      "網頁設計",
      "室內設計",
      "產品設計",
      "自動完成07",
      "自動完成08",
      "自動完成09",
      "自動完成10"
    ]
  }
]);

// 使用 provide 提供資料
// provide('isInside', isInside);
provide('searchBarBTN', searchBarBTN);
/* SearchBar Components 引入 END */

/* twPagination Components 引入 START */
import twPagination from "@/components/twPagination.vue";
// 預設 pagination query
const query1 = ref({
  page:1,
  totalrecord: 1000,
  pageSize: 21
});
const query2 = ref({
  page:1,
  totalrecord: 1000,
  pageSize: 21
});
/* twPagination Components 引入 END */

/* twJobCardSingle Components 引入 START */
import twJobCard from "@/components/twJobCardSingle.vue";
const jobsCardList = ref([
  {
    position0: 'NUXT3 & VUE3 前端工程師',
    organs: '1111 人力銀行',
    salary: '面議',
    trade: '軟體開發業',
    link: '#',
    favorite: 0,
    dNo: 103805832
  },
  {
    position0: 'PHP Laravel Developer 後端工程師',
    organs: '台灣積體電路製造股份有限公司',
    salary: '月薪 500000 ~ 580000',
    trade: '網路服務業',
    link: '#',
    favorite: 1,
    dNo: 98990461
  },
  {
    position0: 'UI/UX/視覺設計師',
    organs: '鴻海精密工業股份有限公司',
    salary: '月薪 360000',
    trade: '金融投資業',
    link: '#',
    favorite: 0,
    dNo: 98994229
  }
]);
/* twJobCardSingle Components 引入 END */

/* twLoading Components 引入 START */
import twLoading from "@/components/twLoading.vue";
/* twLoading Components 引入 END */

</script>

<template>
  <main>
    <h1>共用元件</h1>

    <section class="demo">
      <h2>Header</h2>
      <twHeader :userName="userName" :userImage="userImage" :isLoggedIn="isLoggedIn" :bellItems="bellItems"
        @loginStatusChanged="handleLoginStatusChange"></twHeader>
    </section>

    <section class="demo">
      <h2>Footer</h2>
      <twFooter></twFooter>
    </section>

    <section class="demo" style="position: relative; z-index: 1;">
      <h2>SearchBar01</h2>
      <twSearchBar :inSide="false" :searchHistory="searchHistory" :searchBarDropdown="searchBarDropdown"></twSearchBar>
    </section>

    <section class="demo" style="position: relative; z-index: 0;">
      <h2>SearchBar02</h2>
      <twSearchBar :inSide="true" :searchHistory="searchHistory" :searchBarDropdown="searchBarDropdown"></twSearchBar>
    </section>

    <section class="demo">
      <h2>Loading</h2>
      <div class="bg-white p-[5px_10px] flex flex-row justify-center w-full">
        <twLoading /><twLoading :type="2"/><twLoading :type="3"/>
      </div>
    </section>

    <section class="demo">
      <h2>JobCard</h2>
      <div class="bg-white p-[16px_16px] flex gap-1 w-full flex-wrap
        min992:gap-4 min992:flex-row min992:justify-content-start min992:align-items-start
        min768:gap-3
        min576:gap-2
      ">
        <twJobCard v-for="(cardItem, index) in jobsCardList" :key="index" :modelValue="cardItem"
        @update:modelValue="value => jobsCardList[index] = value"/>
      </div>
    </section>

    <section class="demo">
      <h2>Pagination - Use Loading</h2>
      <twPagination v-model="query1.page" :total="query1.totalrecord" :pageSize="query1.pageSize"
        :useLoading="true"></twPagination><br>
      <h2>Pagination - No Loading</h2>
      <twPagination v-model="query2.page" :total="query2.totalrecord" :pageSize="query2.pageSize"
        :useLoading="false"></twPagination>
    </section>    
  </main>
</template>

<style lang="css" scoped>
main {
  padding-top: 100px;
  padding-bottom: 100px;
}

h1 {
  padding: 8px;
  font-size: 24px;
  line-height: 1.4;
  font-weight: bold;
}

h2 {
  display: inline-block;
  width: fit-content;
  padding: 8px;
  margin-bottom: 32px;
  color: #fff;
  font-size: 16px;
  line-height: 1.4;
  font-weight: normal;
  background-color: #000;
  border-radius: 8px;
}

.demo {
  background-color: #d8d8d8;
  width: 100%;
  max-width: calc(100% - 32px);
  padding: 8px;
  margin: 24px auto;
}
</style>

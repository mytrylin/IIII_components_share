<script setup>
import { ref, watch } from 'vue';
import twSearchFilter from '@/components/twSearchFilter.vue';

// 定義 props
const props = defineProps({
    inSide: Boolean,
    searchHistory: Array,
    searchBarDropdown: Array
});

// 定義 emit 事件
const emit = defineEmits(['updateSearchHistory']);

// 定義 reactive 變數
const searchQuery = ref(""); // 搜尋查詢Input內容
const searchDropdownRef = ref(null); // searchDropdown元件
const searchInputRef = ref(null); // searchDropdown元件
const showSearchDropdown = ref(false); // 控制搜尋下拉顯示
const showHistory = ref(false); // 控制"最近搜尋"顯示
const showKeyword = ref(false); // 控制"熱門關鍵字"顯示
const showAutocomplete = ref(false); // 控制"自動完成"顯示

// 清除搜尋輸入
const clearInput = () => {
    searchQuery.value = "";
    showSearchDropdownContent();
};

// 新增, 刪除 "最近搜尋" 陣列
function handleUpdateSearchHistory(newSearchItem, action) {
    const items = props.searchHistory[0].item;
    if (action === "add") {
        // 檢查是否已經存在於 items 中
        const index = items.indexOf(newSearchItem);
        if (index !== -1) {
            // 如果存在，則移除該項目
            items.splice(index, 1);
        };
        // 將最新項目推入
        items.push(newSearchItem);
        // 如果長度超過 10，則移除第一個項目
        if (items.length > 10) {
            items.shift(); // 移除第一個項目
        };
    } else if (action === "delete") {
        // 使用 filter 移除該項目
        props.searchHistory[0].item = items.filter(item => item !== newSearchItem);
    };
};

// 更新"最近搜尋"
const updateSearchHistory = (newSearchItem, action) => {
    if (action === "add") {
        if (newSearchItem) { // 檢查 newSearchItem 是否為空
            // emit('updateSearchHistory', newSearchItem, action); // 發出事件
            handleUpdateSearchHistory(newSearchItem, action);
            searchQuery.value = ""; // 清空搜尋框
        }
    } else if (action === "delete") {
        // emit('updateSearchHistory', newSearchItem, action); // 僅傳遞 newSearchItem
        handleUpdateSearchHistory(newSearchItem, action);
    };
};

// 顯示搜尋下拉內容
const showSearchDropdownContent = () => {
    showHistory.value = props.searchHistory[0].item.length > 0 && searchQuery.value === ""; // 更新 showHistory
    showKeyword.value = searchQuery.value === ""; // 當搜尋查詢為空時顯示熱門關鍵字
    showAutocomplete.value = searchQuery.value !== ""; // 當有查詢時顯示自動完成
};

// 控制搜尋下拉顯示
const handleSearchDropdown = () => {
    showSearchDropdownContent();
    showSearchDropdown.value = true;
};

// 將自動完成值塞入 input
const intoInput = (item) => {
    searchQuery.value = item;
    showSearchDropdown.value = false; // 直接控制狀態
};

// Input按下Enter
const handleEnterKey = (searchQuery) => {
    updateSearchHistory(searchQuery.trim(), 'add'); // 更新搜尋歷史
    showSearchDropdownContent(); // 顯示下拉選單內容
};

// 點擊空白處關閉 dropdown
const handleClickOutsideSearchDropdown = (e) => {
    if (showSearchDropdown.value && searchDropdownRef.value && !searchDropdownRef.value.contains(e.target) && !searchInputRef.value.contains(e.target)) {
        showSearchDropdown.value = false; // 隱藏下拉
    };
};

// 綁定事件
watch(showSearchDropdown, (newVal) => {
    if (newVal) {
        document.addEventListener('click', handleClickOutsideSearchDropdown);
    } else {
        document.removeEventListener('click', handleClickOutsideSearchDropdown);
    };
});
</script>

<template>
    <div
        class="tw-searchBar relative flex justify-between items-stretch flex-row gap-[12px] w-full max-w-full p-[8px] mx-auto rounded-[12px] border border-solid border-System-grey-200 bg-System-grey-000">
        <twSearchFilter v-if="inSide"></twSearchFilter>
        <div class="relative flex justify-start items-center w-full h-auto">
            <input
                class="tw-search-input w-full max-w-full h-full pl-[16px] pr-[48px] rounded-[8px] border border-solid border-System-grey-100 bg-System-grey-050 outline-none shadow-none text-System-grey-800 Chinese-Regular-Body2 placeholder:text-System-grey-400 hover:border-System-blue-150 hover:outline-none hover:shadow-none focus:border-System-blue-400 focus:bg-System-blue-000 focus:outline-none focus:shadow-none active:border-System-blue-400 active:bg-System-blue-000 active:outline-none active:shadow-none"
                type="search" placeholder="找工作、公司" ref="searchInputRef" v-model="searchQuery"
                @input="showSearchDropdownContent" @click="handleSearchDropdown"
                @keydown.enter="handleEnterKey(searchQuery)" />
            <button v-if="searchQuery" class="absolute right-[16px] size-[24px] aspect-square" @click="clearInput">
                <i class="tw-icon bg-icon-close tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
            </button>
            <Transition name="tw-dropdown-menu" enter-active-class="transition-all duration-150 ease-linear"
                enter-from-class="opacity-0 translate-y-[-16px]" enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-150 ease-linear"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-[-16px]">
                <div class="absolute top-full justify-start items-start flex-col flex-wrap gap-[8px] w-full py-[12px] mt-[16px] rounded-[8px] border-none bg-System-grey-000 shadow-[0_8px_16px_0_rgba(42,70,90.25)]"
                    v-if="showSearchDropdown" ref="searchDropdownRef">
                    <div class="w-full max-w-full" v-if="showHistory">
                        <p
                            class="inline-block px-[24px] py-[8px] Chinese-Regular-Body3 text-System-grey-500 text-start">
                            {{ searchHistory[0].title }}
                        </p>
                        <ul class="flex justify-start items-start flex-col flex-nowrap w-full max-w-full">
                            <li class="inline-flex justify-between items-center flex-row flex-nowrap gap-[6px] w-full max-w-full px-[24px] py-[8px] hover:bg-System-grey-100"
                                v-for="(searchItem, i) in searchHistory[0].item.slice().reverse()" :key="i">
                                <button
                                    class="w-full max-w-[calc(100%-30px)] Chinese-Regular-Body3 text-System-grey-800 text-start truncate">
                                    {{ searchItem }}
                                </button>
                                <button class="size-[24px] aspect-square p-0"
                                    @click="updateSearchHistory(searchItem, 'delete')">
                                    <i
                                        class="tw-icon bg-icon-close tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full max-w-full" v-if="showKeyword">
                        <p
                            class="inline-block px-[24px] py-[8px] Chinese-Regular-Body3 text-System-grey-500 text-start">
                            {{ searchBarDropdown[0].title }}
                        </p>
                        <ul
                            class="flex justify-start items-start flex-row flex-wrap gap-[8px] w-full max-w-full px-[24px]">
                            <li class="inline-flex justify-center items-center flex-row flex-nowrap w-fit max-w-max p-0"
                                v-for="(searchItem, i) in searchBarDropdown[0].item" :key="i">
                                <a class="px-[12px] py-[6px] Chinese-Regular-Body3 text-System-blue-500 bg-System-blue-000 border border-solid border-System-blue-100 rounded-[8px] hover:bg-System-blue-150 hover:border-System-blue-300"
                                    :href="searchItem.itemLink" target="_blank" :title="searchItem.itemTitle">
                                    {{ searchItem.itemTitle }}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full max-w-full" v-if="showAutocomplete">
                        <ul class="flex justify-start items-start flex-col flex-nowrap w-full max-w-full">
                            <li class="inline-flex justify-start items-center flex-row flex-nowrap w-full max-w-full px-[24px] py-[8px] hover:bg-System-grey-100"
                                v-for="(searchItem, i) in searchBarDropdown[1].item" :key="i">
                                <button
                                    class="inline-flex justify-start items-center gap-[6px] w-full max-w-full Chinese-Regular-Body3 text-System-grey-800 text-start"
                                    @click="intoInput(searchItem)">
                                    <i
                                        class="tw-icon bg-icon-search tw-icon-grey-1 size-[24px] aspect-square bg-24px"></i>
                                    <span class="inline w-full max-w-[calc(100%-24px-6px)] truncate">{{ searchItem
                                        }}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </div>
        <button
            class="flex justify-center items-center gap-[6px] pl-[12px] min768:pl-[16px] pr-[16px] min768:pr-[20px] py-[8px] min768:py-[12px] rounded-[8px] bg-System-blue-500 border border-solid border-System-blue-500 text-System-grey-000 Chinese-Medium-Body3 text-center break-keep outline-none shadow-none cursor-pointer hover:bg-System-blue-600 focus:bg-System-blue-600 focus:outline-none focus:shadow-[0_0_0_4px_rgba(32,102,236,.12)] active:bg-System-blue-600 active:outline-none active:shadow-none disabled:opacity-35 disabled:outline-none disabled:shadow-none"
            type="submit" @click="updateSearchHistory(searchQuery.trim(), 'add')">
            <i class="tw-icon bg-icon-search tw-icon-white-1 size-[24px] aspect-square bg-24px"></i>
            搜尋
        </button>
    </div>
    <twSearchFilter v-if="!inSide"></twSearchFilter>
</template>

<script setup>
import { ref } from 'vue';

// Ref for collapse
const collapseRef = ref(null);
const isCollapseVisible = ref(false); // 控制collapse是否顯示

const toggleCollapse = () => {
    isCollapseVisible.value = !isCollapseVisible.value;
};

// 進入過渡之前
const beforeEnter = (el) => {
    el.style.height = '0';
};

// 進入過渡時
const enter = (el) => {
    el.style.height = el.scrollHeight + 'px'; // 設置為內容的實際高度
};

// 離開過渡之前
const beforeLeave = (el) => {
    el.style.height = el.scrollHeight + 'px'; // 設置為內容的實際高度
};

// 離開過渡時
const leave = (el) => {
    el.style.height = '0';
};

</script>

<template>
    <div class="w-full max-w-full justify-start items-start flex-col flex-nowrap *:box-border *:first-of-type:border-t" ref="collapseRef">
        <button class="tw-collapse-title flex justify-between items-center w-full max-w-full p-[15px] border-b border-solid border-System-grey-100 text-System-grey-800 Chinese-Regular-Body1 text-start focus:outline-none after:tw-icon after:bg-icon-arrow-left after:tw-icon-grey-1 after:size-[24px] after:aspect-square after:bg-24px after:transition-all after:duration-350 after:ease-in-out" :class="{ show: isCollapseVisible }" @click="toggleCollapse">
            <slot name="title"></slot>
        </button>
        <Transition name="tw-collapse-body"
        enter-active-class="transition-all duration-350 ease-in-out overflow-hidden"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-350 ease-in-out overflow-hidden"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave">
            <div class="tw-collapse-body p-0" :class="{ show: isCollapseVisible }" v-if="isCollapseVisible">
                <slot name="body"></slot>
            </div>
        </Transition>
    </div>
</template>

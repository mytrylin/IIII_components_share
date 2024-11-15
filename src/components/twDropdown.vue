<script setup>
import { ref, watch } from 'vue';

// Ref for dropdown
const dropdownRef = ref(null);
const isDropdownVisible = ref(false); // 控制dropdown是否顯示

// 點擊切換 dropdown
const toggleDropdown = (e) => {
    isDropdownVisible.value = !isDropdownVisible.value;
};

// 點擊空白處關閉 dropdown
const handleClickOutside = (e) => {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        isDropdownVisible.value = false; // 直接控制狀態
    };
};

// 綁定事件
watch(isDropdownVisible, (newVal) => {
    if (newVal) {
        document.addEventListener('click', handleClickOutside);
    } else {
        document.removeEventListener('click', handleClickOutside);
    };
});

</script>

<template>
    <div class="relative h-full" ref="dropdownRef">
        <button class="tw-nav-link tw-dropdown-toggle h-full" @click="toggleDropdown">
            <slot name="toggle"></slot>
        </button>
        <Transition name="tw-dropdown-menu"
        enter-active-class="transition-all duration-150 ease-linear"
        enter-from-class="opacity-0 translate-y-[-16px]"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150 ease-linear"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-[-16px]">
            <div class="tw-dropdown-menu" v-if="isDropdownVisible">
                <slot name="menu"></slot>
            </div>
        </Transition>
    </div>
</template>

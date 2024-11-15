<script setup>
import { ref, inject  } from 'vue';
import twDropdown from '@/components/twDropdown.vue';

// 注入資料
const searchBarBTN = inject('searchBarBTN');

// tCode Component START
import twMenu from '@/components/twMenu.vue';

const skillData = ref(null);
const skillDataCht = ref(null);

const handleChange = ({ data, dataCht }) => {
    skillData.value = data;
    skillDataCht.value = dataCht;
};
// tCode Component END

</script>

<template>
    <div class="tw-search-filter flex justify-start items-start flex-row flex-wrap min768:flex-nowrap gap-[8px] box-border max-w-full">
        <template v-for="items in searchBarBTN" :key="items.id">
            <twDropdown class="tw-searchBtn w-full max-w-full h-full" v-if="items.type === 1" >
                <template #toggle>
                    <span class="inline" :title="items.title">{{ items.title }}</span>
                </template>
                <template #menu>
                    <ol class="w-full max-w-full">
                        <li class="w-full max-w-full p-0 m-0 text-System-grey-800 Chinese-Regular-Body3" v-for="(item, itemIndex) in items.menuItem" :key="itemIndex">
                            <a class="flex w-full max-w-full px-[16px] py-[6px] hover:bg-System-grey-100" href="#" target="_self" :title="item">{{ item }}</a>
                        </li>
                    </ol>
                </template>
            </twDropdown>
            <twMenu :args="items.args" @change="handleChange" v-else>
                <button :id="`tw-args-${items.args}`" class="tw-nav-link tw-dropdown-toggle h-full">
                    {{ items.title }}
                </button>
            </twMenu>
        </template>
    </div>
</template>

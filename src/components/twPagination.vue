<script setup>
import { ref, computed, toRef } from 'vue'
import twLoading from "@/components/twLoading.vue";
const props = defineProps({
  // 總數量
  total: {
    type: Number,
    require: true,
    default: 10
  },
  // 每頁顯示幾筆
  pageSize: {
    type: Number,
    require: true,
    default: 10
  },
  // 當前頁面
  modelValue: {
    type: Number,
    require: true,
    default: 1
  },
  // loaging 參數，有 api 時使用
  loaging: {
    type: Boolean,
    default: false
  },
  // 啟用有 loaging 的版本，有 api 時使用
  useLoading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
const total = toRef(props, 'total')
const pageSize = toRef(props, 'pageSize')
const currentPage = toRef(props, 'modelValue')
const allPage = computed(() => Math.ceil(total.value / pageSize.value))
const isLoading = ref(false)
// const isLoading = toRef(props, 'loaging')   //有 api 時使用

const clickFirst = () => {
  if (currentPage.value > 1) {
    handleChangePage(1)
  }
}
const clickPre = () => {
  if (currentPage.value > 1) {
    handleChangePage(currentPage.value - 1)
  }
}

const clickNext = () => {
  console.log('currentPage : ', currentPage.value)
  console.log('allPage : ', allPage.value)
  console.log('total : ', total.value)
  if (currentPage.value < allPage.value) {
    handleChangePage(currentPage.value + 1)
  }
}
const clickLast = () => {
  if (currentPage.value < allPage.value) {
    handleChangePage(allPage.value)
  }
}

function handleChangePage(value) {
  if (props.useLoading) {
    isLoading.value = true
    // api status ...
    setTimeout(() => isLoading.value = false, 700)
  }
  emit('update:modelValue', value)
  // emit('loading', isLoading.value)   //有 api 時使用
}
</script>

<template>
  <div class="bg-System-grey-000 py-4">
    <nav class="flex gap-2 items-center justify-center mx-auto text-[#777]">
      <!-- 左雙箭頭 << -->
      <i class="block w-6 h-6" 
        :class="[ currentPage === 1 ? 'bg-gofirst-disabled' : 'bg-gofirst cursor-pointer' ]" @click.prevent="clickFirst"></i> 
      <!-- 左單箭頭 < -->
      <i class="backward block w-6 h-6" 
        :class="[ currentPage === 1 ? 'bg-backward-disabled' : 'bg-backward cursor-pointer' ]" @click.prevent="clickPre"></i>
      <!-- 總頁數小於 5 頁，全部顯示 -->
      <template v-if="allPage <= 5" >
        <a v-for="num in allPage" @click.prevent="handleChangePage(num)" 
          :class="{'tw-page-item-active': !isLoading && currentPage === num }" :key="num"
          class="tw-page-item flex items-center justify-center text-center w-[32px] h-[32px] cursor-pointer">
          <template v-if="isLoading && (currentPage === num)"> <twLoading /> </template>
          <template v-else> {{ num }} </template>
        </a>
      </template>

      <!-- 大於 5 頁，根據當前頁數，顯示不同版型 -->
      <template v-else>
        <!-- 當前頁面 = 1 ~ 4-->
        <div v-if="currentPage >= 1 && currentPage < 4" class="flex gap-2">
          <a v-for="num in 4" @click.prevent="handleChangePage(num)" 
            :class="{'tw-page-item-active':  !isLoading && (currentPage === num) }" :key="num"
            class="tw-page-item flex items-center justify-center text-center w-[32px] h-[32px] cursor-pointer">
            <template v-if="isLoading && (currentPage === num)"> <twLoading /> </template>
            <template v-else> {{ num }} </template>
          </a>
          <div class="tw-page-item cursor-not-allowed aspect-square flex flex-auto items-center justify-center text-center tracking-[-4px]" href="#">
            <span>&#65381;&#65381;&#65381;&#65381;</span>
          </div>
        </div>

        <!-- 當前頁面 = 最後 4頁 ~ 最後一頁  -->
        <div v-else-if="currentPage <= allPage && currentPage > allPage - 4" class="flex gap-2">
          <div class="tw-page-item cursor-not-allowed aspect-square flex flex-auto items-center justify-center text-center tracking-[-4px]" href="#">
            <span>&#65381;&#65381;&#65381;&#65381;</span>
          </div>
          <a v-for="num in [4,3,2,1,0]" @click.prevent="handleChangePage(allPage - num)" 
            :class="{'tw-page-item-active': !isLoading && (currentPage === allPage - num) }" :key="num"
            class="tw-page-item flex items-center justify-center text-center w-[32px] h-[32px] cursor-pointer">
            <template v-if="isLoading && (currentPage === allPage - num)"> <twLoading /> </template>
            <template v-else> {{ allPage - num }} </template>
          </a>
        </div>

        <!-- 當前頁面 = 中間頁面 -->
        <div v-else class="flex gap-2">
          <div class="tw-page-item cursor-not-allowed aspect-square flex flex-auto items-center justify-center text-center tracking-[-4px]" href="#">
            <span>&#65381;&#65381;&#65381;&#65381;</span>
          </div>
          <a v-for="num in [-1,0,1,2]" @click.prevent="handleChangePage(currentPage + num)" 
            :class="{ 'tw-page-item-active': !isLoading && (currentPage === currentPage + num) }" :key="num"
            class="tw-page-item flex items-center justify-center text-center w-[32px] h-[32px] cursor-pointer">
            <template v-if="isLoading && (currentPage === currentPage + num)"> <twLoading /> </template>
            <template v-else> {{ currentPage + num }} </template>
          </a>
          <div class="tw-page-item cursor-not-allowed aspect-square flex flex-auto items-center justify-center text-center tracking-[-4px]" href="#">
            <span>&#65381;&#65381;&#65381;&#65381;</span>
          </div>
          <a @click.prevent="handleChangePage(allPage)"
            :class="{ 'tw-page-item-active': !isLoading && (currentPage === allPage) }"
            class="tw-page-item flex items-center justify-center text-center w-[32px] h-[32px] cursor-pointer">
            <template v-if="isLoading && (currentPage === allPage)"> <twLoading /> </template>
            <template v-else> {{ allPage }} </template>
          </a>
        </div>
      </template>
      <!-- 右單箭頭 > -->
      <i class="forward block w-6 h-6"
        :class="[ currentPage >= allPage ? 'bg-forward-disabled' : 'bg-forward cursor-pointer' ]" @click.prevent="clickNext"></i> 
      <!-- 右雙箭頭 >> -->
      <i class="golast block w-6 h-6" 
        :class="[ currentPage >= allPage ? 'bg-golast-disabled' : 'bg-golast cursor-pointer' ]" @click.prevent="clickLast"></i> 
    </nav>
  </div>

</template>
<style scoped>
</style>


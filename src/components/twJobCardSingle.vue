<script setup>
import { ref, nextTick, onMounted, watch, computed, toRef } from 'vue'
const props = defineProps({
  // 資料物件
  modelValue: {
    type: Object,
    require: true,
    default: () => {}
  },
})

const emit = defineEmits(['update:modelValue'])
const cradItem = toRef(props, 'modelValue')

const formatSalary = computed(() => (salary='') => {
    // 提取數字和文字部分
    const numPart = salary.match(/\d+/g)
    const textPart = salary.match(/[^\d~]+/g).join('').trim()

    if (numPart && numPart.length === 2) {
      let [firstNumber, secondNumber] = numPart.map(Number)

      // 若必要，交換數字
      if (secondNumber < firstNumber) {
        [firstNumber, secondNumber] = [secondNumber, firstNumber]
      }

      // 重組 pay 字段
      if(firstNumber!==0) return `${textPart} ${firstNumber}~${secondNumber} 元`
      if(firstNumber==0) return `${textPart} ${secondNumber} 元`
    }

    if(salary.includes('面議')) {
      return `面議（經常性薪資達4萬元或以上）`
    } else {
      return `${salary} 元以上`
    }
})

const favoriteHandle = () => {
  cradItem.value.favorite = cradItem.value.favorite > 0 ? 0 : 1
  emit('update:modelValue', cradItem.value)
}

</script>

<template>
  <a :href="`https://www.1111.com.tw/job/${cradItem.dNo}/`" target="_blank"
    class="tw-job-card w-full p-[22px_15px] border border-[#E9ECEF] bg-white rounded-xl m-[5px] 
      min992:max-w-calc-3 
      min768:max-w-calc-2
      min576:max-w-calc-1
      hover:bg-sky-50 transition-colors duration-350 ease-in-out">
    <div class="flex items-center justify-between">
      <div class="text-lg font-medium text-[#333333] truncate">{{ cradItem?.position0 ?? '' }}</div>
      <i @click.stop.prevent ="favoriteHandle()"
        class="bg-icon-favorite bg-no-repeat font-medium cursor-pointer 
          p-[7px_15px] w-[20px] h-[26px] text-blue-500
          activie:opacity-100"
        :class="[
          { 'bg-icon-favorite-hover': cradItem.favorite > 0 },
          { 'hover:bg-icon-favorite-hover opacity-30 transition-bg duration-350 ease-in-out': cradItem.favorite <= 0 },
        ]"
      >
      </i>
    </div>
    <span class="text-lg font-medium text-[#333333] truncate">{{ cradItem?.trade ?? '' }}</span>
    <div class="font-normal text-[#5d5d5d] mb-2.5 truncate">{{ cradItem?.organs ?? '' }}</div>
    <div class="flex items-center justify-between">
      <div class="text-blue-500 font-bold flex-1 truncate max-md:pr-1">{{ formatSalary(cradItem?.salary ?? '') }}</div>
    </div>
  </a>
</template>
<style scoped>
</style>


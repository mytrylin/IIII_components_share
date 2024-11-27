<script setup>
import { ref, computed, toRef } from 'vue'

const props = defineProps({
  // 總數量
  value: {
    type: [String, Number],
    require: true,
    default: 1
  },
  modelValue: {
    type: [String, Number],
    require: true,
    default: 1
  },
  name: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  default: {
    type: Boolean,
    default: false
  },
  tooltip: {
    type: String,
    default: ''
  },
  radioCase: {
    type: Number,
    default: 0   // 0 = General, 1 = Button
  }
})
const modelValueRef = toRef(props, 'modelValue')

const emit = defineEmits(['update:modelValue'])
function handleChangeRadio(value) {
  emit('update:modelValue', value)
}
</script>

<template>
  <!-- radio button -->
  <div v-if="props.radioCase === 1"
    class="inline-block mr-1 group">
    <label class="relative">
      <input class="hidden" :disabled="disabled" @click="handleChangeRadio(value)"
        type="radio" :name="name" :id="id" :value="value" v-model="modelValueRef" :checked="modelValueRef === value" />
      <span
        class="text-Body3 rounded-lg border border-solid border-gray-300 box-border p-[14px_8px]
          hover:border-blue-300 hover:bg-blue-50 hover:text-blue-500 
        "
        :class="[ 
          modelValueRef === value 
            ? disabled 
              ? `border-blue-300 bg-blue-50 text-blue-400 cursor-default 
                 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-400`
              : 'border-blue-300 bg-blue-100 text-blue-600 cursor-pointer'
            : disabled
              ? `border-gray-200 bg-gray-100 text-gray-500 cursor-default 
                 hover:border-gray-200 hover:bg-gray-100 hover:text-gray-400`
                : 'text-gray-600 cursor-pointer'
        ]"
      >{{ label }}</span>

      <p v-if="tooltip" class=" 
          absolute text-xs 
          z-[99] max-w-[280px] min-w-[280px] bg-[#F8F9FC] color-[#444444]
          border border-[#1383B5] border-solid rounded-lg
          boxShadow-qtb-shadow m-0 p-[14px_16px]
          top-[30px] left-[30px] hidden
          group-hover:block
        "
        >{{ tooltip }}</p>
    </label>
  </div>

  <!-- radio general  -->
  <div v-else
    class="flex items-center justify-center mr-5">
    <input type="radio" class=" 
        w-4 h-4 rounded-[50%] appearance-none border border-solid border-gray-400
        bg-white outline-none resize-none mr-0.5
        checked:bg-radio-checked checked:border-[#1383B5]
      "
      :class="{ 'border-gray-200 bg-gray-300': disabled }"
      @click="handleChangeRadio(value)" :value="value" v-model="modelValueRef"
       :name="name" :id="id" :checked="modelValueRef === value" :disabled="disabled">
    <label class="mr-1" :for="id">{{ label }}</label>
    <div v-if="tooltip" 
      class="group
        flex items-center justify-center cursor-pointer relative
      "
    >
      <img src="https://images.1111.com.tw/event/img/zone/1111site/chatBot/icon-question.webp" alt="icon" class="icon-question">
      <p class=" 
        absolute text-xs 
        z-[99] max-w-[280px] min-w-[280px] bg-[#F8F9FC] color-[#444444]
        border border-[#1383B5] border-solid rounded-lg
        boxShadow-qtb-shadow m-0 p-[14px_16px]
        top-[22px] left-[0px] hidden
        group-hover:block
      "
      >{{ tooltip }}</p>
    </div>
  </div>
</template>
<style scoped>
</style>


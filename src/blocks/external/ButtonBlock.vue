<script setup lang="ts">
import type { ButtonBlockInfo } from '@/types/block'
import { onMounted, ref, watch } from 'vue'
const button = ref<HTMLButtonElement>()
const buttonClass = ref('button')

const props = defineProps<{
  blockInfo: ButtonBlockInfo
}>()

const updateMethod = () => {
  for (let i = 0; i < props.blockInfo.events.length; i++) {
    let funcTest = new Function('return ' + props.blockInfo.events[i].func)
    button.value?.addEventListener(props.blockInfo.events[i].name, funcTest())
  }
}
onMounted(() => {
  updateMethod()
})
watch(() => props.blockInfo.events, updateMethod, { deep: true })
</script>

<template>
  <button :class="[buttonClass, props.blockInfo.props.type]" ref="button">
    {{ props.blockInfo.props.content }}
  </button>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
}

.primary {
  background-color: var(--color-primary);
}

.error {
  background-color: #ffdb94;
}

.success {
  background-color: #45fd82;
}

.warning {
  background-color: #f8a5a5;
}
</style>

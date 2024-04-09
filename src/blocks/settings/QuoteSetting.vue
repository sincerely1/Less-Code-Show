<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch } from 'vue'

import type { QuoteBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: QuoteBlockInfo
}>()

const emit = defineEmits<{ (event: 'change', block: QuoteBlockInfo): void }>()

const { values, defineField } = useForm({
  initialValues: {
    content: props.blockInfo.props.content,
    status: props.blockInfo.props.status
  }
})

const [content, contentAttrs] = defineField('content')
const [status, statusAttrs] = defineField('status')

watch([values], ([newValues]) => {
  emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
  <div class="quote-setting">
    <input class="content-input" v-model="content" v-bind="contentAttrs" />
    <select class="content-select" v-model="status" v-bind="statusAttrs">
      <option value="success">success</option>
      <option value="warning">warning</option>
      <option value="error">error</option>
    </select>
    <vue-json-pretty showIcon showLineNumber editable :data="blockInfo" />
  </div>
</template>

<style scoped>
.quote-setting {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  font-size: var(--font-size-large);
  border-radius: 8px;

  /* background-color: ; */
}

.content-input {
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}

.content-select {
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>

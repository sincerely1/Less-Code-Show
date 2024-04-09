<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch } from 'vue'

import type { ParagraphBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: ParagraphBlockInfo
}>()

const emit = defineEmits<{ (event: 'change', block: ParagraphBlockInfo): void }>()

const { values, defineField } = useForm({
  initialValues: {
    content: props.blockInfo.props.content
  }
})

const [content, contentAttrs] = defineField('content')

watch([values], ([newValues]) => {
  emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
  <div class="paragraph-setting">
    <textarea class="content-input" v-model="content" v-bind="contentAttrs" />
    <vue-json-pretty showIcon showLineNumber editable :data="blockInfo" />
  </div>
</template>

<style scoped>
.paragraph-setting {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  font-size: var(--font-size-large);
  border-radius: 8px;
}

.content-input {
  width: 100%;
  height: 200px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>

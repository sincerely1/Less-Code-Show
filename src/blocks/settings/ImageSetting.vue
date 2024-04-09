<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch } from 'vue'

import type { ImageBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: ImageBlockInfo
}>()

const emit = defineEmits<{ (event: 'change', block: ImageBlockInfo): void }>()

const { values, defineField } = useForm({
  initialValues: {
    url: props.blockInfo.props.url
  }
})

const [url, urlAttrs] = defineField('url')

watch([values], ([newValues]) => {
  emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
  <div class="image-setting">
    <input type="url" class="content-input" v-model="url" v-bind="urlAttrs" />
    <vue-json-pretty showIcon showLineNumber editable :data="blockInfo" />
  </div>
</template>

<style scoped>
.image-setting {
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
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border: 1px solid var(--color-gray-300);
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}
</style>

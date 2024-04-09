<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch } from 'vue'

import type { HeroTitleBlockInfo } from '@/types/block'
const props = defineProps<{
  blockInfo: HeroTitleBlockInfo
}>()

const emit = defineEmits<{ (event: 'change', block: HeroTitleBlockInfo): void }>()

const { values, defineField } = useForm({
  initialValues: {
    content: props.blockInfo.props.content,
    level: props.blockInfo.props.level
  }
})

const [content, contentAttrs] = defineField('content')
const [level, levelAttrs] = defineField('level')

watch([values], ([newValues]) => {
  emit('change', { ...props.blockInfo, props: { ...props.blockInfo.props, ...newValues } })
})
</script>

<template>
  <div class="hero-title-setting">
    <input
      class="level-input"
      type="range"
      v-model="level"
      v-bind="levelAttrs"
      min="1"
      max="6"
      value="90"
      step="1"
    />
    <input class="content-input" v-model="content" v-bind="contentAttrs" />
    <vue-json-pretty showIcon showLineNumber editable :data="blockInfo" />
  </div>
</template>

<style scoped>
.hero-title-setting {
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

.level-input {
  width: 100%;

  /* 在做组件库的时候，input 是有一个 size 属性，sm、md、lg */
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  outline-style: none;
}
</style>

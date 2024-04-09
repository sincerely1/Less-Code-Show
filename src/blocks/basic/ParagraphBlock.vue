<script setup lang="ts">
import type { ParagraphBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: ParagraphBlockInfo
}>()
</script>

<template>
  <div class="paragraph">
    <p>{{ props.blockInfo.props.content }}</p>
  </div>
</template>

<style scoped>
.paragraph {
  font-size: 14px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: justify !important;
}
</style>

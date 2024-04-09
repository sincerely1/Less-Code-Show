<script setup lang="ts">
import type { HeroTitleBlockInfo } from '@/types/block'
import { computed } from 'vue'

const props = defineProps<{
  blockInfo: HeroTitleBlockInfo
}>()
const level_style = computed(() => {
  return 'h' + props.blockInfo.props.level.toString() + '-title'
})
</script>

<template>
  <h1 :class="level_style">
    {{ props.blockInfo.props.content }}
  </h1>
</template>

<style scoped>
.h1-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}

.h2-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin: 0;
}

.h3-title {
  font-size: 1.6rem;
  font-weight: 500;
  margin: 0;
}

.h4-title {
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0;
}

.h5-title {
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0;
}

.h6-title {
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
}
</style>

<template>
  <component :is="renderer" class="chart-container" :block-info="blockInfo" />
</template>

<script setup lang="ts">
import EchartsRenderer from './EchartsRenderer/EchartsRenderer.vue'
import CanvasChartRenderer from './CanvasChartRenderer/CanvasChartRenderer.vue'
import SVGChartRenderer from './SVGChartRenderer/SVGChartRenderer.vue'
import { computed } from 'vue'
import type { ChartBlockInfo } from '@/types/block'

const props = defineProps<{
  blockInfo: ChartBlockInfo
}>()

const renderer = computed(() => {
  if (!props.blockInfo) return ''
  switch (props.blockInfo.props.chartType) {
    case 'echarts': {
      return EchartsRenderer
    }
    case 'canvas': {
      return CanvasChartRenderer
    }
    case 'svg': {
      return SVGChartRenderer
    }
    default:
      return ''
  }
})
</script>

<!-- <style scoped></style> -->

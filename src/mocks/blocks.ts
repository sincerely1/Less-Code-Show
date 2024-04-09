import type { BlockInfo } from '@/types/block'

export const blocks: BlockInfo[] = [
  {
    id: '1',
    type: 'quote',
    label: '引述',
    props: {
      content: '引述文本 quote',
      status: 'success'
    }
  },
  {
    id: '2',
    type: 'baseChart',
    label: '基础图表',
    props: {
      chartType: 'echarts'
    }
  },
  {
    id: '3',
    type: 'notes',
    label: '笔记',
    props: {
      content: `
          <p>I’m <em>running</em> Tiptap <s>with</s> Vue.js. 🎉</p>
          <p><strong>You</strong> can also teach the editor new things. For example to recognize hex colors and add a color</p>
          <p> swatch on the fly: #FFF, #0D0D0D, #616161, #A975FF, #FB5151, #FD9170, #FFCB6B, #68CEF8, #80cbc4, #9DEF8F </p>
        `
    }
  },
  {
    id: '4',
    type: 'heroTitle',
    label: '标题',
    props: {
      content: '标题',
      level: 5
    }
  },
  {
    id: '5',
    type: 'image',
    label: '图片',
    props: {
      url: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=1600'
    }
  },
  {
    id: '6',
    type: 'paragraph',
    label: '段落',
    props: {
      content: `大自然是我们生活中不可或缺的一部分，它包含了广袤的森林、蔚蓝的海洋、壮丽的山川和丰富的生物。
      大自然的美丽和神奇常常让人惊叹不已，每一个细微的变化都蕴含着无限的力量和智慧。
      在大自然中，我们可以感受到生命的律动和平衡，每一个生灵都在自己的领域中发挥着作用，构成了一个完美的生态系统。
      保护大自然，就是在保护我们自己的未来，唯有尊重和珍惜大自然，我们才能与之和谐共处，共同创造美好的明天。
      让我们一起走近大自然，感受它的奇迹和力量，学会尊重和保护它，让我们的世界更加美好。`
    }
  },
  {
    id: '7',
    type: 'button',
    label: '按钮',
    props: {
      content: '按钮',
      type: 'primary'
    },
    events: [{ name: 'click', func: '' }]
  },
  {
    id: '8',
    type: 'form',
    label: '表单',
    props: {
      fields: []
    }
  }
]

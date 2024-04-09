export type BasicBlockType = 'heroTitle' | 'paragraph' | 'baseChart' | 'quote' | 'image'
export type ExternalBlockType = 'button' | 'form' | 'notes'

export type BlockType = BasicBlockType | ExternalBlockType
type event = {
  name: string
  func: string
}
export interface BaseBlockInfo {
  id: string
  label: string
}

// basic

export interface HeroTitleBlockInfo extends BaseBlockInfo {
  type: 'heroTitle'
  props: {
    level: number
    content: string
  }
}

export interface ParagraphBlockInfo extends BaseBlockInfo {
  type: 'paragraph'
  props: {
    content: string
  }
}

export interface QuoteBlockInfo extends BaseBlockInfo {
  type: 'quote'
  props: {
    status: any
    content: string
  }
}

export interface ImageBlockInfo extends BaseBlockInfo {
  type: 'image'
  props: {
    url: string
  }
}

// external
export interface ButtonBlockInfo extends BaseBlockInfo {
  type: 'button'
  props: {
    content: string
    type: any
  }
  events: Array<event>
}

export interface FormBlockInfo extends BaseBlockInfo {
  type: 'form'
  props: {
    fields: {
      type: string
      label: string
      placeholder?: string
      required?: boolean
    }[]
  }
}

export interface NotesBlockInfo extends BaseBlockInfo {
  type: 'notes'
  props: {
    content: string
  }
}

export type ChartType = 'echarts' | 'canvas' | 'svg'

export interface ChartBlockInfo extends BaseBlockInfo {
  type: 'baseChart'
  props: {
    chartType: ChartType
  }
}

export type BlockInfo =
  // basic
  | HeroTitleBlockInfo
  | ParagraphBlockInfo
  | QuoteBlockInfo
  | ImageBlockInfo
  | ChartBlockInfo
  // external
  | ButtonBlockInfo
  | FormBlockInfo
  | NotesBlockInfo

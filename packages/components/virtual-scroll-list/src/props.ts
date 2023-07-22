import { DefineComponent, ExtractPropTypes, PropType } from 'vue'

export const virtualProps = {
  dataSources: {
    // 传入要渲染的总数居
    type: Array,
    required: true,
    default: () => []
  },
  dataKey: {
    // 每项数据的标识
    type: String,
    required: true
  },
  keeps: {
    // 默认显示的个数
    type: Number,
    default: 30
  },
  estimateSize: {
    // 大约的高度
    type: Number,
    default: 80
  },
  dataComponent: {
    // 用户告诉我们用哪个组件来渲染
    type: [Object, Function] as PropType<DefineComponent<{}, {}, any>>,
    required: true
  }
} as const

export type VirtualProps = ExtractPropTypes<typeof virtualProps>

export type RangeOptions = {
  start: number
  end: number
  padFront: number
  padBehind: number
}

export type VirtualOptions = {
  keeps: number
  buffer: number
  estimateSize: number
  uniqueIds: string[]
}

export type updateType = (range: RangeOptions) => void

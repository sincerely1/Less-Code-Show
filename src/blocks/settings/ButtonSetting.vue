<script setup lang="ts">
import { useForm } from 'vee-validate'
import { watch, ref, reactive } from 'vue'
import type { ButtonBlockInfo } from '@/types/block'
const props = defineProps<{
  blockInfo: ButtonBlockInfo
}>()
const emit = defineEmits<{ (event: 'change', block: ButtonBlockInfo): void }>()
let nowEvent = reactive({
  name: 'click',
  func: 'function tmp(){}'
})
const tmp = ref('')
const visibleCode = ref(false)
const { values, defineField } = useForm({
  initialValues: {
    content: props.blockInfo.props.content,
    type: props.blockInfo.props.type
  }
})
const openDialog = (data: any) => {
  visibleCode.value = true
  nowEvent.func = data.func
  nowEvent.name = data.name
  tmp.value = data.func
}
const changeFunc = () => {
  visibleCode.value = false
  nowEvent.func = tmp.value
}

const [content, contentAttrs] = defineField('content')
const [status, statusAttrs] = defineField('type')

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true
}
watch([values], ([newValues]) => {
  emit('change', {
    ...props.blockInfo,
    props: { ...props.blockInfo.props, ...newValues }
  })
})
watch([nowEvent], ([newValues]) => {
  let tmpEvents = props.blockInfo.events
  for (let i = 0; i < tmpEvents.length; i++) {
    if (tmpEvents[i].name == newValues.name) {
      tmpEvents[i] = newValues
    }
  }
  emit('change', {
    ...props.blockInfo,
    events: tmpEvents
  })
})
</script>

<template>
  <div class="quote-setting">
    <input
      class="content-input"
      name="content"
      v-model="content"
      v-bind="contentAttrs"
      placeholder="输入按钮内容"
    />
    <select class="content-select" v-model="status" v-bind="statusAttrs">
      <option value="primary">primary</option>
      <option value="success">success</option>
      <option value="warning">warning</option>
      <option value="error">error</option>
    </select>

    <button
      class="code-button"
      v-for="event of props.blockInfo.events"
      @click="openDialog(event)"
      :key="event.name"
    >
      编写{{ event.name }}代码
    </button>

    <vue-json-pretty showIcon showLineNumber editable :data="blockInfo" />
    <el-dialog v-model="visibleCode" :title="nowEvent.name" width="500px">
      <div class="code-board">
        <vue-monaco-editor v-model:value="tmp" theme="vs" :options="MONACO_EDITOR_OPTIONS" />
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="visibleCode = false">取消</el-button>
          <el-button type="primary" @click="changeFunc"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
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

.code-board {
  width: 100%;
  height: 500px;
}

.content-input {
  width: 50%;
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
  height: 32px;
  margin-top: 8px;
  padding: 0 8px;
  border-radius: 8px;
  outline-style: none;
  color: var(--color-gray-800);
}

.code-button {
  background-color: var(--color-gray-200);
  border: none;
  widows: 100%;
  padding: 5px;
  border-radius: 3px;
  color: var(--color-gray-900);
}
</style>

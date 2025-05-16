<template>
  <div>
    <SearchView />
    <a-table :bordered="table.bordered || true" :columns="table.columns" :data-source="tableData"
      :row-key="table.rowKey || 'id'" :scroll="table.scroll" :pagination="pagination">
      <template #bodyCell="{ column, record, text, index }">
        <slot name="bodyCell" :column="column" :record="record" :text="text" :index="index"></slot>

        <template v-if="column.dataIndex === 'action'">
          <a-space>
            <a-button v-for="(item, i) in table.actions" :key="i" :type="item.type"
              @click="onClick(item.key, record.id)">{{ item.label }}</a-button>
            <slot name="action" :record="record"></slot>
          </a-space>
        </template>
      </template>
    </a-table>
    <a-modal v-bind="modal.config" :open="open !== 0" destroy-on-close @ok="onModalOk" @cancel="onModalCancel">
      <a-form v-bind="modal.form.config" ref="formRef" :model="formData" :disabled="open !== 1">
        <FormItem v-model:value="formData" :fields="modal.form.fields" :fieldPath="[]" />
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref,  nextTick } from 'vue'
import type { IPageOptions ,IFormItem} from './table-page'
import { useSearch } from '@/hooks/useSearch'
import { useTable } from '@/hooks/useTable'
import type { FormExpose } from 'ant-design-vue/es/form/Form'
import {
  Button as AButton,
  Modal as AModal,
  Form as AForm,
  Table as ATable,
  Space as ASpace,

  message
} from 'ant-design-vue'


import FormItem from './formItem/formItem.vue'


const props = withDefaults(defineProps<{ options: IPageOptions }>(), {})

const search = computed(() => props.options.search)
const table = computed(() => props.options.table)
const modal = computed(() => props.options.modal)
const API = computed(() => props.options.API)
const open = ref(0)
const formRef = ref<FormExpose>()



const formData = ref<{ [key: string]: any }>({})



const buildInitialFormData=(fields: IFormItem[]): { [key: string]: any } => {
  const result: any = {}

  fields.forEach(field => {
    if (!field.name) return

    if (field.type === 'object') {
      result[field.name] = buildInitialFormData(field.fields || [])
    } else {
      result[field.name] = undefined // 或 '', null，视你的业务情况而定
    }
  })

  return result
}



const onCreate = () => {
  console.log('新增')
  open.value = 1
  formData.value = buildInitialFormData(modal.value.form.fields)
}
const onClick = (key: number, id: number) => {
  switch (key) {
    case 1:
      console.log('编辑')
      API.value.detailApi(id).then((res) => {
        console.log(res)
        open.value = 1
        // 解决初始化后数据没同步进去问题
        formData.value = buildInitialFormData(modal.value.form.fields)
        nextTick(()=>{
          formData.value = res
        })
      })
      break
    case 2:
      API.value.detailApi(id).then((res) => {
        open.value = 2
        formData.value = buildInitialFormData(modal.value.form.fields)
        nextTick(()=>{
          formData.value = res
        })
      })
      console.log('查看')
      break
    case 3:
      AModal.confirm({
        title: '确定删除吗？',
        content: '删除后不可恢复',
        onOk: () => {
          API.value.delApi(id).then(() => {
            message.success('删除成功')
            searchApi.onSearch()
          })
        },
        onCancel: () => { }
      })

      console.log('删除')
      break
    default:
      break
  }
}

const onModalOk = async () => {
  console.log(111)
  if (open.value === 1 && formRef.value) {
    try {
      await formRef.value.validateFields()
      console.log(formData)
      if (formData.value.id) await API.value.putApi(formData.value)
      if (!formData.value.id) await API.value.postApi(formData.value)
      await formRef.value.resetFields()
      open.value = 0
      searchApi.onSearch()
      message.success('操作成功')
    } catch (error) {
      console.log(error)
    }
  } else {
    open.value = 0
  }
}

const onModalCancel = () => {
  if (formRef.value) {
    console.log(1)
    formRef.value.resetFields()
  }
  open.value = 0
}

const { tableData, pagination, onSearch, onReset } = useTable(
  API.value.getPage,
  table.value.init || true,
  table.value.initParam
)

const searchData = computed(() => {
  return {
    ...search.value,
    onCreate,
    onSearch,
    onReset
  }
})


const [SearchView, searchApi] = useSearch(searchData)

defineExpose({
  onSearch: searchApi.onSearch
})
</script>

<style scoped lang="less"></style>

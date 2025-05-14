<template>
  <div>
    <SearchView />
    <a-table
      :bordered="table.bordered || true"
      :columns="table.columns"
      :data-source="tableData"
      :row-key="table.rowKey || 'id'"
      :scroll="table.scroll"
      :pagination="pagination"
    >
      <template #bodyCell="{ column, record, text, index }">
        <slot name="bodyCell" :column="column" :record="record" :text="text" :index="index"></slot>

        <template v-if="column.dataIndex === 'action'">
          <a-space>
            <a-button
              v-for="(item, i) in table.actions"
              :key="i"
              :type="item.type"
              @click="onClick(item.key, record.id)"
              >{{ item.label }}</a-button
            >
            <slot name="action" :record="record" ></slot>
          </a-space>
        </template>
      </template>
    </a-table>
    <a-modal
      :title="modal.title"
      :open="open !== 0"
      destroy-on-close
      @ok="onModalOk"
      @cancel="onModalCancel"
    >
      <a-form v-bind="modal.form.config" ref="formRef" :model="formData" :disabled="open !== 1">
        <a-form-item v-for="field in modal.form.fields" :key="field.name as string" v-bind="field">
          <a-switch
            v-if="field.type === 'switch'"
            v-model:checked="formData[field.name as string]"
            v-bind="(field.config as SwitchProps)"
          />
          <a-select v-else-if="field.type === 'select'" v-model:value="formData[field.name as string]" v-bind="(field.config as SelectProps)" />
          <a-input v-else-if="field.type === 'input'" v-model:value="formData[field.name as string]" v-bind="(field.config as InputProps)" />
          <a-input-number v-else-if="field.type === 'number'" v-model:value="formData[field.name as string]" v-bind="(field.config as InputNumberProps)" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import {computed,ref,reactive ,nextTick} from 'vue'
  import type { IPageOptions } from './table-page.js'
  import { useSearch } from '@/hooks/useSearch'
  import { useTable } from '@/hooks/useTable'
  import type { FormExpose } from 'ant-design-vue/es/form/Form'
  import { Button as AButton,Input as AInput, Modal as AModal,Form as AForm, FormItem as AFormItem,
    Table as ATable,
    Space as ASpace,
    Switch as ASwitch,
    InputNumber as AInputNumber,
    Select as ASelect,
    message } from 'ant-design-vue'

import type {InputProps, TextAreaProps} from 'ant-design-vue/es/input'
import type {InputNumberProps} from 'ant-design-vue/es/input-number'
import type {SelectProps} from 'ant-design-vue/es/select'
import type {SwitchProps} from 'ant-design-vue/es/switch'


  const props = withDefaults(defineProps<{ options: IPageOptions }>(), {})

  const search = computed(() => props.options.search)
  const table = computed(() => props.options.table)
  const modal = computed(() => props.options.modal)
  const API = computed(() => props.options.API)
  const open = ref(0)
  const formRef = ref<FormExpose>()
  const formData = reactive<{ [key: string]: any }>({
    name: ''
  })
  const onCreate = () => {
    console.log('新增')
    open.value = 1
  }
  const onClick = (key: number, id: number) => {
    switch (key) {
      case 1:
        console.log('编辑')
       API.value.detailApi(id).then((res) => {
          console.log(res)
          open.value = 1
          nextTick(() => {
            Object.assign(formData, res)
          })
        })
        break
      case 2:
      API.value.detailApi(id).then((res) => {
          open.value = 2
          nextTick(() => {
            Object.assign(formData, res)
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
          onCancel: () => {}
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
        if (formData.id) await API.value.putApi(formData)
        if (!formData.id) await API.value.postApi(formData)
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

const searchData = computed(()=>{
  return {
    ...search.value,
    onCreate,
    onSearch,
    onReset
  }
})


  const [SearchView, searchApi] = useSearch(searchData)
</script>

<style scoped lang="less"></style>

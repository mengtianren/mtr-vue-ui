<template>
  <template v-if="fields.length > 0">
    <template v-for="field in fields" :key="(field.name as string)">
      <template v-if="field.type === 'object'">
        <DynamicFormItem v-model:value="formData" :fields="field.fields" :fieldPath="[...fieldPath, field.name]" />
      </template>
      <template v-else>
        <a-form-item v-bind="field" :name="[...fieldPath, field.name]" v-if="field.type">
          <a-switch v-if="field.type === 'switch'" :checked="getValue(formData, [...fieldPath, field.name])"
            @update:checked="e => setValue([...fieldPath, field.name], e)" v-bind="(field.config as SwitchProps)" />
          <a-select v-else-if="field.type === 'select'" :value="getValue(formData, [...fieldPath, field.name])"
            @update:value="e => setValue([...fieldPath, field.name], e)" v-bind="(field.config as SelectProps)" />
          <a-input v-else-if="field.type === 'input'" :value="getValue(formData, [...fieldPath, field.name])"
            @update:value="e => setValue([...fieldPath, field.name], e)" v-bind="(field.config as InputProps)" />
          <a-input-number v-else-if="field.type === 'number'" :value="getValue(formData, [...fieldPath, field.name])"
            @update:value="e => setValue([...fieldPath, field.name], e)" v-bind="(field.config as InputNumberProps)" />
        </a-form-item>
      </template>

    </template>
  </template>


</template>

<script setup lang="ts">
import type { IFormItem } from '../table-page'
import {
  Input as AInput,
  FormItem as AFormItem,
  Switch as ASwitch,
  InputNumber as AInputNumber,
  Select as ASelect,
} from 'ant-design-vue'

import type { InputProps, TextAreaProps } from 'ant-design-vue/es/input'
import type { InputNumberProps } from 'ant-design-vue/es/input-number'
import type { SelectProps } from 'ant-design-vue/es/select'
import type { SwitchProps } from 'ant-design-vue/es/switch'
defineOptions({
  name: 'DynamicFormItem'
})
interface IFormData {
  [key: string]: any
}

const formData = defineModel<IFormData>('value', { required: true, default: () => ({}) })

withDefaults(defineProps<{ fields: IFormItem[], fieldPath: string[] }>(), {
})

const getValue = (obj: IFormData, keys: string[]): any => {

  // return keys.reduce((acc: IFormData, key: string) =>{
  //   console.warn( acc?.[key])
  //   return  acc?.[key]
  // }, obj)||undefined

  try {
    return keys.reduce((acc: any, key: string) => {
      if (acc == null || typeof acc !== 'object') return undefined
      return acc[key]
    }, obj)
  } catch (e) {
    return undefined
  }
}
const setValue = (keys: string[], value: any): void => {
  keys.reduce((acc, key, index) => {
    if (index === keys.length - 1) {
      acc[key] = value // 最后一个 key，设置值
    } else {
      if (!(key in acc) || typeof acc[key] !== 'object') {
        acc[key] = {} // 如果不存在或不是对象，初始化
      }
      return acc[key] // 向下一层递归
    }
    return acc
  }, formData.value)
}
</script>

<style scoped lang="less"></style>
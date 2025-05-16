import type { ColumnProps } from 'ant-design-vue/es/table'
import type { ButtonType } from 'ant-design-vue/es/button'
import type { FormProps, FormItemProps } from 'ant-design-vue/es/form'
import type { InputProps, TextAreaProps } from 'ant-design-vue/es/input'
import type { InputNumberProps } from 'ant-design-vue/es/input-number'
import type { SelectProps } from 'ant-design-vue/es/select'
import type { SwitchProps } from 'ant-design-vue/es/switch'
import type { ModalProps } from 'ant-design-vue/es/modal'
// import type {} from './api'

export type FieldType = 'number' | 'string' | 'datapicker' | 'rangepicker' | 'select' | 'treeselect' // 可扩展

interface BaseField {
  type: FieldType
  label: string
  name: string
}

interface NumberField extends BaseField {
  type: 'number'
}
interface StringField extends BaseField {
  type: 'string'
}
export type TDatePicker = 'hour' | 'date' | 'month' | 'year'
interface DataPickerField extends BaseField {
  type: 'datapicker',
  picker: TDatePicker
}
export interface RangePickerField extends BaseField {
  type: 'rangepicker',
  picker: TDatePicker,
  config: { startKey: string, endKey: string }
}

export interface SelectField extends BaseField {
  type: 'select' | 'treeselect'
  options: Array<{ value: string | number; label: string }>
}

export type TSearchOption = NumberField | StringField | DataPickerField | RangePickerField | SelectField

export interface ISearchEvent {
  onSearch?: (props?: { [key: string]: any }) => void
  onReset?: () => void
  onCreate?: () => void
  onImport?: () => void
  onExport?: () => void
}

export interface IField extends ISearchEvent {
  [key: string]: any
}
export interface ISearchExpose {
  setQueryParam: () => void
  onSearch: (type?: boolean) => void
  onReset: () => void
  onCreate: () => void
  onImport: () => void
  onExport: () => void
}
interface IAction {
  label: string
  key: 1 | 2 | 3
  type?: ButtonType
  icon?: string
}
interface ISearch {
  searchOptions: TSearchOption[]
  enableCreate?: boolean
}

interface ITable {
  className?: string
  columns: ColumnProps[]
  actions: IAction[]
  initParam: Param
  rowKey?: string
  scroll?: object
  bordered?: boolean
  init?: boolean
}


export type TFormItemType = 'input' | 'textarea' | 'select' | 'switch' | 'number' | 'object'

// 基础字段定义
interface IBaseFormItem extends FormItemProps {
  name: string
  label?: string
}

// 单个组件类型
interface IInputFormItem extends IBaseFormItem {
  type: 'input'
  config?: InputProps
}

interface ITextareaFormItem extends IBaseFormItem {
  type: 'textarea'
  config?: TextAreaProps
}

interface ISelectFormItem extends IBaseFormItem {
  type: 'select'
  config?: SelectProps
}

interface ISwitchFormItem extends IBaseFormItem {
  type: 'switch'
  config?: SwitchProps
}

interface INumberFormItem extends IBaseFormItem {
  type: 'number'
  config?: InputNumberProps
}

// object 嵌套字段（递归）
interface IObjectFormItem extends IBaseFormItem {
  type: 'object'
  fields: IFormItem[]
}

// 所有字段的联合类型
export type IFormItem =
  | IInputFormItem
  | ITextareaFormItem
  | ISelectFormItem
  | ISwitchFormItem
  | INumberFormItem
  | IObjectFormItem

interface IModal {
config:ModalProps
  form: {
    config: FormProps
    fields: IFormItem[]
  }
}


export interface IPAI {
  getPage: (params: Param) => Promise<any>
  detailApi: (id: number) => Promise<{ [key: string]: any }>
  delApi: (id: number) => Promise<any>
  putApi: (data: any) => Promise<any>
  postApi: (data: any) => Promise<any>
}

interface IBasePageOptions {
  search: ISearch
  table: ITable
  modal: IModal
}



export interface IPageOptions extends IBasePageOptions {
  API: IPAI
}


export interface IPAIJSON {
  getPage: string
  detailApi: string
  delApi: string
  putApi: string
  postApi: string
}
export interface IPageOptionsJSON extends IBasePageOptions {
  API: IPAIJSON
}
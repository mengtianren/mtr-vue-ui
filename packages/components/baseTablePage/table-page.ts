import type { ColumnProps } from 'ant-design-vue/es/table'
import type { ButtonType } from 'ant-design-vue/es/button'
import type { FormProps, FormItemProps } from 'ant-design-vue/es/form'
import type { InputProps, TextAreaProps } from 'ant-design-vue/es/input'
import type { InputNumberProps } from 'ant-design-vue/es/input-number'
import type { SelectProps } from 'ant-design-vue/es/select'
import type { SwitchProps } from 'ant-design-vue/es/switch'
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


type TFormItemType = 'input' | 'textarea' | 'select' | 'switch' | 'number'

interface IModalFormItemProps extends FormItemProps {
  type: TFormItemType
  config?: InputProps | TextAreaProps | InputNumberProps | SelectProps | SwitchProps
}

interface IModal {
  title: string
  width?: number
  form: {
    config: FormProps
    fields: IModalFormItemProps[]
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
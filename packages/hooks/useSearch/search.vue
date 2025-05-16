<template>
  <!--  <a-card>-->
  <div class="table-page-search-wrapper mrgin-bottom-16">
    <a-form :colon="false">
      <a-row :gutter="24">
        <a-col v-for="(propValue, index) in searchOptions" :key="index" :md="6" :sm="24">
          <a-form-item :label="propValue.label">
            <a-input-number v-if="propValue.type.toLowerCase() === 'number'"
              v-model:value.trim="queryParam[propValue.name]" :max="99999999" :placeholder="'请输入' + propValue.label"
              :controls="false" style="width: 100%" />
            <a-input v-if="propValue.type.toLowerCase() === 'string'" v-model:value.trim="queryParam[propValue.name]"
              :placeholder="'请输入' + propValue.label" />
            <a-date-picker v-else-if="propValue.type.toLowerCase() === 'datapicker'"
              v-model:value="queryParam[propValue.name]" :picker="getPicker(getPickerProp(propValue))"
              :show-time="getShowTime(getPickerProp(propValue))" :format="getFormat(getPickerProp(propValue))"
              :value-format="getFormat(getPickerProp(propValue))" style="width: 100%" />

            <a-range-picker v-else-if="propValue.type.toLowerCase() === 'rangepicker'"
              v-model:value="queryParam[propValue.name]" :picker="getPicker(getPickerProp(propValue))"
              :show-time="getShowTime(getPickerProp(propValue))" :format="getFormat(getPickerProp(propValue))"
              :value-format="getFormat(getPickerProp(propValue))" style="width: 100%" />
            <a-select v-else-if="propValue.type.toLowerCase() === 'select'" v-model:value="queryParam[propValue.name]"
              :placeholder="'请选择' + propValue.label" :options="getOptionsProps(propValue)" />
            <a-tree-select v-else-if="propValue.type.toLowerCase() === 'treeselect'"
              v-model:value="queryParam[propValue.name]" :max-tag-count="1" :show-checked-strategy="SHOW_PARENT"
              :tree-data="[
                {
                  label: '全部',
                  value: 'tree-all',
                  children: getOptionsProps(propValue)
                }
              ]" tree-checkable tree-default-expand-all allow-clear :placeholder="'请选择' + propValue.label"
              tree-node-filter-prop="label" />
          </a-form-item>
        </a-col>
        <a-col :md="6" :sm="24">
          <span class="table-page-search-submitButtons">
            <a-space>
              <a-button type="primary" @click="onSearch()">查询</a-button>
              <a-button @click="onReset">重置</a-button>
              <a-button v-if="enableCreate" type="primary" class="create" @click="onCreate">新增</a-button>
              <a-button v-if="enableExport" type="primary" @click="onExport()">导出</a-button>
              <a-button v-if="enableImport" type="primary" @click="onImport()">导入</a-button>
            </a-space>
          </span>
        </a-col>
      </a-row>
    </a-form>
  </div>
  <!--    </a-card>-->
</template>
<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import {
  TreeSelect as ATreeSelect,
  Button as AButton,
  Form as AForm,
  Input as AInput,
  DatePicker as ADatePicker,
  Select as ASelect,
  RangePicker as ARangePicker,
  Row as ARow,
  Col as aCol, FormItem as AFormItem, Space as ASpace,
  InputNumber as AInputNumber,
} from 'ant-design-vue'
import { isArray } from 'lodash-es'
import type { PickerMode } from 'ant-design-vue/es/vc-picker/interface'
import type { TSearchOption, RangePickerField,TDatePicker } from '@/components/baseTablePage/table-page'
import type {IProps} from './type'


interface IQueryParam {
  [key: string]: any
}


const SHOW_PARENT = ATreeSelect.SHOW_PARENT


const props = withDefaults(defineProps<IProps>(), {
  searchOptions: () => [],
  enableExport: false,
  enableImport: false,
  enableCreate: false
})

const emits = defineEmits(['search', 'reset', 'create', 'import', 'export'])

/**搜索的内容 */
const queryParam = ref<IQueryParam>({})



/** 填写的内容 */
const getQueryParam = computed(() => {
  const param: IQueryParam = {}
  const rangeArr: RangePickerField[] = props.searchOptions.filter((s: TSearchOption) => s.type === 'rangepicker')

  Object.keys(queryParam.value).forEach((key: string) => {
    if (isArray(queryParam.value[key]) && queryParam.value[key].find((s) => s === 'tree-all')) {
      // 不做任何处理
    } else if (queryParam.value[key] !== null && queryParam.value[key] !== undefined) {
      const isRange = rangeArr.find(s => s.name === key)
      if (isRange) {
        const [start, end] = queryParam.value[key] || []
        param[isRange.config.startKey] = start
        param[isRange.config.endKey] = end
      } else {
        param[key] = queryParam.value[key]
      }
      // 当字段为数组 且字段包含tree-all时删除tree-all
    }
  })
  return param
})







const getPickerProp = (propValue: TSearchOption) => {
  if (
    propValue.type === 'datapicker' ||
    propValue.type === 'rangepicker'
  ) {
    return propValue.picker
  }
  return undefined
}
const getOptionsProps = (propValue: TSearchOption) => {
  if (
    propValue.type === 'select' ||
    propValue.type === 'treeselect'
  ) {
    return propValue.options
  }
  return []
}


/** 显示类型 */
const getPicker = (picker?: TDatePicker): PickerMode => {
  if (picker === 'hour' || !picker) {
    return 'date'
  } else {
    return picker
  }
}

/**是否显示时间 */
const getShowTime = (picker: string | undefined) => {
  return picker === 'hour' ? { format: 'HH:mm:ss' } : false
}

/**时间相关 */
const getFormat = (picker: string | undefined) => {
  switch (picker) {
    case 'hour':
      return 'YYYY-MM-DD HH:mm:ss'
    case 'date':
      return 'YYYY-MM-DD'
    case 'month':
      return 'YYYY-MM'
    case 'year':
      return 'YYYY'
    default:
      return 'YYYY-MM-DD'
  }
}

/** 重置 */
const onReset = () => {
  queryParam.value = {}
  const general = props.searchOptions || []
  general.forEach((s: TSearchOption) => {
    if (s.type.toLowerCase() === 'treeselect') {
      queryParam.value[s.name] = ['tree-all']
    }
  })
  emits('reset', getQueryParam.value)
}
/**搜索 默认type= true 会清空所有搜索条件   false 为不清空 */
const onSearch = (type = true) => {
  console.log(getQueryParam.value)
  emits('search', getQueryParam.value, type)
}
/**导出 */
const onExport = () => {
  console.log('导出')
  emits('export', getQueryParam.value)
}
/**导入 */
const onImport = () => {
  console.log('导入')
  emits('import', getQueryParam.value)
}

/**新增 */
const onCreate = () => {
  emits('create')
}
/** 设置默认值
 * type = true 会清空所有搜索条件   false 为不清空
 */
const setQueryParam = (obj = {}, type = true) => {
  queryParam.value = { ...queryParam.value, ...obj }
  onSearch(type)
}

watchEffect(() => {
  queryParam.value = {}
  const general = props.searchOptions || []
  general.forEach((s: TSearchOption) => {
    if (s.type.toLowerCase() === 'treeselect') {
      queryParam.value[s.name] = ['tree-all']
    }
  })
})

defineExpose({
  setQueryParam,
  onSearch,
  onReset,
  onImport,
  onExport
})
</script>

<script lang="ts">
export default {
  name: 'BaseSearch'
}
</script>

<style lang="less" scoped>
.table-page-search-wrapper {
  width: 100%;
  padding: 20px 20px 0;
  background: #fff;
  border-radius: 4px;

  ::v-deep(.gc-form) {
    line-height: 1;

    .gc-form-item {
      .gc-form-item-label>label {
        color: #000;
        font-weight: 400;
      }
    }
  }
}

.gc-modal {
  .table-page-search-wrapper {
    padding: 0;
  }
}

.create {
  background: #1fb5ac;

  &:hover {
    background: #1fb5ac;
  }
}

:deep(.gc-form-item) {
  margin-bottom: 20px;
}

.table-page-search-submitButtons {
  display: inline-block;
  margin-bottom: 20px;
}

.margin-bottom-20 {
  margin-bottom: 20px;
}
</style>

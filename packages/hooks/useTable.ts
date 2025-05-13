import { reactive, onMounted, toRefs } from 'vue'
import { isString, isNumber } from 'lodash-es'

import {message} from 'ant-design-vue'
/**
 *
 * @param getData 获取列表接口
 * @param init
 * @param param
 * @returns {
 *
 * }
 */
export const useTable = (getData: GetData, init: boolean = true, param: Param) => {
  /** 搜索项目 */

  const state = reactive<TableState>({
    search: {},
    tableData: [],
    selectedRowKeys: [], // 被选中的列表
    pagination: {
      size: 'default',
      // position: ['bottomCenter'],
      current: 1,
      pageSize: 10,
      total: 0,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '30', '40', '50'],
      showTotal: (total: number) => `共${total}条数据`,
      onChange: (page: number, pageSize: number) => {
        /** 页码发生变化时候 */
        onTableChange(page, pageSize)
      }
    },
    /** 选中操作 */
    rowSelection: {
      checkStrictly: true,
      onChange: (selectedRowKey: Array<string | number>) => {
        state.selectedRowKeys = selectedRowKey
      }
    }
  })

  /** 获取基础数据 */
  const onGetTableData = () => {
    const { pagination: { current: page, pageSize: size } = {} } = state
    const paramObj = isString(param) || isNumber(param) ? param : { ...param, ...state.search }

    const params = {
      page: {
        page,
        size
      },
      param: paramObj
    }
    if(!getData) return  message.error('API.getPage参数不存在')
    getData(params).then((res) => {
      console.log(res, 'res')
      state.tableData = res.records
      state.pagination.total = res.total
      state.pagination.pageSize = size as number
      state.pagination.current = page as number
    })
  }

  /** 搜索 */
  const onSearch = (data = {}, reset = true) => {
    if (reset) {
      state.pagination.current = 1
      state.pagination.pageSize = 10
    }
    state.search = data
    onGetTableData()
  }
  /** 清除搜索 */
  const onReset = (obj = {}) => {
    state.pagination.current = 1
    state.pagination.pageSize = 10
    state.search = { ...obj }
    onGetTableData()
  }
  const onSetParam = (para: Param, ...args: Param[]) => {
    param = para
    onSearch(...args as any)
  }

  /** 页码切换 */
  const onTableChange = (page: number, pageSize: number) => {
    state.pagination.pageSize = pageSize
    state.pagination.current = page
    onGetTableData()
  }

  /** 如果请求存在则调用请求 */
  onMounted(() => {
    if (init) {
      onGetTableData()
    }
  })

  return {
    ...toRefs(state),
    search: state.search,
    onSearch,
    onReset,
    onSetParam
  }
}

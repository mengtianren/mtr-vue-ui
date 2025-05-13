type TableExpose = {
  onReset: () => void
  onSearch: (data: object, type: boolean) => void
}

// interface Param {
//   [key: string]: unknown
// }

type Param = { [key: string]: unknown } | null

interface Params {
  param: Param
}
interface TableParams extends Params {
  page: {
    page: number
    size: number
  }
}

interface ChildState {
  search: object
  tableData: Array<object>
  selectedRowKeys: Array<string | number>
  rowSelection: {
    checkStrictly: boolean
    onChange: (selectedRowKey: Array<string | number>) => void
  }
}

interface TableState extends ChildState {
  pagination: {
    size: 'small' | 'default' | undefined
    current: number
    pageSize: number
    total: number
    showSizeChanger: boolean
    pageSizeOptions: Array<string>
    showTotal: (total: number) => string
    onChange: (page: number, pageSize: number) => void
  }
}

type GetData = (params: Param) => Promise<any>



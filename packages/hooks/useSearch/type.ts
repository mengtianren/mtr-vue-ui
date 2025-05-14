import  type {TSearchOption} from '@/components/baseTablePage/table-page.d.ts'


export interface IProps {
    searchOptions: TSearchOption[]
    enableExport?: boolean
    enableImport?: boolean
    enableCreate?: boolean
  }
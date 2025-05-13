/**
 *
 * @param getData 获取列表接口
 * @param init
 * @param param
 * @returns {
 *
 * }
 */
export declare const useTable: (getData: GetData, init: boolean | undefined, param: Param) => {
    search: object;
    onSearch: (data?: {}, reset?: boolean) => void;
    onReset: (obj?: {}) => void;
    onSetParam: (para: Param, ...args: Param[]) => void;
    pagination: import('vue').Ref<{
        size: "small" | "default" | undefined;
        current: number;
        pageSize: number;
        total: number;
        showSizeChanger: boolean;
        pageSizeOptions: Array<string>;
        showTotal: (total: number) => string;
        onChange: (page: number, pageSize: number) => void;
    }, {
        size: "small" | "default" | undefined;
        current: number;
        pageSize: number;
        total: number;
        showSizeChanger: boolean;
        pageSizeOptions: Array<string>;
        showTotal: (total: number) => string;
        onChange: (page: number, pageSize: number) => void;
    }>;
    tableData: import('vue').Ref<object[], object[]>;
    selectedRowKeys: import('vue').Ref<(string | number)[], (string | number)[]>;
    rowSelection: import('vue').Ref<{
        checkStrictly: boolean;
        onChange: (selectedRowKey: Array<string | number>) => void;
    }, {
        checkStrictly: boolean;
        onChange: (selectedRowKey: Array<string | number>) => void;
    }>;
};

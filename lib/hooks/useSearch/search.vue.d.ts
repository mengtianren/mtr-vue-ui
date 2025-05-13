declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    searchOptions: {
        type: ObjectConstructor;
        default: () => void;
    };
    enableExport: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableImport: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableCreate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    setQueryParam: (obj?: {}, type?: boolean) => void;
    onSearch: (type?: boolean) => void;
    onReset: () => void;
    onImport: () => void;
    onExport: () => void;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    reset: (...args: any[]) => void;
    search: (...args: any[]) => void;
    create: (...args: any[]) => void;
    import: (...args: any[]) => void;
    export: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    searchOptions: {
        type: ObjectConstructor;
        default: () => void;
    };
    enableExport: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableImport: {
        type: BooleanConstructor;
        default: boolean;
    };
    enableCreate: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onReset?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    onCreate?: ((...args: any[]) => any) | undefined;
    onImport?: ((...args: any[]) => any) | undefined;
    onExport?: ((...args: any[]) => any) | undefined;
}>, {
    searchOptions: Record<string, any>;
    enableExport: boolean;
    enableImport: boolean;
    enableCreate: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;

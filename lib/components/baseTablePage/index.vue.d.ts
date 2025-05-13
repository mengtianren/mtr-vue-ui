import { IPageOptions } from './table-page.js';
type __VLS_Props = {
    options: IPageOptions;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        bodyCell?(_: {
            column: import('ant-design-vue').TableColumnType<any>;
            record: Record<string, any>;
            text: any;
            index: number;
        }): any;
        action?(_: {
            record: Record<string, any>;
        }): any;
    };
    refs: {
        formRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
            layout: import('vue-types').VueTypeDef<string>;
            labelCol: {
                type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes>;
                default: Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes;
            };
            wrapperCol: {
                type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes>;
                default: Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes;
            };
            colon: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelAlign: {
                type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').FormLabelAlign>;
                default: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
            };
            labelWrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: import('vue').PropType<"" | import('ant-design-vue/es/form/Form').RequiredMark>;
                default: "" | import('ant-design-vue/es/form/Form').RequiredMark;
            };
            hideRequiredMark: {
                type: BooleanConstructor;
                default: boolean;
            };
            model: import('vue-types').VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: import('vue').PropType<{
                    [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
                }>;
                default: {
                    [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
                };
            };
            validateMessages: {
                type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').ValidateMessages>;
                default: import('ant-design-vue/es/form/interface.js').ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToFirstError: {
                default: boolean | import('scroll-into-view-if-needed').Options<any>;
                type: import('vue').PropType<boolean | import('scroll-into-view-if-needed').Options<any>>;
            };
            onSubmit: {
                type: import('vue').PropType<(e: Event) => void>;
                default: (e: Event) => void;
            };
            name: StringConstructor;
            validateTrigger: {
                type: import('vue').PropType<string | string[]>;
                default: string | string[];
            };
            size: {
                type: import('vue').PropType<import('ant-design-vue/es/config-provider/context.js').SizeType>;
                default: import('ant-design-vue/es/config-provider/context.js').SizeType;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            onValuesChange: {
                type: import('vue').PropType<(changedValues: any, values: any) => void>;
                default: (changedValues: any, values: any) => void;
            };
            onFieldsChange: {
                type: import('vue').PropType<(changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void>;
                default: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
            };
            onFinish: {
                type: import('vue').PropType<(values: any) => void>;
                default: (values: any) => void;
            };
            onFinishFailed: {
                type: import('vue').PropType<(errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void>;
                default: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
            };
            onValidate: {
                type: import('vue').PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            };
        }>> & Readonly<{}>, () => import('ant-design-vue/es/_util/type.js').VueNode, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
            size: import('ant-design-vue/es/config-provider/context.js').SizeType;
            onSubmit: (e: Event) => void;
            disabled: boolean;
            validateTrigger: string | string[];
            onFinish: (values: any) => void;
            validateMessages: import('ant-design-vue/es/form/interface.js').ValidateMessages;
            requiredMark: "" | import('ant-design-vue/es/form/Form').RequiredMark;
            colon: boolean;
            labelCol: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
            labelAlign: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
            labelWrap: boolean;
            wrapperCol: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
            rules: {
                [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
            };
            onValidate: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            onValuesChange: (changedValues: any, values: any) => void;
            onFieldsChange: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
            onFinishFailed: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
            hideRequiredMark: boolean;
            model: {
                [key: string]: any;
            };
            validateOnRuleChange: boolean;
            scrollToFirstError: boolean | import('scroll-into-view-if-needed').Options<any>;
        }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import('vue').ExtractPropTypes<{
            layout: import('vue-types').VueTypeDef<string>;
            labelCol: {
                type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes>;
                default: Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes;
            };
            wrapperCol: {
                type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes>;
                default: Partial<import('vue').ExtractPropTypes<{
                    span: (StringConstructor | NumberConstructor)[];
                    order: (StringConstructor | NumberConstructor)[];
                    offset: (StringConstructor | NumberConstructor)[];
                    push: (StringConstructor | NumberConstructor)[];
                    pull: (StringConstructor | NumberConstructor)[];
                    xs: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    sm: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    md: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    lg: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    xxl: {
                        type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                        default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                    };
                    prefixCls: StringConstructor;
                    flex: (StringConstructor | NumberConstructor)[];
                }>> & import('vue').HTMLAttributes;
            };
            colon: {
                type: BooleanConstructor;
                default: boolean;
            };
            labelAlign: {
                type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').FormLabelAlign>;
                default: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
            };
            labelWrap: {
                type: BooleanConstructor;
                default: boolean;
            };
            prefixCls: StringConstructor;
            requiredMark: {
                type: import('vue').PropType<"" | import('ant-design-vue/es/form/Form').RequiredMark>;
                default: "" | import('ant-design-vue/es/form/Form').RequiredMark;
            };
            hideRequiredMark: {
                type: BooleanConstructor;
                default: boolean;
            };
            model: import('vue-types').VueTypeValidableDef<{
                [key: string]: any;
            }> & {
                default: () => {
                    [key: string]: any;
                };
            };
            rules: {
                type: import('vue').PropType<{
                    [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
                }>;
                default: {
                    [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
                };
            };
            validateMessages: {
                type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').ValidateMessages>;
                default: import('ant-design-vue/es/form/interface.js').ValidateMessages;
            };
            validateOnRuleChange: {
                type: BooleanConstructor;
                default: boolean;
            };
            scrollToFirstError: {
                default: boolean | import('scroll-into-view-if-needed').Options<any>;
                type: import('vue').PropType<boolean | import('scroll-into-view-if-needed').Options<any>>;
            };
            onSubmit: {
                type: import('vue').PropType<(e: Event) => void>;
                default: (e: Event) => void;
            };
            name: StringConstructor;
            validateTrigger: {
                type: import('vue').PropType<string | string[]>;
                default: string | string[];
            };
            size: {
                type: import('vue').PropType<import('ant-design-vue/es/config-provider/context.js').SizeType>;
                default: import('ant-design-vue/es/config-provider/context.js').SizeType;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
            onValuesChange: {
                type: import('vue').PropType<(changedValues: any, values: any) => void>;
                default: (changedValues: any, values: any) => void;
            };
            onFieldsChange: {
                type: import('vue').PropType<(changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void>;
                default: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
            };
            onFinish: {
                type: import('vue').PropType<(values: any) => void>;
                default: (values: any) => void;
            };
            onFinishFailed: {
                type: import('vue').PropType<(errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void>;
                default: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
            };
            onValidate: {
                type: import('vue').PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
                default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            };
        }>> & Readonly<{}>, () => import('ant-design-vue/es/_util/type.js').VueNode, {}, {}, {}, {
            size: import('ant-design-vue/es/config-provider/context.js').SizeType;
            onSubmit: (e: Event) => void;
            disabled: boolean;
            validateTrigger: string | string[];
            onFinish: (values: any) => void;
            validateMessages: import('ant-design-vue/es/form/interface.js').ValidateMessages;
            requiredMark: "" | import('ant-design-vue/es/form/Form').RequiredMark;
            colon: boolean;
            labelCol: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
            labelAlign: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
            labelWrap: boolean;
            wrapperCol: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
            rules: {
                [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
            };
            onValidate: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
            onValuesChange: (changedValues: any, values: any) => void;
            onFieldsChange: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
            onFinishFailed: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
            hideRequiredMark: boolean;
            model: {
                [key: string]: any;
            };
            validateOnRuleChange: boolean;
            scrollToFirstError: boolean | import('scroll-into-view-if-needed').Options<any>;
        }> | null;
    };
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    formRef: import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
        layout: import('vue-types').VueTypeDef<string>;
        labelCol: {
            type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes>;
            default: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
        };
        wrapperCol: {
            type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes>;
            default: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
        };
        colon: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelAlign: {
            type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').FormLabelAlign>;
            default: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
        };
        labelWrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        requiredMark: {
            type: import('vue').PropType<"" | import('ant-design-vue/es/form/Form').RequiredMark>;
            default: "" | import('ant-design-vue/es/form/Form').RequiredMark;
        };
        hideRequiredMark: {
            type: BooleanConstructor;
            default: boolean;
        };
        model: import('vue-types').VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        rules: {
            type: import('vue').PropType<{
                [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
            }>;
            default: {
                [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
            };
        };
        validateMessages: {
            type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').ValidateMessages>;
            default: import('ant-design-vue/es/form/interface.js').ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToFirstError: {
            default: boolean | import('scroll-into-view-if-needed').Options<any>;
            type: import('vue').PropType<boolean | import('scroll-into-view-if-needed').Options<any>>;
        };
        onSubmit: {
            type: import('vue').PropType<(e: Event) => void>;
            default: (e: Event) => void;
        };
        name: StringConstructor;
        validateTrigger: {
            type: import('vue').PropType<string | string[]>;
            default: string | string[];
        };
        size: {
            type: import('vue').PropType<import('ant-design-vue/es/config-provider/context.js').SizeType>;
            default: import('ant-design-vue/es/config-provider/context.js').SizeType;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        onValuesChange: {
            type: import('vue').PropType<(changedValues: any, values: any) => void>;
            default: (changedValues: any, values: any) => void;
        };
        onFieldsChange: {
            type: import('vue').PropType<(changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void>;
            default: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
        };
        onFinish: {
            type: import('vue').PropType<(values: any) => void>;
            default: (values: any) => void;
        };
        onFinishFailed: {
            type: import('vue').PropType<(errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void>;
            default: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
        };
        onValidate: {
            type: import('vue').PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
        };
    }>> & Readonly<{}>, () => import('ant-design-vue/es/_util/type.js').VueNode, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        size: import('ant-design-vue/es/config-provider/context.js').SizeType;
        onSubmit: (e: Event) => void;
        disabled: boolean;
        validateTrigger: string | string[];
        onFinish: (values: any) => void;
        validateMessages: import('ant-design-vue/es/form/interface.js').ValidateMessages;
        requiredMark: "" | import('ant-design-vue/es/form/Form').RequiredMark;
        colon: boolean;
        labelCol: Partial<import('vue').ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            sm: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            md: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            lg: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xxl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import('vue').HTMLAttributes;
        labelAlign: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
        labelWrap: boolean;
        wrapperCol: Partial<import('vue').ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            sm: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            md: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            lg: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xxl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import('vue').HTMLAttributes;
        rules: {
            [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
        };
        onValidate: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
        onValuesChange: (changedValues: any, values: any) => void;
        onFieldsChange: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
        onFinishFailed: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
        hideRequiredMark: boolean;
        model: {
            [key: string]: any;
        };
        validateOnRuleChange: boolean;
        scrollToFirstError: boolean | import('scroll-into-view-if-needed').Options<any>;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, any, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
        layout: import('vue-types').VueTypeDef<string>;
        labelCol: {
            type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes>;
            default: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
        };
        wrapperCol: {
            type: import('vue').PropType<Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes>;
            default: Partial<import('vue').ExtractPropTypes<{
                span: (StringConstructor | NumberConstructor)[];
                order: (StringConstructor | NumberConstructor)[];
                offset: (StringConstructor | NumberConstructor)[];
                push: (StringConstructor | NumberConstructor)[];
                pull: (StringConstructor | NumberConstructor)[];
                xs: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                sm: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                md: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                lg: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                xxl: {
                    type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                    default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
                };
                prefixCls: StringConstructor;
                flex: (StringConstructor | NumberConstructor)[];
            }>> & import('vue').HTMLAttributes;
        };
        colon: {
            type: BooleanConstructor;
            default: boolean;
        };
        labelAlign: {
            type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').FormLabelAlign>;
            default: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
        };
        labelWrap: {
            type: BooleanConstructor;
            default: boolean;
        };
        prefixCls: StringConstructor;
        requiredMark: {
            type: import('vue').PropType<"" | import('ant-design-vue/es/form/Form').RequiredMark>;
            default: "" | import('ant-design-vue/es/form/Form').RequiredMark;
        };
        hideRequiredMark: {
            type: BooleanConstructor;
            default: boolean;
        };
        model: import('vue-types').VueTypeValidableDef<{
            [key: string]: any;
        }> & {
            default: () => {
                [key: string]: any;
            };
        };
        rules: {
            type: import('vue').PropType<{
                [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
            }>;
            default: {
                [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
            };
        };
        validateMessages: {
            type: import('vue').PropType<import('ant-design-vue/es/form/interface.js').ValidateMessages>;
            default: import('ant-design-vue/es/form/interface.js').ValidateMessages;
        };
        validateOnRuleChange: {
            type: BooleanConstructor;
            default: boolean;
        };
        scrollToFirstError: {
            default: boolean | import('scroll-into-view-if-needed').Options<any>;
            type: import('vue').PropType<boolean | import('scroll-into-view-if-needed').Options<any>>;
        };
        onSubmit: {
            type: import('vue').PropType<(e: Event) => void>;
            default: (e: Event) => void;
        };
        name: StringConstructor;
        validateTrigger: {
            type: import('vue').PropType<string | string[]>;
            default: string | string[];
        };
        size: {
            type: import('vue').PropType<import('ant-design-vue/es/config-provider/context.js').SizeType>;
            default: import('ant-design-vue/es/config-provider/context.js').SizeType;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        onValuesChange: {
            type: import('vue').PropType<(changedValues: any, values: any) => void>;
            default: (changedValues: any, values: any) => void;
        };
        onFieldsChange: {
            type: import('vue').PropType<(changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void>;
            default: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
        };
        onFinish: {
            type: import('vue').PropType<(values: any) => void>;
            default: (values: any) => void;
        };
        onFinishFailed: {
            type: import('vue').PropType<(errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void>;
            default: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
        };
        onValidate: {
            type: import('vue').PropType<(name: string | number | string[] | number[], status: boolean, errors: string[]) => void>;
            default: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
        };
    }>> & Readonly<{}>, () => import('ant-design-vue/es/_util/type.js').VueNode, {}, {}, {}, {
        size: import('ant-design-vue/es/config-provider/context.js').SizeType;
        onSubmit: (e: Event) => void;
        disabled: boolean;
        validateTrigger: string | string[];
        onFinish: (values: any) => void;
        validateMessages: import('ant-design-vue/es/form/interface.js').ValidateMessages;
        requiredMark: "" | import('ant-design-vue/es/form/Form').RequiredMark;
        colon: boolean;
        labelCol: Partial<import('vue').ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            sm: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            md: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            lg: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xxl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import('vue').HTMLAttributes;
        labelAlign: import('ant-design-vue/es/form/interface.js').FormLabelAlign;
        labelWrap: boolean;
        wrapperCol: Partial<import('vue').ExtractPropTypes<{
            span: (StringConstructor | NumberConstructor)[];
            order: (StringConstructor | NumberConstructor)[];
            offset: (StringConstructor | NumberConstructor)[];
            push: (StringConstructor | NumberConstructor)[];
            pull: (StringConstructor | NumberConstructor)[];
            xs: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            sm: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            md: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            lg: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            xxl: {
                type: import('vue').PropType<string | number | import('ant-design-vue/es/grid/Col.js').ColSize>;
                default: string | number | import('ant-design-vue/es/grid/Col.js').ColSize;
            };
            prefixCls: StringConstructor;
            flex: (StringConstructor | NumberConstructor)[];
        }>> & import('vue').HTMLAttributes;
        rules: {
            [k: string]: import('ant-design-vue/es/form/interface.js').RuleObject | import('ant-design-vue/es/form/interface.js').RuleObject[];
        };
        onValidate: (name: string | number | string[] | number[], status: boolean, errors: string[]) => void;
        onValuesChange: (changedValues: any, values: any) => void;
        onFieldsChange: (changedFields: import('ant-design-vue/es/form/interface.js').FieldData[], allFields: import('ant-design-vue/es/form/interface.js').FieldData[]) => void;
        onFinishFailed: (errorInfo: import('ant-design-vue/es/form/interface.js').ValidateErrorEntity<any>) => void;
        hideRequiredMark: boolean;
        model: {
            [key: string]: any;
        };
        validateOnRuleChange: boolean;
        scrollToFirstError: boolean | import('scroll-into-view-if-needed').Options<any>;
    }> | null;
}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

import { App } from 'vue';
import { default as GTablePage } from './components/baseTablePage/index.vue';
export type { IPageOptions, IPageOptionsJSON, FieldType, IPAIJSON, IPAI } from './components/baseTablePage/table-page';
declare module 'vue' {
    interface GlobalComponents {
        GTablePage: typeof GTablePage;
    }
}
export { GTablePage };
declare const _default: {
    install: (app: App) => App;
};
export default _default;

// src/index.ts
import type { App } from 'vue';
import GTablePage from './components/baseTablePage/index.vue';
export type { IPageOptions, IPageOptionsJSON, FieldType, IPAIJSON, IPAI } from './components/baseTablePage/table-page';




declare module 'vue' {
  export interface GlobalComponents {
    GTablePage: typeof GTablePage;
  }
}





// 按需导入用
const install = (app: App): App => {
  app.component('GTablePage', GTablePage);
  return app;
};

export { GTablePage };
// 全局导入用
export default {
  install,
};

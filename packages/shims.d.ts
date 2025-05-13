// src/shims.d.ts

import GTablePage from './components/baseTablePage/index.vue';


declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  // declare module 'vue' {
  //   export interface GlobalComponents {
  //     GTablePage: typeof GTablePage
    
  //   }
  // }
  

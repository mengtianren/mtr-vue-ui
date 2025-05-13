import Search from './search.vue'
import type { Component } from 'vue'
import {shallowRef,defineComponent,h} from 'vue'
import type { IField, ISearchExpose, ISearchEvent } from '@/components/baseTablePage/table-page'

export const useSearch = (options: IField): [Component, ISearchExpose] => {
  console.log(options)
  const { searchOptions, ...args } = options

  const searchRef = shallowRef<InstanceType<typeof Search>>()

  const SearchVm = defineComponent((props: ISearchEvent, { attrs }) => {
    return () =>
      h(Search, {
        searchOptions: searchOptions,
        ref: searchRef,
        ...args,
        ...props,
        ...attrs
      })
  })

  const api = new Proxy({} as ISearchExpose, {
    get(_, key) {
      return () => searchRef.value?.[key as keyof ISearchExpose]?.()
    }
  })

  return [SearchVm, api]
}

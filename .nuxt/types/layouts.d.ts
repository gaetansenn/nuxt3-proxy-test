import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "/Users/gaetansenn/Development/dewib/clients/useradgents/argos/public/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}
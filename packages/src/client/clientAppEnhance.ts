import { defineClientAppEnhance } from '@vuepress/client'
import { useCnzz } from './composables'

declare const __GA_ID__: string

const id = __GA_ID__

export default defineClientAppEnhance(() => {
  if (__VUEPRESS_SSR__) return
  useCnzz(id)
})

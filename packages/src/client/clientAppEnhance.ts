import { defineClientAppEnhance } from '@vuepress/client'
import { useCnzz } from './composables'

declare const __GA_ID__: string

const id = __GA_ID__

export default defineClientAppEnhance(() => {
  console.log('defineClientAppEnhance', id);
  useCnzz(id)
})

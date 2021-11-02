import type { Plugin, PluginObject } from '@vuepress/core'
import { logger, path } from '@vuepress/utils'

export interface CnzzPluginOptions {
  id: string
}

export const cnzzPlugin: Plugin<CnzzPluginOptions> = (
  { id },
  app
) => {
  const plugin: PluginObject = {
    name: '@vuepress/plugin-google-analytics',
  }

  if (!id) {
    logger.warn(`[${plugin.name}] 'id' is required`)
    return plugin
  }

  if (app.env.isDev) {
    return plugin
  }

  return {
    ...plugin,

    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.js'
    ),

    define: {
      __GA_ID__: id,
    },
  }
}

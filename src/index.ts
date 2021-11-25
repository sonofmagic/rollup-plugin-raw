import { addExtension, createFilter } from '@rollup/pluginutils'
import type { Plugin } from 'rollup'

export default function rawPlugin (options = {}) {
  const plugin: Plugin = {
    name: 'rollup-plugin-raw',
    resolveId (code, id) {
      return undefined
    }
  }
  return plugin
}

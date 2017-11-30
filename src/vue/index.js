/**
 * @fileoverview index
 * @author burning (www.cafeinit.com)
 * @version 2017.11.30
 */

import CISimpleEditor from './CISimpleEditor.vue'

CISimpleEditor.version = '1.0.0'
CISimpleEditor.plugin = plugin

if (window.Vue) {
  Vue.use(plugin)
}

window.CISimpleEditor = CISimpleEditor

export default CISimpleEditor

function plugin(Vue) {
  Vue.component(CISimpleEditor.name, CISimpleEditor)
}

/**
 * @fileoverview main
 * @author burning <www.cafeinit.com>
 * @version 2017.11.30
 */

import Vue from 'vue'
import CIUIBase from 'ci-ui-base'
import App from './App.vue'

Vue.use(CIUIBase.plugin)

var app = new Vue({
  el: '#app',
  components: {
    App
  }
})

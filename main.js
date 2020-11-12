import Vue from 'vue'
import App from './App'

import store from './store'

import commonUtil from '@/common/commonUtil.js'
import toast from '@/common/loadingUtil.js'
import { http } from '@/common/requestUtil.js'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$commonUtil = commonUtil
Vue.prototype.$toast = toast
Vue.prototype.$http = http

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()

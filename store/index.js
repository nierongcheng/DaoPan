import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		has_login:false,
		user_info:{}
	},
	mutations:{
		login(state, userInfo) {
			state.user_info.nick_name = userInfo.nick_name
			state.user_info.portrait = userInfo.portrait
			state.has_login = true
		},
		logout(state) {
			state.user_info = {}
			state.has_login = false
		}
	}
})

export default store
// 管理账号信息
const USER_KEY = 'USER_KEY'

const getUser = function() {
	let ret = ''
	ret = uni.getStorageSync(USER_KEY)
	if(!ret) {
		return null
	}
	return JSON.parse(ret)
}

const addUser = function(userInfo) {
	let user = {
		user_id: userInfo.user_id,
		session_id: userInfo.session_id,
		nick_name: userInfo.nick_name,
		password: userInfo.password,
		portrait: userInfo.portrait,
		phone: userInfo.phone,
		wx_art_base_open_id: userInfo.wx_art_base_open_id
	}
	uni.setStorageSync(USER_KEY, JSON.stringify(user))
}

const removeUser = function() {
	uni.removeStorageSync(USER_KEY)
}

const updateOpenId = function(openId) {
	let user = this.getUser()
	if(user != null) {
		user.wx_art_base_open_id = openId
	}
	uni.setStorageSync(USER_KEY, JSON.stringify(user))
}

export default {
	getUser,
	addUser,
	removeUser,
	updateOpenId
}
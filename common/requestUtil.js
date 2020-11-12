import Request from '@/js_sdk/luch-request/luch-request/index.js'
import context from '@/main.js'

const testApiUrl = 'https://test.api.mokedao.com/'
const productApiUrl = 'https://api.mokedao.com/'

const commonUUID = "MOKEDAO_H5_XIESHENG"

const http = new Request()

var uuid, version, identifier
// #ifdef APP-PLUS
	version = plus.runtime.version
	identifier = plus.os.name + "_" + plus.device.model
	console.log(identifier)
	plus.device.getInfo({
		success: function(e) {
			console.log('getDeviceInfo success: '+JSON.stringify(e));
			if (uni.getSystemInfoSync().platform == "android") {
				uuid = e.imei
			} else {
				uuid = e.uuid
			}
			http.setConfig((config) => { /* 更新UUID */
				config.header['x-client-udid'] = uuid
				return config
			})
		},
		fail: function(e) {
			console.log('getDeviceInfo failed: '+JSON.stringify(e));
			uuid = commonUUID
		}
	})
// #endif
// #ifndef APP-PLUS
	uuid = commonUUID
	identifier = "xs_h5"
	version = "1.0"
// #endif

http.setConfig((config) => { /* 设置全局配置 */
		config.baseUrl = productApiUrl
		config.header = {
			"Accept-Language": "zh",
			"x-client-appkey": "1",
			"x-client-udid": uuid,
			"x-client-identifier": identifier,
			"x-client-ver": version,
			"x-client-CID": ""
		}
		return config
	})

http.interceptors.request.use((config) => { /* 请求之前拦截器 */
	config.header = {
		...config.header
	}
	/**
		 * custom {Object} - 自定义参数
		 */
	// if (config.custom.auth) {
	//   config.header.token = '123456'
	// }
	// if (config.custom.loading) {
	//   uni.showLoading()
	// }
	/*
	if (!token) { // 如果token不存在，return Promise.reject(config) 会取消本次请求
	  return Promise.reject(config)
	}
	*/
	return config
}, (config) => {
  return Promise.reject(config)
})

http.interceptors.response.use((response) => { /* 请求之后拦截器 */
  // if (response.config.custom.loading) {
  //    uni.hideLoading()
  //  }
  if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
    return Promise.reject(response)
  }

	if(response.data != null && typeof(response.data) == 'string') {
		response.data = JSON.parse(response.data.trim())
	}
	console.log(response)
	if(response.data.status === 0) {
		if(response.data.code === 10002) {
			uni.showModal({
				content:'参数错误',
				showCancel:false
			})
		} else if(response.data.code === 20105) {  // session过期
			uni.showModal({
				content:'会话过期，请重新登录',
				showCancel:false,
				complete:function(){
					uni.navigateTo({
						url:'/pages/login/login'
					})
				}
			})
		}
	}
	return response
}, (response) => { // 请求错误做点什么
	context.$toast.showError()
	return Promise.reject(response)
})

export {
	http
}
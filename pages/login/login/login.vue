<template>
	<view class="margin">
		
		<view class="text-xxl text-black padding-tb">欢迎登录岛盘</view>
		<u-form ref="myForm" :rules="rules" :model="info">
			<u-form-item label="账号:" label-width="150" prop="phone">
				<u-input placeholder="请输入手机号" v-model="info.phone" type="number"></u-input>
			</u-form-item>
			<u-form-item label="密码:" label-width="150" prop="password">
				<u-input placeholder="请输入密码" v-model="info.password" type="password"></u-input>
			</u-form-item>
			
		</u-form>
		
		<view class="margin padding-top">
			<button class="cu-btn bg-blue block margin lg" @click="startLogin">登录</button>
		</view>
	</view>
</template>

<script>
	
	import {
	    mapMutations
	} from 'vuex'
	
	import storageUtil from '../../../common/storageUtil.js'
	
	export default {
		onReady() {
			this.$refs.myForm.setRules(this.rules)
		},
		data() {
			return {
				hasProvider: false,
				info: {
					phone:'',
					password:'',
				},
				rules: { 
					phone: [
						{
							required:true,
							message:'请输入手机号',
							trigger:['change', 'blur']
						},
						{
							validator: (rule, value, callback) => {
								return this.$u.test.mobile(value)
							},
							message:'手机号格式不正确',
							trigger:['change', 'blur']
						}
					],
					password: [
						{
							required:true,
							message:'请输入密码',
							trigger:['change', 'blur']
						}
					]
				}
			}
		},
		methods: {
			...mapMutations(['login']),
			initProvider() {
			    const filters = ['weixin']
			    uni.getProvider({
			        service: 'oauth',
			        success: (res) => {
			            if (res.provider && res.provider.length) {
			                for (let i = 0; i < res.provider.length; i++) {
			                    if (res.provider[i] == 'weixin') {  // 有微信
			                        this.hasProvider = true
									break
			                    }
			                }
			            }
			        },
			        fail: (err) => {
			            console.error('获取服务供应商失败：' + JSON.stringify(err))
			        }
			    })
			},
			startLogin() {
				this.$refs.myForm.validate(valid => {
					if(valid) {
						let CryptoJS = require('../../../common/crypto-js.js')
						let shaPassword = CryptoJS.SHA256(this.info.password)
						const data = {
							account: this.info.phone,
							password: shaPassword.toString(CryptoJS.enc.Base64)
						}
						
						// TODO 发送登录请求
						// this.$toast.showLoading("登录中…")
						// this.$http
						// 		.post('User/login', {'user_name': data.account, 'password': data.password})
						// 		.then(res => { 
						// 			if(res.data.status === 1) {
						// 				data.session_id = res.data.session_id
						// 				console.log('user info: ' + JSON.stringify(data))
										
						// 				this.onLoginSuccess(data)
						// 			} else {
						// 				this.onLoginError(res.data.code)
						// 			}
						// 		})
						
						// 登录成功后调用的方法
						this.onLoginSuccess(data)
					}
				})
			},
			onLoginSuccess(userInfo) {  // 请求成功时
				this.$toast.showSuccess('登录成功')
				this.login(userInfo)
				storageUtil.saveUser(userInfo)
				uni.navigateBack()
			},
			onLoginError(errorCode) {  // 请求失败时
				// if(errCode == 20101) {
				// 	this.$toast.showError('用户名不存在')
				// } else if(errCode == 20102) {
				// 	this.$toast.showError('用户名或密码错误')
				// } else if(errCode == 10801) {
				// 	this.$toast.showError('账号被禁止登录')
				// } else {
				// 	this.$toast.showError('登录失败')
				// }
			}
		}
	}
</script>

<style>

</style>

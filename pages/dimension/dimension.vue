<template>
	<view>
		<scroll-view scroll-y class="page">
			<view class="text-center">
				<image class="my-title" src="../../static/img/title.png"></image>
			</view>
			<view class="text-center">
				<image class="my-slogan" src="../../static/img/slogan.png"></image>
			</view>
			<view class="text-center">
				<image class="my-image-bg" src="../../static/img/network_link.png"></image>
			</view>
			
			<view class="flex my-point-container">
				<view class="flex-sub text-center">
					<view>
						<image class="my-point-image" src="../../static/img/data-analytics.png"></image>
					</view>
					<view class="text-df">大数据</view>
					<view class="text-df text-gray">多维度分享</view>
				</view>
				<view class="flex-sub text-center">
					<view>
						<image class="my-point-image" src="../../static/img/seo-report.png"></image>
					</view>
					<view class="text-df">作品</view>
					<view class="text-df text-gray">提供价值依据</view>
				</view>
				<view class="flex-sub text-center">
					<view>
						<image class="my-point-image" src="../../static/img/consumer.png"></image>
					</view>
					<view class="text-df">艺术家</view>
					<view class="text-df text-gray">提升个人品牌</view>
				</view>
			</view>
			<view class="text-center my-btn-container">
				<button class="cu-btn lg bg-blue" @click="gotoUpload()">免费评测</button>
			</view>
		</scroll-view>
		
	</view>
</template>

<script>
	
	import {
		mapState
	} from 'vuex'
	
	export default {
		computed:mapState(['has_login']),
		data() {
			return {
				
			}
		},
		methods: {
			gotoUpload() {
				if(!this.has_login) {
					this.$commonUtil.gotoLogin()
					return
				}
				uni.navigateTo({
					url:"../upload/upload/upload"
				})
			}
		}
	}
</script>

<style>
	page {
		background-image: linear-gradient(180deg, #18497E, #97C8FD);
	}
	.my-image-bg {
		width: 720rpx;
		height: 720rpx;
		margin-top: -50rpx;
		opacity: 0.6;
	}
	.my-title {
		width: 132rpx;
		height: 60rpx;
		margin-top: 140rpx;
	}
	.my-slogan {
		width: 408rpx;
		height: 40rpx;
		margin-top: 30rpx;
	}
	.my-point-container {
		margin-top: -160rpx;
	}
	.my-point-image {
		width: 130rpx;
		height: 130rpx;
	}
	.my-btn-container {
		margin-top: 8.5vh;
		left: 0;
		width: 100%;
	}
</style>

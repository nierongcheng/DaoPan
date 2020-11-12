<template>
	<view>
		<view class="my-top-bg"></view>
		<view class="text-center my-top-container">
			<view class="cu-avatar round my-portrait"></view>
			<view class="text-lg margin-top text-white">聂小龙</view>
		</view>
		<view class="my-bottom-container padding-top">
			<view class="cu-list menu margin-top-xs">
				<view class="cu-item arrow">
					<view class="content">
						<image src="/static/img/certification.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">申请艺术家认证</text>
					</view>
				</view>
				<view class="cu-item arrow">
					<view class="content">
						<image src="/static/img/download.png" class="png" mode="aspectFit"></image>
						<text class="text-grey">下载APP</text>
					</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.my-top-bg {
		position: absolute;
		top: 0;
		left: 0;
		background-color: #007AFF;
		opacity: 0.7;
		width: 100%;
		height: 508rpx;
	}
	.my-top-container {
		position: relative;
		margin-top: 80rpx;
		z-index: 999;
	}
	.my-portrait {
		width: 234rpx;
		height: 234rpx;
		border: 4rpx solid white;
	}
	.my-bottom-container {
		position: absolute;
		top: 468rpx;
		left: 0;
		width: 100%;
		height: 100vh;
		background-color: white;
		border-radius: 40rpx;
	}
</style>

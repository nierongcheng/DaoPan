<template>
	<view>
		<scroll-view scroll-y class="page">
			<view class="my-bg-green my-top-container text-center">
				<view class="text-white text-df">当前作品得分</view>
				<view class="flex my-score-container justify-center align-center">
					<view class="my-score text-white">{{dimensionInfo.score}}</view>
				</view>
			</view>
			<view class="my-bottom-container text-center">
				<image class="radius my-works-img shadow bg-gray" :src="dimensionInfo.cover" mode="aspectFill"></image>
				<view class="text-lg">{{dimensionInfo.title}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dimensionInfo: {
						"id":0,
						"title":"清风徐来",
						"cover":"http://mokedao-teacher-works.oss-cn-hangzhou.aliyuncs.com/images_product/15932473504e38a573068c2d6ff9cabadeb87c7fe90_1910_1919.jpg",
						"score":499
					}
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.my-top-container {
		width: 100%;
		padding-top: 64rpx;
		height: 530rpx;
	}
	.my-score-container {
		width: 204rpx;
		margin: 36rpx auto 0;
		background-image: url(../../static/img/score.png);
		background-size: 100% auto;
		background-repeat: no-repeat;
	}
	.my-score-container::before {
		content: "";
		padding-top: 100%;
		display: block;
	}
	.my-score {
		font-size: 74upx;
	}
	.my-bottom-container {
		width: 100%;
		position: relative;
		margin-top: -100rpx;
		overflow: hidden;
	}
	.my-bottom-container::before {
		content: '';
		width: 120%;
		height: 300rpx;
		position: absolute;
		left: -10%;
		top: 0;
		border-radius: 50% 50% 0 0;
		background-color: #f1f1f1;
	}
	.my-works-img {
		width: 200rpx;
		height: 266rpx;
		margin-top: 60rpx;
		margin-bottom: 12rpx;
	}

</style>

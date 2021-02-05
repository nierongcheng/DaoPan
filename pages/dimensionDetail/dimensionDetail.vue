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
				<image class="radius my-works-img shadow-warp bg-grey" :src="dimensionInfo.cover" :data-url="dimensionInfo.cover" mode="aspectFill" @click="previewImage"></image>
				<view class="text-lg">{{dimensionInfo.title}}</view>
			</view>
			<view class="cu-card margin-top">
				<view class="cu-item shadow-warp bg-gray" @click="scoreOverview()">
					<view class="text-bold my-bg-common padding-sm">评分项</view>
					<view class="flex padding-top padding-bottom">
						<view class="flex-sub text-center">
							<view class="text-grey text-df">属性</view>
							<view class="text-black text-lg margin-top-xs">312</view>
						</view>
						<view class="flex-sub text-center">
							<view class="text-grey text-df">技巧手法</view>
							<view class="text-black text-lg margin-top-xs">312</view>
						</view>
						<view class="flex-sub text-center">
							<view class="text-grey text-df">艺术家</view>
							<view class="text-black text-lg margin-top-xs">312</view>
						</view>
					</view>
				</view>
			</view>
			<view class="cu-card margin-bottom">
				<view class="cu-item shadow-warp bg-gray">
					<view class="text-bold my-bg-common padding-sm">艺术服务</view>
					<view class="flex padding-top padding-bottom">
						<view class="flex-sub text-center" @click="this.$commonUtil.openWebUrl('https://dic.mokedao.com')">
							<image class="my-service-image" src="../../static/img/mkd_dictionary_c.png"></image>
							<view class="text-black text-lg margin-top-xs">书法字典</view>
							<view class="text-grey text-sm margin-top-xs">查询历代名家</view>
						</view>
						<view class="flex-sub text-center" @click="this.$commonUtil.openMiniProgram('wx750bff550305ad39')">
							<image class="my-service-image" src="../../static/img/mkd_word_c.png"></image>
							<view class="text-black text-lg margin-top-xs">当代字库</view>
							<view class="text-grey text-sm margin-top-xs">写字入库</view>
						</view>
						<view class="flex-sub text-center" @click="this.$commonUtil.openMiniProgram('wx4c244fd3c41f7f76')">
							<image class="my-service-image" src="../../static/img/mkd_flower_c.png"></image>
							<view class="text-black text-lg margin-top-xs">写生圈</view>
							<view class="text-grey text-sm margin-top-xs">大自然中找灵感</view>
						</view>
					</view>
				</view>
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
			scoreOverview() {
				uni.navigateTo({
					url:"../scoreOverview/scoreOverview"
				})
			},
			previewImage(e) {
				let url = e.target.dataset.url
				url = this.$commonUtil.getBigImageUrlByThumbUrl(url)
				this.$commonUtil.previewImage({urls:[url]})
			}
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
	
	.my-service-image {
		width: 80rpx;
		height: 80rpx;
	}

</style>

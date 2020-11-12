<template>
	<view class="padding">
		<view class="grid col-3">
			<view class="margin-bottom" :class="index % 3 == 0 ? '' : 'padding-left-sm'" v-for="(item, index) in historyList" :key="item.id" :data-index="index" @tap="gotoDetail">
				<image class="radius my-item-img" :src="item.cover" mode="aspectFill"></image>
				<view class="text-df">{{item.title}}</view>
				<view class="text-lg text-bold text-red">{{item.score}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				'historyList':[
					{
						"id":0,
						"title":"清风徐来",
						"cover":"http://mokedao-teacher-works.oss-cn-hangzhou.aliyuncs.com/images_product/15932473504e38a573068c2d6ff9cabadeb87c7fe90_1910_1919.jpg",
						"score":499
					},
					{
						"id":0,
						"title":"清风徐来",
						"cover":"http://mokedao-teacher-works.oss-cn-hangzhou.aliyuncs.com/images_product/15932473504e38a573068c2d6ff9cabadeb87c7fe90_1910_1919.jpg",
						"score":499
					},
					{
						"id":0,
						"title":"清风徐来",
						"cover":"http://mokedao-teacher-works.oss-cn-hangzhou.aliyuncs.com/images_product/15932473504e38a573068c2d6ff9cabadeb87c7fe90_1910_1919.jpg",
						"score":499
					},
					{
						"id":0,
						"title":"清风徐来",
						"cover":"http://mokedao-teacher-works.oss-cn-hangzhou.aliyuncs.com/images_product/15932473504e38a573068c2d6ff9cabadeb87c7fe90_1910_1919.jpg",
						"score":499
					},
					{
						"id":0,
						"title":"清风徐来",
						"cover":"http://mokedao-teacher-works.oss-cn-hangzhou.aliyuncs.com/images_product/15932473504e38a573068c2d6ff9cabadeb87c7fe90_1910_1919.jpg",
						"score":499
					}
				]
			}
		},
		methods: {
			gotoDetail(e) {
				let index = e.currentTarget.dataset.index
				uni.navigateTo({
					url:'../dimensionDetail/dimensionDetail?id=' + this.historyList[index].id
				})
			}
		}
	}
</script>

<style>
	.my-item-img {
		width: 100%;
		height: 320rpx;
	}
</style>

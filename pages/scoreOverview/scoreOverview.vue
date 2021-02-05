<template>
	<view>
		<view class="cu-card margin-top-xs" :class="i != 0 ? '' : 'margin-top'" v-for="(item, i) in scoreList" :key="i">
			<view class="cu-item shadow-warp bg-gray">
				<view class="margin-sm">
					<text class="text-bold text-lg text-black">{{item.title}}</text>
					<text class="text-lg text-black"> {{item.totalScore}}</text>
				</view>
				<view class="my-horizontal-line margin-bottom-sm"></view>
				<view class="flex justify-between margin-lr-sm margin-tb" v-for="(detailItem, j) in item.details" :key="j">
					<view class="text-lg text-black">· {{detailItem.name}}</view>
					<view class="my-text-green text-lg">{{detailItem.score}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scoreList:[
					{
						title:"属性",
						totalScore:312,
						details:[
							{
								name:"规格",
								score:120
							},
							{
								name:"创作年代",
								score:120
							},
							{
								name:"保存完整度",
								score:120
							}
						]
					},
					{
						title:"技巧手法",
						totalScore:312,
						details:[
							{
								name:"规格",
								score:120
							},
							{
								name:"创作年代",
								score:120
							},
							{
								name:"保存完整度",
								score:120
							}
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

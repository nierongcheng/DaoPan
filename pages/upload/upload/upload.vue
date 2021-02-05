<template>
	<view>
		<u-form :model="info">
			<u-upload max-count="1" auto-upload="false" width="750" height="400" @on-list-change="onImageChange()"></u-upload>
			
			<view class="padding-lr">
				<u-form-item label="作品名称" label-width="150">
					<u-input placeholder="请输入作品名称" v-model="info.name" type="text"></u-input>
				</u-form-item>
				<u-form-item label="类别" label-width="150">
					<u-input placeholder="请选择" v-model="info.classify" type="text"></u-input>
				</u-form-item>
				<u-form-item label="尺寸" label-width="150">
					<u-input placeholder="请输入作品尺寸" v-model="info.size" type="text"></u-input>
					<cover-view class="my-size-cover-view" @click="sizePopupShow = true"></cover-view>
				</u-form-item>
				<u-form-item label="材质" label-width="150">
					<u-input placeholder="请选择" v-model="info.name" type="text"></u-input>
				</u-form-item>
				<u-form-item label="创作年份" label-width="150">
					<u-input placeholder="请选择" v-model="info.year" type="select" :select-open="yearSelectShow" @click="yearSelectShow = true"></u-input>
				</u-form-item>
				<u-form-item label="风格" label-width="150">
					<u-input placeholder="请选择" v-model="info.name" type="text"></u-input>
				</u-form-item>
				<u-form-item label="题材" label-width="150">
					<u-input placeholder="请选择" v-model="info.name" type="text"></u-input>
				</u-form-item>
			</view>
		</u-form>
		<u-select mode="single-column" v-model="yearSelectShow" :list="yearList" @confirm="yearConfirm"></u-select>
		<u-popup v-model="sizePopupShow" mode="bottom">
			<view class="padding">
				<u-field label="高" placeholder="请输入(cm)" type="number"></u-field>
				<u-field label="宽" placeholder="请输入(cm)" type="number"></u-field>
				<view class="margin">
					<u-button size="default" @click="sizePopupShow = false">确定</u-button>
				</view>
			</view>
			
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
					name:"",
					classify:"",
					size:"",
					material:"",
					year:"",
					style:"",
					theme:""
				},
				imageList: [],
				sizePopupShow:false,
				yearSelectShow:false,
				yearRangeKey:"name",
				yearList: [],
			}
		},
		onLoad(options) {
			let date = new Date()
			let endYear = date.getFullYear()
			let startYear = endYear - 200
			this.yearList.push({value:"不详", label:"不详"})
			for(let i = endYear; i >= startYear; i--) {
				this.yearList.push({value:i, label:i})
			}
			
		},
		methods: {
			onImageChange(lists) {
				console.log('onImageChange', lists);
				this.imageList = lists
			},
			yearConfirm(e) {
				this.info.year = e[0].value
			}
		}
	}
</script>

<style>
.my-size-cover-view {
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	z-index: 999;
}
</style>

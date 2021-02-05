<template>
	<view>
		<web-view :src="url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: 'https://www.mokedao.com'
			}
		},
		onLoad(options) {
			if(options && options.url) {
				this.url = options.url
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

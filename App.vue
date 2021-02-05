<script>
	
	import {
	    mapMutations
	} from 'vuex'
	
	import storageUtil from 'common/storageUtil.js'
	
export default {
	onLaunch: function() {
		console.log('App Launch')

		let userInfo = storageUtil.getUser()
		if(userInfo != null) {
			this.login(userInfo)
		}
	},
	onShow: function() {
		console.log('App Show')
	},
	onHide: function() {
		console.log('App Hide')
	},
	methods: {
		...mapMutations(['login'])
	}
};
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "uview-ui/index.scss";
	@import "./global.css";
	
/*每个页面公共css */ 
</style>

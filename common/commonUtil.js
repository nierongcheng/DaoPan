

//根据缩略图获得大图
const getBigImageUrlByThumbUrl = function(thumbUrl) {
    var picUrl = thumbUrl

    if (thumbUrl != null && thumbUrl.length > 0) {
        var position = thumbUrl.lastIndexOf("_thumb")
        if (position != -1) {  // 找到
            picUrl = thumbUrl.replace("_thumb", "")
        }
    }

    return picUrl
}

/**
 * 跳转到小程序
 * @param {Object} appId
 */
const openMiniProgram = function(appId) {
				
	// #ifdef MP-WEIXIN
	uni.navigateToMiniProgram({
		appId:appId
	})
	// #endif
	
	// #ifdef APP-PLUS
	plus.share.getServices(shareList => {
		let shareWX = shareList.find(val => val.id == 'weixin')
		if(shareWX) {
			shareWX.launchMiniProgram({ id: appId })
		} else {
			this.$toast.showToast('未安装微信，无法打开对应小程序')
		}
	}, e => {
		this.$toast.showToast("获取分享服务列表失败:" + JSON.stringify(e))
	})
	// #endif
}

/**
 * 打开网页
 * @param {Object} url
 */
const openWebUrl = function(url) {
	uni.navigateTo({
		url:"/pages/common/webview/webview?url=" + url
	})
}

const previewImage = function(data) {
	let current = 0
	if(data.current) {
		current = data.current
	}
	if(!data.urls) {
		return
	}
	uni.previewImage({
		current:current,
		urls: data.urls
	})
}

const gotoLogin = function() {
	uni.navigateTo({
		url:'/pages/login/login/login'
	})
}



export default {
	getBigImageUrlByThumbUrl,
	openMiniProgram,
	openWebUrl,
	previewImage,
	gotoLogin,
}
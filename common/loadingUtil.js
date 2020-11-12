
function showLoading(message) {
	message = message || "加载中…"
	uni.showLoading({
		title:message
	})
}

function hideLoading() {
	uni.hideLoading();
}

function showSuccess(message) {
	message = message || '请求成功'
	uni.showToast({
		title:message,
		icon:'success'
	})
}

function showToast(message) {
	uni.showToast({
		title:message,
		icon:'none'
	})
}

function showError(message) {
	message = message || '请求失败'
	uni.showToast({
		title:message,
		icon:'none'
	})
}

module.exports = {
	showLoading: showLoading,
	hideLoading: hideLoading,
	showSuccess: showSuccess,
	showError: showError,
	showToast: showToast
}


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

export default {
	getBigImageUrlByThumbUrl
}
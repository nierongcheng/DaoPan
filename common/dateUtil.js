
function getDateStr(date, addDayCount = 0) {
	if(typeof date !== 'object') {
		date = date.replace(/-/g, '/')
		date = new Date(date)
	}
	let dd = date
	dd.setDate(dd.getDate() + addDayCount)
	let y = dd.getFullYear()
	let mInt = dd.getMonth() + 1
	let m = mInt < 10 ? '0' + mInt : mInt
	let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
	return y + '-' + m + '-' + d
}

module.exports = {
	getDateStr: getDateStr
}
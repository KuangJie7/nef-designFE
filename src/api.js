const api = {}
api.getCookie = function(name){
    let cookieStr = document.cookie,
        cookieObj = {}
    if(cookieStr.length === 0) return false
    cookieStr.split(';').forEach(exp => {
        let expNameValueArr = exp.split('=')
        cookieObj.expNameValueArr[0] = expNameValueArr[1];
    })
    return cookieObj[name];
}

export default api
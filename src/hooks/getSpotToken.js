function getSpotToken() {
    let params = window.location.hash
    params = params.substring(1)
    params = params.split("&")
    let obj = {}
    params.forEach((param) => {
        let split = param.split("=")
        obj[split[0]] = split[1]
    })
    if (obj.access_token) {
        window.localStorage.setItem("spotToken", obj.access_token)
        return true
    } else {
        return false
    }
}

export default getSpotToken
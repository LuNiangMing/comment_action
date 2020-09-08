import instance from "./instance.js"
instance.interceptors.request.use(suc => {
    return suc
}, err => {
    Promise.reject(err)
})
instance.interceptors.response.use(suc => {

    return suc
}, err => {
    Promise.reject(err)
})
export default instance
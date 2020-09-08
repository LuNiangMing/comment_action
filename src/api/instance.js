import instance from "axios"
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
const AUTH_TOKEN = 'fff'
    // instance.default.baseURL = '127.0.0.1:8080/api'
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;


export default instance
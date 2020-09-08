import instance from "./config.js"

let a = {
    // checkedPhone() {
    //     return instance({
    //         // url: `/api/api/get_phone_info?access_token=${acc}&phone=${phone}`,
    //         url: `https://api.apiopen.top/musicRankings`,
    //         // proxy: {
    //         //     host: '127.0.0.1:8080',
    //         //     port: 9000,
    //         //     auth: {
    //         //         username: 'mikeymike',
    //         //         password: 'rapunz3l'
    //         //     }
    //         // },
    //         success(data) {
    //             // 对 data 进行任意转换处理
    //             console.log(data)
    //             Promise.resolve(JSON.parse(data))

    //         },

    //     })
    // },
    //上传照片
    // upload({ url, app_key, uuid, file, token, file_name, file_type }) {
    //     return instance({
    //         url: url,
    //         method: 'post', //默认get，file需要post提交，
    //         data: { //params参数=》get提交方式，data=》post提交方式
    //             app_key,
    //             uuid,
    //             file,
    //             token,

    //             file_name,
    //             file_type
    //         },

    //         success(data) {
    //             console.log("data", data)

    //         },

    //     })
    // },
    //登录果创云
    // Login({ url, app_key, username, password, is_allow_many }) {
    //     return instance({
    //         url: url,
    //         params: {
    //             app_key,
    //             username,
    //             password,
    //             is_allow_many,

    //         },
    //         success(data) {
    //             console.log("data", data)

    //         },

    //     })
    // },
    // apiQueryCommentsList() {
    //     return new Promise((resolve, reject) => {
    //         instance.get('/demo/demo/src/data/info.json', {
    //             dataType: 'json'
    //         }).then(res => {
    //             console.log("******LOADING")
    //             setTimeout(() => {
    //                 console.log('请求成功', res)
    //                 if (res.data.error_code === 0) {
    //                     resolve(res.data.data)
    //                 }
    //             }, 1000);


    //         }).catch(err => {
    //             console.error('请求错误', err)
    //             reject(err)
    //         })
    //     })
    // }

}
export default a
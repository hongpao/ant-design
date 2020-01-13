/**
 * Created by hongpao on 2020/1/14.
 */

import Axios from 'axios'
// import Message from '../utils/message'
import BASE_URL from 'apiConfig'

class Requester {
    //获取token
    getToken() {
        let SessionState = window.SessionState
        return SessionState.getCommon('token') || ''
        // return "51af58000acea873a24b926a6937ac5c"
    }

    //格式化兼容数据
    formatParams(options) {
        let objs = {}

        //@param {string} baseURL - 基础域名（请求地址为绝对路径的时候失效）
        objs.baseURL = BASE_URL.API_BASE_URL

        //请求地址的处理
        let url = options.url || ''
        let httpRule = /^https?:\/\/(.*)$/
        // TODO:如果url未带域名，则拼接域名
        if (!httpRule.test(url)) {
            url = BASE_URL.API_BASE_URL + options.url
        }
        let token = this.getToken()
        url += url.includes('?') ? '&' : '?'
        objs.url = `${url}xtoken=${token}&t=${Date.now()}`

        //请求头信息设置
        objs.header = options.header || {
            'content-Type': 'application/x-www-form-urlencoded',
        }

        //HTTP 请求方法
        objs.method = options.method || 'GET'

        //请求的参数
        // eslint-disable-next-line default-case
        switch (objs.method) {
            case 'GET':
            case 'DELETE':
            case 'HEAD':
                objs.params = options.data
                break
            case 'PUT':
            case 'POST':
                objs.data = options.data || {}
                break
            case 'PATCH':
                objs.data = options.data || {}
                break
        }

        //@param {string} timeout - 超时时间
        objs.timeout = options.timeout || 10000

        //返回的数据格式
        objs.dataType = options.dataType || 'json'

        //响应的数据类型
        objs.responseType = options.responseType || 'json'

        //@param {string} withCredentials - 是否跨域请求
        objs.withCredentials = options.withCredentials || false

        //接口调用成功的回调函数
        objs.success = options.success || (result => {})

        //接口调用失败的回调函数
        objs.fail = options.fail || (error => {})

        //接口调用结束的回调函数（调用成功、失败都会执行）
        objs.complete = options.complete || (result => {})

        return objs
    }

    request(params) {
        return new Promise((resolve, reject) => {
            Axios(params).then((res) => {
                let result = res.data || {}
                let {
                    code = '', data = {}
                } = result

                switch (code) {
                    case 1: //成功
                        resolve(data)
                        break
                    case 0: // 失败
                        reject({
                            errorCode: result.errorCode || '',
                            message: '接口处理失败【2dfire】'
                        })
                        break
                    default:
                        break
                }
            }).catch((error) => {
                reject(error)
            })
        })
    }

    //get请求数据处理
    get(options) {
        options.method = 'GET'
        let params = this.formatParams(options)
        return this.request(params)
    }

    //post请求数据处理
    post(options) {
        options.method = 'POST'
        let params = this.formatParams(options)
        return this.request(params)
    }
}

const requester = new Requester()

export default requester
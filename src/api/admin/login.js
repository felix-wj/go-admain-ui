import request from '@/utils/request'

export function getAppConfig() {
    return request({
        url: '/api/v1/app-config',
        method: 'get'
    })
}

export function login(data) {
    return request({
        url: '/api/v1/login',
        method: 'post',
        data
    })
}

export function getCaptcha() {
    return request({
        url: '/api/v1/captcha',
        method: 'get'
    })
}
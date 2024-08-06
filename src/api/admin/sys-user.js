import request from '@/utils/request'

const url = '/api/v1/sys-user'

export function getInfo(params) {
  return request({
    url: url,
    method: 'get',
    params
  })
}
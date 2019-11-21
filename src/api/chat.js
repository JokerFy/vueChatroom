import request from '@/utils/httpRequest'

export function fetchList (data) {
  return request({
    url: '/hy-admin/sys/user/list',
    method: 'get',
    params: data
  })
}

export function info (data) {
  return request({
    url: '/hy-admin/sys/user/infoById',
    method: 'get',
    params: { id: data }
  })
}

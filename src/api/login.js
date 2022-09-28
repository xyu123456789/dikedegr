import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}

export function loginUserImageCode(uuid) {
  return request({
    url: `/user-service/user/imageCode/${uuid}`,
    method: 'GET'
  })
}

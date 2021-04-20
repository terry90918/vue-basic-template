import Cookies from 'js-cookie'

const TokenKey = 'vue-basic-template-token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function parseToken(token) {
  return new Promise((resolve, reject) => {
    const jwt = token.split('.')
    if (jwt.length !== 3) {
      reject(new Error('parseToken: jwt must has three parts!'))
    } else {
      resolve({
        head: JSON.parse(atob(jwt[0])),
        payload: JSON.parse(atob(jwt[1])),
      })
    }
  })
}

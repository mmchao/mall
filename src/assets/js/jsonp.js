import jsonp from 'jsonp'


// 将对象参数转换为url中的参数
const parseParam = param => {
  let params = []
  for (let key in param) {
    params.push([key, param[key]])
  }
  return params.map(value => value.join('=')).join('&')
}

export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data)
  return new Promise( (resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}
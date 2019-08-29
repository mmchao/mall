import jsonp from '@/assets/js/jsonp'
import { jsonpOptions } from './config'


export const getProductDetail = (id) => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/'
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid:'2017%40taobao_h5_6.6.0',
    data:`%7B"itemNumId"%3A"${id}"%7D`,
    appKey:12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: '6.0'
  }
  return jsonp(url, params, jsonpOptions).then(res => {
    if (res) {
      return res
    }
    throw new Error('没有成功获取到数据!')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}
import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  timeout:20000
})
//请求拦截器
instance.interceptors.request.use(()=>{
  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }
  return config
})
//响应拦截器
instance.interceptors.response.use(
  response =>{
    return response
  },
  error =>{
    alert('请求出错了'+ message.error)
    return new Promise(()=>{})
  }
)
export default instance
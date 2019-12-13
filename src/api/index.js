import ajax from './ajax'
export const reqAddress = ()=> ajax(`/position/${latitude},${longitude}`)
export const reqCategory = ()=> ajax

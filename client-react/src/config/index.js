// const config = {
//   debug: true,
//   devUrl: 'http:/localhost:5000',
//   prodUrl: 'https://mycom.tw',
// }
// let API_HOST = config.debug ? config.devUrl : config.prodUrl
// export { API_HOST }
export const API_HOST = "http://localhost:5000"


export const API_GET_API = `${API_HOST}/api`
export const getCustomizeProductData = `${API_GET_API}/customer`




export const pathnameList = [
  '/memberlogin',
  '/memberegister',
  '/farmerlist',
  '/FruitMapMain',
  '/MainProduct',
  '/customized',
  '/Main',
]

export const pathnameTextList = [
  '/會員登入',
  '/會員註冊',
  '/小農部落',
  '/水果地圖',
  '/主打商品',
  '/客製化商品',
  '/主打水果盒選單',
]

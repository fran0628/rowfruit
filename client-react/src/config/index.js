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
	"/memberlogin",
	"/memberegister",
	"/memberdashboard",
	"/farmerlist",
	"/fruitmap",
	"/MainProduct",
	"/customized",
	"/Main",
	"/MainProduct/1",
	"/MainProduct/2",
	"/MainProduct/3",
	"/blog",
	"/farmerregister",
	"/farmerlogin",
	"/farmeruserdashboard",
	"/cart",
];

export const pathnameTextList = [
	"/會員登入",
	"/會員註冊",
  "/會員中心",
	"/小農總覽",
	"/水果地圖",
	"/主打商品",
	"/客製化商品",
	"/主打水果盒選單",
	"/主打水果盒選單/美白水果盒",
	"/主打水果盒選單/健身水果盒",
	"/主打水果盒選單/多纖輕盈水果盒",
	"/小農部落",
  "/小農會員註冊",
  "/小農會員登入",
  "/小農會員中心",
  "/購物車"

];

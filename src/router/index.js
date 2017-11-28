import Vue from 'vue'
import VueRouter from 'vue-router'
import Recommend from "components/recommend/recommend"
import Singlestone from "components/singlestone/singlestone"
import Classification from "components/classification/classification"
import Search from "components/search/search"
import Login from "components/login/login"


Vue.use(VueRouter);

export default new VueRouter({
	routes:[
	{
		path:'/',
		redirect:"/recommend"
	},{
		path:'/recommend',
		component:Recommend
	},{
		path:'/singlestone',
		component:Singlestone,
//		children:[
//			{
//				path:":bookId",
//				component:SingerDetail
//			}
//		]
	},{
		path:'/classification',
		component:Classification
	},{
		path:'/search',
		component:Search
	},{
		path:'/login',
		component:Login
	}
	]
})

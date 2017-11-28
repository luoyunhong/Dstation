import "babel-polyfill"
import Vue from "vue"
import App from './App'
import fastclick from 'fastclick'
import router from "./router"
import VueLazyLoad from "vue-lazyload"
import Vuex from "vuex"

Vue.use(VueLazyLoad,{
	loading:require('common/image/loading.gif')
})
Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		singlestone:[],
		count:0
	}
})


fastclick.attach(document.body)


new Vue({
	el:"#app",
	router,
	render:h=>h(App)
	
})

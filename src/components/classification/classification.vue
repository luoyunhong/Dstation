<template>
	<div class="classify">
		<div class="item-class" v-for="item in classifi">
			<div class="img-class"><img :src="item.imageurl"/></div>
			<p class="title-class" v-html="item.title"></p>
		</div><br>
	</div>
</template>

<script>
import axios from "axios"
import {url4,url5,CODE} from "api/getRecommend"
import {Base64} from "js-base64"
export default {
	data () {
     return {
      classifi:[],
      hot:[]
     }
    },
    created(){
   	 this._getClassifi();
   	 this._getHot();
    },
    methods:{
   	 _getClassifi(){
   		axios.get(url4).then((res)=>{
   			if(res.data.code==CODE){
   				this.classifi=res.data.info;
   			}

   		})
   	 },
   	 _getHot(){
   		axios.post(url5).then((res)=>{
   			if(res.data.code==CODE){
// 				this.hot=Base64.decode(res.data.info);
   				console.log(res.data);
   			}
			console.log(res.data.info);
   		})
   	 }
   	}
}
//Base64.decode(res.data.info)
</script>

<style>
	#app>.classify{
		margin: 0 10px;
	}
	.item-class{
		width: 33.3%;
		height: 126px;
		float: left;
		margin-top: 15px;
		padding: 0 10px;
		box-sizing:border-box
	}
	.img-class{
		width: 100%;
		height: 100px;
	}
	.img-class>img{
		width: 100%;
		height: 100%;
		border: 0;
		float: left;
	}
	.title-class{
		margin-top: 10px;
		margin-bottom: 0;
		text-align: center;
		font-size: 0.7rem;
	}
	br{
		clear: both;
	}
</style>
<template>
	<div class="recommend">
		<scroll class="recommend-content" :data="disslistseven">
			<div>
				<div class="slider"><swiper loop auto :list="recommends"></swiper></div>
				<div class="recommend-list">
					<div class="list-one">
						<h1><i></i>热门推荐</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-contect">
							<p v-for="item in disslistone"><a class="a-line" href="">
								<div class="list-img"><img v-lazy="item.coverurl"/></div>
								<p class="list-txt" v-html="item.bigbook_name"></p>
							</a></p>
						</div>
					</div>
					<div class="list-one">
						<h1><i class="bg-two"></i>频道</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-contect">
							<p class="pd" v-for="item in disslisttwo"><a class="a-line" href="">
								<div class="list-img"><img v-lazy="item.coverurl"/></div>
								<p class="list-txt" v-html="item.bigbook_name"></p>
							</a></p>
						</div>
					</div>
					<div class="list-one">
						<h1><i class="bg-three"></i>独家首发</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-contect">
							<p v-for="item in disslistthree"><a class="a-line" href="">
								<div class="list-img"><img v-lazy="item.coverurl"/></div>
								<p class="list-txt" v-html="item.bigbook_name"></p>
							</a></p>
						</div>
					</div>
					<div class="list-one">
						<h1><i class="bg-four"></i>新漫出炉</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-contect">
							<p class="pd" v-for="item in disslistfour"><a class="a-line" href="">
								<div class="list-img"><img v-lazy="item.coverurl"/></div>
								<p class="list-txt" v-html="item.bigbook_name"></p>
							</a></p>
						</div>
					</div>
					<div class="list-one">
						<h1><i class="bg-five"></i>热血</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-contect">
							<p v-for="item in disslistfive"><a class="a-line" href="">
								<div class="list-img"><img v-lazy="item.coverurl"/></div>
								<p class="list-txt" v-html="item.bigbook_name"></p>
							</a></p>
						</div>
					</div>
					<div class="list-one">
						<h1><i class="bg-six"></i>搞笑</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-contect">
							<p v-for="item in disslistsix"><a class="a-line" href="">
								<div class="list-img"><img v-lazy="item.coverurl"/></div>
								<p class="list-txt" v-html="item.bigbook_name"></p>
							</a></p>
						</div>
					</div>
					<div class="list-one">
						<h1><i class="bg-six"></i>排行</h1>
						<span><a href="javascript:;">更多<i></i></a></span>
						<div class="list-main">
							<div v-for="item in disslistseven"><a class="a-line" href="">
								<div class="list-imgs"><img v-lazy="item.coverurl"/></div>
								<div class="list-txts">
									<span class="txt-one"><i v-html="item.bigbook_name"></i></span>
									<span class="txt-two">人气：<i v-html="item.bigbookview"></i></span>
									<span v-html="item.brief" class="txt-three"></span>
								</div>
							</a><br></div>
						</div>
					</div>
				</div>
    		</div>
    		<div class="loading-container" v-show="!disslistseven.length">
    			<loading></loading>
    		</div>
		</scroll>
	</div>
</template>

<script>
import { Swiper } from 'vux'
import axios from "axios"
import Recommend from "common/js/recommend"
import {url1,url2,CODE} from "api/getRecommend"
import Scroll from "base/scroll/scroll"
import Loading from "base/loading/loading"


export default {
	data () {
     return {
      recommends:[],
      disslistone:[],
      disslisttwo:[],
      disslistthree:[],
      disslistfour:[],
      disslistfive:[],
      disslistsix:[],
      disslistseven:[]
     }
    },
	components: {
     Swiper,
     Scroll,
     Loading
    },
    created(){
   	 this._getRecommend();
    },
    methods:{
   	 _getRecommend(){
   		axios.get(url1).then((res)=>{
			this.recommends=this._normalchang(res.data.info.banner);

   		})
   		axios.get(url2).then((res)=>{
   			if(res.data.code==CODE){
   				this.disslistone=res.data.info[3].comicslist;	
   				this.disslisttwo=res.data.info[1].comicslist;
   				this.disslistthree=res.data.info[4].comicslist;
   				this.disslistfour=res.data.info[2].comicslist;
   				this.disslistfive=res.data.info[5].comicslist;
   				this.disslistsix=res.data.info[8].comicslist;
   				this.disslistseven=res.data.info[9].comicslist;
   			}

   		})
   	 },
   	 _normalchang(list){
   	 	let PanelMap=[];
   	 	for(var i=0;i<list.length;i++){
   	 		PanelMap.push(new Recommend({
   	 			img:list[i].pic,
   	 			url:list[i].url
   	 		}));
   	 	}
   	 	return PanelMap;
   	 }
    }
}
</script>

<style scoped lang="stylus">
	@import "~common/stylus/mixin" 
	.recommend{
		position: fixed;
	    width: 100%;
	    top: 88px;
	    bottom: 0;
	}
	.recommend-content{
		height: 100%;
      	overflow: hidden;
	}
	.list-one{
		margin: 0 14px 0 14px;
	}
	.list-one>h1{
		height: 24px;
		line-height: 24px;
		font-size: 16px;
		color: #333;
		display: inline-block;
	}
	.list-one>h1>i{
		display: inline-block;
		width: 20px;
		height: 20px;
		background-image: url("../../common/image/bg1.png");
		background-position: -22px 0;
		background-size: 86px 86px;
		vertical-align: middle;
		margin-right: 5px;
	}
	.list-one>span{
		display: inline-block;
		float: right;
		font-size: 14px;
		margin-top: 13px;
	}
	.list-one>span>a{
		text-decoration: none;
		color: #9e9e9e;
		display: inline-block;
	}
	.list-one>span>a>i{
		display: inline-block;
		width: 19px;
		height: 19px;
		background: url("../../common/image/bg.png") -57px -91px;
		background-size: 145px 130px;
		margin-left: 3px;
		position: relative;
		top: 2px;
	}
	.list-contect>p{
		margin: 0;
		width: 106px;
		display: inline-block;
		margin: 15px 4.8px 0 4.8px;
	}
	.a-line{
		text-decoration: none;
		color: #565655;
	}
	.list-contect>p>a>.list-img{
		height: 160px;
	}
	.list-contect>p>a>.list-img>img{
		width: 100%;
		height: 100%;
		border-radius: 3px;
	}
	.list-txt{
		font-size: 0.5rem;
		margin: 5px 0 0 0;
		no-wrap();
		position: relative;
	}
	.list-one>h1>.bg-two{
		background-position: -43px -46px;
	}
	.list-one>.list-contect>.pd{
		width: 163.5px;
	}
	.list-one>h1>.bg-three{
		background-position: -46px 0;
	}
	.list-one>h1>.bg-four{
		background-position: -66px -22px;
	}
	.list-one>h1>.bg-five{
		background-position: 0 -66px;
	}
	.list-one>h1>.bg-six{
		background-position: 0 -20px;
	}
	.list-one>.list-main>div{
		width: 100%;
		margin-top: 20px;
		border-radius: 3px;
	}
	.list-one>.list-main>div>a>.list-imgs{
		width: 163.5px;
		height: 100px;
		float: left;
	}
	.list-one>.list-main>div>a>.list-imgs>img{
		width: 100%;
		height: 100%;
		border-radius: 3px;
	}
	.list-txts{
		float: right;
		width: 163.5px;
		height: 100px;
		
	}
	.list-txts>.txt-one{
		display: block;
		font-size: 1rem;
	}
	.list-txts>.txt-one>i{
		font-style: normal;
	}
	.list-txts>.txt-two{
		display: block;
		margin-top: 10px;
		font-size: 0.9rem;
	}
	.list-txts>.txt-two>i{
		font-style: normal;
		color: red;
	}
	.list-txts>.txt-three{
		display: block;
		font-size: 0.9rem;
		no-wrap();
		margin-top: 10px;
	}
	br{
		clear: both;
	}
</style>
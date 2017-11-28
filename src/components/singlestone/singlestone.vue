<template>
	<div class="singerlist">
		<scroll class="singerlist-content" :data="singlestone">
			<div class="list-one">
				<div class="list-main">
					<div v-for="item in singlestone" @select="selectSinger">
						<div class="a-line" @click="selectItem(item.bookId)">
							<div class="list-imgs"><img v-lazy="item.cover"/></div>
							<div class="list-txts">
								<span class="txt-one" v-html="item.title"></span>
								<span class="txt-two">更新至<i v-html="item.latestSectionTitleOrderDecorate"></i></span>
								<span class="txt-three" v-html="item.description"></span>
							</div>
						</div><br>
					</div>
				</div>
			</div>
			<div class="loading-container" v-show="!singlestone.length">
    			<loading></loading>
    		</div>
		</scroll>
		<router-view></router-view>
	</div>
</template>

<script>
	import axios from "axios"
	import {url3,CODE} from "api/getRecommend"
	import Scroll from "base/scroll/scroll"
	import Loading from "base/loading/loading"
	
	
export default {
	data () {
     return {
     	singlestone:[]
     }
    },
    components: {
     Scroll,
     Loading
    },
    created(){
   	 this._Singlestone();
    },
    methods:{
     selectSinger(singer){
     	this.$router.push(
     		{
     			path:`/singlestone/${singer.id}`
     		}
     	)
     },
	 selectItem(single){
	    this.$emit('select',single)
	 },
   	 _Singlestone(){
   		axios.get(url3).then((res)=>{
   			if(res.data.code==CODE){
   				this.singlestone=res.data.data.dailyDatums[0].datum;
//				console.log(res.data.data.dailyDatums[0].datum);
   			}

   		})
   	 }
    }
}
</script>

<style scoped lang="stylus">
	@import "~common/stylus/mixin"
	.singerlist{
		position: fixed;
	    width: 100%;
	    top: 88px;
	    bottom: 0;
	}
	.singerlist-content{
		height: 100%;
      	overflow: hidden;
	}
	.list-one{
		margin: 0 14px 0 14px;
	}
	.list-one>.list-main>div{
		width: 100%;
		margin-top: 20px;
		border-radius: 3px;
	}
	.list-one>.list-main>div>div{
		color: #565655;
	}
	.list-one>.list-main>div>div>.list-imgs{
		width: 120px;
		height: 130px;
		float: left;
	}
	.list-one>.list-main>div>div>.list-imgs>img{
		width: 100%;
		height: 100%;
		border-radius: 3px;
	}
	.list-txts{
		float: right;
		width: 210px;
		height: 100px;
		
	}
	
	.list-txts>.txt-one{
		display: block;
		font-size: 1rem;
		color: black;
		no-wrap();
	}
	.list-txts>.txt-two{
		display: block;
		margin-top: 10px;
		font-size: 0.7rem;
	}
	.list-txts>.txt-two>i{
		font-style: normal;
		color: lightskyblue;
	}
	.list-txts>.txt-three{
		margin-top: 20px;
		display: block;
		height: 55px;
		line-height: 18px;
		text-overflow: ellipsis;
		overflow: hidden;
		font-size: 0.7rem;
	}
	br{
		clear: both;
	}
</style>
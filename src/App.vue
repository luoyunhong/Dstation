<template>
	<div id="app">
		<m-header></m-header>
		<tab></tab>
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	import MHeader from "components/header/header"
	import Tab from "components/tab/tab"
	


	export default {
		components:{
			MHeader,
			Tab
		}
	}
	
	 var html = document.documentElement;  
  
        // 封装一个函数  
        function fontS(){  
            // 获取 html 的宽  
            var hW = html.offsetWidth;  
            // 计算字体大小，这里是 html 宽的五十分之一  
            var hS = hW / 50;  
            // 给刚开始时的 html 设置字体大小     
            html.style.fontSize = hS + "px";  
        }  
        // 当窗口大小改变时执行函数   
        window.onresize = function(){fontS();} 
</script>

<style scoped lang="stylus">
	@import "~common/stylus/index"
</style>

<template>
	<div class="m-header">
		<!--<div class="bg"></div>-->
		<h1 class="text">DStation</h1>
		<div class="icon-search iconfont icon-denglu2"></div>
	</div>
</template>

<script>
 export default {

}
</script>

<style scoped lang="stylus">
    @import "~common/stylus/reset"
    /*header样式*/
	.m-header{
		position: fixed;
		width: 100%;
		height:44px;
	 	font-size:0;
	 	background: #ffd612;
	 	text-align: center;
	 	z-index: 10;
	}
	/*.bg{
		display:inline-block;
		vertical-align:top;
		width:40px;
		height:40px;
		background: url("../../common/image/logo.jpg");
		background-size: 40px 40px;
		position: absolute;
		left: 0;
	}*/
	.text{
		display: inline-block
	    vertical-align: top;
	    line-height: 44px;
	    font-size: 2rem;
	    color: #565655;
	    position: absolute;
	    left: 50%;
	    margin-left: -67px;
	}
	.icon-search{
		display: inline-block;
		position: absolute;
		right: 0;
		bottom: 3px;
		width: 40px;
		height: 36px;
		line-height: 36px;
		font-size: 1.5rem;
		color: #565655;
	}
</style>
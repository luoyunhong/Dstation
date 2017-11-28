<template>
	<div class="search">
		<div class="search-in">
			<span class="fanhui iconfont icon-fanhui1"></span>
			<input type="text" placeholder="请输入漫画名" />
			<div><span>搜索</span></div>
		</div>
		<div class="search-hot">
			<p class="hot-title">热门搜索</p>
			<p>斗破苍穹·药老传奇</p>
			<p>斗罗大陆</p>
			<p>偷星九月天</p>
			<p>斗罗大陆2绝世唐门</p>
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style>
	.search{
		position: fixed;
	    width: 100%;
	    height: 100%;
	    top: 0;
	    z-index: 10;
	    background: #f3f5f5;
	}
	.search-in{
		width: 100%;
		height: 55px;
		line-height: 55px;
		background: #FFD612;
	}
	.fanhui{
		display: inline;
		float: left;
		font-size: 2rem;
		color: #565655;
		margin: 0 15px;
	}
	.search-in>input{
		border: none;
		border: 0;
		width: 230px;
		height: 40px;
		margin-top: 7px;
		float: left;
		padding-left: 10px;
		border-radius: 20px;
		outline: none;
	}
	.search>.search-in>div{
		width: 40px;
		height: 55px;
		float: right;
		font-size: 1rem;
		font-weight: 500;
		color: #565655;
		margin: 0 15px;
	}
	.search>.search-in>div>span{
		display: block;
		width: 100%;
		height: 100%;
		color: #565655;
	}
	.search-hot{
		width: 100%;
		padding: 0 10px;
	}
	.search-hot>p{
		margin: 0;
		margin-top: 10px;
		font-size: 0.9rem;
		color: #565655;
		height: 25px;
		line-height: 25px;
		width: 200px;
		border: 1px solid #ccc;
		border-radius: 12.5px;
		padding-left: 10px;
	}
	.search-hot>.hot-title{
		border: none;
		margin-bottom: 25px;
	}
	br{
		clear: both;
	}
</style>
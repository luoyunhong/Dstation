<template>
	<div class="login">
		<div class="search-in">
			<span class="fanhui iconfont icon-fanhui1"></span>
		</div>
		<form action="" method="post">
			<input type="text" placeholder="用户名"/>
			<input type="text" placeholder="密码"/>
			<input type="submit" value="登录"/>
		</form>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	.login{
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
	.login>form{
		margin-top: 20px;
		text-align: center;
	}
	.login>form>input{
		width: 300px;
		height: 30px;
		margin-top: 20px;
		outline: none;
		padding-left: 10px;
	}
</style>
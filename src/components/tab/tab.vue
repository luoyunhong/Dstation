<template>
	<div class="tab">
		<router-link class="tab-item" to="/singlestone">
			<span class="tab-link">更新</span>
		</router-link>
		<router-link class="tab-item" to="/recommend">
			<span class="tab-link">推荐</span>
		</router-link>
		<router-link class="tab-item" to="/classification">
			<span class="tab-link">分类</span>
		</router-link>
		<router-link class="tab-item" to="/search">
			<span class="tab-link">搜索</span>
		</router-link>
	</div>
</template>

<script>
export default {

}
</script>

<style scoped lang="stylus">
@import "~common/stylus/variable"
  .tab{
  	display: flex;
    height: 44px;
    line-height: 44px;
    font-size: 1rem;
    padding-top: 44px;
  }
  .tab-item{
  	flex: 1;
    text-align: center;
    text-decoration: none;
    color: #181818;
  }
  .tab-link{
	width: 100%;
	height: 42px;
	display: inline-block;
  }
  .router-link-active>.tab-link{
  	color:#ffd612;
  	border-bottom: 2px solid #FFD612;
  }
</style>
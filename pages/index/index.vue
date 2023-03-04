<template>
	<engine-page :api="api" />
</template>

<script>
	import EnginePage from '@/components/engine-page/engine-page.vue';
	
	export default {
		data() {
			return {
				title: '首页',
				api:'/api/mix/page/index/index'
			}
		},
		onReady() {
			// 设置标题
			this.setTitle()
		},
		methods: {
			setTitle() {
				uni.setNavigationBarTitle({
					title: this.title
				});
			}
		}
	}
</script>

<style>

</style>

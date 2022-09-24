<template>
	<engine-page :api="api" />
</template>

<script>
	import EnginePage from '@/components/engine-page/engine-page.vue';
	
	export default {
		data() {
			return {
				api:'/api/mix/page/my'
			}
		}
	}
</script>

<style>
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

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

</style>

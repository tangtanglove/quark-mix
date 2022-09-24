<template>
	<engine-page :api="api" />
</template>

<script>
	import config from "@/config/config.js"
	import { get } from "@/services/action.js"
	import EnginePage from '@/components/engine-page/engine-page.vue';
	
	export default {
		data() {
			return {
				api: null
			}
		},
		onReady() {
			
		},
		onLoad(option) {
			
			if(!option.api) {
				uni.showToast({
					title: '接口不能为空',
					duration: 2000
				});
			} else {
				this.api = option.api
			}
		},
		methods: {

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

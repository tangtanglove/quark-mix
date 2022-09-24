<template>
	<engine :body="this.body" />
</template>

<script>
	import { get } from "@/services/action.js"
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'EnginePage',
		props: {
			title: {
				type: String,
				default: '引擎页'
			},
			api: {
				type: String,
				default: null
			}
		},
		data() {
			return {
				body:{}
			}
		},
		created() {		
			if (!this.api) {
				uni.showToast({
					title:"接口不能为空"
				})
			}
			
			this.getComponents(this.api)
		},
		methods: {
			async getComponents(api) {
				
				let result = await get({
					url:api,
				})
				
				this.body = result;
				
				uni.setNavigationBarTitle({
					title: result.title
				});
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

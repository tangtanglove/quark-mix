<template>
	<view class="container">
		<engine :body="this.body" />
	</view>
</template>

<script>
	import config from "@/config/config.js"
	import { get } from "@/services/action.js"
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		data() {
			return {
				title: '首页',
				body:{}
			}
		},
		onReady() {
			// 设置标题
			this.setTitle()
		},
		onLoad(option) {
			this.getComponents(option.api)
		},
		methods: {
			setTitle() {
				uni.setNavigationBarTitle({
					title: this.title
				});
			},
			async getComponents(api) {
				
				if (api) {
					api = api
				} else{
					api = config.apiInitUrl
				}
				
				let result = await get({
					url:api,
				})
				
				this.body = result.body;
				
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

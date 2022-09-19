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
				api = api ?? config.apiInitUrl
				let result = await get({
					url:api,
				})
				
				this.body = [
					{
						component:'swiper',
					},
					{
						component:'card',
						title:'标题',
						body:{
							component:'action',
							actionType:'ajax',
							label:'提交',
							type:'primary',
						}
					},
				];
				
				console.log(result)
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

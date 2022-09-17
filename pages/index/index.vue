<template>
	<view class="container">
		<engine :body="this.body" />
	</view>
</template>

<script>
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		data() {
			return {
				title: '首页',
				body:[
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
				]
			}
		},
		onReady() {
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
	.container {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	}
</style>

<template>
	<button
		@click="onClick()"
		:type="type"
		:size="size"
		:plain="plain"
		:disabled="disabled"
		:loading="loading"
		:formType="formType"
		:openType="openType"
		:hoverClass="hoverClass"
		:hoverStartTime="hoverStartTime"
		:hoverStayTime="hoverStayTime"
		:appParameter="appParameter"
		:hoverStopPropagation="hoverStopPropagation"
		:lang="lang"
		:sessionFrom="sessionFrom"
		:sendMessageTitle="sendMessageTitle"
		:sendMessagePath="sendMessagePath"
		:sendMessageImg="sendMessageImg"
		:showMessageCard="showMessageCard"
		:groupId="groupId"
		:guildId="guildId"
		:publicId="publicId"
		:style="style"
	>
		{{label}}
	</button>
</template>

<script>
	/**
	 * ProAction 行为
	 */
	import { get } from '@/services/action';
	
	export default {
		name: 'ProAction',
		emits: ['click'],
		props: {
			type: {
				type: String,
				default: 'default'
			},
			label: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'small'
			},
			actionType: {
				type: String,
				default: 'ajax'
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			},
			data: {
				type: [String, Number, Object],
				default: null
			},
		},
		data() {
			return {};
		},
		methods: {
			async onClick() {
				if(1) {
					this.data.validate().then(async (data)=>{
						let api = this.api
						let result = null
						
						if (!api) {
							uni.showToast({
								title:"表单接口不能为空"
							})
							
							return false;
						}
						
						if (this.apiType === 'POST') {
							result = await post({
								url:this.api,
								data:data
							})
						} else {
							result = await get({
								url:this.api,
								data:data
							})
						}
						
						if (result.status === 'success') {
							uni.showToast({
								title:result.msg
							})
							
							if (result.url) {
								uni.navigateTo({
									url: result.url
								});
							}
						} else {
							uni.showToast({
								title:result.msg,
								icon:'error'
							})
						}
						
					}).catch(err =>{
						console.log('表单错误信息：', err);
					})
				}
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

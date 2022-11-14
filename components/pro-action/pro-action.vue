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
	<view v-if="openType === 'drawer'">
		<uni-drawer
			ref="drawer"
			:mask="drawer.mask"
			:mask-click="drawer.maskClick"
			:mode="drawer.mode"
			:width="drawer.width"
		>
			<engine :body="this.drawer.body" />
		</uni-drawer>
	</view>
	<view v-if="openType === 'popup'">
		<uni-popup
			ref="popup"
			:animation="popup.animation"
			:type="popup.type"
			:isMaskClick="popup.isMaskClick"
			:maskBackgroundColor="popup.maskBackgroundColor"
			:backgroundColor="popup.backgroundColor"
			:safeArea="popup.safeArea"
		>
			<view v-if="popup.type === 'message'">
				<uni-popup-message
					:type="popup.messageType"
					:message="this.popup.body"
					:duration="popup.messageDuration"
				>
				</uni-popup-message>
			</view>
			<view v-else-if="popup.type === 'dialog'">
				<uni-popup-dialog
					:type="popup.dialogType"
					:mode="popup.dialogMode"
					:title="popup.dialogTitle"
					:confirmText ="popup.dialogConfirmText"
					:cancelText ="popup.dialogCancelText"
					:value ="popup.dialogValue"
					:placeholder ="popup.dialogPlaceholder"
					:before-close="popup.dialogBeforeClose"
					:content ="this.popup.body"
					@close="popupDialogClose"
					@confirm="popupDialogConfirm"
				>
				</uni-popup-dialog>
			</view>
			<view v-else-if="popup.type === 'share'">
				<uni-popup-share
					:title="popup.shareTitle"
					:before-close="popup.shareBeforeClose"
					@select="popupShareSelect"
				>
				</uni-popup-share>
			</view>
			<view v-else>
				<engine :body="this.popup.body" />
			</view>
		</uni-popup>
	</view>
</template>

<script>
	/**
	 * ProAction 行为
	 */
	import { get, post } from '@/services/action';
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProAction',
		emits: ['click'],
		props: {
			label: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'small'
			},
			type: {
				type: String,
				default: 'default'
			},
			plain: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			loading: {
				type: Boolean,
				default: false
			},
			formType: {
				type: String,
				default: ''
			},
			openType: {
				type: String,
				default: ''
			},
			hoverClass: {
				type: String,
				default: 'button-hover'
			},
			hoverStartTime: {
				type: Number,
				default: 20
			},
			hoverStayTime: {
				type: Number,
				default: 70
			},
			appParameter: {
				type: String,
				default: ''
			},
			hoverStopPropagation: {
				type: Boolean,
				default: false
			},
			lang: {
				type: String,
				default: 'en'
			},
			sessionFrom: {
				type: String,
				default: ''
			},
			sendMessageTitle: {
				type: String,
				default: '当前标题'
			},
			sendMessagePath: {
				type: String,
				default: '当前分享路径'
			},
			sendMessageImg: {
				type: String,
				default: '截图'
			},
			showMessageCard: {
				type: Boolean,
				default: false
			},
			groupId: {
				type: String,
				default: ''
			},
			guildId: {
				type: String,
				default: '',
			},
			publicId: {
				type: String,
				default: ''
			},
			popup: {
				type: [String, Object],
				default () {
					return {}
				}
			},
			drawer: {
				type: [String, Object],
				default () {
					return {}
				}
			},
			confirmTitle: {
				type: String,
				default: ''
			},
			confirmText: {
				type: String,
				default: ''
			},
			confirmType: {
				type: String,
				default: ''
			},
			api: {
				type: String,
				default: ''
			},
			apiType: {
				type: String,
				default: ''
			},
			reload: {
				type: String,
				default: ''
			},
			withLoading: {
				type: Boolean,
				default: false
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
			callback: {
				type: [String, Number, Object, Function],
				default: null
			},
		},
		data() {
			return {};
		},
		methods: {
			async onClick() {
				switch (this.openType){
					case 'ajax':
						if (!this.api) {
							uni.showToast({
								title:"接口不能为空"
							})
							
							return false;
						}
					
						let result = false
						if(this.apiType.toLowerCase() == 'post') {
							result = await post({
								url:this.api,
								data:null
							})
						} else if(this.apiType.toLowerCase() == 'get') {
							result = await get({
								url:this.api,
								data:null
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
						break;
					case 'submit':
						this.callback();
						break;
					case 'drawer':
						this.$refs.drawer.open();
						break;
					case 'popup':
						this.$refs.popup.open();
						break;
					default:
						if(this.apiType.toLowerCase() == 'post') {
							post({
								url:this.api,
								data:null
							})
						} else if(this.apiType.toLowerCase() == 'get') {
							get({
								url:this.api,
								data:null
							})
						}
						break;
				}
			},
			popupDialogClose() {
				this.$refs.popup.close();
			},
			async popupDialogConfirm(val) {
				if (!this.api) {					
					return false;
				}
			
				let result = false
				if(this.apiType.toLowerCase() == 'post') {
					result = await post({
						url:this.api,
						data:{
							value:val,
						}
					})
				} else if(this.apiType.toLowerCase() == 'get') {
					result = await get({
						url:this.api,
						data:{
							value:val,
						}
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
					
					this.$refs.popup.close();
				} else {
					uni.showToast({
						title:result.msg,
						icon:'error'
					})
				}
			},
			popupShareSelect(e) {
				console.log(e)
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

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
			onClick() {
				if(this.openType == 'submit') {
					this.callback()
				}
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

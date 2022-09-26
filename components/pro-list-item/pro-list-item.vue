<template>
	<uni-list-item
		:title="title"
		:note="note"
		:ellipsis="ellipsis"
		:thumb="thumb"
		:thumbSize="thumbSize"
		:showBadge="showBadge"
		:badgeText="badgeText"
		:badgeType="badgeType"
		:badgeStyle="badgeStyle"
		:rightText="rightText"
		:disabled="disabled"
		:showArrow="showArrow"
		:link="link"
		:to="to"
		:clickable="clickable"
		:showSwitch="showSwitch"
		:switchChecked="switchChecked"
		:showExtraIcon="showExtraIcon"
		:extraIcon="extraIcon"
		:direction="direction"
	>
	</uni-list-item>
</template>

<script>
	/**
	 * ProListItem
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProListItem',
		props: {
			title: {
				type: String,
				default: ""
			},
			note: {
				type: String,
				default: ""
			},
			ellipsis: {
				type: Number,
				default: 0
			},
			thumb: {
				type: String,
				default: ""
			},
			thumbSize: {
				type: String,
				default: "medium"
			},
			showBadge: {
				type:Boolean,
				default: false
			},
			badgeText: {
				type: String,
				default: ""
			},
			badgeType: {
				type: String,
				default: ""
			},
			badgeStyle: {
				type: Object,
				default: undefined
			},
			rightText: {
				type: String,
				default: ""
			},
			disabled: {
				type: Boolean,
				default: false
			},
			showArrow: {
				type: Boolean,
				default: true
			},
			link: {
				type: String,
				default: "navigateTo"
			},
			to: {
				type: String,
				default: null
			},
			clickable: {
				type:Boolean,
				default: false
			},
			showSwitch: {
				type:Boolean,
				default: false
			},
			switchChecked: {
				type:Boolean,
				default: false
			},
			showExtraIcon: {
				type:Boolean,
				default: false
			},
			extraIcon: {
				type: Object,
				default: undefined
			},
			direction: {
				type: String,
				default: "row"
			},
			customStyle: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" >
	
</style>

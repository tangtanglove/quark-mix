<template>
	<uni-collapse-item
		:title="title"
		:thumb="thumb"
		:disabled="disabled"
		:open="open"
		:showAnimation="showAnimation"
		:border="border"
		:titleBorder="titleBorder"
		:showArrow="showArrow"
		:style="style"
	>
		<engine :body="body" />
	</uni-collapse-item>
</template>

<script>
	/**
	 * ProCollapseItem
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProCollapseItem',
		props: {
			title: {
				type: String,
				default: null
			},
			thumb: {
				type: String,
				default: null
			},
			disabled: {
				type: Boolean,
				default: false
			},
			open: {
				type: Boolean,
				default: false
			},
			showAnimation: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: true
			},
			titleBorder: {
				type: String,
				default: "auto"
			},
			showArrow: {
				type: Boolean,
				default: true
			},
			style: {
				type: [String, Object],
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

<template>
	<uni-section
		:type="type"
		:title="title"
		:titleFontSize="titleFontSize"
		:titleColor="titleColor"
		:subTitle="subTitle"
		:subTitleFontSize="subTitleFontSize"
		:subTitleColor="subTitleColor"
		:padding="padding"
		:style="style"
	>
		<engine :body="body" />
	</uni-section>
</template>

<script>
	/**
	 * ProGroup
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProGroup',
		props: {
			type: {
				type: String,
				default: null
			},
			title: {
				type: String,
				default: null
			},
			titleFontSize: {
				type: String,
				default: "14px"
			},
			titleColor: {
				type: String,
				default: "#333"
			},
			subTitle: {
				type: String,
				default: undefined
			},
			subTitleFontSize: {
				type: String,
				default: "12px"
			},
			subTitleColor: {
				type: String,
				default: "#999"
			},
			padding: {
				type: [Boolean, String],
				default: false
			},
			body: {
				type: [String, Number, Object],
				default: ''
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

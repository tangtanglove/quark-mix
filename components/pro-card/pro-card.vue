<template>
	<uni-card
		:title="title"
		:subTitle="subTitle"
		:extra="extra"
		:thumbnail="thumbnail"
		:cover="cover"
		:isFull="isFull"
		:isShadow="isShadow"
		:shadow="shadow"
		:border="border"
		:margin="margin"
		:spacing="spacing"
		:padding="padding"
		:style="style"
	>
		<engine :body="body" />
	</uni-card>
</template>

<script>
	/**
	 * ProCard
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProCard',
		props: {
			title: {
				type: String,
				default: ''
			},
			subTitle: {
				type: String,
				default: ''
			},
			extra: {
				type: String,
				default: ''
			},
			thumbnail: {
				type: String,
				default: undefined
			},
			cover: {
				type: String,
				default: undefined
			},
			isFull: {
				type: Boolean,
				default: false
			},
			isShadow: {
				type: Boolean,
				default: false
			},
			shadow: {
				type: String,
				default: undefined
			},
			border: {
				type: Boolean,
				default: true
			},
			margin: {
				type: String,
				default: undefined
			},
			spacing: {
				type: String,
				default: undefined
			},
			padding: {
				type: String,
				default: undefined
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

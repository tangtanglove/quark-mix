<template>
	<uni-card :title="title" :extra="extra">
		<engine :body="body" />
	</uni-card>
</template>

<script>
	/**
	 * Card
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'Card',
		props: {
			title: {
				type: String,
				default: ''
			},
			extra: {
				type: String,
				default: ''
			},
			body: {
				type: [String, Number, Object],
				default: ''
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

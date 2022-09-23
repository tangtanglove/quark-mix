<template>
	<uni-row
		:gutter="gutter"
	>
		<engine :body="body" />
	</uni-row>
</template>

<script>
	/**
	 * Row
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProRow',
		props: {
			gutter: {
				type: Number,
				default: 0
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

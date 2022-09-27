<template>
	<uni-grid-item
		:index="index"
	>
	</uni-grid-item>
</template>

<script>
	/**
	 * ProGridItem
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProGridItem',
		props: {
			index: {
				type: Number,
				default: 0
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

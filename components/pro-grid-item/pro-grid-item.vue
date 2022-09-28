<template>
	<uni-grid-item
		:index="index"
		:style="style"
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

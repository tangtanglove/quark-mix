<template>
	<uni-collapse :style="style" :accordion="accordion">
		<engine :body="body" />
	</uni-collapse>
</template>

<script>
	/**
	 * ProCollapseItem
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProCollapseItem',
		props: {
			accordion: {
				type: Boolean,
				default: false
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			}
		},
		data() {
			return {}
		},
		methods: {
			change(e) {
				this.current = e.detail.current;
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

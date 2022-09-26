<template>
	<uni-list
		:border="border"
	>
		<engine :body="body" />
	</uni-list>
</template>

<script>
	/**
	 * ProList
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProList',
		props: {
			border: {
				type: Boolean,
				default: true
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

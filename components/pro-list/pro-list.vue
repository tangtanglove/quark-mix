<template>
	<uni-list
		:border="border"
	>
		<uni-list-item title="列表文字" link="navigateTo" to="/pages/engine/index?api=/api/mix/page/login"></uni-list-item>
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
			offset: {
				type: Number,
				default: undefined
			},
			push: {
				type: Number,
				default: undefined
			},
			pull: {
				type: Number,
				default: undefined
			},
			xs: {
				type: [Number, Object],
				default: undefined
			},
			sm: {
				type: [Number, Object],
				default: undefined
			},
			md: {
				type: [Number, Object],
				default: undefined
			},
			lg: {
				type: [Number, Object],
				default: undefined
			},
			xl: {
				type: [Number, Object],
				default: undefined
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

<template>
	<uni-col
		:span="span"
		:offset="offset"
		:push="push"
		:pull="pull"
		:xs="xs"
		:sm="sm"
		:md="md"
		:lg="lg"
		:xl="xl"
		:style="style"
	>
		<engine :body="body" />
	</uni-col>
</template>

<script>
	/**
	 * Col
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProCol',
		props: {
			span: {
				type: Number,
				default: 24
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

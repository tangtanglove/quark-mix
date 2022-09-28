<template>
	<uni-grid
		:column="column"
		:borderColor="borderColor"
		:showBorder="showBorder"
		:square="square"
		:highlight="highlight"
		:style="style"
	>
		<engine :body="body" />
	</uni-grid>
</template>

<script>
	/**
	 * ProGrid
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProGrid',
		props: {
			column: {
				type: Number,
				default: 3
			},
			borderColor: {
				type: String,
				default: "#d0dee5"
			},
			showBorder: {
				type: Boolean,
				default: true
			},
			square: {
				type: Boolean,
				default: true
			},
			highlight: {
				type: Boolean,
				default: true
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

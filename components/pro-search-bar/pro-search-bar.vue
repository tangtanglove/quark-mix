<template>
	<uni-search-bar
		:value="value"
		:placeholder="placeholder"
		:radius="radius"
		:clearButton="clearButton"
		:cancelButton="cancelButton"
		:cancelText="cancelText"
		:bgColor="bgColor"
		:maxlength="maxlength"
		:focus="focus"
		:style="style"
	>
	</uni-search-bar>
</template>

<script>
	/**
	 * ProSearchBar
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProSearchBar',
		props: {
			value: {
				type: [String,Number],
				default: null
			},
			placeholder: {
				type: String,
				default: "搜索"
			},
			radius: {
				type: Number,
				default: 10
			},
			clearButton: {
				type: String,
				default: "auto"
			},
			cancelButton: {
				type: String,
				default: "auto"
			},
			cancelText: {
				type: String,
				default: "取消"
			},
			bgColor: {
				type: String,
				default: "#F8F8F8"
			},
			maxlength: {
				type: Number,
				default: 100
			},
			focus: {
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

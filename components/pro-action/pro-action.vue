<template>
	<button @click="onClick()" :style="style" :type="type" :size="size">{{label}}</button>
</template>

<script>
	/**
	 * ProAction 行为
	 */
	import { get } from '@/services/action';
	
	export default {
		name: 'ProAction',
		emits: ['click'],
		props: {
			type: {
				type: String,
				default: 'default'
			},
			label: {
				type: [String, Number],
				default: ''
			},
			size: {
				type: String,
				default: 'small'
			},
			actionType: {
				type: String,
				default: 'ajax'
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
		},
		methods: {
			async onClick() {
				if(this.actionType === 'ajax') {
					const result = await get({url:'user/index'})
					console.log(result)
				}
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

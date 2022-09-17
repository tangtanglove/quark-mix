<template>
	<button @click="onClick()" :type="type" :size="size">{{label}}</button>
</template>

<script>
	/**
	 * Action 行为
	 */
	import { get } from '@/services/action';
	
	export default {
		name: 'Action',
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
			customStyle: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		data() {
			return {};
		},
		methods: {
			onClick() {
				if(this.actionType === 'ajax') {
					get({
						actionUrl:'user/index'
					})
				}
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

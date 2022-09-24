<template>
	<uni-nav-bar
		:title="title"
		:leftText="leftText"
		:rightText="rightText"
		:leftIcon="leftIcon"
		:rightIcon="rightIcon"
		:color="color"
		:backgroundColor="backgroundColor"
		:fixed="fixed"
		:statusBar="statusBar"
		:shadow="shadow"
		:border="border"
		:height="height"
		:dark="dark"
		:leftWidth="leftWidth"
		:rightWidth="rightWidth"
		@clickLeft="back"
	>
	</uni-nav-bar>
</template>

<script>
	/**
	 * ProNavBar
	 */
	export default {
		name: 'ProNavBar',
		props: {
			title: {
				type: String,
				default: ''
			},
			leftText: {
				type: String,
				default: ''
			},
			rightText: {
				type: String,
				default: ''
			},
			leftIcon: {
				type: String,
				default: undefined
			},
			rightIcon: {
				type: String,
				default: undefined
			},
			color: {
				type: String,
				default: undefined
			},
			backgroundColor: {
				type: String,
				default: undefined
			},
			fixed: {
				type: Boolean,
				default: false
			},
			statusBar: {
				type: Boolean,
				default: false
			},
			shadow: {
				type: Boolean,
				default: false
			},
			border: {
				type: Boolean,
				default: true
			},
			height: {
				type: [String, Number],
				default: undefined
			},
			dark: {
				type: Boolean,
				default: true
			},
			leftWidth: {
				type: [String, Number],
				default: undefined
			},
			rightWidth: {
				type: [String, Number],
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
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

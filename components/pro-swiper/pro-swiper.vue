<template>
	<swiper
		:indicatorDots="indicatorDots"
		:indicatorColor="indicatorColor"
		:indicatorActiveColor="indicatorActiveColor"
		:activeClass="activeClass"
		:changingClass="changingClass"
		:autoplay="autoplay"
		:current="current"
		:currentItemId="currentItemId"
		:interval="interval"
		:duration="duration"
		:circular="circular"
		:vertical="vertical"
		:previousMargin="previousMargin"
		:nextMargin="nextMargin"
		:acceleration="acceleration"
		:disableProgrammaticAnimation="disableProgrammaticAnimation"
		:displayMultipleItems="displayMultipleItems"
		:skipHiddenItemLayout="skipHiddenItemLayout"
		:disableTouch="disableTouch"
		:touchable="touchable"
		:easingFunction="easingFunction"
		:style="style"
	>
		<swiper-item :style="itemStyle" v-for="(item ,index) in items" :key="index">
			<engine :body="item.body" />
		</swiper-item>
	</swiper>
</template>

<script>
	/**
	 * ProSwiper
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProSwiper',
		props: {
			items: {
				type: Array,
				default: [{
					title: '内容 A',
					body:'A'
				}, {
					title: '内容 B',
					body:'B'
				}, {
					title: '内容 C',
					body:'C'
				}]
			},
			indicatorDots: {
				type: Boolean,
				default: false
			},
			indicatorColor: {
				type: String,
				default: 'rgba(0, 0, 0, .3)'
			},
			indicatorActiveColor: {
				type: String,
				default: '#000000'
			},
			activeClass: {
				type: String,
				default: null
			},
			changingClass: {
				type: String,
				default: null
			},
			autoplay: {
				type: Boolean,
				default: false
			},
			current: {
				type: Number,
				default: 0
			},
			currentItemId: {
				type: String,
				default: ''
			},
			interval: {
				type: Number,
				default: 5000
			},
			duration: {
				type: Number,
				default: 500
			},
			circular: {
				type: Boolean,
				default: false
			},
			vertical: {
				type: Boolean,
				default: false
			},
			previousMargin: {
				type: String,
				default: "0px"
			},
			nextMargin: {
				type: String,
				default: "0px"
			},
			acceleration: {
				type: Boolean,
				default: false
			},
			disableProgrammaticAnimation: {
				type: Boolean,
				default: false
			},
			displayMultipleItems: {
				type: Number,
				default: 1
			},
			skipHiddenItemLayout: {
				type: Boolean,
				default: false
			},
			disableTouch: {
				type: Boolean,
				default: false
			},
			touchable: {
				type: Boolean,
				default: true
			},
			easingFunction: {
				type: String,
				default: "default"
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			},
			itemStyle: {
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

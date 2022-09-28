<template>
	<uni-swiper-dot :style="style" :info="items" :current="current" field="title" :mode="mode" :dotsStyles="dotsStyles">
		<swiper class="swiper-box" @change="change">
			<swiper-item v-for="(item ,index) in items" :key="index">
				<view class="swiper-item">
					<engine :body="item.body" />
				</view>
			</swiper-item>
		</swiper>
	</uni-swiper-dot>
</template>

<script>
	/**
	 * ProSwiperDot
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProSwiperDot',
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
			current: {
				type: Number,
				default: 0
			},
			mode: {
				type: String,
				default: 'round'
			},
			dotsStyles: {
				type: Object,
				default: {}
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

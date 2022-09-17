<template>
    <view v-if="body.hasOwnProperty('component')">
		<view v-if="body.component === 'action'">
			<action :label="body.label" :type="body.type" />
		</view>
		<view v-if="body.component === 'card'">
			<card :title="body.title" :extra="body.extra" :body="this.body.body" />
		</view>
		<view v-if="body.component === 'swiper'">
			<pro-swiper />
		</view>
    </view>
    <view v-else>
      错误
    </view>
</template>

<script>
	/**
	 * Render
	 */
	import Action from '@/components/action/action.vue';
	import Card from '@/components/card/card.vue';
	import ProSwiper from '@/components/pro-swiper/pro-swiper.vue';
	
	export default {
		name: 'Render',
		props: {
			body: {
				type: String[String, Number, Object],
				default: ''
			},
			data: {
				type: Object,
				default () {
					return {}
				}
			},
			callback: {
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

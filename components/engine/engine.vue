<template>
	<view v-if="typeof body === 'string' || typeof body === 'number'">
		{{body}}
	</view>
    <view v-else-if="body.hasOwnProperty('component')">
		<render :body="this.body" :data="this.data" :callback="this.callback" />
    </view>
    <view v-else>
		<view v-for="item in this.body">
			<render :body="item" :data="this.data" :callback="this.callback" />
		</view>
    </view>
</template>

<script>
	/**
	 * Engine
	 */
	import Render from '@/components/render/render.vue';
	
	export default {
		name: 'Engine',
		props: {
			body: {
				type: [String, Number, Object],
				default: ''
			},
			data: {
				type: Object,
				default () {
					return {}
				}
			},
			callback: {
				type: [Object, Function],
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

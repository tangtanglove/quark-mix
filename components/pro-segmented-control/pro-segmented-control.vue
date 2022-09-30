<template>
	<uni-segmented-control 
		:current="controlCurrent"
		:values="titles"
		:styleType="styleType"
		:activeColor="activeColor"
		@clickItem="onClickItem"
	>
	</uni-segmented-control>
	<view class="content">
		<view v-for="(item,key) of this.items">
			<view v-show="controlCurrent === key">
				<render :body="item" />
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * ProSegmentedControl
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProSegmentedControl',
		props: {
			current: {
				type: Number,
				default: 0
			},
			styleType: {
				type: String,
				default: "button"
			},
			activeColor: {
				type: String,
				default: "#007aff"
			},
			titles: {
				type: Array,
				default: null
			},
			items: {
				type: Array,
				default: null
			},
			style: {
				type: [String, Object],
				default () {
					return {}
				}
			}
		},
		data() {
			return {
				controlCurrent: this.current
			}
		},
		methods: {
			onClickItem(e) {
				if (this.controlCurrent != e.currentIndex) {
					this.controlCurrent = e.currentIndex;
				}
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

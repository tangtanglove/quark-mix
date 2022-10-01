<template>
	<video
		id="proVideo"
		:src="src"
		:autoplay="autoplay"
		:loop="loop"
		:muted="muted"
		:initialTime="initialTime"
		:duration="duration"
		:controls="controls"
		:danmuList="danmuList"
		:danmuBtn="danmuBtn"
		:enableDanmu="enableDanmu"
		:pageGesture="pageGesture"
		:direction="direction"
		:showProgress="showProgress"
		:showFullscreenBtn="showFullscreenBtn"
		:showPlayBtn="showPlayBtn"
		:showCenterPlayBtn="showCenterPlayBtn"
		:showLoading="showLoading"
		:enableProgressGesture="enableProgressGesture"
		:objectFit="objectFit"
		:poster="poster"
		:showMuteBtn="showMuteBtn"
		:title="title"
		:playBtnPosition="playBtnPosition"
		:mobilenetHintType="mobilenetHintType"
		:enablePlayGesture="enablePlayGesture"
		:autoPauseIfNavigate="autoPauseIfNavigate"
		:autoPauseIfOpenNative="autoPauseIfOpenNative"
		:vslideGesture="vslideGesture"
		:vslideGestureInFullscreen="vslideGestureInFullscreen"
		:adUnitId="adUnitId"
		:posterForCrawler="posterForCrawler"
		:codec="codec"
		:httpCache="httpCache"
		:playStrategy="playStrategy"
		:header="header"
		:style="style"
		@error="videoErrorCallback"
	>
	</video>
</template>

<script>
	/**
	 * ProVideo
	 */
	import Engine from '@/components/engine/engine.vue';
	
	export default {
		name: 'ProVideo',
		props: {
			src: {
				type: String,
				default: ''
			},
			autoplay: {
				type: Boolean,
				default: false
			},
			loop: {
				type: Boolean,
				default: false
			},
			muted: {
				type: Boolean,
				default: false
			},
			initialTime: {
				type: Number,
				default: false
			},
			duration: {
				type: Number,
				default: false
			},
			controls: {
				type: Boolean,
				default: true
			},
			danmuList: {
				type: [Array,Object],
				default: null
			},
			danmuBtn: {
				type: Boolean,
				default: false
			},
			enableDanmu: {
				type: Boolean,
				default: false
			},
			pageGesture: {
				type: Boolean,
				default: false
			},
			direction: {
				type: Number,
				default: 0
			},
			showProgress: {
				type: Boolean,
				default: true
			},
			showFullscreenBtn: {
				type: Boolean,
				default: true
			},
			showPlayBtn: {
				type: Boolean,
				default: true
			},
			showCenterPlayBtn: {
				type: Boolean,
				default: true
			},
			showLoading: {
				type: Boolean,
				default: true
			},
			enableProgressGesture: {
				type: Boolean,
				default: true
			},
			objectFit: {
				type: String,
				default: "contain"
			},
			poster: {
				type: String,
				default: ""
			},
			showMuteBtn: {
				type: Boolean,
				default: false
			},
			title: {
				type: String,
				default: ""
			},
			playBtnPosition: {
				type: String,
				default: "bottom"
			},
			mobilenetHintType: {
				type: Number,
				default: 1
			},
			enablePlayGesture: {
				type: Boolean,
				default: false
			},
			autoPauseIfNavigate: {
				type: Boolean,
				default: true
			},
			autoPauseIfOpenNative: {
				type: Boolean,
				default: true
			},
			vslideGesture: {
				type: Boolean,
				default: false
			},
			vslideGestureInFullscreen: {
				type: Boolean,
				default: true
			},
			adUnitId: {
				type: String,
				default: ""
			},
			posterForCrawler: {
				type: String,
				default: ""
			},
			codec: {
				type: String,
				default: "hardware"
			},
			httpCache: {
				type: Boolean,
				default: true
			},
			playStrategy: {
				type: Number,
				default: 0
			},
			header: {
				type: Object,
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
			return {};
		},
		mounted() {		
			this.videoContext = uni.createVideoContext('proVideo')
		},
		methods: {
			sendDanmu: function() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				});
				this.danmuValue = '';
			},
			videoErrorCallback: function(e) {
				console.log('视频错误信息:')
				console.log(e.target.errMsg)
			},
			getRandomColor: function() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	};
</script>

<style lang="scss" >
	
</style>

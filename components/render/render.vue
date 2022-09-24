<template>
    <view v-if="body.hasOwnProperty('component')">
		<view v-if="body.component === 'action'">
			<pro-action :label="body.label" :type="body.type" />
		</view>
		<view v-if="body.component === 'card'">
			<pro-card
				:title="body.title"
				:subTitle="body.subTitle"
				:extra="body.extra"
				:thumbnail="body.thumbnail"
				:cover="body.cover"
				:isFull="body.isFull"
				:isShadow="body.isShadow"
				:shadow="body.shadow"
				:border="body.border"
				:margin="body.margin"
				:spacing="body.spacing"
				:padding="body.padding"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'page'">
			<pro-page
				:navBar="body.navBar"
				:tabBar="body.tabBar"
				:content="this.body.content"
			/>
		</view>
		<view v-if="body.component === 'row'">
			<pro-row
				:gutter="body.gutter"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'col'">
			<pro-col
				:title="body.title"
				:span="body.span"
				:offset="body.offset"
				:push="body.push"
				:pull="body.pull"
				:xs="body.xs"
				:sm="body.sm"
				:md="body.md"
				:lg="body.lg"
				:xl="body.xl"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'list'">
			<pro-list
				:border="body.border"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'navbar' || body.component === 'navBar'">
			<pro-nav-bar
				:title="body.title"
				:leftText="body.leftText"
				:rightText="body.rightText"
				:leftIcon="body.leftIcon"
				:rightIcon="body.rightIcon"
				:color="body.color"
				:backgroundColor="body.backgroundColor"
				:fixed="body.fixed"
				:statusBar="body.statusBar"
				:shadow="body.shadow"
				:border="body.border"
				:height="body.height"
				:dark="body.dark"
				:leftWidth="body.leftWidth"
				:rightWidth="body.rightWidth"
				:body="this.body.body"
			/>
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
	import ProPage from '@/components/pro-page/pro-page.vue';
	import ProAction from '@/components/pro-action/pro-action.vue';
	import ProCard from '@/components/pro-card/pro-card.vue';
	import ProSwiper from '@/components/pro-swiper/pro-swiper.vue';
	import ProRow from '@/components/pro-row/pro-row.vue';
	import ProCol from '@/components/pro-col/pro-col.vue';
	import ProList from '@/components/pro-list/pro-list.vue';
	import ProNavBar from '@/components/pro-nav-bar/pro-nav-bar.vue';
	
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

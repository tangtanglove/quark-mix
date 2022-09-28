<template>
    <view v-if="body.hasOwnProperty('component')">
		<view v-if="body.component === 'view'">
			<view
				:style="body.style"
			>
				<engine :body="this.body.body" />
			</view>
		</view>
		<view v-if="body.component === 'page'">
			<pro-page
				:style="body.style"
				:navBar="body.navBar"
				:tabBar="body.tabBar"
				:content="this.body.content"
			/>
		</view>
		<view v-if="body.component === 'row'">
			<pro-row
				:style="body.style"
				:gutter="body.gutter"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'col'">
			<pro-col
				:style="body.style"
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
				:style="body.style"
				:border="body.border"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'listItem'">
			<pro-list-item
				:style="body.style"
				:title="body.title"
				:note="body.note"
				:ellipsis="body.ellipsis"
				:thumb="body.thumb"
				:thumbSize="body.thumbSize"
				:showBadge="body.showBadge"
				:badgeText="body.badgeText"
				:badgeType="body.badgeType"
				:badgeStyle="body.badgeStyle"
				:rightText="body.rightText"
				:disabled="body.disabled"
				:showArrow="body.showArrow"
				:link="body.link"
				:to="body.to"
				:clickable="body.clickable"
				:showSwitch="body.showSwitch"
				:switchChecked="body.switchChecked"
				:showExtraIcon="body.showExtraIcon"
				:extraIcon="body.extraIcon"
				:direction="body.direction"
			/>
		</view>
		<view v-if="body.component === 'section'">
			<pro-section
				:style="body.style"
				:type="body.type"
				:title="body.title"
				:titleFontSize="body.titleFontSize"
				:titleColor="body.titleColor"
				:subTitle="body.subTitle"
				:subTitleFontSize="body.subTitleFontSize"
				:subTitleColor="body.subTitleColor"
				:padding="body.padding"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'group'">
			<pro-group
				:style="body.style"
				:title="body.title"
				:top="body.top"
				:mode="body.mode"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'grid'">
			<pro-grid
				:style="body.style"
				:column="body.column"
				:borderColor="body.borderColor"
				:showBorder="body.showBorder"
				:square="body.square"
				:highlight="body.highlight"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'gridItem'">
			<pro-grid-item
				:style="body.style"
				:index="body.index"
				:body="this.body.body"
			/>
		</view>
		<view v-if="body.component === 'navbar' || body.component === 'navBar'">
			<pro-nav-bar
				:style="body.style"
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
		<view v-if="body.component === 'action'">
			<pro-action
				:style="body.style"
				:label="body.label"
				:type="body.type"
			/>
		</view>
		<view v-if="body.component === 'swiperDot'">
			<pro-swiper-dot
				:style="body.style"
				:items="body.items"
				:current="body.current"
				:mode="body.mode"
				:dotsStyles="body.dotsStyles"
			/>
		</view>
		<view v-if="body.component === 'swiper'">
			<pro-swiper
				:style="body.style"
				:items="body.items"
				:indicatorDots="body.indicatorDots"
				:indicatorColor="body.indicatorColor"
				:indicatorActiveColor="body.indicatorActiveColor"
				:activeClass="body.activeClass"
				:changingClass="body.changingClass"
				:autoplay="body.autoplay"
				:current="body.current"
				:currentItemId="body.currentItemId"
				:interval="body.interval"
				:duration="body.duration"
				:circular="body.circular"
				:vertical="body.vertical"
				:previousMargin="body.previousMargin"
				:nextMargin="body.nextMargin"
				:acceleration="body.acceleration"
				:disableProgrammaticAnimation="body.disableProgrammaticAnimation"
				:displayMultipleItems="body.displayMultipleItems"
				:skipHiddenItemLayout="body.skipHiddenItemLayout"
				:disableTouch="body.disableTouch"
				:touchable="body.touchable"
				:easingFunction="body.easingFunction"
			/>
		</view>
		<view v-if="body.component === 'card'">
			<pro-card
				:style="body.style"
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
		<view v-if="body.component === 'image'">
			<image
				:src="body.src"
				:mode="body.mode"
				:lazyLoad="body.lazyLoad"
				:fadeShow="body.fadeShow"
				:webp="body.webp"
				:showMenuByLongpress="body.showMenuByLongpress"
				:draggable="body.draggable"
				:style="body.style"
			/>
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
	import Engine from '@/components/engine/engine.vue';
	import ProPage from '@/components/pro-page/pro-page.vue';
	import ProRow from '@/components/pro-row/pro-row.vue';
	import ProCol from '@/components/pro-col/pro-col.vue';
	import ProList from '@/components/pro-list/pro-list.vue';
	import ProListItem from '@/components/pro-list-item/pro-list-item.vue';
	import ProSection from '@/components/pro-section/pro-section.vue'
	import ProGroup from '@/components/pro-group/pro-group.vue'
	import ProGrid from '@/components/pro-grid/pro-grid.vue';
	import ProGridItem from '@/components/pro-grid-item/pro-grid-item.vue';
	import ProNavBar from '@/components/pro-nav-bar/pro-nav-bar.vue';
	import ProAction from '@/components/pro-action/pro-action.vue';
	import ProSwiperDot from '@/components/pro-swiper-dot/pro-swiper-dot.vue';
	import ProSwiper from '@/components/pro-swiper/pro-swiper.vue';
	import ProCard from '@/components/pro-card/pro-card.vue';
	
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

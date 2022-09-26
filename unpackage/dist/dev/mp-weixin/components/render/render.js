"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Render",
  props: {
    body: {
      type: String[Object],
      default: ""
    },
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    callback: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_pro_page2 = common_vendor.resolveComponent("pro-page");
  const _easycom_pro_row2 = common_vendor.resolveComponent("pro-row");
  const _easycom_pro_col2 = common_vendor.resolveComponent("pro-col");
  const _easycom_pro_list2 = common_vendor.resolveComponent("pro-list");
  const _easycom_pro_list_item2 = common_vendor.resolveComponent("pro-list-item");
  const _easycom_pro_nav_bar2 = common_vendor.resolveComponent("pro-nav-bar");
  const _easycom_pro_action2 = common_vendor.resolveComponent("pro-action");
  const _easycom_pro_swiper2 = common_vendor.resolveComponent("pro-swiper");
  const _easycom_pro_card2 = common_vendor.resolveComponent("pro-card");
  (_easycom_pro_page2 + _easycom_pro_row2 + _easycom_pro_col2 + _easycom_pro_list2 + _easycom_pro_list_item2 + _easycom_pro_nav_bar2 + _easycom_pro_action2 + _easycom_pro_swiper2 + _easycom_pro_card2)();
}
const _easycom_pro_page = () => "../pro-page/pro-page.js";
const _easycom_pro_row = () => "../pro-row/pro-row.js";
const _easycom_pro_col = () => "../pro-col/pro-col.js";
const _easycom_pro_list = () => "../pro-list/pro-list.js";
const _easycom_pro_list_item = () => "../pro-list-item/pro-list-item.js";
const _easycom_pro_nav_bar = () => "../pro-nav-bar/pro-nav-bar.js";
const _easycom_pro_action = () => "../pro-action/pro-action.js";
const _easycom_pro_swiper = () => "../pro-swiper/pro-swiper.js";
const _easycom_pro_card = () => "../pro-card/pro-card.js";
if (!Math) {
  (_easycom_pro_page + _easycom_pro_row + _easycom_pro_col + _easycom_pro_list + _easycom_pro_list_item + _easycom_pro_nav_bar + _easycom_pro_action + _easycom_pro_swiper + _easycom_pro_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.body.hasOwnProperty("component")
  }, $props.body.hasOwnProperty("component") ? common_vendor.e({
    b: $props.body.component === "page"
  }, $props.body.component === "page" ? {
    c: common_vendor.p({
      navBar: $props.body.navBar,
      tabBar: $props.body.tabBar,
      content: this.body.content
    })
  } : {}, {
    d: $props.body.component === "row"
  }, $props.body.component === "row" ? {
    e: common_vendor.p({
      gutter: $props.body.gutter,
      body: this.body.body
    })
  } : {}, {
    f: $props.body.component === "col"
  }, $props.body.component === "col" ? {
    g: common_vendor.p({
      title: $props.body.title,
      span: $props.body.span,
      offset: $props.body.offset,
      push: $props.body.push,
      pull: $props.body.pull,
      xs: $props.body.xs,
      sm: $props.body.sm,
      md: $props.body.md,
      lg: $props.body.lg,
      xl: $props.body.xl,
      body: this.body.body
    })
  } : {}, {
    h: $props.body.component === "list"
  }, $props.body.component === "list" ? {
    i: common_vendor.p({
      border: $props.body.border,
      body: this.body.body
    })
  } : {}, {
    j: $props.body.component === "listItem"
  }, $props.body.component === "listItem" ? {
    k: common_vendor.p({
      title: $props.body.title,
      note: $props.body.note,
      ellipsis: $props.body.ellipsis,
      thumb: $props.body.thumb,
      thumbSize: $props.body.thumbSize,
      showBadge: $props.body.showBadge,
      badgeText: $props.body.badgeText,
      badgeType: $props.body.badgeType,
      badgeStyle: $props.body.badgeStyle,
      rightText: $props.body.rightText,
      disabled: $props.body.disabled,
      showArrow: $props.body.showArrow,
      link: $props.body.link,
      to: $props.body.to,
      clickable: $props.body.clickable,
      showSwitch: $props.body.showSwitch,
      switchChecked: $props.body.switchChecked,
      showExtraIcon: $props.body.showExtraIcon,
      extraIcon: $props.body.extraIcon,
      direction: $props.body.direction
    })
  } : {}, {
    l: $props.body.component === "navbar" || $props.body.component === "navBar"
  }, $props.body.component === "navbar" || $props.body.component === "navBar" ? {
    m: common_vendor.p({
      title: $props.body.title,
      leftText: $props.body.leftText,
      rightText: $props.body.rightText,
      leftIcon: $props.body.leftIcon,
      rightIcon: $props.body.rightIcon,
      color: $props.body.color,
      backgroundColor: $props.body.backgroundColor,
      fixed: $props.body.fixed,
      statusBar: $props.body.statusBar,
      shadow: $props.body.shadow,
      border: $props.body.border,
      height: $props.body.height,
      dark: $props.body.dark,
      leftWidth: $props.body.leftWidth,
      rightWidth: $props.body.rightWidth,
      body: this.body.body
    })
  } : {}, {
    n: $props.body.component === "action"
  }, $props.body.component === "action" ? {
    o: common_vendor.p({
      label: $props.body.label,
      type: $props.body.type
    })
  } : {}, {
    p: $props.body.component === "swiper"
  }, $props.body.component === "swiper" ? {} : {}, {
    q: $props.body.component === "card"
  }, $props.body.component === "card" ? {
    r: common_vendor.p({
      title: $props.body.title,
      subTitle: $props.body.subTitle,
      extra: $props.body.extra,
      thumbnail: $props.body.thumbnail,
      cover: $props.body.cover,
      isFull: $props.body.isFull,
      isShadow: $props.body.isShadow,
      shadow: $props.body.shadow,
      border: $props.body.border,
      margin: $props.body.margin,
      spacing: $props.body.spacing,
      padding: $props.body.padding,
      body: this.body.body
    })
  } : {}) : {});
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/render/render.vue"]]);
wx.createComponent(Component);

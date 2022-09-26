"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProPage",
  props: {
    navBar: {
      type: [Object],
      default: null
    },
    tabBar: {
      type: [Boolean, Object],
      default: null
    },
    content: {
      type: [String, Number, Object],
      default: ""
    },
    customStyle: {
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
  const _easycom_pro_nav_bar2 = common_vendor.resolveComponent("pro-nav-bar");
  const _easycom_engine2 = common_vendor.resolveComponent("engine");
  (_easycom_pro_nav_bar2 + _easycom_engine2)();
}
const _easycom_pro_nav_bar = () => "../pro-nav-bar/pro-nav-bar.js";
const _easycom_engine = () => "../engine/engine.js";
if (!Math) {
  (_easycom_pro_nav_bar + _easycom_engine)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.navBar
  }, $props.navBar ? {
    b: common_vendor.p({
      title: $props.navBar.title,
      leftText: $props.navBar.leftText,
      rightText: $props.navBar.rightText,
      leftIcon: $props.navBar.leftIcon,
      rightIcon: $props.navBar.rightIcon,
      color: $props.navBar.color,
      backgroundColor: $props.navBar.backgroundColor,
      fixed: $props.navBar.fixed,
      statusBar: $props.navBar.statusBar,
      shadow: $props.navBar.shadow,
      border: $props.navBar.border,
      height: $props.navBar.height,
      dark: $props.navBar.dark,
      leftWidth: $props.navBar.leftWidth,
      rightWidth: $props.navBar.rightWidth,
      body: this.navBar.body
    })
  } : {}, {
    c: common_vendor.p({
      body: this.content
    })
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-page/pro-page.vue"]]);
wx.createComponent(Component);

"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProNavBar",
  props: {
    title: {
      type: String,
      default: ""
    },
    leftText: {
      type: String,
      default: ""
    },
    rightText: {
      type: String,
      default: ""
    },
    leftIcon: {
      type: String,
      default: void 0
    },
    rightIcon: {
      type: String,
      default: void 0
    },
    color: {
      type: String,
      default: void 0
    },
    backgroundColor: {
      type: String,
      default: void 0
    },
    fixed: {
      type: Boolean,
      default: false
    },
    statusBar: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    border: {
      type: Boolean,
      default: true
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    dark: {
      type: Boolean,
      default: true
    },
    leftWidth: {
      type: [String, Number],
      default: void 0
    },
    rightWidth: {
      type: [String, Number],
      default: void 0
    },
    body: {
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
  },
  methods: {
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  _easycom_uni_nav_bar2();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  _easycom_uni_nav_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.back),
    b: common_vendor.p({
      title: $props.title,
      leftText: $props.leftText,
      rightText: $props.rightText,
      leftIcon: $props.leftIcon,
      rightIcon: $props.rightIcon,
      color: $props.color,
      backgroundColor: $props.backgroundColor,
      fixed: $props.fixed,
      statusBar: $props.statusBar,
      shadow: $props.shadow,
      border: $props.border,
      height: $props.height,
      dark: $props.dark,
      leftWidth: $props.leftWidth,
      rightWidth: $props.rightWidth
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-nav-bar/pro-nav-bar.vue"]]);
wx.createComponent(Component);

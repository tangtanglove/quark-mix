"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProListItem",
  props: {
    title: {
      type: String,
      default: ""
    },
    note: {
      type: String,
      default: ""
    },
    ellipsis: {
      type: Number,
      default: 0
    },
    thumb: {
      type: String,
      default: ""
    },
    thumbSize: {
      type: String,
      default: "medium"
    },
    showBadge: {
      type: Boolean,
      default: false
    },
    badgeText: {
      type: String,
      default: ""
    },
    badgeType: {
      type: String,
      default: ""
    },
    badgeStyle: {
      type: Object,
      default: void 0
    },
    rightText: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    link: {
      type: String,
      default: "navigateTo"
    },
    to: {
      type: String,
      default: null
    },
    clickable: {
      type: Boolean,
      default: false
    },
    showSwitch: {
      type: Boolean,
      default: false
    },
    switchChecked: {
      type: Boolean,
      default: false
    },
    showExtraIcon: {
      type: Boolean,
      default: false
    },
    extraIcon: {
      type: Object,
      default: void 0
    },
    direction: {
      type: String,
      default: "row"
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
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  _easycom_uni_list_item2();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  _easycom_uni_list_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: $props.title,
      note: $props.note,
      ellipsis: $props.ellipsis,
      thumb: $props.thumb,
      thumbSize: $props.thumbSize,
      showBadge: $props.showBadge,
      badgeText: $props.badgeText,
      badgeType: $props.badgeType,
      badgeStyle: $props.badgeStyle,
      rightText: $props.rightText,
      disabled: $props.disabled,
      showArrow: $props.showArrow,
      link: $props.link,
      to: $props.to,
      clickable: $props.clickable,
      showSwitch: $props.showSwitch,
      switchChecked: $props.switchChecked,
      showExtraIcon: $props.showExtraIcon,
      extraIcon: $props.extraIcon,
      direction: $props.direction
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-list-item/pro-list-item.vue"]]);
wx.createComponent(Component);

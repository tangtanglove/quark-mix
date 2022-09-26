"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProCard",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    extra: {
      type: String,
      default: ""
    },
    thumbnail: {
      type: String,
      default: void 0
    },
    cover: {
      type: String,
      default: void 0
    },
    isFull: {
      type: Boolean,
      default: false
    },
    isShadow: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: String,
      default: void 0
    },
    border: {
      type: Boolean,
      default: true
    },
    margin: {
      type: String,
      default: void 0
    },
    spacing: {
      type: String,
      default: void 0
    },
    padding: {
      type: String,
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
  }
};
if (!Array) {
  const _easycom_engine2 = common_vendor.resolveComponent("engine");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_engine2 + _easycom_uni_card2)();
}
const _easycom_engine = () => "../engine/engine.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_engine + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      body: $props.body
    }),
    b: common_vendor.p({
      title: $props.title,
      subTitle: $props.subTitle,
      extra: $props.extra,
      thumbnail: $props.thumbnail,
      cover: $props.cover,
      isFull: $props.isFull,
      isShadow: $props.isShadow,
      shadow: $props.shadow,
      border: $props.border,
      margin: $props.margin,
      spacing: $props.spacing,
      padding: $props.padding
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-card/pro-card.vue"]]);
wx.createComponent(Component);

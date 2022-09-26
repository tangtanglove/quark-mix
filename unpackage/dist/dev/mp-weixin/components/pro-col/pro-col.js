"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProCol",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: void 0
    },
    push: {
      type: Number,
      default: void 0
    },
    pull: {
      type: Number,
      default: void 0
    },
    xs: {
      type: [Number, Object],
      default: void 0
    },
    sm: {
      type: [Number, Object],
      default: void 0
    },
    md: {
      type: [Number, Object],
      default: void 0
    },
    lg: {
      type: [Number, Object],
      default: void 0
    },
    xl: {
      type: [Number, Object],
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
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  (_easycom_engine2 + _easycom_uni_col2)();
}
const _easycom_engine = () => "../engine/engine.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
if (!Math) {
  (_easycom_engine + _easycom_uni_col)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      body: $props.body
    }),
    b: common_vendor.p({
      span: $props.span,
      offset: $props.offset,
      push: $props.push,
      pull: $props.pull,
      xs: $props.xs,
      sm: $props.sm,
      md: $props.md,
      lg: $props.lg,
      xl: $props.xl
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-col/pro-col.vue"]]);
wx.createComponent(Component);

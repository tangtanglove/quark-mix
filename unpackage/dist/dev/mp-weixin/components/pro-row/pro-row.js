"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProRow",
  props: {
    gutter: {
      type: Number,
      default: 0
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
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_engine2 + _easycom_uni_row2)();
}
const _easycom_engine = () => "../engine/engine.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_engine + _easycom_uni_row)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      body: $props.body
    }),
    b: common_vendor.p({
      gutter: $props.gutter
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-row/pro-row.vue"]]);
wx.createComponent(Component);

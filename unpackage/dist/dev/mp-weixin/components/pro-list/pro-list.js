"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProList",
  props: {
    border: {
      type: Boolean,
      default: true
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
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_engine2 + _easycom_uni_list2)();
}
const _easycom_engine = () => "../engine/engine.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_engine + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      body: $props.body
    }),
    b: common_vendor.p({
      border: $props.border
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-list/pro-list.vue"]]);
wx.createComponent(Component);

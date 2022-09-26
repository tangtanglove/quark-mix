"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "Engine",
  props: {
    body: {
      type: [String, Number, Object],
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
  const _easycom_render2 = common_vendor.resolveComponent("render");
  _easycom_render2();
}
const _easycom_render = () => "../render/render.js";
if (!Math) {
  _easycom_render();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: typeof $props.body === "string" || typeof $props.body === "number"
  }, typeof $props.body === "string" || typeof $props.body === "number" ? {
    b: common_vendor.t($props.body)
  } : $props.body.hasOwnProperty("component") ? {
    d: common_vendor.p({
      body: this.body
    })
  } : {
    e: common_vendor.f(this.body, (item, k0, i0) => {
      return {
        a: "748766f2-1-" + i0,
        b: common_vendor.p({
          body: item
        })
      };
    })
  }, {
    c: $props.body.hasOwnProperty("component")
  });
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/engine/engine.vue"]]);
wx.createComponent(Component);

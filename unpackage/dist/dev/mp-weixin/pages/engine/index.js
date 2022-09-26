"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      api: null
    };
  },
  onReady() {
  },
  onLoad(option) {
    if (!option.api) {
      common_vendor.index.showToast({
        title: "\u63A5\u53E3\u4E0D\u80FD\u4E3A\u7A7A\uFF01",
        duration: 2e3
      });
    } else {
      this.api = option.api;
    }
  },
  methods: {}
};
if (!Array) {
  const _easycom_engine_page2 = common_vendor.resolveComponent("engine-page");
  _easycom_engine_page2();
}
const _easycom_engine_page = () => "../../components/engine-page/engine-page.js";
if (!Math) {
  _easycom_engine_page();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      api: $data.api
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/pages/engine/index.vue"]]);
wx.createPage(MiniProgramPage);

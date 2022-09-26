"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "\u9996\u9875",
      api: "/api/mix/page/index"
    };
  },
  onReady() {
    this.setTitle();
  },
  methods: {
    setTitle() {
      common_vendor.index.setNavigationBarTitle({
        title: this.title
      });
    }
  }
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
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);

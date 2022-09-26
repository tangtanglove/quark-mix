"use strict";
var common_vendor = require("../../common/vendor.js");
var services_action = require("../../services/action.js");
require("../../utils/request.js");
require("../../config/config.js");
const _sfc_main = {
  name: "EnginePage",
  props: {
    title: {
      type: String,
      default: "\u5F15\u64CE\u9875"
    },
    api: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      body: {}
    };
  },
  created() {
    if (!this.api) {
      common_vendor.index.showToast({
        title: "\u63A5\u53E3\u4E0D\u80FD\u4E3A\u7A7A\uFF01\uFF01"
      });
    }
    this.getComponents(this.api);
  },
  methods: {
    async getComponents(api) {
      let result = await services_action.get({
        url: api
      });
      this.body = result;
      common_vendor.index.setNavigationBarTitle({
        title: result.title
      });
    }
  }
};
if (!Array) {
  const _easycom_engine2 = common_vendor.resolveComponent("engine");
  _easycom_engine2();
}
const _easycom_engine = () => "../engine/engine.js";
if (!Math) {
  _easycom_engine();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      body: this.body
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/engine-page/engine-page.vue"]]);
wx.createComponent(Component);

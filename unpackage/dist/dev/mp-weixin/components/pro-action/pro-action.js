"use strict";
var services_action = require("../../services/action.js");
var common_vendor = require("../../common/vendor.js");
require("../../utils/request.js");
require("../../config/config.js");
const _sfc_main = {
  name: "ProAction",
  emits: ["click"],
  props: {
    type: {
      type: String,
      default: "default"
    },
    label: {
      type: [String, Number],
      default: ""
    },
    size: {
      type: String,
      default: "small"
    },
    actionType: {
      type: String,
      default: "ajax"
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
    async onClick() {
      if (this.actionType === "ajax") {
        const result = await services_action.get({ url: "user/index" });
        console.log(result);
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.label),
    b: common_vendor.o(($event) => $options.onClick()),
    c: $props.type,
    d: $props.size
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-action/pro-action.vue"]]);
wx.createComponent(Component);

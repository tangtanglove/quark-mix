"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "ProSwiper",
  props: {
    title: {
      type: String,
      default: ""
    },
    extra: {
      type: String,
      default: ""
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
    return {
      info: [{
        content: "\u5185\u5BB9 A"
      }, {
        content: "\u5185\u5BB9 B"
      }, {
        content: "\u5185\u5BB9 C"
      }],
      current: 0,
      mode: "round"
    };
  },
  methods: {
    change(e) {
      this.current = e.detail.current;
    }
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.info, (item, index, i0) => {
      return {
        a: common_vendor.t(item.content),
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.change && $options.change(...args)),
    c: common_vendor.p({
      info: $data.info,
      current: $data.current,
      field: "content",
      mode: $data.mode
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/develop/quark/quark-mix/components/pro-swiper/pro-swiper.vue"]]);
wx.createComponent(Component);

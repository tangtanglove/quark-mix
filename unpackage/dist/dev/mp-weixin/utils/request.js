"use strict";
var common_vendor = require("../common/vendor.js");
var config_config = require("../config/config.js");
const request = async (url, options) => {
  if (url.indexOf("http") == -1) {
    url = config_config.config.apiHost + url;
  }
  var token = common_vendor.index.getStorageSync("token");
  if (!token) {
    token = "";
  }
  var res = await common_vendor.index.request({
    url,
    data: options.data,
    method: options.method,
    header: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};
exports.request = request;

"use strict";
var utils_request = require("../utils/request.js");
const get = async (params) => {
  let url = params.url;
  delete params["url"];
  var res = await utils_request.request(url, {
    method: "GET",
    data: params
  });
  return res;
};
exports.get = get;

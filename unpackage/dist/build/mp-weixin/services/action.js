"use strict";var e=require("../utils/request.js");exports.get=async t=>{let r=t.url;return delete t.url,await e.request(r,{method:"GET",data:t})};

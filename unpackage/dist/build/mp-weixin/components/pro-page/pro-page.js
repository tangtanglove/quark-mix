"use strict";var a=require("../../common/vendor.js");const r={name:"ProPage",props:{navBar:{type:[Object],default:null},tabBar:{type:[Boolean,Object],default:null},content:{type:[String,Number,Object],default:""},customStyle:{type:Object,default:()=>({})}},data:()=>({})};if(!Array){(a.resolveComponent("pro-nav-bar")+a.resolveComponent("engine"))()}Math||((()=>"../pro-nav-bar/pro-nav-bar.js")+(()=>"../engine/engine.js"))();var t=a._export_sfc(r,[["render",function(r,t,e,n,o,v){return a.e({a:e.navBar},e.navBar?{b:a.p({title:e.navBar.title,leftText:e.navBar.leftText,rightText:e.navBar.rightText,leftIcon:e.navBar.leftIcon,rightIcon:e.navBar.rightIcon,color:e.navBar.color,backgroundColor:e.navBar.backgroundColor,fixed:e.navBar.fixed,statusBar:e.navBar.statusBar,shadow:e.navBar.shadow,border:e.navBar.border,height:e.navBar.height,dark:e.navBar.dark,leftWidth:e.navBar.leftWidth,rightWidth:e.navBar.rightWidth,body:this.navBar.body})}:{},{c:a.p({body:this.content})})}]]);wx.createComponent(t);
webpackJsonp([16,17],{19:function(t,o,a){o=t.exports=a(1)(),o.push([t.id,".ableft[data-v-0a54d1c3]{position:absolute;left:0}","",{version:3,sources:["/./src/pages/poup/loading.vue"],names:[],mappings:"AACA,yBAAyB,kBAAkB,MAAM,CAChD",file:"loading.vue",sourcesContent:["\n.ableft[data-v-0a54d1c3]{position:absolute;left:0\n}"],sourceRoot:"webpack://"}])},39:function(t,o,a){var s=a(19);"string"==typeof s&&(s=[[t.id,s,""]]);a(2)(s,{});s.locals&&(t.exports=s.locals)},77:function(t,o,a){a(39);var s=a(3)(a(150),a(81),"data-v-0a54d1c3",null);t.exports=s.exports},81:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("div",{staticClass:"header"},[a("a",{staticClass:"icon_back ableft",on:{click:t.goback}}),t._v(" "),a("h3",[t._v("loading")])]),t._v(" "),a("div",{staticClass:"bgw border-bottom border-top padrl10"},t._l(t.items,function(o){return a("div",{staticClass:"border-bottom padtb10"},[t._v("\n\t\t\t\t"+t._s(o)+"\n\t\t\t")])})),t._v(" "),a("div",{staticClass:"padtb10"},[a("div",{staticClass:"ct_btn",on:{click:t.showloading}},[a("a",{attrs:{href:"javscript:void(0)"}},[t._v("加载")])])])])},staticRenderFns:[]}},150:function(t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={data:function(){return{flag:9,items:["商品1","商品2","商品3","商品4","商品5","商品6","商品7","商品8"]}},mounted:function(){},methods:{showloading:function(){this.$root.loading=!0;var t=this;setTimeout(function(){t.$root.loading=!1;for(var o=0;o<5;o++)t.items.push("商品"+t.flag++)},2e3)},nextpage:function(){this.$router.push({path:"/login"})},goback:function(){this.$router.go(-1)}},components:{}}}});
//# sourceMappingURL=16.56c4fa37049d75f8c3a4.js.map
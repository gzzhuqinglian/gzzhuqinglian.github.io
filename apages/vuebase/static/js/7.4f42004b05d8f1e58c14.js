webpackJsonp([7,17],{29:function(e,c,t){c=e.exports=t(1)(),c.push([e.id,'.ableft[data-v-9b2da1bc]{position:absolute;left:0}.checkbox-icon[data-v-9b2da1bc]{display:inline-block;width:20px;height:20px;vertical-align:middle;background-color:#fff;border:1px solid #ccc;border-radius:50%;position:relative;margin-right:10px}.checkbox:checked+.checkbox-icon[data-v-9b2da1bc]{background-color:#26a2ff;border-color:#26a2ff}.checkbox:checked+.checkbox-icon[data-v-9b2da1bc]:after{display:inline-block;content:"";width:8px;height:4px;border-left:2px solid #fff;border-bottom:2px solid #fff;position:absolute;top:50%;left:50%;background-color:transparent;transform:translate(-50%,-50%) rotate(-45deg);-ms-transform:translate(-50%,-50%) rotate(-45deg);-moz-transform:translate(-50%,-50%) rotate(-45deg);-webkit-transform:translate(-50%,-50%) rotate(-45deg);-o-transform:translate(-50%,-50%) rotate(-45deg)}',"",{version:3,sources:["/./src/pages/form/checkbox.vue"],names:[],mappings:"AACA,yBAAyB,kBAAkB,MAAM,CAChD,AACD,gCAAgC,qBAAqB,WAAW,YAAY,sBAAsB,sBAAyB,sBAAyB,kBAAkB,kBAAkB,iBAAiB,CACxM,AACD,kDAAkD,yBAAyB,oBAAoB,CAC9F,AACD,wDAAwD,qBAAqB,WAAW,UAAU,WAAW,2BAA8B,6BAAgC,kBAAkB,QAAQ,SAAS,6BAA6B,8CAA+C,kDAAmD,mDAAoD,sDAAuD,gDAAiD,CACxe",file:"checkbox.vue",sourcesContent:["\n.ableft[data-v-9b2da1bc]{position:absolute;left:0\n}\n.checkbox-icon[data-v-9b2da1bc]{display:inline-block;width:20px;height:20px;vertical-align:middle;background-color:#FFFFFF;border:1px solid #CCCCCC;border-radius:50%;position:relative;margin-right:10px\n}\n.checkbox:checked+.checkbox-icon[data-v-9b2da1bc]{background-color:#26A2FF;border-color:#26A2FF\n}\n.checkbox:checked+.checkbox-icon[data-v-9b2da1bc]:after{display:inline-block;content:'';width:8px;height:4px;border-left:2px solid #FFFFFF;border-bottom:2px solid #FFFFFF;position:absolute;top:50%;left:50%;background-color:transparent;transform:translate(-50%, -50%) rotate(-45deg);-ms-transform:translate(-50%, -50%) rotate(-45deg);-moz-transform:translate(-50%, -50%) rotate(-45deg);-webkit-transform:translate(-50%, -50%) rotate(-45deg);-o-transform:translate(-50%, -50%) rotate(-45deg)\n}"],sourceRoot:"webpack://"}])},51:function(e,c,t){var o=t(29);"string"==typeof o&&(o=[[e.id,o,""]]);t(2)(o,{});o.locals&&(e.exports=o.locals)},64:function(e,c,t){t(51);var o=t(3)(t(137),t(93),"data-v-9b2da1bc",null);e.exports=o.exports},93:function(e,c){e.exports={render:function(){var e=this,c=e.$createElement,t=e._self._c||c;return t("div",[t("div",{staticClass:"header"},[t("a",{staticClass:"icon_back ableft",on:{click:e.goback}}),e._v(" "),t("h3",[e._v("checkbox")])]),e._v(" "),t("div",{staticClass:"padl10 padtb10 bgw"},[t("div",{staticClass:"padtb10"},[e._v("\n\t\t\t\t复选框右对齐\n\t\t\t")]),e._v(" "),t("div",{staticClass:"padl10 border-bottom border-top"},[t("label",{staticClass:"border-bottom padtb10",staticStyle:{display:"block"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],staticClass:"checkbox",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox",value:"frist"},domProps:{checked:Array.isArray(e.checkbox)?e._i(e.checkbox,"frist")>-1:e.checkbox},on:{click:function(c){var t=e.checkbox,o=c.target,a=!!o.checked;if(Array.isArray(t)){var s="frist",r=e._i(t,s);a?r<0&&(e.checkbox=t.concat(s)):r>-1&&(e.checkbox=t.slice(0,r).concat(t.slice(r+1)))}else e.checkbox=a}}}),e._v(" "),t("span",{staticClass:"checkbox-icon"}),e._v(" "),t("span",[e._v("frist")])]),e._v(" "),t("label",{staticClass:"padtb10 border-bottom",staticStyle:{display:"block"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],staticClass:"checkbox",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox",value:"second"},domProps:{checked:Array.isArray(e.checkbox)?e._i(e.checkbox,"second")>-1:e.checkbox},on:{click:function(c){var t=e.checkbox,o=c.target,a=!!o.checked;if(Array.isArray(t)){var s="second",r=e._i(t,s);a?r<0&&(e.checkbox=t.concat(s)):r>-1&&(e.checkbox=t.slice(0,r).concat(t.slice(r+1)))}else e.checkbox=a}}}),e._v(" "),t("span",{staticClass:"checkbox-icon"}),e._v(" "),t("span",[e._v("second")])]),e._v(" "),t("label",{staticClass:"padtb10",staticStyle:{display:"block"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox,expression:"checkbox"}],staticClass:"checkbox",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox",value:"third"},domProps:{checked:Array.isArray(e.checkbox)?e._i(e.checkbox,"third")>-1:e.checkbox},on:{click:function(c){var t=e.checkbox,o=c.target,a=!!o.checked;if(Array.isArray(t)){var s="third",r=e._i(t,s);a?r<0&&(e.checkbox=t.concat(s)):r>-1&&(e.checkbox=t.slice(0,r).concat(t.slice(r+1)))}else e.checkbox=a}}}),e._v(" "),t("span",{staticClass:"checkbox-icon"}),e._v(" "),t("span",[e._v("third")])])]),e._v(" "),t("div",{staticClass:"padtb10 border-bottom"},[e._v("\n\t\t\t\t"+e._s(e.checkbox)+"\n\t\t\t")]),e._v(" "),t("div",{staticClass:"padtb10"},[e._v("\n\t\t\t\t复选框左对齐\n\t\t\t")]),e._v(" "),t("div",{staticClass:"padl10 border-bottom border-top"},[t("label",{staticClass:"border-bottom padtb10 flex flex-align-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox1,expression:"checkbox1"}],staticClass:"checkbox ",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox1",value:"frist1"},domProps:{checked:Array.isArray(e.checkbox1)?e._i(e.checkbox1,"frist1")>-1:e.checkbox1},on:{click:function(c){var t=e.checkbox1,o=c.target,a=!!o.checked;if(Array.isArray(t)){var s="frist1",r=e._i(t,s);a?r<0&&(e.checkbox1=t.concat(s)):r>-1&&(e.checkbox1=t.slice(0,r).concat(t.slice(r+1)))}else e.checkbox1=a}}}),e._v(" "),t("span",{staticClass:"checkbox-icon  flex-order-2"}),e._v(" "),t("span",{staticClass:"flex-item flex-order-1"},[e._v("frist")])]),e._v(" "),t("label",{staticClass:"padtb10 border-bottom flex flex-align-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox1,expression:"checkbox1"}],staticClass:"checkbox",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox1",value:"second1"},domProps:{checked:Array.isArray(e.checkbox1)?e._i(e.checkbox1,"second1")>-1:e.checkbox1},on:{click:function(c){var t=e.checkbox1,o=c.target,a=!!o.checked;if(Array.isArray(t)){var s="second1",r=e._i(t,s);a?r<0&&(e.checkbox1=t.concat(s)):r>-1&&(e.checkbox1=t.slice(0,r).concat(t.slice(r+1)))}else e.checkbox1=a}}}),e._v(" "),t("span",{staticClass:"checkbox-icon flex-order",staticStyle:{order:"2"}}),e._v(" "),t("span",{staticClass:"flex-item",staticStyle:{order:"1"}},[e._v("second")])]),e._v(" "),t("label",{staticClass:"padtb10 flex flex-align-items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.checkbox1,expression:"checkbox1"}],staticClass:"checkbox",staticStyle:{display:"none"},attrs:{type:"checkbox",name:"checkbox1",value:"third1"},domProps:{checked:Array.isArray(e.checkbox1)?e._i(e.checkbox1,"third1")>-1:e.checkbox1},on:{click:function(c){var t=e.checkbox1,o=c.target,a=!!o.checked;if(Array.isArray(t)){var s="third1",r=e._i(t,s);a?r<0&&(e.checkbox1=t.concat(s)):r>-1&&(e.checkbox1=t.slice(0,r).concat(t.slice(r+1)))}else e.checkbox1=a}}}),e._v(" "),t("span",{staticClass:"checkbox-icon flex-order",staticStyle:{order:"2"}}),e._v(" "),t("span",{staticClass:"flex-item",staticStyle:{order:"1"}},[e._v("third")])])]),e._v(" "),t("div",{staticClass:"padtb10 border-bottom"},[e._v("\n\t\t\t\t"+e._s(e.checkbox1)+"\n\t\t\t")])])])},staticRenderFns:[]}},137:function(e,c){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={data:function(){return{checkbox:[],checkbox1:[]}},mounted:function(){},methods:{nextpage:function(){this.$router.push({path:"/login"})},goback:function(){this.$router.go(-1)}},components:{}}}});
//# sourceMappingURL=7.4f42004b05d8f1e58c14.js.map
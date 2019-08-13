(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{155:function(s,t,a){"use strict";a.r(t);function r(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h1",[t._v("InputNumber 数字输入框")]),t._v(" "),a("hr"),t._v(" "),a("h2",[t._v("基础用法")]),t._v(" "),t._m(0),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("p",{staticClass:"demo-desc"},[t._v("基本输入框，范围可以无递加或递减")]),t._v(" "),a("div",{staticClass:"row no-gutter"},[a("div",{staticClass:"col-md-4"},[a("by-input-number",{model:{value:t.num1,callback:function(s){t.num1=s},expression:"num1"}}),a("br")],1)]),t._v(" "),a("p",{staticClass:"demo-desc"},[t._v("有精度输入框，step=5，step=0.5")]),t._v(" "),a("div",{staticClass:"row no-gutter"},[a("div",{staticClass:"col-md-4"},[a("by-input-number",{attrs:{step:5},model:{value:t.num2,callback:function(s){t.num2=s},expression:"num2"}})],1),t._v(" "),a("div",{staticClass:"col-md-4 col-md-offset-1"},[a("by-input-number",{attrs:{step:.5},model:{value:t.num3,callback:function(s){t.num3=s},expression:"num3"}})],1)]),t._v(" "),a("p",{staticClass:"demo-desc"},[t._v("有取值范围的输入框，min=0, max=20")]),t._v(" "),a("div",{staticClass:"row no-gutter"},[a("div",{staticClass:"col-md-4"},[a("by-input-number",{attrs:{min:0,max:20},model:{value:t.num4,callback:function(s){t.num4=s},expression:"num4"}})],1)])]),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-desc"')]),t._v(">")]),t._v("基本输入框，范围可以无递加或递减"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row no-gutter"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num1"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("br")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-desc"')]),t._v(">")]),t._v("有精度输入框，step=5，step=0.5"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row no-gutter"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"5"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num2"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-md-4 col-md-offset-1"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":step")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"0.5"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num3"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"demo-desc"')]),t._v(">")]),t._v("有取值范围的输入框，min=0, max=20"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("p")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row no-gutter"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":min")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"0"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v(":max")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"20"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num4"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("不可用状态")]),t._v(" "),t._m(1),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("div",{staticClass:"row no-gutter"},[a("div",{staticClass:"col-md-4"},[a("by-input-number",{attrs:{disabled:""},model:{value:t.num5,callback:function(s){t.num5=s},expression:"num5"}})],1)])]),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row no-gutter"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("disabled")]),t._v("  "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num5"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("不同尺寸")]),t._v(" "),t._m(2),t._v(" "),a("demo-box",[a("div",{attrs:{slot:"demo"},slot:"demo"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 col-md-4"},[a("by-input-number",{attrs:{size:"small"},model:{value:t.num6,callback:function(s){t.num6=s},expression:"num6"}})],1),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-4"},[a("by-input-number",{model:{value:t.num6,callback:function(s){t.num6=s},expression:"num6"}})],1),t._v(" "),a("div",{staticClass:"col-sm-12 col-md-4"},[a("by-input-number",{attrs:{size:"large"},model:{value:t.num6,callback:function(s){t.num6=s},expression:"num6"}})],1)])]),t._v(" "),a("div",{attrs:{slot:"source-code"},slot:"source-code"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"row"')]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-sm-12 col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"small"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num6"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-sm-12 col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num6"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("class")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"col-sm-12 col-md-4"')]),t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("size")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"large"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[t._v("v-model")]),t._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[t._v('"num6"')]),t._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("by-input-number")]),t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[t._v("div")]),t._v(">")]),t._v("\n")])])])]),a("h2",[t._v("InputNumber 参数")]),t._v(" "),t._m(3),t._v(" "),a("h2",[t._v("InputNumber 事件")]),t._v(" "),t._m(4)],1)}r._withStripped=!0;var v,_,e=a(1),n=a.n(e),l=a(0),p=(v=function(s,t){return(v=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(s,t){s.__proto__=t}||function(s,t){for(var a in t)t.hasOwnProperty(a)&&(s[a]=t[a])})(s,t)},function(s,t){function a(){this.constructor=s}v(s,t),s.prototype=null===t?Object.create(t):(a.prototype=t.prototype,new a)}),c=function(s,t,a,r){var v,_=arguments.length,e=_<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,a):r;if("object"===("undefined"==typeof Reflect?"undefined":n()(Reflect))&&"function"==typeof Reflect.decorate)e=Reflect.decorate(s,t,a,r);else for(var l=s.length-1;0<=l;l--)(v=s[l])&&(e=(_<3?v(e):3<_?v(t,a,e):v(t,a))||e);return 3<_&&e&&Object.defineProperty(t,a,e),e};function m(){var s=null!==_&&_.apply(this,arguments)||this;return s.num1=0,s.num2=0,s.num3=0,s.num4=10,s.num5=999.99,s.num6=100,s}var o=(_=l.e,p(m,_),m=c([l.a],m)),d=a(2),h=Object(d.a)(o,r,[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("支持传入 "),a("code",{pre:!0},[s._v("step")]),s._v(" 精度，以及指定取值范围 "),a("code",{pre:!0},[s._v("max")]),s._v(" , "),a("code",{pre:!0},[s._v("min")]),s._v("。默认 "),a("code",{pre:!0},[s._v("step")]),s._v(" 取整数 1")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("设置属性 "),a("code",{pre:!0},[s._v("disabled")]),s._v(" 禁用输入框")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("配置属性 "),a("code",{pre:!0},[s._v("size")]),s._v("，可控制输入框的尺寸，默认支持三种尺寸："),a("code",{pre:!0},[s._v("large")]),s._v("，"),a("code",{pre:!0},[s._v("normal")]),s._v("，"),a("code",{pre:!0},[s._v("small")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("输入框的值，可通过 "),a("code",{pre:!0},[s._v("v-model")]),s._v(" 绑定")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("size")]),s._v(" "),a("td",[s._v("输入框尺寸")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td",[a("code",{pre:!0},[s._v("small")]),s._v(" "),a("code",{pre:!0},[s._v("normal")]),s._v(" "),a("code",{pre:!0},[s._v("large")])]),s._v(" "),a("td",[s._v("normal")])]),s._v(" "),a("tr",[a("td",[s._v("step")]),s._v(" "),a("td",[s._v("每次递增或递减的数目")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("1")])]),s._v(" "),a("tr",[a("td",[s._v("min")]),s._v(" "),a("td",[s._v("最小值")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("-Infinity")])]),s._v(" "),a("tr",[a("td",[s._v("max")]),s._v(" "),a("td",[s._v("最大值")]),s._v(" "),a("td",[s._v("Number")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("Infinity")])]),s._v(" "),a("tr",[a("td",[s._v("disabled")]),s._v(" "),a("td",[s._v("是否禁用输入框")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("readonly")]),s._v(" "),a("td",[s._v("是否设置成只读")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("autofocus")]),s._v(" "),a("td",[s._v("是否自动聚焦到输入框")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("-")]),s._v(" "),a("td",[s._v("false")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名称")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("返回值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("focus")]),s._v(" "),a("td",[s._v("获得焦点时触发")]),s._v(" "),a("td",[s._v("event")])]),s._v(" "),a("tr",[a("td",[s._v("blur")]),s._v(" "),a("td",[s._v("失去焦点时触发")]),s._v(" "),a("td",[s._v("event")])]),s._v(" "),a("tr",[a("td",[s._v("change")]),s._v(" "),a("td",[s._v("绑定的值有变化时触发")]),s._v(" "),a("td",[s._v("输入框的值")])])])])}],!1,null,null,null);h.options.__file="docs/markdown/inputnumber.md";t.default=h.exports}}]);
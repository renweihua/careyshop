(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c4d36d6"],{"2e4f":function(e,t,o){},3093:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"form",staticStyle:{"margin-bottom":"-18px"},attrs:{inline:!0,model:e.form,size:"mini"}},[o("el-form-item",{attrs:{label:"分类",prop:"goods_category_id"}},[o("el-cascader",{staticStyle:{width:"220px"},attrs:{placeholder:"试试搜索：分类",options:e.catData,props:e.cascaderProps,"show-all-levels":!1,filterable:"",clearable:""},model:{value:e.form.goods_category_id,callback:function(t){e.$set(e.form,"goods_category_id",t)},expression:"form.goods_category_id"}})],1),o("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[o("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"商品关键词（可空格间隔）",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.keywords,callback:function(t){e.$set(e.form,"keywords",t)},expression:"form.keywords"}})],1),o("el-form-item",{attrs:{label:"编码",prop:"goods_code"}},[o("el-input",{attrs:{"prefix-icon":"el-icon-search",placeholder:"货号、条码、SKU、SPU",clearable:!0},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.goods_code,callback:function(t){e.$set(e.form,"goods_code",t)},expression:"form.goods_code"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search",disabled:e.loading},on:{click:function(t){return e.handleFormSubmit(!0)}}},[e._v("查询")])],1),o("el-form-item",[o("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.handleFormReset}},[e._v("重置")])],1),o("el-form-item",[o("el-popover",{attrs:{width:"352",placement:"bottom",trigger:"click"}},[o("div",{staticClass:"more-filter"},[o("el-form-item",{attrs:{label:"品牌",prop:"brand_id"}},[o("el-select",{staticStyle:{width:"282px"},attrs:{placeholder:"试试搜索：品牌",filterable:"",multiple:"",clearable:""},model:{value:e.form.brand_id,callback:function(t){e.$set(e.form,"brand_id",t)},expression:"form.brand_id"}},e._l(e.brandData,(function(t,r){return o("el-option",{key:r,attrs:{label:t.name,value:t.brand_id}},[o("span",{staticClass:"brand-name"},[e._v(e._s(t.name))]),o("span",{staticClass:"brand-category"},[e._v(e._s(t.category_name))])])})),1)],1),o("el-form-item",{attrs:{label:"库存",prop:"store_qty"}},[o("el-input-number",{attrs:{"controls-position":"right"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.store_qty[0],callback:function(t){e.$set(e.form.store_qty,0,t)},expression:"form.store_qty[0]"}}),o("span",[e._v(" 至 ")]),o("el-input-number",{attrs:{"controls-position":"right"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleFormSubmit(!0)}},model:{value:e.form.store_qty[1],callback:function(t){e.$set(e.form.store_qty,1,t)},expression:"form.store_qty[1]"}})],1),o("el-form-item",{attrs:{label:"是否包邮",prop:"is_postage"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.is_postage,callback:function(t){e.$set(e.form,"is_postage",t)},expression:"form.is_postage"}},[o("el-option",{attrs:{label:"是",value:"1"}}),o("el-option",{attrs:{label:"否",value:"0"}})],1)],1),o("el-form-item",{attrs:{label:"积分抵扣",prop:"is_integral"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.is_integral,callback:function(t){e.$set(e.form,"is_integral",t)},expression:"form.is_integral"}},[o("el-option",{attrs:{label:"可抵扣",value:"1"}}),o("el-option",{attrs:{label:"不抵扣",value:"0"}})],1)],1),o("el-form-item",{attrs:{label:"是否推荐",prop:"is_recommend"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.is_recommend,callback:function(t){e.$set(e.form,"is_recommend",t)},expression:"form.is_recommend"}},[o("el-option",{attrs:{label:"是",value:"1"}}),o("el-option",{attrs:{label:"否",value:"0"}})],1)],1),o("el-form-item",{attrs:{label:"是否新品",prop:"is_new"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.is_new,callback:function(t){e.$set(e.form,"is_new",t)},expression:"form.is_new"}},[o("el-option",{attrs:{label:"是",value:"1"}}),o("el-option",{attrs:{label:"否",value:"0"}})],1)],1),o("el-form-item",{attrs:{label:"是否热卖",prop:"is_hot"}},[o("el-select",{attrs:{placeholder:"请选择",clearable:""},model:{value:e.form.is_hot,callback:function(t){e.$set(e.form,"is_hot",t)},expression:"form.is_hot"}},[o("el-option",{attrs:{label:"是",value:"1"}}),o("el-option",{attrs:{label:"否",value:"0"}})],1)],1)],1),o("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[o("span",[e._v("更多筛选")]),o("i",{staticClass:"el-icon-arrow-down cs-pl-5"})])],1)],1)],1)},a=[],n=(o("d3b7"),o("3ca3"),o("ddb0"),o("5530")),l=o("ca00"),s=o("4239"),i=o("c54e"),d={props:{loading:{default:!1}},data:function(){return{brandData:[],catData:[],cascaderProps:{value:"goods_category_id",label:"name",children:"children",checkStrictly:!0,emitPath:!1},form:{goods_category_id:void 0,keywords:void 0,goods_code:void 0,brand_id:void 0,store_qty:[],is_postage:void 0,is_integral:void 0,is_recommend:void 0,is_new:void 0,is_hot:void 0}}},mounted:function(){var e=this;Promise.all([Object(s["d"])({order_field:"phonetic"}),Object(i["d"])(null)]).then((function(t){e.brandData=t[0].data,e.catData=l["a"].formatDataToTree(t[1].data,"goods_category_id")}))},methods:{handleFormSubmit:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(n["a"])({},this.form);t.store_qty[0]||t.store_qty[1]||(t.store_qty=void 0),this.$emit("submit",t,e)},handleFormReset:function(){this.$refs.form.resetFields()}}},c=d,m=(o("a79e"),o("2877")),u=Object(m["a"])(c,r,a,!1,null,"74ac8cd6",null);t["default"]=u.exports},4239:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"e",(function(){return n})),o.d(t,"b",(function(){return l})),o.d(t,"g",(function(){return s})),o.d(t,"c",(function(){return i})),o.d(t,"d",(function(){return d})),o.d(t,"f",(function(){return c}));var r=o("bc07");function a(e){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"add.brand.item"},data:e})}function n(e){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"set.brand.item"},data:e})}function l(e){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"del.brand.list"},data:{brand_id:e}})}function s(e,t){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"set.brand.status"},data:{brand_id:e,status:t}})}function i(e){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"get.brand.list"},data:e})}function d(e){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"get.brand.select"},data:e})}function c(e,t){return Object(r["a"])({url:"/v1/brand",method:"post",params:{method:"set.brand.sort"},data:{brand_id:e,sort:t}})}},a79e:function(e,t,o){"use strict";var r=o("2e4f"),a=o.n(r);a.a},c54e:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"f",(function(){return n})),o.d(t,"b",(function(){return l})),o.d(t,"c",(function(){return s})),o.d(t,"d",(function(){return i})),o.d(t,"g",(function(){return d})),o.d(t,"e",(function(){return c}));var r=o("bc07");function a(e){return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"add.goods.category.item"},data:e})}function n(e){return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.item"},data:e})}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"del.goods.category.list"},data:{goods_category_id:e,not_empty:t}})}function s(e){return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"get.goods.category.item"},data:{goods_category_id:e}})}function i(e){return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"get.goods.category.list"},data:e})}function d(e,t){return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.status"},data:{goods_category_id:e,status:t}})}function c(e){return Object(r["a"])({url:"/v1/goods_category",method:"post",params:{method:"set.goods.category.index"},data:{goods_category_id:e}})}}}]);
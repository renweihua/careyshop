(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bb47306"],{"06e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"d",(function(){return s})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return c}));var i=r("bc07");function a(e){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"add.delivery.item"},data:e})}function o(e){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"set.delivery.item"},data:e})}function n(e){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"del.delivery.list"},data:{delivery_id:e}})}function l(e){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"get.delivery.list"},data:e})}function s(){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"get.delivery.select"}})}function d(e,t){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"set.delivery.status"},data:{delivery_id:e,status:t}})}function c(e,t){return Object(i["a"])({url:"/v1/delivery",method:"post",params:{method:"set.delivery.sort"},data:{delivery_id:e,sort:t}})}},1484:function(e,t,r){"use strict";r("7db0"),r("4160"),r("caad"),r("c975"),r("a434"),r("b0c0"),r("d3b7"),r("159b");var i=r("5530"),a=r("dea0"),o=r("ca00"),n=r("06e3"),l=r("2edc");t["a"]={components:{csRegionSelect:function(){return r.e("chunk-d77acf44").then(r.bind(null,"90f8"))},csDeliveryDist:function(){return r.e("chunk-561e7c04").then(r.bind(null,"3b44"))},csGoodsDrawer:function(){return r.e("chunk-7adc1a64").then(r.bind(null,"fd20"))}},data:function(){return{currentTableData:[],multipleSelection:[],auth:{print:!1,start_picking:!1,cancel_picking:!1,delivery:!1,complete:!1,price:!1,set:!1,dist:!1,cancel:!1,del:!1,restore:!1,remark:!1},rules:{order:{consignee:[{required:!0,message:"收货人姓名不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}],mobile:[{required:!0,message:"收货人手机号码不能为空",trigger:"blur"},{min:7,max:15,message:"长度在 7 到 15 个字符",trigger:"blur"}],tel:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],zipcode:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}],region_list:[{required:!0,message:"收货区域不能为空",trigger:"change"}],address:[{required:!0,message:"收货详细地址不能为空",trigger:"blur"},{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],invoice_title:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],tax_number:[{max:20,message:"长度不能大于 20 个字符",trigger:"blur"}]},delivery:{delivery_id:[{required:!0,message:"至少选择一项",trigger:"change"}],delivery_item_id:[{required:!0,message:"至少选择一项",trigger:"change"}],logistic_code:[{required:!0,message:"快递单号不能为空",trigger:"blur"},{max:50,message:"长度不能大于 50 个字符",trigger:"blur"}]}},delivery:{},deliveryMap:{0:"#303133",1:"#67C23A",2:"#67C23A",3:"#F56C6C"},sourceMap:{},serviceMap:{1:"售后中",2:"已售后"},statusMap:{0:"待发货",1:"已发货",2:"已收货",3:"已取消"},formRemark:{index:void 0,loading:!1,visible:!1,request:{}},formAmount:{index:void 0,loading:!1,visible:!1,actual:0,request:{}},formOrder:{index:void 0,loading:!1,visible:!1,request:{}},formDelivery:{index:void 0,loading:!1,visible:!1,delivery:1,selection:[],goods:{},request:{}}}},filters:{getPreviewUrl:function(e){return e?o["a"].getImageCodeUrl(e,"goods_image_x80"):""},getNumber:function(e){return o["a"].getNumber(e)},getDelivery:function(e){return e?e.alias:""}},mounted:function(){this.handleOpenDelivery(),this._validationAuth()},methods:{_validationAuth:function(){this.auth.print=this.$permission("/order/admin/print"),this.auth.start_picking=this.$permission("/order/admin/list/start_picking"),this.auth.cancel_picking=this.$permission("/order/admin/list/cancel_picking"),this.auth.delivery=this.$permission("/order/admin/list/delivery"),this.auth.complete=this.$permission("/order/admin/list/complete"),this.auth.price=this.$permission("/order/admin/list/price"),this.auth.set=this.$permission("/order/admin/list/set"),this.auth.dist=this.$permission("/order/admin/list/dist"),this.auth.cancel=this.$permission("/order/admin/list/cancel"),this.auth.del=this.$permission("/order/admin/list/del"),this.auth.restore=this.$permission("/order/admin/list/restore"),this.auth.remark=this.$permission("/order/admin/list/remark")},_getOrderNoList:function(e){null===e&&(e=this.multipleSelection);var t=[];return Array.isArray(e)?e.forEach((function(e){t.push(e.order_no)})):t.push(this.currentTableData[e].order_no),t},_getPaymentType:function(e){return Object.prototype.hasOwnProperty.call(this.toPayment,e)?this.toPayment[e].name:""},_whetherToConfirm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning",r={confirmButtonText:"确定",cancelButtonText:"取消",closeOnClickModal:!1,type:t},i=e||"确定要执行该操作吗?";return this.$confirm(i,"提示",r)},handleViewGoods:function(e){var t=this;this.$nextTick((function(){t.$refs.goodsDrawer.show(e)}))},handleView:function(e){this.$router.push({name:"goods-admin-view",params:{goods_id:e}})},setSellersRemark:function(e){var t=this.currentTableData[e];this.formRemark={index:e,loading:!1,visible:!0,request:{order_no:t.order_no,sellers_remark:t.sellers_remark}}},handleSellersRemark:function(){var e=this;this.formRemark.loading=!0;var t=this.formRemark.index;Object(a["j"])(this.formRemark.request).then((function(r){e.currentTableData[t].sellers_remark=r.data.sellers_remark,e.formRemark.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formRemark.loading=!1}))},handleDeliveryDist:function(e){this.$refs.deliveryDist&&this.$refs.deliveryDist.show(e)},setOrderAmount:function(e){var t=this.currentTableData[e];this.formAmount={index:e,loading:!1,visible:!0,actual:t.total_amount,request:{order_no:t.order_no,total_amount:0}}},handleOrderAmount:function(){var e=this;this.formAmount.loading=!0;var t=this.formAmount.index;Object(a["b"])(this.formAmount.request).then((function(){"order-admin-info"!==e.$options.name?e.currentTableData[t].total_amount+=e.formAmount.request.total_amount:e.getOrderData(),e.formAmount.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formAmount.loading=!1}))},setOrderItem:function(e){var t=this;this.formOrder={index:e,loading:!1,visible:!1,request:Object(i["a"])({},this.currentTableData[e])},this.$nextTick((function(){t.$refs.formOrder&&t.$refs.formOrder.clearValidate(),t.formOrder.visible=!0}))},handleSetOrder:function(){var e=this;this.$refs.formOrder.validate((function(t){t&&(e.formOrder.loading=!0,Object(a["k"])(e.formOrder.request).then((function(t){"order-admin-info"!==e.$options.name?e.$set(e.currentTableData,e.formOrder.index,Object(i["a"])(Object(i["a"])({},e.currentTableData[e.formOrder.index]),t.data)):e.getOrderData(),e.formOrder.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formOrder.loading=!1})))}))},handlePicking:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=this._getOrderNoList(r);0!==i.length?this._whetherToConfirm().then((function(){Object(a["h"])(i,e).then((function(e){if("order-admin-info"!==t.$options.name){var r=!0;"0"===t.tabPane?t.currentTableData.forEach((function(r){-1!==i.indexOf(r.order_no)&&t.$set(r,"trade_status",e.data.trade_status)})):(o["a"].deleteDataList(t.currentTableData,i,"order_no"),t.currentTableData.length<=0&&(r=!1,t.$emit("refresh",!0))),r&&t.$emit("total")}else t.getOrderData();t.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleOpenDelivery:function(){var e=this;this.delivery.select||Object(n["d"])().then((function(t){e.delivery.select=t.data||[]})),this.delivery.company||Object(l["g"])(0).then((function(t){e.delivery.company=t.data||[]}))},handleDelivery:function(e){var t=this,r=this.currentTableData[e];this.formDelivery={index:e,loading:!1,visible:!1,delivery:1,selection:[],goods:r.get_order_goods,request:{order_no:r.order_no,order_goods_id:[],delivery_id:r.delivery_id,delivery_item_id:void 0,logistic_code:void 0}},this.delivery.select&&(this.delivery.select.find((function(e){return e.delivery_id===r.delivery_id}))||(this.formDelivery.request.delivery_id=void 0)),this.$nextTick((function(){t.$refs.formDelivery&&t.$refs.formDelivery.clearValidate(),t.$refs.dliveryMultiple&&t.$refs.dliveryMultiple.clearSelection(),t.formDelivery.visible=!0}))},deliveryOrderItem:function(){var e=this;this.$refs.formDelivery.validate((function(t){if(t){if(e.formDelivery.selection.length<=0)return e.formDelivery.loading=!1,void e.$message.error("请至少选择一个商品");var r=[],o=e.formDelivery.request;switch(e.formDelivery.selection.forEach((function(e){r.push(e.order_goods_id)})),e.formDelivery.delivery){case 0:delete o.delivery_id,delete o.delivery_item_id,delete o.logistic_code;break;case 1:delete o.delivery_item_id;break;case 2:delete o.delivery_id;break}e.formDelivery.loading=!0,e.formDelivery.request.order_goods_id=r,Object(a["d"])(Object(i["a"])({},o)).then((function(t){if("order-admin-info"!==e.$options.name){var a=!0,o=e.formDelivery.index;"0"===e.tabPane||1!==t.data.delivery_status?(e.formDelivery.goods.forEach((function(e){r.includes(e.order_goods_id)&&(e.is_service=0,e.status=1)})),e.$set(e.currentTableData,o,Object(i["a"])(Object(i["a"])({},e.currentTableData[o]),t.data))):(e.currentTableData.splice(o,1),e.currentTableData.length<=0&&(a=!1,e.$emit("refresh",!0))),a&&e.$emit("total")}else e.getOrderData();e.formDelivery.visible=!1,e.$message.success("操作成功")})).catch((function(){e.formDelivery.loading=!1}))}}))},handleComplete:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=this._getOrderNoList(t);0!==r.length?this._whetherToConfirm().then((function(){Object(a["c"])(r).then((function(t){if("order-admin-info"!==e.$options.name){var i=!0;"0"===e.tabPane?e.currentTableData.forEach((function(e){-1!==r.indexOf(e.order_no)&&(e.trade_status=t.data.trade_status,e.finished_time=t.data.finished_time,e.get_order_goods.forEach((function(e){1===e.is_service&&(e.is_service=0)})))})):(o["a"].deleteDataList(e.currentTableData,r,"order_no"),e.currentTableData.length<=0&&(i=!1,e.$emit("refresh",!0))),i&&e.$emit("total")}else e.getOrderData();e.$message.success("操作成功")}))})).catch((function(){})):this.$message.error("请选择要操作的数据")},handleOrderCancel:function(e){var t=this;this._whetherToConfirm().then((function(){var r=t.currentTableData[e];Object(a["a"])(r.order_no).then((function(a){if("order-admin-info"!==t.$options.name){var o=!0;"0"===t.tabPane?t.$set(t.currentTableData,e,Object(i["a"])(Object(i["a"])({},r),a.data)):(t.currentTableData.splice(e,1),t.currentTableData.length<=0&&(o=!1,t.$emit("refresh",!0))),o&&t.$emit("total")}else t.getOrderData();t.$message.success("操作成功")}))})).catch((function(){}))},handleOrderRecycle:function(e,t){var r=this;this._whetherToConfirm().then((function(){Object(a["i"])(r.currentTableData[e].order_no,t).then((function(){"order-admin-info"!==r.$options.name?(r.currentTableData.splice(e,1),r.currentTableData.length<=0&&r.$emit("refresh",!0)):r.getOrderData(),r.$message.success("操作成功")}))})).catch((function(){}))}}}},"1c22":function(e,t,r){"use strict";var i=r("e610"),a=r.n(i);a.a},"2edc":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"h",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"g",(function(){return d})),r.d(t,"f",(function(){return c})),r.d(t,"b",(function(){return u}));var i=r("bc07");function a(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"add.delivery.company.item"},data:e})}function o(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"set.delivery.company.item"},data:e})}function n(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"del.delivery.company.list"},data:{delivery_item_id:e}})}function l(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.item"},data:{delivery_item_id:e}})}function s(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.list"},data:e})}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.select"},data:{type:e}})}function c(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"get.delivery.company.recognise"},data:{code:e}})}function u(e){return Object(i["a"])({url:"/v1/delivery_item",method:"post",params:{method:"copy.delivery.company.hot"},data:{delivery_item_id:e}})}},3766:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n})),r.d(t,"d",(function(){return l})),r.d(t,"c",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"e",(function(){return c})),r.d(t,"g",(function(){return u})),r.d(t,"h",(function(){return m}));var i=r("bc07");function a(e,t){return Object(i["a"])({url:"/v1/setting",method:"post",params:{method:t},data:{data:e}})}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])({url:"/v1/setting",method:"post",params:{method:"get.setting.list"},data:{module:e,code:t}})}function n(e){return a(e,"set.delivery.dist.list")}function l(e){return a(e,"set.payment.list")}function s(e){return a(e,"set.delivery.list")}function d(e){return a(e,"set.shopping.list")}function c(e){return a(e,"set.service.list")}function u(e){return a(e,"set.system.list")}function m(e){return a(e,"set.upload.list")}},"3db9":function(e,t,r){"use strict";r.r(t);var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cs-p"},[r("el-form",{attrs:{inline:!0,size:"small"}},[r("el-form-item",[r("el-tooltip",{attrs:{placement:"top-start","open-delay":650}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("span",[e._v("为您提供三个月内的数据导出")]),r("br"),r("span",[e._v("当勾选订单时，只导出被选中的数据")])]),r("el-button",{attrs:{icon:"el-icon-download",disabled:e.loading,loading:e.exportLoading},on:{click:e.handleExport}},[e._v("导出数据")])],1)],1),e.auth.print?r("el-form-item",[r("el-dropdown",{attrs:{placement:"bottom","show-timeout":50}},[r("el-button",{attrs:{disabled:e.loading}},[r("i",{staticClass:"el-icon-printer"}),r("span",[e._v("打印")]),r("i",{staticClass:"el-icon-arrow-down cs-pl-5"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlePrint("order")}}},[e._v("打印订单")]),["2","3"].includes(e.tabPane)?r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlePrint("out")}}},[e._v("打印出库单")]):e._e(),["3","4"].includes(e.tabPane)?r("el-dropdown-item",{nativeOn:{click:function(t){return e.handlePrint("delivery")}}},[e._v("打印发货单")]):e._e()],1)],1)],1):e._e(),e.auth.start_picking&&"2"===e.tabPane?r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-document-checked",disabled:e.loading},on:{click:function(t){return e.handlePicking(1)}}},[e._v("设为配货")])],1):e._e(),e.auth.cancel_picking&&"3"===e.tabPane?r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-document-delete",disabled:e.loading},on:{click:function(t){return e.handlePicking(0)}}},[e._v("取消配货")])],1):e._e(),e.auth.complete&&"4"===e.tabPane?r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-shopping-bag-2",disabled:e.loading},on:{click:function(t){return e.handleComplete()}}},[e._v("确认收货")])],1):e._e(),r("cs-help",{staticStyle:{"padding-bottom":"19px"},attrs:{router:e.$route.path}})],1),r("el-tabs",{staticClass:"tab-box",on:{"tab-click":function(t){e.$emit("tabs",t.name)}},model:{value:e.tabPane,callback:function(t){e.tabPane=t},expression:"tabPane"}},e._l(e.tabList,(function(t,i){return r("el-tab-pane",{key:i,attrs:{label:e.getTabPaneName(i,t),name:i}},[i===e.tabPane?r("el-table",{attrs:{data:e.currentTableData},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{align:"center",type:"selection",width:"55"}}),r("el-table-column",{attrs:{label:"订单","min-width":"380"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"order-summary cs-mb-5"},[r("cs-icon",{staticClass:"cs-mr-10",attrs:{name:e.sourceMap[t.row.source]}}),r("span",{staticClass:"cs-mr"},[e._v("订单号："+e._s(t.row.order_no))]),r("span",[e._v("创建日期："+e._s(t.row.create_time))])],1),e._l(t.row.get_order_goods,(function(t,i){return r("div",{key:i,class:{"order-goods-list":!0,"cs-mt-10":i>0}},[r("el-image",{staticClass:"goods-image cs-cp",attrs:{src:e._f("getPreviewUrl")(t.goods_image),fit:"contain",lazy:""},on:{click:function(r){return e.handleView(t.goods_id)}}}),r("div",{staticClass:"goods-info order-text"},[r("p",[r("span",{staticClass:"link",on:{click:function(r){return e.handleView(t.goods_id)}}},[e._v(e._s(t.goods_name))]),r("span",{staticClass:"cs-pl-5",class:1===t.is_service?"service":"complete"},[e._v(e._s(e.serviceMap[t.is_service]))])]),t.key_value?r("p",{staticClass:"son"},[e._v(e._s(t.key_value))]):e._e(),r("p",{staticClass:"son"},[e._v("本店价："+e._s(e._f("getNumber")(t.shop_price))+" x "+e._s(t.qty))])])],1)}))]}}],null,!0)}),r("el-table-column",{attrs:{label:"订单金额","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"order-text"},[r("p",{staticClass:"shop-price"},[e._v(e._s(e._f("getNumber")(t.row.pay_amount)))]),r("p",{staticClass:"son"},[e._v("应付款："+e._s(e._f("getNumber")(t.row.total_amount)))]),r("p",{staticClass:"son"},[e._v("含运费："+e._s(e._f("getNumber")(t.row.delivery_fee)))]),r("p",{staticClass:"son"},[r("span",{class:{"shop-price":"1"===t.row.payment_code}},[e._v(" "+e._s(e._getPaymentType(t.row.payment_code))+" ")])]),e.auth.price&&0===t.row.trade_status&&0===t.row.payment_status?r("el-link",{staticClass:"order-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.setOrderAmount(t.$index)}}},[e._v("修改金额")]):e._e()],1)]}}],null,!0)}),r("el-table-column",{attrs:{label:"买家"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"order-text"},[r("p",{staticStyle:{width:"130px"}},[r("span",{staticClass:"son"},[e._v(e._s(t.row.get_user.username))]),t.row.get_user.level_icon?r("el-image",{staticClass:"level-icon",attrs:{src:t.row.get_user.level_icon,fit:"fill"}},[r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"},[r("i",{staticClass:"el-icon-picture-outline"})])]):e._e()],1),r("p",[r("span",{staticClass:"son"},[e._v(e._s(e._f("getDelivery")(t.row.get_delivery)))])]),r("p",[r("el-tooltip",{attrs:{placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v(" 姓名："+e._s(t.row.consignee)),r("br"),e._v(" 手机："+e._s(t.row.mobile)),r("br"),t.row.tel?[e._v("电话："+e._s(t.row.tel)),r("br")]:e._e(),e._v(" 地址："+e._s(t.row.complete_address)+" "),t.row.zipcode?[r("br"),e._v("邮编："+e._s(t.row.zipcode))]:e._e()],2),r("i",{staticClass:"el-icon-house"})]),t.row.buyer_remark?r("el-tooltip",{attrs:{content:t.row.buyer_remark,placement:"top"}},[r("i",{staticClass:"el-icon-chat-dot-round cs-ml-10"})]):e._e(),t.row.invoice_type>0?r("el-tooltip",{attrs:{placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[e._v(" 发票抬头："+e._s(t.row.invoice_title)+" "),2===t.row.invoice_type?[r("br"),e._v("纳税人号："+e._s(t.row.tax_number))]:e._e()],2),r("i",{staticClass:"el-icon-tickets cs-ml-10"})]):e._e()],1)])]}}],null,!0)}),r("el-table-column",{attrs:{label:"交易状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"order-text"},[e._l(e.getOrderStatus(t.row),(function(t,i){return r("p",{key:i,staticClass:"order-button"},[e._v(e._s(t))])})),r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"info",underline:!1},on:{click:function(r){return e.handleInfo(t.row.order_no)}}},[e._v("详情")])],1)],2)]}}],null,!0)}),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"order-text"},[e.auth.set&&0===t.row.delivery_status&&t.row.trade_status<=1?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"success",underline:!1},on:{click:function(r){return e.setOrderItem(t.$index)}}},[e._v("修改订单")])],1):e._e(),e.auth.start_picking&&1===t.row.payment_status&&0===t.row.trade_status?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handlePicking(1,t.$index)}}},[e._v("设为配货")])],1):e._e(),e.auth.cancel_picking&&1===t.row.payment_status&&1===t.row.trade_status?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handlePicking(0,t.$index)}}},[e._v("取消配货")])],1):e._e(),e.auth.delivery&&1===t.row.payment_status&&1!==t.row.delivery_status&&[1,2].includes(t.row.trade_status)?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handleDelivery(t.$index)}}},[e._v("确定发货")])],1):e._e(),e.auth.complete&&1===t.row.delivery_status&&2===t.row.trade_status?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handleComplete(t.$index)}}},[e._v("确认收货")])],1):e._e(),e.auth.dist&&0!==t.row.delivery_status?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"primary",underline:!1},on:{click:function(r){return e.handleDeliveryDist(t.row.order_no)}}},[e._v("物流信息")])],1):e._e(),e.auth.cancel&&t.row.trade_status<=1?r("p",[r("el-link",{staticClass:"order-button",attrs:{type:"danger",underline:!1},on:{click:function(r){return e.handleOrderCancel(t.$index)}}},[e._v("取消订单")])],1):e._e(),e.auth.del&&4===t.row.trade_status&&t.row.is_delete<=0?r("p",[r("el-link",{staticClass:"order-button",attrs:{underline:!1},on:{click:function(r){return e.handleOrderRecycle(t.$index,1)}}},[e._v("删除订单")])],1):e._e(),e.auth.restore&&t.row.is_delete>0?r("p",[r("el-link",{staticClass:"order-button",attrs:{underline:!1},on:{click:function(r){return e.handleOrderRecycle(t.$index,0)}}},[e._v("恢复订单")])],1):e._e(),e.auth.remark?r("p",[r("el-tooltip",{attrs:{disabled:t.row.sellers_remark.length<=0,content:t.row.sellers_remark,placement:"left"}},[r("el-link",{staticClass:"order-button",attrs:{type:t.row.sellers_remark?"warning":"info",underline:!1},on:{click:function(r){return e.setSellersRemark(t.$index)}}},[e._v("备注")])],1)],1):e._e()])]}}],null,!0)})],1):e._e()],1)})),1),r("el-dialog",{attrs:{title:"卖家备注",visible:e.formRemark.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formRemark,"visible",t)}}},[r("el-input",{attrs:{type:"textarea",rows:6,placeholder:"编辑卖家备注，仅卖家自己可见",maxlength:"200","show-word-limit":""},model:{value:e.formRemark.request.sellers_remark,callback:function(t){e.$set(e.formRemark.request,"sellers_remark",t)},expression:"formRemark.request.sellers_remark"}}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formRemark.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formRemark.loading,size:"small"},on:{click:e.handleSellersRemark}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"修改金额",visible:e.formAmount.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formAmount,"visible",t)}}},[r("el-form",{attrs:{"label-width":"80px","label-position":"left"}},[r("el-form-item",{attrs:{label:"增加/减少"}},[r("el-input-number",{attrs:{placeholder:"可输入调整金额",precision:2},model:{value:e.formAmount.request.total_amount,callback:function(t){e.$set(e.formAmount.request,"total_amount",t)},expression:"formAmount.request.total_amount"}}),r("span",{staticClass:"order-summary cs-pl-10"},[e._v("正数增加，负数减少")]),r("div",[r("span",[e._v("应付款：")]),r("span",{staticClass:"cs-pr-10"},[e._v(e._s(e.formAmount.actual))]),r("span",[e._v("调整后：")]),r("strong",[e._v(e._s(e._f("getNumber")(e.formAmount.actual+e.formAmount.request.total_amount)))])])],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formAmount.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formAmount.loading,size:"small"},on:{click:e.handleOrderAmount}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"修改订单",visible:e.formOrder.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"600px"},on:{"update:visible":function(t){return e.$set(e.formOrder,"visible",t)}}},[r("el-form",{ref:"formOrder",attrs:{model:e.formOrder.request,rules:e.rules.order,"label-width":"120px"}},[r("el-form-item",{attrs:{label:"收货人姓名",prop:"consignee"}},[r("el-input",{attrs:{placeholder:"请输入收货人姓名",clearable:!0},model:{value:e.formOrder.request.consignee,callback:function(t){e.$set(e.formOrder.request,"consignee",t)},expression:"formOrder.request.consignee"}})],1),r("el-form-item",{attrs:{label:"收货人手机号",prop:"mobile"}},[r("el-input",{attrs:{placeholder:"请输入收货人手机号码",clearable:!0},model:{value:e.formOrder.request.mobile,callback:function(t){e.$set(e.formOrder.request,"mobile",t)},expression:"formOrder.request.mobile"}})],1),r("el-form-item",{attrs:{label:"收货人电话",prop:"tel"}},[r("el-input",{attrs:{placeholder:"可输入收货人电话",clearable:!0},model:{value:e.formOrder.request.tel,callback:function(t){e.$set(e.formOrder.request,"tel",t)},expression:"formOrder.request.tel"}})],1),r("el-form-item",{attrs:{label:"收货区域",prop:"region_list"}},[r("cs-region-select",{model:{value:e.formOrder.request.region_list,callback:function(t){e.$set(e.formOrder.request,"region_list",t)},expression:"formOrder.request.region_list"}})],1),r("el-form-item",{attrs:{label:"详细地址",prop:"address"}},[r("el-input",{attrs:{placeholder:"请输入收货详细地址",clearable:!0},model:{value:e.formOrder.request.address,callback:function(t){e.$set(e.formOrder.request,"address",t)},expression:"formOrder.request.address"}})],1),r("el-form-item",{attrs:{label:"收货人邮编",prop:"zipcode"}},[r("el-input",{attrs:{placeholder:"请输入收货人邮编",clearable:!0},model:{value:e.formOrder.request.zipcode,callback:function(t){e.$set(e.formOrder.request,"zipcode",t)},expression:"formOrder.request.zipcode"}})],1),e.formOrder.request.invoice_type>0?[r("el-divider"),r("el-form-item",{attrs:{label:"发票抬头",prop:"invoice_title"}},[r("el-input",{attrs:{placeholder:"可输入发票抬头",clearable:!0},model:{value:e.formOrder.request.invoice_title,callback:function(t){e.$set(e.formOrder.request,"invoice_title",t)},expression:"formOrder.request.invoice_title"}})],1),2===e.formOrder.request.invoice_type?r("el-form-item",{attrs:{label:"纳税人识别号",prop:"tax_number"}},[r("el-input",{attrs:{placeholder:"可输入纳税人识别号",clearable:!0},model:{value:e.formOrder.request.tax_number,callback:function(t){e.$set(e.formOrder.request,"tax_number",t)},expression:"formOrder.request.tax_number"}})],1):e._e()]:e._e()],2),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formOrder.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formOrder.loading,size:"small"},on:{click:e.handleSetOrder}},[e._v("确定")])],1)],1),r("el-dialog",{attrs:{title:"确定发货",visible:e.formDelivery.visible,"append-to-body":!0,"close-on-click-modal":!1,width:"760px"},on:{"update:visible":function(t){return e.$set(e.formDelivery,"visible",t)}}},[r("el-table",{ref:"dliveryMultiple",staticStyle:{"margin-top":"-25px"},attrs:{data:e.formDelivery.goods},on:{"selection-change":function(t){e.formDelivery.selection=t}}},[r("el-table-column",{attrs:{align:"center",type:"selection",width:"50",selectable:function(e){return!e.status}}}),r("el-table-column",{attrs:{label:"商品",prop:"goods_name"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("div",{staticClass:"order-goods-list"},[r("el-image",{staticClass:"goods-image-small cs-cp",attrs:{src:e._f("getPreviewUrl")(t.row.goods_image),fit:"contain"},on:{click:function(r){return e.handleViewGoods(t.row.goods_id)}}}),r("div",{staticClass:"goods-info order-text",staticStyle:{padding:"0 30px 0 70px"}},[r("p",{staticClass:"goods-name link",on:{click:function(r){return e.handleViewGoods(t.row.goods_id)}}},[e._v(e._s(t.row.goods_name))]),t.row.key_value?r("p",{staticClass:"son"},[e._v(e._s(t.row.key_value))]):e._e()])],1)]}}])}),r("el-table-column",{attrs:{label:"数量",prop:"qty",width:"100"}}),r("el-table-column",{attrs:{label:"状态",prop:"status",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{style:{color:e.deliveryMap[t.row.status]}},[e._v(e._s(e.statusMap[t.row.status]))])]}}])})],1),r("div",{staticClass:"cs-mt"},[r("el-radio-group",{staticClass:"cs-pb",model:{value:e.formDelivery.delivery,callback:function(t){e.$set(e.formDelivery,"delivery",t)},expression:"formDelivery.delivery"}},[r("el-radio",{attrs:{label:0}},[e._v("无需配送")]),r("el-radio",{attrs:{label:1}},[e._v("配送方式")]),r("el-radio",{attrs:{label:2}},[e._v("快递公司")])],1),r("el-form",{ref:"formDelivery",attrs:{inline:!0,model:e.formDelivery.request,rules:e.rules.delivery,size:"small"}},[1===e.formDelivery.delivery?r("el-form-item",{attrs:{label:"配送方式",prop:"delivery_id"}},[r("el-select",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formDelivery.request.delivery_id,callback:function(t){e.$set(e.formDelivery.request,"delivery_id",t)},expression:"formDelivery.request.delivery_id"}},e._l(e.delivery.select,(function(t){return r("el-option",{key:t.delivery_id,attrs:{label:t.alias,value:t.delivery_id}},[r("span",{staticStyle:{float:"left"}},[e._v(e._s(t.alias))]),r("span",{staticStyle:{float:"right",color:"#8492A6","font-size":"13px"}},[e._v(e._s(t.name))])])})),1)],1):e._e(),2===e.formDelivery.delivery?r("el-form-item",{attrs:{label:"快递公司",prop:"delivery_item_id"}},[r("el-select",{staticStyle:{width:"280px"},attrs:{placeholder:"请选择",clearable:""},model:{value:e.formDelivery.request.delivery_item_id,callback:function(t){e.$set(e.formDelivery.request,"delivery_item_id",t)},expression:"formDelivery.request.delivery_item_id"}},e._l(e.delivery.company,(function(e){return r("el-option",{key:e.delivery_item_id,attrs:{label:e.name,value:e.delivery_item_id}})})),1)],1):e._e(),0!==e.formDelivery.delivery?r("el-form-item",{attrs:{label:"快递单号",prop:"logistic_code"}},[r("el-input",{attrs:{placeholder:"请输入快递单号",clearable:!0},model:{value:e.formDelivery.request.logistic_code,callback:function(t){e.$set(e.formDelivery.request,"logistic_code",t)},expression:"formDelivery.request.logistic_code"}})],1):e._e()],1)],1),r("cs-goods-drawer",{ref:"goodsDrawer"}),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{size:"small"},on:{click:function(t){e.formDelivery.visible=!1}}},[e._v("取消")]),r("el-button",{attrs:{type:"primary",loading:e.formDelivery.loading,size:"small"},on:{click:e.deliveryOrderItem}},[e._v("确定")])],1)],1),r("cs-delivery-dist",{ref:"deliveryDist"})],1)},a=[],o=(r("4160"),r("159b"),r("1484")),n=(r("d3b7"),r("b85c")),l=r("2909"),s=r("dea0"),d=r("d126"),c=r.n(d),u=r("ca00"),m={data:function(){return{exportLoading:!1}},methods:{handleExport:function(){var e=this,t=[];this.exportLoading=!0,this.multipleSelection.length>0?(t=Object(l["a"])(this.multipleSelection),this.dataProcessing(t)):Object(s["f"])({is_export:1}).then((function(r){t=r.data.items||[],e.dataProcessing(t)})).catch((function(){e.exportLoading=!1}))},dataProcessing:function(e){var t=this;if(!Array.isArray(e)||e.length<=0)return this.exportLoading=!1,void this.$message.warning("没有可导出的数据");var r,i={0:"未评价",1:"已评价",2:"追加评价"},a={0:"可申请售后",1:"售后中",2:"完成售后",3:"不可申请售后"},o={0:"未发货",1:"已发货",2:"已收货",3:"已取消"},l=Object(n["a"])(e);try{for(l.s();!(r=l.n()).done;){var s=r.value;s.username=s.get_user.username,s.nickname=s.get_user.nickname,s.delivery_id=s.get_delivery.alias,s.payment_code=this._getPaymentType(s.payment_code),s.goods="";var d,m=Object(n["a"])(s.get_order_goods);try{for(m.s();!(d=m.n()).done;){var p=d.value;s.goods+="名称：".concat(p.goods_name,";"),s.goods+="货号：".concat(p.goods_code,";"),s.goods+="SKU：".concat(p.goods_sku,";"),s.goods+="条码：".concat(p.bar_code,";"),s.goods+="规格：".concat(p.key_value,";"),s.goods+="市场价：".concat(p.market_price,";"),s.goods+="本店价：".concat(p.shop_price,";"),s.goods+="购买数量：".concat(p.qty,";"),s.goods+="评价状态：".concat(i[p.is_comment],";"),s.goods+="售后状态：".concat(a[p.is_service],";"),s.goods+="货品状态：".concat(o[p.status],";;")}}catch(h){m.e(h)}finally{m.f()}}}catch(h){l.e(h)}finally{l.f()}var f="订单导出"+(new Date).getTime(),v=[{label:"订单号",prop:"order_no"},{label:"买家账号",prop:"username"},{label:"买家昵称",prop:"nickname"},{label:"商品",prop:"goods"},{label:"订单金额",prop:"pay_amount"},{label:"商品金额",prop:"goods_amount"},{label:"应付金额(含运费)",prop:"total_amount"},{label:"余额抵扣",prop:"use_money"},{label:"会员等级抵扣",prop:"use_level"},{label:"积分抵扣",prop:"use_integral"},{label:"优惠劵抵扣",prop:"use_coupon"},{label:"商品折扣抵扣",prop:"use_discount"},{label:"订单促销抵扣",prop:"use_promotion"},{label:"购物卡抵扣",prop:"use_card"},{label:"运费",prop:"delivery_fee"},{label:"支付单号(交易流水号)",prop:"payment_no"},{label:"支付编码",prop:"payment_code"},{label:"购物卡号",prop:"card_number"},{label:"配送方式",prop:"delivery_id"},{label:"收货人姓名",prop:"consignee"},{label:"完整地址",prop:"complete_address"},{label:"邮编",prop:"zipcode"},{label:"手机号码",prop:"mobile"},{label:"电话",prop:"tel"},{label:"买家备注",prop:"buyer_remark"},{label:"发票抬头",prop:"invoice_title"},{label:"纳税人识别号",prop:"tax_number"},{label:"开票费用",prop:"invoice_amount"},{label:"交易状态",prop:"trade_status"},{label:"配送状态",prop:"delivery_status"},{label:"支付状态",prop:"payment_status"},{label:"卖家备注",prop:"sellers_remark"},{label:"调整价格",prop:"adjustment"},{label:"积分换算比例(%)",prop:"integral_pct"},{label:"赠送积分",prop:"give_integral"},{label:"支付时间",prop:"payment_time"},{label:"发货时间",prop:"delivery_time"},{label:"完成时间",prop:"finished_time"},{label:"创建时间",prop:"create_time"},{label:"更新时间",prop:"update_time"}],_={trade_status:{0:"待处理",1:"配货中",2:"已发货",3:"已完成",4:"已取消"},delivery_status:{0:"未发货",1:"已发货",2:"部分发"},payment_status:{0:"未支付",1:"已支付"}};c.a.excel({columns:v,data:u["a"].dataReplace(e,_),title:f}).finally((function(){t.exportLoading=!1}))}}},p=r("3766"),f={mixins:[o["a"],m],props:{loading:{default:!1},tableData:{default:function(){return[]}},toPayment:{default:function(){}},orderTotal:{default:function(){}}},data:function(){return{tabPane:"0",tabList:{0:"全部",1:"未付款",2:"已付款",3:"待发货",4:"已发货",5:"已完成",6:"已取消",8:"回收站"},totalMap:{1:"not_paid",2:"paid",3:"not_shipped",4:"shipped"}}},watch:{tableData:{handler:function(e){this.currentTableData=e,this.multipleSelection=[]},immediate:!0}},mounted:function(){this.getOrderSource()},methods:{getTabPaneName:function(e,t){return Object.prototype.hasOwnProperty.call(this.totalMap,e)&&Object.prototype.hasOwnProperty.call(this.orderTotal,this.totalMap[e])?this.orderTotal[this.totalMap[e]]<=0?t:t+"(".concat(this.orderTotal[this.totalMap[e]],")"):t},getOrderSource:function(){var e=this;Object(p["a"])("system_shopping",["source"]).then((function(t){t.data&&t.data.source.value.forEach((function(t,r){e.sourceMap[r]=t.icon}))}))},handleSelectionChange:function(e){this.multipleSelection=e},handleInfo:function(e){this.$router.push({name:"order-admin-info",params:{order_no:e}})},handlePrint:function(e){this.multipleSelection.length<=0?this.$message.error("请选择要操作的数据"):this.$router.push({name:"order-admin-print",params:{type:e,orderData:this.multipleSelection}})},getOrderStatus:function(e){var t=[];switch(e.trade_status){case 0:switch(e.payment_status){case 0:t.push("等待买家付款");break;case 1:t.push("买家已付款");break}break;case 1:t.push("配货中");break;case 2:switch(e.delivery_status){case 1:t.push("全部发货");break;case 2:t.push("部分发货");break}break;case 3:t.push("交易成功");break;case 4:t.push("交易关闭");break}return t}}},v=f,_=(r("1c22"),r("2877")),h=Object(_["a"])(v,i,a,!1,null,"2c02fda6",null);t["default"]=h.exports},e610:function(e,t,r){}}]);
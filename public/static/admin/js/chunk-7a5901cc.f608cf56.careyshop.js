(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a5901cc","chunk-0c05af06"],{"07ac":function(t,e,a){"use strict";var r=a("ad14"),n=a.n(r);n.a},"25c9":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"b",(function(){return c})),a.d(e,"c",(function(){return s})),a.d(e,"d",(function(){return i})),a.d(e,"f",(function(){return l}));var r=a("bc07");function n(t){return Object(r["a"])({url:"/v1/topic",method:"post",params:{method:"add.topic.item"},data:t})}function o(t){return Object(r["a"])({url:"/v1/topic",method:"post",params:{method:"set.topic.item"},data:t})}function c(t){return Object(r["a"])({url:"/v1/topic",method:"post",params:{method:"del.topic.list"},data:{topic_id:t}})}function s(t){return Object(r["a"])({url:"/v1/topic",method:"post",params:{method:"get.topic.item"},data:{topic_id:t}})}function i(t){return Object(r["a"])({url:"/v1/topic",method:"post",params:{method:"get.topic.list"},data:t})}function l(t,e){return Object(r["a"])({url:"/v1/topic",method:"post",params:{method:"set.topic.status"},data:{topic_id:t,status:e}})}},3113:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cs-p"},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"cs-tc clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v(t._s(t.stateMap[t.state]))])]),a("el-form",{ref:"form",attrs:{model:t.currentForm,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"请输入专题标题",clearable:!0},model:{value:t.currentForm.title,callback:function(e){t.$set(t.currentForm,"title",e)},expression:"currentForm.title"}})],1),a("el-form-item",{attrs:{label:"别名",prop:"alias"}},[a("el-input",{attrs:{placeholder:"可输入专题别名",clearable:!0},model:{value:t.currentForm.alias,callback:function(e){t.$set(t.currentForm,"alias",e)},expression:"currentForm.alias"}})],1),a("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[a("el-input",{attrs:{placeholder:"可输入专题关键词",clearable:!0},model:{value:t.currentForm.keywords,callback:function(e){t.$set(t.currentForm,"keywords",e)},expression:"currentForm.keywords"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{placeholder:"可输入专题描述",type:"textarea",rows:3},model:{value:t.currentForm.description,callback:function(e){t.$set(t.currentForm,"description",e)},expression:"currentForm.description"}})],1),a("el-form-item",{attrs:{label:"内容",prop:"content"}},[a("cs-tinymce",{ref:"tinymce",attrs:{code:"inside_content"},model:{value:t.currentForm.content,callback:function(e){t.$set(t.currentForm,"content",e)},expression:"currentForm.content"}})],1),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0"},model:{value:t.currentForm.status,callback:function(e){t.$set(t.currentForm,"status",e)},expression:"currentForm.status"}})],1),a("el-form-item",{attrs:{size:"small"}},[a("el-button",{attrs:{type:"primary",loading:t.dialogLoading},on:{click:t.handleConfirm}},[t._v(t._s(t.stateButton[t.state]))]),a("el-button",{on:{click:t.handleClose}},[t._v("取消")])],1)],1)],1)],1)},n=[],o=(a("d3b7"),a("5530")),c=a("5880"),s=a("25c9"),i={components:{csTinymce:function(){return Promise.all([a.e("chunk-1b793334"),a.e("chunk-56353b7a")]).then(a.bind(null,"4b93"))}},props:{state:{type:String,required:!0,default:"create"},formData:{type:Object,required:!1,default:function(){}}},data:function(){return{dialogLoading:!1,stateMap:{create:"新增专题",update:"编辑专题"},stateButton:{create:"确定",update:"修改"},currentForm:{title:"",alias:"",content:"",keywords:"",description:"",status:"1"},rules:{title:[{required:!0,message:"标题不能为空",trigger:"blur"},{max:200,message:"长度不能大于 200 个字符",trigger:"blur"}],alias:[{max:100,message:"长度不能大于 100 个字符",trigger:"blur"}],keywords:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],description:[{max:255,message:"长度不能大于 255 个字符",trigger:"blur"}],content:[{required:!0,message:"内容不能为空",trigger:"blur"}]}}},watch:{formData:{handler:function(t){var e=this;"update"===this.state&&(this.currentForm=t,this.$refs.tinymce&&(this.$refs.tinymce.destroyTinymce(),this.$refs.tinymce.initTinymce(),this.$refs.tinymce.setContent(t.content)),this.$nextTick((function(){e.$refs.form.clearValidate()})))}}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["mapActions"])("careyshop/page",["close"])),Object(c["mapActions"])("careyshop/update",["updateData"])),{},{handleClose:function(){this.close({tagName:this.$route.fullPath})},handleConfirm:function(){var t=this;this.$refs.form.validate((function(e){e&&(t.dialogLoading=!0,"create"===t.state?t.handleCreate():t.handleUpdate())}))},handleCreate:function(){var t=this;Object(s["a"])(Object(o["a"])({},this.currentForm)).then((function(e){t.updateData({type:"add",name:"system-topic-admin",data:Object(o["a"])({},e.data)}),t.$message.success("操作成功"),t.handleClose()})).finally((function(){t.dialogLoading=!1}))},handleUpdate:function(){var t=this;Object(s["e"])(Object(o["a"])({},this.currentForm)).then((function(e){t.updateData({type:"set",name:"system-topic-admin",srcId:e.data.topic_id,data:Object(o["a"])({},e.data)}),t.$message.success("操作成功"),t.handleClose()})).finally((function(){t.dialogLoading=!1}))}})},l=i,u=(a("07ac"),a("2877")),d=Object(u["a"])(l,r,n,!1,null,"3e753338",null);e["default"]=d.exports},ad14:function(t,e,a){}}]);
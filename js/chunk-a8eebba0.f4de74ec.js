(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a8eebba0"],{"0418":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Header",attrs:{id:"Header"}},[n("h1",[t._v("TodoList")]),n("div",{staticClass:"input-box"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],ref:"inputRef",staticClass:"todo-input",attrs:{type:"text",placeholder:"请输入事项，按回车添加"},domProps:{value:t.inputValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.inputHandler.apply(null,arguments)},input:function(e){e.target.composing||(t.inputValue=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("i",{staticClass:"iconfont icon-icon_nav_clost_line",on:{click:t.clearHandler}})])])},u=[],a=(n("2e8e"),{name:"Header",props:{todoList:{type:Array,default:function(){return[]}}},data:function(){return{inputValue:""}},created:function(){},computed:{},components:{},methods:{inputHandler:function(){var t=this;if(""!==this.inputValue){var e=this.todoList.some((function(e){return e.content===t.inputValue}));e?alert("输入的项目名称不能重复!"):(this.$emit("addTodo",this.inputValue),this.clearHandler())}else alert("输入的项目名称不能为空!")},clearHandler:function(){this.inputValue="",this.$refs["inputRef"].focus()}},mounted:function(){this.$refs["inputRef"].focus()},watch:{}}),o=a,r=(n("64ad"),n("838c")),s=Object(r["a"])(o,i,u,!1,null,"5cbc540c",null);e["default"]=s.exports},"64ad":function(t,e,n){"use strict";n("95ef")},"95ef":function(t,e,n){}}]);
//# sourceMappingURL=chunk-a8eebba0.f4de74ec.js.map
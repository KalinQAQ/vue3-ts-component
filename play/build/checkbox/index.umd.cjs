(function(a,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(a=typeof globalThis<"u"?globalThis:a||self,e(a.index={},a.vue))})(this,function(a,e){"use strict";function d(n,l,c,r){return l&&(n+=`-${l}`),c&&(n+=`__${c}`),r&&(n+=`--${r}`),n}function k(n){return{b:(t="")=>d(n,t,"",""),e:(t="")=>t?d(n,"",t,""):"",m:(t="")=>t?d(n,"","",t):"",be:(t="",o="")=>t&&o?d(n,t,o,""):"",bm:(t="",o="")=>t&&o?d(n,t,"",o):"",em:(t="",o="")=>t&&o?d(n,"",t,o):"",bem:(t="",o="",f="")=>t&&o&&f?d(n,t,o,f):"",is:(t,o)=>o?`is-${t}`:""}}function g(n){const l=`k-${n}`;return k(l)}const m={modelValue:{type:[Boolean,String,Number]},indeterminate:Boolean,disabled:Boolean,label:{type:String}},p={"update:modelValue":n=>typeof n=="boolean",change:n=>typeof n=="boolean"},y=["disabled","value"],C=e.defineComponent({name:"k-checkbox"}),B=e.defineComponent({...C,props:m,emits:p,setup(n,{emit:l}){const c=n,r=g("checkbox"),i=e.ref(),u=e.computed({get(){return c.modelValue},set(s){l("update:modelValue",s)}});function b(s){i.value.indeterminate=s}function h(s){const o=!!s.target.checked;l("change",o)}return e.watch(()=>c.indeterminate,b),e.onMounted(()=>{b(c.indeterminate)}),(s,t)=>(e.openBlock(),e.createElementBlock("label",{class:e.normalizeClass(e.unref(r).b())},[e.createElementVNode("span",{class:e.normalizeClass(e.unref(r).e("input"))},[e.withDirectives(e.createElementVNode("input",{ref_key:"inputRef",ref:i,"onUpdate:modelValue":t[0]||(t[0]=o=>u.value=o),type:"checkbox",disabled:s.disabled,value:s.label,onChange:h},null,40,y),[[e.vModelCheckbox,u.value]])],2),s.$slots.default||s.label?(e.openBlock(),e.createElementBlock("span",{key:0,class:e.normalizeClass(e.unref(r).e("label"))},[e.renderSlot(s.$slots,"default"),s.$slots.default?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(s.label),1)],64))],2)):e.createCommentVNode("",!0)],2))}});function V(n){return n.install=function(l){const{name:c}=n;l.component(c,n)},n}const E=V(B);a.checkboxEmits=p,a.checkboxProps=m,a.default=E,Object.defineProperties(a,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

(function(c,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(c=typeof globalThis<"u"?globalThis:c||self,e(c.index={},c.vue))})(this,function(c,e){"use strict";function r(n,o,i,u){return o&&(n+=`-${o}`),i&&(n+=`__${i}`),u&&(n+=`--${u}`),n}function _(n){return{b:(t="")=>r(n,t,"",""),e:(t="")=>t?r(n,"",t,""):"",m:(t="")=>t?r(n,"","",t):"",be:(t="",s="")=>t&&s?r(n,t,s,""):"",bm:(t="",s="")=>t&&s?r(n,t,"",s):"",em:(t="",s="")=>t&&s?r(n,"",t,s):"",bem:(t="",s="",a="")=>t&&s&&a?r(n,t,s,a):"",is:(t,s)=>s?`is-${t}`:""}}function b(n){const o=`k-${n}`;return _(o)}const l={color:String,size:[Number,String]},p=e.defineComponent({name:"k-icon"}),f=e.defineComponent({...p,props:l,setup(n){const o=n,i=b("icon"),u=e.computed(()=>!o.size&&!o.color?{}:{...o.size?{"font-size":o.size+"px"}:{},...o.color?{color:o.color}:{}});return(d,$)=>(e.openBlock(),e.createElementBlock("i",{class:e.normalizeClass(e.unref(i).b()),style:e.normalizeStyle(u.value)},[e.renderSlot(d.$slots,"default")],6))}});function z(n){return n.install=function(o){const{name:i}=n;o.component(i,n)},n}const y=z(f);c.default=y,c.iconProps=l,Object.defineProperties(c,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});

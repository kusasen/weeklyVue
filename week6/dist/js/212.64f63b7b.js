"use strict";(self["webpackChunkweek6"]=self["webpackChunkweek6"]||[]).push([[212],{422:function(a,t,n){function e(a){return{all:a=a||new Map,on:function(t,n){var e=a.get(t);e?e.push(n):a.set(t,[n])},off:function(t,n){var e=a.get(t);e&&(n?e.splice(e.indexOf(n)>>>0,1):a.set(t,[]))},emit:function(t,n){var e=a.get(t);e&&e.slice().map((function(a){a(n)})),(e=a.get("*"))&&e.slice().map((function(a){a(t,n)}))}}}n.d(t,{Z:function(){return s}});const r=e();var s=r},5212:function(a,t,n){n.r(t),n.d(t,{default:function(){return S}});var e=n(3396);const r={class:"about"},s=(0,e._)("div",{class:"banner"},null,-1);function o(a,t,n,o,l,c){const i=(0,e.up)("FrontNavbar"),u=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)("div",r,[(0,e.Wm)(i),s,(0,e.Wm)(u)])}var l=n(7139);const c={class:"navbar navbar-expand-lg navbar-light bg-light"},i={class:"container-fluid"},u=(0,e.Uk)("Caf'e vue"),v=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav me-auto mb-2 mb-lg-0"},g={class:"nav-item"},p=(0,e.Uk)("Product"),f=(0,e._)("li",{class:"nav-item"},null,-1),h={type:"button",class:"btn btn-success"},m=(0,e._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-cart-fill",viewBox:"0 0 16 16"},[(0,e._)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})],-1),w=(0,e.Uk)("Cart "),_={class:"badge rounded-pill bg-danger"};function k(a,t,n,r,s,o){const k=(0,e.up)("router-link");return(0,e.wg)(),(0,e.iD)("nav",c,[(0,e._)("div",i,[(0,e.Wm)(k,{class:"navbar-brand",to:"/"},{default:(0,e.w5)((()=>[u])),_:1}),v,(0,e._)("div",d,[(0,e._)("ul",b,[(0,e._)("li",g,[(0,e.Wm)(k,{class:"nav-link",to:"/products"},{default:(0,e.w5)((()=>[p])),_:1})]),f]),(0,e.Wm)(k,{class:"nav-link",to:"/cart"},{default:(0,e.w5)((()=>[(0,e._)("button",h,[m,w,(0,e._)("span",_,(0,l.zw)(s.cart.carts.length),1)])])),_:1})])])])}var C=n(422),x={data(){return{cart:{carts:[]}}},methods:{getCart(){const a="https://vue3-course-api.hexschool.io/v2//api/vue-boni/cart";this.$http(a).then((a=>{this.cart=a.data.data,console.log(a)})).catch((a=>{alert(a.data.message)}))}},mounted(){this.getCart(),C.Z.on("get-cart",(()=>{this.getCart()}))}},z=n(89);const W=(0,z.Z)(x,[["render",k]]);var H=W,Z={components:{FrontNavbar:H}};const M=(0,z.Z)(Z,[["render",o]]);var S=M}}]);
//# sourceMappingURL=212.64f63b7b.js.map
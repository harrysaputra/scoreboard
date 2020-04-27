var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function u(t,n,e){t.insertBefore(n,e||null)}function a(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function i(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function m(t,n,e,r){return t.addEventListener(n,e,r),()=>t.removeEventListener(n,e,r)}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.data!==n&&(t.data=n)}function h(t,n){(null!=n||t.value)&&(t.value=n)}let x;function y(t){x=t}function $(){const t=function(){if(!x)throw new Error("Function called outside component initialization");return x}();return(n,e)=>{const r=t.$$.callbacks[n];if(r){const o=function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(n,e);r.slice().forEach(n=>{n.call(t,o)})}}}const b=[],v=[],w=[],_=[],E=Promise.resolve();let C=!1;function k(t){w.push(t)}let L=!1;const S=new Set;function A(){if(!L){L=!0;do{for(let t=0;t<b.length;t+=1){const n=b[t];y(n),j(n.$$)}for(b.length=0;v.length;)v.pop()();for(let t=0;t<w.length;t+=1){const n=w[t];S.has(n)||(S.add(n),n())}w.length=0}while(b.length);for(;_.length;)_.pop()();C=!1,L=!1,S.clear()}}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const N=new Set;let P;function B(){P={r:0,c:[],p:P}}function H(){P.r||r(P.c),P=P.p}function M(t,n){t&&t.i&&(N.delete(t),t.i(n))}function z(t,n,e,r){if(t&&t.o){if(N.has(t))return;N.add(t),P.c.push(()=>{N.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function q(t){t&&t.c()}function D(t,e,l){const{fragment:c,on_mount:u,on_destroy:a,after_update:s}=t.$$;c&&c.m(e,l),k(()=>{const e=u.map(n).filter(o);a?a.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(k)}function O(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function T(t,n){-1===t.$$.dirty[0]&&(b.push(t),C||(C=!0,E.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(n,o,l,c,u,s,i=[-1]){const d=x;y(n);const f=o.props||{},m=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:e(),dirty:i};let p=!1;if(m.ctx=l?l(n,f,(t,e,...r)=>{const o=r.length?r[0]:e;return m.ctx&&u(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),p&&T(n,t)),e}):[],m.update(),p=!0,r(m.before_update),m.fragment=!!c&&c(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();o.intro&&M(n.$$.fragment),D(n,o.target,o.anchor),A()}y(d)}class G{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}function I(n){let e;return{c(){e=s("div"),e.innerHTML='<h1 class="text-3xl md:text-4xl">Player Scoreboard</h1>',p(e,"class","navbar text-gray-800 mb-8")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}class J extends G{constructor(t){super(),F(this,t,null,I,l,{})}}function K(t){let n,e;return{c(){n=i("svg"),e=i("path"),p(e,"fill","currentColor"),p(e,"d","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"),p(e,"class",""),p(n,"aria-hidden","true"),p(n,"focusable","false"),p(n,"data-prefix","fas"),p(n,"data-icon","chevron-down"),p(n,"role","img"),p(n,"xmlns","http://www.w3.org/2000/svg"),p(n,"viewBox","0 0 448 512"),p(n,"class","h-4 w-4")},m(t,r){u(t,n,r),c(n,e)},d(t){t&&a(n)}}}function Q(t){let n,e;return{c(){n=i("svg"),e=i("path"),p(e,"fill","currentColor"),p(e,"d","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"),p(e,"class",""),p(n,"aria-hidden","true"),p(n,"focusable","false"),p(n,"data-prefix","fas"),p(n,"data-icon","chevron-down"),p(n,"role","img"),p(n,"xmlns","http://www.w3.org/2000/svg"),p(n,"viewBox","0 0 448 512"),p(n,"class","h-4 w-4 transform rotate-180")},m(t,r){u(t,n,r),c(n,e)},d(t){t&&a(n)}}}function R(t){let n;return{c(){n=d("point")},m(t,e){u(t,n,e)},d(t){t&&a(n)}}}function U(t){let n;return{c(){n=d("points")},m(t,e){u(t,n,e)},d(t){t&&a(n)}}}function V(t){let n,e,o,l,i,d,g,h="Harry Saputra"!=t[1]&&W(t);return{c(){n=s("div"),e=s("button"),e.textContent="add point",o=f(),l=s("button"),l.textContent="reduce point",i=f(),d=s("div"),h&&h.c(),p(e,"class","btn bg-gray-200 text-gray-800 border border-gray-300 px-3 py-2 rounded-md hover:shadow"),p(l,"class","ml-2 btn border border-gray-300 px-3 py-2 rounded-md text-gray-800 hover:shadow"),p(n,"class","grid grid-cols-2 mb-2"),p(d,"class","text-center border-t border-gray-200 -m-4 mt-6 -mb-4")},m(a,s,f){u(a,n,s),c(n,e),c(n,o),c(n,l),u(a,i,s),u(a,d,s),h&&h.m(d,null),f&&r(g),g=[m(e,"click",t[3]),m(l,"click",t[4])]},p(t,n){"Harry Saputra"!=t[1]?h?h.p(t,n):(h=W(t),h.c(),h.m(d,null)):h&&(h.d(1),h=null)},d(t){t&&a(n),t&&a(i),t&&a(d),h&&h.d(),r(g)}}}function W(n){let e,r;return{c(){e=s("button"),e.textContent="Delete Player",p(e,"class","text-sm text-gray-800 block w-full hover:bg-gray-200 py-3 rounded-md")},m(t,o,l){u(t,e,o),l&&r(),r=m(e,"click",n[6])},p:t,d(t){t&&a(e),r()}}}function X(n){let e,r,o,l,i,h,x,y,$,b,v,w,_,E;function C(t,n){return t[2]?Q:K}let k=C(n),L=k(n);function S(t,n){return t[0]>1||t[0]<-1?U:R}let A=S(n),j=A(n),N=n[2]&&V(n);return{c(){e=s("div"),r=s("div"),o=s("h3"),l=d(n[1]),i=f(),h=s("button"),L.c(),x=f(),y=s("div"),$=s("h5"),b=d(n[0]),v=f(),w=s("p"),j.c(),_=f(),N&&N.c(),p(o,"class","text-gray-800 text-xl"),p(h,"class","btn text-sm bg-gray-200 p-3 rounded-full focus:outline-none"),p(r,"class","flex justify-between items-start"),p($,"class","text-6xl font-bold leading-none"),p(w,"class","text-3xl font-light ml-2"),p(y,"class","flex items-end justify-center my-8"),p(e,"class","bg-white p-4 rounded-lg hover:shadow-md")},m(t,a,s){u(t,e,a),c(e,r),c(r,o),c(o,l),c(r,i),c(r,h),L.m(h,null),c(e,x),c(e,y),c(y,$),c($,b),c(y,v),c(y,w),j.m(w,null),c(e,_),N&&N.m(e,null),s&&E(),E=m(h,"click",n[5])},p(t,[n]){2&n&&g(l,t[1]),k!==(k=C(t))&&(L.d(1),L=k(t),L&&(L.c(),L.m(h,null))),1&n&&g(b,t[0]),A!==(A=S(t))&&(j.d(1),j=A(t),j&&(j.c(),j.m(w,null))),t[2]?N?N.p(t,n):(N=V(t),N.c(),N.m(e,null)):N&&(N.d(1),N=null)},i:t,o:t,d(t){t&&a(e),L.d(),j.d(),N&&N.d(),E()}}}function Y(t,n,e){const r=$();let{name:o}=n,{points:l}=n,c=!0;return t.$set=t=>{"name"in t&&e(1,o=t.name),"points"in t&&e(0,l=t.points)},[l,o,c,()=>e(0,l+=1),()=>e(0,l-=1),()=>e(2,c=!c),()=>r("removeplayer",o)]}class Z extends G{constructor(t){super(),F(this,t,Y,X,l,{name:1,points:0})}}function tt(n){let e,o,l,i,d;return{c(){e=s("form"),o=s("input"),l=f(),i=s("input"),p(o,"type","text"),p(o,"class","px-4 py-2 rounded-md flex-1"),p(o,"placeholder","Player Name"),o.required=!0,p(i,"type","submit"),p(i,"class","px-4 py-2 rounded-md bg-blue-500 text-white ml-2"),i.value="Add Player",p(e,"class","addplayer mb-8 flex justify-between md:max-w-sm")},m(t,a,s){u(t,e,a),c(e,o),h(o,n[0].name),c(e,l),c(e,i),s&&r(d),d=[m(o,"input",n[3]),m(e,"submit",n[1])]},p(t,[n]){1&n&&o.value!==t[0].name&&h(o,t[0].name)},i:t,o:t,d(t){t&&a(e),r(d)}}}function nt(t,n,e){const r=$();let o={name:"",points:0};return[o,t=>{t.preventDefault(),r("addplayer",o),e(0,o={name:"",points:0})},r,function(){o.name=this.value,e(0,o)}]}class et extends G{constructor(t){super(),F(this,t,nt,tt,l,{})}}function rt(t,n,e){const r=t.slice();return r[3]=n[e],r}function ot(t){let n,e,r=t[0],o=[];for(let n=0;n<r.length;n+=1)o[n]=ct(rt(t,r,n));const l=t=>z(o[t],1,1,()=>{o[t]=null});return{c(){n=s("div");for(let t=0;t<o.length;t+=1)o[t].c();p(n,"class","grid md:grid-cols-4 gap-6")},m(t,r){u(t,n,r);for(let t=0;t<o.length;t+=1)o[t].m(n,null);e=!0},p(t,e){if(5&e){let c;for(r=t[0],c=0;c<r.length;c+=1){const l=rt(t,r,c);o[c]?(o[c].p(l,e),M(o[c],1)):(o[c]=ct(l),o[c].c(),M(o[c],1),o[c].m(n,null))}for(B(),c=r.length;c<o.length;c+=1)l(c);H()}},i(t){if(!e){for(let t=0;t<r.length;t+=1)M(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)z(o[t]);e=!1},d(t){t&&a(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function lt(n){let e;return{c(){e=s("p"),e.textContent="Add some players to start the game ;)",p(e,"class","text-xl text-gray-500")},m(t,n){u(t,e,n)},p:t,i:t,o:t,d(t){t&&a(e)}}}function ct(t){let n,e,r;const o=new Z({props:{name:t[3].name,points:t[3].points}});return o.$on("removeplayer",t[2]),{c(){n=s("div"),q(o.$$.fragment),e=f()},m(t,l){u(t,n,l),D(o,n,null),c(n,e),r=!0},p(t,n){const e={};1&n&&(e.name=t[3].name),1&n&&(e.points=t[3].points),o.$set(e)},i(t){r||(M(o.$$.fragment,t),r=!0)},o(t){z(o.$$.fragment,t),r=!1},d(t){t&&a(n),O(o)}}}function ut(t){let n,e,r,o,l,i;const d=new J({}),m=new et({});m.$on("addplayer",t[1]);const g=[lt,ot],h=[];function x(t,n){return 0===t[0].length?0:1}return o=x(t),l=h[o]=g[o](t),{c(){n=s("main"),q(d.$$.fragment),e=f(),q(m.$$.fragment),r=f(),l.c(),p(n,"class","bg-gray-200 min-h-screen h-full w-full p-8")},m(t,l){u(t,n,l),D(d,n,null),c(n,e),D(m,n,null),c(n,r),h[o].m(n,null),i=!0},p(t,[e]){let r=o;o=x(t),o===r?h[o].p(t,e):(B(),z(h[r],1,1,()=>{h[r]=null}),H(),l=h[o],l||(l=h[o]=g[o](t),l.c()),M(l,1),l.m(n,null))},i(t){i||(M(d.$$.fragment,t),M(m.$$.fragment,t),M(l),i=!0)},o(t){z(d.$$.fragment,t),z(m.$$.fragment,t),z(l),i=!1},d(t){t&&a(n),O(d),O(m),h[o].d()}}}function at(t,n,e){let r=[{name:"Harry Saputra",points:10}];return[r,t=>{const n=t.detail;e(0,r=[...r,n])},t=>{e(0,r=r.filter(n=>n.name!==t.detail))}]}return new class extends G{constructor(t){super(),F(this,t,at,ut,l,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map

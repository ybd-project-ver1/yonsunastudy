(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9043:function(e,t,r){Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.bind(r,1467))},1467:function(e,t,r){"use strict";r.d(t,{default:function(){return s}});var n=r(7437),a=r(2265),l=r(9354);function o(){let{layout:{vertical:e,horizontal:t},containerRef:r}=function(){let e=(0,a.useRef)(null),[t,r]=(0,a.useState)({vertical:0,horizontal:0});return(0,a.useEffect)(()=>{let t=()=>{var t;let n=null===(t=e.current)||void 0===t?void 0:t.getBoundingClientRect();n&&r({vertical:Math.floor(n.height),horizontal:Math.floor(n.width)})};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),{layout:t,containerRef:e}}(),o=(0,a.useMemo)(()=>(function(e,t,r){let n=[],a=new Set;for(let l=48;l<e/2-48;l+=24)for(let e=48;e<t-48;e+=24)a.has(l+e+r)||a.has(l+e-r)||a.has(l+e+4*r)||a.has(l+e-4*r)||(a.add(l+e),n.push({x:l,y:e}));return n})(t,e,24),[t,e]),[s,i]=(0,a.useState)(0),u=(0,a.useRef)(),c=(0,a.useCallback)(()=>{u.current&&clearInterval(u.current);let e=()=>{let e=o[Math.floor(Math.random()*o.length)%o.length];i(e.x+e.y)};e();let t=0;u.current=setInterval(()=>{if(5===t){clearInterval(u.current),i(0);return}e(),t++},1e3)},[o]),d=(0,a.useMemo)(()=>o.map((e,r)=>{let{x:a,y:o}=e,i=a;r%2&&(i=t-a-24);let u=s-a===a||s-o===o;return(0,n.jsx)("div",{style:{transform:"translate(".concat(i,"px, ").concat(o,"px)")},onMouseEnter:c,onClick:c,className:"absolute h-6 w-6 rounded-md bg-transparent p-px border border-gray-400/30 border-box group ",children:(0,n.jsx)("div",{style:{transitionDelay:s?"".concat(a+o,"ms"):"0ms"},className:(0,l.cn)("h-full w-full scale-90 rounded bg-gray-400/30 opacity-0 transition-all duration-700",{"scale-100 opacity-100":u,"group-hover:scale-100 group-hover:opacity-100":!u})})},"".concat(a,"-").concat(o))}),[o,t,s,c]);return(0,n.jsx)("div",{ref:r,onClick:c,className:(0,l.cn)("absolute inset-0 h-full max-h-96 w-full",{"top-1/4":e>384}),children:d})}function s(e){let{children:t,className:r,contentClassName:a}=e;return(0,n.jsxs)("div",{className:(0,l.cn)("storybook-fix relative h-full w-full overflow-hidden rounded-3xl",r),style:{backgroundImage:"linear-gradient(123deg, transparent 0%, transparent 36%,rgba(17, 17, 57,0.02) 36%, rgba(17, 17, 87,0.02) 56%,transparent 56%, transparent 100%),linear-gradient(251deg, transparent 0%, transparent 68%,rgba(3, 3, 3,0.02) 68%, rgba(3, 3, 93,0.02) 99%,transparent 99%, transparent 100%),linear-gradient(135deg, rgb(200,215,255),rgb(205,215,255))"},children:[(0,n.jsx)(o,{}),(0,n.jsx)("div",{className:(0,l.cn)("relative mx-auto h-full w-fit",a),children:t})]})}},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(4839),a=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}}},function(e){e.O(0,[868,231,971,23,744],function(){return e(e.s=9043)}),_N_E=e.O()}]);
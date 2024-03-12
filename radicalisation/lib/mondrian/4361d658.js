"use strict";(self.webpackChunk_articulate_mondrian_bundles=self.webpackChunk_articulate_mondrian_bundles||[]).push([[567],{306:(t,e,n)=>{n.d(e,{Z:()=>r});var o=n(796),i=n.n(o),a=n(51),s=n.n(a)()(i());s.push([t.id,".hXRin0tc .tiptap {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.hXRin0tc .tiptap :is(h1, h2) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.hXRin0tc .tiptap :is(p, h1, h2) {\n  margin: 0;\n}\n\n.hXRin0tc .tiptap strong {\n  font-weight: bold;\n}\n\n.hXRin0tc .tiptap em {\n  font-style: italic;\n}\n\n.hXRin0tc .tiptap s {\n  text-decoration: line-through;\n}\n\n.hXRin0tc .tiptap u {\n  text-decoration: underline;\n}\n","",{version:3,sources:["webpack://./../../packages/core/src/styles/tiptap.module.css"],names:[],mappings:"AAAA;EACE,uCAAuC;EACvC,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,oBAAoB;EACpB,0CAA0C;EAC1C,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;AAC5B",sourcesContent:[".textItem :global(.tiptap) {\n  font-family: var(--mon-theme-font-body);\n  height: 100%;\n  width: 100%;\n}\n\n.textItem :global(.tiptap :is(h1, h2)) {\n  line-height: inherit;\n  font-family: var(--mon-theme-font-heading);\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n.textItem :global(.tiptap :is(p, h1, h2)) {\n  margin: 0;\n}\n\n.textItem :global(.tiptap strong) {\n  font-weight: bold;\n}\n\n.textItem :global(.tiptap em) {\n  font-style: italic;\n}\n\n.textItem :global(.tiptap s) {\n  text-decoration: line-through;\n}\n\n.textItem :global(.tiptap u) {\n  text-decoration: underline;\n}\n"],sourceRoot:""}]),s.locals={textItem:"hXRin0tc"};const r=s},567:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Pe});var o=n(746);function i(t){(0,o.append_styles)(t,"svelte-su3qhz",".mondrian__img-1XHDzr{height:100%;width:100%}")}function a(t){let e,n;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"aria-label",n=t[0].alt),(0,o.attr)(e,"class","mondrian__img-1XHDzr"),(0,o.attr)(e,"role","img")},m(t,n){(0,o.insert)(t,e,n)},p(t,[i]){1&i&&n!==(n=t[0].alt)&&(0,o.attr)(e,"aria-label",n)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function s(t,e,n){let{item:o}=e;return t.$$set=t=>{"item"in t&&n(0,o=t.item)},[o]}n(919);class r extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,s,a,o.safe_not_equal,{item:0},i)}}const l=r;var d=n(743),c=n.n(d),u=n(124),m=n.n(u),p=n(591),_=n.n(p),g=n(35),f=n.n(g),h=n(190),$=n.n(h),y=n(799),b=n.n(y),v=n(306),w={};w.styleTagTransform=b(),w.setAttributes=f(),w.insert=_().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=$(),c()(v.Z,w);const x=v.Z&&v.Z.locals?v.Z.locals:void 0;var Z=n(195);class A{constructor(t){this.zod=t}parse(t){return this.zod.parse(t)}is(t){return this.zod.safeParse(t).success}assert(t){this.parse(t)}}const P=new A(Z.ZP.object({name:Z.ZP.enum(["fadeInUp"]),delay:Z.ZP.number().min(0),duration:Z.ZP.number().positive(),easing:Z.ZP.enum(["ease","ease-in","ease-out","ease-in-out","linear","step-start","step-end"])})),k=new A(Z.ZP.object({id:Z.ZP.string(),path:Z.ZP.string(),width:Z.ZP.number().optional(),height:Z.ZP.number().optional()})),z=new A(Z.ZP.object({assetId:Z.ZP.string().optional(),color:Z.ZP.string().optional(),opacity:Z.ZP.number().min(0).max(1).default(1)})),S=new A(z.zod.extend({type:Z.ZP.literal("color"),color:z.zod.shape.color.unwrap().default("#e4e4e4")})),C=new A(z.zod.extend({type:Z.ZP.literal("image"),assetId:z.zod.shape.assetId.unwrap()})),I=new A(z.zod.extend({type:Z.ZP.literal("none")})),E=new A(Z.ZP.discriminatedUnion("type",[S.zod,C.zod,I.zod])),R=new A(Z.ZP.discriminatedUnion("type",[S.zod,I.zod])),N=Z.ZP.object({id:Z.ZP.string()}),B=new A(N),M=new A(N.extend({state:Z.ZP.string().optional(),visible:Z.ZP.boolean().optional()})),q=new A(Z.ZP.object({unit:Z.ZP.enum(["px","%","auto","fr"]),value:Z.ZP.number()})),j=new A(Z.ZP.object({top:q.zod.default({value:0,unit:"px"}),left:q.zod.default({value:0,unit:"px"}),bottom:q.zod.default({value:0,unit:"px"}),right:q.zod.default({value:0,unit:"px"})})),L=Z.ZP.object({id:Z.ZP.string().default("default"),name:Z.ZP.string().max(128),children:Z.ZP.array(M.zod).optional(),x:q.zod.default({value:0,unit:"px"}),y:q.zod.default({value:0,unit:"px"}),position:Z.ZP.enum(["absolute"]).default("absolute"),width:q.zod.default({value:100,unit:"%"}),height:q.zod.default({value:100,unit:"%"}),padding:j.zod,fill:E.zod,overlay:R.zod,aspectRatioLocked:Z.ZP.boolean().default(!1),visible:Z.ZP.boolean().default(!0),clipPath:Z.ZP.literal("ellipse").optional(),borderRadius:Z.ZP.object({topLeft:q.zod.default({value:0,unit:"px"}),topRight:q.zod.default({value:0,unit:"px"}),bottomRight:q.zod.default({value:0,unit:"px"}),bottomLeft:q.zod.default({value:0,unit:"px"})}),entranceAnimation:P.zod.nullable().optional()}),W=new A(L),X=new A(L.extend({children:Z.ZP.array(M.zod)})),D=new A(Z.ZP.discriminatedUnion("type",[Z.ZP.object({type:Z.ZP.literal("changeState"),target:Z.ZP.discriminatedUnion("type",[Z.ZP.object({type:Z.ZP.literal("self")}),Z.ZP.object({type:Z.ZP.literal("id"),id:Z.ZP.string()})]),targetState:Z.ZP.string().default("default")})])),U=new A(Z.ZP.object({id:Z.ZP.string(),event:Z.ZP.enum(["click"]).default("click"),actions:Z.ZP.array(D.zod)})),T=new A(Z.ZP.object({id:Z.ZP.string(),blockumentId:Z.ZP.string(),parentId:Z.ZP.string(),type:Z.ZP.string(),name:Z.ZP.string().max(128),tagName:Z.ZP.enum(["div","figure","figcaption","blockquote"]).default("div"),initialState:Z.ZP.string().default("default"),states:Z.ZP.record(W.zod),triggers:Z.ZP.array(U.zod),assets:Z.ZP.record(k.zod).default({}).optional()})),H=(new A(Z.ZP.object({id:Z.ZP.string(),title:Z.ZP.string().max(255),children:Z.ZP.array(B.zod).max(1)})),new A(T.zod.extend({type:Z.ZP.literal("group"),states:Z.ZP.record(X.zod)}))),J=new A(T.zod.extend({type:Z.ZP.literal("image"),alt:Z.ZP.string()})),K=new A(T.zod.extend({type:Z.ZP.literal("shape")})),Y=new A(Z.ZP.object({id:Z.ZP.string(),type:Z.ZP.literal("tiptap")})),O=new A(T.zod.extend({type:Z.ZP.literal("text"),text:Y.zod}));new A(Z.ZP.discriminatedUnion("type",[H.zod,J.zod,K.zod,O.zod]));var F,Q;!function(t){t.Blockuments="blockuments",t.Items="items"}(F||(F={})),F.Blockuments,F.Items,function(t){t.APP="app",t.BLOCKUMENT="blockument",t.COURSE="course"}(Q||(Q={}));var V=n(881),G=n(633),tt=n(686),et=n(82),nt=n(983),ot=n(277);const it=/([a-z%]+)\s*$/i,at=V.hj.create({name:"textSize",addGlobalAttributes:()=>[{types:["textStyle"],attributes:{textSize:{default:14,parseHTML(t){const e=t.style.fontSize,n=parseFloat(e);if(isNaN(n))return null;const o=it.exec(e);if(null==o)return null;switch(o[1]){case"rem":return Math.round(10*n);case"px":return Math.round(n);default:return null}},renderHTML:t=>({style:`font-size: ${t.textSize/10}rem`})}}}],addCommands:()=>({setTextSize:t=>({chain:e})=>e().setMark("textStyle",{textSize:t}).run()})}),st=V.hj.create({name:"paragraphStyle",addCommands:()=>({setParagraphStyle:(t,e)=>({dispatch:n,state:o,tr:i})=>{const a=i.selection.$from.blockRange(i.selection.$from);return null!=a&&(null!=n&&(i.doc.nodesBetween(a.start,a.end,((n,a)=>{if(n.type===o.schema.nodes.heading||n.type===o.schema.nodes.paragraph){const s="heading"===t?o.schema.nodes.heading:o.schema.nodes.paragraph,r={...n.attrs};"heading"===t&&"number"==typeof e.level&&(r.level=e.level),i.setNodeMarkup(a,s,r,n.marks)}if(n.type===o.schema.nodes.text){const t=o.schema.marks.textStyle.isInSet(n.marks);i.addMark(a,a+n.nodeSize,o.schema.marks.textStyle.create({...t?.attrs,textSize:e.textSize}))}})),e.bold?i.addMark(a.start,a.end,o.schema.marks.bold.create()):i.removeMark(a.start,a.end,o.schema.marks.bold)),!0)}})});G.Z.configure({types:["textStyle"]});const rt=[ot.Z.configure({history:!1,heading:{levels:[1,2]}}),tt.Z.configure({types:["heading","paragraph"]}),et.Z,G.Z,st,at,nt.Z];(0,V.J1)(rt);var lt=n(111),dt=n(516);const ct=function(){const t=(0,dt.writable)({blockuments:{},items:{},tiptap:{}}),{subscribe:e,set:n,update:o}=t,i=new Map;return{subscribe:e,set:n,update:o,addManifest:(t,e)=>{i.set(t,e),a()},removeManifest:t=>{i.delete(t),a()}};function a(){n(function(...t){const e={};for(const n of t)for(const[t,o]of Object.entries(n))e[t]=Object.assign({},e[t],o);return e}(...i.values()))}}();function ut(t){let e,n,i,a=(0,lt.a)(t[0],rt)+"";return{c(){e=(0,o.element)("div"),n=(0,o.element)("div"),(0,o.attr)(n,"class","tiptap"),(0,o.attr)(e,"class",i=x.textItem)},m(t,i){(0,o.insert)(t,e,i),(0,o.append)(e,n),n.innerHTML=a},p(t,e){1&e&&a!==(a=(0,lt.a)(t[0],rt)+"")&&(n.innerHTML=a)},d(t){t&&(0,o.detach)(e)}}}function mt(t){let e,n=void 0!==t[0]&&ut(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){void 0!==t[0]?n?n.p(t,o):(n=ut(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function pt(t,e,n){let i,a,s;(0,o.component_subscribe)(t,ct,(t=>n(3,s=t)));let{item:r}=e;return t.$$set=t=>{"item"in t&&n(1,r=t.item)},t.$$.update=()=>{2&t.$$.dirty&&n(2,i=r.text.id),12&t.$$.dirty&&n(0,a=s.tiptap?.[i])},[a,r,i,s]}class _t extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,pt,mt,o.safe_not_equal,{item:1})}}const gt=_t;var ft=n(317);const ht=new Map,$t={...(0,dt.writable)(ht),setState(t,e){$t.update((n=>($t.get(t).set(e),n)))},get:(t,e="default")=>(ht.has(t)||ht.set(t,(0,dt.writable)(e)),ht.get(t))},yt=(matchMedia("(prefers-reduced-motion)"),new WeakMap),bt=(new IntersectionObserver((t=>{for(const e of t){if(!e.isIntersecting)continue;const t=yt.get(e.target);null!=t&&"paused"===t.playState&&t.play()}}),{threshold:.3}),({value:t,unit:e})=>{switch(e){case"auto":return"auto";case"px":return t/10+"rem";default:return(({value:t,unit:e})=>`${t}${e}`)({value:t,unit:e})}});function vt(t){(0,o.append_styles)(t,"svelte-bbp0xy",".mondrian__clipped-KfJDq2{border-radius:inherit;display:flex;height:100%;inset:0;position:absolute;width:100%;z-index:-1}")}function wt(t){let e,n;const i=t[7].default,a=(0,o.create_slot)(i,t,t[6],null);return{c(){e=(0,o.element)("div"),a&&a.c(),(0,o.attr)(e,"class","mondrian__clipped-KfJDq2"),(0,o.set_style)(e,"clip-path",t[0])},m(t,i){(0,o.insert)(t,e,i),a&&a.m(e,null),n=!0},p(t,[s]){a&&a.p&&(!n||64&s)&&(0,o.update_slot_base)(a,i,t,t[6],n?(0,o.get_slot_changes)(i,t[6],s,null):(0,o.get_all_dirty_from_scope)(t[6]),null),1&s&&(0,o.set_style)(e,"clip-path",t[0])},i(t){n||((0,o.transition_in)(a,t),n=!0)},o(t){(0,o.transition_out)(a,t),n=!1},d(t){t&&(0,o.detach)(e),a&&a.d(t)}}}function xt(t,e,n){let i,a,s,r,{$$slots:l={},$$scope:d}=e,{item:c}=e;const u=$t.get(c.id,c.initialState);return(0,o.component_subscribe)(t,u,(t=>n(5,r=t))),t.$$set=t=>{"item"in t&&n(2,c=t.item),"$$scope"in t&&n(6,d=t.$$scope)},t.$$.update=()=>{36&t.$$.dirty&&n(4,i=c.states[r]),16&t.$$.dirty&&n(3,a="ellipse"===i.clipPath),8&t.$$.dirty&&n(0,s=a?"ellipse(50% 50%)":void 0)},[s,u,c,a,i,r,d,l]}class Zt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,xt,wt,o.safe_not_equal,{item:2},vt)}}const At=Zt;function Pt(t){(0,o.append_styles)(t,"svelte-1cx7a5",".mondrian__fill-QARoMt{background-position:center;background-size:cover;inset:0;position:absolute;border-radius:inherit}")}function kt(t){let e;return{c(){e=(0,o.element)("div"),(0,o.attr)(e,"class","mondrian__fill-QARoMt"),(0,o.set_style)(e,"background-color",t[1]),(0,o.set_style)(e,"background-image",t[2]),(0,o.set_style)(e,"opacity",t[0].opacity)},m(t,n){(0,o.insert)(t,e,n)},p(t,n){2&n&&(0,o.set_style)(e,"background-color",t[1]),4&n&&(0,o.set_style)(e,"background-image",t[2]),1&n&&(0,o.set_style)(e,"opacity",t[0].opacity)},d(t){t&&(0,o.detach)(e)}}}function zt(t){let e,n=(null!=t[1]||null!=t[2])&&kt(t);return{c(){n&&n.c(),e=(0,o.empty)()},m(t,i){n&&n.m(t,i),(0,o.insert)(t,e,i)},p(t,[o]){null!=t[1]||null!=t[2]?n?n.p(t,o):(n=kt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e),n&&n.d(t)}}}function St(t,e,n){let{assets:o}=e,{fill:i}=e,a=null,s=null;return t.$$set=t=>{"assets"in t&&n(3,o=t.assets),"fill"in t&&n(0,i=t.fill)},t.$$.update=()=>{if(9&t.$$.dirty)switch(i?.type){case"color":n(1,a=i.color),n(2,s=null);break;case"image":{n(1,a=null);const t=o?.[i.assetId];n(2,s=null==t?null:`url("${function(t){return`assets/${t.path}`}(t)}")`);break}default:n(1,a=n(2,s=null))}},[i,a,s,o]}class Ct extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,St,zt,o.safe_not_equal,{assets:3,fill:0},Pt)}}const It=Ct;function Et(t){(0,o.append_styles)(t,"svelte-7trzu6",".mondrian__item-16W7_q{position:absolute;z-index:1;height:max-content;width:max-content;user-select:none}.mondrian__item-16W7_q.mondrian__--mon-dragging-11a9Ng{cursor:grab;opacity:0.3}.mondrian__item-16W7_q.mondrian__--root-32F69W{position:relative}.mondrian__item-16W7_q.mondrian__--hidden-XVPSsW{display:none}.mondrian__item-16W7_q.mondrian__--selected-2we_mA{outline:1px solid var(--mon-color-primary-500)}.mondrian__item-16W7_q.mondrian__--dropping-into-2elrd7{outline:1px dashed var(--mon-color-primary-500)}.mondrian__item-16W7_q.mondrian__--hover-UJuRZl{outline:2px solid var(--mon-color-primary-500)}.mondrian__item-16W7_q.mondrian__--disabled-1AiK8n,.mondrian__item-16W7_q.mondrian__--disabled-1AiK8n *{pointer-events:none !important}.mondrian__item-16W7_q.mondrian__--debug-1gUWhN::after{content:attr(data-parent-id) '>' attr(data-item-id);position:absolute;bottom:0;right:0;overflow:hidden;white-space:nowrap;padding:2px 4px;font:1.1rem / 1 monospace;background-color:#f006;backdrop-filter:grayscale(100%) blur(3px);color:#000;border-radius:2px 0 0 0;pointer-events:none}")}const Rt=t=>({}),Nt=t=>({}),Bt=t=>({}),Mt=t=>({});function qt(t){let e,n;return e=new It({props:{assets:t[0].assets,fill:t[15]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n&&(o.assets=t[0].assets),32768&n&&(o.fill=t[15]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function jt(t){let e,n;return e=new It({props:{assets:t[0].assets,fill:t[14]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};1&n&&(o.assets=t[0].assets),16384&n&&(o.fill=t[14]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function Lt(t){let e,n,i,a=null!=t[15]&&qt(t),s=null!=t[14]&&jt(t);return{c(){a&&a.c(),e=(0,o.space)(),s&&s.c(),n=(0,o.empty)()},m(t,r){a&&a.m(t,r),(0,o.insert)(t,e,r),s&&s.m(t,r),(0,o.insert)(t,n,r),i=!0},p(t,i){null!=t[15]?a?(a.p(t,i),32768&i&&(0,o.transition_in)(a,1)):(a=qt(t),a.c(),(0,o.transition_in)(a,1),a.m(e.parentNode,e)):a&&((0,o.group_outros)(),(0,o.transition_out)(a,1,1,(()=>{a=null})),(0,o.check_outros)()),null!=t[14]?s?(s.p(t,i),16384&i&&(0,o.transition_in)(s,1)):(s=jt(t),s.c(),(0,o.transition_in)(s,1),s.m(n.parentNode,n)):s&&((0,o.group_outros)(),(0,o.transition_out)(s,1,1,(()=>{s=null})),(0,o.check_outros)())},i(t){i||((0,o.transition_in)(a),(0,o.transition_in)(s),i=!0)},o(t){(0,o.transition_out)(a),(0,o.transition_out)(s),i=!1},d(t){t&&((0,o.detach)(e),(0,o.detach)(n)),a&&a.d(t),s&&s.d(t)}}}function Wt(t){let e,n,i,a,s,r,l,d,c,u,m,p,_,g;n=new At({props:{item:t[0],$$slots:{default:[Lt]},$$scope:{ctx:t}}});const f=t[23].before,h=(0,o.create_slot)(f,t,t[29],Mt);var $=t[2];function y(t,e){return{props:{item:t[0]}}}$&&(s=(0,o.construct_svelte_component)($,y(t)));const b=t[23].after,v=(0,o.create_slot)(b,t,t[29],Nt);let w=[{"data-item-type":l=t[0].type},{"data-item-id":d=t[0].id.slice(0,5)},{"data-parent-id":c=t[0].parentId.slice(0,5)},{"data-mon-item-id":u=t[0].id},{class:"mondrian__item-16W7_q"},{tabindex:"-1"}],x={};for(let t=0;t<w.length;t+=1)x=(0,o.assign)(x,w[t]);return{c(){e=(0,o.element)(t[0].tagName??"div"),(0,o.create_component)(n.$$.fragment),i=(0,o.space)(),h&&h.c(),a=(0,o.space)(),s&&(0,o.create_component)(s.$$.fragment),r=(0,o.space)(),v&&v.c(),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,x),(0,o.toggle_class)(e,"mondrian__--debug-1gUWhN",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-11a9Ng",t[6]),(0,o.toggle_class)(e,"mondrian__--root-32F69W",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-XVPSsW",!t[9].visible),(0,o.toggle_class)(e,"mondrian__--selected-2we_mA",t[3]),(0,o.toggle_class)(e,"mondrian__--dropping-into-2elrd7",t[7]),(0,o.toggle_class)(e,"mondrian__--hover-UJuRZl",t[4]),(0,o.toggle_class)(e,"mondrian__--disabled-1AiK8n",t[5]),(0,o.set_style)(e,"padding",t[13]),(0,o.set_style)(e,"width",t[19]),(0,o.set_style)(e,"height",t[18]),(0,o.set_style)(e,"border-radius",t[12]),(0,o.set_style)(e,"top",t[16]),(0,o.set_style)(e,"left",t[17]),(0,o.set_style)(e,"z-index",t[11])},m(l,d){(0,o.insert)(l,e,d),(0,o.mount_component)(n,e,null),(0,o.append)(e,i),h&&h.m(e,null),(0,o.append)(e,a),s&&(0,o.mount_component)(s,e,null),(0,o.append)(e,r),v&&v.m(e,null),t[28](e),p=!0,_||(g=[(0,o.listen)(e,"mousedown",t[24]),(0,o.listen)(e,"click",t[25]),(0,o.listen)(e,"keydown",t[26]),(0,o.listen)(e,"keyup",t[27]),(0,o.action_destroyer)(m=t[8].call(null,e,{itemId:t[0].id,enabled:!t[5]}))],_=!0)},p(t,i){const a={};if(1&i&&(a.item=t[0]),536920065&i&&(a.$$scope={dirty:i,ctx:t}),n.$set(a),h&&h.p&&(!p||536870912&i)&&(0,o.update_slot_base)(h,f,t,t[29],p?(0,o.get_slot_changes)(f,t[29],i,Bt):(0,o.get_all_dirty_from_scope)(t[29]),Mt),4&i&&$!==($=t[2])){if(s){(0,o.group_outros)();const t=s;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}$?(s=(0,o.construct_svelte_component)($,y(t)),(0,o.create_component)(s.$$.fragment),(0,o.transition_in)(s.$$.fragment,1),(0,o.mount_component)(s,e,r)):s=null}else if($){const e={};1&i&&(e.item=t[0]),s.$set(e)}v&&v.p&&(!p||536870912&i)&&(0,o.update_slot_base)(v,b,t,t[29],p?(0,o.get_slot_changes)(b,t[29],i,Rt):(0,o.get_all_dirty_from_scope)(t[29]),Nt),(0,o.set_dynamic_element_data)(t[0].tagName??"div")(e,x=(0,o.get_spread_update)(w,[(!p||1&i&&l!==(l=t[0].type))&&{"data-item-type":l},(!p||1&i&&d!==(d=t[0].id.slice(0,5)))&&{"data-item-id":d},(!p||1&i&&c!==(c=t[0].parentId.slice(0,5)))&&{"data-parent-id":c},(!p||1&i&&u!==(u=t[0].id))&&{"data-mon-item-id":u},{class:"mondrian__item-16W7_q"},{tabindex:"-1"}])),m&&(0,o.is_function)(m.update)&&33&i&&m.update.call(null,{itemId:t[0].id,enabled:!t[5]}),(0,o.toggle_class)(e,"mondrian__--debug-1gUWhN",!1),(0,o.toggle_class)(e,"mondrian__--mon-dragging-11a9Ng",t[6]),(0,o.toggle_class)(e,"mondrian__--root-32F69W",t[1]),(0,o.toggle_class)(e,"mondrian__--hidden-XVPSsW",!t[9].visible),(0,o.toggle_class)(e,"mondrian__--selected-2we_mA",t[3]),(0,o.toggle_class)(e,"mondrian__--dropping-into-2elrd7",t[7]),(0,o.toggle_class)(e,"mondrian__--hover-UJuRZl",t[4]),(0,o.toggle_class)(e,"mondrian__--disabled-1AiK8n",t[5]),8192&i&&(0,o.set_style)(e,"padding",t[13]),524288&i&&(0,o.set_style)(e,"width",t[19]),262144&i&&(0,o.set_style)(e,"height",t[18]),4096&i&&(0,o.set_style)(e,"border-radius",t[12]),65536&i&&(0,o.set_style)(e,"top",t[16]),131072&i&&(0,o.set_style)(e,"left",t[17]),2048&i&&(0,o.set_style)(e,"z-index",t[11])},i(t){p||((0,o.transition_in)(n.$$.fragment,t),(0,o.transition_in)(h,t),s&&(0,o.transition_in)(s.$$.fragment,t),(0,o.transition_in)(v,t),p=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),(0,o.transition_out)(h,t),s&&(0,o.transition_out)(s.$$.fragment,t),(0,o.transition_out)(v,t),p=!1},d(i){i&&(0,o.detach)(e),(0,o.destroy_component)(n),h&&h.d(i),s&&(0,o.destroy_component)(s),v&&v.d(i),t[28](null),_=!1,(0,o.run_all)(g)}}}function Xt(t){let e,n,i=t[0].tagName??"div",a=(t[0].tagName??"div")&&Wt(t);return{c(){a&&a.c(),e=(0,o.empty)()},m(t,i){a&&a.m(t,i),(0,o.insert)(t,e,i),n=!0},p(t,[n]){t[0].tagName??"div"?i?(0,o.safe_not_equal)(i,t[0].tagName??"div")?(a.d(1),a=Wt(t),i=t[0].tagName??"div",a.c(),a.m(e.parentNode,e)):a.p(t,n):(a=Wt(t),i=t[0].tagName??"div",a.c(),a.m(e.parentNode,e)):i&&(a.d(1),a=null,i=t[0].tagName??"div")},i(t){n||((0,o.transition_in)(a,t),n=!0)},o(t){(0,o.transition_out)(a,t),n=!1},d(t){t&&(0,o.detach)(e),a&&a.d(t)}}}function Dt(t,e,n){let i,a,s,r,l,d,c,u,m,p,_,{$$slots:g={},$$scope:f}=e,{item:h}=e,{idx:$=0}=e,{isRoot:y=!1}=e,{ItemComponent:b}=e,{isSelected:v=!1}=e,{isHovered:w=!1}=e,{isDisabled:x=!1}=e,{isDragging:Z=!1}=e,{isDroppingInto:A=!1}=e,{hoverItem:P=(()=>{})}=e;const k=$t.get(h.id,h.initialState);let z;return(0,o.component_subscribe)(t,k,(t=>n(22,_=t))),t.$$set=t=>{"item"in t&&n(0,h=t.item),"idx"in t&&n(21,$=t.idx),"isRoot"in t&&n(1,y=t.isRoot),"ItemComponent"in t&&n(2,b=t.ItemComponent),"isSelected"in t&&n(3,v=t.isSelected),"isHovered"in t&&n(4,w=t.isHovered),"isDisabled"in t&&n(5,x=t.isDisabled),"isDragging"in t&&n(6,Z=t.isDragging),"isDroppingInto"in t&&n(7,A=t.isDroppingInto),"hoverItem"in t&&n(8,P=t.hoverItem),"$$scope"in t&&n(29,f=t.$$scope)},t.$$.update=()=>{4194305&t.$$.dirty&&n(9,i=h.states[_]),512&t.$$.dirty&&n(19,a=bt(i.width)),512&t.$$.dirty&&n(18,s=bt(i.height)),512&t.$$.dirty&&n(17,r=bt(i.x)),512&t.$$.dirty&&n(16,l=bt(i.y)),512&t.$$.dirty&&n(15,d=i.fill),512&t.$$.dirty&&n(14,c=i.overlay),512&t.$$.dirty&&n(13,u=[i.padding.top,i.padding.right,i.padding.bottom,i.padding.left].map(bt).join(" ")),512&t.$$.dirty&&n(12,m=bt(i.borderRadius.topLeft)),2097152&t.$$.dirty&&n(11,p=9999-$)},[h,y,b,v,w,x,Z,A,P,i,z,p,m,u,c,d,l,r,s,a,k,$,_,g,function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(e){o.bubble.call(this,t,e)},function(t){o.binding_callbacks[t?"unshift":"push"]((()=>{z=t,n(10,z)}))},f]}class Ut extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,Dt,Xt,o.safe_not_equal,{item:0,idx:21,isRoot:1,ItemComponent:2,isSelected:3,isHovered:4,isDisabled:5,isDragging:6,isDroppingInto:7,hoverItem:8},Et)}}const Tt=Ut,Ht=[["white",16777215],["grey-200",16316664],["grey-300",15658734],["grey-400",15000804],["grey-500",13421772],["grey-600",9408399],["grey-700",7368816],["grey-800",2631720],["black",0],["primary-100",15593471],["primary-300",10200317],["primary-500",4874236],["primary-700",2569145],["primary-900",527710]],Jt=Ht.map((([t,e])=>[t,[e>>16&255,e>>8&255,255&e]])),Kt=new Array;for(const[t,e]of Ht)Kt.push(`--mon-color-${t}: #${e.toString(16).padStart(6,"0")}`);for(const[t,e]of Jt)Kt.push(`--mon-color-${t}-rgb: ${e.join(", ")}`);function Yt(t){(0,o.append_styles)(t,"svelte-1vwx6yd",".mondrian__surface-3PSuzl{width:100%;position:relative}")}function Ot(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function Ft(t,e){let n,i,a,s;var r=e[0];function l(t,e){return{props:{idx:t[7],itemId:t[5].id}}}return r&&(i=(0,o.construct_svelte_component)(r,l(e))),{key:t,first:null,c(){n=(0,o.empty)(),i&&(0,o.create_component)(i.$$.fragment),a=(0,o.empty)(),this.first=n},m(t,e){(0,o.insert)(t,n,e),i&&(0,o.mount_component)(i,t,e),(0,o.insert)(t,a,e),s=!0},p(t,n){if(e=t,1&n&&r!==(r=e[0])){if(i){(0,o.group_outros)();const t=i;(0,o.transition_out)(t.$$.fragment,1,0,(()=>{(0,o.destroy_component)(t,1)})),(0,o.check_outros)()}r?(i=(0,o.construct_svelte_component)(r,l(e)),(0,o.create_component)(i.$$.fragment),(0,o.transition_in)(i.$$.fragment,1),(0,o.mount_component)(i,a.parentNode,a)):i=null}else if(r){const t={};2&n&&(t.idx=e[7]),2&n&&(t.itemId=e[5].id),i.$set(t)}},i(t){s||(i&&(0,o.transition_in)(i.$$.fragment,t),s=!0)},o(t){i&&(0,o.transition_out)(i.$$.fragment,t),s=!1},d(t){t&&((0,o.detach)(n),(0,o.detach)(a)),i&&(0,o.destroy_component)(i,t)}}}function Qt(t){let e,n,i=[],a=new Map,s=(0,o.ensure_array_like)(t[1].children);const r=t=>t[5].id;for(let e=0;e<s.length;e+=1){let n=Ot(t,s,e),o=r(n);a.set(o,i[e]=Ft(o,n))}return{c(){e=(0,o.element)("div");for(let t=0;t<i.length;t+=1)i[t].c();(0,o.attr)(e,"class","mondrian__surface-3PSuzl")},m(t,a){(0,o.insert)(t,e,a);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,null);n=!0},p(t,[n]){3&n&&(s=(0,o.ensure_array_like)(t[1].children),(0,o.group_outros)(),i=(0,o.update_keyed_each)(i,n,r,1,t,s,a,e,o.outro_and_destroy_block,Ft,null,Ot),(0,o.check_outros)())},i(t){if(!n){for(let t=0;t<s.length;t+=1)(0,o.transition_in)(i[t]);n=!0}},o(t){for(let t=0;t<i.length;t+=1)(0,o.transition_out)(i[t]);n=!1},d(t){t&&(0,o.detach)(e);for(let t=0;t<i.length;t+=1)i[t].d()}}}function Vt(t,e,n){let i,a,{item:s}=e,{Item:r=ie}=e;const l=$t.get(s.id);return(0,o.component_subscribe)(t,l,(t=>n(4,a=t))),t.$$set=t=>{"item"in t&&n(3,s=t.item),"Item"in t&&n(0,r=t.Item)},t.$$.update=()=>{24&t.$$.dirty&&n(1,i=s.states[a])},[r,i,l,s,a]}(new CSSStyleSheet).insertRule(`:root { ${Kt.join("; ")} }`);class Gt extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,Vt,Qt,o.safe_not_equal,{item:3,Item:0},Yt)}}const te=Gt;function ee(t){let e,n;return e=new Tt({props:{item:t[2],idx:t[0],isRoot:t[1],ItemComponent:t[3]}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,[n]){const o={};4&n&&(o.item=t[2]),1&n&&(o.idx=t[0]),2&n&&(o.isRoot=t[1]),8&n&&(o.ItemComponent=t[3]),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function ne(t,e,n){let i,a,s;(0,o.component_subscribe)(t,ct,(t=>n(5,s=t)));let{itemId:r}=e,{idx:d=0}=e,{isRoot:c=!1}=e;return t.$$set=t=>{"itemId"in t&&n(4,r=t.itemId),"idx"in t&&n(0,d=t.idx),"isRoot"in t&&n(1,c=t.isRoot)},t.$$.update=()=>{48&t.$$.dirty&&n(2,i=s.items[r]),4&t.$$.dirty&&n(3,a=(t=>({image:()=>l,text:()=>gt,group:()=>te,shape:()=>null}[t.type]()))(i))},[d,c,i,a,r,s]}class oe extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,ne,ee,o.safe_not_equal,{itemId:4,idx:0,isRoot:1})}}const ie=oe;n(209);const ae={shift:!1,meta:!1,alt:!1,key:void 0,target:void 0,get combo(){return[ae.meta&&"Meta",ae.alt&&"Alt",ae.shift&&"Shift",ae.key].filter(Boolean).join("+")}},se=((0,dt.readable)(ae,(t=>{return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n)};function e(t){"Shift"===t.key?ae.shift=!0:"Alt"===t.key?ae.alt=!0:"Meta"===t.key?ae.meta=!0:ae.key=t.key,ae.target=t.target,o()}function n(t){"Shift"===t.key?ae.shift=!1:"Alt"===t.key?ae.alt=!1:"Meta"===t.key?ae.meta=!1:ae.key=void 0,ae.target=t.target,o()}function o(){t(ae)}})),{down:!1,downX:-1,downY:-1,target:void 0,x:-1,y:-1}),re=((0,dt.readable)(se,(t=>{return window.addEventListener("mousedown",e),window.addEventListener("mousemove",o),window.addEventListener("mouseup",n),function(){window.removeEventListener("mousedown",e),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",n)};function e(t){se.down=!0,se.downX=se.x=t.clientX,se.downY=se.y=t.clientY,se.target=t.target,i()}function n(){se.down=!1,se.downX=se.x=se.downY=se.y=-1,se.target=void 0,i()}function o(t){se.x=t.x,se.y=t.y,i()}function i(){t(se)}})),"mondrian-suspense");function le(t){(0,o.append_styles)(t,"svelte-1ooljvd",".mondrian__suspense-3tgPBN.mondrian__--loading-3irTkJ{visibility:hidden}")}n(967);const de=t=>({isLoading:1&t}),ce=t=>({isLoading:t[0]});function ue(t){let e,n;const i=t[2].default,a=(0,o.create_slot)(i,t,t[1],ce);return{c(){e=(0,o.element)("div"),a&&a.c(),(0,o.attr)(e,"class","mondrian__suspense-3tgPBN"),(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},m(t,i){(0,o.insert)(t,e,i),a&&a.m(e,null),n=!0},p(t,[s]){a&&a.p&&(!n||3&s)&&(0,o.update_slot_base)(a,i,t,t[1],n?(0,o.get_slot_changes)(i,t[1],s,de):(0,o.get_all_dirty_from_scope)(t[1]),ce),(!n||1&s)&&(0,o.toggle_class)(e,"mondrian__--loading-3irTkJ",t[0])},i(t){n||((0,o.transition_in)(a,t),n=!0)},o(t){(0,o.transition_out)(a,t),n=!1},d(t){t&&(0,o.detach)(e),a&&a.d(t)}}}function me(t,e,n){let{$$slots:o={},$$scope:i}=e;const a=function(){const t=new Set;return(0,ft.setContext)(re,t),t}();let s=!0;return(0,ft.onMount)((()=>{Promise.all(a).then((()=>{n(0,s=!1)}))})),t.$$set=t=>{"$$scope"in t&&n(1,i=t.$$scope)},[s,i,o]}class pe extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,me,ue,o.safe_not_equal,{},le)}}const _e=pe;function ge(t){(0,o.append_styles)(t,"svelte-17aeaja",".mondrian__preview-6C87Qc{display:flex;position:relative;z-index:0}")}function fe(t){let e,n;return e=new _e({props:{$$slots:{default:[$e]},$$scope:{ctx:t}}}),{c(){(0,o.create_component)(e.$$.fragment)},m(t,i){(0,o.mount_component)(e,t,i),n=!0},p(t,n){const o={};259&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||((0,o.transition_in)(e.$$.fragment,t),n=!0)},o(t){(0,o.transition_out)(e.$$.fragment,t),n=!1},d(t){(0,o.destroy_component)(e,t)}}}function he(t){let e;return{c(){e=(0,o.element)("div"),e.textContent="Block could not be loaded"},m(t,n){(0,o.insert)(t,e,n)},p:o.noop,i:o.noop,o:o.noop,d(t){t&&(0,o.detach)(e)}}}function $e(t){let e,n,i;return n=new ie({props:{itemId:t[7].id,isRoot:!0}}),{c(){e=(0,o.element)("div"),(0,o.create_component)(n.$$.fragment),(0,o.attr)(e,"class","mondrian__preview-6C87Qc")},m(t,a){(0,o.insert)(t,e,a),(0,o.mount_component)(n,e,null),i=!0},p(t,e){const o={};3&e&&(o.itemId=t[7].id),n.$set(o)},i(t){i||((0,o.transition_in)(n.$$.fragment,t),i=!0)},o(t){(0,o.transition_out)(n.$$.fragment,t),i=!1},d(t){t&&(0,o.detach)(e),(0,o.destroy_component)(n)}}}function ye(t){let e,n,i,a;const s=[he,fe],r=[];function l(t,e){return void 0===t[2]||void 0===t[0]?0:1}function d(t,e){return 1===e?function(t){const e=t.slice(),n=e[1][e[0]];return e[7]=n,e}(t):t}return e=l(t),n=r[e]=s[e](d(t,e)),{c(){n.c(),i=(0,o.empty)()},m(t,n){r[e].m(t,n),(0,o.insert)(t,i,n),a=!0},p(t,[a]){let c=e;e=l(t),e===c?r[e].p(d(t,e),a):((0,o.group_outros)(),(0,o.transition_out)(r[c],1,1,(()=>{r[c]=null})),(0,o.check_outros)(),n=r[e],n?n.p(d(t,e),a):(n=r[e]=s[e](d(t,e)),n.c()),(0,o.transition_in)(n,1),n.m(i.parentNode,i))},i(t){a||((0,o.transition_in)(n),a=!0)},o(t){(0,o.transition_out)(n),a=!1},d(t){t&&(0,o.detach)(i),r[e].d(t)}}}function be(t,e,n){let i,a,s,{manifest:r}=e,{blockumentId:l}=e;const d=Symbol("LearnComponent");(0,ft.onDestroy)((()=>{ct.removeManifest(d)})),(0,ft.setContext)("isLearn",!0);const c=(0,dt.writable)();return(0,o.component_subscribe)(t,c,(t=>n(5,s=t))),t.$$set=t=>{"manifest"in t&&n(3,r=t.manifest),"blockumentId"in t&&n(4,l=t.blockumentId)},t.$$.update=()=>{8&t.$$.dirty&&ct.addManifest(d,r),24&t.$$.dirty&&(0,o.set_store_value)(c,s=r.blockuments?.[l],s),8&t.$$.dirty&&n(1,i=r.items??{}),32&t.$$.dirty&&n(0,a=s?.children[0]?.id)},[a,i,c,r,l,s]}class ve extends o.SvelteComponent{constructor(t){super(),(0,o.init)(this,t,be,ye,o.safe_not_equal,{manifest:3,blockumentId:4},ge)}}const we=ve;var xe=n(428),Ze=n.n(xe);const Ae=((t,e={},n="div")=>o=>{const i=(0,xe.useRef)(null),a=(0,xe.useRef)(null),[s,r]=(0,xe.useState)(!1);return(0,xe.useEffect)((()=>{const e=/on([A-Z]{1,}[a-zA-Z]*)/,n=/watch([A-Z]{1,}[a-zA-Z]*)/;a.current=new t({target:i.current,props:o});const s=[];for(const t in o){const i=t.match(e),r=t.match(n);null!=i&&"function"==typeof o[t]&&a.current.$on(`${i[1][0].toLowerCase()}${i[1].slice(1)}`,o[t]),null!=r&&"function"==typeof o[t]&&s.push([`${r[1][0].toLowerCase()}${r[1].slice(1)}`,o[t]])}if(s.length>0){const t=a.current.$$.update;a.current.$$.update=function(){s.forEach((([t,e])=>{if(null!==a.current){const n=a.current.$$.props[t];e(a.current.$$.ctx[n])}})),t.apply(null)}}return()=>{null!==a.current&&a.current.$destroy()}}),[o]),(0,xe.useEffect)((()=>{s?null!==a.current&&a.current.$set(o):r(!0)}),[o,s]),Ze().createElement(n,{ref:i,style:e})})(we),Pe=t=>Ze().createElement(Ae,{...t})}}]);
//# sourceMappingURL=4361d658.js.map
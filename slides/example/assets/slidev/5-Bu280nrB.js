import{d as f,t as v,a0 as m,o as y,b as A,e as s,m as D,H as d,g,y as w,f as b,i as C,h as F,r as E,aA as x,c as T,k as e,l as k,a6 as t,aa as $,q as O,s as j,p as S,a as R}from"../modules/vue-nCsmiZeU.js";import{a0 as W,_ as I,a1 as _}from"../index-C7GYBrvO.js";import{_ as z}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-B03IFYt-.js";import{p as P,u as U,f as M}from"./context-DoY2EGAA.js";import"../monaco/bundled-types-D5NoDRcq.js";import"../modules/file-saver-igGfcqei.js";import"../modules/shiki-3gNTLD-0.js";import"../modules/unplugin-icons-BnCH8ItJ.js";function B(a){return a.startsWith("/")?"/slides/example/"+a.slice(1):a}function N(a,o=!1,n="cover"){const h=a&&(a[0]==="#"||a.startsWith("rgb")),p={background:h?a:void 0,color:a&&!h?"white":void 0,backgroundImage:h?void 0:a?o?`linear-gradient(#0005, #0008), url(${B(a)})`:`url("${B(a)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:n};return p.background||delete p.background,p}const V=["width","height"],G=["id"],H=["fill"],X=["id"],q=["fill"],L=["x1","y1","x2","y2","stroke","stroke-width","marker-end","marker-start"],Y=["x1","y1","x2","y2"],J=f({__name:"Arrow",props:{x1:{},y1:{},x2:{},y2:{},width:{},color:{},twoWay:{type:Boolean}},emits:["dblclick","clickOutside"],setup(a,{emit:o}){const n=o,h=W(),p={markerUnits:"strokeWidth",markerHeight:7,refY:3.5,orient:"auto"},c=v();return m(c,()=>n("clickOutside")),(l,r)=>(y(),A("svg",{class:"absolute left-0 top-0",width:Math.max(+l.x1,+l.x2)+50,height:Math.max(+l.y1,+l.y2)+50},[s("defs",null,[s("marker",D({id:d(h),markerWidth:"10",refX:"9"},p),[s("polygon",{points:"0 0, 10 3.5, 0 7",fill:l.color||"currentColor",onDblclick:r[0]||(r[0]=u=>n("dblclick"))},null,40,H)],16,G),l.twoWay?(y(),A("marker",D({key:0,id:`${d(h)}-rev`,markerWidth:"20",refX:"11"},p),[s("polygon",{points:"20 0, 10 3.5, 20 7",fill:l.color||"currentColor",onDblclick:r[1]||(r[1]=u=>n("dblclick"))},null,40,q)],16,X)):g("v-if",!0)]),s("line",{x1:l.x1,y1:l.y1,x2:l.x2,y2:l.y2,stroke:l.color||"currentColor","stroke-width":l.width||2,"marker-end":`url(#${d(h)})`,"marker-start":l.twoWay?`url(#${d(h)}-rev)`:"none",onDblclick:r[2]||(r[2]=u=>n("dblclick"))},null,40,L),s("line",{ref_key:"clickArea",ref:c,x1:l.x1,y1:l.y1,x2:l.x2,y2:l.y2,stroke:"transparent","stroke-linecap":"round","stroke-width":20,onDblclick:r[3]||(r[3]=u=>n("dblclick"))},null,40,Y)],8,V))}}),K={class:"grid grid-cols-2 w-full h-full auto-rows-fr"},Q=f({__name:"image-right",props:{image:{type:String},class:{type:String},backgroundSize:{type:String,default:"cover"}},setup(a){const o=a,n=w(()=>N(o.image,!1,o.backgroundSize));return(h,p)=>(y(),A("div",K,[s("div",{class:C(["slidev-layout default",o.class])},[b(h.$slots,"default")],2),s("div",{class:"w-full h-full",style:F(n.value)},null,4)]))}}),i=a=>(S("data-v-23b5fcd1"),a=a(),R(),a),Z=i(()=>s("h1",null,"Code",-1)),ss=i(()=>s("p",null,[t("Use code snippets and get the highlighting directly, and even types hover!"),s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")])],-1)),is={class:"shiki shiki-themes vitesse-dark vitesse-light twoslash lsp slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},ts={class:"language-ts"},as=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// TwoSlash enables TypeScript hover information")],-1)),hs=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// and errors in markdown code blocks")],-1)),ls=i(()=>s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// More at https://shiki.style/packages/twoslash")],-1)),es=i(()=>s("span",{class:"line"},null,-1)),ks={class:"line"},ns=i(()=>s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import",-1)),ps=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {",-1)),os=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),rs={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ds=i(()=>s("span",null,"computed",-1)),cs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    <"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"options"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">, "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"): "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"WritableComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])])])],-1)),gs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",",-1)),ys=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),us={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},As=i(()=>s("span",null,"ref",-1)),Ds=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"):"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"UnwrapRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)),_s=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }",-1)),Bs=i(()=>s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from",-1)),fs=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '",-1)),vs=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"vue",-1)),ms=i(()=>s("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'",-1)),ws=i(()=>s("span",{class:"line"},null,-1)),bs={class:"line"},Cs=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),Fs={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Es=i(()=>s("span",null,"count",-1)),xs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Ts=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),$s=i(()=>s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),Os={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},js=i(()=>s("span",null,"ref",-1)),Ss=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"UnwrapRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,[t(`Takes an inner value and returns a reactive and mutable ref object, which
has a single property `),s("code",null,".value"),t(" that points to the inner value.")])]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"value"),t("  - The object to wrap in the ref.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#ref"},"https://vuejs.org/api/reactivity-core.html#ref")])])])],-1)),Rs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(",-1)),Ws=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"0",-1)),Is=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1)),zs={class:"line"},Ps=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const ",-1)),Us={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Ms=i(()=>s("span",null,"doubled",-1)),Ns=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),Vs=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),Gs=i(()=>s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ",-1)),Hs={style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},Xs=i(()=>s("span",null,"computed",-1)),qs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"getter"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"ComputedGetter"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">,"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," debugOptions"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"?:"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," DebuggerOptions"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"+"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," overload"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),s("div",{class:"twoslash-popup-docs vp-doc"},[s("p",null,`Takes a getter function and returns a readonly reactive ref object for the
returned value from the getter. It can also take an object with get and set
functions to create a writable ref object.`)]),s("div",{class:"twoslash-popup-docs twoslash-popup-docs-tags vp-doc"},[s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@example"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a readonly computed ref:")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 2")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"++"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // error")])])])]),t(`
`),s("code",null,[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Creating a writable computed ref:")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," computed"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"({")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  get"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," +"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"  set"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"val"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"    count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," val"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," -"),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"  }")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"})")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"plusOne"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 1")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"console"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"log"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," // 0")])])])])])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"getter"),t("  - Function that produces the next value.")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@param"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("code",null,"debugOptions"),t("  - For debugging. See "),s("a",{href:"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"},"https://vuejs.org/guide/extras/reactivity-in-depth.html#computed-debugging"),t(".")])]),s("span",{class:"twoslash-popup-docs-tag"},[s("span",{class:"twoslash-popup-docs-tag-name"},"@see"),s("span",{class:"twoslash-popup-docs-tag-value"},[s("a",{href:"https://vuejs.org/api/reactivity-core.html#computed"},"https://vuejs.org/api/reactivity-core.html#computed")])])])],-1)),Ls=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(()",-1)),Ys=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>",-1)),Js=i(()=>s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ",-1)),Ks={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},Qs=i(()=>s("span",null,"count",-1)),Zs=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"count"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),si=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),ii={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},ti=i(()=>s("span",null,"value",-1)),ai=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"Ref"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">."),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},": "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"number")])],-1)),hi=i(()=>s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," * ",-1)),li=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}},"2",-1)),ei=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")",-1)),ki=i(()=>s("span",{class:"line"},null,-1)),ni={class:"line"},pi={style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},oi=i(()=>s("span",null,"doubled",-1)),ri=i(()=>s("span",{class:"twoslash-popup-container vp-copy-ignore"},[s("code",{class:"twoslash-popup-code"},[s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"const "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"doubled"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"ComputedRef"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])],-1)),di=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},".",-1)),ci=i(()=>s("span",{class:"twoslash-error"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"value")],-1)),gi=i(()=>s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =",-1)),yi=i(()=>s("span",{style:{"--shiki-dark":"#4C9A91","--shiki-light":"#2F798A"}}," 2",-1)),ui=i(()=>s("div",{class:"twoslash-meta-line twoslash-error-line vp-copy-ignore"},"Cannot assign to 'value' because it is a read-only property.",-1)),Ai=i(()=>s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-ts"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Inside ./snippets/external.ts")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"export"),s("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," function"),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," emptyArray"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"length"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"number"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"  return"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," Array"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),s("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"from"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"T"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">({ "),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"length"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," })")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")])])],-1)),Di=i(()=>s("hr",{class:"footnotes-sep"},null,-1)),_i=i(()=>s("section",{class:"footnotes"},[s("ol",{class:"footnotes-list"},[s("li",{id:"fn1",class:"footnote-item"},[s("p",null,[s("a",{href:"https://sli.dev/guide/syntax.html#line-highlighting",target:"_blank"},"Learn More"),t(),s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎")])])])],-1)),Bi={__name:"5",setup(a){return P(_),U(),(o,n)=>{const h=E("v-menu"),p=z,c=J,l=x("click");return y(),T(Q,O(j(d(M)(d(_),4))),{default:e(()=>[Z,ss,k(p,D({},{ranges:["all","5","7","7-8","10","all"]}),{default:e(()=>[s("pre",is,[s("code",ts,[as,t(`
`),hs,t(`
`),ls,t(`
`),es,t(`
`),s("span",ks,[ns,ps,os,s("span",rs,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[cs]),default:e(()=>[ds]),_:1})]),gs,ys,s("span",us,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[Ds]),default:e(()=>[As]),_:1})]),_s,Bs,fs,vs,ms]),t(`
`),ws,t(`
`),s("span",bs,[Cs,s("span",Fs,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[xs]),default:e(()=>[Es]),_:1})]),Ts,$s,s("span",Os,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[Ss]),default:e(()=>[js]),_:1})]),Rs,Ws,Is]),t(`
`),s("span",zs,[Ps,s("span",Us,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[Ns]),default:e(()=>[Ms]),_:1})]),Vs,Gs,s("span",Hs,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[qs]),default:e(()=>[Xs]),_:1})]),Ls,Ys,Js,s("span",Ks,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[Zs]),default:e(()=>[Qs]),_:1})]),si,s("span",ii,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[ai]),default:e(()=>[ti]),_:1})]),hi,li,ei]),t(`
`),ki,t(`
`),s("span",ni,[s("span",pi,[k(h,{class:"twoslash-hover","popper-class":"shiki twoslash-floating vp-copy-ignore vp-code",theme:"twoslash"},{popper:e(({})=>[ri]),default:e(()=>[oi]),_:1})]),di,ci,gi,yi]),ui])])]),_:1},16),$(k(c,{x1:"350",y1:"310",x2:"195",y2:"334",color:"#953",width:"2",arrowSize:"1"},null,512),[[l,[4,5]]]),g(" This allow you to embed external code blocks "),Ai,g(" Footer "),g(" Inline style "),Di,_i]),_:1},16)}}},xi=I(Bi,[["__scopeId","data-v-23b5fcd1"]]);export{xi as default};

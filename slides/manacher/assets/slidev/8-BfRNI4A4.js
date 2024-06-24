import{o as n,c as e,k as m,q as c,s as i,A as l,e as s,a6 as a}from"../modules/vue-BFIo-QU7.js";import{I as r}from"./default-BaoO3QWZ.js";import{ag as t}from"../index-CGKd4rHN.js";import{p,u as o,f as h}from"./context-BGX8wYJc.js";import"../modules/shiki-Bi32zl8E.js";const u=s("h3",null,"Manacher算法流程",-1),g=s("p",null,[a("回文覆盖最右边界"),s("em",null,"r"),a("、回文中心"),s("em",null,"c")],-1),x=s("p",null,[a("现在假设我们要对下一个 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a(" 计算 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"s[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" ，此时之前所有"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"s[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(" 的值已计算完毕。我们将通过下列方式计算：")],-1),d=s("ul",null,[s("li",null,[s("strong",null,"如果"),a(),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i"),s("mo",null,"≤"),s("mi",null,"r")]),s("annotation",{encoding:"application/x-tex"},"i \\leq r")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7955em","vertical-align":"-0.136em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"≤"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"r")])])]),a("， 则尝试通过已经计算出的"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"s[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a(", 加速当前"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"s"),s("mo",{stretchy:"false"},"["),s("mi",null,"i"),s("mo",{stretchy:"false"},"]")]),s("annotation",{encoding:"application/x-tex"},"s[i]")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mopen"},"["),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mclose"},"]")])])]),a("的计算")]),s("li",null,[a("首先计算出对称点的下标 当前下标"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"i")]),s("annotation",{encoding:"application/x-tex"},"i")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i")])])]),a("与其对称点（假设为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x")]),s("annotation",{encoding:"application/x-tex"},"x")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"x")])])]),a("）关于当前回文中心 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"c")]),s("annotation",{encoding:"application/x-tex"},"c")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"c")])])]),a(" 对称")]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"x"),s("mo",null,"+"),s("mi",null,"i"),s("mo",null,"="),s("mn",null,"2"),s("mo",null,"∗"),s("mi",null,"c"),s("mo",{separator:"true"},","),s("mi",null,"x"),s("mo",null,"="),s("mn",null,"2"),s("mo",null,"∗"),s("mi",null,"c"),s("mo",null,"−"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"x+i=2*c, x=2*c-1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6595em"}}),s("span",{class:"mord mathnormal"},"i"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mpunct"},","),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord mathnormal"},"x"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"∗"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"mord mathnormal"},"c"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])])])],-1),v={__name:"8",setup(w){return p(t),o(),(y,k)=>(n(),e(r,c(i(l(h)(l(t),7))),{default:m(()=>[u,g,x,d]),_:1},16))}};export{v as default};

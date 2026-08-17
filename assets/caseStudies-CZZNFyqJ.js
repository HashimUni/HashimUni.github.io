import{r as a,R as S}from"./index-B3AHUGiC.js";/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=(...t)=>t.filter((e,s,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===s).join(" ").trim();/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,s,r)=>r?r.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t=>{const e=x(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},C=a.createContext({}),L=()=>a.useContext(C),N=a.forwardRef(({color:t,size:e,strokeWidth:s,absoluteStrokeWidth:r,className:o="",children:i,iconNode:m,...c},g)=>{const{size:n=24,strokeWidth:u=2,absoluteStrokeWidth:f=!1,color:y="currentColor",className:w=""}=L()??{},b=r??f?Number(s??u)*24/Number(e??n):s??u;return a.createElement("svg",{ref:g,...l,width:e??n??l.width,height:e??n??l.height,stroke:t??y,strokeWidth:b,className:p("lucide",w,o),...!i&&!I(c)&&{"aria-hidden":"true"},...c},[...m.map(([v,A])=>a.createElement(v,A)),...Array.isArray(i)?i:[i]])});/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(t,e)=>{const s=a.forwardRef(({className:r,...o},i)=>a.createElement(N,{ref:i,iconNode:e,className:p(`lucide-${k(d(t))}`,`lucide-${t}`,r),...o}));return s.displayName=d(t),s};/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],z=h("briefcase",R);/**
 * @license lucide-react v1.26.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],j=h("calendar",G),q=()=>{const[t,e]=a.useState(!1);return a.useEffect(()=>{const s=()=>e(document.body.classList.contains("light"));s();const r=new MutationObserver(s);return r.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>r.disconnect()},[]),t},P=[{slug:"rezlens",title:"Building RezLens: A Free AI Resume Analyzer",excerpt:"How I built a production-grade AI resume analyzer with zero infrastructure cost, migrated from Vite to Next.js 16, and shipped it live — all as a solo developer.",coverImage:S,projectType:"AI SaaS",industry:"Career Technology",role:"Solo Full-Stack Developer",timeline:"2026",status:"Live",problem:"Job seekers need instant, actionable feedback on their resumes — but professional resume review services are expensive ($150–$500) and slow. Existing free tools offer superficial checks that miss ATS compatibility, keyword gaps, and content quality issues.",solution:"Built RezLens, a free AI-powered resume analyzer that uses Groq AI and Google Gemini to evaluate resumes across ATS compatibility, content quality, tone, and keyword optimization — returning a score out of 100 in under a minute.",challenges:[{title:"Building free AI infrastructure",description:"Large Language Model APIs are expensive. I needed an architecture that could deliver meaningful AI analysis while keeping infrastructure costs at exactly zero."},{title:"PDF export reliability",description:"Parsing PDF resumes reliably across varying layouts, fonts, and encodings required a robust pipeline that could handle edge cases without failing silently."},{title:"Choosing serverless architecture",description:"I committed to a serverless-first approach on Netlify. This meant working within cold-start constraints, 10-second function timeouts, and designing stateless analysis functions."},{title:"Migrating Vite → Next.js for SEO",description:"The original prototype was a Vite SPA with poor SEO. Migrating 22 pages to Next.js App Router mid-project required careful planning to avoid breaking existing functionality."}],techStack:["Next.js","TypeScript","Tailwind CSS","Supabase","Groq AI","Google Gemini","Netlify","GSAP","Radix UI","PostgreSQL","Deno"],results:[{metric:"Pages migrated",value:"~22 pages to Next.js 16"},{metric:"Cost",value:"Very minimal infrastructure cost"}],lessonsLearned:"Serverless-first architecture works remarkably well for AI applications when you design around the constraints. The biggest unlock was using Groq AI for fast inference combined with Netlify edge functions for zero cold-start critical paths. The migration from Vite to Next.js was painful but absolutely necessary — SEO traffic from blog posts now drives the majority of new user acquisition.",sections:[{type:"narrative",title:"The Idea",content:"RezLens started as a simple observation: every job seeker I knew was sending out resumes blindly, hoping they were good enough. The few who paid for professional reviews got better results — but most couldn't afford $200 for a single resume review. I wanted to build something that made professional-grade resume feedback free and instant."},{type:"architecture-diagram",title:"System Architecture",content:"AI pipeline from upload to analysis across Netlify serverless functions, Groq AI inference, and Supabase persistence.",data:{nodes:["Resume PDF Upload","Netlify Function (PDF parse)","Groq AI (analysis)","Google Gemini (fallback)","Supabase (storage + auth)","Results delivered to user"]}},{type:"timeline",title:"Migration Journey",content:"The 3-phase migration from Vite SPA to Next.js App Router.",data:{phases:[{name:"Phase 1",description:"Wrap Vite app in Next.js shell — routes, layouts, shared components"},{name:"Phase 2",description:"Migrate pages one-by-one to App Router — 22 pages"},{name:"Phase 3",description:"Add SSR for blog, dynamic OG images, and structured data for SEO"}]}},{type:"challenge",title:"Building Free AI Infrastructure",content:"The central challenge was cost. Each resume analysis requires sending the full extracted text to an LLM — that's 2–8k tokens per request. With Groq AI's competitive pricing, each analysis costs roughly $0.001. For 1000 analyses, that's $1. I paired Groq with Google Gemini as a fallback to ensure uptime without depending on a single provider. Edge functions handle the pre-processing so the main analysis function stays within Netlify's 10-second timeout."},{type:"solution",title:"Serverless + Multi-Model AI",content:"The architecture uses a fan-out pattern: the user uploads a PDF, a Netlify function extracts the text, then fans out to both Groq and Gemini in parallel. The first response wins, the other is discarded. This gives us sub-3-second analysis times with built-in redundancy. All user data and scores are persisted in Supabase with Row Level Security so each user only sees their own analyses."},{type:"tech-stack",title:"Why Each Technology",content:"Every piece of the stack was chosen deliberately.",data:{technologies:[{name:"Next.js",why:"App Router for SEO, React Server Components for performance"},{name:"Supabase",why:"Free tier PostgreSQL + auth + real-time subscriptions"},{name:"Groq AI",why:"Fastest inference speeds for LLM analysis under $0"},{name:"Netlify",why:"Generous free tier, edge functions, serverless functions"}]}},{type:"metrics",title:"Results & Impact",content:"Key metrics from the RezLens launch.",data:{metrics:[{label:"Infra cost",value:"Very minimal"},{label:"Pages migrated",value:"~22"}]}}],seoTitle:"Building RezLens — AI Resume Analyzer Case Study",seoDescription:"How a solo developer built RezLens, a free AI resume analyzer, using Next.js, Groq AI, Supabase, and Netlify — with very minimal infrastructure cost.",publishedAt:"2026"}],E=t=>P.find(e=>e.slug===t);export{z as B,j as C,P as a,h as c,E as g,q as u};

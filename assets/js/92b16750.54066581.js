"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6858],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),d=o,f=l["".concat(c,".").concat(d)]||l[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Token para integra\xe7\xe3o",s={unversionedId:"token-acess/token-integration",id:"token-acess/token-integration",title:"Token para integra\xe7\xe3o",description:"POST /api/memberArea/generateToken - FORMATO DA REQUISI\xc7\xc3O",source:"@site/docs/token-acess/token-integration.md",sourceDirName:"token-acess",slug:"/token-acess/token-integration",permalink:"/documentation/docs/token-acess/token-integration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/token-acess/token-integration.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},c={},p=[],u={toc:p},l="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-para-integra\xe7\xe3o"},"Token para integra\xe7\xe3o"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"POST /api/memberArea/generateToken - FORMATO DA REQUISI\xc7\xc3O")),(0,o.kt)("p",null,"Esta rota retorna um token que permite um usu\xe1rio acessar os endpoints de integra\xe7\xe3o da \xc1rea de Membros."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "email": "string",\n  "password": "string"\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Para usar as demais rotas da abmexmembers \xe9 necess\xe1rio gerar um novo token. \u2192 ",(0,o.kt)("a",{parentName:"p",href:"token-auth"},"Token de autentica\xe7\xe3o"))))}m.isMDXComponent=!0}}]);
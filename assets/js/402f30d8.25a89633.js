"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[351],{3905:function(t,e,n){n.d(e,{Zo:function(){return o},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),N=d(n),u=r,s=N["".concat(m,".").concat(u)]||N[u]||k[u]||i;return n?a.createElement(s,l(l({ref:e},o),{},{components:n})):a.createElement(s,l({ref:e},o))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=N;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},4976:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return m},metadata:function(){return d},toc:function(){return o},default:function(){return N}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],p={sidebar_label:"SDK - API",sidebar_position:1},m="API & WebSocket",d={unversionedId:"api/sdk-api",id:"api/sdk-api",isDocsHomePage:!1,title:"API & WebSocket",description:"API user get list item",source:"@site/docs/api/sdk-api.md",sourceDirName:"api",slug:"/api/sdk-api",permalink:"/docs/api/sdk-api",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/sdk-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"SDK - API",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"iOS",permalink:"/docs/sdk/ios"},next:{title:"SDK - Websocket",permalink:"/docs/api/sdk-websocket"}},o=[{value:"API user get list item",id:"api-user-get-list-item",children:[]}],k={toc:o};function N(t){var e=t.components,n=(0,r.Z)(t,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"api--websocket"},"API & WebSocket"),(0,i.kt)("h2",{id:"api-user-get-list-item"},"API user get list item"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Version: ",(0,i.kt)("inlineCode",{parentName:"p"},"1"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Endpoint: ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/user/{user_address}/game/{game_address}/items"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Method: ",(0,i.kt)("inlineCode",{parentName:"p"},"GET"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Query:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Require?"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"offset")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Offset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"limit")),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Limit number item to get"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Headers:"),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Require?"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-User-Signature")),(0,i.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"right"},'Sign(keccak256("chainverse")) with user private key')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"X-Signature-Ethers")),(0,i.kt)("td",{parentName:"tr",align:"center"},"[x]"),(0,i.kt)("td",{parentName:"tr",align:"right"},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Signature with ethers prefix?"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response: ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON Object")),(0,i.kt)("table",{parentName:"li"},(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"right"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Status of request")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"error_code")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Error code")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"message")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Response message")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"total")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Total user item")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"offset")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Offset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"limit")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Limit number item to get")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"items")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Array Object")),(0,i.kt)("td",{parentName:"tr",align:"right"},"List item")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"items"),".",(0,i.kt)("inlineCode",{parentName:"td"},"item_id")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Item Id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"items"),".",(0,i.kt)("inlineCode",{parentName:"td"},"category_id")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"Number")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Category Id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"items"),".",(0,i.kt)("inlineCode",{parentName:"td"},"game_address")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Game address")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"items"),".",(0,i.kt)("inlineCode",{parentName:"td"},"attributes")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"right"},"Item attributes")))))))}N.isMDXComponent=!0}}]);
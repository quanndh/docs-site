"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75],{3905:function(e,n,t){t.d(n,{Zo:function(){return h},kt:function(){return p}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),d=l(t),p=i,m=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return t?r.createElement(m,a(a({ref:n},h),{},{components:t})):r.createElement(m,a({ref:n},h))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9299:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return d}});var r=t(7462),i=t(3366),o=(t(7294),t(3905)),a=["components"],c={sidebar_label:"V\xed",sidebar_position:2},s="V\xed",l={unversionedId:"sdk/android/wallet",id:"sdk/android/wallet",isDocsHomePage:!1,title:"V\xed",description:"1. H\xe0m showConnectView",source:"@site/docs/sdk/android/wallet.md",sourceDirName:"sdk/android",slug:"/sdk/android/wallet",permalink:"/docs/sdk/android/wallet",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/sdk/android/wallet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"V\xed",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"T\u1ed5ng Quan",permalink:"/docs/sdk/android/over-view"},next:{title:"Items",permalink:"/docs/sdk/android/items"}},h=[{value:"1. H\xe0m showConnectView",id:"1-h\xe0m-showconnectview",children:[]},{value:"2. H\xe0m connectWithChainverse",id:"2-h\xe0m-connectwithchainverse",children:[]},{value:"3. H\xe0m showConnectWalletView",id:"3-h\xe0m-showconnectwalletview",children:[]},{value:"4. H\xe0m logout",id:"4-h\xe0m-logout",children:[]},{value:"5. H\xe0m h\u1ee9ng data \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed Chainverse",id:"5-h\xe0m-h\u1ee9ng-data-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-t\u1eeb-v\xed-chainverse",children:[]},{value:"6. H\xe0m setKeepConnect (Tu\u1ef3 ch\u1ecdn)",id:"6-h\xe0m-setkeepconnect-tu\u1ef3-ch\u1ecdn",children:[]},{value:"7. H\xe0m setScheme",id:"7-h\xe0m-setscheme",children:[]},{value:"8. H\xe0m getUser",id:"8-h\xe0m-getuser",children:[]},{value:"9. H\xe0m isUserConnected",id:"9-h\xe0m-isuserconnected",children:[]},{value:"10. H\xe0m getVersion",id:"10-h\xe0m-getversion",children:[]}],u={toc:h};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"v\xed"},"V\xed"),(0,o.kt)("h2",{id:"1-h\xe0m-showconnectview"},"1. H\xe0m showConnectView"),(0,o.kt)("p",null,"H\xe0m n\xe0y hi\u1ec3n th\u1ecb m\xe0n h\xecnh danh s\xe1ch c\xe1c v\xed \u0111\u1ec3 user l\u1ef1a ch\u1ecdn connect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().showConnectView();\n")),(0,o.kt)("h2",{id:"2-h\xe0m-connectwithchainverse"},"2. H\xe0m connectWithChainverse"),(0,o.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 k\u1ebft n\u1ed1i v\u1edbi v\xed Chainverse, m\xe0 kh\xf4ng c\u1ea7n hi\u1ec3n th\u1ecb giao di\u1ec7n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().connectWithChainverse();\n")),(0,o.kt)("h2",{id:"3-h\xe0m-showconnectwalletview"},"3. H\xe0m showConnectWalletView"),(0,o.kt)("p",null,"S\u1eed d\u1ee5ng h\xe0m n\xe0y \u0111\u1ec3 t\u1ea1o v\xed theo giao di\u1ec7n c\u1ee7a SDK."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().showConnectWalletView();\n")),(0,o.kt)("h2",{id:"4-h\xe0m-logout"},"4. H\xe0m logout"),(0,o.kt)("p",null,"G\u1ecdi h\xe0m n\xe0y \u0111\u1ec3 th\u1ef1c hi\u1ec7n logout. Th\xf4ng tin \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 qua callback ",(0,o.kt)("a",{parentName:"p",href:"/docs/sdk/android/over-view#4-callback-onlogout"},"onLogout")," ."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().logout();\n\n//Callback\n@Override\npublic void onLogout(String address) {\n            \n}\n")),(0,o.kt)("h2",{id:"5-h\xe0m-h\u1ee9ng-data-\u0111\u01b0\u1ee3c-tr\u1ea3-v\u1ec1-t\u1eeb-v\xed-chainverse"},"5. H\xe0m h\u1ee9ng data \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed Chainverse"),(0,o.kt)("p",null,"Khi connect th\xe0nh c\xf4ng v\u1edbi v\xed Chainverse. Chainverse s\u1ebd m\u1edf l\u1ea1i app/game th\xf4ng qua scheme (\u0111\xe3 khai b\xe1o \u1edf ph\u1ea7n Intergrate SDK). V\xec v\u1eady c\u1ea7n khai b\xe1o c\xe1c h\xe0m n\xe0y \u0111\u1ec3 Chainverse SDK x\u1eed l\xfd d\u1eef li\u1ec7u \u0111\u01b0\u1ee3c tr\u1ea3 v\u1ec1 t\u1eeb v\xed Chainverse."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().onNewIntent(intent);\n")),(0,o.kt)("p",null,"Khai b\xe1o trong h\xe0m onNewIntent c\u1ee7a Activity"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"@Override\nprotected void onNewIntent(Intent intent) {\n    super.onNewIntent(intent);\n    // getIntent() should always return the most recent\n    setIntent(intent);\n    ChainverseSDK.getInstance().onNewIntent(intent);\n}\n")),(0,o.kt)("h2",{id:"6-h\xe0m-setkeepconnect-tu\u1ef3-ch\u1ecdn"},"6. H\xe0m setKeepConnect (Tu\u1ef3 ch\u1ecdn)"),(0,o.kt)("p",null,"H\xe0m n\xe0y tu\u1ef3 ch\u1ecdn thi\u1ebft l\u1eadp tr\u1ea1ng th\xe1i gi\u1eef connect v\u1edbi v\xed Chainverse (Khi v\xe0o l\u1ea1i app kh\xf4ng c\u1ea7n ph\u1ea3i k\u1ebft n\u1ed1i l\u1ea1i v\xed)"),(0,o.kt)("p",null,"true : Gi\u1eef tr\u1ea1ng th\xe1i keep connect.\nfalse: Kh\xf4ng gi\u1eef tr\u1ea1ng th\xe1i keep connect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().setKeepConnect(true);\n")),(0,o.kt)("h2",{id:"7-h\xe0m-setscheme"},"7. H\xe0m setScheme"),(0,o.kt)("p",null,"\u0110\u1ec3 config khi connect v\u1edbi v\xed Chainverse (V\xed Chainverse s\u1ebd m\u1edf l\u1ea1i app th\xf4ng qua config n\xe0y)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'ChainverseSDK.getInstance().setScheme("your-app-scheme://");\n')),(0,o.kt)("h2",{id:"8-h\xe0m-getuser"},"8. H\xe0m getUser"),(0,o.kt)("p",null,"Tr\u1ea3 v\u1ec1 th\xf4ng tin c\u1ee7a user bao g\u1ed3m : address v\xe0 signature"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseUser info = ChainverseSDK.getInstance().getUser();\ninfo.getAddress();\ninfo.getSignature();\n")),(0,o.kt)("h2",{id:"9-h\xe0m-isuserconnected"},"9. H\xe0m isUserConnected"),(0,o.kt)("p",null,"Ki\u1ec3m tra tr\u1ea1ng th\xe1i connect v\xed c\u1ee7a user. Tr\u1ea3 v\u1ec1 boolean"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"boolean isConnect = ChainverseSDK.getInstance().isUserConnected()\n")),(0,o.kt)("h2",{id:"10-h\xe0m-getversion"},"10. H\xe0m getVersion"),(0,o.kt)("p",null,"Tr\u1ea3 v\u1ec1 version c\u1ee7a SDK"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ChainverseSDK.getInstance().getVersion();\n")))}d.isMDXComponent=!0}}]);
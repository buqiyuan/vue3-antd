(window.webpackJsonp=window.webpackJsonp||[]).push([["dashboard-welcome"],{"112a":function(e,t,n){e.exports=n.p+"img/analysis.d9040b65.svg"},4360:function(e,t,n){},"47ef":function(e,t,n){"use strict";n("4360")},d6cc:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=n("112a"),r=n.n(a),c=Object(o.withScopeId)("data-v-42d575be");Object(o.pushScopeId)("data-v-42d575be");var i={class:"box"},l=Object(o.createVNode)("img",{src:r.a},null,-1);Object(o.popScopeId)();var s=c((function(e,t,n,a,r,s){var d=Object(o.resolveComponent)("a-descriptions-item"),u=Object(o.resolveComponent)("a-badge"),g=Object(o.resolveComponent)("a-descriptions");return Object(o.openBlock)(),Object(o.createBlock)("div",null,[Object(o.createVNode)("div",i,[l,Object(o.createVNode)(g,{title:"系统信息",bordered:""},{default:c((function(){return[Object(o.createVNode)(d,{key:"IP",label:"IP"},{default:c((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e.userInfo.IP),1)]})),_:1}),(Object(o.openBlock)(!0),Object(o.createBlock)(o.Fragment,null,Object(o.renderList)(e.browserInfo,(function(e,t){return Object(o.openBlock)(),Object(o.createBlock)(d,{key:t,label:t},{default:c((function(){return[Object(o.createTextVNode)(Object(o.toDisplayString)(e),1)]})),_:2},1032,["label"])})),128)),Object(o.createVNode)(d,{label:"网络状态"},{default:c((function(){return[Object(o.createVNode)(u,{status:e.online?"processing":"default",text:e.online?"在线":"离线"},null,8,["status","text"])]})),_:1})]})),_:1})])])})),d=n("ade3"),u=(n("bffa"),n("6634")),g=(n("4a96"),n("a071")),b=(n("b0c0"),n("f00c"),n("a9e3"),n("f014")),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},p=n("b3f0");function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){f(e,t,n[t])}))}return e}({},e,t.attrs);return o.createVNode(p.a,o.mergeProps(n,{icon:w}),null)};m.displayName="EditOutlined",m.inheritAttrs=!1;var O=m,v=n("8c5e"),j=n("8f4c"),h=n("3835");n("ac1f"),n("466d"),n("5319"),n("d3b7"),n("25f0"),n("4ec9"),n("3ca3"),n("ddb0");var k,y=n("a4ee"),_=n("a9d9"),x=n("0613"),I=Object(o.defineComponent)({name:"Welcome",components:(k={HuaweiCharge:j.default},Object(d.a)(k,g.a.name,g.a),Object(d.a)(k,u.a.name,u.a),Object(d.a)(k,u.a.Item.name,u.a.Item),Object(d.a)(k,"SettingOutlined",b.a),Object(d.a)(k,"EditOutlined",O),Object(d.a)(k,"EllipsisOutlined",v.a),k),setup:function(){var e=Object(x.c)().getters["user/userInfo"],t=Object(_.a)().online,n=Object(y.a)(),a=n.battery,r=n.batteryStatus,c=n.calcDischargingTime,i=Object(o.ref)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=navigator.userAgent.toLowerCase(),n=function(e){return e.test(t)},o=function(e){var n;return null===(n=t.match(e))||void 0===n?void 0:n.toString().replace(/[^0-9|_.]/g,"").replace(/_/g,".")},a=new Map([[n(/windows|win32|win64|wow32|wow64/g),"windows"],[n(/macintosh|macintel/g),"macos"],[n(/x11/g),"linux"],[n(/android|adr/g),"android"],[n(/ios|iphone|ipad|ipod|iwatch/g),"ios"]]).get(!0)||"unknow",r=new Map([["windows",new Map([[n(/windows nt 5.0|windows 2000/g),"2000"],[n(/windows nt 5.1|windows xp/g),"xp"],[n(/windows nt 5.2|windows 2003/g),"2003"],[n(/windows nt 6.0|windows vista/g),"vista"],[n(/windows nt 6.1|windows 7/g),"7"],[n(/windows nt 6.2|windows 8/g),"8"],[n(/windows nt 6.3|windows 8.1/g),"8.1"],[n(/windows nt 10.0|windows 10/g),"10"]]).get(!0)],["macos",o(/os x [\d._]+/g)],["android",o(/android [\d._]+/g)],["ios",o(/os [\d._]+/g)]]).get(a)||"unknow",c="unknow";"windows"===a||"macos"===a||"linux"===a?c="desktop":("android"===a||"ios"===a||n(/mobile/g))&&(c="mobile");var i=new Map([[n(/applewebkit/g),["webkit",new Map([[n(/safari/g),"safari"],[n(/chrome/g),"chrome"],[n(/opr/g),"opera"],[n(/edge/g),"edge"]]).get(!0)]||!1],[n(/gecko/g)&&n(/firefox/g),["gecko","firefox"]],[n(/presto/g),["presto","opera"]],[n(/trident|compatible|msie/g),["trident","iexplore"]]]).get(!0)||["unknow","unknow"],l=Object(h.a)(i,2),s=l[0],d=void 0===s?"unknow":s,u=l[1],g=void 0===u?"unknow":u,b=new Map([["webkit",o(/applewebkit\/[\d._]+/g)],["gecko",o(/gecko\/[\d._]+/g)],["presto",o(/presto\/[\d._]+/g)],["trident",o(/trident\/[\d._]+/g)]]).get(d)||"unknow",w=new Map([["firefox",o(/firefox\/[\d._]+/g)],["opera",o(/opr\/[\d._]+/g)],["iexplore",o(/(msie [\d._]+)|(rv:[\d._]+)/g)],["edge",o(/edge\/[\d._]+/g)],["safari",o(/version\/[\d._]+/g)],["chrome",o(/chrome\/[\d._]+/g)]]).get(g)||"unknow",p=new Map([[n(/micromessenger/g),["wechat",o(/micromessenger\/[\d._]+/g)]],[n(/qqbrowser/g),["qq",o(/qqbrowser\/[\d._]+/g)]],[n(/ucbrowser/g),["uc",o(/ucbrowser\/[\d._]+/g)]],[n(/qihu 360se/g),["360","unknow"]],[n(/2345explorer/g),["2345",o(/2345explorer\/[\d._]+/g)]],[n(/metasr/g),["sougou","unknow"]],[n(/lbbrowser/g),["liebao","unknow"]],[n(/maxthon/g),["maxthon",o(/maxthon\/[\d._]+/g)]]]).get(!0)||["none","unknow"],f=Object(h.a)(p,2),m=f[0],O=void 0===m?"none":m,v=f[1],j=void 0===v?"unknow":v;return{"zh-cn":Object.assign({"内核":d,"内核版本":b,"平台":c,"载体":g,"载体版本":w,"系统":a,"系统版本":r},"none"===O?{}:{"外壳":O,"外壳版本":j}),en:Object.assign({engine:d,engineVs:b,platform:c,supporter:g,supporterVs:w,system:a,systemVs:r},"none"===O?{}:{shell:O,shellVs:j})}[e]}("zh-cn"));return Object(o.watchEffect)((function(){Object.assign(i.value,{"距离电池充满需要":Number.isFinite(a.value.chargingTime)&&0!=a.value.chargingTime?c.value:"未知","剩余可使用时间":Number.isFinite(a.value.dischargingTime)&&0!=a.value.dischargingTime?c.value:"未知","电池状态":r.value,"当前电量":a.value.level+"%"})})),{userInfo:e,browserInfo:i,online:t,battery:a,batteryStatus:r,calcDischargingTime:c}}});n("47ef"),I.render=s,I.__scopeId="data-v-42d575be",t.default=I},f014:function(e,t,n){"use strict";var o=n("7a23"),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z"}}]},name:"setting",theme:"outlined"},r=n("b3f0");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){c(e,t,n[t])}))}return e}({},e,t.attrs);return o.createVNode(r.a,o.mergeProps(n,{icon:a}),null)};i.displayName="SettingOutlined",i.inheritAttrs=!1,t.a=i}}]);
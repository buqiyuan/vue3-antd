(window.webpackJsonp=window.webpackJsonp||[]).push([["a-custom-modal-index-vue","a-custom-modal-useModal"],{"22d9":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),l={ref:"modalRootRef",class:"ant-modal-root custom-modal"},c={class:"ant-modal-mask"},r={key:0,ref:"modalWrapRef",class:"ant-modal-wrap"},a={ref:"dragRef",class:"ant-modal"},i={class:"ant-modal-content"},s={ref:"titleRef",class:"ant-modal-header"},u={class:"ant-modal-title"},d={class:"ant-modal-operate"},f={ref:"minRef",type:"button",class:"min",title:"最小化"},m={ref:"maxRef",type:"button",class:"max",title:"最大化"},v={ref:"revertRef",type:"button",class:"revert",title:"还原"},b={ref:"resizeLRef",class:"resizeL"},p={ref:"resizeTRef",class:"resizeT"},O={ref:"resizeRRef",class:"resizeR"},j={ref:"resizeBRef",class:"resizeB"},y={ref:"resizeLTRef",class:"resizeLT"},h={ref:"resizeTRRef",class:"resizeTR"},g={ref:"resizeBRRef",class:"resizeBR"},x={ref:"resizeLBRef",class:"resizeLB"},R={ref:"modalBody",class:"ant-modal-body"},N=Object(n.createTextVNode)(" ① 窗口可以拖动；"),V=Object(n.createVNode)("br",null,null,-1),k=Object(n.createTextVNode)(" ② 窗口可以通过八个方向改变大小；"),T=Object(n.createVNode)("br",null,null,-1),w=Object(n.createTextVNode)(" ③ 窗口可以最小化、最大化、还原、关闭；"),L=Object(n.createVNode)("br",null,null,-1),z=Object(n.createTextVNode)(" ④ 限制窗口最小宽度/高度。 "),B={key:0,ref:"modalFooter",class:"ant-modal-footer"},E=Object(n.createTextVNode)("取 消"),C=Object(n.createTextVNode)("确 认"),M=o("8e1b"),_=o("b548"),H=Object(n.defineComponent)({name:"ACustomModal",components:{Transition:M.Transition},props:{title:{type:String,default:"标题"},visible:{type:Boolean,default:!1},destroyOnClose:{type:Boolean,default:!1},footer:{type:[String],default:"I am footer"},confirmLoading:{type:Boolean,default:!1},centered:{type:Boolean,default:!1}},emits:["update:visible"],setup:function(e,t){return Object(_.default)(e,t)}});o("5eda"),H.render=function(e,t,o,M,_,H){var W=Object(n.resolveComponent)("a-button");return e.destroyOnClose&&!e.visible?(Object(n.openBlock)(),Object(n.createBlock)(n.Fragment,{key:0},[],64)):(Object(n.openBlock)(),Object(n.createBlock)(n.Teleport,{key:1,to:"body"},[Object(n.createVNode)("div",l,[Object(n.createVNode)(n.Transition,Object(n.mergeProps)({key:"mask"},e.maskTransitionProps),{default:Object(n.withCtx)((function(){return[Object(n.withDirectives)(Object(n.createVNode)("div",c,null,512),[[n.vShow,e.visible]])]})),_:1},16),Object(n.createVNode)(n.Transition,Object(n.mergeProps)({key:"dialog"},e.dialogTransitionProps),{default:Object(n.withCtx)((function(){return[e.visible?(Object(n.openBlock)(),Object(n.createBlock)("div",r,[Object(n.createVNode)("div",a,[Object(n.createVNode)("div",i,[Object(n.createVNode)("div",s,[Object(n.createVNode)("span",u,Object(n.toDisplayString)(e.title),1),Object(n.createVNode)("div",d,[Object(n.createVNode)("button",f,null,512),Object(n.createVNode)("button",m,null,512),Object(n.createVNode)("button",v,null,512),Object(n.createVNode)("button",{type:"button",class:"close",title:"关闭",onClick:t[1]||(t[1]=function(){return e.closeModal&&e.closeModal.apply(e,arguments)})})])],512),Object(n.createVNode)("div",b,null,512),Object(n.createVNode)("div",p,null,512),Object(n.createVNode)("div",O,null,512),Object(n.createVNode)("div",j,null,512),Object(n.createVNode)("div",y,null,512),Object(n.createVNode)("div",h,null,512),Object(n.createVNode)("div",g,null,512),Object(n.createVNode)("div",x,null,512),Object(n.createVNode)("div",R,[Object(n.renderSlot)(e.$slots,"default",{},(function(){return[N,V,k,T,w,L,z]}))],512),null!=e.footer?(Object(n.openBlock)(),Object(n.createBlock)("div",B,[Object(n.renderSlot)(e.$slots,"footer",{},(function(){return[Object(n.createVNode)("div",null,[Object(n.createVNode)(W,{onClick:e.closeModal},{default:Object(n.withCtx)((function(){return[E]})),_:1},8,["onClick"]),Object(n.createVNode)(W,{type:"primary",loading:e.confirmLoading,onClick:e.closeModal},{default:Object(n.withCtx)((function(){return[C]})),_:1},8,["loading","onClick"])])]}))],512)):Object(n.createCommentVNode)("",!0)])],512)],512)):Object(n.createCommentVNode)("",!0)]})),_:3},16)],512)]))},t.default=H},"4ea4":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},"5eda":function(e,t,o){"use strict";o("ac47")},a559:function(e,t){function o(){return e.exports=o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,o.apply(this,arguments)}e.exports=o,e.exports.default=e.exports,e.exports.__esModule=!0},ac47:function(e,t,o){},b548:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return r})),o("99af");var n=o("7a23"),l=o("8e1b"),c=o("7303");function r(e,t){var o=t.emit,r=(t.attrs,Object(n.ref)(null)),a=Object(n.ref)(null),i=Object(n.ref)(null),s=Object(n.ref)(null),u=Object(n.ref)(null),d=Object(n.ref)(null),f=Object(n.ref)(null),m=Object(n.ref)(null),v=Object(n.ref)(null),b=Object(n.ref)(null),p=Object(n.ref)(null),O=Object(n.ref)(null),j=Object(n.ref)(null),y=Object(n.ref)(null),h=Object(n.ref)(null),g=Object(n.ref)(null),x={x:0,y:0},R=function(e){return Object.assign(x,{x:e.pageX,y:e.pageY})};document.documentElement.addEventListener("click",R,!0);var N,V,k,T,w,L=Object(l.getTransitionProps)("fade"),z=Object(l.getTransitionProps)("zoom",{onAfterLeave:function(){return o("update:visible",!1)}}),B=0;function E(e,t,o,n,l,c){t.onmousedown=function(r){var a=r.clientX-t.offsetLeft,s=r.clientY-t.offsetTop,u=e.offsetTop,d=e.offsetLeft,f=e.offsetWidth,m=e.offsetHeight,v=function(r){var v=r.clientX-a,b=r.clientY-s,p=document.documentElement.clientWidth-e.offsetLeft-2,O=document.documentElement.clientHeight-e.offsetTop-2,j=o?f-v:t.offsetWidth+v,y=n?m-b:t.offsetHeight+b;return o&&(e.style.left=d+v+"px"),n&&(e.style.top=u+b+"px"),j<400&&(j=400),j>p&&(j=p),l||(i.value.style.width=j+"px"),y<140&&(y=140),y>O&&(y=O),c||(i.value.style.height=y-B-w+"px"),(o&&400==j||n&&140==y)&&(document.onmousemove=null),(o||n)&&(document.onmousemove=null),!1};return document.addEventListener("mousemove",v),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",v),document.removeEventListener("mouseup",e)})),!1}}var C=function(){var t,o,n;t=r.value,o=u.value,n=0,(o=o||t).style.cursor="move",o.onmousedown=function(e){n=e.clientX-t.offsetLeft;var o=e.clientY-t.offsetTop,l=function(e){var l=e.clientX-n,c=e.clientY-o,r=document.documentElement.clientWidth-t.offsetWidth,a=document.documentElement.clientHeight-t.offsetHeight;return l<=0&&(l=0),c<=0&&(c=0),l>=r&&(l=r),c>=a&&(c=a),t.style.left=l+"px",t.style.top=c+"px",!1};return document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function e(){document.removeEventListener("mousemove",l),document.removeEventListener("mouseup",e)})),!1},h.value.onclick=function(){var e=getComputedStyle(t),o=e.left,n=e.top,l=getComputedStyle(i.value),c=l.width,r=l.height;N=c,V=r,k=o,T=n,t.style.top=t.style.left=0,t.style.width=document.documentElement.clientWidth-2+"px",t.style.height=document.documentElement.clientHeight-2+"px",i.value.style.width=t.style.width,i.value.style.height=parseFloat(t.style.height)-w-B+"px",this.style.display="none",g.value.style.display="block"},g.value.onclick=function(){i.value.style.height=V,i.value.style.width=N,t.style.width=t.style.height="unset",t.style.left=k,t.style.top=T,this.style.display="none",h.value.style.display="block"},E(r.value,b.value,!0,!0,!1,!1),E(r.value,p.value,!1,!0,!1,!1),E(r.value,O.value,!1,!1,!1,!1),E(r.value,j.value,!0,!1,!1,!1),E(r.value,d.value,!0,!1,!1,!0),E(r.value,f.value,!1,!0,!0,!1),E(r.value,m.value,!1,!1,!1,!0),E(r.value,v.value,!1,!1,!0,!1),r.value.style.left=(document.documentElement.clientWidth-r.value.offsetWidth)/2+"px",r.value.style.top=e.centered?(document.documentElement.clientHeight-r.value.offsetHeight)/2+"px":"100px";var l=r.value.getBoundingClientRect(),c=l.left,s=l.top,y=x.x,R=x.y;a.value.style.transformOrigin="".concat(y-c,"px ").concat(R-s,"px")},M=Object(c.a)(C,30);return Object(n.onMounted)((function(){Object(n.watch)((function(){return e.visible}),(function(e){e&&(Object(n.nextTick)((function(){var e,t;w=(null===(e=u.value)||void 0===e?void 0:e.offsetHeight)||0,B=(null===(t=s.value)||void 0===t?void 0:t.offsetHeight)||0,C()})),window.addEventListener("resize",M))}),{immediate:!0})})),Object(n.onBeforeUnmount)((function(){window.removeEventListener("resize",M),document.documentElement.removeEventListener("click",R,!0),M.cancel})),{dragRef:r,modalWrapRef:a,modalBody:i,modalFooter:s,titleRef:u,resizeLRef:d,resizeTRef:f,resizeRRef:m,resizeBRef:v,resizeLTRef:b,resizeTRRef:p,resizeBRRef:O,resizeLBRef:j,minRef:y,maxRef:h,revertRef:g,maskTransitionProps:L,dialogTransitionProps:z,closeModal:function(){o("update:visible",!1)}}}}}]);
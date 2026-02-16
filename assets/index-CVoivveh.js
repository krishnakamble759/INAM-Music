(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();var P="top",Y="bottom",V="right",$="left",gt="auto",ue=[P,Y,V,$],Na="start",ae="end",rr="clippingParents",Ki="viewport",Ga="popper",or="reference",fi=ue.reduce(function(t,a){return t.concat([a+"-"+Na,a+"-"+ae])},[]),Oi=[].concat(ue,[gt]).reduce(function(t,a){return t.concat([a,a+"-"+Na,a+"-"+ae])},[]),sr="beforeRead",hr="read",lr="afterRead",ur="beforeMain",dr="main",cr="afterMain",mr="beforeWrite",yr="write",gr="afterWrite",pr=[sr,hr,lr,ur,dr,cr,mr,yr,gr];function na(t){return t?(t.nodeName||"").toLowerCase():null}function J(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var a=t.ownerDocument;return a&&a.defaultView||window}return t}function Ia(t){var a=J(t).Element;return t instanceof a||t instanceof Element}function G(t){var a=J(t).HTMLElement;return t instanceof a||t instanceof HTMLElement}function Ni(t){if(typeof ShadowRoot>"u")return!1;var a=J(t).ShadowRoot;return t instanceof a||t instanceof ShadowRoot}function So(t){var a=t.state;Object.keys(a.elements).forEach(function(e){var i=a.styles[e]||{},r=a.attributes[e]||{},n=a.elements[e];!G(n)||!na(n)||(Object.assign(n.style,i),Object.keys(r).forEach(function(o){var s=r[o];s===!1?n.removeAttribute(o):n.setAttribute(o,s===!0?"":s)}))})}function Mo(t){var a=t.state,e={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,e.popper),a.styles=e,a.elements.arrow&&Object.assign(a.elements.arrow.style,e.arrow),function(){Object.keys(a.elements).forEach(function(i){var r=a.elements[i],n=a.attributes[i]||{},o=Object.keys(a.styles.hasOwnProperty(i)?a.styles[i]:e[i]),s=o.reduce(function(h,d){return h[d]="",h},{});!G(r)||!na(r)||(Object.assign(r.style,s),Object.keys(n).forEach(function(h){r.removeAttribute(h)}))})}}const kr={name:"applyStyles",enabled:!0,phase:"write",fn:So,effect:Mo,requires:["computeStyles"]};function ta(t){return t.split("-")[0]}var Ka=Math.max,et=Math.min,ee=Math.round;function bi(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function fr(){return!/^((?!chrome|android).)*safari/i.test(bi())}function te(t,a,e){a===void 0&&(a=!1),e===void 0&&(e=!1);var i=t.getBoundingClientRect(),r=1,n=1;a&&G(t)&&(r=t.offsetWidth>0&&ee(i.width)/t.offsetWidth||1,n=t.offsetHeight>0&&ee(i.height)/t.offsetHeight||1);var o=Ia(t)?J(t):window,s=o.visualViewport,h=!fr()&&e,d=(i.left+(h&&s?s.offsetLeft:0))/r,u=(i.top+(h&&s?s.offsetTop:0))/n,y=i.width/r,f=i.height/n;return{width:y,height:f,top:u,right:d+y,bottom:u+f,left:d,x:d,y:u}}function Ii(t){var a=te(t),e=t.offsetWidth,i=t.offsetHeight;return Math.abs(a.width-e)<=1&&(e=a.width),Math.abs(a.height-i)<=1&&(i=a.height),{x:t.offsetLeft,y:t.offsetTop,width:e,height:i}}function br(t,a){var e=a.getRootNode&&a.getRootNode();if(t.contains(a))return!0;if(e&&Ni(e)){var i=a;do{if(i&&t.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function ua(t){return J(t).getComputedStyle(t)}function Lo(t){return["table","td","th"].indexOf(na(t))>=0}function _a(t){return((Ia(t)?t.ownerDocument:t.document)||window.document).documentElement}function pt(t){return na(t)==="html"?t:t.assignedSlot||t.parentNode||(Ni(t)?t.host:null)||_a(t)}function nn(t){return!G(t)||ua(t).position==="fixed"?null:t.offsetParent}function Do(t){var a=/firefox/i.test(bi()),e=/Trident/i.test(bi());if(e&&G(t)){var i=ua(t);if(i.position==="fixed")return null}var r=pt(t);for(Ni(r)&&(r=r.host);G(r)&&["html","body"].indexOf(na(r))<0;){var n=ua(r);if(n.transform!=="none"||n.perspective!=="none"||n.contain==="paint"||["transform","perspective"].indexOf(n.willChange)!==-1||a&&n.willChange==="filter"||a&&n.filter&&n.filter!=="none")return r;r=r.parentNode}return null}function Ae(t){for(var a=J(t),e=nn(t);e&&Lo(e)&&ua(e).position==="static";)e=nn(e);return e&&(na(e)==="html"||na(e)==="body"&&ua(e).position==="static")?a:e||Do(t)||a}function Hi(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function _e(t,a,e){return Ka(t,et(a,e))}function Ko(t,a,e){var i=_e(t,a,e);return i>e?e:i}function _r(){return{top:0,right:0,bottom:0,left:0}}function vr(t){return Object.assign({},_r(),t)}function jr(t,a){return a.reduce(function(e,i){return e[i]=t,e},{})}var Oo=function(a,e){return a=typeof a=="function"?a(Object.assign({},e.rects,{placement:e.placement})):a,vr(typeof a!="number"?a:jr(a,ue))};function No(t){var a,e=t.state,i=t.name,r=t.options,n=e.elements.arrow,o=e.modifiersData.popperOffsets,s=ta(e.placement),h=Hi(s),d=[$,V].indexOf(s)>=0,u=d?"height":"width";if(!(!n||!o)){var y=Oo(r.padding,e),f=Ii(n),c=h==="y"?P:$,E=h==="y"?Y:V,g=e.rects.reference[u]+e.rects.reference[h]-o[h]-e.rects.popper[u],j=o[h]-e.rects.reference[h],_=Ae(n),b=_?h==="y"?_.clientHeight||0:_.clientWidth||0:0,v=g/2-j/2,p=y[c],A=b-f[u]-y[E],T=b/2-f[u]/2+v,S=_e(p,T,A),L=h;e.modifiersData[i]=(a={},a[L]=S,a.centerOffset=S-T,a)}}function Io(t){var a=t.state,e=t.options,i=e.element,r=i===void 0?"[data-popper-arrow]":i;r!=null&&(typeof r=="string"&&(r=a.elements.popper.querySelector(r),!r)||br(a.elements.popper,r)&&(a.elements.arrow=r))}const Er={name:"arrow",enabled:!0,phase:"main",fn:No,effect:Io,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ie(t){return t.split("-")[1]}var Ho={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Bo(t,a){var e=t.x,i=t.y,r=a.devicePixelRatio||1;return{x:ee(e*r)/r||0,y:ee(i*r)/r||0}}function rn(t){var a,e=t.popper,i=t.popperRect,r=t.placement,n=t.variation,o=t.offsets,s=t.position,h=t.gpuAcceleration,d=t.adaptive,u=t.roundOffsets,y=t.isFixed,f=o.x,c=f===void 0?0:f,E=o.y,g=E===void 0?0:E,j=typeof u=="function"?u({x:c,y:g}):{x:c,y:g};c=j.x,g=j.y;var _=o.hasOwnProperty("x"),b=o.hasOwnProperty("y"),v=$,p=P,A=window;if(d){var T=Ae(e),S="clientHeight",L="clientWidth";if(T===J(e)&&(T=_a(e),ua(T).position!=="static"&&s==="absolute"&&(S="scrollHeight",L="scrollWidth")),T=T,r===P||(r===$||r===V)&&n===ae){p=Y;var w=y&&T===A&&A.visualViewport?A.visualViewport.height:T[S];g-=w-i.height,g*=h?1:-1}if(r===$||(r===P||r===Y)&&n===ae){v=V;var D=y&&T===A&&A.visualViewport?A.visualViewport.width:T[L];c-=D-i.width,c*=h?1:-1}}var O=Object.assign({position:s},d&&Ho),X=u===!0?Bo({x:c,y:g},J(e)):{x:c,y:g};if(c=X.x,g=X.y,h){var I;return Object.assign({},O,(I={},I[p]=b?"0":"",I[v]=_?"0":"",I.transform=(A.devicePixelRatio||1)<=1?"translate("+c+"px, "+g+"px)":"translate3d("+c+"px, "+g+"px, 0)",I))}return Object.assign({},O,(a={},a[p]=b?g+"px":"",a[v]=_?c+"px":"",a.transform="",a))}function Po(t){var a=t.state,e=t.options,i=e.gpuAcceleration,r=i===void 0?!0:i,n=e.adaptive,o=n===void 0?!0:n,s=e.roundOffsets,h=s===void 0?!0:s,d={placement:ta(a.placement),variation:ie(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:r,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,rn(Object.assign({},d,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:o,roundOffsets:h})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,rn(Object.assign({},d,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:h})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const Ar={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Po,data:{}};var Ie={passive:!0};function $o(t){var a=t.state,e=t.instance,i=t.options,r=i.scroll,n=r===void 0?!0:r,o=i.resize,s=o===void 0?!0:o,h=J(a.elements.popper),d=[].concat(a.scrollParents.reference,a.scrollParents.popper);return n&&d.forEach(function(u){u.addEventListener("scroll",e.update,Ie)}),s&&h.addEventListener("resize",e.update,Ie),function(){n&&d.forEach(function(u){u.removeEventListener("scroll",e.update,Ie)}),s&&h.removeEventListener("resize",e.update,Ie)}}const Tr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:$o,data:{}};var Ro={left:"right",right:"left",bottom:"top",top:"bottom"};function Ue(t){return t.replace(/left|right|bottom|top/g,function(a){return Ro[a]})}var xo={start:"end",end:"start"};function on(t){return t.replace(/start|end/g,function(a){return xo[a]})}function Bi(t){var a=J(t),e=a.pageXOffset,i=a.pageYOffset;return{scrollLeft:e,scrollTop:i}}function Pi(t){return te(_a(t)).left+Bi(t).scrollLeft}function zo(t,a){var e=J(t),i=_a(t),r=e.visualViewport,n=i.clientWidth,o=i.clientHeight,s=0,h=0;if(r){n=r.width,o=r.height;var d=fr();(d||!d&&a==="fixed")&&(s=r.offsetLeft,h=r.offsetTop)}return{width:n,height:o,x:s+Pi(t),y:h}}function Yo(t){var a,e=_a(t),i=Bi(t),r=(a=t.ownerDocument)==null?void 0:a.body,n=Ka(e.scrollWidth,e.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),o=Ka(e.scrollHeight,e.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-i.scrollLeft+Pi(t),h=-i.scrollTop;return ua(r||e).direction==="rtl"&&(s+=Ka(e.clientWidth,r?r.clientWidth:0)-n),{width:n,height:o,x:s,y:h}}function $i(t){var a=ua(t),e=a.overflow,i=a.overflowX,r=a.overflowY;return/auto|scroll|overlay|hidden/.test(e+r+i)}function wr(t){return["html","body","#document"].indexOf(na(t))>=0?t.ownerDocument.body:G(t)&&$i(t)?t:wr(pt(t))}function ve(t,a){var e;a===void 0&&(a=[]);var i=wr(t),r=i===((e=t.ownerDocument)==null?void 0:e.body),n=J(i),o=r?[n].concat(n.visualViewport||[],$i(i)?i:[]):i,s=a.concat(o);return r?s:s.concat(ve(pt(o)))}function _i(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Vo(t,a){var e=te(t,!1,a==="fixed");return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function sn(t,a,e){return a===Ki?_i(zo(t,e)):Ia(a)?Vo(a,e):_i(Yo(_a(t)))}function Jo(t){var a=ve(pt(t)),e=["absolute","fixed"].indexOf(ua(t).position)>=0,i=e&&G(t)?Ae(t):t;return Ia(i)?a.filter(function(r){return Ia(r)&&br(r,i)&&na(r)!=="body"}):[]}function Fo(t,a,e,i){var r=a==="clippingParents"?Jo(t):[].concat(a),n=[].concat(r,[e]),o=n[0],s=n.reduce(function(h,d){var u=sn(t,d,i);return h.top=Ka(u.top,h.top),h.right=et(u.right,h.right),h.bottom=et(u.bottom,h.bottom),h.left=Ka(u.left,h.left),h},sn(t,o,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Cr(t){var a=t.reference,e=t.element,i=t.placement,r=i?ta(i):null,n=i?ie(i):null,o=a.x+a.width/2-e.width/2,s=a.y+a.height/2-e.height/2,h;switch(r){case P:h={x:o,y:a.y-e.height};break;case Y:h={x:o,y:a.y+a.height};break;case V:h={x:a.x+a.width,y:s};break;case $:h={x:a.x-e.width,y:s};break;default:h={x:a.x,y:a.y}}var d=r?Hi(r):null;if(d!=null){var u=d==="y"?"height":"width";switch(n){case Na:h[d]=h[d]-(a[u]/2-e[u]/2);break;case ae:h[d]=h[d]+(a[u]/2-e[u]/2);break}}return h}function ne(t,a){a===void 0&&(a={});var e=a,i=e.placement,r=i===void 0?t.placement:i,n=e.strategy,o=n===void 0?t.strategy:n,s=e.boundary,h=s===void 0?rr:s,d=e.rootBoundary,u=d===void 0?Ki:d,y=e.elementContext,f=y===void 0?Ga:y,c=e.altBoundary,E=c===void 0?!1:c,g=e.padding,j=g===void 0?0:g,_=vr(typeof j!="number"?j:jr(j,ue)),b=f===Ga?or:Ga,v=t.rects.popper,p=t.elements[E?b:f],A=Fo(Ia(p)?p:p.contextElement||_a(t.elements.popper),h,u,o),T=te(t.elements.reference),S=Cr({reference:T,element:v,placement:r}),L=_i(Object.assign({},v,S)),w=f===Ga?L:T,D={top:A.top-w.top+_.top,bottom:w.bottom-A.bottom+_.bottom,left:A.left-w.left+_.left,right:w.right-A.right+_.right},O=t.modifiersData.offset;if(f===Ga&&O){var X=O[r];Object.keys(D).forEach(function(I){var Ea=[V,Y].indexOf(I)>=0?1:-1,Aa=[P,Y].indexOf(I)>=0?"y":"x";D[I]+=X[Aa]*Ea})}return D}function Wo(t,a){a===void 0&&(a={});var e=a,i=e.placement,r=e.boundary,n=e.rootBoundary,o=e.padding,s=e.flipVariations,h=e.allowedAutoPlacements,d=h===void 0?Oi:h,u=ie(i),y=u?s?fi:fi.filter(function(E){return ie(E)===u}):ue,f=y.filter(function(E){return d.indexOf(E)>=0});f.length===0&&(f=y);var c=f.reduce(function(E,g){return E[g]=ne(t,{placement:g,boundary:r,rootBoundary:n,padding:o})[ta(g)],E},{});return Object.keys(c).sort(function(E,g){return c[E]-c[g]})}function Go(t){if(ta(t)===gt)return[];var a=Ue(t);return[on(t),a,on(a)]}function qo(t){var a=t.state,e=t.options,i=t.name;if(!a.modifiersData[i]._skip){for(var r=e.mainAxis,n=r===void 0?!0:r,o=e.altAxis,s=o===void 0?!0:o,h=e.fallbackPlacements,d=e.padding,u=e.boundary,y=e.rootBoundary,f=e.altBoundary,c=e.flipVariations,E=c===void 0?!0:c,g=e.allowedAutoPlacements,j=a.options.placement,_=ta(j),b=_===j,v=h||(b||!E?[Ue(j)]:Go(j)),p=[j].concat(v).reduce(function($a,ca){return $a.concat(ta(ca)===gt?Wo(a,{placement:ca,boundary:u,rootBoundary:y,padding:d,flipVariations:E,allowedAutoPlacements:g}):ca)},[]),A=a.rects.reference,T=a.rects.popper,S=new Map,L=!0,w=p[0],D=0;D<p.length;D++){var O=p[D],X=ta(O),I=ie(O)===Na,Ea=[P,Y].indexOf(X)>=0,Aa=Ea?"width":"height",x=ne(a,{placement:O,boundary:u,rootBoundary:y,altBoundary:f,padding:d}),Q=Ea?I?V:$:I?Y:P;A[Aa]>T[Aa]&&(Q=Ue(Q));var Le=Ue(Q),Ta=[];if(n&&Ta.push(x[X]<=0),s&&Ta.push(x[Q]<=0,x[Le]<=0),Ta.every(function($a){return $a})){w=O,L=!1;break}S.set(O,Ta)}if(L)for(var De=E?3:1,At=function(ca){var pe=p.find(function(Oe){var wa=S.get(Oe);if(wa)return wa.slice(0,ca).every(function(Tt){return Tt})});if(pe)return w=pe,"break"},ge=De;ge>0;ge--){var Ke=At(ge);if(Ke==="break")break}a.placement!==w&&(a.modifiersData[i]._skip=!0,a.placement=w,a.reset=!0)}}const Sr={name:"flip",enabled:!0,phase:"main",fn:qo,requiresIfExists:["offset"],data:{_skip:!1}};function hn(t,a,e){return e===void 0&&(e={x:0,y:0}),{top:t.top-a.height-e.y,right:t.right-a.width+e.x,bottom:t.bottom-a.height+e.y,left:t.left-a.width-e.x}}function ln(t){return[P,V,Y,$].some(function(a){return t[a]>=0})}function Uo(t){var a=t.state,e=t.name,i=a.rects.reference,r=a.rects.popper,n=a.modifiersData.preventOverflow,o=ne(a,{elementContext:"reference"}),s=ne(a,{altBoundary:!0}),h=hn(o,i),d=hn(s,r,n),u=ln(h),y=ln(d);a.modifiersData[e]={referenceClippingOffsets:h,popperEscapeOffsets:d,isReferenceHidden:u,hasPopperEscaped:y},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":y})}const Mr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Uo};function Zo(t,a,e){var i=ta(t),r=[$,P].indexOf(i)>=0?-1:1,n=typeof e=="function"?e(Object.assign({},a,{placement:t})):e,o=n[0],s=n[1];return o=o||0,s=(s||0)*r,[$,V].indexOf(i)>=0?{x:s,y:o}:{x:o,y:s}}function Xo(t){var a=t.state,e=t.options,i=t.name,r=e.offset,n=r===void 0?[0,0]:r,o=Oi.reduce(function(u,y){return u[y]=Zo(y,a.rects,n),u},{}),s=o[a.placement],h=s.x,d=s.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=h,a.modifiersData.popperOffsets.y+=d),a.modifiersData[i]=o}const Lr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Xo};function Qo(t){var a=t.state,e=t.name;a.modifiersData[e]=Cr({reference:a.rects.reference,element:a.rects.popper,placement:a.placement})}const Dr={name:"popperOffsets",enabled:!0,phase:"read",fn:Qo,data:{}};function as(t){return t==="x"?"y":"x"}function es(t){var a=t.state,e=t.options,i=t.name,r=e.mainAxis,n=r===void 0?!0:r,o=e.altAxis,s=o===void 0?!1:o,h=e.boundary,d=e.rootBoundary,u=e.altBoundary,y=e.padding,f=e.tether,c=f===void 0?!0:f,E=e.tetherOffset,g=E===void 0?0:E,j=ne(a,{boundary:h,rootBoundary:d,padding:y,altBoundary:u}),_=ta(a.placement),b=ie(a.placement),v=!b,p=Hi(_),A=as(p),T=a.modifiersData.popperOffsets,S=a.rects.reference,L=a.rects.popper,w=typeof g=="function"?g(Object.assign({},a.rects,{placement:a.placement})):g,D=typeof w=="number"?{mainAxis:w,altAxis:w}:Object.assign({mainAxis:0,altAxis:0},w),O=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,X={x:0,y:0};if(T){if(n){var I,Ea=p==="y"?P:$,Aa=p==="y"?Y:V,x=p==="y"?"height":"width",Q=T[p],Le=Q+j[Ea],Ta=Q-j[Aa],De=c?-L[x]/2:0,At=b===Na?S[x]:L[x],ge=b===Na?-L[x]:-S[x],Ke=a.elements.arrow,$a=c&&Ke?Ii(Ke):{width:0,height:0},ca=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:_r(),pe=ca[Ea],Oe=ca[Aa],wa=_e(0,S[x],$a[x]),Tt=v?S[x]/2-De-wa-pe-D.mainAxis:At-wa-pe-D.mainAxis,jo=v?-S[x]/2+De+wa+Oe+D.mainAxis:ge+wa+Oe+D.mainAxis,wt=a.elements.arrow&&Ae(a.elements.arrow),Eo=wt?p==="y"?wt.clientTop||0:wt.clientLeft||0:0,Gi=(I=O==null?void 0:O[p])!=null?I:0,Ao=Q+Tt-Gi-Eo,To=Q+jo-Gi,qi=_e(c?et(Le,Ao):Le,Q,c?Ka(Ta,To):Ta);T[p]=qi,X[p]=qi-Q}if(s){var Ui,wo=p==="x"?P:$,Co=p==="x"?Y:V,Ca=T[A],Ne=A==="y"?"height":"width",Zi=Ca+j[wo],Xi=Ca-j[Co],Ct=[P,$].indexOf(_)!==-1,Qi=(Ui=O==null?void 0:O[A])!=null?Ui:0,an=Ct?Zi:Ca-S[Ne]-L[Ne]-Qi+D.altAxis,en=Ct?Ca+S[Ne]+L[Ne]-Qi-D.altAxis:Xi,tn=c&&Ct?Ko(an,Ca,en):_e(c?an:Zi,Ca,c?en:Xi);T[A]=tn,X[A]=tn-Ca}a.modifiersData[i]=X}}const Kr={name:"preventOverflow",enabled:!0,phase:"main",fn:es,requiresIfExists:["offset"]};function ts(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function is(t){return t===J(t)||!G(t)?Bi(t):ts(t)}function ns(t){var a=t.getBoundingClientRect(),e=ee(a.width)/t.offsetWidth||1,i=ee(a.height)/t.offsetHeight||1;return e!==1||i!==1}function rs(t,a,e){e===void 0&&(e=!1);var i=G(a),r=G(a)&&ns(a),n=_a(a),o=te(t,r,e),s={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(i||!i&&!e)&&((na(a)!=="body"||$i(n))&&(s=is(a)),G(a)?(h=te(a,!0),h.x+=a.clientLeft,h.y+=a.clientTop):n&&(h.x=Pi(n))),{x:o.left+s.scrollLeft-h.x,y:o.top+s.scrollTop-h.y,width:o.width,height:o.height}}function os(t){var a=new Map,e=new Set,i=[];t.forEach(function(n){a.set(n.name,n)});function r(n){e.add(n.name);var o=[].concat(n.requires||[],n.requiresIfExists||[]);o.forEach(function(s){if(!e.has(s)){var h=a.get(s);h&&r(h)}}),i.push(n)}return t.forEach(function(n){e.has(n.name)||r(n)}),i}function ss(t){var a=os(t);return pr.reduce(function(e,i){return e.concat(a.filter(function(r){return r.phase===i}))},[])}function hs(t){var a;return function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(t())})})),a}}function ls(t){var a=t.reduce(function(e,i){var r=e[i.name];return e[i.name]=r?Object.assign({},r,i,{options:Object.assign({},r.options,i.options),data:Object.assign({},r.data,i.data)}):i,e},{});return Object.keys(a).map(function(e){return a[e]})}var un={placement:"bottom",modifiers:[],strategy:"absolute"};function dn(){for(var t=arguments.length,a=new Array(t),e=0;e<t;e++)a[e]=arguments[e];return!a.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Or(t){t===void 0&&(t={});var a=t,e=a.defaultModifiers,i=e===void 0?[]:e,r=a.defaultOptions,n=r===void 0?un:r;return function(s,h,d){d===void 0&&(d=n);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},un,n),modifiersData:{},elements:{reference:s,popper:h},attributes:{},styles:{}},y=[],f=!1,c={state:u,setOptions:function(_){var b=typeof _=="function"?_(u.options):_;g(),u.options=Object.assign({},n,u.options,b),u.scrollParents={reference:Ia(s)?ve(s):s.contextElement?ve(s.contextElement):[],popper:ve(h)};var v=ss(ls([].concat(i,u.options.modifiers)));return u.orderedModifiers=v.filter(function(p){return p.enabled}),E(),c.update()},forceUpdate:function(){if(!f){var _=u.elements,b=_.reference,v=_.popper;if(dn(b,v)){u.rects={reference:rs(b,Ae(v),u.options.strategy==="fixed"),popper:Ii(v)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(D){return u.modifiersData[D.name]=Object.assign({},D.data)});for(var p=0;p<u.orderedModifiers.length;p++){if(u.reset===!0){u.reset=!1,p=-1;continue}var A=u.orderedModifiers[p],T=A.fn,S=A.options,L=S===void 0?{}:S,w=A.name;typeof T=="function"&&(u=T({state:u,options:L,name:w,instance:c})||u)}}}},update:hs(function(){return new Promise(function(j){c.forceUpdate(),j(u)})}),destroy:function(){g(),f=!0}};if(!dn(s,h))return c;c.setOptions(d).then(function(j){!f&&d.onFirstUpdate&&d.onFirstUpdate(j)});function E(){u.orderedModifiers.forEach(function(j){var _=j.name,b=j.options,v=b===void 0?{}:b,p=j.effect;if(typeof p=="function"){var A=p({state:u,name:_,instance:c,options:v}),T=function(){};y.push(A||T)}})}function g(){y.forEach(function(j){return j()}),y=[]}return c}}var us=[Tr,Dr,Ar,kr,Lr,Sr,Kr,Er,Mr],Ri=Or({defaultModifiers:us});const Nr=Object.freeze(Object.defineProperty({__proto__:null,afterMain:cr,afterRead:lr,afterWrite:gr,applyStyles:kr,arrow:Er,auto:gt,basePlacements:ue,beforeMain:ur,beforeRead:sr,beforeWrite:mr,bottom:Y,clippingParents:rr,computeStyles:Ar,createPopper:Ri,detectOverflow:ne,end:ae,eventListeners:Tr,flip:Sr,hide:Mr,left:$,main:dr,modifierPhases:pr,offset:Lr,placements:Oi,popper:Ga,popperGenerator:Or,popperOffsets:Dr,preventOverflow:Kr,read:hr,reference:or,right:V,start:Na,top:P,variationPlacements:fi,viewport:Ki,write:yr},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const ma=new Map,St={set(t,a,e){ma.has(t)||ma.set(t,new Map);const i=ma.get(t);if(!i.has(a)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(a,e)},get(t,a){return ma.has(t)&&ma.get(t).get(a)||null},remove(t,a){if(!ma.has(t))return;const e=ma.get(t);e.delete(a),e.size===0&&ma.delete(t)}},ds=1e6,cs=1e3,vi="transitionend",Ir=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(a,e)=>`#${CSS.escape(e)}`)),t),ms=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),ys=t=>{do t+=Math.floor(Math.random()*ds);while(document.getElementById(t));return t},gs=t=>{if(!t)return 0;let{transitionDuration:a,transitionDelay:e}=window.getComputedStyle(t);const i=Number.parseFloat(a),r=Number.parseFloat(e);return!i&&!r?0:(a=a.split(",")[0],e=e.split(",")[0],(Number.parseFloat(a)+Number.parseFloat(e))*cs)},Hr=t=>{t.dispatchEvent(new Event(vi))},ha=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),pa=t=>ha(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(Ir(t)):null,de=t=>{if(!ha(t)||t.getClientRects().length===0)return!1;const a=getComputedStyle(t).getPropertyValue("visibility")==="visible",e=t.closest("details:not([open])");if(!e)return a;if(e!==t){const i=t.closest("summary");if(i&&i.parentNode!==e||i===null)return!1}return a},ka=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",Br=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const a=t.getRootNode();return a instanceof ShadowRoot?a:null}return t instanceof ShadowRoot?t:t.parentNode?Br(t.parentNode):null},tt=()=>{},Te=t=>{t.offsetHeight},Pr=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Mt=[],ps=t=>{document.readyState==="loading"?(Mt.length||document.addEventListener("DOMContentLoaded",()=>{for(const a of Mt)a()}),Mt.push(t)):t()},q=()=>document.documentElement.dir==="rtl",Z=t=>{ps(()=>{const a=Pr();if(a){const e=t.NAME,i=a.fn[e];a.fn[e]=t.jQueryInterface,a.fn[e].Constructor=t,a.fn[e].noConflict=()=>(a.fn[e]=i,t.jQueryInterface)}})},R=(t,a=[],e=t)=>typeof t=="function"?t.call(...a):e,$r=(t,a,e=!0)=>{if(!e){R(t);return}const r=gs(a)+5;let n=!1;const o=({target:s})=>{s===a&&(n=!0,a.removeEventListener(vi,o),R(t))};a.addEventListener(vi,o),setTimeout(()=>{n||Hr(a)},r)},xi=(t,a,e,i)=>{const r=t.length;let n=t.indexOf(a);return n===-1?!e&&i?t[r-1]:t[0]:(n+=e?1:-1,i&&(n=(n+r)%r),t[Math.max(0,Math.min(n,r-1))])},ks=/[^.]*(?=\..*)\.|.*/,fs=/\..*/,bs=/::\d+$/,Lt={};let cn=1;const Rr={mouseenter:"mouseover",mouseleave:"mouseout"},_s=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function xr(t,a){return a&&`${a}::${cn++}`||t.uidEvent||cn++}function zr(t){const a=xr(t);return t.uidEvent=a,Lt[a]=Lt[a]||{},Lt[a]}function vs(t,a){return function e(i){return zi(i,{delegateTarget:t}),e.oneOff&&l.off(t,i.type,a),a.apply(t,[i])}}function js(t,a,e){return function i(r){const n=t.querySelectorAll(a);for(let{target:o}=r;o&&o!==this;o=o.parentNode)for(const s of n)if(s===o)return zi(r,{delegateTarget:o}),i.oneOff&&l.off(t,r.type,a,e),e.apply(o,[r])}}function Yr(t,a,e=null){return Object.values(t).find(i=>i.callable===a&&i.delegationSelector===e)}function Vr(t,a,e){const i=typeof a=="string",r=i?e:a||e;let n=Jr(t);return _s.has(n)||(n=t),[i,r,n]}function mn(t,a,e,i,r){if(typeof a!="string"||!t)return;let[n,o,s]=Vr(a,e,i);a in Rr&&(o=(E=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return E.call(this,g)})(o));const h=zr(t),d=h[s]||(h[s]={}),u=Yr(d,o,n?e:null);if(u){u.oneOff=u.oneOff&&r;return}const y=xr(o,a.replace(ks,"")),f=n?js(t,e,o):vs(t,o);f.delegationSelector=n?e:null,f.callable=o,f.oneOff=r,f.uidEvent=y,d[y]=f,t.addEventListener(s,f,n)}function ji(t,a,e,i,r){const n=Yr(a[e],i,r);n&&(t.removeEventListener(e,n,!!r),delete a[e][n.uidEvent])}function Es(t,a,e,i){const r=a[e]||{};for(const[n,o]of Object.entries(r))n.includes(i)&&ji(t,a,e,o.callable,o.delegationSelector)}function Jr(t){return t=t.replace(fs,""),Rr[t]||t}const l={on(t,a,e,i){mn(t,a,e,i,!1)},one(t,a,e,i){mn(t,a,e,i,!0)},off(t,a,e,i){if(typeof a!="string"||!t)return;const[r,n,o]=Vr(a,e,i),s=o!==a,h=zr(t),d=h[o]||{},u=a.startsWith(".");if(typeof n<"u"){if(!Object.keys(d).length)return;ji(t,h,o,n,r?e:null);return}if(u)for(const y of Object.keys(h))Es(t,h,y,a.slice(1));for(const[y,f]of Object.entries(d)){const c=y.replace(bs,"");(!s||a.includes(c))&&ji(t,h,o,f.callable,f.delegationSelector)}},trigger(t,a,e){if(typeof a!="string"||!t)return null;const i=Pr(),r=Jr(a),n=a!==r;let o=null,s=!0,h=!0,d=!1;n&&i&&(o=i.Event(a,e),i(t).trigger(o),s=!o.isPropagationStopped(),h=!o.isImmediatePropagationStopped(),d=o.isDefaultPrevented());const u=zi(new Event(a,{bubbles:s,cancelable:!0}),e);return d&&u.preventDefault(),h&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function zi(t,a={}){for(const[e,i]of Object.entries(a))try{t[e]=i}catch{Object.defineProperty(t,e,{configurable:!0,get(){return i}})}return t}function yn(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function Dt(t){return t.replace(/[A-Z]/g,a=>`-${a.toLowerCase()}`)}const la={setDataAttribute(t,a,e){t.setAttribute(`data-bs-${Dt(a)}`,e)},removeDataAttribute(t,a){t.removeAttribute(`data-bs-${Dt(a)}`)},getDataAttributes(t){if(!t)return{};const a={},e=Object.keys(t.dataset).filter(i=>i.startsWith("bs")&&!i.startsWith("bsConfig"));for(const i of e){let r=i.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1),a[r]=yn(t.dataset[i])}return a},getDataAttribute(t,a){return yn(t.getAttribute(`data-bs-${Dt(a)}`))}};class we{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(a){return a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a}_mergeConfigObj(a,e){const i=ha(e)?la.getDataAttribute(e,"config"):{};return{...this.constructor.Default,...typeof i=="object"?i:{},...ha(e)?la.getDataAttributes(e):{},...typeof a=="object"?a:{}}}_typeCheckConfig(a,e=this.constructor.DefaultType){for(const[i,r]of Object.entries(e)){const n=a[i],o=ha(n)?"element":ms(n);if(!new RegExp(r).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${o}" but expected type "${r}".`)}}}const As="5.3.8";class aa extends we{constructor(a,e){super(),a=pa(a),a&&(this._element=a,this._config=this._getConfig(e),St.set(this._element,this.constructor.DATA_KEY,this))}dispose(){St.remove(this._element,this.constructor.DATA_KEY),l.off(this._element,this.constructor.EVENT_KEY);for(const a of Object.getOwnPropertyNames(this))this[a]=null}_queueCallback(a,e,i=!0){$r(a,e,i)}_getConfig(a){return a=this._mergeConfigObj(a,this._element),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}static getInstance(a){return St.get(pa(a),this.DATA_KEY)}static getOrCreateInstance(a,e={}){return this.getInstance(a)||new this(a,typeof e=="object"?e:null)}static get VERSION(){return As}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(a){return`${a}${this.EVENT_KEY}`}}const Kt=t=>{let a=t.getAttribute("data-bs-target");if(!a||a==="#"){let e=t.getAttribute("href");if(!e||!e.includes("#")&&!e.startsWith("."))return null;e.includes("#")&&!e.startsWith("#")&&(e=`#${e.split("#")[1]}`),a=e&&e!=="#"?e.trim():null}return a?a.split(",").map(e=>Ir(e)).join(","):null},m={find(t,a=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(a,t))},findOne(t,a=document.documentElement){return Element.prototype.querySelector.call(a,t)},children(t,a){return[].concat(...t.children).filter(e=>e.matches(a))},parents(t,a){const e=[];let i=t.parentNode.closest(a);for(;i;)e.push(i),i=i.parentNode.closest(a);return e},prev(t,a){let e=t.previousElementSibling;for(;e;){if(e.matches(a))return[e];e=e.previousElementSibling}return[]},next(t,a){let e=t.nextElementSibling;for(;e;){if(e.matches(a))return[e];e=e.nextElementSibling}return[]},focusableChildren(t){const a=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>`${e}:not([tabindex^="-"])`).join(",");return this.find(a,t).filter(e=>!ka(e)&&de(e))},getSelectorFromElement(t){const a=Kt(t);return a&&m.findOne(a)?a:null},getElementFromSelector(t){const a=Kt(t);return a?m.findOne(a):null},getMultipleElementsFromSelector(t){const a=Kt(t);return a?m.find(a):[]}},kt=(t,a="hide")=>{const e=`click.dismiss${t.EVENT_KEY}`,i=t.NAME;l.on(document,e,`[data-bs-dismiss="${i}"]`,function(r){if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),ka(this))return;const n=m.getElementFromSelector(this)||this.closest(`.${i}`);t.getOrCreateInstance(n)[a]()})},Ts="alert",ws="bs.alert",Fr=`.${ws}`,Cs=`close${Fr}`,Ss=`closed${Fr}`,Ms="fade",Ls="show";class ft extends aa{static get NAME(){return Ts}close(){if(l.trigger(this._element,Cs).defaultPrevented)return;this._element.classList.remove(Ls);const e=this._element.classList.contains(Ms);this._queueCallback(()=>this._destroyElement(),this._element,e)}_destroyElement(){this._element.remove(),l.trigger(this._element,Ss),this.dispose()}static jQueryInterface(a){return this.each(function(){const e=ft.getOrCreateInstance(this);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a](this)}})}}kt(ft,"close");Z(ft);const Ds="button",Ks="bs.button",Os=`.${Ks}`,Ns=".data-api",Is="active",gn='[data-bs-toggle="button"]',Hs=`click${Os}${Ns}`;class bt extends aa{static get NAME(){return Ds}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Is))}static jQueryInterface(a){return this.each(function(){const e=bt.getOrCreateInstance(this);a==="toggle"&&e[a]()})}}l.on(document,Hs,gn,t=>{t.preventDefault();const a=t.target.closest(gn);bt.getOrCreateInstance(a).toggle()});Z(bt);const Bs="swipe",ce=".bs.swipe",Ps=`touchstart${ce}`,$s=`touchmove${ce}`,Rs=`touchend${ce}`,xs=`pointerdown${ce}`,zs=`pointerup${ce}`,Ys="touch",Vs="pen",Js="pointer-event",Fs=40,Ws={endCallback:null,leftCallback:null,rightCallback:null},Gs={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class it extends we{constructor(a,e){super(),this._element=a,!(!a||!it.isSupported())&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return Ws}static get DefaultType(){return Gs}static get NAME(){return Bs}dispose(){l.off(this._element,ce)}_start(a){if(!this._supportPointerEvents){this._deltaX=a.touches[0].clientX;return}this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX)}_end(a){this._eventIsPointerPenTouch(a)&&(this._deltaX=a.clientX-this._deltaX),this._handleSwipe(),R(this._config.endCallback)}_move(a){this._deltaX=a.touches&&a.touches.length>1?0:a.touches[0].clientX-this._deltaX}_handleSwipe(){const a=Math.abs(this._deltaX);if(a<=Fs)return;const e=a/this._deltaX;this._deltaX=0,e&&R(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(l.on(this._element,xs,a=>this._start(a)),l.on(this._element,zs,a=>this._end(a)),this._element.classList.add(Js)):(l.on(this._element,Ps,a=>this._start(a)),l.on(this._element,$s,a=>this._move(a)),l.on(this._element,Rs,a=>this._end(a)))}_eventIsPointerPenTouch(a){return this._supportPointerEvents&&(a.pointerType===Vs||a.pointerType===Ys)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const qs="carousel",Us="bs.carousel",va=`.${Us}`,Wr=".data-api",Zs="ArrowLeft",Xs="ArrowRight",Qs=500,ke="next",Ra="prev",qa="left",Ze="right",ah=`slide${va}`,Ot=`slid${va}`,eh=`keydown${va}`,th=`mouseenter${va}`,ih=`mouseleave${va}`,nh=`dragstart${va}`,rh=`load${va}${Wr}`,oh=`click${va}${Wr}`,Gr="carousel",He="active",sh="slide",hh="carousel-item-end",lh="carousel-item-start",uh="carousel-item-next",dh="carousel-item-prev",qr=".active",Ur=".carousel-item",ch=qr+Ur,mh=".carousel-item img",yh=".carousel-indicators",gh="[data-bs-slide], [data-bs-slide-to]",ph='[data-bs-ride="carousel"]',kh={[Zs]:Ze,[Xs]:qa},fh={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},bh={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ce extends aa{constructor(a,e){super(a,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=m.findOne(yh,this._element),this._addEventListeners(),this._config.ride===Gr&&this.cycle()}static get Default(){return fh}static get DefaultType(){return bh}static get NAME(){return qs}next(){this._slide(ke)}nextWhenVisible(){!document.hidden&&de(this._element)&&this.next()}prev(){this._slide(Ra)}pause(){this._isSliding&&Hr(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){l.one(this._element,Ot,()=>this.cycle());return}this.cycle()}}to(a){const e=this._getItems();if(a>e.length-1||a<0)return;if(this._isSliding){l.one(this._element,Ot,()=>this.to(a));return}const i=this._getItemIndex(this._getActive());if(i===a)return;const r=a>i?ke:Ra;this._slide(r,e[a])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(a){return a.defaultInterval=a.interval,a}_addEventListeners(){this._config.keyboard&&l.on(this._element,eh,a=>this._keydown(a)),this._config.pause==="hover"&&(l.on(this._element,th,()=>this.pause()),l.on(this._element,ih,()=>this._maybeEnableCycle())),this._config.touch&&it.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const i of m.find(mh,this._element))l.on(i,nh,r=>r.preventDefault());const e={leftCallback:()=>this._slide(this._directionToOrder(qa)),rightCallback:()=>this._slide(this._directionToOrder(Ze)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Qs+this._config.interval))}};this._swipeHelper=new it(this._element,e)}_keydown(a){if(/input|textarea/i.test(a.target.tagName))return;const e=kh[a.key];e&&(a.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(a){return this._getItems().indexOf(a)}_setActiveIndicatorElement(a){if(!this._indicatorsElement)return;const e=m.findOne(qr,this._indicatorsElement);e.classList.remove(He),e.removeAttribute("aria-current");const i=m.findOne(`[data-bs-slide-to="${a}"]`,this._indicatorsElement);i&&(i.classList.add(He),i.setAttribute("aria-current","true"))}_updateInterval(){const a=this._activeElement||this._getActive();if(!a)return;const e=Number.parseInt(a.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(a,e=null){if(this._isSliding)return;const i=this._getActive(),r=a===ke,n=e||xi(this._getItems(),i,r,this._config.wrap);if(n===i)return;const o=this._getItemIndex(n),s=c=>l.trigger(this._element,c,{relatedTarget:n,direction:this._orderToDirection(a),from:this._getItemIndex(i),to:o});if(s(ah).defaultPrevented||!i||!n)return;const d=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=n;const u=r?lh:hh,y=r?uh:dh;n.classList.add(y),Te(n),i.classList.add(u),n.classList.add(u);const f=()=>{n.classList.remove(u,y),n.classList.add(He),i.classList.remove(He,y,u),this._isSliding=!1,s(Ot)};this._queueCallback(f,i,this._isAnimated()),d&&this.cycle()}_isAnimated(){return this._element.classList.contains(sh)}_getActive(){return m.findOne(ch,this._element)}_getItems(){return m.find(Ur,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(a){return q()?a===qa?Ra:ke:a===qa?ke:Ra}_orderToDirection(a){return q()?a===Ra?qa:Ze:a===Ra?Ze:qa}static jQueryInterface(a){return this.each(function(){const e=Ce.getOrCreateInstance(this,a);if(typeof a=="number"){e.to(a);return}if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a]()}})}}l.on(document,oh,gh,function(t){const a=m.getElementFromSelector(this);if(!a||!a.classList.contains(Gr))return;t.preventDefault();const e=Ce.getOrCreateInstance(a),i=this.getAttribute("data-bs-slide-to");if(i){e.to(i),e._maybeEnableCycle();return}if(la.getDataAttribute(this,"slide")==="next"){e.next(),e._maybeEnableCycle();return}e.prev(),e._maybeEnableCycle()});l.on(window,rh,()=>{const t=m.find(ph);for(const a of t)Ce.getOrCreateInstance(a)});Z(Ce);const _h="collapse",vh="bs.collapse",Se=`.${vh}`,jh=".data-api",Eh=`show${Se}`,Ah=`shown${Se}`,Th=`hide${Se}`,wh=`hidden${Se}`,Ch=`click${Se}${jh}`,Nt="show",Xa="collapse",Be="collapsing",Sh="collapsed",Mh=`:scope .${Xa} .${Xa}`,Lh="collapse-horizontal",Dh="width",Kh="height",Oh=".collapse.show, .collapse.collapsing",Ei='[data-bs-toggle="collapse"]',Nh={parent:null,toggle:!0},Ih={parent:"(null|element)",toggle:"boolean"};class Ha extends aa{constructor(a,e){super(a,e),this._isTransitioning=!1,this._triggerArray=[];const i=m.find(Ei);for(const r of i){const n=m.getSelectorFromElement(r),o=m.find(n).filter(s=>s===this._element);n!==null&&o.length&&this._triggerArray.push(r)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Nh}static get DefaultType(){return Ih}static get NAME(){return _h}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let a=[];if(this._config.parent&&(a=this._getFirstLevelChildren(Oh).filter(s=>s!==this._element).map(s=>Ha.getOrCreateInstance(s,{toggle:!1}))),a.length&&a[0]._isTransitioning||l.trigger(this._element,Eh).defaultPrevented)return;for(const s of a)s.hide();const i=this._getDimension();this._element.classList.remove(Xa),this._element.classList.add(Be),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Be),this._element.classList.add(Xa,Nt),this._element.style[i]="",l.trigger(this._element,Ah)},o=`scroll${i[0].toUpperCase()+i.slice(1)}`;this._queueCallback(r,this._element,!0),this._element.style[i]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||l.trigger(this._element,Th).defaultPrevented)return;const e=this._getDimension();this._element.style[e]=`${this._element.getBoundingClientRect()[e]}px`,Te(this._element),this._element.classList.add(Be),this._element.classList.remove(Xa,Nt);for(const r of this._triggerArray){const n=m.getElementFromSelector(r);n&&!this._isShown(n)&&this._addAriaAndCollapsedClass([r],!1)}this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Be),this._element.classList.add(Xa),l.trigger(this._element,wh)};this._element.style[e]="",this._queueCallback(i,this._element,!0)}_isShown(a=this._element){return a.classList.contains(Nt)}_configAfterMerge(a){return a.toggle=!!a.toggle,a.parent=pa(a.parent),a}_getDimension(){return this._element.classList.contains(Lh)?Dh:Kh}_initializeChildren(){if(!this._config.parent)return;const a=this._getFirstLevelChildren(Ei);for(const e of a){const i=m.getElementFromSelector(e);i&&this._addAriaAndCollapsedClass([e],this._isShown(i))}}_getFirstLevelChildren(a){const e=m.find(Mh,this._config.parent);return m.find(a,this._config.parent).filter(i=>!e.includes(i))}_addAriaAndCollapsedClass(a,e){if(a.length)for(const i of a)i.classList.toggle(Sh,!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(a){const e={};return typeof a=="string"&&/show|hide/.test(a)&&(e.toggle=!1),this.each(function(){const i=Ha.getOrCreateInstance(this,e);if(typeof a=="string"){if(typeof i[a]>"u")throw new TypeError(`No method named "${a}"`);i[a]()}})}}l.on(document,Ch,Ei,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const a of m.getMultipleElementsFromSelector(this))Ha.getOrCreateInstance(a,{toggle:!1}).toggle()});Z(Ha);const pn="dropdown",Hh="bs.dropdown",Ba=`.${Hh}`,Yi=".data-api",Bh="Escape",kn="Tab",Ph="ArrowUp",fn="ArrowDown",$h=2,Rh=`hide${Ba}`,xh=`hidden${Ba}`,zh=`show${Ba}`,Yh=`shown${Ba}`,Zr=`click${Ba}${Yi}`,Xr=`keydown${Ba}${Yi}`,Vh=`keyup${Ba}${Yi}`,Ua="show",Jh="dropup",Fh="dropend",Wh="dropstart",Gh="dropup-center",qh="dropdown-center",La='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Uh=`${La}.${Ua}`,Xe=".dropdown-menu",Zh=".navbar",Xh=".navbar-nav",Qh=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",al=q()?"top-end":"top-start",el=q()?"top-start":"top-end",tl=q()?"bottom-end":"bottom-start",il=q()?"bottom-start":"bottom-end",nl=q()?"left-start":"right-start",rl=q()?"right-start":"left-start",ol="top",sl="bottom",hl={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},ll={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class ia extends aa{constructor(a,e){super(a,e),this._popper=null,this._parent=this._element.parentNode,this._menu=m.next(this._element,Xe)[0]||m.prev(this._element,Xe)[0]||m.findOne(Xe,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return hl}static get DefaultType(){return ll}static get NAME(){return pn}toggle(){return this._isShown()?this.hide():this.show()}show(){if(ka(this._element)||this._isShown())return;const a={relatedTarget:this._element};if(!l.trigger(this._element,zh,a).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Xh))for(const i of[].concat(...document.body.children))l.on(i,"mouseover",tt);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ua),this._element.classList.add(Ua),l.trigger(this._element,Yh,a)}}hide(){if(ka(this._element)||!this._isShown())return;const a={relatedTarget:this._element};this._completeHide(a)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(a){if(!l.trigger(this._element,Rh,a).defaultPrevented){if("ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))l.off(i,"mouseover",tt);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ua),this._element.classList.remove(Ua),this._element.setAttribute("aria-expanded","false"),la.removeDataAttribute(this._menu,"popper"),l.trigger(this._element,xh,a)}}_getConfig(a){if(a=super._getConfig(a),typeof a.reference=="object"&&!ha(a.reference)&&typeof a.reference.getBoundingClientRect!="function")throw new TypeError(`${pn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return a}_createPopper(){if(typeof Nr>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let a=this._element;this._config.reference==="parent"?a=this._parent:ha(this._config.reference)?a=pa(this._config.reference):typeof this._config.reference=="object"&&(a=this._config.reference);const e=this._getPopperConfig();this._popper=Ri(a,this._menu,e)}_isShown(){return this._menu.classList.contains(Ua)}_getPlacement(){const a=this._parent;if(a.classList.contains(Fh))return nl;if(a.classList.contains(Wh))return rl;if(a.classList.contains(Gh))return ol;if(a.classList.contains(qh))return sl;const e=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return a.classList.contains(Jh)?e?el:al:e?il:tl}_detectNavbar(){return this._element.closest(Zh)!==null}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(e=>Number.parseInt(e,10)):typeof a=="function"?e=>a(e,this._element):a}_getPopperConfig(){const a={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(la.setDataAttribute(this._menu,"popper","static"),a.modifiers=[{name:"applyStyles",enabled:!1}]),{...a,...R(this._config.popperConfig,[void 0,a])}}_selectMenuItem({key:a,target:e}){const i=m.find(Qh,this._menu).filter(r=>de(r));i.length&&xi(i,e,a===fn,!i.includes(e)).focus()}static jQueryInterface(a){return this.each(function(){const e=ia.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a]()}})}static clearMenus(a){if(a.button===$h||a.type==="keyup"&&a.key!==kn)return;const e=m.find(Uh);for(const i of e){const r=ia.getInstance(i);if(!r||r._config.autoClose===!1)continue;const n=a.composedPath(),o=n.includes(r._menu);if(n.includes(r._element)||r._config.autoClose==="inside"&&!o||r._config.autoClose==="outside"&&o||r._menu.contains(a.target)&&(a.type==="keyup"&&a.key===kn||/input|select|option|textarea|form/i.test(a.target.tagName)))continue;const s={relatedTarget:r._element};a.type==="click"&&(s.clickEvent=a),r._completeHide(s)}}static dataApiKeydownHandler(a){const e=/input|textarea/i.test(a.target.tagName),i=a.key===Bh,r=[Ph,fn].includes(a.key);if(!r&&!i||e&&!i)return;a.preventDefault();const n=this.matches(La)?this:m.prev(this,La)[0]||m.next(this,La)[0]||m.findOne(La,a.delegateTarget.parentNode),o=ia.getOrCreateInstance(n);if(r){a.stopPropagation(),o.show(),o._selectMenuItem(a);return}o._isShown()&&(a.stopPropagation(),o.hide(),n.focus())}}l.on(document,Xr,La,ia.dataApiKeydownHandler);l.on(document,Xr,Xe,ia.dataApiKeydownHandler);l.on(document,Zr,ia.clearMenus);l.on(document,Vh,ia.clearMenus);l.on(document,Zr,La,function(t){t.preventDefault(),ia.getOrCreateInstance(this).toggle()});Z(ia);const Qr="backdrop",ul="fade",bn="show",_n=`mousedown.bs.${Qr}`,dl={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},cl={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class ao extends we{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return dl}static get DefaultType(){return cl}static get NAME(){return Qr}show(a){if(!this._config.isVisible){R(a);return}this._append();const e=this._getElement();this._config.isAnimated&&Te(e),e.classList.add(bn),this._emulateAnimation(()=>{R(a)})}hide(a){if(!this._config.isVisible){R(a);return}this._getElement().classList.remove(bn),this._emulateAnimation(()=>{this.dispose(),R(a)})}dispose(){this._isAppended&&(l.off(this._element,_n),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add(ul),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=pa(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),l.on(a,_n,()=>{R(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){$r(a,this._getElement(),this._config.isAnimated)}}const ml="focustrap",yl="bs.focustrap",nt=`.${yl}`,gl=`focusin${nt}`,pl=`keydown.tab${nt}`,kl="Tab",fl="forward",vn="backward",bl={autofocus:!0,trapElement:null},_l={autofocus:"boolean",trapElement:"element"};class eo extends we{constructor(a){super(),this._config=this._getConfig(a),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return bl}static get DefaultType(){return _l}static get NAME(){return ml}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),l.off(document,nt),l.on(document,gl,a=>this._handleFocusin(a)),l.on(document,pl,a=>this._handleKeydown(a)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,l.off(document,nt))}_handleFocusin(a){const{trapElement:e}=this._config;if(a.target===document||a.target===e||e.contains(a.target))return;const i=m.focusableChildren(e);i.length===0?e.focus():this._lastTabNavDirection===vn?i[i.length-1].focus():i[0].focus()}_handleKeydown(a){a.key===kl&&(this._lastTabNavDirection=a.shiftKey?vn:fl)}}const jn=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",En=".sticky-top",Pe="padding-right",An="margin-right";class Ai{constructor(){this._element=document.body}getWidth(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}hide(){const a=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Pe,e=>e+a),this._setElementAttributes(jn,Pe,e=>e+a),this._setElementAttributes(En,An,e=>e-a)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Pe),this._resetElementAttributes(jn,Pe),this._resetElementAttributes(En,An)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(a,e,i){const r=this.getWidth(),n=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+r)return;this._saveInitialAttribute(o,e);const s=window.getComputedStyle(o).getPropertyValue(e);o.style.setProperty(e,`${i(Number.parseFloat(s))}px`)};this._applyManipulationCallback(a,n)}_saveInitialAttribute(a,e){const i=a.style.getPropertyValue(e);i&&la.setDataAttribute(a,e,i)}_resetElementAttributes(a,e){const i=r=>{const n=la.getDataAttribute(r,e);if(n===null){r.style.removeProperty(e);return}la.removeDataAttribute(r,e),r.style.setProperty(e,n)};this._applyManipulationCallback(a,i)}_applyManipulationCallback(a,e){if(ha(a)){e(a);return}for(const i of m.find(a,this._element))e(i)}}const vl="modal",jl="bs.modal",U=`.${jl}`,El=".data-api",Al="Escape",Tl=`hide${U}`,wl=`hidePrevented${U}`,to=`hidden${U}`,io=`show${U}`,Cl=`shown${U}`,Sl=`resize${U}`,Ml=`click.dismiss${U}`,Ll=`mousedown.dismiss${U}`,Dl=`keydown.dismiss${U}`,Kl=`click${U}${El}`,Tn="modal-open",Ol="fade",wn="show",It="modal-static",Nl=".modal.show",Il=".modal-dialog",Hl=".modal-body",Bl='[data-bs-toggle="modal"]',Pl={backdrop:!0,focus:!0,keyboard:!0},$l={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class re extends aa{constructor(a,e){super(a,e),this._dialog=m.findOne(Il,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ai,this._addEventListeners()}static get Default(){return Pl}static get DefaultType(){return $l}static get NAME(){return vl}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){this._isShown||this._isTransitioning||l.trigger(this._element,io,{relatedTarget:a}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Tn),this._adjustDialog(),this._backdrop.show(()=>this._showElement(a)))}hide(){!this._isShown||this._isTransitioning||l.trigger(this._element,Tl).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(wn),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){l.off(window,U),l.off(this._dialog,U),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ao({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new eo({trapElement:this._element})}_showElement(a){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=m.findOne(Hl,this._dialog);e&&(e.scrollTop=0),Te(this._element),this._element.classList.add(wn);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,l.trigger(this._element,Cl,{relatedTarget:a})};this._queueCallback(i,this._dialog,this._isAnimated())}_addEventListeners(){l.on(this._element,Dl,a=>{if(a.key===Al){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),l.on(window,Sl,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),l.on(this._element,Ll,a=>{l.one(this._element,Ml,e=>{if(!(this._element!==a.target||this._element!==e.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Tn),this._resetAdjustments(),this._scrollBar.reset(),l.trigger(this._element,to)})}_isAnimated(){return this._element.classList.contains(Ol)}_triggerBackdropTransition(){if(l.trigger(this._element,wl).defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;i==="hidden"||this._element.classList.contains(It)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(It),this._queueCallback(()=>{this._element.classList.remove(It),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const a=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!a){const r=q()?"paddingLeft":"paddingRight";this._element.style[r]=`${e}px`}if(!i&&a){const r=q()?"paddingRight":"paddingLeft";this._element.style[r]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(a,e){return this.each(function(){const i=re.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof i[a]>"u")throw new TypeError(`No method named "${a}"`);i[a](e)}})}}l.on(document,Kl,Bl,function(t){const a=m.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),l.one(a,io,r=>{r.defaultPrevented||l.one(a,to,()=>{de(this)&&this.focus()})});const e=m.findOne(Nl);e&&re.getInstance(e).hide(),re.getOrCreateInstance(a).toggle(this)});kt(re);Z(re);const Rl="offcanvas",xl="bs.offcanvas",da=`.${xl}`,no=".data-api",zl=`load${da}${no}`,Yl="Escape",Cn="show",Sn="showing",Mn="hiding",Vl="offcanvas-backdrop",ro=".offcanvas.show",Jl=`show${da}`,Fl=`shown${da}`,Wl=`hide${da}`,Ln=`hidePrevented${da}`,oo=`hidden${da}`,Gl=`resize${da}`,ql=`click${da}${no}`,Ul=`keydown.dismiss${da}`,Zl='[data-bs-toggle="offcanvas"]',Xl={backdrop:!0,keyboard:!0,scroll:!1},Ql={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class fa extends aa{constructor(a,e){super(a,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return Xl}static get DefaultType(){return Ql}static get NAME(){return Rl}toggle(a){return this._isShown?this.hide():this.show(a)}show(a){if(this._isShown||l.trigger(this._element,Jl,{relatedTarget:a}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ai().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Sn);const i=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(Cn),this._element.classList.remove(Sn),l.trigger(this._element,Fl,{relatedTarget:a})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown||l.trigger(this._element,Wl).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Mn),this._backdrop.hide();const e=()=>{this._element.classList.remove(Cn,Mn),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ai().reset(),l.trigger(this._element,oo)};this._queueCallback(e,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const a=()=>{if(this._config.backdrop==="static"){l.trigger(this._element,Ln);return}this.hide()},e=!!this._config.backdrop;return new ao({className:Vl,isVisible:e,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:e?a:null})}_initializeFocusTrap(){return new eo({trapElement:this._element})}_addEventListeners(){l.on(this._element,Ul,a=>{if(a.key===Yl){if(this._config.keyboard){this.hide();return}l.trigger(this._element,Ln)}})}static jQueryInterface(a){return this.each(function(){const e=fa.getOrCreateInstance(this,a);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a](this)}})}}l.on(document,ql,Zl,function(t){const a=m.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),ka(this))return;l.one(a,oo,()=>{de(this)&&this.focus()});const e=m.findOne(ro);e&&e!==a&&fa.getInstance(e).hide(),fa.getOrCreateInstance(a).toggle(this)});l.on(window,zl,()=>{for(const t of m.find(ro))fa.getOrCreateInstance(t).show()});l.on(window,Gl,()=>{for(const t of m.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&fa.getOrCreateInstance(t).hide()});kt(fa);Z(fa);const au=/^aria-[\w-]*$/i,so={"*":["class","dir","id","lang","role",au],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},eu=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),tu=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,iu=(t,a)=>{const e=t.nodeName.toLowerCase();return a.includes(e)?eu.has(e)?!!tu.test(t.nodeValue):!0:a.filter(i=>i instanceof RegExp).some(i=>i.test(e))};function nu(t,a,e){if(!t.length)return t;if(e&&typeof e=="function")return e(t);const r=new window.DOMParser().parseFromString(t,"text/html"),n=[].concat(...r.body.querySelectorAll("*"));for(const o of n){const s=o.nodeName.toLowerCase();if(!Object.keys(a).includes(s)){o.remove();continue}const h=[].concat(...o.attributes),d=[].concat(a["*"]||[],a[s]||[]);for(const u of h)iu(u,d)||o.removeAttribute(u.nodeName)}return r.body.innerHTML}const ru="TemplateFactory",ou={allowList:so,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},su={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},hu={entry:"(string|element|function|null)",selector:"(string|element)"};class lu extends we{constructor(a){super(),this._config=this._getConfig(a)}static get Default(){return ou}static get DefaultType(){return su}static get NAME(){return ru}getContent(){return Object.values(this._config.content).map(a=>this._resolvePossibleFunction(a)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(a){return this._checkContent(a),this._config.content={...this._config.content,...a},this}toHtml(){const a=document.createElement("div");a.innerHTML=this._maybeSanitize(this._config.template);for(const[r,n]of Object.entries(this._config.content))this._setContent(a,n,r);const e=a.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(a){super._typeCheckConfig(a),this._checkContent(a.content)}_checkContent(a){for(const[e,i]of Object.entries(a))super._typeCheckConfig({selector:e,entry:i},hu)}_setContent(a,e,i){const r=m.findOne(i,a);if(r){if(e=this._resolvePossibleFunction(e),!e){r.remove();return}if(ha(e)){this._putElementInTemplate(pa(e),r);return}if(this._config.html){r.innerHTML=this._maybeSanitize(e);return}r.textContent=e}}_maybeSanitize(a){return this._config.sanitize?nu(a,this._config.allowList,this._config.sanitizeFn):a}_resolvePossibleFunction(a){return R(a,[void 0,this])}_putElementInTemplate(a,e){if(this._config.html){e.innerHTML="",e.append(a);return}e.textContent=a.textContent}}const uu="tooltip",du=new Set(["sanitize","allowList","sanitizeFn"]),Ht="fade",cu="modal",$e="show",mu=".tooltip-inner",Dn=`.${cu}`,Kn="hide.bs.modal",fe="hover",Bt="focus",Pt="click",yu="manual",gu="hide",pu="hidden",ku="show",fu="shown",bu="inserted",_u="click",vu="focusin",ju="focusout",Eu="mouseenter",Au="mouseleave",Tu={AUTO:"auto",TOP:"top",RIGHT:q()?"left":"right",BOTTOM:"bottom",LEFT:q()?"right":"left"},wu={allowList:so,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Cu={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class me extends aa{constructor(a,e){if(typeof Nr>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(a,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return wu}static get DefaultType(){return Cu}static get NAME(){return uu}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),l.off(this._element.closest(Dn),Kn,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const a=l.trigger(this._element,this.constructor.eventName(ku)),i=(Br(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(a.defaultPrevented||!i)return;this._disposePopper();const r=this._getTipElement();this._element.setAttribute("aria-describedby",r.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(r),l.trigger(this._element,this.constructor.eventName(bu))),this._popper=this._createPopper(r),r.classList.add($e),"ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))l.on(s,"mouseover",tt);const o=()=>{l.trigger(this._element,this.constructor.eventName(fu)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||l.trigger(this._element,this.constructor.eventName(gu)).defaultPrevented)return;if(this._getTipElement().classList.remove($e),"ontouchstart"in document.documentElement)for(const r of[].concat(...document.body.children))l.off(r,"mouseover",tt);this._activeTrigger[Pt]=!1,this._activeTrigger[Bt]=!1,this._activeTrigger[fe]=!1,this._isHovered=null;const i=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),l.trigger(this._element,this.constructor.eventName(pu)))};this._queueCallback(i,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(a){const e=this._getTemplateFactory(a).toHtml();if(!e)return null;e.classList.remove(Ht,$e),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=ys(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(Ht),e}setContent(a){this._newContent=a,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(a){return this._templateFactory?this._templateFactory.changeContent(a):this._templateFactory=new lu({...this._config,content:a,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[mu]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(a){return this.constructor.getOrCreateInstance(a.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Ht)}_isShown(){return this.tip&&this.tip.classList.contains($e)}_createPopper(a){const e=R(this._config.placement,[this,a,this._element]),i=Tu[e.toUpperCase()];return Ri(this._element,a,this._getPopperConfig(i))}_getOffset(){const{offset:a}=this._config;return typeof a=="string"?a.split(",").map(e=>Number.parseInt(e,10)):typeof a=="function"?e=>a(e,this._element):a}_resolvePossibleFunction(a){return R(a,[this._element,this._element])}_getPopperConfig(a){const e={placement:a,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:i=>{this._getTipElement().setAttribute("data-popper-placement",i.state.placement)}}]};return{...e,...R(this._config.popperConfig,[void 0,e])}}_setListeners(){const a=this._config.trigger.split(" ");for(const e of a)if(e==="click")l.on(this._element,this.constructor.eventName(_u),this._config.selector,i=>{const r=this._initializeOnDelegatedTarget(i);r._activeTrigger[Pt]=!(r._isShown()&&r._activeTrigger[Pt]),r.toggle()});else if(e!==yu){const i=e===fe?this.constructor.eventName(Eu):this.constructor.eventName(vu),r=e===fe?this.constructor.eventName(Au):this.constructor.eventName(ju);l.on(this._element,i,this._config.selector,n=>{const o=this._initializeOnDelegatedTarget(n);o._activeTrigger[n.type==="focusin"?Bt:fe]=!0,o._enter()}),l.on(this._element,r,this._config.selector,n=>{const o=this._initializeOnDelegatedTarget(n);o._activeTrigger[n.type==="focusout"?Bt:fe]=o._element.contains(n.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},l.on(this._element.closest(Dn),Kn,this._hideModalHandler)}_fixTitle(){const a=this._element.getAttribute("title");a&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",a),this._element.setAttribute("data-bs-original-title",a),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(a,e){clearTimeout(this._timeout),this._timeout=setTimeout(a,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(a){const e=la.getDataAttributes(this._element);for(const i of Object.keys(e))du.has(i)&&delete e[i];return a={...e,...typeof a=="object"&&a?a:{}},a=this._mergeConfigObj(a),a=this._configAfterMerge(a),this._typeCheckConfig(a),a}_configAfterMerge(a){return a.container=a.container===!1?document.body:pa(a.container),typeof a.delay=="number"&&(a.delay={show:a.delay,hide:a.delay}),typeof a.title=="number"&&(a.title=a.title.toString()),typeof a.content=="number"&&(a.content=a.content.toString()),a}_getDelegateConfig(){const a={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(a[e]=i);return a.selector=!1,a.trigger="manual",a}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(a){return this.each(function(){const e=me.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a]()}})}}Z(me);const Su="popover",Mu=".popover-header",Lu=".popover-body",Du={...me.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Ku={...me.DefaultType,content:"(null|string|element|function)"};class Vi extends me{static get Default(){return Du}static get DefaultType(){return Ku}static get NAME(){return Su}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Mu]:this._getTitle(),[Lu]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(a){return this.each(function(){const e=Vi.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a]()}})}}Z(Vi);const Ou="scrollspy",Nu="bs.scrollspy",Ji=`.${Nu}`,Iu=".data-api",Hu=`activate${Ji}`,On=`click${Ji}`,Bu=`load${Ji}${Iu}`,Pu="dropdown-item",xa="active",$u='[data-bs-spy="scroll"]',$t="[href]",Ru=".nav, .list-group",Nn=".nav-link",xu=".nav-item",zu=".list-group-item",Yu=`${Nn}, ${xu} > ${Nn}, ${zu}`,Vu=".dropdown",Ju=".dropdown-toggle",Fu={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},Wu={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class _t extends aa{constructor(a,e){super(a,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Fu}static get DefaultType(){return Wu}static get NAME(){return Ou}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const a of this._observableSections.values())this._observer.observe(a)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(a){return a.target=pa(a.target)||document.body,a.rootMargin=a.offset?`${a.offset}px 0px -30%`:a.rootMargin,typeof a.threshold=="string"&&(a.threshold=a.threshold.split(",").map(e=>Number.parseFloat(e))),a}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(l.off(this._config.target,On),l.on(this._config.target,On,$t,a=>{const e=this._observableSections.get(a.target.hash);if(e){a.preventDefault();const i=this._rootElement||window,r=e.offsetTop-this._element.offsetTop;if(i.scrollTo){i.scrollTo({top:r,behavior:"smooth"});return}i.scrollTop=r}}))}_getNewObserver(){const a={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(e=>this._observerCallback(e),a)}_observerCallback(a){const e=o=>this._targetLinks.get(`#${o.target.id}`),i=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(e(o))},r=(this._rootElement||document.documentElement).scrollTop,n=r>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=r;for(const o of a){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const s=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(n&&s){if(i(o),!r)return;continue}!n&&!s&&i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const a=m.find($t,this._config.target);for(const e of a){if(!e.hash||ka(e))continue;const i=m.findOne(decodeURI(e.hash),this._element);de(i)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,i))}}_process(a){this._activeTarget!==a&&(this._clearActiveClass(this._config.target),this._activeTarget=a,a.classList.add(xa),this._activateParents(a),l.trigger(this._element,Hu,{relatedTarget:a}))}_activateParents(a){if(a.classList.contains(Pu)){m.findOne(Ju,a.closest(Vu)).classList.add(xa);return}for(const e of m.parents(a,Ru))for(const i of m.prev(e,Yu))i.classList.add(xa)}_clearActiveClass(a){a.classList.remove(xa);const e=m.find(`${$t}.${xa}`,a);for(const i of e)i.classList.remove(xa)}static jQueryInterface(a){return this.each(function(){const e=_t.getOrCreateInstance(this,a);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a]()}})}}l.on(window,Bu,()=>{for(const t of m.find($u))_t.getOrCreateInstance(t)});Z(_t);const Gu="tab",qu="bs.tab",Pa=`.${qu}`,Uu=`hide${Pa}`,Zu=`hidden${Pa}`,Xu=`show${Pa}`,Qu=`shown${Pa}`,ad=`click${Pa}`,ed=`keydown${Pa}`,td=`load${Pa}`,id="ArrowLeft",In="ArrowRight",nd="ArrowUp",Hn="ArrowDown",Rt="Home",Bn="End",Da="active",Pn="fade",xt="show",rd="dropdown",ho=".dropdown-toggle",od=".dropdown-menu",zt=`:not(${ho})`,sd='.list-group, .nav, [role="tablist"]',hd=".nav-item, .list-group-item",ld=`.nav-link${zt}, .list-group-item${zt}, [role="tab"]${zt}`,lo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Yt=`${ld}, ${lo}`,ud=`.${Da}[data-bs-toggle="tab"], .${Da}[data-bs-toggle="pill"], .${Da}[data-bs-toggle="list"]`;class oe extends aa{constructor(a){super(a),this._parent=this._element.closest(sd),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),l.on(this._element,ed,e=>this._keydown(e)))}static get NAME(){return Gu}show(){const a=this._element;if(this._elemIsActive(a))return;const e=this._getActiveElem(),i=e?l.trigger(e,Uu,{relatedTarget:a}):null;l.trigger(a,Xu,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,a),this._activate(a,e))}_activate(a,e){if(!a)return;a.classList.add(Da),this._activate(m.getElementFromSelector(a));const i=()=>{if(a.getAttribute("role")!=="tab"){a.classList.add(xt);return}a.removeAttribute("tabindex"),a.setAttribute("aria-selected",!0),this._toggleDropDown(a,!0),l.trigger(a,Qu,{relatedTarget:e})};this._queueCallback(i,a,a.classList.contains(Pn))}_deactivate(a,e){if(!a)return;a.classList.remove(Da),a.blur(),this._deactivate(m.getElementFromSelector(a));const i=()=>{if(a.getAttribute("role")!=="tab"){a.classList.remove(xt);return}a.setAttribute("aria-selected",!1),a.setAttribute("tabindex","-1"),this._toggleDropDown(a,!1),l.trigger(a,Zu,{relatedTarget:e})};this._queueCallback(i,a,a.classList.contains(Pn))}_keydown(a){if(![id,In,nd,Hn,Rt,Bn].includes(a.key))return;a.stopPropagation(),a.preventDefault();const e=this._getChildren().filter(r=>!ka(r));let i;if([Rt,Bn].includes(a.key))i=e[a.key===Rt?0:e.length-1];else{const r=[In,Hn].includes(a.key);i=xi(e,a.target,r,!0)}i&&(i.focus({preventScroll:!0}),oe.getOrCreateInstance(i).show())}_getChildren(){return m.find(Yt,this._parent)}_getActiveElem(){return this._getChildren().find(a=>this._elemIsActive(a))||null}_setInitialAttributes(a,e){this._setAttributeIfNotExists(a,"role","tablist");for(const i of e)this._setInitialAttributesOnChild(i)}_setInitialAttributesOnChild(a){a=this._getInnerElement(a);const e=this._elemIsActive(a),i=this._getOuterElement(a);a.setAttribute("aria-selected",e),i!==a&&this._setAttributeIfNotExists(i,"role","presentation"),e||a.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(a,"role","tab"),this._setInitialAttributesOnTargetPanel(a)}_setInitialAttributesOnTargetPanel(a){const e=m.getElementFromSelector(a);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),a.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${a.id}`))}_toggleDropDown(a,e){const i=this._getOuterElement(a);if(!i.classList.contains(rd))return;const r=(n,o)=>{const s=m.findOne(n,i);s&&s.classList.toggle(o,e)};r(ho,Da),r(od,xt),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(a,e,i){a.hasAttribute(e)||a.setAttribute(e,i)}_elemIsActive(a){return a.classList.contains(Da)}_getInnerElement(a){return a.matches(Yt)?a:m.findOne(Yt,a)}_getOuterElement(a){return a.closest(hd)||a}static jQueryInterface(a){return this.each(function(){const e=oe.getOrCreateInstance(this);if(typeof a=="string"){if(e[a]===void 0||a.startsWith("_")||a==="constructor")throw new TypeError(`No method named "${a}"`);e[a]()}})}}l.on(document,ad,lo,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!ka(this)&&oe.getOrCreateInstance(this).show()});l.on(window,td,()=>{for(const t of m.find(ud))oe.getOrCreateInstance(t)});Z(oe);const dd="toast",cd="bs.toast",ja=`.${cd}`,md=`mouseover${ja}`,yd=`mouseout${ja}`,gd=`focusin${ja}`,pd=`focusout${ja}`,kd=`hide${ja}`,fd=`hidden${ja}`,bd=`show${ja}`,_d=`shown${ja}`,vd="fade",$n="hide",Re="show",xe="showing",jd={animation:"boolean",autohide:"boolean",delay:"number"},Ed={animation:!0,autohide:!0,delay:5e3};class vt extends aa{constructor(a,e){super(a,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Ed}static get DefaultType(){return jd}static get NAME(){return dd}show(){if(l.trigger(this._element,bd).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(vd);const e=()=>{this._element.classList.remove(xe),l.trigger(this._element,_d),this._maybeScheduleHide()};this._element.classList.remove($n),Te(this._element),this._element.classList.add(Re,xe),this._queueCallback(e,this._element,this._config.animation)}hide(){if(!this.isShown()||l.trigger(this._element,kd).defaultPrevented)return;const e=()=>{this._element.classList.add($n),this._element.classList.remove(xe,Re),l.trigger(this._element,fd)};this._element.classList.add(xe),this._queueCallback(e,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Re),super.dispose()}isShown(){return this._element.classList.contains(Re)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(a,e){switch(a.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=e;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=e;break}}if(e){this._clearTimeout();return}const i=a.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){l.on(this._element,md,a=>this._onInteraction(a,!0)),l.on(this._element,yd,a=>this._onInteraction(a,!1)),l.on(this._element,gd,a=>this._onInteraction(a,!0)),l.on(this._element,pd,a=>this._onInteraction(a,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(a){return this.each(function(){const e=vt.getOrCreateInstance(this,a);if(typeof a=="string"){if(typeof e[a]>"u")throw new TypeError(`No method named "${a}"`);e[a](this)}})}}kt(vt);Z(vt);const Ad={"Ghar Kab Aaoge (Border 2)":`[00:08.00] Ho..
        [00:19.00] (Chorus)
        [00:24.00] Ho..
        [00:20.00] (Sonu Nigam)
        [00:34.00] Sandese aate hain, humein tadpaate hain
        [00:39.00] Jo chitthi aati hai, woh poochhe jaati hai
        [00:44.00] Ki ghar kab aaoge, ki ghar kab aaoge
        [00:51.00] Likho kab aaoge
        [00:53.00] Ki tum bin yeh ghar soona, soona hai
        [00:57.00] (Arijit Singh)
        [00:58.00] Sandese aate hain, humein tadpaate hain
        [01:03.00] Jo chitthi aati hai, woh poochhe jaati hai
        [01:09.00] Ki ghar kab aaoge? ki ghar kab aaoge?
        [01:15.00] Likho kab aaoge?
        [01:17.00] Ki tum bin yeh dil soona, soona hai
        [01:24.00] (Chorus)
        [01:25.00] Ho..
        [01:45.00] (Vishal Mishra)
        [01:49.00] Yeh dil jo barson se tha khaali-khaali sa
        [01:55.00] Kisi ke aane se sajaa Diwali sa
        [02:03.00] Jage hain darwaaze kisi ki aahat se
        [02:08.00] Savera hota kisi ki karvat se
        [02:16.00] (Vishal Mishra)
        [02:17.00] Main socha karta hoon yahi tanhaai mein
        [02:23.00] Ke chanda utrega meri angnaai mein
        [02:28.00] Naseebon wali ne,
        [02:30.00] Kaan ki baali ne
        [02:34.00] Chauth ki thaali ne
        [02:36.00] Aur poochha hai mehndi ki laali ne
        [02:42.00] Ki ghar kab aaoge?
        [02:44.00] Ki ghar kab aaoge?
        [02:47.00] Likho kab aaoge?
        [02:50.00] Ki tum bin yeh dil soona, soona hai

        [02:55.00] Sandese aate hai, hame tadpate hai
        [02:58.00] (Roop Kumar Rathod)
        [03:00.00] ki chitthi aati hai, woh poochhe jaati hai
        [03:05.00] ki ghar kab aaoge? ki ghar kab aaoge?
        [03:12.00] likho kab aaoge?
        [03:14.00] ki tum bin yeh dil soona, soona hai
        [03:20.00] Ho..
        [03:33.00] (chorus)
        [04:10.00] (Diljit Dosanjh)
        [04:19.00] Yeh poochho aankhon ke jhalakte paani se
        [04:25.00] Bichhadte hai koi kahaan aasaani se
        [04:32.00] Main peeche chhod aaya, duaayein karti maa
        [04:38.00] Ki us'se bhi pyaari mujhe yeh dharti maa
        [04:44.00] (Diljit Dosanjh)
        [04:46.00] Kisi ne dheere se kaha tha laut aana
        [04:52.00] Main raasta dekhungi, mujhe na tadpaana
        [04:57.00] Jaagti raaton ne
        [04:59.00] Ankahi baaton ne
        [05:02.00] Adhoore vaadon ne
        [05:04.00] Aur poochha hai uski yaadon ne
        [05:07.00] (Arijit Singh)
        [05:09.00] Ki ghar kab aaoge?
        [05:12.00] Ki ghar kab aaoge?
        [05:16.00] Likho kab aaoge?
        [05:18.00] Ki tum bin yeh ghar soona, soona hai
        [05:25.00] (Chorus)

        [06:01.00] Badi yaad aati hai, kisi ki raaton mein
        [06:07.00] Kalaai resham si, abhi hai haathon mein
        [06:15.00] Shayari jaisi woh, labon pe rehti hai
        [06:20.00] Mohabbat jaisi woh, ragon mein behti hai

        [06:27.00] (Vishal Mishra)
        [06:28.00] Jo gudiyon se khele, woh gudiya yaad aayein
        [06:33.00] Ki baaton-baaton mein usi ki baat aaye
        [06:39.00] Mere dildaaron ne,
        [06:42.00] Gali bazaaron ne,
        [06:45.00] Ki chitthi taaron ne
        [06:48.00] Aur poochha hai mere yaaron ne

        [06:52.00] (Vishal Mishra)
        [06:53.00] ki ghar kab aaoge?
        [06:55.00] ki ghar kab aaoge?
        [06:58.00] Likho kab aaoge?

        [07:00.00] (Diljit Dosanjh)
        [07:01.00] Ki tum bin yeh ghar soona, soona hai
        [07:07.00] (Chorus)....

        [07:33.00] (Sonu Nigam)
        [07:34.00] Ae guzarne wali hawa bata
        [07:38.00] Mera itna kam karegi kya
        [07:44.00] Mujhe chhodke jo chala gaya
        [07:50.00] Usse dhoond la...

        [07:55.00] (Sonu Nigam)
        [07:56.00] Koi rehgujar ya koi gali
        [08:01.00] Mujhe aaj tak, to nahi mili
        [08:07.00] Jo mita sake, ye fasla
        [08:12.00] Jo mita sake, ye fasla

        [08:18.00](Sonu Nigam)
        [08:19.00]Meri saari jawaani le gaya
        [08:24.00]Aur aankh mein paani de gaya
        [08:30.00]Jisey dohraunga umr bhar
        [08:35.00]Woh aisi kahaani de gaya

        [08:42.00](Sonu Nigam)
        [08:43.00]Ae guzarne wali hawa tujhe
        [08:49.00]Hai qasam na aise rula mujhe
        [08:55.00]Main kahaan se laaun woh dil bata
        [09:00.00]Jisey ho qubool yeh alvidaa...

        [09:06.00](Diljit Dosanjh)
        [09:07.00]Main wapas aaunga, main wapas aaunga
        [09:12.00]Phir apne gaon mein, pyaar ki chhaaon mein

        [09:07.00](Sonu Nigam)
        [09:18.00]Tarasti aankhon se
        [09:21.00]Kisi ki baahon se
        [09:23.00]Ki ghar ke raahon se

        [09:25.00](Vishal Mishra)
        [09:26.00]Kiya jo vaada tha woh nibhaunga

        [09:31.00](All Together)
        [09:32.00]Main wapas aaunga, main wapas aaunga
        [09:38.00]Main wapas aaunga..

        [09:40.00](Sonu Nigam)
        [09:41.00]Main wapas aaunga...

        [09:42.00](Chorus)
        [09:54.00]Ho...`,"Kismat Ki Chaabi":`
        [00:00.00] Dhaniya pudina
        [00:02.00] Bo..Bo.. Bo gaye hain,
        [00:05.00] Atrangi kisse mein
        [00:07.00] Sab kho gaye hain
        
        [00:16.00] Paper pe laga ke thook
        [00:18.00] Gaye sab phook
        [00:20.00] Lagi phir bhook
        [00:22.00] Pade sab tut aise
        [00:24.00] Langgar ho jaise
        [00:25.00] Andar ka kuttta
        [00:26.00] Bandar ke jaise
        
        [00:27.00] Kartab dikhaye
        [00:28.00] Bina hichkichaye
        [00:29.00] Full too nachaye
        [00:30.00] Sab hosh udaye
        [00:31.00] Laalach badhaye
        [00:33.00] Sabki jalaye
        [00:34.00] Aur saare bole
        [00:35.00] Kismat ki khaye
        
        [00:36.00] Are rahu ho ya ketu ho
        [00:38.00] Main toh dono pe bhaari hoon
        [00:41.00] Yeh duniya meri circus hai
        [00:43.00] Aur main iski madaari hoon
        [00:46.00] Are rahu ho ya ketu ho
        [00:48.00] Main toh dono pe bhaari hoon
        [00:51.00] Yeh duniya meri circus hai
        [00:53.00] Aur main iski madaari hoon
        
        [01:15.00] Grah kharab billi kaate rasta,
        [01:17.00] Karma bole main toh pehle se mast tha,
        [01:20.00] Kasoori methi leke dhoondhte jamure
        [01:22.00] Kahan kundali mein baitha shani bandh ke basta
        
        [01:25.00] Diary ke kisse,
        [01:26.00] Mere hisse,
        [01:27.00] Likhu main kismat
        [01:28.00] Jadi buti ghiss ke,
        
        [01:30.00] Nasha hai badhta,
        [01:31.00] Aankhein gulabi,
        [01:32.00] Paas mere
        [01:33.00] Kismat ki chaabi

        [01:34.00] Are rahu ho ya ketu ho
        [01:36.00] Main toh dono pe bhaari hoon
        [01:39.00] Yeh duniya meri circus hai
        [01:41.00] Aur main iski madaari hoon
        [01:44.00] Are rahu ho ya ketu ho
        [01:46.00] Main toh dono pe bhaari hoon
        [01:49.00] Yeh duniya meri circus hai
        [01:51.00] Aur main iski madaari hoon
        
        [01:53.00] Bas kaand karaye nadaani
        [01:55.00] Aur saans badhaye betaabi
        [01:58.00] Jaha jang lagi taale mein phir
        [02:00.00] Lag jaye kismat ki chaabi
        [02:03.00] Bas kaand karaye nadaani
        [02:05.00] Aur saans badhaye betaabi
        [02:08.00] Jaha jang lagi taale mein phir
        [02:10.00] Lag jaye kismat ki chaabi`,"Tujhe Soch Kar":`[00:25.00] Tujhe soch soch kar din guzarte hain
        Har khwaab mein teri tasveer utarte hain

        [00:40.00] Hawa mein teri khushboo hai basi
        Tere bina lage jaise duniya adhoori si

        [00:58.00] Teri muskaan meri duniya basti hai
        Tere bina har khushi bhi tanha lagti hai

        [01:10.00] Teri awaaz raaton ko sahla jaati hai
        Har khamoshi tera naam dohraati hai

        [01:25.00] Tujhe soch soch kar din guzarte hain
        Sapne kuch teri daastaan kehte hain

        [01:35.00] Kya tu bhi mehsoos karta hai yeh baat
        Tere bin adhoora hai mera har jazbaat

        [02:12.00] Sooraj ki pehli kiran mein tera naam hai
        Har dhadkan mein teri hi pehchaan hai

        [02:23.00] Tere khayalon mein yeh dil khoya hai
        Har pal tujhse hi mohabbat boya hai

        [02:35.00] Agar tu paas ho to sab kuch hai
        Tere bina kuch bhi nahi

        [02:47.00] Teri hansi hi meri dua ban jaaye
        Teri khamoshi bhi mera sukoon sahi

        [02:58.00] Tujhe soch soch kar din guzarte hain
        Sapne kuch teri daastaan kehte hain

        [03:09.00] Tere bina har subah adhoori lage
        Tere bina har shaam tanha lage

        [03:32.00] Tere bina zindagi ek adhoori kahani hai
        Har saans mein basi teri nishaani hai

        [03:44.00] Tu mil jaaye to lage khuda mil gaya
        Warna yeh dil to bas tanha reh gaya

        [03:55.00] Tujhe soch soch kar din guzarte hain
        Har lamha tera naam pukaarte hain

        [04:07.00] Tu agar keh de main hoon tere saath
        To mukammal ho jaaye meri har baat

        [04:19.00] Tujhe soch soch kar din guzarte hain
        Har khwaab tujhse hi judte hain

        [04:30.00] Tu hi meri duniya
        Tu hi meri dua`,"Dil Lagana Mana Tha":`[00:06.00] Zamaane Ki Taraah
        Hum Bhi Tode Hain Gaye
        Aise Tanha To Na The
        Tanha Chode Hain Gaye

        [00:18.00] Na Dil Se Vo Yaadein Jaayein
        Na Raaton Ko Neendein Aayein
        Aate Hain Phir Khwab Kyu
        Aate Hain Kyu Khaab

        [00:28.00] Jo Thi Tere Ishq Mein Doobi
        Un Ankhon Mein Tum Le Aaye
        Aasu Behisaab Kyu
        Aasu Behisaab

        [00:36.00] Khair Hai Yaaron Kam Se Kam
        Jaan Se Jaa Na Paaye Hum
        Khair Hai Yaaron Kam Se Kam
        Jaan Se Jaa Na Paaye Hum
        Inkaar Ke Bahaane Kayi Baar Karte Karte

        [00:52.00] Humne Wahin Lagaya Dil
        Jahan Dil Lagana Mana Tha
        Akhir Wahin Kiye Sajde Jahan
        Sar Jhukana Mana Tha

        [01:02.00] Kyu Zindagi Bita Di Jahaan Pe
        Ik Pal Bitaana Mana Tha
        Kyu Us Gali Mein Rehte They Hum
        Jahaan Roz Jaana Mana Tha

        [01:11.00] (Instrumental)

        [01:16.00] Zamaane Ki Taraah
        Hum Bhi Tode Hain Gaye
        Aise Tanha To Na The
        Tanha Chode Hain Gaye

        [01:25.00] Jo Duaayein Dete They
        Haan Usi Ke Hothon Se
        Aise Waise Lafz Bhi
        Humse Bole Hain Gaye

        [01:35.00] (Instrumental)

        [01:57.00] Baitho Kisi Roz Tanhai Mein
        Rakho Samne Wakt Ke Aaine
        Jo Aagea Chehra Nazar Vo Kahin
        Tumhe Bewafa Kehke Has Na Pade

        [02:16.00] Tujhe Dil Diya Istemaal Huye
        Hai Tujhmein Bhi Dil Ye Khayaal Rahe
        Tujhe Dil Diya Istemaal Huye
        Hai Tujhmein Bhi Dil Ye Khayaal Rahe

        [02:35.00] Humne Jalaaya Dil Jahaan
        Diye Bhi Jalaana Mana Tha
        Kar Baithe Yaad Vo Chehra
        Jisko Bhulaana Mana Tha

        [02:45.00] Hum Aazmaye Gaye
        Magar Unhe Aazmana Mana Tha
        Humne Wahin Lagaya Dil
        Jahan Dil Lagana Mana Tha

        [02:50.00] Humne Jalaaya Dil Jahaan
        Diye Bhi Jalaana Mana Tha

        [02:58.00] Zamaane Ki Taraah
        Hum Bhi Tode Hain Gaye
        Aise Tanha To Na The
        Tanha Chode Hain Gaye

        [03:09.00] Jo Duaayein Dete They
        Haan Usi Ke Hothon Se
        Aise Waise Lafz Bhi
        Humse Bole Hain Gaye

        [03:20.00] Ends`,"Kya Bataun Tujhe":`[00:32.00] Bataun tujhe Kya bataun tujhe
        Ke kis tarah chaha hai Tujhko sanam
        Kare koi kitna bhi ishq magar
        Rahega humari mohabbat se kam

        [01:02.00] Chahne ko tujhe waqt kam hai mila
        Pyaar karne tujhe phir se lenge janam

        [01:17.00] Kahunga toh jalne lagenge sabhi
        Jo kehte hai chahat hai unka dharam
        Kare koi kitna bhi ishq magar
        Rahega humari mohabbat se kam

        [01:48.00] oh....

        [0:21.00] Jo tu na ho toh kya hota hai
        Yeh zehen Tabah hota hai
        Tu jo nahi kuch bhi nahi
        Tu hai toh hai yeh zindagi

        [02:36.00] Tera kaha dua hota hai
        Tujhse hum riha hota hai
        Tu jo nahi kuch bhi nahi
        Tu inteha hai ishq ki

        [02:51.00] Jahan mein milenge jo do dil kabhi
        Toh khayenge pehle humari kasam
        Kare koi kitna bhi ishq magar
        Rahega humari mohabbat se kam

        [03:20.00] oh....

        [03:36.00] Bataun tujhe Kya bataun tujhe
        Ke kis tarha chaha hai tujhko sanam
        Kare koi kitna bhi ishq magar
        Rahega humari mohabbat se kam
        
        [04:06.00] ummm....`,Maatrubhumi:`[00:00.00] (instrumental)
        [00:24.00] Maatrubhumi aaj main sankalp loon tere liye
        Main jiyun tere liye aur mai marun tere liye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye

        [01:07.00] Maatrubhumi aaj main sankalp loon tere liye
        Main jiyun tere liye aur mai marun tere liye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye

        [01:34.00] Maatrubhumi aaj main sankalp loon tere liye
        Main jiyun tere liye aur mai marun tere liye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye

        [02:16.00] (instrumental)

        [02:44.00] Tujhpe nichawar hai meri saansein
        Mera to sabkuch mera vatan
        Hum bulbule hai tu hai gulista
        Khushbu se mehke tera chaman

        [02:59.00] Tujhpe mitegi zindegaani
        Tere hi dum se apni kahani
        Ye sarjami hai shaan meri
        Mitti main teri hai aan meri

        [03:13.00] Santan hum tere tu meri maa hai
        Tujhpe hi qurbaan meri jaan hai
        Tujhpe hi qurbaan meri jaan hai

        [03:23.00] Maatrubhumi aaj main sankalp loon tere liye
        Main jiyun tere liye aur mai marun tere liye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye

        [03:51.00] (instrumental)

        [04:05.00] Bhi humne li kasme dushman ko hai mitana
        Kya hai taakat humaari humko unko hai dikhana
        Desh pe tan man ko mitane aabru apni ma ki bachane
        Roke kisi ke hum na rukenge sar humaare ab ना jhukenge

        [04:33.00] Hum hai jiyaale hum toh hai tufaan
        Dena hai humko har imtehaan
        Hum toh likhenge daastan woh
        Dekhega jisko saara jahaan

        [04:47.00] Leke tiranga hum toh chalenge
        Jung apni to jeet lenge
        Karte hai hum teri digar hawali
        Apni ragon mein teri rawaali

        [05:01.00] Tu hai maa abhimaan mera
        Tere liye hai praan mera
        Tere liye hai praan mera

        [05:12.00] Maatrubhumi aaj main sankalp loon tere liye
        Main jiyun tere liye aur mai marun tere liye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        Meri jaan vatan pe jaaye toh jeevan safal ho jaye
        
        [06:08.00] End`,"Jhoom Sharaabi":`[00:01.00] Yeah aan
        Kehndi, yeah!

        [00:08.00] Khali bottle hai, bottle mein gin hai
        Aur jinki bottle hai
        Aankhein hai laal behke hai kadam
        Jin jinki bottle hai

        [00:18.00] Hothon pe hai lali muh pe gali
        Jab khulti bottle hai
        Dhakkan kholo to isse rooh nikle
        Yeh hilti bottle hai

        [00:28.00] Koi kehta hai dil ko chhuti hai
        Aur gham chhupati hai
        Koi kehta hai ke 
        Mashuqa ko dil se bhulati hai
        Koi kehta hai
        Iske peene se aadat lag jaati hai
        Main toh piyunga kyuki 
        Yeh mere budget mein aati hai haye

        [00:46.00] Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom
        Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom

        [00:56.00] Kali ghata hai mast fija hai
        Kali ghatayein mast fijayein
        Jaam utha kar ghum ghoom ghoom

        [01:11.00] Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom
        Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom

        [01:20.00] (instrumental)

        [01:29.00] Aaj angur ki beti se mohabbat kar le
        Shekh saahab ki nasihat se bagaavat kar le
        Iski beti ne uthaa rakhi hai sar par duniya
        Ye to achha hua ke angur ko beta naa hua

        [01:47.00] Kamasekam surat-e-saaqi kaa nazaara kar le
        Aake mehkhaane mein jeene kaa sahaara kar le
        Aankh milte hi jawaani ka maza aayega
        Tujhko angur ke paani ka mazaa aayega

        [02:06.00] Har nazar apani basad shauq gulabi kar de
        Itni pee le ke zamaane ko sharaabi kar de
        Jaam jab saamane aaye to mukarana kaisa
        Jaam jab saamane aaye to mukarana kaisa
        Baat jab peene pe aa jaaye to darna kaisa
        Baat jab peene pe aa jaaye to darna kaisa

        [02:34.00] Dhoom machi hai, aa aa, mehkhaane mein, oho
        Dhoom machi hai maikaane mein
        Tu bhi machaa le dhum dhum dhum

        [02:49.00] Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom
        Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom

        [02:59.00] (instrumental)

        [03:07.00] Raat ko mehkhane mein betha tha
        Mashuqa mil gayi
        Hui jab shiqwe, shiqwa phir 
        Sali ik bottle khul gayi
        Uski aankhon se jab tapka lahu
        Meri rooh tak hil gayi
        Parose jab maine 2 jaam
        Uski tabiyat khil gayi
        Mujhko boli ke mera aashiq hai
        Tu kyu stata hai
        Aashiq hai ya katil hai mera
        Jab khanjar chalaata hai
        Kabhi mere ghar pe dera tha
        Mehkhane jaata hai
        Mehkhane jaake kis sautan ke 
        Bistar mein so jaata hai

        [03:45.00] Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom
        Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom
        Jhoom barabar jhoom sharaabi
        Jhoom barabar jhoom

        [03:59.00] (instrumental)

        [04:04.00] Kehndi yo yo honey singh!`,"Nache Nache":`[00:08.00] Auva auva auva auva
        Auva auva auva auva

        [00:22.00] Koi yahan aha nache nache
        Koi yahan aha nache nache
        Saare haseen yahan nache nache
        Saare jawan aaha nache nache

        [00:36.00] Avva avva avva avva
        Avva avva avva avva

        [00:53.00] (music)

        [01:09.00] Koi yahan aha nache nache
        Koi wahan aha nache nache
        Saare haseen yahan nache nache
        Saare jawan aaha nache nache

        [01:24.00] Auva auva, humse hai tumse pyar
        Pyar pyar pyar pyar
        Maano na mere yaar
        Yaar yaar yaar yaar

        [01:37.00] (music)

        [01:57.00] Dil ko jalana nahi
        Kuch bhi chhupana nahi
        Jhoota bahana bang bang
        Itni khushi hai yahi
        Jiska thikana nahi
        Looto khazana bang bang

        [02:12.00] Kahin shamma aaha nache nache
        Kahin dhuan aaha nache nache
        Saare haseen yahan nache nache
        Saare jawan aaha nache nache

        [02:28.00] Auva auv, humse hai tumse pyar
        Auva auva, maano na mere yaar

        [02:43.00] Avva avva avva avva
        Avva avva avva avva

        [03:06.00] Koi yahan aha nache nache
        Koi yahan aha nache nache
        Saare haseen yahan nache nache
        Saare jawan aha nache nache
        [03:24.00] (music)`,"O Romeo":`[00:00.00] Kahiye kya pesh kare
        Dil aur jaan haazir
        Aashiqon ki masti mein
        Aapka makaan haazir

        [00:27.00] (music)

        [00:39.00] Ishq ka itr mehanga tha par le liya
        [00:47.00] Shaam-e-gham ke liye kuch zehar le liya
        Jeene marne ke samaan saare mile
        Aashiqon ki colony mein ghar le liya
        Aashiqon ki colony mein ghar le liya

        [01:08.00] Ishq ka itr mehanga tha par le liya
        Shaam-e-gham ke liye kuch zahar le liya
        Jeene marne ke samaan saare mile
        Aashiqon ki colony mein ghar le liya
        Aashiqon ki colony mein ghar le liya

        [01:32.00] (music)

        [01:57.00] Ho aap jo mehke yahaan aise dilshad hua
        Laila ke aane se sehra aabaad hua
        Tera deedar hua saara din paar hua
        Aankhon ka roja tha vaqt-e-ifkar hua
        Tera deedar hua saara din paar hua
        Aankhon ka roja tha vaqt-e-ifkar hua

        [02:31.00] Aap maalik makaan ho gaye aajse
        Dil par haq tha wahin maang kar le liya
        Ishq dariya-e-aashiq hai deewano re
        Doob kar le liya tair kar le liya
        Doob kar le liya tair kar le liya
        Aashiqon ki colony mein ghar le liya
        Doob kar le liya tair kar le liya
        Aashiqon ki colony mein ghar le liya
        Aashiqon ki colony mein ghar le liya
        Aashiqon ki colony mein ghar le liya
        [03:19.00] end`,Shararat:`[00:07.00] Tune parda uthaya kya baat ho gayi
        Haye ye mulaqat vardaat ho gayi
        Nain milaye humne ek duje se yoon
        Raat hui phir din phir se raat ho gayi

        [00:48.00] (music)

        [01:03.00] Kacchi kali sadda masoom chehra
        Niyat noorani sadda dil hai sunehra
        Kacchi kali sadda masoom chehra
        Niyat noorani sadda dil hai sunehra

        [01:17.00] Parde de pichhe ki hai kisnu pata
        Parde de pichhe ki hai kisnu pata
        Ik afeemi main chaska chakhawan

        [01:29.00] Tainu shararat sikhawan
        Jadon nainaan ladawan
        Tainu shararat sikhawan
        Jadon nainaan ladawan

        [01:43.00] Nainan ch mere ek neela samundar
        Nainan ch mere ek neela samundar
        Samundar me dubki lavawan

        [01:54.00] Tainu shararat sikhawan
        Jadon nainaan ladawan
        Tainu shararat sikhawan
        Jadon nainaan ladawan

        [02:08.00] (music)

        [02:23.00] Tum bhi ho tanha aur hum akele
        Jo saath hue lajawaab ho gaye
        Tum bhi haseen aur hum aashiqi hai
        Jo raat hui benakaab ho gaye

        [02:38.00] Mere labon pe saji surkhiyan
        Mere labon pe saji surkhiyan
        Gulabi hai sharbat pilawaawan

        [02:49.00] Tainu shararat sikhawan
        Jadon nainaan ladawan
        Tainu shararat sikhawan
        Jadon nainaan ladawan

        [03:03.00] Nainan ch mere ek neela samundar
        Nainan ch mere ek rangeela samundar
        Samundar me dubki lavawan

        [03:15.00] Tainu shararat sikhawan
        Jadon nainaan ladawan
        Tainu shararat sikhawan
        Jadon nainaan ladawan
        
        [03:30.00] music`,"Sandese Aate Hain":`[00:31.00] Sandese aate hai, humein tadpaate hai
        Jo chitthi aati hai, wo poochhe jaati hai
        Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [00:54.00] Sandese aate hai, humein tadpaate hai
        Jo chitthi aati hai, wo poochhe jaati hai
        Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [01:19.00] (instrumental)

        [01:39.00] Kisi dilwaali ne, kisi matwaali ne
        Humein khat likha hai, ye humse poochha hai
        Kisi ki saanson ne, kisi ki dhadkan ne
        Kisi ki choodi ne, kisi ke kangan ne

        [02:04.00] Kisi ke kajre ne, kisi ke gajre ne
        Mahеkti subahon ne, machalti shaamon ne
        Akeli raaton nе, adhoori baaton ne, tarasti baahon ne
        Aur poochha hai tarsi nigaahon ne

        [02:28.00] Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [02:41.00] Sandese aate hai, humein tadpaate hai
        Jo chitthi aati hai, wo poochhe jaati hai
        Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [03:05.00] (instrumental)

        [03:25.00] Mohabbat waalon ne, hamaare yaaron ne
        Humein ye likha hai, ke humse poochha hai
        Hamaare gaaon ne, aam ki chhaaon ne
        Puraane peepal ne, baraste baadal ne

        [03:50.00] Khet khaliyaanon ne, hare maidaanon ne
        Basanti belon ne, jhoomti belon ne
        Lachakte jhulon ne, behekte phoolon ne, chatakti kaliyon ne
        Aur poochha hai gaaon ki galiyon ne

        [04:14.00] Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [04:27.00] Sandese aate hai, humein tadpaate hai
        Jo chitthi aati hai, wo poochhe jaati hai
        Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [04:51.00] oh.....

        [05:16.00] Kabhi ek mamta ki, pyaar ki Ganga ki
        Jo chitthi aati hai, saath woh laati hai
        Mere din bachpan ke, khel wo aangan ke
        Wo saaya aanchal ka, wo teeka kaajal ka

        [05:42.00] Wo lori raaton mein, wo narmi haathon mein
        Wo chaahat aankhon mein, wo chinta baaton mein
        Bigadna upar se, mohabbat andar se, kare wo Devi Maa
        Yahin har khat mein poochhe meri maa

        [06:05.00] Ke ghar kab aaoge? Ke ghar kab aaoge?
        Likho kab aaoge?
        Ke tum bin ye ghar soona, soona hai

        [06:18.00] (instrumental)

        [06:54.00] Ae, guzarne waali hawa btaa, mera itna kaam karegi kya?
        Mere gaaon jaa, mere doston ko salaam de
        Mere gaaon mein hai jo wo gali, jahan rehti hai meri dilrubaa
        Use mere pyaar ka jaam de, use mere pyaar ka jaam de

        [07:38.00] Wahi thodi door hai ghar mera
        Mere ghar mein hai meri boodhi Maa
        Meri maa ke pairon ko chhoo ke
        Tu use uske beta ka naam de

        [08:02.00] Ae, guzarne waali hawa zara
        Mere doston meri dilrubaa
        Meri maa ko mera payaam de
        Unhe jaake tu ye payaam de

        [08:27.00] Main waapas aaoonga, main waapas aaoonga
        Phir apne gaaon mein, usiki chhaaon mein
        Ki Maa ke aanchal se, gaaon ke peepal se
        Kisi ke kaajal se, kiya jo waada tha wo nibhaoonga

        [08:50.00] Main ek din aaoonga, main ek din aaoonga
        Main ek din aaoonga, main ek din aaoonga
        Main ek din aaoonga, main ek din aaoonga
        Main ek din aaoonga, main ek din aaoonga`,"Aakhir Tumhein Aana Hai":`[00:22.00] (Dialogues)
        Aye mere humraaz, mujhko thaam le,
        Zindagi se bhaag kar aaya hoon main
        [00:32.00] Barish ho rahi hai,
        ye barish na hoti, to bhi na aati

        [00:38.00] Aakhir tumhe aana hai zara der lagegi
        Aakhir tumhe aana hai zara der lagegi
        Barish ka bahana hai zara der lagegi
        Aakhir tumhe aana hai zara der lagegi

        [01:15.00] (instrumental)

        [01:23.00] (Dialogues)
        Jaaneman aaja, tumhe apna samajh
        kar koi awaaz de raha hai
        Tumne mujhe apna samajha hi kab
        tum to mujhe dushman samajhte ho

        [01:34.00] Tum hote jo dushman to
        koi baat hi kya thi
        Tum hote jo dushman to
        koi baat hi kya thi
        Apno ko..
        Apno ko manana hai zara der lagegi
        Apno ko manana hai zara der lagegi

        [02:14.00] (instrumental)

        [02:19.00] (Dialogues)
        Meri jaan mere darde mohobbat
        ka kuchh khayal karo
        Sab kuchh bhula do ye dard
        e mohabbat bhi mita do

        [02:29.00] Hum dard mohabbat ka
        mita sakte hain lekin
        Hum dard mohabbat ka
        mita sakte hain lekin
        Ye rog..
        Ye rog purana hai, zara der lagegi
        Ye rog purana hai, zara der lagegi

        [03:08.00] (instrumental)

        [03:23.00] (Dialogues)
        Ye rumani andaz chhodo,
        jo kehna hai wo keh daalo
        Ye baat nahi wo ke
        main aate hi, suna doon

        [03:28.00] Ye baat nahi wo keee
        main aate hi suna doon
        Seene se , haaye..
        Seene se lagana hai, zara der lagegi
        Seene se lagana hai, zara der lagegi

        [04:10.00] Barish ka bahana hai, zara der lagegi

        [04:18.00] Aakhir tumhe aana haiii, zara der lagegi
        Aakhir tumhe aana haiii, zara der lagegi
        Ho zara, der lagegi
        Ho zara, der lagegi
        zara, der lagegi
        zara, der lagegi
        zara, der lagegi`,"Aaye Ho Meri Zindagi Mein":`[00:44.00] Aaye ho meri zindagi mein tum bahaar ban ke
        [00:55.00]Aaye ho meri zindagi mein tum bahaar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke
        Mere dil mein yun hi rehna, haaye
        Mere dil mein yun hi rehna tum pyar-pyar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke
        [01:29.00] Aankhon mein tum base ho sapne hazaar ban ke
        Aankhon mein tum base ho sapne hazaar ban ke
        Mere dil mein yun hi rehna, haaye
        Mere dil mein yun hi rehna tum pyar-pyar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke

        [01:57.00] (music)

        [02:39.00] Ghoonghat mein har kali thi
        Rangon mein na dhali thi
        [02:50.00] Ghoonghat mein har kali thi
        Rangon mein na dhali thi
        Na shokh thi hawayein
        Na khushboo manchali thi

        [03:02.00] (music)

        [03:03.00] Aaya hai ab ke mausam kaisa khumaar ban ke
        [03:14.00] Aaya hai ab ke mausam kaisa khumaar ban ke
        Mere dil mein yun hi rehna, haaye
        Mere dil mein yun hi rehna tum pyar-pyar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke

        [03:37.00] (music)

        [04:14.00] Man ka nagar tha khaali
        Sookhi padi thi daali
        [04:25.00] Man ka nagar tha khaali
        Sookhi padi thi daali
        Holi ke rang fike
        Be-noor thi diwali

        [04:37.00] Rimjhim baras pade ho tum to funhaar ban ke
        [04:49.00] Rimjhim baras pade ho tum to funhaar ban ke
        Mere dil mein yun hi rehna, haaye
        Mere dil mein yun hi rehna tum pyar-pyar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke
        [05:16.00] Aankhon mein tum base ho sapne hazaar ban ke
        Mere dil mein yun hi rehna, haaye
        Mere dil mein yun hi rehna tum pyar-pyar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke

        [05:40.00] Aaye ho meri zindagi mein tum bahaar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke
        Aaye ho meri zindagi mein tum bahaar ban ke`,"Barsaat Ke Mausam Mein":`[00:16.00] Barasaat ke mausam mein
        Tanhaayi ke aalam mein
        Barasaat ke mausam mein
        Tanhaayi ke aalam mein
        Main ghar se nikal aayaa
        Botal bhi uthaa laaya
        [00:41.00] Abi zindaa huun to ji lene do, ji lene do
        Bhari barasaat mein pi lene do

        [00:53.00] hummm...

        [00:57.00] Barasaat ke mausam mein
        [01:02.00] Tanhaayi ke aalam mein
        [01:07.00] Barasaat ke mausam mein
        [01:09.00] Tanhaayi ke aalam mein
        [01:12.00] Main ghar se nikal aayaa
        [01:14.00] Botal bhi uthaa laaya
        [01:20.00] Abi zindaa huun to ji lene do, ji lene do
        Bhari barasaat mein pi lene do

        [01:31.00] (instrumental)

        [01:57.00] Mujhe tukadon mein nahin jinaa hai
        Qataraa qataraa to nahin pinaa hai
        Mujhe tukadon mein nahin jinaa hai
        Qataraa qataraa to nahin pinaa hai
        Ho aaj paimaane hataa do yaaron
        Haan saaraa maikaanaa pilaa do yaaron
        Maikadon mein to piyaa karataa huun
        Maikadon mein to piyaa karataa huun
        Chalati raahon mein to pi lene do
        Abi zindaa huun to ji lene do, ji lene do
        Bhari barasaat mein pi lene do

        [02:52.00] (instrumental)

        [03:23.00] Aaj ki shyaam badi bojal hai
        Aaj ki raat badi katil hai
        Ho aaj ki shyaam dhalegi kaise
        Haa aaj ki raat kayegii kaise
        Aag se aag bujegii dil ki
        Aag se aag bujegii dil ki
        Mujhe ye aag bhi peelene do
        Abi zindaa huun to ji lene do, ji lene do
        Bhari barasaat mein pi lene do
        Abi zindaa huun to ji lene do, ji lene do
        Bhari barasaat mein pi lene do

        [04:19.00] end`,"Chaiyya Chaiyya":`[00:03.00] Jinke Sar Ho Ishq Ki Chhaanv
        Ishq Ki Chhaanv
        Paaon Ke Niche Jannat Hogi
        Jinke Sar Ho Ishq Ki Chhaanv

        [00:34.00] (instrumental)

        [00:44.00] Chal Chaiyya Chaiyya Chaiyya Chaiyya
        Chal Chaiyya Chaiyya Chaiyya Chaiyya
        Chaiyya Chaiyya Chaiyya Chaiyya
        Chal Chaiyya Chaiyya Chaiyya Chaiyya

        [00:55.00] Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan

        [01:05.00] Saare Ishq Ki Chhaanv
        Chal Chaiyyan Chaiyyan
        Saare Ishq Ki Chhaanv
        Chal Chaiyyan

        [01:10.00] Paaon Jannat Chale
        Chal Chaiyyan Chaiyyan
        Paaon Jannat Chale Chal Chaiyyan

        [01:15.00] Chal Chaiyya Chaiyya Chaiyya Chaiyya
        Chal Chaiyya Chaiyya Chaiyya Chaiyya
        Chal Chaiyya Chaiyya Chaiyya Chaiyya
        Chal Chaiyya Chaiyya Chaiyya Chaiyya

        [01:27.00] (instrumental)

        [01:29.00] Woh Yaar Hai Jo Khushbu Ki Tarah
        Jiski Zubaan Urdu Ki Tarah
        Meri Shaam Raat Meri Kaaynaat
        Woh Yaar Mera Saiyyan Saiyyan

        [01:39.00] Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan

        [01:50.00] (instrumental)

        [02:31.00] Gulposh Kabhi Itraaye Kahin
        Mehke Toh Nazar Aa Jaaye Kahin
        [02:37.00] (music)
        [02:42.00] Gulposh Kabhi Itraaye Kahin
        Mehke Toh Nazar Aa Jaaye Kahin
        Tabeez Bana Ke Pehnun Use
        Aayat Ki Tarah Mil Jaaye Kahin

        [02:55.00] Tabeez Bana Ke Pehnun Use
        Aayat Ki Tarah Mil Jaaye Kahin
        Gulposh Kabhi Itraaye Kahin
        Mehke Toh Nazar Aa Jaaye Kahin

        [03:06.00] Tabeez Bana Ke Pehnun Use
        Aayat Ki Tarah
        Woh Yaar Hai Jo Imaan Ki Tarah
        Mera Nagma Wohi Mera Kalma Wohi

        [03:11.00] Mera Nagma Nagma Mera Kalma Kalma
        Mera Nagma Nagma Mera Kalma Kalma
        Mera Nagma Nagma Mera Kalma Kalma
        Mera Nagma Nagma Mera Kalma Kalma

        [03:24.00] Yaar Misal-e-Os Chale
        Paaon Ke Tale Firdaus Chale
        Kabhi Daal Daal Kabhi Paat Paat
        Main Hawa Pe Dhoondun Uske Nishaan

        [03:34.00] Saare Ishq Ki Chhaanv
        Chal Chaiyya Chaiyya
        Saare Ishq Ki Chhaanv
        Chal Chaiyya

        [03:39.00] Paaon Jannat Chale
        Chal Chaiyya Chaiyya
        Paaon Jannat Chale Chal Chhaiyan

        [03:45.00] Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan

        [03:55.00] (music)

        [04:50.00] Main Uske Roop Ka Shehdaai
        Woh Dhoop Chhaanv Sa Harjaai
        Woh Shauk He Rang Badalta Hai
        Main Rang Roop Ka Saudaai
        Main Rang Roop Ka Saudaai

        [05:06.00] Jinke Sar Ho Ishq Ki Chhaanv
        Paaon Ke Niche Jannat Hogi
        Jinke Sar Ho Ishq Ki Chhaanv
        Paaon Ke Niche Jannat Hogi
        Shaam Raat Meri Kaaynat
        Woh Yaar Mera Saiyyan Saiyyan

        [05:21.00] Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan

        [05:34.00] Saare Ishq Ki Chhaanv
        Chal Chaiyya Chaiyya
        Saare Ishq Ki Chhaanv
        Chal Chaiyya

        [05:39.00] Paaon Jannat Chale
        Chal Chaiyya Chaiyya
        Paaon Jannat Chale Chal Chaiyya

        [05:44.00] Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan
        Chal Chaiyyan Chaiyyan Chaiyyan Chaiyyan`,"Dil Jane Jigar Tujhpe":`[00:37.00] Dil jaan jigar tujhape nisaar kiya hai
        [00:46.00] Dil jaan jigar tujhape nisaar kiya hai
        Dil jaan jigar tujhape nisaar kiya hai
        Kyon, pyaar kiya hai re
        Tujhe pyaar kiya hai
        Pyaar kiya hai re tujhe pyaar kiya hai

        [01:04.00] Tune bhee mujhe kitna beqaraar kiya hai
        Tune bhee mujhe kitna beqaraar kiya hai
        Kyon, pyaar kiya hai re bahut pyaar kiya hai
        Pyaar kiya hai re bahut pyaar kiya hai
        Dil jaan jigar tujhape nisaar kiya hai
        Tune bhee mujhe kitna beqaraar kiya hai
        Pyaar kiya hai re tujhe pyaar kiya hai
        Pyaar kiya hai re bahut pyaar kiya hai

        [01:40.00] (instrumental)

        [02:10.00] Mai toh hu teri adaao kaa maara
        Mai toh hu teri adaao kaa maara
        Tu hee kyon samajhe naa meraa ishaara
        Tu hee kyon samajhe naa meraa ishaara
        Jhum ke tu aaja baaho mein sama ja
        Jhum ke tu aaja baaho mein sama ja
        Abb tak bada hee intzaar kiya hai
        Kyon, pyaar kiya hai re tujhe pyaar kiya hai
        Pyaar kiya hai re tujhe pyaar kiya hai
        Tune bhee mujhe kitna beqaraar kiya hai
        Tune bhee mujhe kitna beqaraar kiya hai
        Kyon, pyaar kiya hai re bahut pyaar kiya hai
        Pyaar kiya hai re bahut pyaar kiya hai

        [03:08.00] (MUSIC)

        [03:34.00] Meree taraf dekh jara najare utha ke
        Meree taraf dekh jara najare utha ke
        Palako me rakha hai tujhako chhupa ke
        Palako me rakha hai tujhako chhupa ke
        Apana banaayenge tujhako rijhaayenge
        Apana banaayenge tujhako rijhaayenge
        Tere liye toh yeh singaar kiya hai
        Kyon, pyaar kiya hai re bahut pyaar kiya hai
        Pyaar kiya hai re bahut pyaar kiya hai
        Dil jaan jigar tujhape nisaar kiya hai
        Dil jaan jigar tujhape nisaar kiya hai
        Kyon, pyaar kiya hai re tujhe pyaar kiya hai
        Pyaar kiya hai re tujhe pyaar kiya hai

        [04:31.00] Tune bhee mujhe kitna beqaraar kiya hai
        Tune bhee mujhe kitna beqaraar kiya hai
        Kyon, pyaar kiya hai re bahut pyaar kiya hai
        Pyaar kiya hai re bahut pyaar kiya hai
        Pyaar kiya hai re tujhe pyaar kiya hai
        Pyaar kiya hai re bahut pyaar kiya hai
        [04:56.00] end`,"Dil Ne Yeh Kaha Hain Dil Se":`[00:11.00] Dil ne yeh kaha hai dil se
        [00:17.00] Mohabbat ho gayi hai tumse
        [00:22.00] (music)
        [00:35.00] Dil ne yeh kaha hai dil se
        [00:38.00] Dil ne yeh kaha hai dil se
        [00:41.00] Mohabbat ho gayi hai tumse
        [00:44.00] Mohabbat ho gayi hai tumse
        [00:47.00] Meri jaan mere dilbar
        Mera aitbaar karlo
        Jitna beqaraar hun main
        Khudko beqaraar karlo
        Meri dhadkano ko samjho
        Tum bhi mujhse pyaar karlo
        [01:05.00] la.. la..
        [01:11.00]Dil ne yeh kaha hai dil se
        Aa aa aa aa aa

        [01:16.00] Mohabbat ho gayi hai tumse
        Aa aa aa aa aa
        Meri jaan mere dilbar
        Mera aitbaar karlo
        Jitna beqaraar hun main
        Khudko beqaraar karlo
        Meri dhadkano ko samjho
        Tum bhi mujhse pyaar karlo
        Aa aa aa aa aa

        [01:46.00] Dil ne yeh kaha hai dil se
        Mohabbat ho gayi hai tumse

        [01:53.00] (music)

        [02:16.00] Tum jo kehdo to chaand taron
        Ko tod laaunga main
        In hawaaon ko in ghataaon
        Ko mod laaunga main
        [02:28.00] haa.. haa..
        [02:34.00] Ho tum jo kehdo
        To chaand taron
        Ko tod laaunga main
        In hawaaon ko in ghataaon
        Ko mod laaunga main

        [02:47.00] Kaisa manzar hai
        Meri aankhon mein
        Kaisa ehsaas hai
        Paas darya hai door sehra hai
        Phir bhi kyun pyaas hai

        [02:57.00] Kadmon mein
        Jahan yeh rakhdoon
        Mujhse aankhen chaar karlo
        Jitna beqaraar hun main
        Khudko beqaraar karlo
        Meri dhadkano ko samjho
        Tum bhi mujhse pyaar karlo

        [03:15.00] aaan.. aaan..

        [03:21.00] Dil ne yeh kaha hai dil se
        Mohabbat ho gayi hai tum se

        [03:27.00] heyy.. heyy.. hhah.. hhah..

        [04:09.00] Meri yaadon mein
        Mere khwaabon
        Mein roz aate ho tum
        Is tarah bhalaa
        Meri jaan mujhe
        Kyun sataate ho tum

        [04:20.00] aaan.. aaan..

        [04:26.00] Meri yaadon mein
        Mere khwaabon
        Mein roz aate ho tum
        Is tarah bhalaa
        Meri jaan mujhe
        Kyun sataate ho tum

        [04:39.00] Teri baahon se
        Teri raahon se
        Yun na jaaoonga main
        Yeh iraada hai
        Mera waada hai
        Laut aaoonga main
        Duniya se tujhe churaloon
        Thoda intezaar karlo
        Jitna beqaraar hun main
        Khudko beqaraar karlo
        Meri dhadkano ko samjho
        Tum bhi mujhse pyaar karlo
        Tum bhi mujhse pyaar karlo
        Tum bhi mujhse pyaar karlo

        [05:17.00] (instrumental) dev

        [05:27.00] Kaise aankhen chaar karloon
        Kaise aitbaar karloon
        Apni dhadkano ko kaise
        Itna beqaraar karloon
        Kaise tujhko dil main dedoon
        Kaise tujhse pyaar karloon

        [05:53.00] (instrumental)

        [06:00.00] Dil ne yeh kaha hai dil se
        Dil ne yeh kaha hai dil se
        Mohabbat ho gayi hai tumse
        Mohabbat ho gayi hai tum se
        Meri jaan mere dilbar
        Mera aitbaar karlo
        Jitna beqaraar hun main
        Khudko beqaraar karlo
        Meri dhadkano ko samjho
        Tum bhi mujhse pyaar karlo

        [06:30.00] aaan.. aaan..
        [06:39.00] Tum bhi mujhse pyaar karlo
        Tum bhi mujhse pyaar karlo
        Tum bhi mujhse pyaar karlo
        Tum bhi mujhse pyaar karlo
        [06:52.00] Tum bhi mujhse pyaar karlo`,"Do Dil Mil Rahe Hain":`[00:05.00] Gupchup Gupchup Chup Chup oo
        Gupchup Gupchup Chup Chup oo
        Gupchup Gupchup Chup Chup oo
        Gupchup Gupchup Chup Chup oo

        [00:16.00] (instrumental)

        [00:25.00] Do Dil Mil Rahe Hain
        Do Dil Mil Rahe Hain
        Magar Chupke Chupke
        Do Dil Mil Rahe Hain
        Magar Chupke Chupke

        [00:50.00] Sabko Ho Rahi Hai
        Haan Sabko Ho Rahi Hai
        Khabar Chupke Chupke
        Ho O O O Do Dil Mil Rahe Hain
        Magar Chupke Chupke

        [01:15.00] (instrumental)

        [01:32.00] Sansoon Mein Badi Bekarari
        Aankhon Mein Kai Rat Jage
        Kabhi Kanhi Lag Jaye Dil To
        Kanhi Phir Dil Na Lagey
        Apna Dil Main Zara Tham Loon
        Jaadu Ka Main Ise Naam Doon

        [02:02.00] Jaadu Kar Raha Hai
        Jaadu Kar Raha Hai
        Asar Chupke Chupke
        Do Dil Mil Rahe Hain
        Magar Chupke Chupke

        [02:28.00] (instrumental)

        [02:33.00] Aise Bhole Ban Kar Hain Baithe
        Jaise Koi Baat Nahin
        Sab Kuch Nazar Aa Raha Hai
        Din Hai Yeh Raat Nahin
        Kya Hai Kuch Bhi Nahin Hai Agar
        Hoton Pe Hai Khamoshi Magar

        [03:03.00] Baatein Kar Rahin Hain
        Baatein Kar Rahin Hain
        Nazar Chupke Chupke
        Do Dil Mil Rahe Hain
        Magar Chupke Chupke

        [03:28.00] (instrumental)

        [03:49.00] Kahin Aag Lagne Se Pehle
        Uthta Hai Aisa Dhuaan
        Jaisa Hai Idhar Ka Nazara O O
        Vaisa Hi Udhar Ka Samaa
        Dil Mein Kaise Kasak Si Jagi
        Dono Janib Barabar Lagi

        [04:20.00] Dekho To Idhar Se
        Dekho To Idhar Se
        Udhar Chupke Chupke

        [04:35.00] Do Dil Mil Rahe Hain
        Magar Chupke Chupke
        Sabko Ho Rahi Hai
        Haan Sabko Ho Rahi Hai
        Khabar Chupke Chupke
        Ho O O O Do Dil Mil Rahe Hain
        Magar Chupke Chupke

        [05:11.00] Gupchup Gupchup Chup Chup oo
        Gupchup Gupchup Chup Chup oo
        Magar Chupke Chupke
        Magar Chupke Chupke
        Hmm Hmm Chupke Chupke
        Ah Haa Chupke Chupke
        [05:36.00] (music)`,Jhanjhariya:`[00:45.00] Jhanjhariyaa usaki chhanak gayi,
        Chunari bhi sar se sarak gayi
        Meri nazar usase mili toh,
        Usaki nazar sharama ke jhuk gayi

        [01:01.00] Jhanjhariyaa usaki chhanak gayi
        Chunari bhi sar se sarak gayi
        Meri nazar usase mili toh,
        Usaki nazar sharama ke jhuk gayi
        Jhanjhariyaa………

        [01:21.00] (music)

        [01:54.00] Ho usase nazar mili bich bajar me
        [02:01.00} Ha usase nazar mili bich bajar me
        Dil gaya lut nazaro ki takarar me
        Mud mud ke woh dekhe mujhe
        Jaise ki woh khud bhi machal gayi,

        [02:18.00] Jhanjhariyaa usaki chhanak gayi,
        Chunari bhi sar se sarak gayi
        Meri nazar usase mili toh,
        Usaki nazar sharama ke jhuk gayi
        Jhanjhariyaa………
        
        [02:38.00] (music)
        
        [03:12.00] Kissa ajib tha pahali mulaqaat ka
        [03:19.00]Kissa ajib tha pahali mulaqaat ka
        Aalam gajab huwa mere dil ke hal ka
        ik pal mujhe aisa laga
        jaise meri dhadakan ruk gayi

        [03:36.00] Jhanjhariyaa usaki chhanak gayi,
        Chunari bhi sar se sarak gayi
        Meri nazar usase mili toh,
        Usaki nazar sharama ke jhuk gayi
        Jhanjhariyaa………

        [04:11.00] (music)`,"Khal Nayak Hoon Main":`[00:27.00] ji haan mai hu khalnayak

        [00:31.00] nayak nahi khalnayak hai tu
        [00:40.00] nayak nahi khalnayak hai tu,
        zulmi bada dukhdayak hai tu
        iss pyar ki tujhko kya kadar,
        iss pyar ke kaha layak hai tu

        [01:04.00] nayak nahi khalnayak hu mai
        [01:13.00] nayak nahi khalnayak hu mai,
        zulmi bada dukhdayak hu mai
        hai pyar kya mujhko kya khabar,
        bas yaar nafrat ke layak hu mai
        [01:37.00] nayak nahi khalnayak hu mai

        [01:47.00] (music)

        [02:36.00] teri tabiyat to rangin hai par tu mohabbat ki tauhin hai
        [02:54.00] kuchh bhi nahi yaad iske siva na mai kisi ka na koi mera
        jo chiz maangi nahi vo mili, karta mai kya aur bas chhin li
        bas chhin li bas chhin li

        [03:18.00] (music)

        [03:22.00] mai bhi sharafat se jita magar,
        mujhko sharifo se lagta tha dar
        sabko pata tha mai kamzor hu,
        mai isliye aaj kuchh aur hu
        kuchh aur hu kuchh aur hu
        [03:46.00] nayak nahi khalnayak hu mai,
        [03:56.00] zulmi bada dukhdayak hu mai
        hai pyar kya mujhko kya khabar,
        bas yaar nafrat ke layak hu mai
        [04:11.00] nayak nahi khalnayak hai tu

        [04:20.00] (music)

        [05:05.00] kitne khilauno se khela hai tu afasos phir bhi akela hai tu
        [05:23.00] bachpan me likhi kahani meri kaise badalati javani meri
        sara samundar mere paas hai, ek bund paani meri pyas hai
        meri pyas hai meri pyas hai

        [05:51.00] dekha tha maa ne kabhi pyar se ab mil gayi vo bhi sansar se
        mai vo lutera hu jo lut gaya, maa ka aanchal kahi chhup gaya
        [06:16.00] nayak nahi khalnayak hu mai, zulmi bada dukhdayak hu mai
        hai pyar kya mujhko kya khabar, bas yaar nafrat ke layak hu mai

        [06:41.00] nayak nahi khalnayak hai tu, khalnayak hu mai
        nayak nahi khalnayak hu mai, nayak nahi khalnayak hu mai
        nayak khalnayak nayak khalnayak nayak khalnayak
        
        [07:07.00] (music)`,"Mera Dil Bhi Kitna Pagal Hai":`[00:21.00] Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai

        [00:40.00] Par saamne jab tum aate ho,
        Par saamne jab tum aate ho,
        Kuch bhi kehne se darta hai
        O mere saajan, o mere saajan,
        Saajan saajan, mere saajan
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai

        [01:20.00] (music)

        [01:48.00] Kitna isko samajhata hoon,
        Kitna isko behlata hoon
        [01:59.00] Kitna isko samajhata hoon,
        Kitna isko behlata hoon
        Naadaan hai kuch na samajhata hai,
        Din raat ye aahen bharta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai

        [02:36.00] Par saamne jab tum aate ho,
        Kuch bhi kehne se darta hai
        O mere saajan, o mere saajan,
        Saajan saajan, mere saajan
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai

        [03:19.00] (music)

        [03:45.00] Har pal mujhko tadpata hai,
        Mujhe saari raat jagata hai
        [03:57.00] Har pal mujhko tadpata hai,
        Mujhe saari raat jagata hai
        Is baat ki tumko khabar nahi,
        Ye sirf tumhi pe marta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai
        Mera dil bhi kitna pagal hai
        Ye pyar to tum se karta hai

        [04:34.00] Par saamne jab tum aate ho
        Par saamne jab tum aate ho
        Kuch bhi kehne se darta hai
        O mere saajan, o mere saajan,
        Saajan saajan, mere saajan`,"Kya Mausam Aaya Hai":`[0058.00] Kya mausam aayaa hai
        Kya mausam aayaa hai

        [01:08.00] Purab se mastaani purvaai chali
        Khushboo se mahkee hai phulon kee gali
        Geet gae nadiya, laharon mein hai sargam
        Hai ghata deewaanii, boondon mein hai chham-chham

        [01:31.00] Kya mausam aayaa hai
        Kya mausam aayaa hai

        [01:42.00] Purab se mastaani purvaai chali
        Khushboo se mahkee hai phulon kee gali
        Geet gae nadiya, laharon mein hai sargam
        Hai ghata deewaanii, boondon mein hai chham-chham

        [02:04.00] Kya mausam aayaa hai

        [02:48.00] Mehalon kee raani, dukh se begaani
        Lagaa jae naa dhoop tuje
        Ud-ud jaaoon, saba ko bataaoon
        Dhoop lage hai chhaanv muje

        [03:01.00] Mehalon kee raani, dukh se begaani
        Lagaa jae naa dhoop tuje
        Ud-ud jaaoon, saba ko bataaoon
        Dhoop lage hai chhaanv muje

        [03:13.00] Kaanton se ho jae paanv naa ghaayal
        Kaanton pe naachoongi band ke main paayal
        Ghar nahin hai, ye to kutiyaa hamaari hai
        Ye teri kutiyaa to mehalon se pyaaree hai

        [03:35.00] Kya mausam aayaa hai
        Kya mausam aayaa hai

        [03:45.00] Purab se mastaani purvaai chali
        Khushboo se mahkee hai phulon kee gali
        Geet gae nadiya, laharon mein hai sargam
        Hai ghata deewaanii, boondon mein hai chham-chham

        [04:08.00] Kya mausam aayaa hai

        [04:44.00] Bahtee pavan ke, ujle gagan ke
        Jee karthaa hai saath chaluun
        Chikani dagar hai, girane ka dar hai
        Thaam ke tera haath chaluun

        [04:58.00] Bahtee pavan ke, ujle gagan ke
        Jee karthaa hai saath chaluun
        Chikani dagar hai, girane ka dar hai
        Thaam ke tera haath chaluun

        [05:09.00] Dharti pe bikhare hain os ke moti
        Ye teri bolee to sur nae piroti
        Dard ka vo aangan main chhod ke aayi
        Kya tuje jananath kee raunak nahin bhaaee?

        [05:30.00] Kya mausam aayaa hai
        Kya mausam aayaa hai

        [05:41.00] Purab se mastaani purvaai chali
        Khushboo se mahkee hai phulon kee gali
        Geet gae nadiya, laharon mein hai sargam
        Hai ghata deewaanii, boondon mein hai chham-chham

        [06:03.00] Kya mausam aayaa hai
        Kya mausam aayaa hai`,"Love Tujhe Love Main":`[00:12.00] Teri adaaon pe marta hoon
        [00:20.00] Teri adaaon pe marta hoon
        Love tujhe love main karta hoon

        [00:29.00] Tujhse bichadne se darti hoon
        [00:35.00] Tujhse bichadne se darti hoon
        Love tujhe love main karti hoon

        [00:44.00] ((Teri adaaon pe marta hoon
        Love tujhe love main karta hoon))
        ((Teri adaaon pe marta hoon
        Love tujhe love main karta hoon))

        [01:07.00] Zara paas aa mujhe kuch kehnaa hain
        Zara paas aa mujhe kuch kehnaa hain
        Door nahi ek pal rehnaa hai

        [01:22.00] (music)

        [01:25.00] Dekho meri itne kareeb na aavo
        Darr lagta hai na, haath lagaavo

        [01:35.00] Ummm main hoon tera, tu hai meri
        Mujhse bhi, kyaa darnaa
        Chodo tum, zid karnaa
        Zid karnaa

        [01:48.00] (music)

        [01:52.00] Tujhe dekh ke aahe bharta hoon
        [02:00.00] Tujhe dekh ke aahe bharta hoon
        Love tujhe love main karta hoon

        [02:08.00] ((Teri adaaon pe marta hoon
        Love tujhe love main karta hoon))
        ((Teri adaaon pe marta hoon
        Love tujhe love main karta hoon))

        [02:24.00] (music)

        [02:47.00] Jab mujhe chodke tu jaatha hai
        [02:55.00] Jab mujhe chodke tu jaatha hai
        Sach kehti hoon rona aatha hai

        [03:05.00] Ishq main aksar yeh hotha hai
        Pyaar jo karta hai rotha hai

        [03:15.00] Chaahat ke, saare gham
        Seh loongi, chodoongi
        Duniya ko, tere dil main
        Rehloongi, rehloongi

        [03:33.00] Tere liye sajthi sanwarti hoon
        [03:40.00] Tere liye sajthi sanwarti hoon
        Love tujhe love main karti hoon

        [03:49.00] ((Teri adaaon pe marta hoon
        Love tujhe love main karta hoon))

        [03:57.00] ((Tujhse bichadne se darti hoon))
        [04:05.00] ((Tujhse bichadne se darti hoon
        Love tujhe love main karti hoon))

        [04:12.00] (music)`,"Paas Woh Aane Lage":`[00:48.00] Paas Woh Aane Lage Zara Zara
        Nazrein Churane Lage Zara Zara
        Dil Pe Woh Chhaane Lage Zara Zara
        Zara Zara Zara Zara Zara Zara

        [01:06.00] Dhadkane Churane Lage Zara Zara
        Paas Wo Aane Lage Zara Zara

        [01:24.00] Paas Woh Aane Lage Zara Zara
        Humein Woh Chahne Lage Zara Zara
        Apna Banane Lage Zara Zara
        Zara Zara Zara Zara Zara Zara

        [01:42.00] Dil Ko Dhadkane Lage Zara Zara
        Paas Woh Aane Lage Zara Zara
        Paas Woh Aane Lage Zara Zara

        [01:55.00] (music)

        [02:32.00] Ho Kehti Hai Yeh Teri Payal
        Toone Kiya Mujhe Ghayal Ghayal
        Shaam Savere Dil Mein Mere
        Toone Macha Di Halchal Halchal

        [02:51.00] Teri Meri Prem Kahani
        Hai Sagar Ka Gehra Paani
        Lakhon Din Aur Lakhon Raatein
        Khatam Na Hogi Apni Baatein

        [03:09.00] Neendein Udane Lage Zara Zara
        Apna Banane Lage Zara Zara
        Humein Woh Chahne Lage Zara Zara
        Zara Zara Zara Zara Zara Zara

        [03:27.00] Dhadkane Churane Lage Zara Zara
        Paas Woh Aane Lage Zara Zara
        Paas Woh Aane Lage Zara Zara

        [03:43.00] (music)

        [04:23.00] Ho Aaja Mujhko Pagal Kar De
        Khushiyon Se Yeh Daaman Bhar De
        Hasrat Hai Yeh Dil Mein Mere
        Mahbooba Se Dulhan Kar De

        [04:42.00] Maang Mein Teri Taare Bhar Doon
        Chaand Ko Tera Kangan Kar Doon
        Phoolon Se Tasveer Banao
        Kiranon Se Main Roop Sajaun

        [04:59.00] Dhadkane Churane Lage Zara Zara
        Saanson Mein Basane Lage Zara Zara
        Dil Ko Lubhane Lage Zara Zara
        Zara Zara Zara Zara Zara Zara

        [05:17.00] Dhadkane Churane Lage Zara Zara
        Paas Woh Aane Lage Zara Zara
        Apna Banane Lage Zara Zara
        Zara Zara Zara Zara Zara Zara

        [05:35.00] Paas Woh Aane Lage Zara Zara
        Paas Woh Aane Lage Zara Zara
        Hum Bhi Unhein Chahne Lage Zara Zara

        [05:52.00] Zara Zara, Haan Zara Zara
        Zara Zara, Zara Zara
        Zara Zara, Haan Zara Zara`,"Saaton Janam Main Tere":`[00:30.00] I love you, I love you
        I love you, I love you

        [00:46.00] (music)

        [00:52.00] Saaton janam mein tere
        Main saath rahunga yaar
        Saaton janam mein tere
        Main saath rahunga yaar
        Mar bhi gaya toh main tujhe
        Karta rahunga pyar

        [01:15.00] Sapana samajh ke bhul na jana
        O dilwale saath nibhana
        Saath nibhana dildaar

        [01:26.00] Saaton janam mein tere
        Main saath rahunga yaar
        Mar bhi gaya toh main tujhe
        Karta rahunga pyar

        [01:41.00] (music)

        [02:12.00] Sun meri shehzadi
        Main hoon tera shehzada
        Sun meri shehzadi
        Main hoon tera shehzada
        Baahon mein leke tujhe
        Main karta hoon vaada

        [02:34.00] Aye jaan-e-tamanna meri
        Main kha ke kasam teri
        Yeh karta hoon ikaraar
        Mar bhi gaya toh main tujhe
        Karta rahunga pyar

        [02:53.00] Sapna samajhke bhul na jana
        O dilwale saath nibhana
        Saath nibhana dildaar

        [03:05.00] Saaton janam mein tere
        Main saath rahunga yaar
        Mar bhi gaya toh main tujhe
        Karta rahunga pyar

        [03:19.00] (music)

        [04:04.00] Ehsaas nahi tujhko
        Main pyar karu kitna
        Ehsaas nahi tujhko
        Main pyar karu kitna
        Kar dungi tujhe pagal
        Chahungi sanam itana

        [04:27.00] Daaman na kabhi chhute
        Tode na kabhi tuute
        Jo rishta jude ek baar
        Mar bhi gaya toh main tujhe
        Karta rahunga pyar

        [04:46.00] Sapana samajhke bhul na jana
        O dilwale saath nibhana
        Saath nibhana dildaar

        [04:57.00] Saaton janam mein tere
        Main saath rahunga yaar
        Mar bhi gaya toh main tujhe
        Karta rahunga pyar

        [05:12.00] I love you, I love you
        I love you, I love you
        
        [05:29.00] (music)`,"Sochenge Tumhe Pyar":`[00:36.00] सोचेंगे तुम्हे प्यार करे के नहीं
        सोचेंगे तुम्हे प्यार करे के नहीं
        ये दिल बेक़रार करें के नहीं
        ख़्वाबों में छुपाया तुमको
        यादों में बसाया तुमको
        ख़्वाबों में छुपाया तुमको
        यादों में बसाया तुमको
        मिलोगे हमें तुम जानम कहीं न कहीं
        सोचेंगे तुम्हे प्यार करे के नहीं
        ये दिल बेक़रार करें के नहीं

        [01:35.00] (instrumental)

        [01:59.00] तुम हो खिलता महका सा कमाल
        [02:07.00] तुम हो खिलता महका सा कमाल
        हम जो गायें तुम हो वोह ग़ज़ल
        कमसिन भोला सा मुखड़ा
        लगती हो चाँद का एक टुकड़ा
        हम कितनी तारीफ़ करें
        देखके तुमको आहें भरें
        तुमसे नहीं है कोईप्यारा
        सनम प्यारा सनम
        सोचेंगे तुम्हे प्यार करे के नहीं
        ये दिल बेक़रार करें के नहीं

        [03:04.00] (instrumental)

        [03:37.00] जिस दिन तुम को दिखेगी नज़र
        [03:45.00] जिस दिन तुम को दिखेगी नज़र
        जाने दिल पे होगा क्या असर
        रखेंगे तुमको निग़ाहों में
        भर लेंगे तुम्हे बांहों में
        ज़ुल्फ़ों को हम सुलझाएंगे
        इश्क़ में दुनिया भुला देंगे
        ये बेक़रारी अब तो होगी न कम होगी न कम
        सोचेंगे तुम्हे प्यार करे के नहीं
        ये दिल बेक़रार करें के नहीं

        [04:43.00] ख़्वाबों में छुपाया तुमको
        यादों में बसाया तुमको
        ख़्वाबों में छुपाया तुमको
        यादों में बसाया तुमको
        मिलोगे हमें तुम जानम कहीं न कहीं
        सोचेंगे तुम्हे प्यार करे के नहीं
        ये दिल बेक़रार करें के नहीं
        [05:21.00] हे..हे..ला..ला..ला..`,"Teri Chunnariya":`[00:00.00] La la la la la la
        La la la la

        [00:11.00] Sarki jo sar se woh dheere dheere
        Pagal hua re main dheere dheere
        Teri chunariya dil le gayee

        [00:30.00] (music)

        [00:50.00] Sarki jo sar se woh dheere dheere
        Pagal hua re main dheere dheere
        Sarki jo sar se woh dheere dheere
        Pagal hua re main dheere dheere
        Teri chunariya dil le gayee
        Teri ye bindiyaa dil le gayee
        [01:15.00] (music)

        [01:23.00] O ho ho ho ho ho
        La la la la la
        La ra la la la la

        [01:38.00] Tumse milke ye jana hai
        Hota kyoon dil ye deewana hai
        Tai kar liya, tumhe panaa hai
        Kya pyaar hai ye dekhana hai

        [01:53.00] Mere bhole sanam
        Mere pyaare sanam
        Deewane sanam
        Anjaane sanam
        Boley mera kangana dheere dheere
        Boley meri payal dheere dheere

        [02:10.00] Ho, boley tera kangana dheere dheere
        Boley teri payal dheere dheere
        Teri chunariya dil le gayee
        Teri ye bindiyaa dil le gayee…

        [02:35.00] (music)

        [02:46.00] La la la la, la la la

        [02:51.00] Ho ho ho ho ho ho
        Ha ha ha ha
        [03:11.00] Tera mera janmoon ka naata hai
        Yoon hi nahin dil lubhaata hai
        Rishtey ye rab hi banataa hai
        Karke bahaney milataa hai ha ha

        [03:26.00] Meri yaadon mein tum
        Meri baaton mein tum
        Meri saanson mein tum
        Meri raahon mein tum
        Boley meri dhadkan dheere dheere
        Boley meri tadpan dheere dheere

        [03:42.00] Ho, boley meri dhadkan dheere dheere
        Boley meri tadpan dheere dheere
        Teri chunariya dil le gayee
        Teri ye bindiyaa dil le gayee
        [04:08.00] (music)`,"Yeh Jo Teri Payalon Ki":`[00:31.00] Ye jo teri paylo ki chan chan hai
        Ye jo teri paylo ki chan chan hai
        Aashiko ke dil ki ye dhadkan hai
        Ye jo teri paylo ki chan chan hai
        Aashiko ke dil ki ye dhadkan hai
        Chan chan sune jaye haye haye kare jaye
        Payal hai teri ya garjan hai

        [00:57.00] Ban ke diwana mera picha na kar
        Ban ke diwana mera picha na kar
        Teri meri yari honi muskil hai
        Kabhi mujhe roke tu kabhi mujhe toke tu
        Aashik nahi mera dusman hai
        Ye jo teri paylo ki chan chan hai
        Aashiko ke dil ki ye dhadkan hai
        Aashiko ke dil ki ye dhadkan hai

        [01:28.00] (music)

        [01:52.00] Julf se lekar jhanjhar tak
        Tu jannat ka ek najara hai
        [02:03.00] Julf se lekar jhanjhar tak
        Tu jannat ka ek najara hai
        Lagta hai rab ne tujhko jami pe
        Mere liye utara hai

        [02:19.00] Khwab itne suhane dekh na o diwane
        Tujhpe fida ho jau mai dil mera na ye mane
        Yahi to samjh nahi paya hu mai
        Yahi to samjh nahi paya hu mai
        Aisi bhi kya teri meri anban hai
        Chan chan sune jaye haye haye kare jaye
        Payal hai teri ya garjan hai

        [02:54.00] Ban ke diwana mera picha na kar
        Teri meri yari honi muskil hai
        Teri meri yari honi muskil hai

        [03:05.00] (music)

        [03:40.00] De denge teri khatir ja bhi
        Sabhi yahi kahte hai
        [03:52.00] De denge teri khatir ja bhi
        Sabhi yahi kahte hai
        Najar sabhi ki or kahi to
        Kadam kahi rahte hai

        [04:07.00] Aaisa nahi mai awara
        Dil nahi mera banjara
        Is kadar bhi akad na
        Na samjh bechara
        Ise samjhana jara muskil hai
        Ise samjhana jara muskil hai
        Der se manegi par mumkin hai

        [04:34.00] Chan chan sune jaye haye haye kare jaye
        Payal hai teri ya garjan hai
        Ye jo teri paylo ki chan chan hai
        Ye jo teri paylo ki chan chan hai
        Aashiko ke dil ki ye dhadkan hai
        Aashiko ke dil ki ye dhadkan hai`,"Aankhon Mein Base Ho Tum":`[00:49.00] Aankho mein base ho tum,
        [00:55.00] ha Aankho mein base ho tum
        tumhe dil mein chhupa lunga
        Aankho mein base ho tum
        tumhe dil mein chhupa lunga
        Jab chaahu tumhe dekhu
        aaina bana lunga

        [01:10.00] hey... hoo.. 
        
        [01:24.00] Aankho mein base ho tum,
        [01:30.00]Haan Aankho mein base ho tum,
        tumhe dil mein chhupa lungi
        Aankho mein base ho tum,
        tumhe dil mein chhupa lungi
        Jab chaahu tumhe dekhu,
        aaina bana lungi
        Aankho mein base ho tum,
        tumhe dil mein chhupa lungi

        [01:50.00] (music)

        [02:13.00] Takdir meri abb toh,
        takdir tumhaari hai
        Jahan dil tha kabhi mera,
        tasvir tumhaari hai
        [02:27.00] Yeh lab jo tere larase,
        mere dil mein huyi halchal
        Mera chain churaata hai,
        teri aankh kaa kaajal

        [02:39.00] Abhi chain churaaya hai,
        [02:46.00] heyy Abhi chain churaaya hai,
        kal tumhe chura lungi
        Abhi chain churaaya hai
        kal tumhe chura lungi
        Jab chaahu tumhe dekhu,
        aaina bana lungi

        [03:00.00] (music)

        [03:41.00] Too paas jo mere hai,
        kya kaam bahaaro se
        Yeh chamkile naina,
        kya kaam sitaaro se
        Tere naam ki dhadkan hon,
        tere naam ki saanse hon
        Ik pal na juda ho tum,
        aankho mein aankhen hon

        [04:07.00] Koyi nami vafa puchhe,
        [04:12.00] haan Koyi nami vafa puchhe,
        koyi nami vafa puchhe
        Mai naam tera lunga
        Koyi nami vafa puchhe,
        main naam tera lunga
        Jab chaahu tumhe dekhu,
        aaina bana lunga

        [04:28.00]oohh...

        [04:48.00] Aankho mein base ho tum,
        tumhe dil mein chhupa lungi
        Aankho mein base ho tum,
        tumhe dil mein chhupa lungi
        Jab chaahu tumhe dekhu,
        aaina bana lungi
        
        [05:03.00] hey.. ooo...`,"Pyar Ki Pungi":`[00:22.00] Bangle ke peechhe hai taala
        Ghusu kahaan se main saala
        Laila ki khidki khuli hai
        Khidki ke neeche hai naala
        Khidki pe koi khada hai
        Laila ka taaka bhida hai
        Mazzey udaati hai..
        Meri mohabbat ki booch maar ke

        [00:36.00] O meri jaan o meri jaan
        Mere ko majnu bana kar
        Kahaan chal di, kahaan chal di
        Pyaar ki pungi baja kar

        [00:44.00] [O meri jaan o meri jaan
        Mere ko majnu bana kar
        Kahaan chal di, kahaan chal di
        Pyaar ki pungi baja kar]

        [00:59.00] (music)

        [01:28.00] Hmm.. sabko toh parsad baante
        Main maangu toh mujhko daante
        Auron pe gaalon pe pappi
        Mere hi gaalon pe chaante
        Laila hai girgit ke jaisi
        Table pe tirkit ke jaisi
        Lipstick ka thappa lagati hai
        Gaalon pe smooch maar ke

        [01:43.00] O meri, o meri, o meri meri meri meri
        Meri aah, O meri ooh..
        Mere ko majnu bana kar
        Kahaan chal di, kahaan chal di
        Pyaar ki uhh! bajaa kar

        [01:54.00] [O meri jaan, o meri jaan
        Mere ko majnu bana kar
        Kahaan chal di, kahaan chal di
        Pyaar ki pungi baja kar] – x2

        [02:08.00] (music)

        [02:16.00] P to the U to the N to the G to the I
        The pungi pungi
        Naye zamane ki Laila hoon main
        Teri pungi baja ke rahungi – x2

        [02:31.00] Love you my honey, you’re very funny
        Now spend all your money, my macho my stud
        My koochi my poochi please get my Gucci
        Even if you have to sell all your blood..

        [02:41.00] Haaye jhoothi kasmein jhoothe vaade
        Mujhe English mein ratta kar
        Kahaan chal di, kahaan chal di
        Pyaar ki pungi baja kar

        [02:49.00] [O meri jaan o meri jaan
        Mere ko majnu bana kar
        Kahaan chal di, kahaan chal di
        Pyaar ki pungi baja kar] -x2
        
        [03:04.00] (music)`,"Chalti Hai Kya 9 Se 12":`[00:15.00] Hello, Brother!
        [00:16.00] (music)

        [00:23.00] Aankh lada ke tune maara
        Ghayal ho gaya dil bechara
        Suna hai tere chaahne waale
        Aage 10 hain piche 12

        [00:39.00] Mujhko apna chaand bana le
        Chamka de qismat ka taara
        Arey ek baar se dil nahi bharta
        Mud ke dekh mujhe dobara

        [00:51.00] (music)

        [00:52.00] Tan tana tan tan tan tara
        Tan tana tan tan tan tara
        Chalti hai kya 9 se 12

        [00:58.00] 1 2 3 4..

        [01:00.00] Arey tan tana tan tan tan tara
        Tan tana tan tan tan tara
        Chalti hai kya 9 se 12
        Suna hai tere chahne waale
        Aage 10 hain piche 12

        [01:15.00] Arey khadi khadi kya soch rahi hai
        Chal ho jaayein 9-2-11

        [01:18.00] 1 2 3 4..
        Tan tana tan..
        Tan tana tan tan tan tara
        Tan tana tan..
        Aye.. wo…

        [01:36.00] (music)

        [01:44.00] Raat ki show ki do ticketein hain
        Khol ke purse dikhlaun
        Arey chipak ke baithoon sath tere main
        Taxi mein le jaaun

        [01:59.00] Arey samajh na mujhko aisa waisa
        Mere batuve mein hai paisa
        Tujhe khilaunga jee bhar ke
        Garam samosa, idli ya dosa

        [02:13.00] Chal hatt tu meri hai Pepsi Cola
        Main tera hoon Coca Cola

        [02:19.00] Tan tana tan tan tan tara
        Arey chalta hai kya 9 se 12

        [02:25.00] (music)

        [02:50.00] Filmi dhun pe dekh ke tujhko
        Seeti roz bajaaun
        Arey bohat dinon se soch raha tha
        Film main tujhe dikhaaoon

        [03:05.00] Shukarvar ki shaam haseen hai
        Nayi nayi yeh film lagi hai
        Garmi ki na hogi tension
        Theatre hai woh air conditioned

        [03:20.00] I Know! film haseen woh jaan-e-man hai
        Yeh filmon mein number one hai
        Tan tana tan tan tan tara
        Arey chalta hai kya 9 se 12

        [03:33.00] Aye tan tana tan tan tan tara
        Tan tana tan tan tan tara
        Chalti hai kya 9 se 12
        Chalti chalti…

        [03:41.00] Arey aankh lada ke tune maara
        Ghayal ho gaya dil bechara
        Chalti hai kya 9 se 12
        Chalti chalti…
        [03:49.00] 1,2,3, 4
        [03:51.00] end`,"Char Baj Gaye":`[00:14.00] all i wanna say is turn the volume up on your speakers
        pump up the base like this 

        [00:23.00] (music)

        [00:37.00] aaj hai friday night me chalu apne friends ke saath
        random spinning wheels meri boom boom car
        laga ke cd player hum toh chale hai tayaar
        speaker maare base karde sab ke kaan faadh, say what
        hello mr dj, mere gaane please play
        aaj no wine, aaj no laaga, aaj peeyenge sampagne
        ba ba ba boozing, dancing and we cruzing
        bouncer panga leta hai toh, gotta keep it moving
        char baj gaye lekin party abhi baaki hai
        ba ba ba, with the booze ae
        taare ghir gaye lekin party abhi baaki hai
        ba ba ba, just loose there, just loose it
        mere daddy hain naraaz lekin party abhi baaki hai
        ba ba ba, with the booze ae
        party ho gayi toh after party abhi baaki hai

        [01:34.00] (music)

        [02:09.00] aa aa aa aage kya karenge mitros
        saari bottles pee gaye hum toh in the disco
        arrey booze lagi hai, bottle do
        arrey booze lagi hai, bottle do
        bamboos lagi hai drinking to be trap

        [02:28.00] vailati pee gaye ba desi abhi baaki hai
        [02:44.00] hello mr dj, mere gaane please play
        aaj no wine, aaj no laaga, aaj peeyenge sampiyan
        ba ba ba boozing, dancing and we cruzing
        bouncer panga leta hai toh, gotta keep it moving
        char baj gaye lekin
        char baj gaye lekin party abhi baaki hai
        ba ba ba, with the booze ae
        talli gir gaye lekin party abhi baaki hai
        ba ba ba, just loose there, just loose it
        i want all the drinks
        thulle aa jaan ge lekin party abhi baaki hai
        ba ba ba, with the booze ae
        we lost all the money lekin party abhi baaki hai
        [03:31.00] end`,"Character Dheela":`[00:32.00] Kudiyon ka nasha pyare nasha sab se nasheela hai
        Jise dekho yahan woh husn ki baarish me geela hai
        Ishak ke naam pe karte sabhi ab raas-leela hai
        Main karoon toh saala Character Dheela hai
        Ho.. main karoon toh saala Character Dheela hai

        [00:53.00] Ladko ka nasha pyare nasha sab se nasheela hai
        Jise dekho yahan woh husn ki baarish me geela hai
        Ishak ke naam par karte sabhi ab raas leela hai
        Main karoon toh saala Character Dheela hai
        Ho.. main karoon toh saala Character Dheela hai

        [01:13.00] (music)

        [01:17.00] Like It! Like It!

        [01:21.00] Hai simple sa yeh formula
        Hai love ka funda khokhala
        Bujhe bas pyaas toh ye dil
        Cool cool cool rehta hai

        [01:29.00] Kisi ka haath thaam ke
        Hai de kyun waade naam ke
        Haan love you forever koi
        Fool fool fool kehta hai

        [01:38.00] Isey pee loon se hai matlab
        Jo yovan santreela hai
        Fark padta hai kya baahon mein
        Munni hai ya Sheela hai

        [01:46.00] Ishak ke naam par karte sabhi ab raas leela hai
        Main karoon toh saala Character Dheela hai
        Ho.. Main karoon toh saala Character Dheela hai

        [01:58.00] (music)

        [02:19.00] Yeh charcha Facebook pe hai
        Mazaa bas ek look mein hai
        Hassi chehre ka kaun deedaar
        Baar baar baar baar karta hai

        [02:27.00] Jo dil ka photo frame ho
        Wahan photo kyun same ho
        Calendar hi tarah use
        Roz roz roz roz change karta hai

        [02:35.00] Kamar patli ho jitni bhi
        Mazaa utna nasheela hai
        Chalega jo bhi hai aankhon ka rang kala ya neela hai
        Ishak ke naam pe karte sabhi ab raas leela hai

        [02:48.00] Main karoon toh saala, character dheela hai
        Ho.. main karoon toh saala, character dheela hai
        Kudiyon ka nasha pyare nasha sab se nasheela hai
        Jise dekho yahan woh husn ki barish mein geela hai
        Ishaq ke naam pe karte sabhi ab raas leela hai

        [03:09.00] Main karoon toh saala, character dheela hai
        Main karoon toh saala, character dheela hai
        Main karoon toh saala, character dheela hai
        Main karoon toh saala, character dheela hai
        Main karoon toh saala, character dheela hai
        Main karoon toh saala, character dheela hai
        [03:33.00] end`,"Dilliwali Girlfriend":`[00:12.00] O what a look, what a grace
        Tenu hi karaan main chase
        What a naksh, what a nain
        Dil tera ho gaya fan
        What a smile, what a style
        Lut'ti neendo ki ye file
        Kabhi soft, kabhi rude
        Killer tera attitude

        [00:28.00] Tere liye hi toh signal tod taad ke
        Aaya dilliwali girlfriend chhod chhad ke
        [00:37.00] Tere liye hi toh signal tod taad ke
        Aaya dilliwali girlfriend chhod chhad ke

        [00:44.00] O teri ankh da ishaara mujhe fraud lage
        Tu toh Majnu aawaara by God lage
        O kasme waade khake
        Apni pocket money bacha ke
        Aaya tere liye paise waise jod jaad ke...

        [01:01.00] Ghar waalon ko bhi bye-shye bol baal ke
        Aaya dilliwali girlfriend chhod chhad ke
        Tere liye hi toh signal tod taad ke
        Aaya Dilli wali girlfriend chhod chhad ke
        [01:15.00] (music)

        [01:29.00] Teri galli mein bhi aana start kar diya
        Ik tere naam apna heart kar diya
        Karne lago aankh matakka
        Ab toh aashiq ban gaya pakka
        Aaj abhi maine tera boycott kar diya
        Teri saari harqatein main toh note karu
        Tujhe thaane mein le jaake main report karu oye

        [01:50.00] Tu na kar aise fight
        Tera mood main karu light
        Tujhe scene mein dikha ke film Golmaal ke...

        [02:00.00] Naam tera hi likhaya maine wedding card pe
        Aaya dilliwali girlfriend chhod chhad ke
        Tere liye hi toh signal tod taad ke
        Aaya dilliwali girlfriend chhod chhad ke

        [02:13.00] (music)

        [02:28.00] Yeh to ishq mein dekho badtameez ho gaya
        Bina baat ke hi mujh pe ye freeze ho gaya
        Refuse kiya sau baari
        Phir bhi karna chahe yaari
        Passion tere liye mera increase ho gaya

        [02:41.00] Tu hi day lage
        मुझे मेरी night lage
        मुझे future मेरा तेरे संग bright lage
        Tujh से भी ज्यादा शोणा
        कोई handsome मुण्डा होणा
        Leke jayega sone mein tol tal ke Oye...

        [02:58.00] O tere liye aaj gaddi main toh mod-maad ke
        Aaya dilliwali girlfriend chhod chaad ke

        [03:04.00] Chal jhutta... mere liye signal tod taad ke
        Aaya dilliwali girlfriend chhod chhad ke
        Ghar waalon ko bhi bye-shye bol baal ke
        Aaya dilliwaali girlfriend chhod chhad ke
        Tere liye hi toh signal tod taad ke
        Aaya dilliwaali girlfriend chhod chhad ke

        [03:25.00] (music)`,"Aata Majhi Satakli":`[00:12.00] Fight fight fight like Bruce Lee
        Fight fight fight like Bruce Lee
        Fight fight fight like Bruce Lee
        Fight fight fight like Bruce Lee

        [00:24.00] Mera saulaah ka dola
        Chhehalis ki chhati
        Seethi baat bolun
        Baatein ghumani nhi aati
        Aata Majhi Satakli!

        [00:36.00] Saulaah ka dola
        Chhehalis ki chhaati
        Seethi baat bolun
        Baatein ghumani nhi aati
        Aata Majhi Satakli!

        [00:48.00] Jigra hai tiger dimaag se hyper
        Aata Majhi Satakli
        To boli maaru jaise Sniper
        Aata Majhi Satakli!

        [01:00.00] Goli maare jaise sniper, Yes!
        Mera balma hai tiger, true!
        Mera balma hai tiger, correct!
        Are very very hyper
        Aata majhi satakli

        [01:12.00] Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)

        [01:24.00] Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)

        [01:37.00] Yachi vagha chi kaaya re
        Peeth nahi kola la re
        Are samarah ki chhata re
        Aata Majhi Satakli

        [01:49.00] Angry young man
        Meeya hai majha si lafda
        Naye naye todun haat paaye
        When aata majhi satakli
        Bolo mujhe bye, bye!

        [02:01.00] Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)

        [02:13.00] Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)

        [02:25.00] Slow down! mla raag yetoy
        Calm down! mla raag yetoy
        Slow down! mla raag yetoy
        Calm down! mla raag yetoy

        [02:36.00] Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)

        [02:48.00] Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)
        Aata majhi satakli (mla raag yetoy!)`,"F.A.L.T.U Title Track":`[00:13.00] F-A-L-T-U, what you gonna do?
        Ha-ha, where the party at?
        Ha-ha, where the party at?

        [00:20.00] Ha-ha, where the party at?
        Ha-ha, where the party at?
        Oh, chhoti si tu jaan, kaahe rahe pareshaan?
        Chadd duniya ko, duniya toh degi gyaan
        Ha-ha, where the party at?
        Ha-ha, where the party at?
        [00:33.00] Oh, chhoti si tu jaan, kaahe rahe pareshaan?
        Chadd duniya ko, duniya toh degi gyaan

        [00:41.00] Ban′na hai tujhe mahaan toh yeh
        Mantar padh le, oh, bhaiya

        [00:48.00] Aaltu jalaal tu, aayi bala ko taal tu
        Tension-vension chhod de, bachcha, ho ja fully faltu
        Aaltu jalaal tu, aayi bala ko taal tu
        Tension-vension chhod de, bachcha, ho ja fully faltu (let's go)
        Aaltu jalaal tu, aayi bala ko taal tu
        Tension-vension chhod de, bachcha, ho ja fully faltu
        Aaltu jalaal tu, aayi bala ko taal tu
        Tension-vension chhod de, bachcha, ho ja fully faltu

        [01:02.00] (music)

        [01:10.00] Ayo, let me tell you something
        Pump this jazz in your speaker, like this
        So, rip up the blow like a bad man
        They won′t know what's happening

        [01:20.00] Four drinks down I'm dancing
        But I don′t wanna go home
        When we step in it so far
        Whether you no match so far
        I told you, man, that it′s over
        I don't wanna go home (uh-huh)

        [01:31.00] Nachna main saari raat
        Main taan ghar nahin jaana (uh-huh, uh-huh)
        And I don′t give a what
        Main taan ghar nahin jaana (no way)

        [01:37.00] Main taan ghar nahin...
        Main taan ghar nahin... (yeah)
        Main taan ghar nahin...
        Main taan ghar nahin jaana

        [01:44.00] Ha-ha, where the party at?
        Ha-ha, where the party at?

        [01:47.00] Oh, aadhi jawaani teri beeti padh-padh ke (whoa-ho, whoa-ho)
        Haaye, baaqi na beet jaaye yoon hi sad-sad ke (whoa-ho, whoa-ho)
        Ho, aadhi jawaani teri beeti padh-padh ke
        Baaqi na beet jaaye yoon hi sad-sad ke
        Boodha ho jaayega, sun laa le jee-o-jaan
        Laa le jee-o-jaan, hun gall tu meri maan

        [02:15.00] Udne se pehle praan toh yeh
        Mantar padh le, oh, bhaiya

        [02:22.00] Aaltu jalaal tu, aayi bala ko taal tu
        Tension-vension chhod de, bachcha, ho ja fully faltu
        Aaltu jalaal tu, aayi bala ko taal tu
        Tension-vension chhod de, bachcha, ho ja fully faltu (let's go)

        [02:36.00] (music)`,"Mauja Hi Mauja":`[00:24.00] Jag saara jag saara nikhar gaya
        Hunn pyaar hawa de vich bikhar gaya
        Jag saara jag saara nikhar gaya
        Hunn pyaar hawa de vich bikhar gaya
        Hunn

        [00:33.00] (music)

        [00:37.00] Jag saara jag saara nikhar gaya
        Hunn pyaar hawa de vich bikhar gaya
        Jag saara jag saara nikhar gaya
        Hunn pyaar hawa de vich bikhar gaya
        Dil tera hoyi jaave ambran nu chuyi jaave
        Maar udaare dekho shikhar gaya

        [00:50.00] Hunn mauja hi mauja shaam savere
        Hunn mauja hi mauja pyaar mein tere
        Hunn mauja hi mauja rock the party
        Hunn mauja hi mauja

        [00:59.00] Mauja hi mauja shaam savere
        Hunn mauja hi mauja pyaar mein tere 
        Hunn mauja hi mauja rock the party
        Hunn mauja hi mauja

        [01:07.00] (music)

        [01:29.00] Oh maahi mera sharbat warga
        Oh maahi tainu gatt gatt pee laan
        Ho maahi mera dil mainu kahi jaaye
        Dil mainu kahi jaaye khul ke jee laan

        [01:37.00] Oh maahi mera sharbat warga
        Oh maahi tainu gatt gatt pee laan
        Ho maahi mera dil mainu kahi jaaye
        Dil mainu kahi jaaye khul ke jee laan

        [01:46.00] Mithde hasse ho maahi mere aase passe
        Oh maahi mere had beram huya
        Dil satt rang hoya
        Dil maahi sang hoya jidhar gaya

        [01:55.00] Hunn mauja hi mauja tera sahare
        Hunn mauja hi mauja hul hulare
        Hunn mauja hi mauja join the party
        Hunn mauja hi mauja

        [02:04.00] Mauja hi mauja shaam savere
        Hunn mauja hi mauja pyaar mein tere
        Hunn mauja hi mauja rock the party
        Hunn mauja hi mauja

        [02:12.00] (music)

        [02:46.00] Oh maahi mera sone warga
        Oh maahi tainu chum chum rakhna
        Oh maahi mera dil mainu kahi jaaye
        Dil mainu kahi jaaye rajj ke takkna

        [02:56.00] Oh maahi mera sone warga
        Oh maahi tainu chum chum rakhna
        Oh maahi mera dil mainu kahi jaaye
        Dil mainu kahi jaaye rajj ke takkna

        [03:05.00] Kol bhitha ke oh maahi tere sej saja ke
        Oh maahi tere sang mere gall hoye
        Har ek pal hoye
        Dil bekal hoye bigad gaya

        [03:13.00] Hunn jag saara jag saara nikhar gaya
        Hunn pyaar hawa de vich bikhar gaya
        Jag saara jag saara nikhar gaya
        Hunn pyaar hawa de vich bikhar gaya
        Dil tera hoyi jaave ambran nu chuyi jaave
        Maar udaare dekho shikhar gaya

        [03:26.00] Hunn mauja hi mauja pyaar paake
        Hun mauja hi mauja kul mila ke
        Hunn mauja hi mauja everybody now
        Mauja hi mauja

        [03:35.00] Hunn mauja hi mauja pyaar paake
        Hun mauja hi mauja kul mila ke
        Hunn mauja hi mauja everybody now
        Mauja hi mauja
        
        [03:43.00] (music)`,"Fugly Fugly Kya Hai":`[00:14.00] Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly…

        [00:24.00] Baap ke paison pe koodna
        Sadak ke kone pe mootna
        377 hatna ya Jessica Lal ki ghatna
        Launde ke munh se ouch
        Ya har daftar mein couch
        Likhna Lal Qile pe love you
        Abey phir se likhega toh.. bhishum

        [00:42.00] Hum saari baatein jaane
        Phir bhi hum baat na maane
        Khud hi bante anjaane pooche
        Fugly Fugly Kya Hai ?

        [00:52.00] Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly…

        [01:01.00] (music)

        [01:07.00] Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly…

        [01:25.00] Na ladki dekhe na ladka
        Jaan ke chipak ke baitha buddha
        Auzaar hai dheela phir bhi tharki
        Isey maaro rakh ke thudda

        [01:35.00] Naa kar, naa kar idhar udhar ki chugli
        Kisi aur ke masle mein kyun karta hai ungli

        [01:45.00] Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly…
        
        [01:54.00] Hum saari baatein jaane
        Phir bhi hum baat na maane
        Khud hi bante anjaane pooche
        Fugly Fugly Kya Hai ?
        
        [02:04.00] Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly Kya Hai ?
        Yeh Fugly Fugly…
        `,"Gandi Baat":`[00:23.00] bidi pike nukkad pe wait tera kiya re
        khali peeli atthara cup chai bhi toh piya re
        [00:35.00] bidi pike nukkad pe wait tera kiya re
        khali peeli atthara cup chai bhi toh piya re

        [00:42.00] raja beta banke maine jab sharafat dikhayi
        tune bola hatt mawaali bhaav nahi diya re
        abcd padhli bohot thandi aahe bharli bohot
        acchi baate karli bohot ab karunga tere saath
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat

        [01:13.00] (music)

        [01:42.00] aise kyun kyun kyun karta tu tu tu munh pe thu thu thu pyar me
        jab se hu hu hu laila ki ki ki into to to to pyar me
        [02:02.00] aise kyun kyun kyun karti tu tu tu munh pe thu thu thu pyaar me
        jab se hu hu hu majnu ka ka ka into to to to pyar me
        abcd padhli bohot thandi aahe bharli bohot
        acchi baate karli bohot ab karungi tere saath
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        
        [02:40.00] (music)

        [03:03.00] gul-badan dan dan deal done done done
        one two one one one ho gaya
        muh se kya kya kya bol na na na
        man to man man man ho gaya
        dikhne me thi tu kadak dheere dheere pighli bohot
        acchi baate karli bohot ab karunga tere saath
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        gandi baat gandi gandi gandi gandi gandi baat
        
        [03:40.00] (music)`,"Gehra Hua":`[00:09.00] Tu agar meri, yeh hawayein teri
        Tu agar meri, saari raahein teri
        Tu agar meri, main hoon tera
        Tu agar meri, yeh ujaale tere
        Tu agar meri, dil hawale tere
        Tu agar meri, main hoon tera

        [00:39.00] Betaab-sa mohabbat ka tu inqalaab hai
        Mera jahaan teri baahon mein khwaab, khwaab hai

        [00:54.00] Gehra hua, gehra hua
        Rang aashiqui gehra hua
        Gehra hua, gehra hua
        Dariya dua gehra hua
        Tera hua

        [01:26.00] Tu agar meri, yeh hawayein teri
        Tu agar meri, saari raahein teri
        Tu agar meri, main hoon tera

        [01:40.00] (music)

        [01:57.00] Palkein jhapakta hai aasmaan
        Laakhon farishton ki hai tu jaan
        Woh poochhte hain Rehti kahaan?
        Meri baahon mein rehti, unko bata

        [02:12.00] Palkein jhapakta hai aasmaan
        Usne bhi tujh-sa dekha kahaan
        Hai raunakien wahan, tu hai jahaan
        Meri baahon mein rehna, yahi hai dua

        [02:27.00] Tu agar meri, hai fasaana tera
        Tu agar meri, toh zamaana tera
        Tu agar meri, main hoon tera

        [02:42.00] Betaab-sa mohabbat ka tu inqalaab hai
        Mera jahaan teri baahon mein khwaab, khwaab hai

        [02:57.00] Gehra hua, gehra hua
        Rang aashiqui gehra hua
        Tera hua

        [03:12.00] Tu agar meri, yeh hawayein teri
        Tu agar meri, saari raahein teri
        Tu agar meri, main hoon tera

        [03:27.00] (music)`,"Lonely Song":`[00:15.00] Tujh se door hoon main bhi majboor
        Dil ko sataaye teri ankhiyon ka noor
        Baat ye sacchi aaj tujhko bataaun
        Mujhe samajh ni aata kaise dooriyaan mitaaun
        As tere liye main ye geet likhta jaaun
        Din raat hi main inhe gungunaaun
        Phone me photu dekhu teri baari baari
        Jee karda main aa jawaan maar ke udaari

        [00:44.00] (music)

        [00:52.00] O Bawariya, O Bawariya
        [01:03.00] Main kitna tanha tanha lonely lonely tere bin
        O Bawariya

        [01:10.00] Teri yaad yaad yaad mein
        Teri yaad yaad yaad mein
        Teri yaad yaad yaad mein tadpe jiya
        O Baanwariya, O Bawariya
        Main kitna tanha tanha lonely lonely tere bin
        O Bawariya

        [01:35.00] Saanso me aankhon me neendon me tu hi tu
        O Bawariya
        Teri yaad yaad yaad me
        Teri yaad yaad yaad me
        Teri yaad yaad yaad mein tadpe jiya

        [01:52.00] O Bawariya, O Baanwariya
        Main kitna tanha tanha lonely lonely tere bin
        O Bawariya

        [02:05.00] Jitna main bhoolna chaahun
        Teri yaadein na dil se jaati hai
        Koi na koi connection hai jo meri neendon ko churati hai
        Teri yaad saath hai
        Teri yaad saath hai

        [02:40.00] Teri yaad yaad yaad me
        Teri yaad yaad yaad me
        Teri yaad yaad yaad mein tadpe jiya
        O Bawariya, O Baanwariya
        Main kitna tanha tanha lonely lonely tere bin
        O Bawariya
        [03:00.00] (music)`,"Shanivaar Raati":`[00:27.00] Ishq mein tere, announce kar diya
        Ho tere liye dil kudiyon ka bounce kar diya
        [00:41.00] Haaye Ishq mein tere, announce kar diya
        O tere liye dil kudiyon ka bounce kar diya
        Bechain sa hota jaaun
        Par main ye samajh na paaun
        Main jaagun, mere bin tu kaise so jaati

        [00:55.00] Shanivaar raati humein neend nahi aati
        Shanivaar raati humein neend nahi aati
        Shanivaar raati humein neend nahi aati
        Shaniwaar raati humein neend nahi aati
        Main jaagun, mere bin tu kaise so jaati
        ta da da da… oye.. ta da da da… oye!

        [01:16.00] (music)

        [01:19.00] Shanivaar raati humein neend nahi aati
        Shanivaar raati humein neend neend neend neend…
        (Wajid) 11 baje se 12 baje hain
        Sab so gaye, mere naina tere bin hai khulle
        Shaniwar raati mainu neend nahi aati
        Total 1600 taare maine gin gin hai daale
        Main toh jaagta hoon rehta
        Jaane kaise tu so jaati
        Shaniwar raati mainu neend nahi aati

        [01:48.00] (music)

        [01:54.00] Dheere dheere pyar mein tarakki ho gayi
        Tere sang baat meri pakki ho gayi
        [02:00.00] O tu jo mili din mein sitaare chamke
        Ladki tu mere liye lucky ho gayi
        By God main kahoon
        Tere saath main rahoon
        Seh loon koi faasla, teri doori na sahun

        [02:19.00] Tu aaye na milne toh haaye meri jaan jaati
        O jaati, haan jaati, oye jaati, oye jaati..
        … oye… oye…
        Shanivar rati humein neend nahi aati
        Shanivar rati humein neend nahi aati

        [02:40.00] (music)

        [03:08.00] Jaise-taise hafte ke din 6 kate
        Din aaya saatva to lene laga karvate
        [03:18.00] Shaam saadhe saat baje khwahish jage
        Saadhe aath hote hote dil na lage
        Time waste na kar, Seedhe aaja tu idhar
        Bada kiya intezaar, ab hota na sabar
        Ab thodi si bhi deri haaye meri jaan jalaati
        jalaati jalaati jalaati…
        Ta da daaun daun… oye… hoye!

        [03:46.00] Shanivaar rati humein neend nahi aati
        Shanivaar rati humein neend nahi aati
        Main jaagun, mere bin tu kaise so jaati
        Shaniwar rati humein neend nahi aati..
        oye oye…
        neend neend neend neend
        I can not sleep!`,"Mast Kalandar":`[00:00.00] Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar

        [00:17.00] One two three four
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar

        [00:28.00] Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar

        [00:46.00] (music)

        [01:04.00] Meri nazar toh
        Tumpe pare toh
        Man me tha tera sedhai
        Betabion ko
        Lahat mili toh
        Dhoor hui meri tanhai

        [01:21.00] Mere rang ka
        Tere roop ka
        Hai aasar tere surroor ka
        Mere haal se
        Mere dard se
        Tu hai bekhabar

        [01:30.00] Dil da mamlaaaaaaaaa
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar
        Dil da mamlaaaaaaaaa
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar

        [01:44.00] Dil da mamlaaaaaaaaa
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar
        Dil da mamlaaaaaaaaa
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar

        [01:52.00] Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar

        [02:02.00] (music)

        [02:20.00] Teri hawa mein jadoo hai ladoo
        Karta hai mujhko deewana
        Meri tamana kehti hai mujhko
        Sirf mujhe hai tujhko pana
        Meri arsoon meri guftgoo
        Tu hi tu hain
        Bas meri jasmajhoo
        Kya bataoon
        Tere baghair me
        Kitna besabar

        [02:47.00] Ohoooooooooo
        Dil da mamla
        Hone na sone hai
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar

        [03:09.00] (music)

        [03:18.00] Aya me aya leke mohabbat
        Tehjanoo mujhko behchanoo
        Meri nazar me hai ik chera
        Mano tum chaho na mano
        Meri chahatein meri rahatein
        Badi namchami teri haskate
        Mere khwab hoi raat din
        Pehta mansafar

        [03:45.00] Dil da mamlaaaaaaaaa
        Dil da mamla hai dilbar
        Hone na sone hai is dil par
        Khalbali dil ke andar
        Ohhhh mast mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar
        Mast maste maste
        Maste mast kalandar`,"O Bedardeya":`[00:22.00] Pyaar jhootha tha jataya hi kyun
        Pyaar jhootha tha jataya hi kyun
        Aise jaana tha to aaya hi kyun
        Aise jaana tha to aaya hi kyun

        [00:39.00] Ae sitamgar tu zara aur sitam kar de aa
        Aaja bewajah sa yeh rishta khatam kar de aa

        [00:47.00] O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        Oh..

        [01:25.00] (music)

        [01:22.00] Dard-e-dil ke bina mehfil hi kya
        Dard-e-dil ke bina mehfil hi kya
        Jo naa toota kabhi woh dil hi kya
        Jo naa toota kabhi woh dil hi kya

        [01:39.00] Hai mera haal bura aur bura kar de aa
        Mere zakhmon ko zara aur hara kar de aa

        [01:47.00] O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        Oh..

        [02:05.00] (music)

        [02:29.00] Karle dil kholke ruswa mujhe,
        karle dil kholke ruswa mujhe,
        tujhse phir bhi nahi shikawa mujhe,
        tujhse phir bhi nahi shikawa mujhe,
        sirf kya duniya ki nazaron se girana mujhe,
        aa mujhe meri bhi nazaron me bura karde aa,
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        Oh..

        [03:13.00] (music)

        [03:43.00] Hum mein jo tha woh raha kyon nahi
        Dil mein tha kuch to kaha kyon nahi
        Tha kabhi pyaar to insaaf mera kar de aa
        Ya kabhi tha hi nahi saaf mana kar de aa

        [04:00.00] O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya
        O bedardeya, yaar bedardeya

        [04:18.00] O bedardeya, o bedardeya
        O yaar bedardeya, bedardeya, bedardeya
        Yaar bedardeya, bedardeya, yaar bedardeya
        Oh..

        [04:38.00] Kaisa banjar seena hoga
        Isme jab tu hi naa hoga
        Tujh bin jee to lunga lekin
        Jeena kya woh jeena hoga
        Jeena kya woh jeena hoga
        `,"Paisa Paisa":`[00:00.00] Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa
        Kya baat hai kya cheez hai paisa

        [00:26.00] Kya paisa paisa karti hai kyon paise pe tu marti hai
        Kya baat hai kya cheez hai paisa Kya baat hai kya cheez hai paisa
        [00:36.00] Ik baat mujhe batla de tu uss rab se kyun nai darti hai
        [00:45.00] Kya hota hai paise ka paise ki la don dheri
        De dana dan paisa paisa De dana dan
        Main baarish kar doon paise ki jo tu ho jaaye meri
        Main baarish kar doon paise ki jo tu ho jaaye meri

        [01:03.00] Boy i am one of a kind you see not the girl you want me to be
        My love is priceless baby no money can buy me
        Boy i am one of a kind you see not the girl you want me to be
        My love is priceless baby no money can buy me

        [01:21.00] Na hasske kehti bolti paise ko pyaar se tolti
        Kya baat hai kya cheez hai paisa Kya baat hai kya cheez hai paisa
        [01:30.00] Har baar tera ik roop naya na bhaid dilo ke kholti
        [01:39.00] Rab kehta hai dilwalon se na kar hera pheri
        De dana dan paisa paisa De dana dan
        Main baarish kar doon paise ki jo tu ho jaaye meri
        Main baarish kar doon paise ki jo tu ho jaaye meri
        De dana dan paisa paisa De dana dan paisa paisa

        [01:58.00] (music)

        [02:07.00] Boy i am one of a kind you see not the girl you want me to be
        My love is priceless baby no money can buy me

        [02:16.00] Aise na bangla car bisse ni aish bahut dil karta hai
        Kya baat hai kya cheez hai paisa Kya baat hai kya cheez hai paisa
        [02:25.00] Mujhe ek baat ki samaj na aaye dil tere pe kyon marta hai
        [02:34.00] Ab jaan nikaalegi tu meri kya neeayat hai teri
        De dana dan paisa paisa De dana dan
        Main baarish kar doon paise ki jo tu ho jaaye meri
        Main baarish kar doon paise ki jo tu ho jaaye meri
        Main baarish kar doon paise ki jo tu ho jaaye meri
        Main baarish kar doon paise ki jo tu ho jaaye meri`,"Phir Se Ud Chala":`[00:36.00] Phir se ud chala
        Ud ke chhoda hai jahaan neeche main tumhare ab hoon hawaale
        Door door log baag meelo’n door ye waadiyaan

        [00:51.00] Phir dhuaan dhuaan tan har badli chali aati hai chhoone
        Par koi badli kabhi kahin kar de tan geela ye bhi na ho…

        [01:06.00] Kisi manzar par main ruka nahi
        Kabhi khud se bhi mein mila nahi
        Ye gila tto hai main khafa nahi
        Shehar ek se gaa’nv ek se
        Log ek se naam ek ooo

        [01:16.00] ooo o…
        [01:25.00] Phir se udd chala
        [01:32.00] Mitti jaise sapne ye kitta bhi palko se jhaado
        Phir aa jaate hain
        Kitte saare sapne kya kahoon kis tarah se maine
        Tode hain chhode… hain kyun
        Phir sath chalein mujhe leke ude ye kyun
        O o..

        [02:06.00] Kabhi daal daal kabhi paat paat
        Mere saath saath phire dar dar ye
        Kabhi sehra kabhi saawan
        Banu raawan jeeyun mar mar ke
        Kabhi daal daal kabhi paat paat
        Kabhi din hai raat kabhi din din hai
        Kya sacch hai, kya maaya
        hai daata, hai daata

        [02:31.00] Idhar udhar titar bitar
        Kya hai pata hawa le hi jaaye teri ore
        Kheenche teri yaadein
        Teri yaadein teri ore

        [02:44.00] (music)

        [03:08.00] Rang-birange vehamon mein
        Main udta phiru
        [03:16.00] Rang-birange vehamon mein
        Main udta phiru
        
        [03:23.00] (music)`,"Raja Rani":`[00:09.00] Tu meri rani, main hoon tera raja
        Aaja meri baahon mein aaja
        Haan kar de mujhko
        Main tere ghar le aaunga (Band baaja)

        [00:19.00] (rap)

        [00:29.00] Milan se ambar aaj racha ja
        Dil ke sheesh mehal mein aaja
        Bin pheron ke byaah racha ja
        Rani tu main raja
        Rani tu main raja

        [00:45.00] Milan se ambar aaj racha ja
        Dil ke sheesh mehal mein aaja
        Bin pheron ke byaah racha ja
        Rani tu main raja
        Rani tu main raja

        [01:01.00] Tujhe dekhun jab jab mera jiya dhadke
        Kabhi aag lag jaaye, Kabhi shola bhadke
        Bin badra ke jaise bijli kadke
        Rani main tu raja
        Rani main tu raja

        [01:19.00] (music)

        [01:29.00] O meri Madhubala, tujhko bin varmala
        London ghumaunga, ghumaunga Patiala
        Ooh la la, ooh la la
        Tu chaabi main taala
        Aaja ab aa bhi ja
        Haay mood bana dilwala

        [01:47.00] Tujhe dekhun jab jab mera jiya dhadke
        Kabhi aag lag jaaye, Kabhi shola bhadke
        Bin badra ke jaise bijli kadke
        Rani main tu Raja
        Rani main tu Raja

        [02:04.00] Milae ambar aaj racha ja
        Dil ke sheesh mehal mein aaja
        Bin pheron ke byaah racha ja
        Rani tu main Raja
        Rani tu main Raja
        Raja!

        [02:18.00] (music)

        [02:26.00] Tu meri rani main hu tera raja,
        Aaja meri baahon mein aaja
        Haan kar de mujhko
        Main tere ghar le aaunga (Band baaja)

        [02:36.00] you will be been mine, now is yours
        Karenge hum enter, of course
        Pyar ki hogi nayi shuruaat
        Phir yaad rakhegi tu ye raat

        [02:46.00] Chal meri chandramukhi, aish karaunga
        jannat dikhavunga, tujhe chaand pe le jaunga
        kolaveri ki dhun tujhko sunaunga
        tokey mein taj mahal tere liye banavaunga

        [03:03.00] Tujhe dekhun jab mera jiya dhadke
        Kabhi aag lag jaaye, Kabhi shola bhadke
        Bin badra ke jaise bijli kadke
        Rani main tu raja
        Rani main tu raja

        [03:22.00] Milae ambar aaj racha ja
        Dil ke sheesh mehal mein aaja
        Bin pheron ke byaah racha ja
        Rani tu main Raja
        Rani tu main Raja
        Rani main tu raja`,"Selfie Le Le Re":`[00:00.00] jai jai bajrangbali, tod de dushman ki nali
        jai jai bajrangbali, tod de dushman ki nali
        jai jai bajrangbali, tod de dushman ki nali
        jai jai bajrangbali, tod de dushman ki nali

        [00:20.00] hey dha tuna tuna baaje danka
        london ho ya lanka goonje re chaaron ore
        hey dha tuna tuna baaje danka
        london ho ya lanka goonje re chaaron ore
        aap ki rahe anukampa
        na darr na hi shanka, nachenge hum chor

        [00:45.00] jogi chalaye koi jantar, khilega tera antar
        tu aaja guru mantar ye le le re
        ae le le, ae le, ae le, ae le le, le le re
        ae le le, ae le, ae le, ae le le, le le re
        ae le le, ae le, ae le, ae le le, le le re
        ae le le, ae le, ae le, ae le le, le le re

        [01:10.00] apna paraya jo bhi mile jhappi le le re
        ae le le, ae le, ae le, ae le le, le le re
        masti ki tanki me tanik dubki le le re
        ae le le, ae le, ae le, ae le le, le le re
        chal beta selfie le le re ae ae ae ae ae

        [01:30.00] chal beta selfie le le re
        chal beta selfie le le re
        chal beta selfie le le re

        [01:50.00] tu meri nautanki tu hi cinema
        tu mere saath gar ho
        tu hi kamaai meri aur tu hi beema
        tu mere saath gar ho o
        rokegi phir kya mujhe koi seema
        tu mere saath gar ho o rama rama

        [02:15.00] tu meri nautanki tu hi cinema
        tu mere saath gar ho o
        tu mere saath gar ho le magan mann bole
        machak ke hichkole tu le le re

        [02:35.00] ae le le, ae le, ae le, ae le le, le le re
        ae le le, ae le, ae le, ae le le, le le re
        ae le le, ae le, ae le, ae le le, le le re
        ae le le, ae le, ae le, ae le le, le le re
        apna paraya jo mile jhappi le le re
        ae le le, ae le, ae le, ae le le, le le re
        masti ki tanki mein tanik dubki le le re
        ae le le, ae le, ae le, ae le le, le le re
        chal beta selfie le le re

        [03:00.00] banda main seedha saada
        na tera na teen main
        mere jaisa na hoga
        chand pe na cheen mein ae ae ae
        kiya wahi jo man ko bhaya
        par kisi ka kabhi bhi dil na dukhaya
        pawan putra hanuman ji ki
        bhakti mein hoon leen main

        [03:25.00] baate na karta badi badi
        koi na maaru tadi tadi
        main apni masti mein hi mast hoon
        duniya dekhe khadi khadi
        rehta hu main bas
        bajrangbali ji ki hi dhun mein hi sadaa
        dil bada rakhte hain jaise hanuman ji ki ho gadaa
        jaise hanuman ji ke seene mein
        tum ko siapati ram milenge
        seena chir ke dekho mera tumko hanuman milenge

        [03:50.00] phir bhaiya
        ae le le, ae le, ae le
        ae le le, le le re ha ha
        ae le le, ae le, ae le
        ae le le, ae le, 1 2 3 chabai ki
        ae le le, ae le, ae le, ae le le, le le re
        haule naahi zor se bolo

        [04:10.00] le le, le le, le le
        le le, le le le re aahn
        ae le le, ae le, ae le
        ae le le, le le re

        [04:25.00] apna paraya jo mile jhappi le le re
        ae le le, ae le, ae le, ae le le, le le re
        masti ki tanki mein tanik dubki le le re
        ae le le, ae le, ae le, ae le le, le le re
        chal beta selfie le le re

        [04:45.00] jai jai bajrangbali, tod de dushman ki nali
        jai jai bajrangbali, tod de dushman ki nali
        jai jai bajrangbali, tod de dushman ki nali
        jai jai bajrangbali, tod de dushman ki nali
        chal beta selfie le le re
        phonva pe selfie le le re`},C=[...[{img:"1000853338.png",file:"Ghar_Kab_Aaoge.m4a",title:"Ghar Kab Aaoge (Border 2)",artist:"Sonu Nigam, Roop Kumar Rathod, Arijit Singh",year:"2025"},{img:"1000853343.png",file:"Teri_Yaad_Mein.m4a",title:"Teri Yaad Mein",artist:"Sagar Bairagi",year:"2026"},{img:"1000853348.png",file:"Kismat_Ki_Chaabi.m4a",title:"Kismat Ki Chaabi",artist:"Raja Kumari, Abhinav Shekhar",year:"2025"},{img:"1000853349.jpg",file:"Ishq_Matlabi_B_Praak_New_Punjabi_Song_2026.m4a",title:"Ishq Matalabi",artist:"B Praak",year:"2026"},{img:"1000853356.png",file:"Har_Subha.m4a",title:"Har Subha Har Shaam",artist:"Ranveer Singh, Sara Ali Khan",year:"2026"},{img:"1000853361.png",file:"Tujhe_Soch_Kar.m4a",title:"Tujhe Soch Kar",artist:"Sagar Bairagi",year:"2025"},{img:"1000853432.png",file:"Jitni_Dafa.m4a",title:"Jitni Dafa Dekhta Hoon",artist:"Bollywood Romantic",year:"2024"},{img:"1000853366.png",file:"Dil_Lagana_Mana.m4a",title:"Dil Lagana Mana Tha",artist:"Krish, Kishore Mondal",year:"2025"},{img:"1000853417.png",file:"Adhoori_Khawahis.m4a",title:"Adhoori Khawahis",artist:"Aarzoo Khaan",year:"2026"},{img:"1000853442.png",file:"Kya_Bataun_Tujhe.m4a",title:"Kya Bataun Tujhe",artist:"Vishal Mishra",year:"2025"},{img:"1000853402.png",file:"Maatrubhumi.m4a",title:"Maatrubhumi",artist:"Arijit Singh, Shreya Ghoshal",year:"2024"},{img:"1000853427.png",file:"Dil_Ne_Maana.m4a",title:"Dil Ne Maana",artist:"Shahid Kapoor",year:"2025"},{img:"1000853375.png",file:"Chandni_Raatein.m4a",title:"Chandni Rate Teri Bathe",artist:"Shahid Kapoor, Triptii Dimri",year:"2024"},{img:"1000853447.png",file:"Jhoom_Sharaabi.m4a",title:"Jhoom Sharaabi",artist:"Yo Yo Honey Singh",year:"2025"},{img:"1000853412.png",file:"Mohabbat.m4a",title:"Mohabbat",artist:"B Praak",year:"2024"},{img:"1000853457.png",file:"Nache_Nache.m4a",title:"Nache Nache",artist:"Thaman S",year:"2026"},{img:"1000853452.png",file:"O_Romeo.m4a",title:"O Romeo",artist:"Vishal Bhardwaj",year:"2025"},{img:"1000853407.png",file:"Ruperi_Valut.m4a",title:"Ruperi Valut",artist:"Abhijeet Sawant",year:"2024"},{img:"1000853671.png",file:"Shararat.m4a",title:"Shararat",artist:"Shashwat Sachdev",year:"2026"},{img:"1000853371.png",file:"Tere_Dil_Mein.m4a",title:"Tere Dil Mein",artist:"Rito Riba",year:"2025"}].map((t,a)=>({id:`latest-${a+1}`,category:"latest",title:t.title,artist:t.artist,year:t.year||"2026",src:`./poster/latest_songs/${t.file}`,cover:`./latest/${t.img}`})),...[{img:"1000853320.png",file:"Sandese_Aate_Hain.m4a",title:"Sandese Aate Hain",artist:"Sonu Nigam, Roop Kumar Rathod",year:"1999"},{img:"1000853029.png",file:"Aakhir_Tumhein_Aana_Hai.m4a",title:"Aakhir Tumhein Aana Hai",artist:"Udit Narayan, Sapna Mukherjee",year:"1992"},{img:"1000853310.png",file:"Aaye_Ho_Meri_Zindagi.m4a",title:"Aaye Ho Meri Zindagi Mein",artist:"Udit Narayan",year:"1996"},{img:"1000853024.png",file:"Barsaat_Ke_Mausam_Mein.m4a",title:"Barsaat Ke Mausam Mein",artist:"Kumar Sanu, Roop Kumar Rathod",year:"1995"},{img:"1000853005.png",file:"Chaiyya_Chaiyya.m4a",title:"Chaiyya Chaiyya",artist:"Sukhwinder Singh, Sapna Awasthi",year:"1998"},{img:"1000853296.png",file:"Dil_Jane_Jigar.m4a",title:"Dil Jane Jigar Tujhpe",artist:"Kumar Sanu, Alka Yagnik",year:"1996"},{img:"1000853315.png",file:"Dil_Ne_Yeh_Kaha_Hain.m4a",title:"Dil Ne Yeh Kaha Hain Dil Se",artist:"Udit Narayan, Alka Yagnik",year:"2000"},{img:"1000853009.png",file:"Do_Dil_Mil_Rahe_Hain.m4a",title:"Do Dil Mil Rahe Hain",artist:"Kumar Sanu",year:"1997"},{img:"1000853324.png",file:"Jhanjhariya.m4a",title:"Jhanjhariya",artist:"Abhijeet Bhattacharya",year:"1996"},{img:"1000853038.png",file:"Khal_Nayak_Hoon_Main.m4a",title:"Khal Nayak Hoon Main",artist:"Vinod Rathod, Kavita Krishnamurthy",year:"1993"},{img:"1000853001.png",file:"Mera_Dil_Bhi_Kitna_Pagal_Hai.m4a",title:"Mera Dil Bhi Kitna Pagal Hai",artist:"Kumar Sanu, Alka Yagnik",year:"1991"},{img:"1000853043.png",file:"Kya_Mausam_Aaya_Hai.m4a",title:"Kya Mausam Aaya Hai",artist:"Udit Narayan, Sadhana Sargam",year:"1993"},{img:"1000853019.png",file:"Lal_Lal_Hoton_Pe.m4a",title:"Lal Lal Hoton Pe",artist:"Kumar Sanu, Alka Yagnik",year:"1995"},{img:"1000853033.png",file:"Love_Tujhe_Love_Main.m4a",title:"Love Tujhe Love Main",artist:"Kumar Sanu, Alka Yagnik",year:"1995"},{img:"1000853305.png",file:"Paas_Woh_Aane_Lage.m4a",title:"Paas Woh Aane Lage",artist:"Kumar Sanu, Alka Yagnik",year:"1994"},{img:"1000853291.png",file:"Saaton_Janam_Main_Tere.m4a",title:"Saaton Janam Main Tere",artist:"Kumar Sanu, Alka Yagnik",year:"1994"},{img:"1000853014.png",file:"Sochenge_Tumhe_Pyar.m4a",title:"Sochenge Tumhe Pyar",artist:"Kumar Sanu",year:"1993"},{img:"1000853300.png",file:"Teri_Chunnariya.m4a",title:"Teri Chunnariya",artist:"Kumar Sanu, Alka Yagnik",year:"1999"},{img:"1000853333.png",file:"Yeh_Jo_Teri_Payalon.m4a",title:"Yeh Jo Teri Payalon Ki",artist:"Abhijeet Bhattacharya, Sadhana Sargam",year:"1996"},{img:"1000853329.png",file:"Aankhon_Mein_Base_Ho_Tum.m4a",title:"Aankhon Mein Base Ho Tum",artist:"Kumar Sanu, Alka Yagnik",year:"1995"}].map((t,a)=>({id:`ninety-${a+1}`,category:"ninety",title:t.title,artist:t.artist,year:t.year||"1997",src:`./poster/90s_songs/${t.file}`,cover:`./90s/${t.img}`})),...[{file:"Pyar_Ki_Pungi.m4a",title:"Pyar Ki Pungi",artist:"Pritam, Mika Singh",cover:"agent_vinid.jpg",year:"2012"},{file:"Chalti_Hai_Kya.m4a",title:"Chalti Hai Kya 9 Se 12",artist:"Dev Negi, Neha Kakkar",cover:"judwa_2.jpg",year:"2017"},{file:"Char_Baj_Gaye.m4a",title:"Char Baj Gaye",artist:"Hard Kaur",cover:"char_baj_gaye.jpg",year:"2011"},{file:"Character_Dheela.m4a",title:"Character Dheela",artist:"Neeraj Shridhar",cover:"ready.jpg",year:"2011"},{file:"Yaar_Naa_Miley.m4a",title:"Yaar Naa Miley",artist:"Yo Yo Honey Singh",cover:"kick.jpg",year:"2014"},{file:"Dilliwali_Girlfriend.m4a",title:"Dilliwali Girlfriend",artist:"Arijit Singh, Sunidhi Chauhan",cover:"dilliwali.jpg",year:"2013"},{file:"Aata_Majhi_Satakli.m4a",title:"Aata Majhi Satakli",artist:"Yo Yo Honey Singh",cover:"singham_return.jpg",year:"2014"},{file:"Faltu_Title_Track.m4a",title:"F.A.L.T.U Title Track",artist:"Mika Singh",cover:"faltu.jpg",year:"2011"},{file:"Fugly_Kya_Hai.m4a",title:"Fugly Fugly Kya Hai",artist:"Yo Yo Honey Singh",cover:"fugly.jpg",year:"2014"},{file:"Mauja_Hi_Mauja.m4a",title:"Mauja Hi Mauja",artist:"Mika Singh",cover:"mauja_ji_mauja.jpg",year:"2007"},{file:"Gandi_Baat.m4a",title:"Gandi Baat",artist:"Mika Singh, Kalpana Patowary",cover:"gandi_baat.jpg",year:"2013"},{file:"Gehra_Hua.m4a",title:"Gehra Hua",artist:"Arijit Singh",cover:"hehra_hua.jpg",year:"2024"},{file:"Lonely_Song.m4a",title:"Lonely Song",artist:"Himesh Reshammiya, Yo Yo Honey Singh",cover:"lonely.jpg",year:"2012"},{file:"Shanivaar_Raati.m4a",title:"Shanivaar Raati",artist:"Arijit Singh",cover:"shanivar_rati.jpg",year:"2014"},{file:"Mast_Kalandar.m4a",title:"Mast Kalandar",artist:"Sajid-Wajid",cover:"heyy_baby.jpg",year:"2007"},{file:"O_Bedardeya.m4a",title:"O Bedardeya",artist:"Arijit Singh",cover:"o_bedardiya.jpg",year:"2023"},{file:"Paisa_Paisa.m4a",title:"Paisa Paisa",artist:"RDB",cover:"de_dana_dan.jpg",year:"2009"},{file:"Phir_Se_Ud_Chala.m4a",title:"Phir Se Ud Chala",artist:"Mohit Chauhan",cover:"phir_se_ud_chala.jpg",year:"2011"},{file:"Raja_Rani.m4a",title:"Raja Rani",artist:"Yo Yo Honey Singh",cover:"son_of_sardar.jpg",year:"2012"},{file:"Selfie_Le_Le_Re.m4a",title:"Selfie Le Le Re",artist:"Vishal Dadlani",cover:"selfie.jpg",year:"2015"}].map((t,a)=>({id:`bollywood-${a+1}`,category:"bollywood",title:t.title,artist:t.artist,year:t.year||"2024",src:`./poster/bollywood_hindi_song/${t.file}`,cover:`./bollywood_hindi_songs/${t.cover}`})),...[{img:"1000853492.png",file:"Painjan.m4a",title:"Painjan",artist:"Aadi, Payal, Sonali Sonawane",year:"2025"},{img:"1000853547.png",file:"Aapli_Yaari.m4a",title:"Aapli Yaari",artist:"Nick Shinde, Adarsh Shinde",year:"2021"},{img:"1000853477.png",file:"Dhaga_Dhaga.m4a",title:"Dhaga Dhaga",artist:"Ankush Chaudhari, Pooja Sawant",year:"2015"},{img:"1000853487.png",file:"Gaav_Sutana.m4a",title:"Gaav Sutana",artist:"Avadhoot Gupte",year:"2023"},{img:"1000853517.png",file:"Hridayi_Vasant.m4a",title:"Hridayi Vasant Phultana",artist:"Sachin Pilgaonkar, Anuradha Paudwal",year:"1989"},{img:"1000853536.png",file:"Kaakan.m4a",title:"Kaakan",artist:"Shankar Mahadevan",year:"2015"},{img:"1000853512.png",file:"Kelewali.m4a",title:"Kelewali",artist:"Avadhoot Gupte",year:"2021"},{img:"1000853482.png",file:"Kevadyacha_Paan_Tu.m4a",title:"Kevadyacha Paan Tu",artist:"Ajay Gogavle, Arya Ambekar",year:"2023"},{img:"1000853542.png",file:"Man_Udhan_Varyache.m4a",title:"Man Udhan Varyache",artist:"Shankar Mahadevan",year:"2004"},{img:"1000853522.png",file:"Mi_Single.m4a",title:"Mi Single",artist:"Nick Shinde, Sonali Sonawane",year:"2021"},{img:"1000853532.png",file:"Olya_Sanjveli.m4a",title:"Olya Sanjveli",artist:"Swapnil Bandodkar",year:"2013"},{img:"1000853552.png",file:"Prem_He.m4a",title:"Prem He",artist:"Spruha Joshi",year:"2017"},{img:"1000853557.png",file:"Rang_Hey_Nave.m4a",title:"Rang Hey Nave Nave",artist:"Shasha Tirupati",year:"2015"},{img:"1000853497.png",file:"Saaj_Hyo_Tuza.m4a",title:"Saaj Hyo Tuza",artist:"Onkarswaroop",year:"2018"},{img:"1000853472.png",file:"Shaky.m4a",title:"Shaky",artist:"Sanju Rathod",year:"2025"},{img:"1000853467.png",file:"Sundari.m4a",title:"Sundari",artist:"Sanju Rathod",year:"2025"},{img:"1000853527.png",file:"Varyavarti_Gandh.m4a",title:"Varyavarti Gandh Pasarla",artist:"Kunal Ganjawala",year:"2004"},{img:"1000853502.png",file:"Vatevari_Mogara.m4a",title:"Vatevari Mogara",artist:"Vaishali Samant, Swapnil Bandodkar",year:"2020"},{img:"1000853562.png",file:"Ved_Lavlay.m4a",title:"Ved Lavlay",artist:"Riteish Deshmukh, Genelia Deshmukh",year:"2022"},{img:"1000853507.png",file:"Galavar_Khali.m4a",title:"Galavar Khali",artist:"Swapnil Bandodkar",year:"2003"}].map((t,a)=>({id:`marathi-${a+1}`,category:"marathi",title:t.title,artist:t.artist,year:t.year||"2024",src:`./poster/marathi_songs/${t.file}`,cover:`./marathi/${t.img}`})),...[{img:"1000853618.png",file:"Bajrang_Baan.m4a",title:"Bajrang Baan",artist:"Agam Aggarwal",year:"2024"},{img:"1000853633.png",file:"Kaalbhairav_Ashtakam.m4a",title:"Kaalbhairav Ashtakam",artist:"Agam Aggarwal",year:"2023"},{img:"1000853642.png",file:"Om_Namah_Shivay.m4a",title:"Om Namah Shivay",artist:"Agam Aggarwal",year:"2022"},{img:"1000853666.png",file:"Aigiri_Nandini.m4a",title:"Aigiri Nandini",artist:"Rajalakshmee Sanjay",year:"2021"},{img:"1000853608.png",file:"Anjanichya_Suta.m4a",title:"Anjanichya Suta",artist:"Dj Tsr",year:"2024"},{img:"1000853585.png",file:"Bolo_Har_Har_Har.m4a",title:"Bolo Har Har Har",artist:"Mithoon, Badshah",year:"2016"},{img:"1000853590.png",file:"Babam_Bam.m4a",title:"Babam Bam",artist:"Kailash Kher",year:"2016"},{img:"1000853575.png",file:"Mere_Ghar_Ram_Aaye_Hain.m4a",title:"Mere Ghar Ram Aaye Hain",artist:"Jubin Nautiyal",year:"2023"},{img:"1000853628.png",file:"Shri_Krishna_Govind.m4a",title:"Shri Krishna Govind",artist:"Jubin Nautiyal",year:"2024"},{img:"1000853613.png",file:"Keejo_Kesari_Ke_Laal.m4a",title:"Keejo Kesari Ke Laal",artist:"Dj Karan Kahar",year:"2023"},{img:"1000853623.png",file:"Krishna_Trance.m4a",title:"Krishna Trance",artist:"Kaala Bhairava",year:"2024"},{img:"1000853580.png",file:"Meri_Maa_Ke_Barabar.m4a",title:"Meri Maa Ke Barabar Koi Nahi",artist:"Jubin Nautiyal",year:"2022"},{img:"1000853647.png",file:"Raghunandana.m4a",title:"Raghunandana",artist:"GowraHari, Saicharan",year:"2024"},{img:"1000853656.png",file:"Shri_Swami_Samarth.m4a",title:"Shri Swami Samarth",artist:"Adarsh Shinde",year:"2018"},{img:"1000853599.png",file:"Shamshaan.m4a",title:"Shamshaan",artist:"Hansraj Raghuwanshi",year:"2024"},{img:"1000853652.png",file:"Swami_Samarth_Stuti.m4a",title:"Swami Samarth Stuti",artist:"Kedar Phadke",year:"2023"},{img:"1000853661.png",file:"Kahase_Rehne_Wala.m4a",title:"Kahase Rehne Wala Re Baba",artist:"Shashikant Kachave",year:"2024"},{img:"1000853637.png",file:"Jai_Mahakal.m4a",title:"Jai Mahakal 2",artist:"Ashutosh Pratihast",year:"2024"},{img:"1000853594.png",file:"Shiv_Tandav.m4a",title:"Shiv Tandav Stotram",artist:"Traditional",year:"2022"},{img:"1000853603.png",file:"Hanuman_Chalisa.m4a",title:"Hanuman Chalisa",artist:"Shankar Mahadevan",year:"2021"}].map((t,a)=>({id:`devotional-${a+1}`,category:"devotional",title:t.title,artist:t.artist,year:t.year||"2024",src:`./poster/devotional_songs/${t.file}`,cover:`./devotional/${t.img}`}))];let M=0,ye=!1,Qe=!1,ze=!1,Ti=[],N=null,ya=JSON.parse(localStorage.getItem("recently_played")||"[]"),wi=localStorage.getItem("audio_volume")!==null?parseFloat(localStorage.getItem("audio_volume")):1;const k=new Audio;k.volume=wi;let za=null,Rn=null,Vt=null,Jt=null;const Td=()=>{za||(za=new(window.AudioContext||window.webkitAudioContext),Rn=za.createMediaElementSource(k),Vt=za.createGain(),Jt=za.createAnalyser(),Rn.connect(Vt),Vt.connect(Jt),Jt.connect(za.destination),wd())},wd=()=>{const t=()=>{if(k&&!k.paused){const a=k.volume;Math.abs(a-wi)>.01&&(wi=a,updateVolumeUI())}requestAnimationFrame(t)};t()},H=document.getElementById("btn-volume"),Ya=document.getElementById("icon-volume");k.addEventListener("error",t=>{console.error("Error loading track:",t)});const Ft=document.getElementById("recently-played-section"),Wt=document.getElementById("recently-played-grid"),uo=document.getElementById("latest-songs-grid"),co=document.getElementById("ninety-songs-grid"),mo=document.getElementById("bollywood-songs-grid"),yo=document.getElementById("marathi-songs-grid"),go=document.getElementById("devotional-songs-grid"),jt=document.getElementById("home-view"),Et=document.getElementById("category-full-view"),Oa=document.getElementById("category-view-grid"),Fi=document.getElementById("category-view-title"),Wi=document.getElementById("category-view-desc"),xn=document.getElementById("btn-back-home"),zn=document.getElementById("player-title"),Yn=document.getElementById("player-artist"),je=document.getElementById("player-art"),Za=document.getElementById("player-bar");function po(){const t=C[M];if(t){const a=k.duration&&!isNaN(k.duration)?Qa(k.duration):"...";Fn&&(Fn.src=t.cover),Wn&&(Wn.textContent=t.title),ot&&(ot.textContent=`${t.artist} • ${t.year} • 1 song, ${a}`),Gn&&(Gn.textContent=t.title),qn&&(qn.textContent=t.artist),st&&(st.textContent=a),ye?(ea&&ea.classList.add("d-none"),ga&&ga.classList.remove("d-none")):(ea&&ea.classList.remove("d-none"),ga&&ga.classList.add("d-none"))}}const Gt=document.getElementById("btn-close-player"),qt=document.getElementById("btn-play-pause"),ko=document.getElementById("icon-play"),fo=document.getElementById("icon-pause"),Ut=document.getElementById("btn-prev"),Zt=document.getElementById("btn-next"),Ci=document.getElementById("progress-bar"),Xt=document.getElementById("progress-container"),Si=document.getElementById("time-current"),rt=document.getElementById("time-total"),Vn=document.getElementById("volume-bar"),Ye=document.getElementById("volume-container"),Qt=document.getElementById("btn-signin"),ai=document.getElementById("btn-close-signin"),B=document.getElementById("signin-overlay"),ei=document.getElementById("signin-form"),ti=document.getElementById("btn-signup"),Sa=document.getElementById("search-input"),ra=document.getElementById("btn-mic"),z=document.getElementById("signup-overlay"),ii=document.getElementById("btn-close-signup"),ni=document.getElementById("signup-form"),ri=document.getElementById("link-to-signin"),oi=document.getElementById("link-to-signup"),Va=document.getElementById("auth-buttons"),Ja=document.getElementById("user-profile-section"),Jn=document.getElementById("user-avatar"),si=document.getElementById("btn-logout"),Fa=document.getElementById("btn-show-profile"),K=document.getElementById("profile-overlay"),Wa=document.getElementById("btn-close-profile"),hi=document.getElementById("btn-logout-profile"),Ve=document.getElementById("profile-avatar-large"),Je=document.getElementById("profile-name-display"),Fe=document.getElementById("profile-email-display"),se=document.getElementById("player-detail-view"),Fn=document.getElementById("detail-img"),Wn=document.getElementById("detail-title"),ot=document.getElementById("detail-artist-info"),Gn=document.getElementById("detail-active-title"),qn=document.getElementById("detail-active-artist"),st=document.getElementById("detail-active-duration"),li=document.getElementById("btn-close-detail"),ui=document.getElementById("btn-detail-play"),ea=document.getElementById("detail-play-icon"),ga=document.getElementById("detail-pause-icon"),We=document.getElementById("btn-shuffle"),Ge=document.getElementById("btn-detail-shuffle"),Ma=document.getElementById("btn-repeat"),F=document.getElementById("btn-detail-heart"),di=document.getElementById("btn-detail-plus"),ci=document.getElementById("btn-detail-download"),mi=document.getElementById("btn-detail-options"),oa=document.getElementById("more-options-menu"),Un=document.getElementById("opt-share"),Zn=document.getElementById("opt-lyrics"),Xn=document.getElementById("opt-artist"),Qn=document.getElementById("opt-queue"),ht=document.getElementById("lyrics-overlay"),ar=document.getElementById("btn-close-lyrics"),Cd=document.getElementById("lyrics-song-title"),Sd=document.getElementById("lyrics-song-artist"),Mi=document.getElementById("lyrics-content"),lt=document.querySelector(".lyrics-content-wrapper"),er=document.getElementById("btn-lyrics-play-pause"),ut=document.querySelector(".lyrics-play-icon"),bo=document.querySelector(".lyrics-pause-icon"),dt=document.getElementById("lyrics-mini-title"),ct=document.getElementById("lyrics-mini-artist"),mt=document.getElementById("lyrics-mini-progress"),tr=document.getElementById("lyrics-mini-container"),yt=document.getElementById("lyrics-mini-current"),he=document.getElementById("lyrics-mini-total"),Md=t=>Ad[t]||`Lyrics are not available for this song yet.
Stay tuned for updates!`,sa=document.getElementById("signin-error"),qe=document.querySelector(".error-msg"),Li=()=>JSON.parse(localStorage.getItem("sonic_flow_users")||"[]"),Ld=t=>{const a=Li();a.push(t),localStorage.setItem("sonic_flow_users",JSON.stringify(a))};document.addEventListener("DOMContentLoaded",()=>{try{console.log("Sonic Flow Player Initialized"),Dd(),le(M),xd()}catch(t){console.error("Initialization error:",t)}});function Dd(){_o(),be("latest",uo),be("ninety",co),be("bollywood",mo),be("marathi",yo),be("devotional",go)}function Me(t,a,e={}){const i=document.getElementById("track-card-template");if(!i)return null;const r=i.content.cloneNode(!0),n=r.querySelector(".fade-in-up"),o=r.querySelector(".track-card"),s=r.querySelector("img"),h=r.querySelector(".card-title"),d=r.querySelector(".card-text");return e.minWidth&&(n.style.minWidth=e.minWidth),e.mb&&n.classList.add(e.mb),e.hoverScale&&o.classList.add("hover-scale"),o.setAttribute("onclick",`playTrack(${a})`),s.src=t.cover,s.alt=t.title,h.textContent=t.title,d.textContent=t.artist,r}function ir(t,a=Oa){if(a){if(a.innerHTML="",t.length===0){const e=document.getElementById("no-results-template");e&&a.appendChild(e.content.cloneNode(!0));return}t.forEach(e=>{const i=C.findIndex(n=>n.id===e.id),r=Me(e,i,{hoverScale:!0,mb:"mb-4"});r&&a.appendChild(r)}),a===Oa&&(Fi.textContent="Search Results",Wi.textContent="Showing results for your search",jt.classList.add("d-none"),Et.classList.remove("d-none"),window.scrollTo(0,0))}}function _o(){if(!Ft||!Wt)return;if(ya.length===0){Ft.classList.add("d-none");return}Ft.classList.remove("d-none"),Wt.innerHTML="",[...ya].reverse().forEach(a=>{const e=C.find(n=>n.id===a);if(!e)return;const i=C.findIndex(n=>n.id===e.id),r=Me(e,i);r&&Wt.appendChild(r)})}function be(t,a){if(!a)return;a.innerHTML="",C.filter(i=>i.category===t).slice(0,10).forEach(i=>{const r=C.findIndex(o=>o.id===i.id),n=Me(i,r,{hoverScale:!0});n&&a.appendChild(n)})}function Kd(t){const a=C.filter(r=>r.category===t),i={latest:{title:"Latest Songs",desc:"Newly released tracks just for you"},ninety:{title:"90's Hits",desc:"The golden era of Bollywood melodies"},bollywood:{title:"Bollywood Songs",desc:"Biggest chartbusters from the film industry"},marathi:{title:"Marathi Hits",desc:"Classic and modern Marathi favorites"},devotional:{title:"Devotional",desc:"Spiritually uplifting bhakti music"}}[t]||{title:"Music",desc:"Browse your favorite tracks"};Fi.textContent=i.title,Wi.textContent=i.desc,Oa.innerHTML="",a.forEach(r=>{const n=C.findIndex(s=>s.id===r.id),o=Me(r,n,{mb:"mb-4",hoverScale:!0});o&&Oa.appendChild(o)}),jt.classList.add("d-none"),Et.classList.remove("d-none"),window.scrollTo(0,0)}function Od(t){const a=C.filter(e=>e.artist.toLowerCase().includes(t.toLowerCase()));Fi.textContent=t,Wi.textContent="Artist Discography",Oa.innerHTML="",a.length===0?Oa.innerHTML='<div class="col-12 text-center py-5 text-secondary">No tracks found for this artist.</div>':a.forEach(e=>{const i=C.findIndex(n=>n.id===e.id),r=Me(e,i,{mb:"mb-4",hoverScale:!0});r&&Oa.appendChild(r)}),jt.classList.add("d-none"),Et.classList.remove("d-none"),window.scrollTo(0,0),se&&(se.classList.add("d-none"),document.body.style.overflow="auto")}const W=document.getElementById("play-auth-overlay"),yi=document.getElementById("btn-close-play-auth"),Nd=document.getElementById("play-auth-img"),Id=document.getElementById("play-auth-title"),Hd=document.getElementById("play-auth-artist"),gi=document.getElementById("btn-auth-signup"),pi=document.getElementById("btn-auth-login");window.playTrack=t=>{if(!N){Bd(t);return}M===t&&ye?Ee():(le(t),ba())};function Bd(t){const a=C[t];a&&W&&(Nd.src=a.cover,Id.textContent=a.title,Hd.textContent=a.artist,W.classList.remove("d-none"),document.body.style.overflow="hidden")}function le(t){M=t;const a=C[t];a&&(k&&(k.src=a.src),zn&&(zn.textContent=a.title),Yn&&(Yn.textContent=a.artist),je&&(je.style.backgroundImage=`url('${a.cover}')`),$d(a.id),Ci&&(Ci.style.width="0%"),Si&&(Si.textContent="0:00"),rt&&(rt.textContent="..."),se&&!se.classList.contains("d-none")&&po(),dt&&(dt.textContent=a.title),ct&&(ct.textContent=a.artist),mt&&(mt.style.width="0%"),yt&&(yt.textContent="0:00"),he&&(he.textContent="..."),Pd())}function Pd(){if("mediaSession"in navigator){const t=C[M];navigator.mediaSession.metadata=new MediaMetadata({title:t.title,artist:t.artist,album:"Ideamagix Music",artwork:[{src:t.cover,sizes:"512x512",type:"image/png"}]}),navigator.mediaSession.setActionHandler("play",()=>ba()),navigator.mediaSession.setActionHandler("pause",()=>Ee()),navigator.mediaSession.setActionHandler("previoustrack",()=>Di()),navigator.mediaSession.setActionHandler("nexttrack",()=>at())}}function $d(t){ya=ya.filter(a=>a!==t),ya.push(t),ya.length>10&&ya.shift(),localStorage.setItem("recently_played",JSON.stringify(ya)),_o()}function ba(){ye=!0,Td(),k.play(),ko.classList.add("d-none"),fo.classList.remove("d-none"),Za.classList.remove("hidden-player"),ea&&(ea.classList.add("d-none"),ga.classList.remove("d-none")),ut&&(ut.classList.add("d-none"),bo.classList.remove("d-none"))}function Ee(){ye=!1,k.pause(),ko.classList.remove("d-none"),fo.classList.add("d-none"),ea&&(ea.classList.remove("d-none"),ga.classList.add("d-none")),ut&&(ut.classList.remove("d-none"),bo.classList.add("d-none"))}function ki(){ye?Ee():ba()}function at(){if(Ti.length>0){const t=Ti.shift(),a=C.findIndex(e=>e.id===t);if(a!==-1){M=a,le(M),ba();return}}if(Qe){let t;do t=Math.floor(Math.random()*C.length);while(t===M&&C.length>1);M=t}else M=(M+1)%C.length;le(M),ba()}function Di(){M=(M-1+C.length)%C.length,le(M),ba()}function Rd(t){const{duration:a,currentTime:e}=t.srcElement,i=e/a*100;Ci.style.width=`${i}%`,a&&(Si.textContent=Qa(e),rt.textContent=Qa(a),mt&&(mt.style.width=`${i}%`),yt&&(yt.textContent=Qa(e)),he&&(he.textContent=Qa(a)),vo())}function vo(){if(ht&&!ht.classList.contains("d-none")&&k.duration){const t=k.currentTime,a=Mi.querySelectorAll(".lyric-line");let e=null;if(a.forEach((i,r)=>{const n=parseFloat(i.dataset.time),o=a[r+1]?parseFloat(a[r+1].dataset.time):k.duration;t>=n&&t<o?(i.classList.add("active"),e=i):i.classList.remove("active")}),e){const i=lt.clientHeight/2,r=e.offsetTop,n=e.clientHeight/2,o=r-i+n;lt.scrollTo({top:o,behavior:"smooth"})}}}function nr(t){const a=this.clientWidth,e=t.offsetX,i=k.duration;k.currentTime=e/a*i}function Qa(t){const a=Math.floor(t/60),e=Math.floor(t%60);return`${a}:${e<10?"0":""}${e}`}function xd(){if(ra){const n=window.SpeechRecognition||window.webkitSpeechRecognition;if(n){const o=new n;o.continuous=!1,o.lang="en-US";let s=!1;o.onstart=()=>{s=!0,Sa.placeholder="Listening... Speak now",ra.classList.add("text-danger","pulse-animation"),ra.classList.remove("text-secondary")},o.onend=()=>{s=!1,Sa.placeholder="Search artists, songs, albums...",ra.classList.remove("text-danger","pulse-animation"),ra.classList.add("text-secondary")},o.onresult=h=>{const d=h.results[0][0].transcript.toLowerCase();Sa.value=d;const u=C.filter(y=>y.title.toLowerCase().includes(d)||y.artist.toLowerCase().includes(d));ir(u)},o.onerror=h=>{console.error("Speech recognition error",h.error),s=!1,Sa.placeholder="Error. Try again.",ra.classList.remove("text-danger","pulse-animation"),ra.classList.add("text-secondary")},ra.addEventListener("click",()=>{s?o.stop():o.start()})}else ra.style.display="none",console.log("Web Speech API not supported in this browser.")}Object.keys({latest:uo,ninety:co,bollywood:mo,marathi:yo,devotional:go}).forEach(n=>{const o=document.getElementById(`view-all-${n}`);o&&o.addEventListener("click",s=>{s.preventDefault(),Kd(n)})}),xn&&xn.addEventListener("click",()=>{Et.classList.add("d-none"),jt.classList.remove("d-none"),window.scrollTo(0,0)}),qt==null||qt.addEventListener("click",ki),Ut==null||Ut.addEventListener("click",Di),Zt==null||Zt.addEventListener("click",at);const a=()=>{k.muted||k.volume===0?(Vn.style.width="0%",H==null||H.classList.add("text-danger"),H==null||H.classList.remove("text-secondary"),Ya&&(Ya.className="bi bi-volume-mute")):(Vn.style.width=`${k.volume*100}%`,H==null||H.classList.remove("text-danger"),H==null||H.classList.add("text-secondary"),Ya&&(k.volume>.6?Ya.className="bi bi-volume-up":k.volume>0?Ya.className="bi bi-volume-down":Ya.className="bi bi-volume-mute")),localStorage.setItem("audio_volume",k.volume)};H==null||H.addEventListener("click",()=>{k&&(k.muted=!k.muted,a())}),Ye==null||Ye.addEventListener("click",n=>{const o=Ye.clientWidth,h=n.offsetX/o;k.muted=!1,k.volume=Math.max(0,Math.min(1,h)),a()}),k.addEventListener("volumechange",()=>{a()}),a(),document.addEventListener("keydown",n=>{if(n.key==="ArrowUp"||n.key==="AudioVolumeUp"){const o=Math.min(1,k.volume+.05);k.volume=o,k.muted=!1,a()}else if(n.key==="ArrowDown"||n.key==="AudioVolumeDown"){const o=Math.max(0,k.volume-.05);k.volume=o,a()}else n.key==="m"||n.key==="M"||n.key==="AudioVolumeMute"?(n.preventDefault(),k.muted=!k.muted,a()):n.key===" "||n.key==="MediaPlayPause"?(n.preventDefault(),ki()):n.key==="MediaTrackNext"?(n.preventDefault(),at()):n.key==="MediaTrackPrevious"&&(n.preventDefault(),Di())}),k.addEventListener("loadedmetadata",()=>{const n=Qa(k.duration);if(rt.textContent=n,he&&(he.textContent=n),st&&(st.textContent=n),ot){const o=C[M];ot.textContent=`${o.artist} • ${o.year} • 1 song, ${n}`}}),k.addEventListener("timeupdate",Rd),k.addEventListener("ended",()=>{ze?(le(M),ba()):at()}),Xt==null||Xt.addEventListener("click",nr),je==null||je.addEventListener("click",()=>{po(),se.classList.remove("d-none"),document.body.style.overflow="hidden"}),li==null||li.addEventListener("click",()=>{se.classList.add("d-none"),document.body.style.overflow="auto"}),ui==null||ui.addEventListener("click",()=>{ye?(Ee(),ea.classList.remove("d-none"),ga.classList.add("d-none")):(ba(),ea.classList.add("d-none"),ga.classList.remove("d-none"))});const e=()=>{Qe=!Qe;const n=o=>{o&&(Qe?(o.classList.add("text-green-active"),o.classList.remove("text-secondary")):(o.classList.remove("text-green-active"),o.classList.add("text-secondary")))};n(We),n(Ge)};We==null||We.addEventListener("click",e),Ge==null||Ge.addEventListener("click",e),Ma==null||Ma.addEventListener("click",()=>{ze=!ze,ze?(Ma.classList.add("text-green-active"),Ma.classList.remove("text-secondary")):(Ma.classList.remove("text-green-active"),Ma.classList.add("text-secondary"))}),F==null||F.addEventListener("click",()=>{F.classList.toggle("text-danger"),F.classList.toggle("text-secondary")}),di==null||di.addEventListener("click",()=>{}),ci==null||ci.addEventListener("click",()=>{}),Gt==null||Gt.addEventListener("click",()=>{Za.classList.add("hidden-player"),Ee()}),Qt==null||Qt.addEventListener("click",()=>{B.classList.remove("d-none"),document.body.style.overflow="hidden",sa&&sa.classList.add("d-none");const n=document.getElementById("navbarNav");if(n&&n.classList.contains("show")){const o=Ha.getInstance(n);o&&o.hide()}}),ai==null||ai.addEventListener("click",()=>{B.classList.add("d-none"),document.body.style.overflow="auto"}),B==null||B.addEventListener("click",n=>{n.target===B&&(B.classList.add("d-none"),document.body.style.overflow="auto")}),ei==null||ei.addEventListener("submit",n=>{n.preventDefault();const o=document.getElementById("email").value,s=document.getElementById("password").value,d=Li().find(u=>u.email===o);if(!d){sa.textContent="please register email id and password",sa.classList.remove("d-none");return}if(d.password!==s){sa.textContent="please enter correct password",sa.classList.remove("d-none");return}sa&&sa.classList.add("d-none"),alert(`Welcome back, ${d.name||"User"}!`),B&&(B.classList.add("d-none"),document.body.style.overflow="auto"),N=d,i(d)});function i(n){Va&&Ja&&(Va.classList.add("d-none"),Va.classList.remove("d-flex"),Ja.classList.remove("d-none"),Ja.classList.add("d-flex"),Jn&&n.name&&(Jn.textContent=n.name.charAt(0).toUpperCase()))}Fa==null||Fa.addEventListener("click",n=>{n.preventDefault(),N&&(Ve&&(Ve.textContent=N.name.charAt(0).toUpperCase()),Je&&(Je.textContent=N.name),Fe&&(Fe.textContent=N.email),profileFullName&&(profileFullName.textContent=N.name),profileFullEmail&&(profileFullEmail.textContent=N.email),K&&(K.classList.remove("d-none"),document.body.style.overflow="hidden"))}),Wa==null||Wa.addEventListener("click",()=>{K.classList.add("d-none"),document.body.style.overflow="auto"}),K==null||K.addEventListener("click",n=>{n.target===K&&(K.classList.add("d-none"),document.body.style.overflow="auto")});function r(){N=null,Va&&Ja&&(Ja.classList.add("d-none"),Ja.classList.remove("d-flex"),Va.classList.remove("d-none"),Va.classList.add("d-flex")),K.classList.add("d-none"),document.body.style.overflow="auto",alert("You have been logged out.")}if(si==null||si.addEventListener("click",n=>{n.preventDefault(),r()}),Fa==null||Fa.addEventListener("click",n=>{if(n.preventDefault(),N){Je&&(Je.textContent=N.name),Fe&&(Fe.textContent=N.email);const o=document.getElementById("profile-full-name"),s=document.getElementById("profile-full-email");o&&(o.textContent=N.name),s&&(s.textContent=N.email),Ve&&N.name&&(Ve.textContent=N.name.charAt(0).toUpperCase())}K&&(K.classList.remove("d-none"),document.body.style.overflow="hidden")}),Wa==null||Wa.addEventListener("click",()=>{K&&(K.classList.add("d-none"),document.body.style.overflow="auto")}),K==null||K.addEventListener("click",n=>{n.target===K&&(K.classList.add("d-none"),document.body.style.overflow="auto")}),hi==null||hi.addEventListener("click",n=>{n.preventDefault(),r()}),ti==null||ti.addEventListener("click",()=>{z.classList.remove("d-none"),document.body.style.overflow="hidden",qe&&qe.classList.add("d-none");const n=document.getElementById("navbarNav");if(n&&n.classList.contains("show")){const o=Ha.getInstance(n);o&&o.hide()}}),ii==null||ii.addEventListener("click",()=>{z.classList.add("d-none"),document.body.style.overflow="auto"}),z==null||z.addEventListener("click",n=>{n.target===z&&(z.classList.add("d-none"),document.body.style.overflow="auto")}),ri==null||ri.addEventListener("click",n=>{n.preventDefault(),z.classList.add("d-none"),B.classList.remove("d-none"),sa.classList.add("d-none")}),oi==null||oi.addEventListener("click",n=>{n.preventDefault(),B.classList.add("d-none"),z.classList.remove("d-none"),qe&&qe.classList.add("d-none")}),ni==null||ni.addEventListener("submit",n=>{n.preventDefault();const o=document.getElementById("reg-name").value,s=document.getElementById("reg-email").value,h=document.getElementById("reg-password").value;if(Li().some(u=>u.email===s)){alert("This email is already registered. Please Sign In.");return}Ld({name:o,email:s,password:h}),alert(`Welcome to Sonic Flow, ${o}! Your account has been created successfully. You can now Sign In.`),z&&z.classList.add("d-none"),document.body.style.overflow="auto",B&&B.classList.remove("d-none")}),Sa==null||Sa.addEventListener("input",n=>{const o=n.target.value.toLowerCase(),s=C.filter(h=>h.title.toLowerCase().includes(o)||h.artist.toLowerCase().includes(o));ir(s)}),yi==null||yi.addEventListener("click",()=>{W&&W.classList.add("d-none"),document.body.style.overflow="auto"}),gi==null||gi.addEventListener("click",()=>{W&&W.classList.add("d-none"),z&&z.classList.remove("d-none")}),pi==null||pi.addEventListener("click",n=>{n.preventDefault(),W&&W.classList.add("d-none"),B&&B.classList.remove("d-none")}),W&&W.addEventListener("click",n=>{n.target===W&&(W.classList.add("d-none"),document.body.style.overflow="auto")}),F&&F.addEventListener("click",()=>{const n=F.querySelector("i");n&&(n.classList.contains("bi-heart")?(n.classList.remove("bi-heart"),n.classList.add("bi-heart-fill"),F.classList.remove("text-secondary"),F.classList.add("text-success")):(n.classList.remove("bi-heart-fill"),n.classList.add("bi-heart"),F.classList.remove("text-success"),F.classList.add("text-secondary")))}),mi&&oa){mi.addEventListener("click",c=>{c.stopPropagation(),oa.classList.toggle("d-none")}),document.addEventListener("click",c=>{!oa.classList.contains("d-none")&&!oa.contains(c.target)&&c.target!==mi&&oa.classList.add("d-none")});const n=document.getElementById("social-share-overlay"),o=document.getElementById("btn-close-share"),s=document.getElementById("btn-copy-link"),h=document.getElementById("share-link-input"),d=document.getElementById("share-whatsapp"),u=document.getElementById("share-twitter"),y=document.getElementById("share-facebook");Un&&Un.addEventListener("click",()=>{oa.classList.add("d-none");const c=C[M],E=window.location.href,g=`Check out ${c.title} by ${c.artist} on INAM Music!`;d&&(d.href=`https://wa.me/?text=${encodeURIComponent(g+" "+E)}`),u&&(u.href=`https://twitter.com/intent/tweet?text=${encodeURIComponent(g)}&url=${encodeURIComponent(E)}`),y&&(y.href=`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(E)}`),h&&(h.value=E),n&&(n.classList.remove("d-none"),document.body.style.overflow="hidden")});const f=()=>{n&&(n.classList.add("d-none"),document.body.style.overflow="auto")};o&&o.addEventListener("click",f),n&&n.addEventListener("click",c=>{c.target===n&&f()}),s&&h&&s.addEventListener("click",()=>{navigator.clipboard.writeText(h.value).then(()=>{const c=s.textContent;s.textContent="Copied!",setTimeout(()=>s.textContent=c,2e3)})}),Zn&&Zn.addEventListener("click",()=>{const c=C[M];Cd.textContent=c.title,Sd.textContent=c.artist;const g=Md(c.title).split(`
`);Mi.innerHTML="";const j=/\[(\d{2}):(\d{2})\.(\d{2})\]/,_=g.map(b=>{const v=b.match(j);if(v){const p=parseInt(v[1]),A=parseInt(v[2]),T=parseInt(v[3]);return{time:p*60+A+T/100,text:b.replace(j,"").trim()}}return{time:null,text:b.trim()}}).filter(b=>b.text!=="");for(let b=0;b<_.length;b++)if(_[b].time===null){let v=0,p=-1;for(let w=b-1;w>=0;w--)if(_[w].time!==null){v=_[w].time,p=w;break}let A=k.duration||_.length*3,T=_.length;for(let w=b+1;w<_.length;w++)if(_[w].time!==null){A=_[w].time,T=w;break}const S=T-p,L=(A-v)/S;_[b].time=v+L*(b-p)}_.forEach(b=>{const v=document.createElement("span");v.className="lyric-line d-block",b.text.startsWith("(")&&b.text.endsWith(")")&&v.classList.add("lyrics-header-text","opacity-50","fs-5","mt-4"),v.textContent=b.text,v.dataset.time=b.time,Mi.appendChild(v)}),ht.classList.remove("d-none"),Za&&Za.classList.add("d-none"),lt&&(lt.scrollTop=0),dt&&(dt.textContent=c.title),ct&&(ct.textContent=c.artist),document.body.style.overflow="hidden",vo(),oa.classList.add("d-none")}),Xn&&Xn.addEventListener("click",()=>{const E=C[M].artist.split(",")[0].trim();Od(E),oa.classList.add("d-none")}),Qn&&Qn.addEventListener("click",()=>{const c=C[M];Ti.push(c.id),alert(`${c.title} added to queue!`),oa.classList.add("d-none")})}ar&&ar.addEventListener("click",()=>{ht.classList.add("d-none"),Za&&Za.classList.remove("d-none"),document.body.style.overflow="auto"}),er&&er.addEventListener("click",ki),tr&&tr.addEventListener("click",nr),window.addEventListener("load",()=>{const n=document.getElementById("splash-screen");n&&setTimeout(()=>{n.classList.add("fade-out"),setTimeout(()=>{n.remove()},600)},1500)})}

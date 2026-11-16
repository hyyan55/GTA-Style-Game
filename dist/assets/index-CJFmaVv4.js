var R_=Object.defineProperty;var C_=(n,e,t)=>e in n?R_(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var B=(n,e,t)=>C_(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function b_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var m0={exports:{}},fc={},g0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),P_=Symbol.for("react.portal"),L_=Symbol.for("react.fragment"),D_=Symbol.for("react.strict_mode"),I_=Symbol.for("react.profiler"),N_=Symbol.for("react.provider"),U_=Symbol.for("react.context"),F_=Symbol.for("react.forward_ref"),O_=Symbol.for("react.suspense"),z_=Symbol.for("react.memo"),k_=Symbol.for("react.lazy"),Kd=Symbol.iterator;function B_(n){return n===null||typeof n!="object"?null:(n=Kd&&n[Kd]||n["@@iterator"],typeof n=="function"?n:null)}var v0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_0=Object.assign,y0={};function ro(n,e,t){this.props=n,this.context=e,this.refs=y0,this.updater=t||v0}ro.prototype.isReactComponent={};ro.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ro.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function x0(){}x0.prototype=ro.prototype;function bf(n,e,t){this.props=n,this.context=e,this.refs=y0,this.updater=t||v0}var Pf=bf.prototype=new x0;Pf.constructor=bf;_0(Pf,ro.prototype);Pf.isPureReactComponent=!0;var Zd=Array.isArray,S0=Object.prototype.hasOwnProperty,Lf={current:null},M0={key:!0,ref:!0,__self:!0,__source:!0};function E0(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)S0.call(e,i)&&!M0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:da,type:n,key:s,ref:o,props:r,_owner:Lf.current}}function H_(n,e){return{$$typeof:da,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Df(n){return typeof n=="object"&&n!==null&&n.$$typeof===da}function V_(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Jd=/\/+/g;function Oc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?V_(""+n.key):e.toString(36)}function dl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case da:case P_:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Oc(o,0):i,Zd(r)?(t="",n!=null&&(t=n.replace(Jd,"$&/")+"/"),dl(r,e,t,"",function(c){return c})):r!=null&&(Df(r)&&(r=H_(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Jd,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zd(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Oc(s,a);o+=dl(s,e,t,l,r)}else if(l=B_(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Oc(s,a++),o+=dl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ma(n,e,t){if(n==null)return n;var i=[],r=0;return dl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function G_(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var fn={current:null},pl={transition:null},W_={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:pl,ReactCurrentOwner:Lf};function w0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Ma,forEach:function(n,e,t){Ma(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Ma(n,function(){e++}),e},toArray:function(n){return Ma(n,function(e){return e})||[]},only:function(n){if(!Df(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ye.Component=ro;Ye.Fragment=L_;Ye.Profiler=I_;Ye.PureComponent=bf;Ye.StrictMode=D_;Ye.Suspense=O_;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W_;Ye.act=w0;Ye.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=_0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lf.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)S0.call(e,l)&&!M0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:da,type:n.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(n){return n={$$typeof:U_,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:N_,_context:n},n.Consumer=n};Ye.createElement=E0;Ye.createFactory=function(n){var e=E0.bind(null,n);return e.type=n,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(n){return{$$typeof:F_,render:n}};Ye.isValidElement=Df;Ye.lazy=function(n){return{$$typeof:k_,_payload:{_status:-1,_result:n},_init:G_}};Ye.memo=function(n,e){return{$$typeof:z_,type:n,compare:e===void 0?null:e}};Ye.startTransition=function(n){var e=pl.transition;pl.transition={};try{n()}finally{pl.transition=e}};Ye.unstable_act=w0;Ye.useCallback=function(n,e){return fn.current.useCallback(n,e)};Ye.useContext=function(n){return fn.current.useContext(n)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(n){return fn.current.useDeferredValue(n)};Ye.useEffect=function(n,e){return fn.current.useEffect(n,e)};Ye.useId=function(){return fn.current.useId()};Ye.useImperativeHandle=function(n,e,t){return fn.current.useImperativeHandle(n,e,t)};Ye.useInsertionEffect=function(n,e){return fn.current.useInsertionEffect(n,e)};Ye.useLayoutEffect=function(n,e){return fn.current.useLayoutEffect(n,e)};Ye.useMemo=function(n,e){return fn.current.useMemo(n,e)};Ye.useReducer=function(n,e,t){return fn.current.useReducer(n,e,t)};Ye.useRef=function(n){return fn.current.useRef(n)};Ye.useState=function(n){return fn.current.useState(n)};Ye.useSyncExternalStore=function(n,e,t){return fn.current.useSyncExternalStore(n,e,t)};Ye.useTransition=function(){return fn.current.useTransition()};Ye.version="18.3.1";g0.exports=Ye;var nt=g0.exports;const X_=b_(nt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=nt,Y_=Symbol.for("react.element"),$_=Symbol.for("react.fragment"),q_=Object.prototype.hasOwnProperty,K_=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z_={key:!0,ref:!0,__self:!0,__source:!0};function T0(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)q_.call(e,i)&&!Z_.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Y_,type:n,key:s,ref:o,props:r,_owner:K_.current}}fc.Fragment=$_;fc.jsx=T0;fc.jsxs=T0;m0.exports=fc;var J=m0.exports,Yu={},A0={exports:{}},Dn={},R0={exports:{}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(N,re){var te=N.length;N.push(re);e:for(;0<te;){var de=te-1>>>1,Ne=N[de];if(0<r(Ne,re))N[de]=re,N[te]=Ne,te=de;else break e}}function t(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var re=N[0],te=N.pop();if(te!==re){N[0]=te;e:for(var de=0,Ne=N.length,He=Ne>>>1;de<He;){var Z=2*(de+1)-1,ae=N[Z],ve=Z+1,_e=N[ve];if(0>r(ae,te))ve<Ne&&0>r(_e,ae)?(N[de]=_e,N[ve]=te,de=ve):(N[de]=ae,N[Z]=te,de=Z);else if(ve<Ne&&0>r(_e,te))N[de]=_e,N[ve]=te,de=ve;else break e}}return re}function r(N,re){var te=N.sortIndex-re.sortIndex;return te!==0?te:N.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,f=3,p=!1,v=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(N){for(var re=t(c);re!==null;){if(re.callback===null)i(c);else if(re.startTime<=N)i(c),re.sortIndex=re.expirationTime,e(l,re);else break;re=t(c)}}function S(N){if(x=!1,_(N),!v)if(t(l)!==null)v=!0,q(b);else{var re=t(c);re!==null&&ne(S,re.startTime-N)}}function b(N,re){v=!1,x&&(x=!1,d(P),P=-1),p=!0;var te=f;try{for(_(re),h=t(l);h!==null&&(!(h.expirationTime>re)||N&&!M());){var de=h.callback;if(typeof de=="function"){h.callback=null,f=h.priorityLevel;var Ne=de(h.expirationTime<=re);re=n.unstable_now(),typeof Ne=="function"?h.callback=Ne:h===t(l)&&i(l),_(re)}else i(l);h=t(l)}if(h!==null)var He=!0;else{var Z=t(c);Z!==null&&ne(S,Z.startTime-re),He=!1}return He}finally{h=null,f=te,p=!1}}var A=!1,T=null,P=-1,X=5,y=-1;function M(){return!(n.unstable_now()-y<X)}function G(){if(T!==null){var N=n.unstable_now();y=N;var re=!0;try{re=T(!0,N)}finally{re?V():(A=!1,T=null)}}else A=!1}var V;if(typeof g=="function")V=function(){g(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,ee=$.port2;$.port1.onmessage=G,V=function(){ee.postMessage(null)}}else V=function(){m(G,0)};function q(N){T=N,A||(A=!0,V())}function ne(N,re){P=m(function(){N(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(N){N.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,q(b))},n.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<N?Math.floor(1e3/N):5},n.unstable_getCurrentPriorityLevel=function(){return f},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(N){switch(f){case 1:case 2:case 3:var re=3;break;default:re=f}var te=f;f=re;try{return N()}finally{f=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(N,re){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var te=f;f=N;try{return re()}finally{f=te}},n.unstable_scheduleCallback=function(N,re,te){var de=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?de+te:de):te=de,N){case 1:var Ne=-1;break;case 2:Ne=250;break;case 5:Ne=1073741823;break;case 4:Ne=1e4;break;default:Ne=5e3}return Ne=te+Ne,N={id:u++,callback:re,priorityLevel:N,startTime:te,expirationTime:Ne,sortIndex:-1},te>de?(N.sortIndex=te,e(c,N),t(l)===null&&N===t(c)&&(x?(d(P),P=-1):x=!0,ne(S,te-de))):(N.sortIndex=Ne,e(l,N),v||p||(v=!0,q(b))),N},n.unstable_shouldYield=M,n.unstable_wrapCallback=function(N){var re=f;return function(){var te=f;f=re;try{return N.apply(this,arguments)}finally{f=te}}}})(C0);R0.exports=C0;var J_=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q_=nt,Ln=J_;function ce(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b0=new Set,$o={};function Jr(n,e){Ws(n,e),Ws(n+"Capture",e)}function Ws(n,e){for($o[n]=e,n=0;n<e.length;n++)b0.add(e[n])}var zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=Object.prototype.hasOwnProperty,ey=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qd={},ep={};function ty(n){return $u.call(ep,n)?!0:$u.call(Qd,n)?!1:ey.test(n)?ep[n]=!0:(Qd[n]=!0,!1)}function ny(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function iy(n,e,t,i){if(e===null||typeof e>"u"||ny(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){qt[n]=new dn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];qt[e]=new dn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){qt[n]=new dn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){qt[n]=new dn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){qt[n]=new dn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){qt[n]=new dn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){qt[n]=new dn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){qt[n]=new dn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){qt[n]=new dn(n,5,!1,n.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Nf(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(If,Nf);qt[e]=new dn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(If,Nf);qt[e]=new dn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(If,Nf);qt[e]=new dn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){qt[n]=new dn(n,1,!1,n.toLowerCase(),null,!1,!1)});qt.xlinkHref=new dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){qt[n]=new dn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Uf(n,e,t,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iy(e,t,r,i)&&(t=null),i||r===null?ty(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Wi=Q_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ea=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),Ms=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),Ku=Symbol.for("react.suspense"),Zu=Symbol.for("react.suspense_list"),zf=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),D0=Symbol.for("react.offscreen"),tp=Symbol.iterator;function uo(n){return n===null||typeof n!="object"?null:(n=tp&&n[tp]||n["@@iterator"],typeof n=="function"?n:null)}var Tt=Object.assign,zc;function Po(n){if(zc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);zc=e&&e[1]||""}return`
`+zc+n}var kc=!1;function Bc(n,e){if(!n||kc)return"";kc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{kc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Po(n):""}function ry(n){switch(n.tag){case 5:return Po(n.type);case 16:return Po("Lazy");case 13:return Po("Suspense");case 19:return Po("SuspenseList");case 0:case 2:case 15:return n=Bc(n.type,!1),n;case 11:return n=Bc(n.type.render,!1),n;case 1:return n=Bc(n.type,!0),n;default:return""}}function Ju(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ms:return"Fragment";case Ss:return"Portal";case qu:return"Profiler";case Ff:return"StrictMode";case Ku:return"Suspense";case Zu:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case L0:return(n.displayName||"Context")+".Consumer";case P0:return(n._context.displayName||"Context")+".Provider";case Of:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case zf:return e=n.displayName||null,e!==null?e:Ju(n.type)||"Memo";case er:e=n._payload,n=n._init;try{return Ju(n(e))}catch{}}return null}function sy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ju(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function _r(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function I0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oy(n){var e=I0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function wa(n){n._valueTracker||(n._valueTracker=oy(n))}function N0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=I0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Il(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Qu(n,e){var t=e.checked;return Tt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function np(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=_r(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function U0(n,e){e=e.checked,e!=null&&Uf(n,"checked",e,!1)}function eh(n,e){U0(n,e);var t=_r(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?th(n,e.type,t):e.hasOwnProperty("defaultValue")&&th(n,e.type,_r(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function ip(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function th(n,e,t){(e!=="number"||Il(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Lo=Array.isArray;function Ns(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+_r(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function nh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return Tt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function rp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ce(92));if(Lo(t)){if(1<t.length)throw Error(ce(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:_r(t)}}function F0(n,e){var t=_r(e.value),i=_r(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function sp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function O0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ih(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?O0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ta,z0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ta=Ta||document.createElement("div"),Ta.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ta.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function qo(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ay=["Webkit","ms","Moz","O"];Object.keys(Uo).forEach(function(n){ay.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Uo[e]=Uo[n]})});function k0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Uo.hasOwnProperty(n)&&Uo[n]?(""+e).trim():e+"px"}function B0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=k0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var ly=Tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rh(n,e){if(e){if(ly[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function sh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var oh=null;function kf(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ah=null,Us=null,Fs=null;function op(n){if(n=ga(n)){if(typeof ah!="function")throw Error(ce(280));var e=n.stateNode;e&&(e=vc(e),ah(n.stateNode,n.type,e))}}function H0(n){Us?Fs?Fs.push(n):Fs=[n]:Us=n}function V0(){if(Us){var n=Us,e=Fs;if(Fs=Us=null,op(n),e)for(n=0;n<e.length;n++)op(e[n])}}function G0(n,e){return n(e)}function W0(){}var Hc=!1;function X0(n,e,t){if(Hc)return n(e,t);Hc=!0;try{return G0(n,e,t)}finally{Hc=!1,(Us!==null||Fs!==null)&&(W0(),V0())}}function Ko(n,e){var t=n.stateNode;if(t===null)return null;var i=vc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ce(231,e,typeof t));return t}var lh=!1;if(zi)try{var ho={};Object.defineProperty(ho,"passive",{get:function(){lh=!0}}),window.addEventListener("test",ho,ho),window.removeEventListener("test",ho,ho)}catch{lh=!1}function cy(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var Fo=!1,Nl=null,Ul=!1,ch=null,uy={onError:function(n){Fo=!0,Nl=n}};function hy(n,e,t,i,r,s,o,a,l){Fo=!1,Nl=null,cy.apply(uy,arguments)}function fy(n,e,t,i,r,s,o,a,l){if(hy.apply(this,arguments),Fo){if(Fo){var c=Nl;Fo=!1,Nl=null}else throw Error(ce(198));Ul||(Ul=!0,ch=c)}}function Qr(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function j0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function ap(n){if(Qr(n)!==n)throw Error(ce(188))}function dy(n){var e=n.alternate;if(!e){if(e=Qr(n),e===null)throw Error(ce(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return ap(r),n;if(s===i)return ap(r),e;s=s.sibling}throw Error(ce(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ce(189))}}if(t.alternate!==i)throw Error(ce(190))}if(t.tag!==3)throw Error(ce(188));return t.stateNode.current===t?n:e}function Y0(n){return n=dy(n),n!==null?$0(n):null}function $0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=$0(n);if(e!==null)return e;n=n.sibling}return null}var q0=Ln.unstable_scheduleCallback,lp=Ln.unstable_cancelCallback,py=Ln.unstable_shouldYield,my=Ln.unstable_requestPaint,Pt=Ln.unstable_now,gy=Ln.unstable_getCurrentPriorityLevel,Bf=Ln.unstable_ImmediatePriority,K0=Ln.unstable_UserBlockingPriority,Fl=Ln.unstable_NormalPriority,vy=Ln.unstable_LowPriority,Z0=Ln.unstable_IdlePriority,dc=null,_i=null;function _y(n){if(_i&&typeof _i.onCommitFiberRoot=="function")try{_i.onCommitFiberRoot(dc,n,void 0,(n.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:Sy,yy=Math.log,xy=Math.LN2;function Sy(n){return n>>>=0,n===0?32:31-(yy(n)/xy|0)|0}var Aa=64,Ra=4194304;function Do(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ol(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Do(a):(s&=o,s!==0&&(i=Do(s)))}else o=t&~r,o!==0?i=Do(o):s!==0&&(i=Do(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-oi(e),r=1<<t,i|=n[t],e&=~r;return i}function My(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ey(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=My(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function uh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function J0(){var n=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),n}function Vc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function pa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-oi(e),n[e]=t}function wy(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-oi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Hf(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-oi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ct=0;function Q0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var eg,Vf,tg,ng,ig,hh=!1,Ca=[],ar=null,lr=null,cr=null,Zo=new Map,Jo=new Map,nr=[],Ty="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cp(n,e){switch(n){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Zo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jo.delete(e.pointerId)}}function fo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ga(e),e!==null&&Vf(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Ay(n,e,t,i,r){switch(e){case"focusin":return ar=fo(ar,n,e,t,i,r),!0;case"dragenter":return lr=fo(lr,n,e,t,i,r),!0;case"mouseover":return cr=fo(cr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Zo.set(s,fo(Zo.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Jo.set(s,fo(Jo.get(s)||null,n,e,t,i,r)),!0}return!1}function rg(n){var e=zr(n.target);if(e!==null){var t=Qr(e);if(t!==null){if(e=t.tag,e===13){if(e=j0(t),e!==null){n.blockedOn=e,ig(n.priority,function(){tg(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ml(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=fh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);oh=i,t.target.dispatchEvent(i),oh=null}else return e=ga(t),e!==null&&Vf(e),n.blockedOn=t,!1;e.shift()}return!0}function up(n,e,t){ml(n)&&t.delete(e)}function Ry(){hh=!1,ar!==null&&ml(ar)&&(ar=null),lr!==null&&ml(lr)&&(lr=null),cr!==null&&ml(cr)&&(cr=null),Zo.forEach(up),Jo.forEach(up)}function po(n,e){n.blockedOn===e&&(n.blockedOn=null,hh||(hh=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,Ry)))}function Qo(n){function e(r){return po(r,n)}if(0<Ca.length){po(Ca[0],n);for(var t=1;t<Ca.length;t++){var i=Ca[t];i.blockedOn===n&&(i.blockedOn=null)}}for(ar!==null&&po(ar,n),lr!==null&&po(lr,n),cr!==null&&po(cr,n),Zo.forEach(e),Jo.forEach(e),t=0;t<nr.length;t++)i=nr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<nr.length&&(t=nr[0],t.blockedOn===null);)rg(t),t.blockedOn===null&&nr.shift()}var Os=Wi.ReactCurrentBatchConfig,zl=!0;function Cy(n,e,t,i){var r=ct,s=Os.transition;Os.transition=null;try{ct=1,Gf(n,e,t,i)}finally{ct=r,Os.transition=s}}function by(n,e,t,i){var r=ct,s=Os.transition;Os.transition=null;try{ct=4,Gf(n,e,t,i)}finally{ct=r,Os.transition=s}}function Gf(n,e,t,i){if(zl){var r=fh(n,e,t,i);if(r===null)Jc(n,e,i,kl,t),cp(n,i);else if(Ay(r,n,e,t,i))i.stopPropagation();else if(cp(n,i),e&4&&-1<Ty.indexOf(n)){for(;r!==null;){var s=ga(r);if(s!==null&&eg(s),s=fh(n,e,t,i),s===null&&Jc(n,e,i,kl,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Jc(n,e,i,null,t)}}var kl=null;function fh(n,e,t,i){if(kl=null,n=kf(i),n=zr(n),n!==null)if(e=Qr(n),e===null)n=null;else if(t=e.tag,t===13){if(n=j0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return kl=n,null}function sg(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gy()){case Bf:return 1;case K0:return 4;case Fl:case vy:return 16;case Z0:return 536870912;default:return 16}default:return 16}}var sr=null,Wf=null,gl=null;function og(){if(gl)return gl;var n,e=Wf,t=e.length,i,r="value"in sr?sr.value:sr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return gl=r.slice(n,1<i?1-i:void 0)}function vl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function ba(){return!0}function hp(){return!1}function In(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ba:hp,this.isPropagationStopped=hp,this}return Tt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xf=In(so),ma=Tt({},so,{view:0,detail:0}),Py=In(ma),Gc,Wc,mo,pc=Tt({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==mo&&(mo&&n.type==="mousemove"?(Gc=n.screenX-mo.screenX,Wc=n.screenY-mo.screenY):Wc=Gc=0,mo=n),Gc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),fp=In(pc),Ly=Tt({},pc,{dataTransfer:0}),Dy=In(Ly),Iy=Tt({},ma,{relatedTarget:0}),Xc=In(Iy),Ny=Tt({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),Uy=In(Ny),Fy=Tt({},so,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Oy=In(Fy),zy=Tt({},so,{data:0}),dp=In(zy),ky={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},By={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vy(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=Hy[n])?!!e[n]:!1}function jf(){return Vy}var Gy=Tt({},ma,{key:function(n){if(n.key){var e=ky[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=vl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?By[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(n){return n.type==="keypress"?vl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wy=In(Gy),Xy=Tt({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=In(Xy),jy=Tt({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),Yy=In(jy),$y=Tt({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),qy=In($y),Ky=Tt({},pc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zy=In(Ky),Jy=[9,13,27,32],Yf=zi&&"CompositionEvent"in window,Oo=null;zi&&"documentMode"in document&&(Oo=document.documentMode);var Qy=zi&&"TextEvent"in window&&!Oo,ag=zi&&(!Yf||Oo&&8<Oo&&11>=Oo),mp=" ",gp=!1;function lg(n,e){switch(n){case"keyup":return Jy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function cg(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Es=!1;function ex(n,e){switch(n){case"compositionend":return cg(e);case"keypress":return e.which!==32?null:(gp=!0,mp);case"textInput":return n=e.data,n===mp&&gp?null:n;default:return null}}function tx(n,e){if(Es)return n==="compositionend"||!Yf&&lg(n,e)?(n=og(),gl=Wf=sr=null,Es=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ag&&e.locale!=="ko"?null:e.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!nx[n.type]:e==="textarea"}function ug(n,e,t,i){H0(i),e=Bl(e,"onChange"),0<e.length&&(t=new Xf("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var zo=null,ea=null;function ix(n){Sg(n,0)}function mc(n){var e=As(n);if(N0(e))return n}function rx(n,e){if(n==="change")return e}var hg=!1;if(zi){var jc;if(zi){var Yc="oninput"in document;if(!Yc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Yc=typeof _p.oninput=="function"}jc=Yc}else jc=!1;hg=jc&&(!document.documentMode||9<document.documentMode)}function yp(){zo&&(zo.detachEvent("onpropertychange",fg),ea=zo=null)}function fg(n){if(n.propertyName==="value"&&mc(ea)){var e=[];ug(e,ea,n,kf(n)),X0(ix,e)}}function sx(n,e,t){n==="focusin"?(yp(),zo=e,ea=t,zo.attachEvent("onpropertychange",fg)):n==="focusout"&&yp()}function ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mc(ea)}function ax(n,e){if(n==="click")return mc(e)}function lx(n,e){if(n==="input"||n==="change")return mc(e)}function cx(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var li=typeof Object.is=="function"?Object.is:cx;function ta(n,e){if(li(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!$u.call(e,r)||!li(n[r],e[r]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sp(n,e){var t=xp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=xp(t)}}function dg(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?dg(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function pg(){for(var n=window,e=Il();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Il(n.document)}return e}function $f(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ux(n){var e=pg(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&dg(t.ownerDocument.documentElement,t)){if(i!==null&&$f(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Sp(t,s);var o=Sp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var hx=zi&&"documentMode"in document&&11>=document.documentMode,ws=null,dh=null,ko=null,ph=!1;function Mp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ph||ws==null||ws!==Il(i)||(i=ws,"selectionStart"in i&&$f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ko&&ta(ko,i)||(ko=i,i=Bl(dh,"onSelect"),0<i.length&&(e=new Xf("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ws)))}function Pa(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ts={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},$c={},mg={};zi&&(mg=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function gc(n){if($c[n])return $c[n];if(!Ts[n])return n;var e=Ts[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in mg)return $c[n]=e[t];return n}var gg=gc("animationend"),vg=gc("animationiteration"),_g=gc("animationstart"),yg=gc("transitionend"),xg=new Map,Ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,e){xg.set(n,e),Jr(e,[n])}for(var qc=0;qc<Ep.length;qc++){var Kc=Ep[qc],fx=Kc.toLowerCase(),dx=Kc[0].toUpperCase()+Kc.slice(1);Sr(fx,"on"+dx)}Sr(gg,"onAnimationEnd");Sr(vg,"onAnimationIteration");Sr(_g,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(yg,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);Jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(Io));function wp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,fy(i,e,void 0,n),n.currentTarget=null}function Sg(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wp(r,a,c),s=l}}}if(Ul)throw n=ch,Ul=!1,ch=null,n}function vt(n,e){var t=e[yh];t===void 0&&(t=e[yh]=new Set);var i=n+"__bubble";t.has(i)||(Mg(e,n,2,!1),t.add(i))}function Zc(n,e,t){var i=0;e&&(i|=4),Mg(t,n,i,e)}var La="_reactListening"+Math.random().toString(36).slice(2);function na(n){if(!n[La]){n[La]=!0,b0.forEach(function(t){t!=="selectionchange"&&(px.has(t)||Zc(t,!1,n),Zc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[La]||(e[La]=!0,Zc("selectionchange",!1,e))}}function Mg(n,e,t,i){switch(sg(e)){case 1:var r=Cy;break;case 4:r=by;break;default:r=Gf}t=r.bind(null,e,t,n),r=void 0,!lh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Jc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}X0(function(){var c=s,u=kf(t),h=[];e:{var f=xg.get(n);if(f!==void 0){var p=Xf,v=n;switch(n){case"keypress":if(vl(t)===0)break e;case"keydown":case"keyup":p=Wy;break;case"focusin":v="focus",p=Xc;break;case"focusout":v="blur",p=Xc;break;case"beforeblur":case"afterblur":p=Xc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Dy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Yy;break;case gg:case vg:case _g:p=Uy;break;case yg:p=qy;break;case"scroll":p=Py;break;case"wheel":p=Zy;break;case"copy":case"cut":case"paste":p=Oy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=pp}var x=(e&4)!==0,m=!x&&n==="scroll",d=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=Ko(g,d),S!=null&&x.push(ia(g,S,_)))),m)break;g=g.return}0<x.length&&(f=new p(f,v,null,t,u),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",f&&t!==oh&&(v=t.relatedTarget||t.fromElement)&&(zr(v)||v[ki]))break e;if((p||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=c,v=v?zr(v):null,v!==null&&(m=Qr(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=c),p!==v)){if(x=fp,S="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(x=pp,S="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?f:As(p),_=v==null?f:As(v),f=new x(S,g+"leave",p,t,u),f.target=m,f.relatedTarget=_,S=null,zr(u)===c&&(x=new x(d,g+"enter",v,t,u),x.target=_,x.relatedTarget=m,S=x),m=S,p&&v)t:{for(x=p,d=v,g=0,_=x;_;_=ns(_))g++;for(_=0,S=d;S;S=ns(S))_++;for(;0<g-_;)x=ns(x),g--;for(;0<_-g;)d=ns(d),_--;for(;g--;){if(x===d||d!==null&&x===d.alternate)break t;x=ns(x),d=ns(d)}x=null}else x=null;p!==null&&Tp(h,f,p,x,!1),v!==null&&m!==null&&Tp(h,m,v,x,!0)}}e:{if(f=c?As(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var b=rx;else if(vp(f))if(hg)b=lx;else{b=ox;var A=sx}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(b=ax);if(b&&(b=b(n,c))){ug(h,b,t,u);break e}A&&A(n,f,c),n==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&th(f,"number",f.value)}switch(A=c?As(c):window,n){case"focusin":(vp(A)||A.contentEditable==="true")&&(ws=A,dh=c,ko=null);break;case"focusout":ko=dh=ws=null;break;case"mousedown":ph=!0;break;case"contextmenu":case"mouseup":case"dragend":ph=!1,Mp(h,t,u);break;case"selectionchange":if(hx)break;case"keydown":case"keyup":Mp(h,t,u)}var T;if(Yf)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Es?lg(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(ag&&t.locale!=="ko"&&(Es||P!=="onCompositionStart"?P==="onCompositionEnd"&&Es&&(T=og()):(sr=u,Wf="value"in sr?sr.value:sr.textContent,Es=!0)),A=Bl(c,P),0<A.length&&(P=new dp(P,n,null,t,u),h.push({event:P,listeners:A}),T?P.data=T:(T=cg(t),T!==null&&(P.data=T)))),(T=Qy?ex(n,t):tx(n,t))&&(c=Bl(c,"onBeforeInput"),0<c.length&&(u=new dp("onBeforeInput","beforeinput",null,t,u),h.push({event:u,listeners:c}),u.data=T))}Sg(h,e)})}function ia(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Bl(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ko(n,t),s!=null&&i.unshift(ia(n,s,r)),s=Ko(n,e),s!=null&&i.push(ia(n,s,r))),n=n.return}return i}function ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Tp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ko(t,s),l!=null&&o.unshift(ia(t,l,a))):r||(l=Ko(t,s),l!=null&&o.push(ia(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(mx,`
`).replace(gx,"")}function Da(n,e,t){if(e=Ap(e),Ap(n)!==e&&t)throw Error(ce(425))}function Hl(){}var mh=null,gh=null;function vh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _h=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(yx)}:_h;function yx(n){setTimeout(function(){throw n})}function Qc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Qo(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Qo(e)}function ur(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Cp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var oo=Math.random().toString(36).slice(2),mi="__reactFiber$"+oo,ra="__reactProps$"+oo,ki="__reactContainer$"+oo,yh="__reactEvents$"+oo,xx="__reactListeners$"+oo,Sx="__reactHandles$"+oo;function zr(n){var e=n[mi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ki]||t[mi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Cp(n);n!==null;){if(t=n[mi])return t;n=Cp(n)}return e}n=t,t=n.parentNode}return null}function ga(n){return n=n[mi]||n[ki],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function As(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ce(33))}function vc(n){return n[ra]||null}var xh=[],Rs=-1;function Mr(n){return{current:n}}function xt(n){0>Rs||(n.current=xh[Rs],xh[Rs]=null,Rs--)}function pt(n,e){Rs++,xh[Rs]=n.current,n.current=e}var yr={},rn=Mr(yr),_n=Mr(!1),Xr=yr;function Xs(n,e){var t=n.type.contextTypes;if(!t)return yr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function yn(n){return n=n.childContextTypes,n!=null}function Vl(){xt(_n),xt(rn)}function bp(n,e,t){if(rn.current!==yr)throw Error(ce(168));pt(rn,e),pt(_n,t)}function Eg(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,sy(n)||"Unknown",r));return Tt({},t,i)}function Gl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Xr=rn.current,pt(rn,n),pt(_n,_n.current),!0}function Pp(n,e,t){var i=n.stateNode;if(!i)throw Error(ce(169));t?(n=Eg(n,e,Xr),i.__reactInternalMemoizedMergedChildContext=n,xt(_n),xt(rn),pt(rn,n)):xt(_n),pt(_n,t)}var Li=null,_c=!1,eu=!1;function wg(n){Li===null?Li=[n]:Li.push(n)}function Mx(n){_c=!0,wg(n)}function Er(){if(!eu&&Li!==null){eu=!0;var n=0,e=ct;try{var t=Li;for(ct=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Li=null,_c=!1}catch(r){throw Li!==null&&(Li=Li.slice(n+1)),q0(Bf,Er),r}finally{ct=e,eu=!1}}return null}var Cs=[],bs=0,Wl=null,Xl=0,On=[],zn=0,jr=null,Di=1,Ii="";function Dr(n,e){Cs[bs++]=Xl,Cs[bs++]=Wl,Wl=n,Xl=e}function Tg(n,e,t){On[zn++]=Di,On[zn++]=Ii,On[zn++]=jr,jr=n;var i=Di;n=Ii;var r=32-oi(i)-1;i&=~(1<<r),t+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Di=1<<32-oi(e)+r|t<<r|i,Ii=s+n}else Di=1<<s|t<<r|i,Ii=n}function qf(n){n.return!==null&&(Dr(n,1),Tg(n,1,0))}function Kf(n){for(;n===Wl;)Wl=Cs[--bs],Cs[bs]=null,Xl=Cs[--bs],Cs[bs]=null;for(;n===jr;)jr=On[--zn],On[zn]=null,Ii=On[--zn],On[zn]=null,Di=On[--zn],On[zn]=null}var bn=null,Cn=null,Mt=!1,ei=null;function Ag(n,e){var t=Hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Lp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,bn=n,Cn=ur(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,bn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=jr!==null?{id:Di,overflow:Ii}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,bn=n,Cn=null,!0):!1;default:return!1}}function Sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Mh(n){if(Mt){var e=Cn;if(e){var t=e;if(!Lp(n,e)){if(Sh(n))throw Error(ce(418));e=ur(t.nextSibling);var i=bn;e&&Lp(n,e)?Ag(i,t):(n.flags=n.flags&-4097|2,Mt=!1,bn=n)}}else{if(Sh(n))throw Error(ce(418));n.flags=n.flags&-4097|2,Mt=!1,bn=n}}}function Dp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;bn=n}function Ia(n){if(n!==bn)return!1;if(!Mt)return Dp(n),Mt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!vh(n.type,n.memoizedProps)),e&&(e=Cn)){if(Sh(n))throw Rg(),Error(ce(418));for(;e;)Ag(n,e),e=ur(e.nextSibling)}if(Dp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ce(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Cn=ur(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=bn?ur(n.stateNode.nextSibling):null;return!0}function Rg(){for(var n=Cn;n;)n=ur(n.nextSibling)}function js(){Cn=bn=null,Mt=!1}function Zf(n){ei===null?ei=[n]:ei.push(n)}var Ex=Wi.ReactCurrentBatchConfig;function go(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ce(309));var i=t.stateNode}if(!i)throw Error(ce(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ce(284));if(!t._owner)throw Error(ce(290,n))}return n}function Na(n,e){throw n=Object.prototype.toString.call(e),Error(ce(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Ip(n){var e=n._init;return e(n._payload)}function Cg(n){function e(d,g){if(n){var _=d.deletions;_===null?(d.deletions=[g],d.flags|=16):_.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=pr(d,g),d.index=0,d.sibling=null,d}function s(d,g,_){return d.index=_,n?(_=d.alternate,_!==null?(_=_.index,_<g?(d.flags|=2,g):_):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,_,S){return g===null||g.tag!==6?(g=au(_,d.mode,S),g.return=d,g):(g=r(g,_),g.return=d,g)}function l(d,g,_,S){var b=_.type;return b===Ms?u(d,g,_.props.children,S,_.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&Ip(b)===g.type)?(S=r(g,_.props),S.ref=go(d,g,_),S.return=d,S):(S=wl(_.type,_.key,_.props,null,d.mode,S),S.ref=go(d,g,_),S.return=d,S)}function c(d,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=lu(_,d.mode,S),g.return=d,g):(g=r(g,_.children||[]),g.return=d,g)}function u(d,g,_,S,b){return g===null||g.tag!==7?(g=Wr(_,d.mode,S,b),g.return=d,g):(g=r(g,_),g.return=d,g)}function h(d,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=au(""+g,d.mode,_),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ea:return _=wl(g.type,g.key,g.props,null,d.mode,_),_.ref=go(d,null,g),_.return=d,_;case Ss:return g=lu(g,d.mode,_),g.return=d,g;case er:var S=g._init;return h(d,S(g._payload),_)}if(Lo(g)||uo(g))return g=Wr(g,d.mode,_,null),g.return=d,g;Na(d,g)}return null}function f(d,g,_,S){var b=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(d,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:return _.key===b?l(d,g,_,S):null;case Ss:return _.key===b?c(d,g,_,S):null;case er:return b=_._init,f(d,g,b(_._payload),S)}if(Lo(_)||uo(_))return b!==null?null:u(d,g,_,S,null);Na(d,_)}return null}function p(d,g,_,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,a(g,d,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ea:return d=d.get(S.key===null?_:S.key)||null,l(g,d,S,b);case Ss:return d=d.get(S.key===null?_:S.key)||null,c(g,d,S,b);case er:var A=S._init;return p(d,g,_,A(S._payload),b)}if(Lo(S)||uo(S))return d=d.get(_)||null,u(g,d,S,b,null);Na(g,S)}return null}function v(d,g,_,S){for(var b=null,A=null,T=g,P=g=0,X=null;T!==null&&P<_.length;P++){T.index>P?(X=T,T=null):X=T.sibling;var y=f(d,T,_[P],S);if(y===null){T===null&&(T=X);break}n&&T&&y.alternate===null&&e(d,T),g=s(y,g,P),A===null?b=y:A.sibling=y,A=y,T=X}if(P===_.length)return t(d,T),Mt&&Dr(d,P),b;if(T===null){for(;P<_.length;P++)T=h(d,_[P],S),T!==null&&(g=s(T,g,P),A===null?b=T:A.sibling=T,A=T);return Mt&&Dr(d,P),b}for(T=i(d,T);P<_.length;P++)X=p(T,d,P,_[P],S),X!==null&&(n&&X.alternate!==null&&T.delete(X.key===null?P:X.key),g=s(X,g,P),A===null?b=X:A.sibling=X,A=X);return n&&T.forEach(function(M){return e(d,M)}),Mt&&Dr(d,P),b}function x(d,g,_,S){var b=uo(_);if(typeof b!="function")throw Error(ce(150));if(_=b.call(_),_==null)throw Error(ce(151));for(var A=b=null,T=g,P=g=0,X=null,y=_.next();T!==null&&!y.done;P++,y=_.next()){T.index>P?(X=T,T=null):X=T.sibling;var M=f(d,T,y.value,S);if(M===null){T===null&&(T=X);break}n&&T&&M.alternate===null&&e(d,T),g=s(M,g,P),A===null?b=M:A.sibling=M,A=M,T=X}if(y.done)return t(d,T),Mt&&Dr(d,P),b;if(T===null){for(;!y.done;P++,y=_.next())y=h(d,y.value,S),y!==null&&(g=s(y,g,P),A===null?b=y:A.sibling=y,A=y);return Mt&&Dr(d,P),b}for(T=i(d,T);!y.done;P++,y=_.next())y=p(T,d,P,y.value,S),y!==null&&(n&&y.alternate!==null&&T.delete(y.key===null?P:y.key),g=s(y,g,P),A===null?b=y:A.sibling=y,A=y);return n&&T.forEach(function(G){return e(d,G)}),Mt&&Dr(d,P),b}function m(d,g,_,S){if(typeof _=="object"&&_!==null&&_.type===Ms&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ea:e:{for(var b=_.key,A=g;A!==null;){if(A.key===b){if(b=_.type,b===Ms){if(A.tag===7){t(d,A.sibling),g=r(A,_.props.children),g.return=d,d=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===er&&Ip(b)===A.type){t(d,A.sibling),g=r(A,_.props),g.ref=go(d,A,_),g.return=d,d=g;break e}t(d,A);break}else e(d,A);A=A.sibling}_.type===Ms?(g=Wr(_.props.children,d.mode,S,_.key),g.return=d,d=g):(S=wl(_.type,_.key,_.props,null,d.mode,S),S.ref=go(d,g,_),S.return=d,d=S)}return o(d);case Ss:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){t(d,g.sibling),g=r(g,_.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=lu(_,d.mode,S),g.return=d,d=g}return o(d);case er:return A=_._init,m(d,g,A(_._payload),S)}if(Lo(_))return v(d,g,_,S);if(uo(_))return x(d,g,_,S);Na(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,_),g.return=d,d=g):(t(d,g),g=au(_,d.mode,S),g.return=d,d=g),o(d)):t(d,g)}return m}var Ys=Cg(!0),bg=Cg(!1),jl=Mr(null),Yl=null,Ps=null,Jf=null;function Qf(){Jf=Ps=Yl=null}function ed(n){var e=jl.current;xt(jl),n._currentValue=e}function Eh(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function zs(n,e){Yl=n,Jf=Ps=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(vn=!0),n.firstContext=null)}function Xn(n){var e=n._currentValue;if(Jf!==n)if(n={context:n,memoizedValue:e,next:null},Ps===null){if(Yl===null)throw Error(ce(308));Ps=n,Yl.dependencies={lanes:0,firstContext:n}}else Ps=Ps.next=n;return e}var kr=null;function td(n){kr===null?kr=[n]:kr.push(n)}function Pg(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,td(e)):(t.next=r.next,r.next=t),e.interleaved=t,Bi(n,i)}function Bi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var tr=!1;function nd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Bi(n,t)}return r=i.interleaved,r===null?(e.next=e,td(i)):(e.next=r.next,r.next=e),i.interleaved=e,Bi(n,t)}function _l(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Hf(n,t)}}function Np(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function $l(n,e,t,i){var r=n.updateQueue;tr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,x=a;switch(f=e,p=t,x.tag){case 1:if(v=x.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=x.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=Tt({},h,f);break e;case 2:tr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,n.lanes=o,n.memoizedState=h}}function Up(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var va={},yi=Mr(va),sa=Mr(va),oa=Mr(va);function Br(n){if(n===va)throw Error(ce(174));return n}function id(n,e){switch(pt(oa,e),pt(sa,n),pt(yi,va),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ih(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ih(e,n)}xt(yi),pt(yi,e)}function $s(){xt(yi),xt(sa),xt(oa)}function Dg(n){Br(oa.current);var e=Br(yi.current),t=ih(e,n.type);e!==t&&(pt(sa,n),pt(yi,t))}function rd(n){sa.current===n&&(xt(yi),xt(sa))}var Et=Mr(0);function ql(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tu=[];function sd(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var yl=Wi.ReactCurrentDispatcher,nu=Wi.ReactCurrentBatchConfig,Yr=0,wt=null,Ft=null,Vt=null,Kl=!1,Bo=!1,aa=0,wx=0;function Zt(){throw Error(ce(321))}function od(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!li(n[t],e[t]))return!1;return!0}function ad(n,e,t,i,r,s){if(Yr=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=n===null||n.memoizedState===null?Cx:bx,n=t(i,r),Bo){s=0;do{if(Bo=!1,aa=0,25<=s)throw Error(ce(301));s+=1,Vt=Ft=null,e.updateQueue=null,yl.current=Px,n=t(i,r)}while(Bo)}if(yl.current=Zl,e=Ft!==null&&Ft.next!==null,Yr=0,Vt=Ft=wt=null,Kl=!1,e)throw Error(ce(300));return n}function ld(){var n=aa!==0;return aa=0,n}function di(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?wt.memoizedState=Vt=n:Vt=Vt.next=n,Vt}function jn(){if(Ft===null){var n=wt.alternate;n=n!==null?n.memoizedState:null}else n=Ft.next;var e=Vt===null?wt.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=n;else{if(n===null)throw Error(ce(310));Ft=n,n={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?wt.memoizedState=Vt=n:Vt=Vt.next=n}return Vt}function la(n,e){return typeof e=="function"?e(n):e}function iu(n){var e=jn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=Ft,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,wt.lanes|=u,$r|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(vn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,wt.lanes|=s,$r|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function ru(n){var e=jn(),t=e.queue;if(t===null)throw Error(ce(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(vn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function Ig(){}function Ng(n,e){var t=wt,i=jn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,vn=!0),i=i.queue,cd(Og.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(t.flags|=2048,ca(9,Fg.bind(null,t,i,r,e),void 0,null),Wt===null)throw Error(ce(349));Yr&30||Ug(t,e,r)}return r}function Ug(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function Fg(n,e,t,i){e.value=t,e.getSnapshot=i,zg(e)&&kg(n)}function Og(n,e,t){return t(function(){zg(e)&&kg(n)})}function zg(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!li(n,t)}catch{return!0}}function kg(n){var e=Bi(n,1);e!==null&&ai(e,n,1,-1)}function Fp(n){var e=di();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:n},e.queue=n,n=n.dispatch=Rx.bind(null,wt,n),[e.memoizedState,n]}function ca(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Bg(){return jn().memoizedState}function xl(n,e,t,i){var r=di();wt.flags|=n,r.memoizedState=ca(1|e,t,void 0,i===void 0?null:i)}function yc(n,e,t,i){var r=jn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&od(i,o.deps)){r.memoizedState=ca(e,t,s,i);return}}wt.flags|=n,r.memoizedState=ca(1|e,t,s,i)}function Op(n,e){return xl(8390656,8,n,e)}function cd(n,e){return yc(2048,8,n,e)}function Hg(n,e){return yc(4,2,n,e)}function Vg(n,e){return yc(4,4,n,e)}function Gg(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Wg(n,e,t){return t=t!=null?t.concat([n]):null,yc(4,4,Gg.bind(null,e,n),t)}function ud(){}function Xg(n,e){var t=jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&od(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function jg(n,e){var t=jn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&od(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Yg(n,e,t){return Yr&21?(li(t,e)||(t=J0(),wt.lanes|=t,$r|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,vn=!0),n.memoizedState=t)}function Tx(n,e){var t=ct;ct=t!==0&&4>t?t:4,n(!0);var i=nu.transition;nu.transition={};try{n(!1),e()}finally{ct=t,nu.transition=i}}function $g(){return jn().memoizedState}function Ax(n,e,t){var i=dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},qg(n))Kg(e,t);else if(t=Pg(n,e,t,i),t!==null){var r=cn();ai(t,n,i,r),Zg(t,e,i)}}function Rx(n,e,t){var i=dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(qg(n))Kg(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,td(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=Pg(n,e,r,i),t!==null&&(r=cn(),ai(t,n,i,r),Zg(t,e,i))}}function qg(n){var e=n.alternate;return n===wt||e!==null&&e===wt}function Kg(n,e){Bo=Kl=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Zg(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Hf(n,t)}}var Zl={readContext:Xn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},Cx={readContext:Xn,useCallback:function(n,e){return di().memoizedState=[n,e===void 0?null:e],n},useContext:Xn,useEffect:Op,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,xl(4194308,4,Gg.bind(null,e,n),t)},useLayoutEffect:function(n,e){return xl(4194308,4,n,e)},useInsertionEffect:function(n,e){return xl(4,2,n,e)},useMemo:function(n,e){var t=di();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=di();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Ax.bind(null,wt,n),[i.memoizedState,n]},useRef:function(n){var e=di();return n={current:n},e.memoizedState=n},useState:Fp,useDebugValue:ud,useDeferredValue:function(n){return di().memoizedState=n},useTransition:function(){var n=Fp(!1),e=n[0];return n=Tx.bind(null,n[1]),di().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=wt,r=di();if(Mt){if(t===void 0)throw Error(ce(407));t=t()}else{if(t=e(),Wt===null)throw Error(ce(349));Yr&30||Ug(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Op(Og.bind(null,i,s,n),[n]),i.flags|=2048,ca(9,Fg.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=di(),e=Wt.identifierPrefix;if(Mt){var t=Ii,i=Di;t=(i&~(1<<32-oi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=aa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=wx++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},bx={readContext:Xn,useCallback:Xg,useContext:Xn,useEffect:cd,useImperativeHandle:Wg,useInsertionEffect:Hg,useLayoutEffect:Vg,useMemo:jg,useReducer:iu,useRef:Bg,useState:function(){return iu(la)},useDebugValue:ud,useDeferredValue:function(n){var e=jn();return Yg(e,Ft.memoizedState,n)},useTransition:function(){var n=iu(la)[0],e=jn().memoizedState;return[n,e]},useMutableSource:Ig,useSyncExternalStore:Ng,useId:$g,unstable_isNewReconciler:!1},Px={readContext:Xn,useCallback:Xg,useContext:Xn,useEffect:cd,useImperativeHandle:Wg,useInsertionEffect:Hg,useLayoutEffect:Vg,useMemo:jg,useReducer:ru,useRef:Bg,useState:function(){return ru(la)},useDebugValue:ud,useDeferredValue:function(n){var e=jn();return Ft===null?e.memoizedState=n:Yg(e,Ft.memoizedState,n)},useTransition:function(){var n=ru(la)[0],e=jn().memoizedState;return[n,e]},useMutableSource:Ig,useSyncExternalStore:Ng,useId:$g,unstable_isNewReconciler:!1};function Jn(n,e){if(n&&n.defaultProps){e=Tt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function wh(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Tt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var xc={isMounted:function(n){return(n=n._reactInternals)?Qr(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=cn(),r=dr(n),s=Fi(i,r);s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(ai(e,n,r,i),_l(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=cn(),r=dr(n),s=Fi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=hr(n,s,r),e!==null&&(ai(e,n,r,i),_l(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=cn(),i=dr(n),r=Fi(t,i);r.tag=2,e!=null&&(r.callback=e),e=hr(n,r,i),e!==null&&(ai(e,n,i,t),_l(e,n,i))}};function zp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ta(t,i)||!ta(r,s):!0}function Jg(n,e,t){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=yn(e)?Xr:rn.current,i=e.contextTypes,s=(i=i!=null)?Xs(n,r):yr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function kp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&xc.enqueueReplaceState(e,e.state,null)}function Th(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},nd(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=yn(e)?Xr:rn.current,r.context=Xs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wh(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&xc.enqueueReplaceState(r,r.state,null),$l(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,e){try{var t="",i=e;do t+=ry(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function su(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Ah(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function Qg(n,e,t){t=Fi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ql||(Ql=!0,Fh=i),Ah(n,e)},t}function ev(n,e,t){t=Fi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Ah(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Ah(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function Bp(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new Lx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Xx.bind(null,n,e,t),e.then(n,n))}function Hp(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Vp(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Fi(-1,1),e.tag=2,hr(t,e,1))),t.lanes|=1),n)}var Dx=Wi.ReactCurrentOwner,vn=!1;function ln(n,e,t,i){e.child=n===null?bg(e,null,t,i):Ys(e,n.child,t,i)}function Gp(n,e,t,i,r){t=t.render;var s=e.ref;return zs(e,r),i=ad(n,e,t,i,s,r),t=ld(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hi(n,e,r)):(Mt&&t&&qf(e),e.flags|=1,ln(n,e,i,r),e.child)}function Wp(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!_d(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,tv(n,e,s,i,r)):(n=wl(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:ta,t(o,i)&&n.ref===e.ref)return Hi(n,e,r)}return e.flags|=1,n=pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function tv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(ta(s,i)&&n.ref===e.ref)if(vn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(vn=!0);else return e.lanes=n.lanes,Hi(n,e,r)}return Rh(n,e,t,i,r)}function nv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},pt(Ds,An),An|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,pt(Ds,An),An|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,pt(Ds,An),An|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,pt(Ds,An),An|=i;return ln(n,e,r,t),e.child}function iv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Rh(n,e,t,i,r){var s=yn(t)?Xr:rn.current;return s=Xs(e,s),zs(e,r),t=ad(n,e,t,i,s,r),i=ld(),n!==null&&!vn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Hi(n,e,r)):(Mt&&i&&qf(e),e.flags|=1,ln(n,e,t,r),e.child)}function Xp(n,e,t,i,r){if(yn(t)){var s=!0;Gl(e)}else s=!1;if(zs(e,r),e.stateNode===null)Sl(n,e),Jg(e,t,i),Th(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Xn(c):(c=yn(t)?Xr:rn.current,c=Xs(e,c));var u=t.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&kp(e,o,i,c),tr=!1;var f=e.memoizedState;o.state=f,$l(e,i,o,r),l=e.memoizedState,a!==i||f!==l||_n.current||tr?(typeof u=="function"&&(wh(e,t,u,i),l=e.memoizedState),(a=tr||zp(e,t,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Lg(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:Jn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=yn(t)?Xr:rn.current,l=Xs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&kp(e,o,i,l),tr=!1,f=e.memoizedState,o.state=f,$l(e,i,o,r);var v=e.memoizedState;a!==h||f!==v||_n.current||tr?(typeof p=="function"&&(wh(e,t,p,i),v=e.memoizedState),(c=tr||zp(e,t,c,i,f,v,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&f===n.memoizedState||(e.flags|=1024),i=!1)}return Ch(n,e,t,i,s,r)}function Ch(n,e,t,i,r,s){iv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Pp(e,t,!1),Hi(n,e,s);i=e.stateNode,Dx.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Ys(e,n.child,null,s),e.child=Ys(e,null,a,s)):ln(n,e,a,s),e.memoizedState=i.state,r&&Pp(e,t,!0),e.child}function rv(n){var e=n.stateNode;e.pendingContext?bp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&bp(n,e.context,!1),id(n,e.containerInfo)}function jp(n,e,t,i,r){return js(),Zf(r),e.flags|=256,ln(n,e,t,i),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Ph(n){return{baseLanes:n,cachePool:null,transitions:null}}function sv(n,e,t){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),pt(Et,r&1),n===null)return Mh(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,i,0,null),n=Wr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ph(t),e.memoizedState=bh,n):hd(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ix(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=pr(a,s):(s=Wr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ph(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=bh,i}return s=n.child,n=s.sibling,i=pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function hd(n,e){return e=Ec({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ua(n,e,t,i){return i!==null&&Zf(i),Ys(e,n.child,null,t),n=hd(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Ix(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=su(Error(ce(422))),Ua(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ec({mode:"visible",children:i.children},r,0,null),s=Wr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ys(e,n.child,null,o),e.child.memoizedState=Ph(o),e.memoizedState=bh,s);if(!(e.mode&1))return Ua(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ce(419)),i=su(s,i,void 0),Ua(n,e,o,i)}if(a=(o&n.childLanes)!==0,vn||a){if(i=Wt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Bi(n,r),ai(i,n,r,-1))}return vd(),i=su(Error(ce(421))),Ua(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=jx.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Cn=ur(r.nextSibling),bn=e,Mt=!0,ei=null,n!==null&&(On[zn++]=Di,On[zn++]=Ii,On[zn++]=jr,Di=n.id,Ii=n.overflow,jr=e),e=hd(e,i.children),e.flags|=4096,e)}function Yp(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Eh(n.return,e,t)}function ou(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function ov(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(n,e,i.children,t),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,t,e);else if(n.tag===19)Yp(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(pt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&ql(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ou(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&ql(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ou(e,!0,t,null,s);break;case"together":ou(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Hi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),$r|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ce(153));if(e.child!==null){for(n=e.child,t=pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Nx(n,e,t){switch(e.tag){case 3:rv(e),js();break;case 5:Dg(e);break;case 1:yn(e.type)&&Gl(e);break;case 4:id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;pt(jl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(pt(Et,Et.current&1),e.flags|=128,null):t&e.child.childLanes?sv(n,e,t):(pt(Et,Et.current&1),n=Hi(n,e,t),n!==null?n.sibling:null);pt(Et,Et.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return ov(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,nv(n,e,t)}return Hi(n,e,t)}var av,Lh,lv,cv;av=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Lh=function(){};lv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,Br(yi.current);var s=null;switch(t){case"input":r=Qu(n,r),i=Qu(n,i),s=[];break;case"select":r=Tt({},r,{value:void 0}),i=Tt({},i,{value:void 0}),s=[];break;case"textarea":r=nh(n,r),i=nh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Hl)}rh(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&($o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&($o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&vt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};cv=function(n,e,t,i){t!==i&&(e.flags|=4)};function vo(n,e){if(!Mt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Ux(n,e,t){var i=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(e),null;case 1:return yn(e.type)&&Vl(),Jt(e),null;case 3:return i=e.stateNode,$s(),xt(_n),xt(rn),sd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Ia(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(kh(ei),ei=null))),Lh(n,e),Jt(e),null;case 5:rd(e);var r=Br(oa.current);if(t=e.type,n!==null&&e.stateNode!=null)lv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return Jt(e),null}if(n=Br(yi.current),Ia(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[ra]=s,n=(e.mode&1)!==0,t){case"dialog":vt("cancel",i),vt("close",i);break;case"iframe":case"object":case"embed":vt("load",i);break;case"video":case"audio":for(r=0;r<Io.length;r++)vt(Io[r],i);break;case"source":vt("error",i);break;case"img":case"image":case"link":vt("error",i),vt("load",i);break;case"details":vt("toggle",i);break;case"input":np(i,s),vt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},vt("invalid",i);break;case"textarea":rp(i,s),vt("invalid",i)}rh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Da(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Da(i.textContent,a,n),r=["children",""+a]):$o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&vt("scroll",i)}switch(t){case"input":wa(i),ip(i,s,!0);break;case"textarea":wa(i),sp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=O0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[mi]=e,n[ra]=i,av(n,e,!1,!1),e.stateNode=n;e:{switch(o=sh(t,i),t){case"dialog":vt("cancel",n),vt("close",n),r=i;break;case"iframe":case"object":case"embed":vt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Io.length;r++)vt(Io[r],n);r=i;break;case"source":vt("error",n),r=i;break;case"img":case"image":case"link":vt("error",n),vt("load",n),r=i;break;case"details":vt("toggle",n),r=i;break;case"input":np(n,i),r=Qu(n,i),vt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Tt({},i,{value:void 0}),vt("invalid",n);break;case"textarea":rp(n,i),r=nh(n,i),vt("invalid",n);break;default:r=i}rh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?B0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&z0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&qo(n,l):typeof l=="number"&&qo(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&vt("scroll",n):l!=null&&Uf(n,s,l,o))}switch(t){case"input":wa(n),ip(n,i,!1);break;case"textarea":wa(n),sp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+_r(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ns(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Hl)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Jt(e),null;case 6:if(n&&e.stateNode!=null)cv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(t=Br(oa.current),Br(yi.current),Ia(e)){if(i=e.stateNode,t=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==t)&&(n=bn,n!==null))switch(n.tag){case 3:Da(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Jt(e),null;case 13:if(xt(Et),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Mt&&Cn!==null&&e.mode&1&&!(e.flags&128))Rg(),js(),e.flags|=98560,s=!1;else if(s=Ia(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[mi]=e}else js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Jt(e),s=!1}else ei!==null&&(kh(ei),ei=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Et.current&1?Ot===0&&(Ot=3):vd())),e.updateQueue!==null&&(e.flags|=4),Jt(e),null);case 4:return $s(),Lh(n,e),n===null&&na(e.stateNode.containerInfo),Jt(e),null;case 10:return ed(e.type._context),Jt(e),null;case 17:return yn(e.type)&&Vl(),Jt(e),null;case 19:if(xt(Et),s=e.memoizedState,s===null)return Jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)vo(s,!1);else{if(Ot!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=ql(n),o!==null){for(e.flags|=128,vo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return pt(Et,Et.current&1|2),e.child}n=n.sibling}s.tail!==null&&Pt()>Ks&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304)}else{if(!i)if(n=ql(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),vo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Jt(e),null}else 2*Pt()-s.renderingStartTime>Ks&&t!==1073741824&&(e.flags|=128,i=!0,vo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,t=Et.current,pt(Et,i?t&1|2:t&1),e):(Jt(e),null);case 22:case 23:return gd(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Jt(e),e.subtreeFlags&6&&(e.flags|=8192)):Jt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Fx(n,e){switch(Kf(e),e.tag){case 1:return yn(e.type)&&Vl(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $s(),xt(_n),xt(rn),sd(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return rd(e),null;case 13:if(xt(Et),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));js()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return xt(Et),null;case 4:return $s(),null;case 10:return ed(e.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var Fa=!1,nn=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Ls(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Rt(n,e,i)}else t.current=null}function Dh(n,e,t){try{t()}catch(i){Rt(n,e,i)}}var $p=!1;function zx(n,e){if(mh=zl,n=pg(),$f(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=n,f=null;t:for(;;){for(var p;h!==t||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===n)break t;if(f===t&&++c===r&&(a=o),f===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(gh={focusedElem:n,selectionRange:t},zl=!1,Te=e;Te!==null;)if(e=Te,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Te=n;else for(;Te!==null;){e=Te;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var x=v.memoizedProps,m=v.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:Jn(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Rt(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}return v=$p,$p=!1,v}function Ho(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Dh(e,t,s)}r=r.next}while(r!==i)}}function Sc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ih(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function uv(n){var e=n.alternate;e!==null&&(n.alternate=null,uv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[mi],delete e[ra],delete e[yh],delete e[xx],delete e[Sx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function hv(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||hv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Nh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Hl));else if(i!==4&&(n=n.child,n!==null))for(Nh(n,e,t),n=n.sibling;n!==null;)Nh(n,e,t),n=n.sibling}function Uh(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Uh(n,e,t),n=n.sibling;n!==null;)Uh(n,e,t),n=n.sibling}var Yt=null,Qn=!1;function ji(n,e,t){for(t=t.child;t!==null;)fv(n,e,t),t=t.sibling}function fv(n,e,t){if(_i&&typeof _i.onCommitFiberUnmount=="function")try{_i.onCommitFiberUnmount(dc,t)}catch{}switch(t.tag){case 5:nn||Ls(t,e);case 6:var i=Yt,r=Qn;Yt=null,ji(n,e,t),Yt=i,Qn=r,Yt!==null&&(Qn?(n=Yt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Yt.removeChild(t.stateNode));break;case 18:Yt!==null&&(Qn?(n=Yt,t=t.stateNode,n.nodeType===8?Qc(n.parentNode,t):n.nodeType===1&&Qc(n,t),Qo(n)):Qc(Yt,t.stateNode));break;case 4:i=Yt,r=Qn,Yt=t.stateNode.containerInfo,Qn=!0,ji(n,e,t),Yt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!nn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Dh(t,e,o),r=r.next}while(r!==i)}ji(n,e,t);break;case 1:if(!nn&&(Ls(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Rt(t,e,a)}ji(n,e,t);break;case 21:ji(n,e,t);break;case 22:t.mode&1?(nn=(i=nn)||t.memoizedState!==null,ji(n,e,t),nn=i):ji(n,e,t);break;default:ji(n,e,t)}}function Kp(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Ox),e.forEach(function(i){var r=Yx.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function $n(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Yt=a.stateNode,Qn=!1;break e;case 3:Yt=a.stateNode.containerInfo,Qn=!0;break e;case 4:Yt=a.stateNode.containerInfo,Qn=!0;break e}a=a.return}if(Yt===null)throw Error(ce(160));fv(s,o,r),Yt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Rt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)dv(e,n),e=e.sibling}function dv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if($n(e,n),fi(n),i&4){try{Ho(3,n,n.return),Sc(3,n)}catch(x){Rt(n,n.return,x)}try{Ho(5,n,n.return)}catch(x){Rt(n,n.return,x)}}break;case 1:$n(e,n),fi(n),i&512&&t!==null&&Ls(t,t.return);break;case 5:if($n(e,n),fi(n),i&512&&t!==null&&Ls(t,t.return),n.flags&32){var r=n.stateNode;try{qo(r,"")}catch(x){Rt(n,n.return,x)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&U0(r,s),sh(a,o);var c=sh(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?B0(r,h):u==="dangerouslySetInnerHTML"?z0(r,h):u==="children"?qo(r,h):Uf(r,u,h,c)}switch(a){case"input":eh(r,s);break;case"textarea":F0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ns(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[ra]=s}catch(x){Rt(n,n.return,x)}}break;case 6:if($n(e,n),fi(n),i&4){if(n.stateNode===null)throw Error(ce(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(x){Rt(n,n.return,x)}}break;case 3:if($n(e,n),fi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Qo(e.containerInfo)}catch(x){Rt(n,n.return,x)}break;case 4:$n(e,n),fi(n);break;case 13:$n(e,n),fi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(pd=Pt())),i&4&&Kp(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(nn=(c=nn)||u,$n(e,n),nn=c):$n(e,n),fi(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(Te=n,u=n.child;u!==null;){for(h=Te=u;Te!==null;){switch(f=Te,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ho(4,f,f.return);break;case 1:Ls(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,t=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(x){Rt(i,t,x)}}break;case 5:Ls(f,f.return);break;case 22:if(f.memoizedState!==null){Jp(h);continue}}p!==null?(p.return=f,Te=p):Jp(h)}u=u.sibling}e:for(u=null,h=n;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=k0("display",o))}catch(x){Rt(n,n.return,x)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){Rt(n,n.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===n)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===n)break e;for(;h.sibling===null;){if(h.return===null||h.return===n)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:$n(e,n),fi(n),i&4&&Kp(n);break;case 21:break;default:$n(e,n),fi(n)}}function fi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(hv(t)){var i=t;break e}t=t.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(qo(r,""),i.flags&=-33);var s=qp(n);Uh(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=qp(n);Nh(n,a,o);break;default:throw Error(ce(161))}}catch(l){Rt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function kx(n,e,t){Te=n,pv(n)}function pv(n,e,t){for(var i=(n.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Fa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||nn;a=Fa;var c=nn;if(Fa=o,(nn=l)&&!c)for(Te=r;Te!==null;)o=Te,l=o.child,o.tag===22&&o.memoizedState!==null?Qp(r):l!==null?(l.return=o,Te=l):Qp(r);for(;s!==null;)Te=s,pv(s),s=s.sibling;Te=r,Fa=a,nn=c}Zp(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Zp(n)}}function Zp(n){for(;Te!==null;){var e=Te;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:nn||Sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!nn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:Jn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Up(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Qo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}nn||e.flags&512&&Ih(e)}catch(f){Rt(e,e.return,f)}}if(e===n){Te=null;break}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}}function Jp(n){for(;Te!==null;){var e=Te;if(e===n){Te=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Te=t;break}Te=e.return}}function Qp(n){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sc(4,e)}catch(l){Rt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Ih(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Ih(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===n){Te=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Te=a;break}Te=e.return}}var Bx=Math.ceil,Jl=Wi.ReactCurrentDispatcher,fd=Wi.ReactCurrentOwner,Gn=Wi.ReactCurrentBatchConfig,Je=0,Wt=null,Ut=null,$t=0,An=0,Ds=Mr(0),Ot=0,ua=null,$r=0,Mc=0,dd=0,Vo=null,gn=null,pd=0,Ks=1/0,Pi=null,Ql=!1,Fh=null,fr=null,Oa=!1,or=null,ec=0,Go=0,Oh=null,Ml=-1,El=0;function cn(){return Je&6?Pt():Ml!==-1?Ml:Ml=Pt()}function dr(n){return n.mode&1?Je&2&&$t!==0?$t&-$t:Ex.transition!==null?(El===0&&(El=J0()),El):(n=ct,n!==0||(n=window.event,n=n===void 0?16:sg(n.type)),n):1}function ai(n,e,t,i){if(50<Go)throw Go=0,Oh=null,Error(ce(185));pa(n,t,i),(!(Je&2)||n!==Wt)&&(n===Wt&&(!(Je&2)&&(Mc|=t),Ot===4&&ir(n,$t)),xn(n,i),t===1&&Je===0&&!(e.mode&1)&&(Ks=Pt()+500,_c&&Er()))}function xn(n,e){var t=n.callbackNode;Ey(n,e);var i=Ol(n,n===Wt?$t:0);if(i===0)t!==null&&lp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&lp(t),e===1)n.tag===0?Mx(em.bind(null,n)):wg(em.bind(null,n)),_x(function(){!(Je&6)&&Er()}),t=null;else{switch(Q0(i)){case 1:t=Bf;break;case 4:t=K0;break;case 16:t=Fl;break;case 536870912:t=Z0;break;default:t=Fl}t=Mv(t,mv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function mv(n,e){if(Ml=-1,El=0,Je&6)throw Error(ce(327));var t=n.callbackNode;if(ks()&&n.callbackNode!==t)return null;var i=Ol(n,n===Wt?$t:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=tc(n,i);else{e=i;var r=Je;Je|=2;var s=vv();(Wt!==n||$t!==e)&&(Pi=null,Ks=Pt()+500,Gr(n,e));do try{Gx();break}catch(a){gv(n,a)}while(!0);Qf(),Jl.current=s,Je=r,Ut!==null?e=0:(Wt=null,$t=0,e=Ot)}if(e!==0){if(e===2&&(r=uh(n),r!==0&&(i=r,e=zh(n,r))),e===1)throw t=ua,Gr(n,0),ir(n,i),xn(n,Pt()),t;if(e===6)ir(n,i);else{if(r=n.current.alternate,!(i&30)&&!Hx(r)&&(e=tc(n,i),e===2&&(s=uh(n),s!==0&&(i=s,e=zh(n,s))),e===1))throw t=ua,Gr(n,0),ir(n,i),xn(n,Pt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:Ir(n,gn,Pi);break;case 3:if(ir(n,i),(i&130023424)===i&&(e=pd+500-Pt(),10<e)){if(Ol(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){cn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=_h(Ir.bind(null,n,gn,Pi),e);break}Ir(n,gn,Pi);break;case 4:if(ir(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Bx(i/1960))-i,10<i){n.timeoutHandle=_h(Ir.bind(null,n,gn,Pi),i);break}Ir(n,gn,Pi);break;case 5:Ir(n,gn,Pi);break;default:throw Error(ce(329))}}}return xn(n,Pt()),n.callbackNode===t?mv.bind(null,n):null}function zh(n,e){var t=Vo;return n.current.memoizedState.isDehydrated&&(Gr(n,e).flags|=256),n=tc(n,e),n!==2&&(e=gn,gn=t,e!==null&&kh(e)),n}function kh(n){gn===null?gn=n:gn.push.apply(gn,n)}function Hx(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(n,e){for(e&=~dd,e&=~Mc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-oi(e),i=1<<t;n[t]=-1,e&=~i}}function em(n){if(Je&6)throw Error(ce(327));ks();var e=Ol(n,0);if(!(e&1))return xn(n,Pt()),null;var t=tc(n,e);if(n.tag!==0&&t===2){var i=uh(n);i!==0&&(e=i,t=zh(n,i))}if(t===1)throw t=ua,Gr(n,0),ir(n,e),xn(n,Pt()),t;if(t===6)throw Error(ce(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ir(n,gn,Pi),xn(n,Pt()),null}function md(n,e){var t=Je;Je|=1;try{return n(e)}finally{Je=t,Je===0&&(Ks=Pt()+500,_c&&Er())}}function qr(n){or!==null&&or.tag===0&&!(Je&6)&&ks();var e=Je;Je|=1;var t=Gn.transition,i=ct;try{if(Gn.transition=null,ct=1,n)return n()}finally{ct=i,Gn.transition=t,Je=e,!(Je&6)&&Er()}}function gd(){An=Ds.current,xt(Ds)}function Gr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,vx(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(Kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vl();break;case 3:$s(),xt(_n),xt(rn),sd();break;case 5:rd(i);break;case 4:$s();break;case 13:xt(Et);break;case 19:xt(Et);break;case 10:ed(i.type._context);break;case 22:case 23:gd()}t=t.return}if(Wt=n,Ut=n=pr(n.current,null),$t=An=e,Ot=0,ua=null,dd=Mc=$r=0,gn=Vo=null,kr!==null){for(e=0;e<kr.length;e++)if(t=kr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}kr=null}return n}function gv(n,e){do{var t=Ut;try{if(Qf(),yl.current=Zl,Kl){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Kl=!1}if(Yr=0,Vt=Ft=wt=null,Bo=!1,aa=0,fd.current=null,t===null||t.return===null){Ot=1,ua=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=$t,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Hp(o);if(p!==null){p.flags&=-257,Vp(p,o,a,s,e),p.mode&1&&Bp(s,c,e),e=p,l=c;var v=e.updateQueue;if(v===null){var x=new Set;x.add(l),e.updateQueue=x}else v.add(l);break e}else{if(!(e&1)){Bp(s,c,e),vd();break e}l=Error(ce(426))}}else if(Mt&&a.mode&1){var m=Hp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Vp(m,o,a,s,e),Zf(qs(l,a));break e}}s=l=qs(l,a),Ot!==4&&(Ot=2),Vo===null?Vo=[s]:Vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Qg(s,l,e);Np(s,d);break e;case 1:a=l;var g=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(fr===null||!fr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=ev(s,a,e);Np(s,S);break e}}s=s.return}while(s!==null)}yv(t)}catch(b){e=b,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function vv(){var n=Jl.current;return Jl.current=Zl,n===null?Zl:n}function vd(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Wt===null||!($r&268435455)&&!(Mc&268435455)||ir(Wt,$t)}function tc(n,e){var t=Je;Je|=2;var i=vv();(Wt!==n||$t!==e)&&(Pi=null,Gr(n,e));do try{Vx();break}catch(r){gv(n,r)}while(!0);if(Qf(),Je=t,Jl.current=i,Ut!==null)throw Error(ce(261));return Wt=null,$t=0,Ot}function Vx(){for(;Ut!==null;)_v(Ut)}function Gx(){for(;Ut!==null&&!py();)_v(Ut)}function _v(n){var e=Sv(n.alternate,n,An);n.memoizedProps=n.pendingProps,e===null?yv(n):Ut=e,fd.current=null}function yv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Fx(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ot=6,Ut=null;return}}else if(t=Ux(t,e,An),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Ot===0&&(Ot=5)}function Ir(n,e,t){var i=ct,r=Gn.transition;try{Gn.transition=null,ct=1,Wx(n,e,t,i)}finally{Gn.transition=r,ct=i}return null}function Wx(n,e,t,i){do ks();while(or!==null);if(Je&6)throw Error(ce(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ce(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(wy(n,s),n===Wt&&(Ut=Wt=null,$t=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Oa||(Oa=!0,Mv(Fl,function(){return ks(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Gn.transition,Gn.transition=null;var o=ct;ct=1;var a=Je;Je|=4,fd.current=null,zx(n,t),dv(t,n),ux(gh),zl=!!mh,gh=mh=null,n.current=t,kx(t),my(),Je=a,ct=o,Gn.transition=s}else n.current=t;if(Oa&&(Oa=!1,or=n,ec=r),s=n.pendingLanes,s===0&&(fr=null),_y(t.stateNode),xn(n,Pt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ql)throw Ql=!1,n=Fh,Fh=null,n;return ec&1&&n.tag!==0&&ks(),s=n.pendingLanes,s&1?n===Oh?Go++:(Go=0,Oh=n):Go=0,Er(),null}function ks(){if(or!==null){var n=Q0(ec),e=Gn.transition,t=ct;try{if(Gn.transition=null,ct=16>n?16:n,or===null)var i=!1;else{if(n=or,or=null,ec=0,Je&6)throw Error(ce(331));var r=Je;for(Je|=4,Te=n.current;Te!==null;){var s=Te,o=s.child;if(Te.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Te=c;Te!==null;){var u=Te;switch(u.tag){case 0:case 11:case 15:Ho(8,u,s)}var h=u.child;if(h!==null)h.return=u,Te=h;else for(;Te!==null;){u=Te;var f=u.sibling,p=u.return;if(uv(u),u===c){Te=null;break}if(f!==null){f.return=p,Te=f;break}Te=p}}}var v=s.alternate;if(v!==null){var x=v.child;if(x!==null){v.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Te=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Te=o;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ho(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Te=d;break e}Te=s.return}}var g=n.current;for(Te=g;Te!==null;){o=Te;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Te=_;else e:for(o=g;Te!==null;){if(a=Te,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(b){Rt(a,a.return,b)}if(a===o){Te=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Te=S;break e}Te=a.return}}if(Je=r,Er(),_i&&typeof _i.onPostCommitFiberRoot=="function")try{_i.onPostCommitFiberRoot(dc,n)}catch{}i=!0}return i}finally{ct=t,Gn.transition=e}}return!1}function tm(n,e,t){e=qs(t,e),e=Qg(n,e,1),n=hr(n,e,1),e=cn(),n!==null&&(pa(n,1,e),xn(n,e))}function Rt(n,e,t){if(n.tag===3)tm(n,n,t);else for(;e!==null;){if(e.tag===3){tm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=qs(t,n),n=ev(e,n,1),e=hr(e,n,1),n=cn(),e!==null&&(pa(e,1,n),xn(e,n));break}}e=e.return}}function Xx(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=cn(),n.pingedLanes|=n.suspendedLanes&t,Wt===n&&($t&t)===t&&(Ot===4||Ot===3&&($t&130023424)===$t&&500>Pt()-pd?Gr(n,0):dd|=t),xn(n,e)}function xv(n,e){e===0&&(n.mode&1?(e=Ra,Ra<<=1,!(Ra&130023424)&&(Ra=4194304)):e=1);var t=cn();n=Bi(n,e),n!==null&&(pa(n,e,t),xn(n,t))}function jx(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),xv(n,t)}function Yx(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),xv(n,t)}var Sv;Sv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||_n.current)vn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return vn=!1,Nx(n,e,t);vn=!!(n.flags&131072)}else vn=!1,Mt&&e.flags&1048576&&Tg(e,Xl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Sl(n,e),n=e.pendingProps;var r=Xs(e,rn.current);zs(e,t),r=ad(null,e,i,n,r,t);var s=ld();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Gl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nd(e),r.updater=xc,e.stateNode=r,r._reactInternals=e,Th(e,i,n,t),e=Ch(null,e,i,!0,s,t)):(e.tag=0,Mt&&s&&qf(e),ln(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Sl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qx(i),n=Jn(i,n),r){case 0:e=Rh(null,e,i,n,t);break e;case 1:e=Xp(null,e,i,n,t);break e;case 11:e=Gp(null,e,i,n,t);break e;case 14:e=Wp(null,e,i,Jn(i.type,n),t);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Rh(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Xp(n,e,i,r,t);case 3:e:{if(rv(e),n===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Lg(n,e),$l(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=qs(Error(ce(423)),e),e=jp(n,e,i,t,r);break e}else if(i!==r){r=qs(Error(ce(424)),e),e=jp(n,e,i,t,r);break e}else for(Cn=ur(e.stateNode.containerInfo.firstChild),bn=e,Mt=!0,ei=null,t=bg(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(js(),i===r){e=Hi(n,e,t);break e}ln(n,e,i,t)}e=e.child}return e;case 5:return Dg(e),n===null&&Mh(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,vh(i,r)?o=null:s!==null&&vh(i,s)&&(e.flags|=32),iv(n,e),ln(n,e,o,t),e.child;case 6:return n===null&&Mh(e),null;case 13:return sv(n,e,t);case 4:return id(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Ys(e,null,i,t):ln(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Gp(n,e,i,r,t);case 7:return ln(n,e,e.pendingProps,t),e.child;case 8:return ln(n,e,e.pendingProps.children,t),e.child;case 12:return ln(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,pt(jl,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!_n.current){e=Hi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Fi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Eh(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ce(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Eh(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,zs(e,t),r=Xn(r),i=i(r),e.flags|=1,ln(n,e,i,t),e.child;case 14:return i=e.type,r=Jn(i,e.pendingProps),r=Jn(i.type,r),Wp(n,e,i,r,t);case 15:return tv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Jn(i,r),Sl(n,e),e.tag=1,yn(i)?(n=!0,Gl(e)):n=!1,zs(e,t),Jg(e,i,r),Th(e,i,r,t),Ch(null,e,i,!0,n,t);case 19:return ov(n,e,t);case 22:return nv(n,e,t)}throw Error(ce(156,e.tag))};function Mv(n,e){return q0(n,e)}function $x(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,e,t,i){return new $x(n,e,t,i)}function _d(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qx(n){if(typeof n=="function")return _d(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Of)return 11;if(n===zf)return 14}return 2}function pr(n,e){var t=n.alternate;return t===null?(t=Hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wl(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")_d(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ms:return Wr(t.children,r,s,e);case Ff:o=8,r|=8;break;case qu:return n=Hn(12,t,e,r|2),n.elementType=qu,n.lanes=s,n;case Ku:return n=Hn(13,t,e,r),n.elementType=Ku,n.lanes=s,n;case Zu:return n=Hn(19,t,e,r),n.elementType=Zu,n.lanes=s,n;case D0:return Ec(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P0:o=10;break e;case L0:o=9;break e;case Of:o=11;break e;case zf:o=14;break e;case er:o=16,i=null;break e}throw Error(ce(130,n==null?n:typeof n,""))}return e=Hn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Wr(n,e,t,i){return n=Hn(7,n,i,e),n.lanes=t,n}function Ec(n,e,t,i){return n=Hn(22,n,i,e),n.elementType=D0,n.lanes=t,n.stateNode={isHidden:!1},n}function au(n,e,t){return n=Hn(6,n,null,e),n.lanes=t,n}function lu(n,e,t){return e=Hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function Kx(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vc(0),this.expirationTimes=Vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function yd(n,e,t,i,r,s,o,a,l){return n=new Kx(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},nd(s),n}function Zx(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Ev(n){if(!n)return yr;n=n._reactInternals;e:{if(Qr(n)!==n||n.tag!==1)throw Error(ce(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(n.tag===1){var t=n.type;if(yn(t))return Eg(n,t,e)}return e}function wv(n,e,t,i,r,s,o,a,l){return n=yd(t,i,!0,n,r,s,o,a,l),n.context=Ev(null),t=n.current,i=cn(),r=dr(t),s=Fi(i,r),s.callback=e??null,hr(t,s,r),n.current.lanes=r,pa(n,r,i),xn(n,i),n}function wc(n,e,t,i){var r=e.current,s=cn(),o=dr(r);return t=Ev(t),e.context===null?e.context=t:e.pendingContext=t,e=Fi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=hr(r,e,o),n!==null&&(ai(n,r,o,s),_l(n,r,o)),o}function nc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function nm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function xd(n,e){nm(n,e),(n=n.alternate)&&nm(n,e)}function Jx(){return null}var Tv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Sd(n){this._internalRoot=n}Tc.prototype.render=Sd.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ce(409));wc(n,e,null,null)};Tc.prototype.unmount=Sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;qr(function(){wc(null,n,null,null)}),e[ki]=null}};function Tc(n){this._internalRoot=n}Tc.prototype.unstable_scheduleHydration=function(n){if(n){var e=ng();n={blockedOn:null,target:n,priority:e};for(var t=0;t<nr.length&&e!==0&&e<nr[t].priority;t++);nr.splice(t,0,n),t===0&&rg(n)}};function Md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function im(){}function Qx(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nc(o);s.call(c)}}var o=wv(e,i,n,0,null,!1,!1,"",im);return n._reactRootContainer=o,n[ki]=o.current,na(n.nodeType===8?n.parentNode:n),qr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nc(l);a.call(c)}}var l=yd(n,0,!1,null,null,!1,!1,"",im);return n._reactRootContainer=l,n[ki]=l.current,na(n.nodeType===8?n.parentNode:n),qr(function(){wc(e,l,t,i)}),l}function Rc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nc(o);a.call(l)}}wc(e,o,n,r)}else o=Qx(t,e,n,r,i);return nc(o)}eg=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Do(e.pendingLanes);t!==0&&(Hf(e,t|1),xn(e,Pt()),!(Je&6)&&(Ks=Pt()+500,Er()))}break;case 13:qr(function(){var i=Bi(n,1);if(i!==null){var r=cn();ai(i,n,1,r)}}),xd(n,1)}};Vf=function(n){if(n.tag===13){var e=Bi(n,134217728);if(e!==null){var t=cn();ai(e,n,134217728,t)}xd(n,134217728)}};tg=function(n){if(n.tag===13){var e=dr(n),t=Bi(n,e);if(t!==null){var i=cn();ai(t,n,e,i)}xd(n,e)}};ng=function(){return ct};ig=function(n,e){var t=ct;try{return ct=n,e()}finally{ct=t}};ah=function(n,e,t){switch(e){case"input":if(eh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=vc(i);if(!r)throw Error(ce(90));N0(i),eh(i,r)}}}break;case"textarea":F0(n,t);break;case"select":e=t.value,e!=null&&Ns(n,!!t.multiple,e,!1)}};G0=md;W0=qr;var eS={usingClientEntryPoint:!1,Events:[ga,As,vc,H0,V0,md]},_o={findFiberByHostInstance:zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tS={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Y0(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{dc=za.inject(tS),_i=za}catch{}}Dn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;Dn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(e))throw Error(ce(200));return Zx(n,e,null,t)};Dn.createRoot=function(n,e){if(!Md(n))throw Error(ce(299));var t=!1,i="",r=Tv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=yd(n,1,!1,null,null,t,!1,i,r),n[ki]=e.current,na(n.nodeType===8?n.parentNode:n),new Sd(e)};Dn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ce(188)):(n=Object.keys(n).join(","),Error(ce(268,n)));return n=Y0(e),n=n===null?null:n.stateNode,n};Dn.flushSync=function(n){return qr(n)};Dn.hydrate=function(n,e,t){if(!Ac(e))throw Error(ce(200));return Rc(null,n,e,!0,t)};Dn.hydrateRoot=function(n,e,t){if(!Md(n))throw Error(ce(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Tv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=wv(e,null,n,1,t??null,r,!1,s,o),n[ki]=e.current,na(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Tc(e)};Dn.render=function(n,e,t){if(!Ac(e))throw Error(ce(200));return Rc(null,n,e,!1,t)};Dn.unmountComponentAtNode=function(n){if(!Ac(n))throw Error(ce(40));return n._reactRootContainer?(qr(function(){Rc(null,null,n,!1,function(){n._reactRootContainer=null,n[ki]=null})}),!0):!1};Dn.unstable_batchedUpdates=md;Dn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ac(t))throw Error(ce(200));if(n==null||n._reactInternals===void 0)throw Error(ce(38));return Rc(n,e,t,!1,i)};Dn.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(n){console.error(n)}}Av(),A0.exports=Dn;var nS=A0.exports,rm=nS;Yu.createRoot=rm.createRoot,Yu.hydrateRoot=rm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ed="169",iS=0,sm=1,rS=2,Rv=1,Cv=2,bi=3,xr=0,un=1,gi=2,mr=0,Bs=1,ha=2,om=3,am=4,sS=5,Fr=100,oS=101,aS=102,lS=103,cS=104,uS=200,hS=201,fS=202,dS=203,Bh=204,Hh=205,pS=206,mS=207,gS=208,vS=209,_S=210,yS=211,xS=212,SS=213,MS=214,Vh=0,Gh=1,Wh=2,Zs=3,Xh=4,jh=5,Yh=6,$h=7,bv=0,ES=1,wS=2,gr=0,TS=1,AS=2,RS=3,Pv=4,CS=5,bS=6,PS=7,Lv=300,Js=301,Qs=302,qh=303,Kh=304,Cc=306,ic=1e3,Hr=1001,Zh=1002,Vn=1003,LS=1004,ka=1005,ii=1006,cu=1007,Vr=1008,Vi=1009,Dv=1010,Iv=1011,fa=1012,wd=1013,Kr=1014,Ni=1015,_a=1016,Td=1017,Ad=1018,eo=1020,Nv=35902,Uv=1021,Fv=1022,si=1023,Ov=1024,zv=1025,Hs=1026,to=1027,kv=1028,Rd=1029,Bv=1030,Cd=1031,bd=1033,Tl=33776,Al=33777,Rl=33778,Cl=33779,Jh=35840,Qh=35841,ef=35842,tf=35843,nf=36196,rf=37492,sf=37496,of=37808,af=37809,lf=37810,cf=37811,uf=37812,hf=37813,ff=37814,df=37815,pf=37816,mf=37817,gf=37818,vf=37819,_f=37820,yf=37821,bl=36492,xf=36494,Sf=36495,Hv=36283,Mf=36284,Ef=36285,wf=36286,DS=3200,IS=3201,Vv=0,NS=1,rr="",Fn="srgb",wr="srgb-linear",Pd="display-p3",bc="display-p3-linear",rc="linear",_t="srgb",sc="rec709",oc="p3",is=7680,lm=519,US=512,FS=513,OS=514,Gv=515,zS=516,kS=517,BS=518,HS=519,Tf=35044,cm="300 es",Ui=2e3,ac=2001;class ao{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let um=1234567;const Wo=Math.PI/180,no=180/Math.PI;function Oi(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function Gt(n,e,t){return Math.max(e,Math.min(t,n))}function Ld(n,e){return(n%e+e)%e}function VS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function GS(n,e,t){return n!==e?(t-n)/(e-n):0}function Xo(n,e,t){return(1-t)*n+t*e}function WS(n,e,t,i){return Xo(n,e,1-Math.exp(-t*i))}function XS(n,e=1){return e-Math.abs(Ld(n,e*2)-e)}function jS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function YS(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $S(n,e){return n+Math.floor(Math.random()*(e-n+1))}function qS(n,e){return n+Math.random()*(e-n)}function KS(n){return n*(.5-Math.random())}function ZS(n){n!==void 0&&(um=n);let e=um+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function JS(n){return n*Wo}function QS(n){return n*no}function eM(n){return(n&n-1)===0&&n!==0}function tM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nM(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function iM(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),f=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*v,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*v,a*c);break;case"ZYZ":n.set(l*v,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ri(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Fe={DEG2RAD:Wo,RAD2DEG:no,generateUUID:Oi,clamp:Gt,euclideanModulo:Ld,mapLinear:VS,inverseLerp:GS,lerp:Xo,damp:WS,pingpong:XS,smoothstep:jS,smootherstep:YS,randInt:$S,randFloat:qS,randFloatSpread:KS,seededRandom:ZS,degToRad:JS,radToDeg:QS,isPowerOfTwo:eM,ceilPowerOfTwo:tM,floorPowerOfTwo:nM,setQuaternionFromProperEuler:iM,normalize:lt,denormalize:ri};class xe{constructor(e=0,t=0){xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],p=i[5],v=i[8],x=r[0],m=r[3],d=r[6],g=r[1],_=r[4],S=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*x+a*g+l*b,s[3]=o*m+a*_+l*A,s[6]=o*d+a*S+l*T,s[1]=c*x+u*g+h*b,s[4]=c*m+u*_+h*A,s[7]=c*d+u*S+h*T,s[2]=f*x+p*g+v*b,s[5]=f*m+p*_+v*A,s[8]=f*d+p*S+v*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,v=t*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=h*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*t-r*l)*x,e[5]=(r*s-a*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(o*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uu.makeScale(e,t)),this}rotate(e){return this.premultiply(uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uu=new Ge;function Wv(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function lc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rM(){const n=lc("canvas");return n.style.display="block",n}const hm={};function Pl(n){n in hm||(hm[n]=!0,console.warn(n))}function sM(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function oM(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function aM(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const fm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),dm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),yo={[wr]:{transfer:rc,primaries:sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Fn]:{transfer:_t,primaries:sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bc]:{transfer:rc,primaries:oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(dm),fromReference:n=>n.applyMatrix3(fm)},[Pd]:{transfer:_t,primaries:oc,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(dm),fromReference:n=>n.applyMatrix3(fm).convertLinearToSRGB()}},lM=new Set([wr,bc]),ot={enabled:!0,_workingColorSpace:wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!lM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=yo[e].toReference,r=yo[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return yo[n].primaries},getTransfer:function(n){return n===rr?rc:yo[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(yo[e].luminanceCoefficients)}};function Vs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let rs;class cM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=lc("canvas")),rs.width=e.width,rs.height=e.height;const i=rs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Vs(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vs(t[i]/255)*255):t[i]=Vs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uM=0;class Xv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(fu(r[o].image)):s.push(fu(r[o]))}else s=fu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function fu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?cM.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hM=0;class hn extends ao{constructor(e=hn.DEFAULT_IMAGE,t=hn.DEFAULT_MAPPING,i=Hr,r=Hr,s=ii,o=Vr,a=si,l=Vi,c=hn.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Oi(),this.name="",this.source=new Xv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ic:e.x=e.x-Math.floor(e.x);break;case Hr:e.x=e.x<0?0:1;break;case Zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ic:e.y=e.y-Math.floor(e.y);break;case Hr:e.y=e.y<0?0:1;break;case Zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Lv;hn.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,t=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],v=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(v+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(p+1)/2,b=(d+1)/2,A=(u+f)/4,T=(h+x)/4,P=(v+m)/4;return _>S&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-v)*(m-v)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(g)<.001&&(g=1),this.x=(m-v)/g,this.y=(h-x)/g,this.z=(f-u)/g,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fM extends ao{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends fM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jv extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dM extends hn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lo{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=x;return}if(h!==x||l!==f||c!==p||u!==v){let m=1-a;const d=l*f+c*p+u*v+h*x,g=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const b=Math.sqrt(_),A=Math.atan2(b,d*g);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const S=a*g;if(l=l*m+f*S,c=c*m+p*S,u=u*m+v*S,h=h*m+x*S,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+u*h+l*p-c*f,e[t+1]=l*v+u*f+c*h-a*p,e[t+2]=c*v+u*p+a*f-l*h,e[t+3]=u*v-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"YXZ":this._x=f*u*h+c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"ZXY":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h-f*p*v;break;case"ZYX":this._x=f*u*h-c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h+f*p*v;break;case"YZX":this._x=f*u*h+c*p*v,this._y=c*p*h+f*u*v,this._z=c*u*v-f*p*h,this._w=c*u*h-f*p*v;break;case"XZY":this._x=f*u*h-c*p*v,this._y=c*p*h-f*u*v,this._z=c*u*v+f*p*h,this._w=c*u*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return du.copy(this).projectOnVector(e),this.sub(du)}reflect(e){return this.sub(du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const du=new L,pm=new lo;class ya{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ba.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ba.copy(i.boundingBox)),Ba.applyMatrix4(e.matrixWorld),this.union(Ba)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Ha.subVectors(this.max,xo),ss.subVectors(e.a,xo),os.subVectors(e.b,xo),as.subVectors(e.c,xo),Yi.subVectors(os,ss),$i.subVectors(as,os),Ar.subVectors(ss,as);let t=[0,-Yi.z,Yi.y,0,-$i.z,$i.y,0,-Ar.z,Ar.y,Yi.z,0,-Yi.x,$i.z,0,-$i.x,Ar.z,0,-Ar.x,-Yi.y,Yi.x,0,-$i.y,$i.x,0,-Ar.y,Ar.x,0];return!pu(t,ss,os,as,Ha)||(t=[1,0,0,0,1,0,0,0,1],!pu(t,ss,os,as,Ha))?!1:(Va.crossVectors(Yi,$i),t=[Va.x,Va.y,Va.z],pu(t,ss,os,as,Ha))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new L,new L,new L,new L,new L,new L,new L,new L],qn=new L,Ba=new ya,ss=new L,os=new L,as=new L,Yi=new L,$i=new L,Ar=new L,xo=new L,Ha=new L,Va=new L,Rr=new L;function pu(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rr.fromArray(n,s);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const pM=new ya,So=new L,mu=new L;class Pc{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(So,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(mu)),this.expandByPoint(So.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new L,gu=new L,Ga=new L,qi=new L,vu=new L,Wa=new L,_u=new L;class Yv{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ei.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,t),Ei.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){gu.copy(e).add(t).multiplyScalar(.5),Ga.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(gu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ga),a=qi.dot(this.direction),l=-qi.dot(Ga),c=qi.lengthSq(),u=Math.abs(1-o*o);let h,f,p,v;if(u>0)if(h=o*l-a,f=o*a-l,v=s*u,h>=0)if(f>=-v)if(f<=v){const x=1/u;h*=x,f*=x,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(gu).addScaledVector(Ga,f),p}intersectSphere(e,t){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,t,i,r,s){vu.subVectors(t,e),Wa.subVectors(i,e),_u.crossVectors(vu,Wa);let o=this.direction.dot(_u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;qi.subVectors(this.origin,e);const l=a*this.direction.dot(Wa.crossVectors(qi,Wa));if(l<0)return null;const c=a*this.direction.dot(vu.cross(qi));if(c<0||l+c>o)return null;const u=-a*qi.dot(_u);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,i,r,s,o,a,l,c,u,h,f,p,v,x,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,h,f,p,v,x,m)}set(e,t,i,r,s,o,a,l,c,u,h,f,p,v,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ls.setFromMatrixColumn(e,0).length(),s=1/ls.setFromMatrixColumn(e,1).length(),o=1/ls.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+v*c,t[5]=f-x*c,t[9]=-a*l,t[2]=x-f*c,t[6]=v+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,v=c*u,x=c*h;t[0]=f+x*a,t[4]=v*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-v,t[6]=x+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,v=c*u,x=c*h;t[0]=f-x*a,t[4]=-o*h,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*u,t[9]=x-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,v=a*u,x=a*h;t[0]=l*u,t[4]=v*c-p,t[8]=f*c+x,t[1]=l*h,t[5]=x*c+f,t[9]=p*c-v,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=x-f*h,t[8]=v*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+v,t[10]=f-x*h}else if(e.order==="XZY"){const f=o*l,p=o*c,v=a*l,x=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+x,t[5]=o*u,t[9]=p*h-v,t[2]=v*h-p,t[6]=a*u,t[10]=x*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mM,e,gM)}lookAt(e,t,i){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ki.crossVectors(i,En),Ki.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ki.crossVectors(i,En)),Ki.normalize(),Xa.crossVectors(En,Ki),r[0]=Ki.x,r[4]=Xa.x,r[8]=En.x,r[1]=Ki.y,r[5]=Xa.y,r[9]=En.y,r[2]=Ki.z,r[6]=Xa.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],p=i[13],v=i[2],x=i[6],m=i[10],d=i[14],g=i[3],_=i[7],S=i[11],b=i[15],A=r[0],T=r[4],P=r[8],X=r[12],y=r[1],M=r[5],G=r[9],V=r[13],$=r[2],ee=r[6],q=r[10],ne=r[14],N=r[3],re=r[7],te=r[11],de=r[15];return s[0]=o*A+a*y+l*$+c*N,s[4]=o*T+a*M+l*ee+c*re,s[8]=o*P+a*G+l*q+c*te,s[12]=o*X+a*V+l*ne+c*de,s[1]=u*A+h*y+f*$+p*N,s[5]=u*T+h*M+f*ee+p*re,s[9]=u*P+h*G+f*q+p*te,s[13]=u*X+h*V+f*ne+p*de,s[2]=v*A+x*y+m*$+d*N,s[6]=v*T+x*M+m*ee+d*re,s[10]=v*P+x*G+m*q+d*te,s[14]=v*X+x*V+m*ne+d*de,s[3]=g*A+_*y+S*$+b*N,s[7]=g*T+_*M+S*ee+b*re,s[11]=g*P+_*G+S*q+b*te,s[15]=g*X+_*V+S*ne+b*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],v=e[3],x=e[7],m=e[11],d=e[15];return v*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-t*l*h+t*a*f+r*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],v=e[12],x=e[13],m=e[14],d=e[15],g=h*m*c-x*f*c+x*l*p-a*m*p-h*l*d+a*f*d,_=v*f*c-u*m*c-v*l*p+o*m*p+u*l*d-o*f*d,S=u*x*c-v*h*c+v*a*p-o*x*p-u*a*d+o*h*d,b=v*h*l-u*x*l-v*a*f+o*x*f+u*a*m-o*h*m,A=t*g+i*_+r*S+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(x*f*s-h*m*s-x*r*p+i*m*p+h*r*d-i*f*d)*T,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*T,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(u*m*s-v*f*s+v*r*p-t*m*p-u*r*d+t*f*d)*T,e[6]=(v*l*s-o*m*s-v*r*c+t*m*c+o*r*d-t*l*d)*T,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*T,e[8]=S*T,e[9]=(v*h*s-u*x*s-v*i*p+t*x*p+u*i*d-t*h*d)*T,e[10]=(o*x*s-v*a*s+v*i*c-t*x*c-o*i*d+t*a*d)*T,e[11]=(u*a*s-o*h*s-u*i*c+t*h*c+o*i*p-t*a*p)*T,e[12]=b*T,e[13]=(u*x*r-v*h*r+v*i*f-t*x*f-u*i*m+t*h*m)*T,e[14]=(v*a*r-o*x*r-v*i*l+t*x*l+o*i*m-t*a*m)*T,e[15]=(o*h*r-u*a*r+u*i*l-t*h*l-o*i*f+t*a*f)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,v=s*h,x=o*u,m=o*h,d=a*h,g=l*c,_=l*u,S=l*h,b=i.x,A=i.y,T=i.z;return r[0]=(1-(x+d))*b,r[1]=(p+S)*b,r[2]=(v-_)*b,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(f+d))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(v+_)*T,r[9]=(m-g)*T,r[10]=(1-(f+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ls.set(r[0],r[1],r[2]).length();const o=ls.set(r[4],r[5],r[6]).length(),a=ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);const c=1/s,u=1/o,h=1/a;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Ui){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),f=(i+r)/(i-r);let p,v;if(a===Ui)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ac)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Ui){const l=this.elements,c=1/(t-e),u=1/(i-r),h=1/(o-s),f=(t+e)*c,p=(i+r)*u;let v,x;if(a===Ui)v=(o+s)*h,x=-2*h;else if(a===ac)v=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ls=new L,Kn=new mt,mM=new L(0,0,0),gM=new L(1,1,1),Ki=new L,Xa=new L,En=new L,mm=new mt,gm=new lo;class ci{constructor(e=0,t=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mm,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gm.setFromEuler(this),this.setFromQuaternion(gm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class $v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vM=0;const vm=new L,cs=new lo,wi=new mt,ja=new L,Mo=new L,_M=new L,yM=new lo,_m=new L(1,0,0),ym=new L(0,1,0),xm=new L(0,0,1),Sm={type:"added"},xM={type:"removed"},us={type:"childadded",child:null},yu={type:"childremoved",child:null};class Lt extends ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lt.DEFAULT_UP.clone();const e=new L,t=new ci,i=new lo,r=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ge}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Lt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.multiply(cs),this}rotateOnWorldAxis(e,t){return cs.setFromAxisAngle(e,t),this.quaternion.premultiply(cs),this}rotateX(e){return this.rotateOnAxis(_m,e)}rotateY(e){return this.rotateOnAxis(ym,e)}rotateZ(e){return this.rotateOnAxis(xm,e)}translateOnAxis(e,t){return vm.copy(e).applyQuaternion(this.quaternion),this.position.add(vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_m,e)}translateY(e){return this.translateOnAxis(ym,e)}translateZ(e){return this.translateOnAxis(xm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ja.copy(e):ja.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Mo,ja,this.up):wi.lookAt(ja,Mo,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),cs.setFromRotationMatrix(wi),this.quaternion.premultiply(cs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sm),us.child=e,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xM),yu.child=e,this.dispatchEvent(yu),yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sm),us.child=e,this.dispatchEvent(us),us.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,_M),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,yM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Lt.DEFAULT_UP=new L(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Zn=new L,Ti=new L,xu=new L,Ai=new L,hs=new L,fs=new L,Mm=new L,Su=new L,Mu=new L,Eu=new L,wu=new Ct,Tu=new Ct,Au=new Ct;class Bn{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Zn.subVectors(e,t),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Zn.subVectors(r,t),Ti.subVectors(i,t),xu.subVectors(e,t);const o=Zn.dot(Zn),a=Zn.dot(Ti),l=Zn.dot(xu),c=Ti.dot(Ti),u=Ti.dot(xu),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(c*l-a*u)*f,v=(o*u-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ai.x),l.addScaledVector(o,Ai.y),l.addScaledVector(a,Ai.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return wu.setScalar(0),Tu.setScalar(0),Au.setScalar(0),wu.fromBufferAttribute(e,t),Tu.fromBufferAttribute(e,i),Au.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(wu,s.x),o.addScaledVector(Tu,s.y),o.addScaledVector(Au,s.z),o}static isFrontFacing(e,t,i,r){return Zn.subVectors(i,t),Ti.subVectors(e,t),Zn.cross(Ti).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Zn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;hs.subVectors(r,i),fs.subVectors(s,i),Su.subVectors(e,i);const l=hs.dot(Su),c=fs.dot(Su);if(l<=0&&c<=0)return t.copy(i);Mu.subVectors(e,r);const u=hs.dot(Mu),h=fs.dot(Mu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(hs,o);Eu.subVectors(e,s);const p=hs.dot(Eu),v=fs.dot(Eu);if(v>=0&&p<=v)return t.copy(s);const x=p*c-l*v;if(x<=0&&c>=0&&v<=0)return a=c/(c-v),t.copy(i).addScaledVector(fs,a);const m=u*v-p*h;if(m<=0&&h-u>=0&&p-v>=0)return Mm.subVectors(s,r),a=(h-u)/(h-u+(p-v)),t.copy(r).addScaledVector(Mm,a);const d=1/(m+x+f);return o=x*d,a=f*d,t.copy(i).addScaledVector(hs,o).addScaledVector(fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function Ru(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ot.workingColorSpace){if(e=Ld(e,1),t=Gt(t,0,1),i=Gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,t=Fn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fn){const i=qv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}copyLinearToSRGB(e){return this.r=hu(e.r),this.g=hu(e.g),this.b=hu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return ot.fromWorkingColorSpace(en.copy(this),e),Math.round(Gt(en.r*255,0,255))*65536+Math.round(Gt(en.g*255,0,255))*256+Math.round(Gt(en.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(en.copy(this),t);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Fn){ot.fromWorkingColorSpace(en.copy(this),e);const t=en.r,i=en.g,r=en.b;return e!==Fn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(Ya);const i=Xo(Zi.h,Ya.h,t),r=Xo(Zi.s,Ya.s,t),s=Xo(Zi.l,Ya.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new be;be.NAMES=qv;let SM=0;class es extends ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Bs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=Hh,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==xr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bh&&(i.blendSrc=this.blendSrc),this.blendDst!==Hh&&(i.blendDst=this.blendDst),this.blendEquation!==Fr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class kn extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=bv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new L,$a=new xe;class Pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Tf,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}}class Kv extends Pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zv extends Pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends Pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let MM=0;const Un=new mt,Cu=new Lt,ds=new L,wn=new ya,Eo=new ya,Bt=new L;class Xt extends ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wv(e)?Zv:Kv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,i){return Un.makeTranslation(e,t,i),this.applyMatrix4(Un),this}scale(e,t,i){return Un.makeScale(e,t,i),this.applyMatrix4(Un),this}lookAt(e){return Cu.lookAt(e),Cu.updateMatrix(),this.applyMatrix4(Cu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(wn.min,Eo.min),wn.expandByPoint(Bt),Bt.addVectors(wn.max,Eo.max),wn.expandByPoint(Bt)):(wn.expandByPoint(Eo.min),wn.expandByPoint(Eo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(e,c),Bt.add(ds)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new L,l[P]=new L;const c=new L,u=new L,h=new L,f=new xe,p=new xe,v=new xe,x=new L,m=new L;function d(P,X,y){c.fromBufferAttribute(i,P),u.fromBufferAttribute(i,X),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,P),p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,y),u.sub(c),h.sub(c),p.sub(f),v.sub(f);const M=1/(p.x*v.y-v.x*p.y);isFinite(M)&&(x.copy(u).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(M),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-v.x).multiplyScalar(M),a[P].add(x),a[X].add(x),a[y].add(x),l[P].add(m),l[X].add(m),l[y].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,X=g.length;P<X;++P){const y=g[P],M=y.start,G=y.count;for(let V=M,$=M+G;V<$;V+=3)d(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new L,S=new L,b=new L,A=new L;function T(P){b.fromBufferAttribute(r,P),A.copy(b);const X=a[P];_.copy(X),_.sub(b.multiplyScalar(b.dot(X))).normalize(),S.crossVectors(A,X);const M=S.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,M)}for(let P=0,X=g.length;P<X;++P){const y=g[P],M=y.start,G=y.count;for(let V=M,$=M+G;V<$;V+=3)T(e.getX(V+0)),T(e.getX(V+1)),T(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new L,s=new L,o=new L,a=new L,l=new L,c=new L,u=new L,h=new L;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let d=0;d<u;d++)f[v++]=c[p++]}return new Pn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Em=new mt,Cr=new Yv,qa=new Pc,wm=new L,Ka=new L,Za=new L,Ja=new L,bu=new L,Qa=new L,Tm=new L,el=new L;class dt extends Lt{constructor(e=new Xt,t=new kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(bu.fromBufferAttribute(h,e),o?Qa.addScaledVector(bu,u):Qa.addScaledVector(bu.sub(t),u))}t.add(Qa)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qa.copy(i.boundingSphere),qa.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(qa.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(qa,wm)===null||Cr.origin.distanceToSquared(wm)>(e.far-e.near)**2))&&(Em.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(Em),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const A=a.getX(S),T=a.getX(S+1),P=a.getX(S+2);r=tl(this,d,e,i,c,u,h,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=tl(this,o,e,i,c,u,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=f.length;v<x;v++){const m=f[v],d=o[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,b=_;S<b;S+=3){const A=S,T=S+1,P=S+2;r=tl(this,d,e,i,c,u,h,A,T,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=v,d=x;m<d;m+=3){const g=m,_=m+1,S=m+2;r=tl(this,o,e,i,c,u,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function EM(n,e,t,i,r,s,o,a){let l;if(e.side===un?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===xr,a),l===null)return null;el.copy(a),el.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(el);return c<t.near||c>t.far?null:{distance:c,point:el.clone(),object:n}}function tl(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ka),n.getVertexPosition(l,Za),n.getVertexPosition(c,Ja);const u=EM(n,e,t,i,Ka,Za,Ja,Tm);if(u){const h=new L;Bn.getBarycoord(Tm,Ka,Za,Ja,h),r&&(u.uv=Bn.getInterpolatedAttribute(r,a,l,c,h,new xe)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,a,l,c,h,new xe)),o&&(u.normal=Bn.getInterpolatedAttribute(o,a,l,c,h,new L),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};Bn.getNormal(Ka,Za,Ja,f.normal),u.face=f,u.barycoord=h}return u}class Nt extends Xt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function v(x,m,d,g,_,S,b,A,T,P,X){const y=S/T,M=b/P,G=S/2,V=b/2,$=A/2,ee=T+1,q=P+1;let ne=0,N=0;const re=new L;for(let te=0;te<q;te++){const de=te*M-V;for(let Ne=0;Ne<ee;Ne++){const He=Ne*y-G;re[x]=He*g,re[m]=de*_,re[d]=$,c.push(re.x,re.y,re.z),re[x]=0,re[m]=0,re[d]=A>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ne/T),h.push(1-te/P),ne+=1}}for(let te=0;te<P;te++)for(let de=0;de<T;de++){const Ne=f+de+ee*te,He=f+de+ee*(te+1),Z=f+(de+1)+ee*(te+1),ae=f+(de+1)+ee*te;l.push(Ne,He,ae),l.push(He,Z,ae),N+=6}a.addGroup(p,N,X),p+=N,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=io(n[t]);for(const r in i)e[r]=i[r]}return e}function wM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const TM={clone:io,merge:on};var AM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Qv extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Ui}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new L,Am=new xe,Rm=new xe;class Rn extends Qv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Am,Rm),t.subVectors(Rm,Am)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ps=-90,ms=1;class CM extends Lt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(ps,ms,e,t);r.layers=this.layers,this.add(r);const s=new Rn(ps,ms,e,t);s.layers=this.layers,this.add(s);const o=new Rn(ps,ms,e,t);o.layers=this.layers,this.add(o);const a=new Rn(ps,ms,e,t);a.layers=this.layers,this.add(a);const l=new Rn(ps,ms,e,t);l.layers=this.layers,this.add(l);const c=new Rn(ps,ms,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ac)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class e_ extends hn{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bM extends Zr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new e_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ii}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Nt(5,5,5),s=new Gi({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:mr});s.uniforms.tEquirect.value=t;const o=new dt(r,s),a=t.minFilter;return t.minFilter===Vr&&(t.minFilter=ii),new CM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Pu=new L,PM=new L,LM=new Ge;class Nr{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Pu.subVectors(i,t).cross(PM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Pu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||LM.getNormalMatrix(e),r=this.coplanarPoint(Pu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const br=new Pc,nl=new L;class Dd{constructor(e=new Nr,t=new Nr,i=new Nr,r=new Nr,s=new Nr,o=new Nr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],v=r[9],x=r[10],m=r[11],d=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-p,S-d).normalize(),i[1].setComponents(l+s,f+c,m+p,S+d).normalize(),i[2].setComponents(l+o,f+u,m+v,S+g).normalize(),i[3].setComponents(l-o,f-u,m-v,S-g).normalize(),i[4].setComponents(l-a,f-h,m-x,S-_).normalize(),t===Ui)i[5].setComponents(l+a,f+h,m+x,S+_).normalize();else if(t===ac)i[5].setComponents(a,h,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),br.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(br)}intersectsSprite(e){return br.center.set(0,0,0),br.radius=.7071067811865476,br.applyMatrix4(e.matrixWorld),this.intersectsSphere(br)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(nl.x=r.normal.x>0?e.max.x:e.min.x,nl.y=r.normal.y>0?e.max.y:e.min.y,nl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function t_(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function DM(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],x=h[p];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++f,h[f]=x)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const x=h[p];n.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class ti extends Xt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],v=[],x=[],m=[];for(let d=0;d<u;d++){const g=d*f-o;for(let _=0;_<c;_++){const S=_*h-s;v.push(S,-g,0),x.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const _=g+c*d,S=g+c*(d+1),b=g+1+c*(d+1),A=g+1+c*d;p.push(_,S,A),p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.width,e.height,e.widthSegments,e.heightSegments)}}var IM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,UM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,BM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,VM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,YM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,QM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,n1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,r1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",u1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,S1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,T1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,A1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,C1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,L1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,D1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_E=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,SE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ME=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,EE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,AE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,BE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,HE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,YE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,QE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ew=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ow=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:IM,alphahash_pars_fragment:NM,alphamap_fragment:UM,alphamap_pars_fragment:FM,alphatest_fragment:OM,alphatest_pars_fragment:zM,aomap_fragment:kM,aomap_pars_fragment:BM,batching_pars_vertex:HM,batching_vertex:VM,begin_vertex:GM,beginnormal_vertex:WM,bsdfs:XM,iridescence_fragment:jM,bumpmap_pars_fragment:YM,clipping_planes_fragment:$M,clipping_planes_pars_fragment:qM,clipping_planes_pars_vertex:KM,clipping_planes_vertex:ZM,color_fragment:JM,color_pars_fragment:QM,color_pars_vertex:e1,color_vertex:t1,common:n1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:o1,emissivemap_fragment:a1,emissivemap_pars_fragment:l1,colorspace_fragment:c1,colorspace_pars_fragment:u1,envmap_fragment:h1,envmap_common_pars_fragment:f1,envmap_pars_fragment:d1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:T1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:v1,fog_fragment:_1,fog_pars_fragment:y1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:S1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:E1,lights_pars_begin:w1,lights_toon_fragment:A1,lights_toon_pars_fragment:R1,lights_phong_fragment:C1,lights_phong_pars_fragment:b1,lights_physical_fragment:P1,lights_physical_pars_fragment:L1,lights_fragment_begin:D1,lights_fragment_maps:I1,lights_fragment_end:N1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:F1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:z1,map_fragment:k1,map_pars_fragment:B1,map_particle_fragment:H1,map_particle_pars_fragment:V1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:W1,morphinstance_vertex:X1,morphcolor_vertex:j1,morphnormal_vertex:Y1,morphtarget_pars_vertex:$1,morphtarget_vertex:q1,normal_fragment_begin:K1,normal_fragment_maps:Z1,normal_pars_fragment:J1,normal_pars_vertex:Q1,normal_vertex:eE,normalmap_pars_fragment:tE,clearcoat_normal_fragment_begin:nE,clearcoat_normal_fragment_maps:iE,clearcoat_pars_fragment:rE,iridescence_pars_fragment:sE,opaque_fragment:oE,packing:aE,premultiplied_alpha_fragment:lE,project_vertex:cE,dithering_fragment:uE,dithering_pars_fragment:hE,roughnessmap_fragment:fE,roughnessmap_pars_fragment:dE,shadowmap_pars_fragment:pE,shadowmap_pars_vertex:mE,shadowmap_vertex:gE,shadowmask_pars_fragment:vE,skinbase_vertex:_E,skinning_pars_vertex:yE,skinning_vertex:xE,skinnormal_vertex:SE,specularmap_fragment:ME,specularmap_pars_fragment:EE,tonemapping_fragment:wE,tonemapping_pars_fragment:TE,transmission_fragment:AE,transmission_pars_fragment:RE,uv_pars_fragment:CE,uv_pars_vertex:bE,uv_vertex:PE,worldpos_vertex:LE,background_vert:DE,background_frag:IE,backgroundCube_vert:NE,backgroundCube_frag:UE,cube_vert:FE,cube_frag:OE,depth_vert:zE,depth_frag:kE,distanceRGBA_vert:BE,distanceRGBA_frag:HE,equirect_vert:VE,equirect_frag:GE,linedashed_vert:WE,linedashed_frag:XE,meshbasic_vert:jE,meshbasic_frag:YE,meshlambert_vert:$E,meshlambert_frag:qE,meshmatcap_vert:KE,meshmatcap_frag:ZE,meshnormal_vert:JE,meshnormal_frag:QE,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:ow,points_frag:aw,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:hw},ge={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},pi={basic:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:on([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:on([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:on([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:on([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:on([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:on([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:on([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:on([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:on([ge.common,ge.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:on([ge.lights,ge.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};pi.physical={uniforms:on([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const il={r:0,b:0,g:0},Pr=new ci,fw=new mt;function dw(n,e,t,i,r,s,o){const a=new be(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?t:e).get(_)),_}function x(g){let _=!1;const S=v(g);S===null?d(a,l):S&&S.isColor&&(d(S,1),_=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(g,_){const S=v(_);S&&(S.isCubeTexture||S.mapping===Cc)?(u===void 0&&(u=new dt(new Nt(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:io(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(_.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fw.makeRotationFromEuler(Pr)),u.material.toneMapped=ot.getTransfer(S.colorSpace)!==_t,(h!==S||f!==S.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new dt(new ti(2,2),new Gi({name:"BackgroundMaterial",uniforms:io(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(S.colorSpace)!==_t,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function d(g,_){g.getRGB(il,Jv(n)),i.buffers.color.setClear(il.r,il.g,il.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:x,addToRenderList:m}}function pw(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,M,G,V,$){let ee=!1;const q=h(V,G,M);s!==q&&(s=q,c(s.object)),ee=p(y,V,G,$),ee&&v(y,V,G,$),$!==null&&e.update($,n.ELEMENT_ARRAY_BUFFER),(ee||o)&&(o=!1,S(y,M,G,V),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function h(y,M,G){const V=G.wireframe===!0;let $=i[y.id];$===void 0&&($={},i[y.id]=$);let ee=$[M.id];ee===void 0&&(ee={},$[M.id]=ee);let q=ee[V];return q===void 0&&(q=f(l()),ee[V]=q),q}function f(y){const M=[],G=[],V=[];for(let $=0;$<t;$++)M[$]=0,G[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:G,attributeDivisors:V,object:y,attributes:{},index:null}}function p(y,M,G,V){const $=s.attributes,ee=M.attributes;let q=0;const ne=G.getAttributes();for(const N in ne)if(ne[N].location>=0){const te=$[N];let de=ee[N];if(de===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;q++}return s.attributesNum!==q||s.index!==V}function v(y,M,G,V){const $={},ee=M.attributes;let q=0;const ne=G.getAttributes();for(const N in ne)if(ne[N].location>=0){let te=ee[N];te===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(te=y.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),$[N]=de,q++}s.attributes=$,s.attributesNum=q,s.index=V}function x(){const y=s.newAttributes;for(let M=0,G=y.length;M<G;M++)y[M]=0}function m(y){d(y,0)}function d(y,M){const G=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;G[y]=1,V[y]===0&&(n.enableVertexAttribArray(y),V[y]=1),$[y]!==M&&(n.vertexAttribDivisor(y,M),$[y]=M)}function g(){const y=s.newAttributes,M=s.enabledAttributes;for(let G=0,V=M.length;G<V;G++)M[G]!==y[G]&&(n.disableVertexAttribArray(G),M[G]=0)}function _(y,M,G,V,$,ee,q){q===!0?n.vertexAttribIPointer(y,M,G,$,ee):n.vertexAttribPointer(y,M,G,V,$,ee)}function S(y,M,G,V){x();const $=V.attributes,ee=G.getAttributes(),q=M.defaultAttributeValues;for(const ne in ee){const N=ee[ne];if(N.location>=0){let re=$[ne];if(re===void 0&&(ne==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),ne==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const te=re.normalized,de=re.itemSize,Ne=e.get(re);if(Ne===void 0)continue;const He=Ne.buffer,Z=Ne.type,ae=Ne.bytesPerElement,ve=Z===n.INT||Z===n.UNSIGNED_INT||re.gpuType===wd;if(re.isInterleavedBufferAttribute){const _e=re.data,Ce=_e.stride,ye=re.offset;if(_e.isInstancedInterleavedBuffer){for(let We=0;We<N.locationSize;We++)d(N.location+We,_e.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let We=0;We<N.locationSize;We++)m(N.location+We);n.bindBuffer(n.ARRAY_BUFFER,He);for(let We=0;We<N.locationSize;We++)_(N.location+We,de/N.locationSize,Z,te,Ce*ae,(ye+de/N.locationSize*We)*ae,ve)}else{if(re.isInstancedBufferAttribute){for(let _e=0;_e<N.locationSize;_e++)d(N.location+_e,re.meshPerAttribute);y.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let _e=0;_e<N.locationSize;_e++)m(N.location+_e);n.bindBuffer(n.ARRAY_BUFFER,He);for(let _e=0;_e<N.locationSize;_e++)_(N.location+_e,de/N.locationSize,Z,te,de*ae,de/N.locationSize*_e*ae,ve)}}else if(q!==void 0){const te=q[ne];if(te!==void 0)switch(te.length){case 2:n.vertexAttrib2fv(N.location,te);break;case 3:n.vertexAttrib3fv(N.location,te);break;case 4:n.vertexAttrib4fv(N.location,te);break;default:n.vertexAttrib1fv(N.location,te)}}}}g()}function b(){P();for(const y in i){const M=i[y];for(const G in M){const V=M[G];for(const $ in V)u(V[$].object),delete V[$];delete M[G]}delete i[y]}}function A(y){if(i[y.id]===void 0)return;const M=i[y.id];for(const G in M){const V=M[G];for(const $ in V)u(V[$].object),delete V[$];delete M[G]}delete i[y.id]}function T(y){for(const M in i){const G=i[M];if(G[y.id]===void 0)continue;const V=G[y.id];for(const $ in V)u(V[$].object),delete V[$];delete G[y.id]}}function P(){X(),o=!0,s!==r&&(s=r,c(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:X,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:g}}function mw(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];t.update(p,i,1)}function l(c,u,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<c.length;v++)o(c[v],u[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,h);let v=0;for(let x=0;x<h;x++)v+=u[x];for(let x=0;x<f.length;x++)t.update(v,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gw(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==si&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Vi&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ni&&!P)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=v>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:b,maxSamples:A}}function vw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Nr,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,d=n.get(h);if(!r||v===null||v.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,_=g*4;let S=d.clippingState||null;l.value=S,S=u(v,f,_,p);for(let b=0;b!==_;++b)S[b]=t[b];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,p,v){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const d=p+x*4,g=f.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,S=p;_!==x;++_,S+=4)o.copy(h[_]).applyMatrix4(g,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function _w(n){let e=new WeakMap;function t(o,a){return a===qh?o.mapping=Js:a===Kh&&(o.mapping=Qs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===qh||a===Kh)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bM(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class n_ extends Qv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,Cm=[.125,.215,.35,.446,.526,.582],Or=20,Lu=new n_,bm=new be;let Du=null,Iu=0,Nu=0,Uu=!1;const Ur=(1+Math.sqrt(5))/2,gs=1/Ur,Pm=[new L(-Ur,gs,0),new L(Ur,gs,0),new L(-gs,0,Ur),new L(gs,0,Ur),new L(0,Ur,-gs),new L(0,Ur,gs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Du=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Im(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Du,Iu,Nu),this._renderer.xr.enabled=Uu,e.scissorTest=!1,rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget(),Iu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:_a,format:si,colorSpace:wr,depthBuffer:!1},r=Dm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yw(s)),this._blurMaterial=xw(s,e,t)}return r}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Lu)}_sceneToCubeUV(e,t,i,r){const a=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(bm),u.toneMapping=gr,u.autoClear=!1;const p=new kn({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),v=new dt(new Nt,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(bm),x=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;rl(r,g*_,d>2?_:0,_,_),u.setRenderTarget(r),x&&u.render(v,a),u.render(e,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Js||e.mapping===Qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Im());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Lu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Pm[(r-s-1)%Pm.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Or-1),x=s/v,m=isFinite(s)?1+Math.floor(u*x):Or;m>Or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Or}`);const d=[];let g=0;for(let T=0;T<Or;++T){const P=T/x,X=Math.exp(-P*P/2);d.push(X),T===0?g+=X:T<m&&(g+=2*X)}for(let T=0;T<d.length;T++)d[T]=d[T]/g;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const S=this._sizeLods[r],b=3*S*(r>_-Is?r-_+Is:0),A=4*(this._cubeSize-S);rl(t,b,A,3*S,2*S),l.setRenderTarget(t),l.render(h,Lu)}}function yw(n){const e=[],t=[],i=[];let r=n;const s=n-Is+1+Cm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Is?l=Cm[o-n+Is-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,v=6,x=3,m=2,d=1,g=new Float32Array(x*v*p),_=new Float32Array(m*v*p),S=new Float32Array(d*v*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,X=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];g.set(X,x*v*A),_.set(f,m*v*A);const y=[A,A,A,A,A,A];S.set(y,d*v*A)}const b=new Xt;b.setAttribute("position",new Pn(g,x)),b.setAttribute("uv",new Pn(_,m)),b.setAttribute("faceIndex",new Pn(S,d)),e.push(b),r>Is&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Dm(n,e,t){const i=new Zr(n,e,t);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function xw(n,e,t){const i=new Float32Array(Or),r=new L(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:Or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Im(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Nm(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===qh||l===Kh,u=l===Js||l===Qs;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Lm(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Lm(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Mw(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Pl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ew(n,e,t,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);for(const v in f.morphAttributes){const x=f.morphAttributes[v];for(let m=0,d=x.length;m<d;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)e.update(f[v],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const x=p[v];for(let m=0,d=x.length;m<d;m++)e.update(x[m],n.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,v=h.attributes.position;let x=0;if(p!==null){const g=p.array;x=p.version;for(let _=0,S=g.length;_<S;_+=3){const b=g[_+0],A=g[_+1],T=g[_+2];f.push(b,A,A,T,T,b)}}else if(v!==void 0){const g=v.array;x=v.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const b=_+0,A=_+1,T=_+2;f.push(b,A,A,T,T,b)}}else return;const m=new(Wv(f)?Zv:Kv)(f,1);m.version=x;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ww(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*o),t.update(p,i,1)}function c(f,p,v){v!==0&&(n.drawElementsInstanced(i,p,s,f*o,v),t.update(p,i,v))}function u(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];t.update(m,i,1)}function h(f,p,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,v);let d=0;for(let g=0;g<v;g++)d+=p[g];for(let g=0;g<x.length;g++)t.update(d,i,x[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tw(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Aw(n,e,t){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let b=a.attributes.position.count*S,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*A*4*h),P=new jv(T,b,A,h);P.type=Ni,P.needsUpdate=!0;const X=S*4;for(let M=0;M<h;M++){const G=d[M],V=g[M],$=_[M],ee=b*A*4*M;for(let q=0;q<G.count;q++){const ne=q*X;v===!0&&(r.fromBufferAttribute(G,q),T[ee+ne+0]=r.x,T[ee+ne+1]=r.y,T[ee+ne+2]=r.z,T[ee+ne+3]=0),x===!0&&(r.fromBufferAttribute(V,q),T[ee+ne+4]=r.x,T[ee+ne+5]=r.y,T[ee+ne+6]=r.z,T[ee+ne+7]=0),m===!0&&(r.fromBufferAttribute($,q),T[ee+ne+8]=r.x,T[ee+ne+9]=r.y,T[ee+ne+10]=r.z,T[ee+ne+11]=$.itemSize===4?r.w:1)}}f={count:h,texture:P,size:new xe(b,A)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let v=0;for(let m=0;m<c.length;m++)v+=c[m];const x=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function Rw(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class i_ extends hn{constructor(e,t,i,r,s,o,a,l,c,u=Hs){if(u!==Hs&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Hs&&(i=Kr),i===void 0&&u===to&&(i=eo),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const r_=new hn,Um=new i_(1,1),s_=new jv,o_=new dM,a_=new e_,Fm=[],Om=[],zm=new Float32Array(16),km=new Float32Array(9),Bm=new Float32Array(4);function co(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Fm[r];if(s===void 0&&(s=new Float32Array(r),Fm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function zt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Lc(n,e){let t=Om[e];t===void 0&&(t=new Int32Array(e),Om[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function Pw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function Lw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function Dw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;Bm.set(i),n.uniformMatrix2fv(this.addr,!1,Bm),kt(t,i)}}function Iw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;km.set(i),n.uniformMatrix3fv(this.addr,!1,km),kt(t,i)}}function Nw(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(zt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,i))return;zm.set(i),n.uniformMatrix4fv(this.addr,!1,zm),kt(t,i)}}function Uw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Fw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function Ow(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function zw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function kw(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Bw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function Hw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function Vw(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function Gw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Um.compareFunction=Gv,s=Um):s=r_,t.setTexture2D(e||s,r)}function Ww(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||o_,r)}function Xw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||a_,r)}function jw(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||s_,r)}function Yw(n){switch(n){case 5126:return Cw;case 35664:return bw;case 35665:return Pw;case 35666:return Lw;case 35674:return Dw;case 35675:return Iw;case 35676:return Nw;case 5124:case 35670:return Uw;case 35667:case 35671:return Fw;case 35668:case 35672:return Ow;case 35669:case 35673:return zw;case 5125:return kw;case 36294:return Bw;case 36295:return Hw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Ww;case 35680:case 36300:case 36308:case 36293:return Xw;case 36289:case 36303:case 36311:case 36292:return jw}}function $w(n,e){n.uniform1fv(this.addr,e)}function qw(n,e){const t=co(e,this.size,2);n.uniform2fv(this.addr,t)}function Kw(n,e){const t=co(e,this.size,3);n.uniform3fv(this.addr,t)}function Zw(n,e){const t=co(e,this.size,4);n.uniform4fv(this.addr,t)}function Jw(n,e){const t=co(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Qw(n,e){const t=co(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function e2(n,e){const t=co(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function t2(n,e){n.uniform1iv(this.addr,e)}function n2(n,e){n.uniform2iv(this.addr,e)}function i2(n,e){n.uniform3iv(this.addr,e)}function r2(n,e){n.uniform4iv(this.addr,e)}function s2(n,e){n.uniform1uiv(this.addr,e)}function o2(n,e){n.uniform2uiv(this.addr,e)}function a2(n,e){n.uniform3uiv(this.addr,e)}function l2(n,e){n.uniform4uiv(this.addr,e)}function c2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||r_,s[o])}function u2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||o_,s[o])}function h2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||a_,s[o])}function f2(n,e,t){const i=this.cache,r=e.length,s=Lc(t,r);zt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||s_,s[o])}function d2(n){switch(n){case 5126:return $w;case 35664:return qw;case 35665:return Kw;case 35666:return Zw;case 35674:return Jw;case 35675:return Qw;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return s2;case 36294:return o2;case 36295:return a2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return f2}}class p2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yw(t.type)}}class m2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=d2(t.type)}}class g2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Fu=/(\w+)(\])?(\[|\.)?/g;function Hm(n,e){n.seq.push(e),n.map[e.id]=e}function v2(n,e,t){const i=n.name,r=i.length;for(Fu.lastIndex=0;;){const s=Fu.exec(i),o=Fu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Hm(t,c===void 0?new p2(a,n,e):new m2(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new g2(a),Hm(t,h)),t=h}}}class Ll{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);v2(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Vm(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _2=37297;let y2=0;function x2(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function S2(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===oc&&t===sc?i="LinearDisplayP3ToLinearSRGB":e===sc&&t===oc&&(i="LinearSRGBToLinearDisplayP3"),n){case wr:case bc:return[i,"LinearTransferOETF"];case Fn:case Pd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Gm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+x2(n.getShaderSource(e),o)}else return r}function M2(n,e){const t=S2(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function E2(n,e){let t;switch(e){case TS:t="Linear";break;case AS:t="Reinhard";break;case RS:t="Cineon";break;case Pv:t="ACESFilmic";break;case bS:t="AgX";break;case PS:t="Neutral";break;case CS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sl=new L;function w2(){ot.getLuminanceCoefficients(sl);const n=sl.x.toFixed(4),e=sl.y.toFixed(4),t=sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T2(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function A2(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R2(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function No(n){return n!==""}function Wm(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(n){return n.replace(C2,P2)}const b2=new Map;function P2(n,e){let t=Ve[e];if(t===void 0){const i=b2.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Af(t)}const L2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jm(n){return n.replace(L2,D2)}function D2(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ym(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function I2(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Rv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Cv?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function N2(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function U2(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function F2(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case bv:e="ENVMAP_BLENDING_MULTIPLY";break;case ES:e="ENVMAP_BLENDING_MIX";break;case wS:e="ENVMAP_BLENDING_ADD";break}return e}function O2(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function z2(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=I2(t),c=N2(t),u=U2(t),h=F2(t),f=O2(t),p=T2(t),v=A2(s),x=r.createProgram();let m,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(No).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(No).join(`
`),d.length>0&&(d+=`
`)):(m=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),d=[Ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gr?"#define TONE_MAPPING":"",t.toneMapping!==gr?Ve.tonemapping_pars_fragment:"",t.toneMapping!==gr?E2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,M2("linearToOutputTexel",t.outputColorSpace),w2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=Af(o),o=Wm(o,t),o=Xm(o,t),a=Af(a),a=Wm(a,t),a=Xm(a,t),o=jm(o),a=jm(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=g+m+o,S=g+d+a,b=Vm(r,r.VERTEX_SHADER,_),A=Vm(r,r.FRAGMENT_SHADER,S);r.attachShader(x,b),r.attachShader(x,A),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function T(M){if(n.debug.checkShaderErrors){const G=r.getProgramInfoLog(x).trim(),V=r.getShaderInfoLog(b).trim(),$=r.getShaderInfoLog(A).trim();let ee=!0,q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ee=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,b,A);else{const ne=Gm(r,b,"vertex"),N=Gm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+G+`
`+ne+`
`+N)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(V===""||$==="")&&(q=!1);q&&(M.diagnostics={runnable:ee,programLog:G,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:d}})}r.deleteShader(b),r.deleteShader(A),P=new Ll(r,x),X=R2(r,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let X;this.getAttributes=function(){return X===void 0&&T(this),X};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,_2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=A,this}let k2=0;class B2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new H2(e),t.set(e,i)),i}}class H2{constructor(e){this.id=k2++,this.code=e,this.usedTimes=0}}function V2(n,e,t,i,r,s,o){const a=new $v,l=new B2,c=new Set,u=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,M,G,V,$){const ee=V.fog,q=$.geometry,ne=y.isMeshStandardMaterial?V.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||ne),re=N&&N.mapping===Cc?N.image.height:null,te=x[y.type];y.precision!==null&&(v=r.getMaxPrecision(y.precision),v!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",v,"instead."));const de=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ne=de!==void 0?de.length:0;let He=0;q.morphAttributes.position!==void 0&&(He=1),q.morphAttributes.normal!==void 0&&(He=2),q.morphAttributes.color!==void 0&&(He=3);let Z,ae,ve,_e;if(te){const mn=pi[te];Z=mn.vertexShader,ae=mn.fragmentShader}else Z=y.vertexShader,ae=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const Ce=n.getRenderTarget(),ye=$.isInstancedMesh===!0,We=$.isBatchedMesh===!0,et=!!y.map,$e=!!y.matcap,I=!!N,Kt=!!y.aoMap,je=!!y.lightMap,Ke=!!y.bumpMap,Oe=!!y.normalMap,ut=!!y.displacementMap,Ue=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,W=y.anisotropy>0,ie=y.clearcoat>0,oe=y.dispersion>0,R=y.iridescence>0,D=y.sheen>0,F=y.transmission>0,H=W&&!!y.anisotropyMap,Q=ie&&!!y.clearcoatMap,O=ie&&!!y.clearcoatNormalMap,le=ie&&!!y.clearcoatRoughnessMap,ue=R&&!!y.iridescenceMap,pe=R&&!!y.iridescenceThicknessMap,he=D&&!!y.sheenColorMap,Le=D&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,Be=!!y.specularColorMap,U=!!y.specularIntensityMap,me=F&&!!y.transmissionMap,K=F&&!!y.thicknessMap,se=!!y.gradientMap,Se=!!y.alphaMap,we=y.alphaTest>0,Ze=!!y.alphaHash,Dt=!!y.extensions;let pn=gr;y.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(pn=n.toneMapping);const tt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Z,fragmentShader:ae,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:v,batching:We,batchingColor:We&&$._colorsTexture!==null,instancing:ye,instancingColor:ye&&$.instanceColor!==null,instancingMorph:ye&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ce===null?n.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:wr,alphaToCoverage:!!y.alphaToCoverage,map:et,matcap:$e,envMap:I,envMapMode:I&&N.mapping,envMapCubeUVHeight:re,aoMap:Kt,lightMap:je,bumpMap:Ke,normalMap:Oe,displacementMap:p&&ut,emissiveMap:Ue,normalMapObjectSpace:Oe&&y.normalMapType===NS,normalMapTangentSpace:Oe&&y.normalMapType===Vv,metalnessMap:C,roughnessMap:E,anisotropy:W,anisotropyMap:H,clearcoat:ie,clearcoatMap:Q,clearcoatNormalMap:O,clearcoatRoughnessMap:le,dispersion:oe,iridescence:R,iridescenceMap:ue,iridescenceThicknessMap:pe,sheen:D,sheenColorMap:he,sheenRoughnessMap:Le,specularMap:Ae,specularColorMap:Be,specularIntensityMap:U,transmission:F,transmissionMap:me,thicknessMap:K,gradientMap:se,opaque:y.transparent===!1&&y.blending===Bs&&y.alphaToCoverage===!1,alphaMap:Se,alphaTest:we,alphaHash:Ze,combine:y.combine,mapUv:et&&m(y.map.channel),aoMapUv:Kt&&m(y.aoMap.channel),lightMapUv:je&&m(y.lightMap.channel),bumpMapUv:Ke&&m(y.bumpMap.channel),normalMapUv:Oe&&m(y.normalMap.channel),displacementMapUv:ut&&m(y.displacementMap.channel),emissiveMapUv:Ue&&m(y.emissiveMap.channel),metalnessMapUv:C&&m(y.metalnessMap.channel),roughnessMapUv:E&&m(y.roughnessMap.channel),anisotropyMapUv:H&&m(y.anisotropyMap.channel),clearcoatMapUv:Q&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:O&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ue&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Le&&m(y.sheenRoughnessMap.channel),specularMapUv:Ae&&m(y.specularMap.channel),specularColorMapUv:Be&&m(y.specularColorMap.channel),specularIntensityMapUv:U&&m(y.specularIntensityMap.channel),transmissionMapUv:me&&m(y.transmissionMap.channel),thicknessMapUv:K&&m(y.thicknessMap.channel),alphaMapUv:Se&&m(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Oe||W),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!q.attributes.uv&&(et||Se),fog:!!ee,useFog:y.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:$.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:He,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:pn,decodeVideoTexture:et&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===_t,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===gi,flipSided:y.side===un,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Dt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&y.extensions.multiDraw===!0||We)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return tt.vertexUv1s=c.has(1),tt.vertexUv2s=c.has(2),tt.vertexUv3s=c.has(3),c.clear(),tt}function g(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)M.push(G),M.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(_(M,y),S(M,y),M.push(n.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function _(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),y.push(a.mask)}function b(y){const M=x[y.type];let G;if(M){const V=pi[M];G=TM.clone(V.uniforms)}else G=y.uniforms;return G}function A(y,M){let G;for(let V=0,$=u.length;V<$;V++){const ee=u[V];if(ee.cacheKey===M){G=ee,++G.usedTimes;break}}return G===void 0&&(G=new z2(n,M,y,s),u.push(G)),G}function T(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function X(){l.dispose()}return{getParameters:d,getProgramCacheKey:g,getUniforms:b,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:X}}function G2(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function W2(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $m(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function qm(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,f,p,v,x,m){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:x,group:m},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=x,d.group=m),e++,d}function a(h,f,p,v,x,m){const d=o(h,f,p,v,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,v,x,m){const d=o(h,f,p,v,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||W2),i.length>1&&i.sort(f||$m),r.length>1&&r.sort(f||$m)}function u(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function X2(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new qm,n.set(i,[o])):r>=s.length?(o=new qm,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function j2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new be};break;case"SpotLight":t={position:new L,direction:new L,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new L,halfWidth:new L,halfHeight:new L};break}return n[e.id]=t,t}}}function Y2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let $2=0;function q2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function K2(n){const e=new j2,t=Y2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const r=new L,s=new mt,o=new mt;function a(c){let u=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let p=0,v=0,x=0,m=0,d=0,g=0,_=0,S=0,b=0,A=0,T=0;c.sort(q2);for(let X=0,y=c.length;X<y;X++){const M=c[X],G=M.color,V=M.intensity,$=M.distance,ee=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=G.r*V,h+=G.g*V,f+=G.b*V;else if(M.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(M.sh.coefficients[q],V);T++}else if(M.isDirectionalLight){const q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const ne=M.shadow,N=t.get(M);N.shadowIntensity=ne.intensity,N.shadowBias=ne.bias,N.shadowNormalBias=ne.normalBias,N.shadowRadius=ne.radius,N.shadowMapSize=ne.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=ee,i.directionalShadowMatrix[p]=M.shadow.matrix,g++}i.directional[p]=q,p++}else if(M.isSpotLight){const q=e.get(M);q.position.setFromMatrixPosition(M.matrixWorld),q.color.copy(G).multiplyScalar(V),q.distance=$,q.coneCos=Math.cos(M.angle),q.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),q.decay=M.decay,i.spot[x]=q;const ne=M.shadow;if(M.map&&(i.spotLightMap[b]=M.map,b++,ne.updateMatrices(M),M.castShadow&&A++),i.spotLightMatrix[x]=ne.matrix,M.castShadow){const N=t.get(M);N.shadowIntensity=ne.intensity,N.shadowBias=ne.bias,N.shadowNormalBias=ne.normalBias,N.shadowRadius=ne.radius,N.shadowMapSize=ne.mapSize,i.spotShadow[x]=N,i.spotShadowMap[x]=ee,S++}x++}else if(M.isRectAreaLight){const q=e.get(M);q.color.copy(G).multiplyScalar(V),q.halfWidth.set(M.width*.5,0,0),q.halfHeight.set(0,M.height*.5,0),i.rectArea[m]=q,m++}else if(M.isPointLight){const q=e.get(M);if(q.color.copy(M.color).multiplyScalar(M.intensity),q.distance=M.distance,q.decay=M.decay,M.castShadow){const ne=M.shadow,N=t.get(M);N.shadowIntensity=ne.intensity,N.shadowBias=ne.bias,N.shadowNormalBias=ne.normalBias,N.shadowRadius=ne.radius,N.shadowMapSize=ne.mapSize,N.shadowCameraNear=ne.camera.near,N.shadowCameraFar=ne.camera.far,i.pointShadow[v]=N,i.pointShadowMap[v]=ee,i.pointShadowMatrix[v]=M.shadow.matrix,_++}i.point[v]=q,v++}else if(M.isHemisphereLight){const q=e.get(M);q.skyColor.copy(M.color).multiplyScalar(V),q.groundColor.copy(M.groundColor).multiplyScalar(V),i.hemi[d]=q,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==d||P.numDirectionalShadows!==g||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==b||P.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,P.directionalLength=p,P.pointLength=v,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=d,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=b,P.numLightProbes=T,i.version=$2++)}function l(c,u){let h=0,f=0,p=0,v=0,x=0;const m=u.matrixWorldInverse;for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(_.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Km(n){const e=new K2(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Z2(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Km(n),e.set(r,[a])):s>=o.length?(a=new Km(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class J2 extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=DS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q2 extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const eT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function nT(n,e,t){let i=new Dd;const r=new xe,s=new xe,o=new Ct,a=new J2({depthPacking:IS}),l=new Q2,c={},u=t.maxTextureSize,h={[xr]:un,[un]:xr,[gi]:gi},f=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:eT,fragmentShader:tT}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new dt(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rv;let d=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const X=n.getRenderTarget(),y=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),G=n.state;G.setBlending(mr),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const V=d!==bi&&this.type===bi,$=d===bi&&this.type!==bi;for(let ee=0,q=A.length;ee<q;ee++){const ne=A[ee],N=ne.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const re=N.getFrameExtents();if(r.multiply(re),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,N.mapSize.y=s.y)),N.map===null||V===!0||$===!0){const de=this.type!==bi?{minFilter:Vn,magFilter:Vn}:{};N.map!==null&&N.map.dispose(),N.map=new Zr(r.x,r.y,de),N.map.texture.name=ne.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const te=N.getViewportCount();for(let de=0;de<te;de++){const Ne=N.getViewport(de);o.set(s.x*Ne.x,s.y*Ne.y,s.x*Ne.z,s.y*Ne.w),G.viewport(o),N.updateMatrices(ne,de),i=N.getFrustum(),S(T,P,N.camera,ne,this.type)}N.isPointLightShadow!==!0&&this.type===bi&&g(N,P),N.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(X,y,M)};function g(A,T){const P=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Zr(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(T,null,P,f,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(T,null,P,p,x,null)}function _(A,T,P,X){let y=null;const M=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)y=M;else if(y=P.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=y.uuid,V=T.uuid;let $=c[G];$===void 0&&($={},c[G]=$);let ee=$[V];ee===void 0&&(ee=y.clone(),$[V]=ee,T.addEventListener("dispose",b)),y=ee}if(y.visible=T.visible,y.wireframe=T.wireframe,X===bi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=n.properties.get(y);G.light=P}return y}function S(A,T,P,X,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===bi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const V=e.update(A),$=A.material;if(Array.isArray($)){const ee=V.groups;for(let q=0,ne=ee.length;q<ne;q++){const N=ee[q],re=$[N.materialIndex];if(re&&re.visible){const te=_(A,re,X,y);A.onBeforeShadow(n,A,T,P,V,te,N),n.renderBufferDirect(P,null,V,te,A,N),A.onAfterShadow(n,A,T,P,V,te,N)}}}else if($.visible){const ee=_(A,$,X,y);A.onBeforeShadow(n,A,T,P,V,ee,null),n.renderBufferDirect(P,null,V,ee,A,null),A.onAfterShadow(n,A,T,P,V,ee,null)}}const G=A.children;for(let V=0,$=G.length;V<$;V++)S(G[V],T,P,X,y)}function b(A){A.target.removeEventListener("dispose",b);for(const P in c){const X=c[P],y=A.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}const iT={[Vh]:Gh,[Wh]:Yh,[Xh]:$h,[Zs]:jh,[Gh]:Vh,[Yh]:Wh,[$h]:Xh,[jh]:Zs};function rT(n){function e(){let U=!1;const me=new Ct;let K=null;const se=new Ct(0,0,0,0);return{setMask:function(Se){K!==Se&&!U&&(n.colorMask(Se,Se,Se,Se),K=Se)},setLocked:function(Se){U=Se},setClear:function(Se,we,Ze,Dt,pn){pn===!0&&(Se*=Dt,we*=Dt,Ze*=Dt),me.set(Se,we,Ze,Dt),se.equals(me)===!1&&(n.clearColor(Se,we,Ze,Dt),se.copy(me))},reset:function(){U=!1,K=null,se.set(-1,0,0,0)}}}function t(){let U=!1,me=!1,K=null,se=null,Se=null;return{setReversed:function(we){me=we},setTest:function(we){we?ve(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(we){K!==we&&!U&&(n.depthMask(we),K=we)},setFunc:function(we){if(me&&(we=iT[we]),se!==we){switch(we){case Vh:n.depthFunc(n.NEVER);break;case Gh:n.depthFunc(n.ALWAYS);break;case Wh:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case Xh:n.depthFunc(n.EQUAL);break;case jh:n.depthFunc(n.GEQUAL);break;case Yh:n.depthFunc(n.GREATER);break;case $h:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=we}},setLocked:function(we){U=we},setClear:function(we){Se!==we&&(n.clearDepth(we),Se=we)},reset:function(){U=!1,K=null,se=null,Se=null}}}function i(){let U=!1,me=null,K=null,se=null,Se=null,we=null,Ze=null,Dt=null,pn=null;return{setTest:function(tt){U||(tt?ve(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(tt){me!==tt&&!U&&(n.stencilMask(tt),me=tt)},setFunc:function(tt,mn,Si){(K!==tt||se!==mn||Se!==Si)&&(n.stencilFunc(tt,mn,Si),K=tt,se=mn,Se=Si)},setOp:function(tt,mn,Si){(we!==tt||Ze!==mn||Dt!==Si)&&(n.stencilOp(tt,mn,Si),we=tt,Ze=mn,Dt=Si)},setLocked:function(tt){U=tt},setClear:function(tt){pn!==tt&&(n.clearStencil(tt),pn=tt)},reset:function(){U=!1,me=null,K=null,se=null,Se=null,we=null,Ze=null,Dt=null,pn=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,f=[],p=null,v=!1,x=null,m=null,d=null,g=null,_=null,S=null,b=null,A=new be(0,0,0),T=0,P=!1,X=null,y=null,M=null,G=null,V=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,q=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ne)[1]),ee=q>=1):ne.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),ee=q>=2);let N=null,re={};const te=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ne=new Ct().fromArray(te),He=new Ct().fromArray(de);function Z(U,me,K,se){const Se=new Uint8Array(4),we=n.createTexture();n.bindTexture(U,we),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ze=0;Ze<K;Ze++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(me+Ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return we}const ae={};ae[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),ae[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ae[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),s.setFunc(Zs),je(!1),Ke(sm),ve(n.CULL_FACE),I(mr);function ve(U){c[U]!==!0&&(n.enable(U),c[U]=!0)}function _e(U){c[U]!==!1&&(n.disable(U),c[U]=!1)}function Ce(U,me){return u[U]!==me?(n.bindFramebuffer(U,me),u[U]=me,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function ye(U,me){let K=f,se=!1;if(U){K=h.get(me),K===void 0&&(K=[],h.set(me,K));const Se=U.textures;if(K.length!==Se.length||K[0]!==n.COLOR_ATTACHMENT0){for(let we=0,Ze=Se.length;we<Ze;we++)K[we]=n.COLOR_ATTACHMENT0+we;K.length=Se.length,se=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,se=!0);se&&n.drawBuffers(K)}function We(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const et={[Fr]:n.FUNC_ADD,[oS]:n.FUNC_SUBTRACT,[aS]:n.FUNC_REVERSE_SUBTRACT};et[lS]=n.MIN,et[cS]=n.MAX;const $e={[uS]:n.ZERO,[hS]:n.ONE,[fS]:n.SRC_COLOR,[Bh]:n.SRC_ALPHA,[_S]:n.SRC_ALPHA_SATURATE,[gS]:n.DST_COLOR,[pS]:n.DST_ALPHA,[dS]:n.ONE_MINUS_SRC_COLOR,[Hh]:n.ONE_MINUS_SRC_ALPHA,[vS]:n.ONE_MINUS_DST_COLOR,[mS]:n.ONE_MINUS_DST_ALPHA,[yS]:n.CONSTANT_COLOR,[xS]:n.ONE_MINUS_CONSTANT_COLOR,[SS]:n.CONSTANT_ALPHA,[MS]:n.ONE_MINUS_CONSTANT_ALPHA};function I(U,me,K,se,Se,we,Ze,Dt,pn,tt){if(U===mr){v===!0&&(_e(n.BLEND),v=!1);return}if(v===!1&&(ve(n.BLEND),v=!0),U!==sS){if(U!==x||tt!==P){if((m!==Fr||_!==Fr)&&(n.blendEquation(n.FUNC_ADD),m=Fr,_=Fr),tt)switch(U){case Bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ha:n.blendFunc(n.ONE,n.ONE);break;case om:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case am:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ha:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case om:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case am:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,g=null,S=null,b=null,A.set(0,0,0),T=0,x=U,P=tt}return}Se=Se||me,we=we||K,Ze=Ze||se,(me!==m||Se!==_)&&(n.blendEquationSeparate(et[me],et[Se]),m=me,_=Se),(K!==d||se!==g||we!==S||Ze!==b)&&(n.blendFuncSeparate($e[K],$e[se],$e[we],$e[Ze]),d=K,g=se,S=we,b=Ze),(Dt.equals(A)===!1||pn!==T)&&(n.blendColor(Dt.r,Dt.g,Dt.b,pn),A.copy(Dt),T=pn),x=U,P=!1}function Kt(U,me){U.side===gi?_e(n.CULL_FACE):ve(n.CULL_FACE);let K=U.side===un;me&&(K=!K),je(K),U.blending===Bs&&U.transparent===!1?I(mr):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const se=U.stencilWrite;o.setTest(se),se&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function je(U){X!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),X=U)}function Ke(U){U!==iS?(ve(n.CULL_FACE),U!==y&&(U===sm?n.cullFace(n.BACK):U===rS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),y=U}function Oe(U){U!==M&&(ee&&n.lineWidth(U),M=U)}function ut(U,me,K){U?(ve(n.POLYGON_OFFSET_FILL),(G!==me||V!==K)&&(n.polygonOffset(me,K),G=me,V=K)):_e(n.POLYGON_OFFSET_FILL)}function Ue(U){U?ve(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function C(U){U===void 0&&(U=n.TEXTURE0+$-1),N!==U&&(n.activeTexture(U),N=U)}function E(U,me,K){K===void 0&&(N===null?K=n.TEXTURE0+$-1:K=N);let se=re[K];se===void 0&&(se={type:void 0,texture:void 0},re[K]=se),(se.type!==U||se.texture!==me)&&(N!==K&&(n.activeTexture(K),N=K),n.bindTexture(U,me||ae[U]),se.type=U,se.texture=me)}function W(){const U=re[N];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(U){Ne.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),Ne.copy(U))}function he(U){He.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),He.copy(U))}function Le(U,me){let K=l.get(me);K===void 0&&(K=new WeakMap,l.set(me,K));let se=K.get(U);se===void 0&&(se=n.getUniformBlockIndex(me,U.name),K.set(U,se))}function Ae(U,me){const se=l.get(me).get(U);a.get(me)!==se&&(n.uniformBlockBinding(me,se,U.__bindingPointIndex),a.set(me,se))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},N=null,re={},u={},h=new WeakMap,f=[],p=null,v=!1,x=null,m=null,d=null,g=null,_=null,S=null,b=null,A=new be(0,0,0),T=0,P=!1,X=null,y=null,M=null,G=null,V=null,Ne.set(0,0,n.canvas.width,n.canvas.height),He.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ve,disable:_e,bindFramebuffer:Ce,drawBuffers:ye,useProgram:We,setBlending:I,setMaterial:Kt,setFlipSided:je,setCullFace:Ke,setLineWidth:Oe,setPolygonOffset:ut,setScissorTest:Ue,activeTexture:C,bindTexture:E,unbindTexture:W,compressedTexImage2D:ie,compressedTexImage3D:oe,texImage2D:le,texImage3D:ue,updateUBOMapping:Le,uniformBlockBinding:Ae,texStorage2D:Q,texStorage3D:O,texSubImage2D:R,texSubImage3D:D,compressedTexSubImage2D:F,compressedTexSubImage3D:H,scissor:pe,viewport:he,reset:Be}}function Zm(n,e,t,i){const r=sT(i);switch(t){case Uv:return n*e;case Ov:return n*e;case zv:return n*e*2;case kv:return n*e/r.components*r.byteLength;case Rd:return n*e/r.components*r.byteLength;case Bv:return n*e*2/r.components*r.byteLength;case Cd:return n*e*2/r.components*r.byteLength;case Fv:return n*e*3/r.components*r.byteLength;case si:return n*e*4/r.components*r.byteLength;case bd:return n*e*4/r.components*r.byteLength;case Tl:case Al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qh:case tf:return Math.max(n,16)*Math.max(e,8)/4;case Jh:case ef:return Math.max(n,8)*Math.max(e,8)/2;case nf:case rf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case of:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case af:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case lf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case uf:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case hf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ff:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case mf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case _f:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bl:case xf:case Sf:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hv:case Mf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ef:case wf:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sT(n){switch(n){case Vi:case Dv:return{byteLength:1,components:1};case fa:case Iv:case _a:return{byteLength:2,components:1};case Td:case Ad:return{byteLength:2,components:4};case Kr:case wd:case Ni:return{byteLength:4,components:1};case Nv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function oT(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xe,u=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,E){return p?new OffscreenCanvas(C,E):lc("canvas")}function x(C,E,W){let ie=1;const oe=Ue(C);if((oe.width>W||oe.height>W)&&(ie=W/Math.max(oe.width,oe.height)),ie<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const R=Math.floor(ie*oe.width),D=Math.floor(ie*oe.height);h===void 0&&(h=v(R,D));const F=E?v(R,D):h;return F.width=R,F.height=D,F.getContext("2d").drawImage(C,0,0,R,D),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+R+"x"+D+")."),F}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==Vn&&C.minFilter!==ii}function d(C){n.generateMipmap(C)}function g(C,E,W,ie,oe=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let R=E;if(E===n.RED&&(W===n.FLOAT&&(R=n.R32F),W===n.HALF_FLOAT&&(R=n.R16F),W===n.UNSIGNED_BYTE&&(R=n.R8)),E===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(R=n.R8UI),W===n.UNSIGNED_SHORT&&(R=n.R16UI),W===n.UNSIGNED_INT&&(R=n.R32UI),W===n.BYTE&&(R=n.R8I),W===n.SHORT&&(R=n.R16I),W===n.INT&&(R=n.R32I)),E===n.RG&&(W===n.FLOAT&&(R=n.RG32F),W===n.HALF_FLOAT&&(R=n.RG16F),W===n.UNSIGNED_BYTE&&(R=n.RG8)),E===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(R=n.RG8UI),W===n.UNSIGNED_SHORT&&(R=n.RG16UI),W===n.UNSIGNED_INT&&(R=n.RG32UI),W===n.BYTE&&(R=n.RG8I),W===n.SHORT&&(R=n.RG16I),W===n.INT&&(R=n.RG32I)),E===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(R=n.RGB8UI),W===n.UNSIGNED_SHORT&&(R=n.RGB16UI),W===n.UNSIGNED_INT&&(R=n.RGB32UI),W===n.BYTE&&(R=n.RGB8I),W===n.SHORT&&(R=n.RGB16I),W===n.INT&&(R=n.RGB32I)),E===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(R=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(R=n.RGBA16UI),W===n.UNSIGNED_INT&&(R=n.RGBA32UI),W===n.BYTE&&(R=n.RGBA8I),W===n.SHORT&&(R=n.RGBA16I),W===n.INT&&(R=n.RGBA32I)),E===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(R=n.RGB9_E5),E===n.RGBA){const D=oe?rc:ot.getTransfer(ie);W===n.FLOAT&&(R=n.RGBA32F),W===n.HALF_FLOAT&&(R=n.RGBA16F),W===n.UNSIGNED_BYTE&&(R=D===_t?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(R=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(R=n.RGB5_A1)}return(R===n.R16F||R===n.R32F||R===n.RG16F||R===n.RG32F||R===n.RGBA16F||R===n.RGBA32F)&&e.get("EXT_color_buffer_float"),R}function _(C,E){let W;return C?E===null||E===Kr||E===eo?W=n.DEPTH24_STENCIL8:E===Ni?W=n.DEPTH32F_STENCIL8:E===fa&&(W=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Kr||E===eo?W=n.DEPTH_COMPONENT24:E===Ni?W=n.DEPTH_COMPONENT32F:E===fa&&(W=n.DEPTH_COMPONENT16),W}function S(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vn&&C.minFilter!==ii?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function b(C){const E=C.target;E.removeEventListener("dispose",b),T(E),E.isVideoTexture&&u.delete(E)}function A(C){const E=C.target;E.removeEventListener("dispose",A),X(E)}function T(C){const E=i.get(C);if(E.__webglInit===void 0)return;const W=C.source,ie=f.get(W);if(ie){const oe=ie[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&P(C),Object.keys(ie).length===0&&f.delete(W)}i.remove(C)}function P(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const W=C.source,ie=f.get(W);delete ie[E.__cacheKey],o.memory.textures--}function X(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let oe=0;oe<E.__webglFramebuffer[ie].length;oe++)n.deleteFramebuffer(E.__webglFramebuffer[ie][oe]);else n.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)n.deleteFramebuffer(E.__webglFramebuffer[ie]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=C.textures;for(let ie=0,oe=W.length;ie<oe;ie++){const R=i.get(W[ie]);R.__webglTexture&&(n.deleteTexture(R.__webglTexture),o.memory.textures--),i.remove(W[ie])}i.remove(C)}let y=0;function M(){y=0}function G(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function V(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function $(C,E){const W=i.get(C);if(C.isVideoTexture&&Oe(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const ie=C.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(W,C,E);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+E)}function ee(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){He(W,C,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+E)}function q(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){He(W,C,E);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+E)}function ne(C,E){const W=i.get(C);if(C.version>0&&W.__version!==C.version){Z(W,C,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+E)}const N={[ic]:n.REPEAT,[Hr]:n.CLAMP_TO_EDGE,[Zh]:n.MIRRORED_REPEAT},re={[Vn]:n.NEAREST,[LS]:n.NEAREST_MIPMAP_NEAREST,[ka]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[cu]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},te={[US]:n.NEVER,[HS]:n.ALWAYS,[FS]:n.LESS,[Gv]:n.LEQUAL,[OS]:n.EQUAL,[BS]:n.GEQUAL,[zS]:n.GREATER,[kS]:n.NOTEQUAL};function de(C,E){if(E.type===Ni&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ii||E.magFilter===cu||E.magFilter===ka||E.magFilter===Vr||E.minFilter===ii||E.minFilter===cu||E.minFilter===ka||E.minFilter===Vr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,N[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,N[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,N[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,re[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vn||E.minFilter!==ka&&E.minFilter!==Vr||E.type===Ni&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ne(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",b));const ie=E.source;let oe=f.get(ie);oe===void 0&&(oe={},f.set(ie,oe));const R=V(E);if(R!==C.__cacheKey){oe[R]===void 0&&(oe[R]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),oe[R].usedTimes++;const D=oe[C.__cacheKey];D!==void 0&&(oe[C.__cacheKey].usedTimes--,D.usedTimes===0&&P(E)),C.__cacheKey=R,C.__webglTexture=oe[R].texture}return W}function He(C,E,W){let ie=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=n.TEXTURE_3D);const oe=Ne(C,E),R=E.source;t.bindTexture(ie,C.__webglTexture,n.TEXTURE0+W);const D=i.get(R);if(R.version!==D.__version||oe===!0){t.activeTexture(n.TEXTURE0+W);const F=ot.getPrimaries(ot.workingColorSpace),H=E.colorSpace===rr?null:ot.getPrimaries(E.colorSpace),Q=E.colorSpace===rr||F===H?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let O=x(E.image,!1,r.maxTextureSize);O=ut(E,O);const le=s.convert(E.format,E.colorSpace),ue=s.convert(E.type);let pe=g(E.internalFormat,le,ue,E.colorSpace,E.isVideoTexture);de(ie,E);let he;const Le=E.mipmaps,Ae=E.isVideoTexture!==!0,Be=D.__version===void 0||oe===!0,U=R.dataReady,me=S(E,O);if(E.isDepthTexture)pe=_(E.format===to,E.type),Be&&(Ae?t.texStorage2D(n.TEXTURE_2D,1,pe,O.width,O.height):t.texImage2D(n.TEXTURE_2D,0,pe,O.width,O.height,0,le,ue,null));else if(E.isDataTexture)if(Le.length>0){Ae&&Be&&t.texStorage2D(n.TEXTURE_2D,me,pe,Le[0].width,Le[0].height);for(let K=0,se=Le.length;K<se;K++)he=Le[K],Ae?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,he.width,he.height,le,ue,he.data):t.texImage2D(n.TEXTURE_2D,K,pe,he.width,he.height,0,le,ue,he.data);E.generateMipmaps=!1}else Ae?(Be&&t.texStorage2D(n.TEXTURE_2D,me,pe,O.width,O.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,O.width,O.height,le,ue,O.data)):t.texImage2D(n.TEXTURE_2D,0,pe,O.width,O.height,0,le,ue,O.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ae&&Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,pe,Le[0].width,Le[0].height,O.depth);for(let K=0,se=Le.length;K<se;K++)if(he=Le[K],E.format!==si)if(le!==null)if(Ae){if(U)if(E.layerUpdates.size>0){const Se=Zm(he.width,he.height,E.format,E.type);for(const we of E.layerUpdates){const Ze=he.data.subarray(we*Se/he.data.BYTES_PER_ELEMENT,(we+1)*Se/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,we,he.width,he.height,1,le,Ze,0,0)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,O.depth,le,he.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,pe,he.width,he.height,O.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,he.width,he.height,O.depth,le,ue,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,pe,he.width,he.height,O.depth,0,le,ue,he.data)}else{Ae&&Be&&t.texStorage2D(n.TEXTURE_2D,me,pe,Le[0].width,Le[0].height);for(let K=0,se=Le.length;K<se;K++)he=Le[K],E.format!==si?le!==null?Ae?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,he.width,he.height,le,he.data):t.compressedTexImage2D(n.TEXTURE_2D,K,pe,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,he.width,he.height,le,ue,he.data):t.texImage2D(n.TEXTURE_2D,K,pe,he.width,he.height,0,le,ue,he.data)}else if(E.isDataArrayTexture)if(Ae){if(Be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,pe,O.width,O.height,O.depth),U)if(E.layerUpdates.size>0){const K=Zm(O.width,O.height,E.format,E.type);for(const se of E.layerUpdates){const Se=O.data.subarray(se*K/O.data.BYTES_PER_ELEMENT,(se+1)*K/O.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,O.width,O.height,1,le,ue,Se)}E.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,le,ue,O.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,O.width,O.height,O.depth,0,le,ue,O.data);else if(E.isData3DTexture)Ae?(Be&&t.texStorage3D(n.TEXTURE_3D,me,pe,O.width,O.height,O.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,le,ue,O.data)):t.texImage3D(n.TEXTURE_3D,0,pe,O.width,O.height,O.depth,0,le,ue,O.data);else if(E.isFramebufferTexture){if(Be)if(Ae)t.texStorage2D(n.TEXTURE_2D,me,pe,O.width,O.height);else{let K=O.width,se=O.height;for(let Se=0;Se<me;Se++)t.texImage2D(n.TEXTURE_2D,Se,pe,K,se,0,le,ue,null),K>>=1,se>>=1}}else if(Le.length>0){if(Ae&&Be){const K=Ue(Le[0]);t.texStorage2D(n.TEXTURE_2D,me,pe,K.width,K.height)}for(let K=0,se=Le.length;K<se;K++)he=Le[K],Ae?U&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,le,ue,he):t.texImage2D(n.TEXTURE_2D,K,pe,le,ue,he);E.generateMipmaps=!1}else if(Ae){if(Be){const K=Ue(O);t.texStorage2D(n.TEXTURE_2D,me,pe,K.width,K.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,ue,O)}else t.texImage2D(n.TEXTURE_2D,0,pe,le,ue,O);m(E)&&d(ie),D.__version=R.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Z(C,E,W){if(E.image.length!==6)return;const ie=Ne(C,E),oe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+W);const R=i.get(oe);if(oe.version!==R.__version||ie===!0){t.activeTexture(n.TEXTURE0+W);const D=ot.getPrimaries(ot.workingColorSpace),F=E.colorSpace===rr?null:ot.getPrimaries(E.colorSpace),H=E.colorSpace===rr||D===F?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,H);const Q=E.isCompressedTexture||E.image[0].isCompressedTexture,O=E.image[0]&&E.image[0].isDataTexture,le=[];for(let se=0;se<6;se++)!Q&&!O?le[se]=x(E.image[se],!0,r.maxCubemapSize):le[se]=O?E.image[se].image:E.image[se],le[se]=ut(E,le[se]);const ue=le[0],pe=s.convert(E.format,E.colorSpace),he=s.convert(E.type),Le=g(E.internalFormat,pe,he,E.colorSpace),Ae=E.isVideoTexture!==!0,Be=R.__version===void 0||ie===!0,U=oe.dataReady;let me=S(E,ue);de(n.TEXTURE_CUBE_MAP,E);let K;if(Q){Ae&&Be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Le,ue.width,ue.height);for(let se=0;se<6;se++){K=le[se].mipmaps;for(let Se=0;Se<K.length;Se++){const we=K[Se];E.format!==si?pe!==null?Ae?U&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,we.width,we.height,pe,we.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,Le,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,0,0,we.width,we.height,pe,he,we.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se,Le,we.width,we.height,0,pe,he,we.data)}}}else{if(K=E.mipmaps,Ae&&Be){K.length>0&&me++;const se=Ue(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Le,se.width,se.height)}for(let se=0;se<6;se++)if(O){Ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,le[se].width,le[se].height,pe,he,le[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Le,le[se].width,le[se].height,0,pe,he,le[se].data);for(let Se=0;Se<K.length;Se++){const Ze=K[Se].image[se].image;Ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,Ze.width,Ze.height,pe,he,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,Le,Ze.width,Ze.height,0,pe,he,Ze.data)}}else{Ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe,he,le[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Le,pe,he,le[se]);for(let Se=0;Se<K.length;Se++){const we=K[Se];Ae?U&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,0,0,pe,he,we.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Se+1,Le,pe,he,we.image[se])}}}m(E)&&d(n.TEXTURE_CUBE_MAP),R.__version=oe.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ae(C,E,W,ie,oe,R){const D=s.convert(W.format,W.colorSpace),F=s.convert(W.type),H=g(W.internalFormat,D,F,W.colorSpace);if(!i.get(E).__hasExternalTextures){const O=Math.max(1,E.width>>R),le=Math.max(1,E.height>>R);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,R,H,O,le,E.depth,0,D,F,null):t.texImage2D(oe,R,H,O,le,0,D,F,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,oe,i.get(W).__webglTexture,0,je(E)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,oe,i.get(W).__webglTexture,R),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(C,E,W){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const ie=E.depthTexture,oe=ie&&ie.isDepthTexture?ie.type:null,R=_(E.stencilBuffer,oe),D=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,F=je(E);Ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,F,R,E.width,E.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,F,R,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,R,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,D,n.RENDERBUFFER,C)}else{const ie=E.textures;for(let oe=0;oe<ie.length;oe++){const R=ie[oe],D=s.convert(R.format,R.colorSpace),F=s.convert(R.type),H=g(R.internalFormat,D,F,R.colorSpace),Q=je(E);W&&Ke(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Q,H,E.width,E.height):Ke(E)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Q,H,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,H,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const ie=i.get(E.depthTexture).__webglTexture,oe=je(E);if(E.depthTexture.format===Hs)Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(E.depthTexture.format===to)Ke(E)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ce(C){const E=i.get(C),W=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ie=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const oe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",oe)};ie.addEventListener("dispose",oe),E.__depthDisposeCallback=oe}E.__boundDepthTexture=ie}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");_e(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=n.createRenderbuffer(),ve(E.__webglDepthbuffer[ie],C,!1);else{const oe=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,R=E.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,R),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,R)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),ve(E.__webglDepthbuffer,C,!1);else{const ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(C,E,W){const ie=i.get(C);E!==void 0&&ae(ie.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Ce(C)}function We(C){const E=C.texture,W=i.get(C),ie=i.get(E);C.addEventListener("dispose",A);const oe=C.textures,R=C.isWebGLCubeRenderTarget===!0,D=oe.length>1;if(D||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=E.version,o.memory.textures++),R){W.__webglFramebuffer=[];for(let F=0;F<6;F++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[F]=[];for(let H=0;H<E.mipmaps.length;H++)W.__webglFramebuffer[F][H]=n.createFramebuffer()}else W.__webglFramebuffer[F]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let F=0;F<E.mipmaps.length;F++)W.__webglFramebuffer[F]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(D)for(let F=0,H=oe.length;F<H;F++){const Q=i.get(oe[F]);Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&Ke(C)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let F=0;F<oe.length;F++){const H=oe[F];W.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[F]);const Q=s.convert(H.format,H.colorSpace),O=s.convert(H.type),le=g(H.internalFormat,Q,O,H.colorSpace,C.isXRRenderTarget===!0),ue=je(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,le,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+F,n.RENDERBUFFER,W.__webglColorRenderbuffer[F])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(R){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),de(n.TEXTURE_CUBE_MAP,E);for(let F=0;F<6;F++)if(E.mipmaps&&E.mipmaps.length>0)for(let H=0;H<E.mipmaps.length;H++)ae(W.__webglFramebuffer[F][H],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,H);else ae(W.__webglFramebuffer[F],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(E)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(D){for(let F=0,H=oe.length;F<H;F++){const Q=oe[F],O=i.get(Q);t.bindTexture(n.TEXTURE_2D,O.__webglTexture),de(n.TEXTURE_2D,Q),ae(W.__webglFramebuffer,C,Q,n.COLOR_ATTACHMENT0+F,n.TEXTURE_2D,0),m(Q)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let F=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(F=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(F,ie.__webglTexture),de(F,E),E.mipmaps&&E.mipmaps.length>0)for(let H=0;H<E.mipmaps.length;H++)ae(W.__webglFramebuffer[H],C,E,n.COLOR_ATTACHMENT0,F,H);else ae(W.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,F,0);m(E)&&d(F),t.unbindTexture()}C.depthBuffer&&Ce(C)}function et(C){const E=C.textures;for(let W=0,ie=E.length;W<ie;W++){const oe=E[W];if(m(oe)){const R=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,D=i.get(oe).__webglTexture;t.bindTexture(R,D),d(R),t.unbindTexture()}}}const $e=[],I=[];function Kt(C){if(C.samples>0){if(Ke(C)===!1){const E=C.textures,W=C.width,ie=C.height;let oe=n.COLOR_BUFFER_BIT;const R=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,D=i.get(C),F=E.length>1;if(F)for(let H=0;H<E.length;H++)t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,D.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglFramebuffer);for(let H=0;H<E.length;H++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),F){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,D.__webglColorRenderbuffer[H]);const Q=i.get(E[H]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,W,ie,0,0,W,ie,oe,n.NEAREST),l===!0&&($e.length=0,I.length=0,$e.push(n.COLOR_ATTACHMENT0+H),C.depthBuffer&&C.resolveDepthBuffer===!1&&($e.push(R),I.push(R),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),F)for(let H=0;H<E.length;H++){t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.RENDERBUFFER,D.__webglColorRenderbuffer[H]);const Q=i.get(E[H]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,D.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+H,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,D.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function je(C){return Math.min(r.maxSamples,C.samples)}function Ke(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Oe(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ut(C,E){const W=C.colorSpace,ie=C.format,oe=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==wr&&W!==rr&&(ot.getTransfer(W)===_t?(ie!==si||oe!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=M,this.setTexture2D=$,this.setTexture2DArray=ee,this.setTexture3D=q,this.setTextureCube=ne,this.rebindTextures=ye,this.setupRenderTarget=We,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Ke}function aT(n,e){function t(i,r=rr){let s;const o=ot.getTransfer(r);if(i===Vi)return n.UNSIGNED_BYTE;if(i===Td)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ad)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Nv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dv)return n.BYTE;if(i===Iv)return n.SHORT;if(i===fa)return n.UNSIGNED_SHORT;if(i===wd)return n.INT;if(i===Kr)return n.UNSIGNED_INT;if(i===Ni)return n.FLOAT;if(i===_a)return n.HALF_FLOAT;if(i===Uv)return n.ALPHA;if(i===Fv)return n.RGB;if(i===si)return n.RGBA;if(i===Ov)return n.LUMINANCE;if(i===zv)return n.LUMINANCE_ALPHA;if(i===Hs)return n.DEPTH_COMPONENT;if(i===to)return n.DEPTH_STENCIL;if(i===kv)return n.RED;if(i===Rd)return n.RED_INTEGER;if(i===Bv)return n.RG;if(i===Cd)return n.RG_INTEGER;if(i===bd)return n.RGBA_INTEGER;if(i===Tl||i===Al||i===Rl||i===Cl)if(o===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Tl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Tl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Jh||i===Qh||i===ef||i===tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Jh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nf||i===rf||i===sf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nf||i===rf)return o===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===of||i===af||i===lf||i===cf||i===uf||i===hf||i===ff||i===df||i===pf||i===mf||i===gf||i===vf||i===_f||i===yf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===of)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===af)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ff)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===df)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_f)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yf)return o===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===bl||i===xf||i===Sf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===bl)return o===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hv||i===Mf||i===Ef||i===wf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===bl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Mf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ef)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class lT extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class St extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cT={type:"move"};class Ou{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,v=.005;c.inputState.pinching&&f>p+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const uT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class fT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Gi({vertexShader:uT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new ti(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dT extends ao{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,v=null;const x=new fT,m=t.getContextAttributes();let d=null,g=null;const _=[],S=[],b=new xe;let A=null;const T=new Rn;T.layers.enable(1),T.viewport=new Ct;const P=new Rn;P.layers.enable(2),P.viewport=new Ct;const X=[T,P],y=new lT;y.layers.enable(1),y.layers.enable(2);let M=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=_[Z];return ae===void 0&&(ae=new Ou,_[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=_[Z];return ae===void 0&&(ae=new Ou,_[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=_[Z];return ae===void 0&&(ae=new Ou,_[Z]=ae),ae.getHandSpace()};function V(Z){const ae=S.indexOf(Z.inputSource);if(ae===-1)return;const ve=_[ae];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||o),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<_.length;Z++){const ae=S[Z];ae!==null&&(S[Z]=null,_[Z].disconnect(ae))}M=null,G=null,x.reset(),e.setRenderTarget(d),p=null,f=null,h=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ee),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Zr(p.framebufferWidth,p.framebufferHeight,{format:si,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,ve=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?to:Hs,ve=m.stencil?eo:Kr);const Ce={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Ce),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Zr(f.textureWidth,f.textureHeight,{format:si,type:Vi,depthTexture:new i_(f.textureWidth,f.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(Z){for(let ae=0;ae<Z.removed.length;ae++){const ve=Z.removed[ae],_e=S.indexOf(ve);_e>=0&&(S[_e]=null,_[_e].disconnect(ve))}for(let ae=0;ae<Z.added.length;ae++){const ve=Z.added[ae];let _e=S.indexOf(ve);if(_e===-1){for(let ye=0;ye<_.length;ye++)if(ye>=S.length){S.push(ve),_e=ye;break}else if(S[ye]===null){S[ye]=ve,_e=ye;break}if(_e===-1)break}const Ce=_[_e];Ce&&Ce.connect(ve)}}const q=new L,ne=new L;function N(Z,ae,ve){q.setFromMatrixPosition(ae.matrixWorld),ne.setFromMatrixPosition(ve.matrixWorld);const _e=q.distanceTo(ne),Ce=ae.projectionMatrix.elements,ye=ve.projectionMatrix.elements,We=Ce[14]/(Ce[10]-1),et=Ce[14]/(Ce[10]+1),$e=(Ce[9]+1)/Ce[5],I=(Ce[9]-1)/Ce[5],Kt=(Ce[8]-1)/Ce[0],je=(ye[8]+1)/ye[0],Ke=We*Kt,Oe=We*je,ut=_e/(-Kt+je),Ue=ut*-Kt;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ue),Z.translateZ(ut),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ce[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const C=We+ut,E=et+ut,W=Ke-Ue,ie=Oe+(_e-Ue),oe=$e*et/E*C,R=I*et/E*C;Z.projectionMatrix.makePerspective(W,ie,oe,R,C,E),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ae=Z.near,ve=Z.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(ve=x.depthFar)),y.near=P.near=T.near=ae,y.far=P.far=T.far=ve,(M!==y.near||G!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),M=y.near,G=y.far);const _e=Z.parent,Ce=y.cameras;re(y,_e);for(let ye=0;ye<Ce.length;ye++)re(Ce[ye],_e);Ce.length===2?N(y,T,P):y.projectionMatrix.copy(T.projectionMatrix),te(Z,y,_e)};function te(Z,ae,ve){ve===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=no*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let de=null;function Ne(Z,ae){if(u=ae.getViewerPose(c||o),v=ae,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let _e=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,_e=!0);for(let ye=0;ye<ve.length;ye++){const We=ve[ye];let et=null;if(p!==null)et=p.getViewport(We);else{const I=h.getViewSubImage(f,We);et=I.viewport,ye===0&&(e.setRenderTargetTextures(g,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(g))}let $e=X[ye];$e===void 0&&($e=new Rn,$e.layers.enable(ye),$e.viewport=new Ct,X[ye]=$e),$e.matrix.fromArray(We.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(We.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(et.x,et.y,et.width,et.height),ye===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),_e===!0&&y.cameras.push($e)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const ye=h.getDepthInformation(ve[0]);ye&&ye.isValid&&ye.texture&&x.init(e,ye,r.renderState)}}for(let ve=0;ve<_.length;ve++){const _e=S[ve],Ce=_[ve];_e!==null&&Ce!==void 0&&Ce.update(_e,ae,c||o)}de&&de(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),v=null}const He=new t_;He.setAnimationLoop(Ne),this.setAnimationLoop=function(Z){de=Z},this.dispose=function(){}}}const Lr=new ci,pT=new mt;function mT(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Jv(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,Lr.copy(S),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(pT.makeRotationFromEuler(Lr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gT(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function c(g,_){let S=r[g.id];S===void 0&&(v(g),S=u(g),r[g.id]=S,g.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(f(g),s[g.id]=A)}function u(g){const _=h();g.__bindingPointIndex=_;const S=n.createBuffer(),b=g.__size,A=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,b,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const _=r[g.id],S=g.uniforms,b=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let A=0,T=S.length;A<T;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let X=0,y=P.length;X<y;X++){const M=P[X];if(p(M,A,X,b)===!0){const G=M.__offset,V=Array.isArray(M.value)?M.value:[M.value];let $=0;for(let ee=0;ee<V.length;ee++){const q=V[ee],ne=x(q);typeof q=="number"||typeof q=="boolean"?(M.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,G+$,M.__data)):q.isMatrix3?(M.__data[0]=q.elements[0],M.__data[1]=q.elements[1],M.__data[2]=q.elements[2],M.__data[3]=0,M.__data[4]=q.elements[3],M.__data[5]=q.elements[4],M.__data[6]=q.elements[5],M.__data[7]=0,M.__data[8]=q.elements[6],M.__data[9]=q.elements[7],M.__data[10]=q.elements[8],M.__data[11]=0):(q.toArray(M.__data,$),$+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,G,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,_,S,b){const A=g.value,T=_+"_"+S;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const P=b[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(g){const _=g.uniforms;let S=0;const b=16;for(let T=0,P=_.length;T<P;T++){const X=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,M=X.length;y<M;y++){const G=X[y],V=Array.isArray(G.value)?G.value:[G.value];for(let $=0,ee=V.length;$<ee;$++){const q=V[$],ne=x(q),N=S%b,re=N%ne.boundary,te=N+re;S+=re,te!==0&&b-te<ne.storage&&(S+=b-te),G.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=S,S+=ne.storage}}}const A=S%b;return A>0&&(S+=b-A),g.__size=S,g.__cache={},this}function x(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class vT{constructor(e={}){const{canvas:t=rM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let x=null,m=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fn,this.toneMapping=gr,this.toneMappingExposure=1;const _=this;let S=!1,b=0,A=0,T=null,P=-1,X=null;const y=new Ct,M=new Ct;let G=null;const V=new be(0);let $=0,ee=t.width,q=t.height,ne=1,N=null,re=null;const te=new Ct(0,0,ee,q),de=new Ct(0,0,ee,q);let Ne=!1;const He=new Dd;let Z=!1,ae=!1;const ve=new mt,_e=new mt,Ce=new L,ye=new Ct,We={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let et=!1;function $e(){return T===null?ne:1}let I=i;function Kt(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ed}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",we,!1),I===null){const z="webgl2";if(I=Kt(z,w),I===null)throw Kt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let je,Ke,Oe,ut,Ue,C,E,W,ie,oe,R,D,F,H,Q,O,le,ue,pe,he,Le,Ae,Be,U;function me(){je=new Mw(I),je.init(),Ae=new aT(I,je),Ke=new gw(I,je,e,Ae),Oe=new rT(I),Ke.reverseDepthBuffer&&Oe.buffers.depth.setReversed(!0),ut=new Tw(I),Ue=new G2,C=new oT(I,je,Oe,Ue,Ke,Ae,ut),E=new _w(_),W=new Sw(_),ie=new DM(I),Be=new pw(I,ie),oe=new Ew(I,ie,ut,Be),R=new Rw(I,oe,ie,ut),pe=new Aw(I,Ke,C),O=new vw(Ue),D=new V2(_,E,W,je,Ke,Be,O),F=new mT(_,Ue),H=new X2,Q=new Z2(je),ue=new dw(_,E,W,Oe,R,f,l),le=new nT(_,R,Ke),U=new gT(I,ut,Ke,Oe),he=new mw(I,je,ut),Le=new ww(I,je,ut),ut.programs=D.programs,_.capabilities=Ke,_.extensions=je,_.properties=Ue,_.renderLists=H,_.shadowMap=le,_.state=Oe,_.info=ut}me();const K=new dT(_,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(ee,q,!1))},this.getSize=function(w){return w.set(ee,q)},this.setSize=function(w,z,j=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=w,q=z,t.width=Math.floor(w*ne),t.height=Math.floor(z*ne),j===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(ee*ne,q*ne).floor()},this.setDrawingBufferSize=function(w,z,j){ee=w,q=z,ne=j,t.width=Math.floor(w*j),t.height=Math.floor(z*j),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(te)},this.setViewport=function(w,z,j,Y){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,z,j,Y),Oe.viewport(y.copy(te).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,z,j,Y){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,z,j,Y),Oe.scissor(M.copy(de).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(w){Oe.setScissorTest(Ne=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(w=!0,z=!0,j=!0){let Y=0;if(w){let k=!1;if(T!==null){const fe=T.texture.format;k=fe===bd||fe===Cd||fe===Rd}if(k){const fe=T.texture.type,Me=fe===Vi||fe===Kr||fe===fa||fe===eo||fe===Td||fe===Ad,Re=ue.getClearColor(),Pe=ue.getClearAlpha(),ze=Re.r,ke=Re.g,De=Re.b;Me?(p[0]=ze,p[1]=ke,p[2]=De,p[3]=Pe,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=ze,v[1]=ke,v[2]=De,v[3]=Pe,I.clearBufferiv(I.COLOR,0,v))}else Y|=I.COLOR_BUFFER_BIT}z&&(Y|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",we,!1),H.dispose(),Q.dispose(),Ue.dispose(),E.dispose(),W.dispose(),R.dispose(),Be.dispose(),U.dispose(),D.dispose(),K.dispose(),K.removeEventListener("sessionstart",Vd),K.removeEventListener("sessionend",Gd),Tr.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=ut.autoReset,z=le.enabled,j=le.autoUpdate,Y=le.needsUpdate,k=le.type;me(),ut.autoReset=w,le.enabled=z,le.autoUpdate=j,le.needsUpdate=Y,le.type=k}function we(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ze(w){const z=w.target;z.removeEventListener("dispose",Ze),Dt(z)}function Dt(w){pn(w),Ue.remove(w)}function pn(w){const z=Ue.get(w).programs;z!==void 0&&(z.forEach(function(j){D.releaseProgram(j)}),w.isShaderMaterial&&D.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,j,Y,k,fe){z===null&&(z=We);const Me=k.isMesh&&k.matrixWorld.determinant()<0,Re=E_(w,z,j,Y,k);Oe.setMaterial(Y,Me);let Pe=j.index,ze=1;if(Y.wireframe===!0){if(Pe=oe.getWireframeAttribute(j),Pe===void 0)return;ze=2}const ke=j.drawRange,De=j.attributes.position;let at=ke.start*ze,gt=(ke.start+ke.count)*ze;fe!==null&&(at=Math.max(at,fe.start*ze),gt=Math.min(gt,(fe.start+fe.count)*ze)),Pe!==null?(at=Math.max(at,0),gt=Math.min(gt,Pe.count)):De!=null&&(at=Math.max(at,0),gt=Math.min(gt,De.count));const At=gt-at;if(At<0||At===1/0)return;Be.setup(k,Y,Re,j,Pe);let Sn,it=he;if(Pe!==null&&(Sn=ie.get(Pe),it=Le,it.setIndex(Sn)),k.isMesh)Y.wireframe===!0?(Oe.setLineWidth(Y.wireframeLinewidth*$e()),it.setMode(I.LINES)):it.setMode(I.TRIANGLES);else if(k.isLine){let Ie=Y.linewidth;Ie===void 0&&(Ie=1),Oe.setLineWidth(Ie*$e()),k.isLineSegments?it.setMode(I.LINES):k.isLineLoop?it.setMode(I.LINE_LOOP):it.setMode(I.LINE_STRIP)}else k.isPoints?it.setMode(I.POINTS):k.isSprite&&it.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)it.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(je.get("WEBGL_multi_draw"))it.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Ie=k._multiDrawStarts,jt=k._multiDrawCounts,rt=k._multiDrawCount,Yn=Pe?ie.get(Pe).bytesPerElement:1,ts=Ue.get(Y).currentProgram.getUniforms();for(let Mn=0;Mn<rt;Mn++)ts.setValue(I,"_gl_DrawID",Mn),it.render(Ie[Mn]/Yn,jt[Mn])}else if(k.isInstancedMesh)it.renderInstances(at,At,k.count);else if(j.isInstancedBufferGeometry){const Ie=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,jt=Math.min(j.instanceCount,Ie);it.renderInstances(at,At,jt)}else it.render(at,At)};function tt(w,z,j){w.transparent===!0&&w.side===gi&&w.forceSinglePass===!1?(w.side=un,w.needsUpdate=!0,Sa(w,z,j),w.side=xr,w.needsUpdate=!0,Sa(w,z,j),w.side=gi):Sa(w,z,j)}this.compile=function(w,z,j=null){j===null&&(j=w),m=Q.get(j),m.init(z),g.push(m),j.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),w!==j&&w.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const Y=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const fe=k.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Re=fe[Me];tt(Re,j,k),Y.add(Re)}else tt(fe,j,k),Y.add(fe)}),g.pop(),m=null,Y},this.compileAsync=function(w,z,j=null){const Y=this.compile(w,z,j);return new Promise(k=>{function fe(){if(Y.forEach(function(Me){Ue.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){k(w);return}setTimeout(fe,10)}je.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let mn=null;function Si(w){mn&&mn(w)}function Vd(){Tr.stop()}function Gd(){Tr.start()}const Tr=new t_;Tr.setAnimationLoop(Si),typeof self<"u"&&Tr.setContext(self),this.setAnimationLoop=function(w){mn=w,K.setAnimationLoop(w),w===null?Tr.stop():Tr.start()},K.addEventListener("sessionstart",Vd),K.addEventListener("sessionend",Gd),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,z,T),m=Q.get(w,g.length),m.init(z),g.push(m),_e.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),He.setFromProjectionMatrix(_e),ae=this.localClippingEnabled,Z=O.init(this.clippingPlanes,ae),x=H.get(w,d.length),x.init(),d.push(x),K.enabled===!0&&K.isPresenting===!0){const fe=_.xr.getDepthSensingMesh();fe!==null&&Ic(fe,z,-1/0,_.sortObjects)}Ic(w,z,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(N,re),et=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,et&&ue.addToRenderList(x,w),this.info.render.frame++,Z===!0&&O.beginShadows();const j=m.state.shadowsArray;le.render(j,w,z),Z===!0&&O.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=x.opaque,k=x.transmissive;if(m.setupLights(),z.isArrayCamera){const fe=z.cameras;if(k.length>0)for(let Me=0,Re=fe.length;Me<Re;Me++){const Pe=fe[Me];Xd(Y,k,w,Pe)}et&&ue.render(w);for(let Me=0,Re=fe.length;Me<Re;Me++){const Pe=fe[Me];Wd(x,w,Pe,Pe.viewport)}}else k.length>0&&Xd(Y,k,w,z),et&&ue.render(w),Wd(x,w,z);T!==null&&(C.updateMultisampleRenderTarget(T),C.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(_,w,z),Be.resetDefaultState(),P=-1,X=null,g.pop(),g.length>0?(m=g[g.length-1],Z===!0&&O.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Ic(w,z,j,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||He.intersectsSprite(w)){Y&&ye.setFromMatrixPosition(w.matrixWorld).applyMatrix4(_e);const Me=R.update(w),Re=w.material;Re.visible&&x.push(w,Me,Re,j,ye.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||He.intersectsObject(w))){const Me=R.update(w),Re=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ye.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ye.copy(Me.boundingSphere.center)),ye.applyMatrix4(w.matrixWorld).applyMatrix4(_e)),Array.isArray(Re)){const Pe=Me.groups;for(let ze=0,ke=Pe.length;ze<ke;ze++){const De=Pe[ze],at=Re[De.materialIndex];at&&at.visible&&x.push(w,Me,at,j,ye.z,De)}}else Re.visible&&x.push(w,Me,Re,j,ye.z,null)}}const fe=w.children;for(let Me=0,Re=fe.length;Me<Re;Me++)Ic(fe[Me],z,j,Y)}function Wd(w,z,j,Y){const k=w.opaque,fe=w.transmissive,Me=w.transparent;m.setupLightsView(j),Z===!0&&O.setGlobalState(_.clippingPlanes,j),Y&&Oe.viewport(y.copy(Y)),k.length>0&&xa(k,z,j),fe.length>0&&xa(fe,z,j),Me.length>0&&xa(Me,z,j),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function Xd(w,z,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Zr(1,1,{generateMipmaps:!0,type:je.has("EXT_color_buffer_half_float")||je.has("EXT_color_buffer_float")?_a:Vi,minFilter:Vr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const fe=m.state.transmissionRenderTarget[Y.id],Me=Y.viewport||y;fe.setSize(Me.z,Me.w);const Re=_.getRenderTarget();_.setRenderTarget(fe),_.getClearColor(V),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),et&&ue.render(j);const Pe=_.toneMapping;_.toneMapping=gr;const ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Z===!0&&O.setGlobalState(_.clippingPlanes,Y),xa(w,j,Y),C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe),je.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let De=0,at=z.length;De<at;De++){const gt=z[De],At=gt.object,Sn=gt.geometry,it=gt.material,Ie=gt.group;if(it.side===gi&&At.layers.test(Y.layers)){const jt=it.side;it.side=un,it.needsUpdate=!0,jd(At,j,Y,Sn,it,Ie),it.side=jt,it.needsUpdate=!0,ke=!0}}ke===!0&&(C.updateMultisampleRenderTarget(fe),C.updateRenderTargetMipmap(fe))}_.setRenderTarget(Re),_.setClearColor(V,$),ze!==void 0&&(Y.viewport=ze),_.toneMapping=Pe}function xa(w,z,j){const Y=z.isScene===!0?z.overrideMaterial:null;for(let k=0,fe=w.length;k<fe;k++){const Me=w[k],Re=Me.object,Pe=Me.geometry,ze=Y===null?Me.material:Y,ke=Me.group;Re.layers.test(j.layers)&&jd(Re,z,j,Pe,ze,ke)}}function jd(w,z,j,Y,k,fe){w.onBeforeRender(_,z,j,Y,k,fe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(_,z,j,Y,w,fe),k.transparent===!0&&k.side===gi&&k.forceSinglePass===!1?(k.side=un,k.needsUpdate=!0,_.renderBufferDirect(j,z,Y,k,w,fe),k.side=xr,k.needsUpdate=!0,_.renderBufferDirect(j,z,Y,k,w,fe),k.side=gi):_.renderBufferDirect(j,z,Y,k,w,fe),w.onAfterRender(_,z,j,Y,k,fe)}function Sa(w,z,j){z.isScene!==!0&&(z=We);const Y=Ue.get(w),k=m.state.lights,fe=m.state.shadowsArray,Me=k.state.version,Re=D.getParameters(w,k.state,fe,z,j),Pe=D.getProgramCacheKey(Re);let ze=Y.programs;Y.environment=w.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(w.isMeshStandardMaterial?W:E).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",Ze),ze=new Map,Y.programs=ze);let ke=ze.get(Pe);if(ke!==void 0){if(Y.currentProgram===ke&&Y.lightsStateVersion===Me)return $d(w,Re),ke}else Re.uniforms=D.getUniforms(w),w.onBeforeCompile(Re,_),ke=D.acquireProgram(Re,Pe),ze.set(Pe,ke),Y.uniforms=Re.uniforms;const De=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=O.uniform),$d(w,Re),Y.needsLights=T_(w),Y.lightsStateVersion=Me,Y.needsLights&&(De.ambientLightColor.value=k.state.ambient,De.lightProbe.value=k.state.probe,De.directionalLights.value=k.state.directional,De.directionalLightShadows.value=k.state.directionalShadow,De.spotLights.value=k.state.spot,De.spotLightShadows.value=k.state.spotShadow,De.rectAreaLights.value=k.state.rectArea,De.ltc_1.value=k.state.rectAreaLTC1,De.ltc_2.value=k.state.rectAreaLTC2,De.pointLights.value=k.state.point,De.pointLightShadows.value=k.state.pointShadow,De.hemisphereLights.value=k.state.hemi,De.directionalShadowMap.value=k.state.directionalShadowMap,De.directionalShadowMatrix.value=k.state.directionalShadowMatrix,De.spotShadowMap.value=k.state.spotShadowMap,De.spotLightMatrix.value=k.state.spotLightMatrix,De.spotLightMap.value=k.state.spotLightMap,De.pointShadowMap.value=k.state.pointShadowMap,De.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=ke,Y.uniformsList=null,ke}function Yd(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=Ll.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function $d(w,z){const j=Ue.get(w);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function E_(w,z,j,Y,k){z.isScene!==!0&&(z=We),C.resetTextureUnits();const fe=z.fog,Me=Y.isMeshStandardMaterial?z.environment:null,Re=T===null?_.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:wr,Pe=(Y.isMeshStandardMaterial?W:E).get(Y.envMap||Me),ze=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),De=!!j.morphAttributes.position,at=!!j.morphAttributes.normal,gt=!!j.morphAttributes.color;let At=gr;Y.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(At=_.toneMapping);const Sn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,it=Sn!==void 0?Sn.length:0,Ie=Ue.get(Y),jt=m.state.lights;if(Z===!0&&(ae===!0||w!==X)){const Nn=w===X&&Y.id===P;O.setState(Y,w,Nn)}let rt=!1;Y.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==jt.state.version||Ie.outputColorSpace!==Re||k.isBatchedMesh&&Ie.batching===!1||!k.isBatchedMesh&&Ie.batching===!0||k.isBatchedMesh&&Ie.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ie.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ie.instancing===!1||!k.isInstancedMesh&&Ie.instancing===!0||k.isSkinnedMesh&&Ie.skinning===!1||!k.isSkinnedMesh&&Ie.skinning===!0||k.isInstancedMesh&&Ie.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ie.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ie.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ie.instancingMorph===!1&&k.morphTexture!==null||Ie.envMap!==Pe||Y.fog===!0&&Ie.fog!==fe||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==O.numPlanes||Ie.numIntersection!==O.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==ke||Ie.morphTargets!==De||Ie.morphNormals!==at||Ie.morphColors!==gt||Ie.toneMapping!==At||Ie.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ie.__version=Y.version);let Yn=Ie.currentProgram;rt===!0&&(Yn=Sa(Y,z,k));let ts=!1,Mn=!1,Nc=!1;const bt=Yn.getUniforms(),Xi=Ie.uniforms;if(Oe.useProgram(Yn.program)&&(ts=!0,Mn=!0,Nc=!0),Y.id!==P&&(P=Y.id,Mn=!0),ts||X!==w){Ke.reverseDepthBuffer?(ve.copy(w.projectionMatrix),oM(ve),aM(ve),bt.setValue(I,"projectionMatrix",ve)):bt.setValue(I,"projectionMatrix",w.projectionMatrix),bt.setValue(I,"viewMatrix",w.matrixWorldInverse);const Nn=bt.map.cameraPosition;Nn!==void 0&&Nn.setValue(I,Ce.setFromMatrixPosition(w.matrixWorld)),Ke.logarithmicDepthBuffer&&bt.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Mn=!0,Nc=!0)}if(k.isSkinnedMesh){bt.setOptional(I,k,"bindMatrix"),bt.setOptional(I,k,"bindMatrixInverse");const Nn=k.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),bt.setValue(I,"boneTexture",Nn.boneTexture,C))}k.isBatchedMesh&&(bt.setOptional(I,k,"batchingTexture"),bt.setValue(I,"batchingTexture",k._matricesTexture,C),bt.setOptional(I,k,"batchingIdTexture"),bt.setValue(I,"batchingIdTexture",k._indirectTexture,C),bt.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&bt.setValue(I,"batchingColorTexture",k._colorsTexture,C));const Uc=j.morphAttributes;if((Uc.position!==void 0||Uc.normal!==void 0||Uc.color!==void 0)&&pe.update(k,j,Yn),(Mn||Ie.receiveShadow!==k.receiveShadow)&&(Ie.receiveShadow=k.receiveShadow,bt.setValue(I,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Xi.envMap.value=Pe,Xi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Xi.envMapIntensity.value=z.environmentIntensity),Mn&&(bt.setValue(I,"toneMappingExposure",_.toneMappingExposure),Ie.needsLights&&w_(Xi,Nc),fe&&Y.fog===!0&&F.refreshFogUniforms(Xi,fe),F.refreshMaterialUniforms(Xi,Y,ne,q,m.state.transmissionRenderTarget[w.id]),Ll.upload(I,Yd(Ie),Xi,C)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ll.upload(I,Yd(Ie),Xi,C),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(I,"center",k.center),bt.setValue(I,"modelViewMatrix",k.modelViewMatrix),bt.setValue(I,"normalMatrix",k.normalMatrix),bt.setValue(I,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Nn=Y.uniformsGroups;for(let Fc=0,A_=Nn.length;Fc<A_;Fc++){const qd=Nn[Fc];U.update(qd,Yn),U.bind(qd,Yn)}}return Yn}function w_(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function T_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,z,j){Ue.get(w.texture).__webglTexture=z,Ue.get(w.depthTexture).__webglTexture=j;const Y=Ue.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const j=Ue.get(w);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,j=0){T=w,b=z,A=j;let Y=!0,k=null,fe=!1,Me=!1;if(w){const Pe=Ue.get(w);if(Pe.__useDefaultFramebuffer!==void 0)Oe.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Pe.__hasExternalTextures)C.rebindTextures(w,Ue.get(w.texture).__webglTexture,Ue.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const De=w.depthTexture;if(Pe.__boundDepthTexture!==De){if(De!==null&&Ue.has(De)&&(w.width!==De.image.width||w.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Me=!0);const ke=Ue.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?k=ke[z][j]:k=ke[z],fe=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?k=Ue.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[j]:k=ke,y.copy(w.viewport),M.copy(w.scissor),G=w.scissorTest}else y.copy(te).multiplyScalar(ne).floor(),M.copy(de).multiplyScalar(ne).floor(),G=Ne;if(Oe.bindFramebuffer(I.FRAMEBUFFER,k)&&Y&&Oe.drawBuffers(w,k),Oe.viewport(y),Oe.scissor(M),Oe.setScissorTest(G),fe){const Pe=Ue.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pe.__webglTexture,j)}else if(Me){const Pe=Ue.get(w.texture),ze=z||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,j||0,ze)}P=-1},this.readRenderTargetPixels=function(w,z,j,Y,k,fe,Me){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){Oe.bindFramebuffer(I.FRAMEBUFFER,Re);try{const Pe=w.texture,ze=Pe.format,ke=Pe.type;if(!Ke.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&j>=0&&j<=w.height-k&&I.readPixels(z,j,Y,k,Ae.convert(ze),Ae.convert(ke),fe)}finally{const Pe=T!==null?Ue.get(T).__webglFramebuffer:null;Oe.bindFramebuffer(I.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(w,z,j,Y,k,fe,Me){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ue.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){const Pe=w.texture,ze=Pe.format,ke=Pe.type;if(!Ke.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-Y&&j>=0&&j<=w.height-k){Oe.bindFramebuffer(I.FRAMEBUFFER,Re);const De=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.bufferData(I.PIXEL_PACK_BUFFER,fe.byteLength,I.STREAM_READ),I.readPixels(z,j,Y,k,Ae.convert(ze),Ae.convert(ke),0);const at=T!==null?Ue.get(T).__webglFramebuffer:null;Oe.bindFramebuffer(I.FRAMEBUFFER,at);const gt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sM(I,gt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,De),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,fe),I.deleteBuffer(De),I.deleteSync(gt),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,j=0){w.isTexture!==!0&&(Pl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);const Y=Math.pow(2,-j),k=Math.floor(w.image.width*Y),fe=Math.floor(w.image.height*Y),Me=z!==null?z.x:0,Re=z!==null?z.y:0;C.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,Me,Re,k,fe),Oe.unbindTexture()},this.copyTextureToTexture=function(w,z,j=null,Y=null,k=0){w.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],z=arguments[2],k=arguments[3]||0,j=null);let fe,Me,Re,Pe,ze,ke;j!==null?(fe=j.max.x-j.min.x,Me=j.max.y-j.min.y,Re=j.min.x,Pe=j.min.y):(fe=w.image.width,Me=w.image.height,Re=0,Pe=0),Y!==null?(ze=Y.x,ke=Y.y):(ze=0,ke=0);const De=Ae.convert(z.format),at=Ae.convert(z.type);C.setTexture2D(z,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const gt=I.getParameter(I.UNPACK_ROW_LENGTH),At=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Sn=I.getParameter(I.UNPACK_SKIP_PIXELS),it=I.getParameter(I.UNPACK_SKIP_ROWS),Ie=I.getParameter(I.UNPACK_SKIP_IMAGES),jt=w.isCompressedTexture?w.mipmaps[k]:w.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,jt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,jt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,Pe),w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,ze,ke,fe,Me,De,at,jt.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,ze,ke,jt.width,jt.height,De,jt.data):I.texSubImage2D(I.TEXTURE_2D,k,ze,ke,fe,Me,De,at,jt),I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,it),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie),k===0&&z.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(w,z,j=null,Y=null,k=0){w.isTexture!==!0&&(Pl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],z=arguments[3],k=arguments[4]||0);let fe,Me,Re,Pe,ze,ke,De,at,gt;const At=w.isCompressedTexture?w.mipmaps[k]:w.image;j!==null?(fe=j.max.x-j.min.x,Me=j.max.y-j.min.y,Re=j.max.z-j.min.z,Pe=j.min.x,ze=j.min.y,ke=j.min.z):(fe=At.width,Me=At.height,Re=At.depth,Pe=0,ze=0,ke=0),Y!==null?(De=Y.x,at=Y.y,gt=Y.z):(De=0,at=0,gt=0);const Sn=Ae.convert(z.format),it=Ae.convert(z.type);let Ie;if(z.isData3DTexture)C.setTexture3D(z,0),Ie=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)C.setTexture2DArray(z,0),Ie=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const jt=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Yn=I.getParameter(I.UNPACK_SKIP_PIXELS),ts=I.getParameter(I.UNPACK_SKIP_ROWS),Mn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?I.texSubImage3D(Ie,k,De,at,gt,fe,Me,Re,Sn,it,At.data):z.isCompressedArrayTexture?I.compressedTexSubImage3D(Ie,k,De,at,gt,fe,Me,Re,Sn,At.data):I.texSubImage3D(Ie,k,De,at,gt,fe,Me,Re,Sn,it,At),I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yn),I.pixelStorei(I.UNPACK_SKIP_ROWS,ts),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mn),k===0&&z.generateMipmaps&&I.generateMipmap(Ie),Oe.unbindTexture()},this.initRenderTarget=function(w){Ue.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Oe.unbindTexture()},this.resetState=function(){b=0,A=0,T=null,Oe.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Pd?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===bc?"display-p3":"srgb"}}class Nd{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new be(e),this.near=t,this.far=i}clone(){return new Nd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _T extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yT{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tf,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new L;class cc{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ri(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ri(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class l_ extends es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let vs;const wo=new L,_s=new L,ys=new L,xs=new xe,To=new xe,c_=new mt,ol=new L,Ao=new L,al=new L,Jm=new xe,zu=new xe,Qm=new xe;class xT extends Lt{constructor(e=new l_){if(super(),this.isSprite=!0,this.type="Sprite",vs===void 0){vs=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new yT(t,5);vs.setIndex([0,1,2,0,2,3]),vs.setAttribute("position",new cc(i,3,0,!1)),vs.setAttribute("uv",new cc(i,2,3,!1))}this.geometry=vs,this.material=e,this.center=new xe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),c_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-ys.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;ll(ol.set(-.5,-.5,0),ys,o,_s,r,s),ll(Ao.set(.5,-.5,0),ys,o,_s,r,s),ll(al.set(.5,.5,0),ys,o,_s,r,s),Jm.set(0,0),zu.set(1,0),Qm.set(1,1);let a=e.ray.intersectTriangle(ol,Ao,al,!1,wo);if(a===null&&(ll(Ao.set(-.5,.5,0),ys,o,_s,r,s),zu.set(0,1),a=e.ray.intersectTriangle(ol,al,Ao,!1,wo),a===null))return;const l=e.ray.origin.distanceTo(wo);l<e.near||l>e.far||t.push({distance:l,point:wo.clone(),uv:Bn.getInterpolation(wo,ol,Ao,al,Jm,zu,Qm,new xe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ll(n,e,t,i,r,s){xs.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(To.x=s*xs.x-r*xs.y,To.y=r*xs.x+s*xs.y):To.copy(xs),n.copy(e),n.x+=To.x,n.y+=To.y,n.applyMatrix4(c_)}class u_ extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const e0=new mt,Rf=new Yv,cl=new Pc,ul=new L;class ST extends Lt{constructor(e=new Xt,t=new u_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),cl.copy(i.boundingSphere),cl.applyMatrix4(r),cl.radius+=s,e.ray.intersectsSphere(cl)===!1)return;e0.copy(r).invert(),Rf.copy(e.ray).applyMatrix4(e0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let v=f,x=p;v<x;v++){const m=c.getX(v);ul.fromBufferAttribute(h,m),t0(ul,m,l,r,e,t,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,x=p;v<x;v++)ul.fromBufferAttribute(h,v),t0(ul,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function t0(n,e,t,i,r,s,o){const a=Rf.distanceSqToPoint(n);if(a<t){const l=new L;Rf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class MT extends hn{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,p=(o-u)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new xe:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,r=[],s=[],o=[],a=new L,l=new mt;for(let p=0;p<=e;p++){const v=p/e;r[p]=this.getTangentAt(v,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const v=Math.acos(Gt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,v))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Gt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let v=1;v<=e;v++)s[v].applyMatrix4(l.makeRotationAxis(r[v],p*v)),o[v].crossVectors(r[v],s[v])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ud extends xi{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new xe){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*u-p*h+this.aX,c=f*h+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ET extends Ud{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,p*=u,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const hl=new L,ku=new Fd,Bu=new Fd,Hu=new Fd;class wT extends xi{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new L){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(hl.subVectors(r[0],r[1]).add(r[0]),c=hl);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(hl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=hl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let v=Math.pow(c.distanceToSquared(h),p),x=Math.pow(h.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(u),p);x<1e-4&&(x=1),v<1e-4&&(v=x),m<1e-4&&(m=x),ku.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,v,x,m),Bu.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,v,x,m),Hu.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,v,x,m)}else this.curveType==="catmullrom"&&(ku.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Bu.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Hu.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return i.set(ku.calc(l),Bu.calc(l),Hu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new L().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function n0(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function TT(n,e){const t=1-n;return t*t*e}function AT(n,e){return 2*(1-n)*n*e}function RT(n,e){return n*n*e}function jo(n,e,t,i){return TT(n,e)+AT(n,t)+RT(n,i)}function CT(n,e){const t=1-n;return t*t*t*e}function bT(n,e){const t=1-n;return 3*t*t*n*e}function PT(n,e){return 3*(1-n)*n*n*e}function LT(n,e){return n*n*n*e}function Yo(n,e,t,i,r){return CT(n,e)+bT(n,t)+PT(n,i)+LT(n,r)}class h_ extends xi{constructor(e=new xe,t=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new xe){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yo(e,r.x,s.x,o.x,a.x),Yo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class DT extends xi{constructor(e=new L,t=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Yo(e,r.x,s.x,o.x,a.x),Yo(e,r.y,s.y,o.y,a.y),Yo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class f_ extends xi{constructor(e=new xe,t=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new xe){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new xe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class IT extends xi{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d_ extends xi{constructor(e=new xe,t=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new xe){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class NT extends xi{constructor(e=new L,t=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new L){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y),jo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class p_ extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new xe){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(n0(a,l.x,c.x,u.x,h.x),n0(a,l.y,c.y,u.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new xe().fromArray(r))}return this}}var i0=Object.freeze({__proto__:null,ArcCurve:ET,CatmullRomCurve3:wT,CubicBezierCurve:h_,CubicBezierCurve3:DT,EllipseCurve:Ud,LineCurve:f_,LineCurve3:IT,QuadraticBezierCurve:d_,QuadraticBezierCurve3:NT,SplineCurve:p_});class UT extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new i0[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(t.push(u),i=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new i0[r.type]().fromJSON(r))}return this}}class FT extends UT{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new f_(this.currentPoint.clone(),new xe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new d_(this.currentPoint.clone(),new xe(e,t),new xe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new h_(this.currentPoint.clone(),new xe(e,t),new xe(i,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new p_(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new Ud(e,t,i,r,s,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Od extends Xt{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=Gt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/t,h=new L,f=new xe,p=new L,v=new L,x=new L;let m=0,d=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,d=e[g+1].y-e[g].y,p.x=d*1,p.y=-m,p.z=d*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[g+1].x-e[g].x,d=e[g+1].y-e[g].y,p.x=d*1,p.y=-m,p.z=d*0,v.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(v)}for(let g=0;g<=t;g++){const _=i+g*u*r,S=Math.sin(_),b=Math.cos(_);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*S,h.y=e[A].y,h.z=e[A].x*b,o.push(h.x,h.y,h.z),f.x=g/t,f.y=A/(e.length-1),a.push(f.x,f.y);const T=l[3*A+0]*S,P=l[3*A+1],X=l[3*A+0]*b;c.push(T,P,X)}}for(let g=0;g<t;g++)for(let _=0;_<e.length-1;_++){const S=_+g*e.length,b=S,A=S+e.length,T=S+e.length+1,P=S+1;s.push(b,A,P),s.push(T,P,A)}this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("uv",new ft(a,2)),this.setAttribute("normal",new ft(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.points,e.segments,e.phiStart,e.phiLength)}}class zd extends Od{constructor(e=1,t=1,i=4,r=8){const s=new FT;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new zd(e.radius,e.length,e.capSegments,e.radialSegments)}}class kd extends Xt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],c=new L,u=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){const p=i+h/t*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ht extends Xt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],p=[];let v=0;const x=[],m=i/2;let d=0;g(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(f,3)),this.setAttribute("uv",new ft(p,2));function g(){const S=new L,b=new L;let A=0;const T=(t-e)/i;for(let P=0;P<=s;P++){const X=[],y=P/s,M=y*(t-e)+e;for(let G=0;G<=r;G++){const V=G/r,$=V*l+a,ee=Math.sin($),q=Math.cos($);b.x=M*ee,b.y=-y*i+m,b.z=M*q,h.push(b.x,b.y,b.z),S.set(ee,T,q).normalize(),f.push(S.x,S.y,S.z),p.push(V,1-y),X.push(v++)}x.push(X)}for(let P=0;P<r;P++)for(let X=0;X<s;X++){const y=x[X][P],M=x[X+1][P],G=x[X+1][P+1],V=x[X][P+1];e>0&&(u.push(y,M,V),A+=3),t>0&&(u.push(M,G,V),A+=3)}c.addGroup(d,A,0),d+=A}function _(S){const b=v,A=new xe,T=new L;let P=0;const X=S===!0?e:t,y=S===!0?1:-1;for(let G=1;G<=r;G++)h.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),v++;const M=v;for(let G=0;G<=r;G++){const $=G/r*l+a,ee=Math.cos($),q=Math.sin($);T.x=X*q,T.y=m*y,T.z=X*ee,h.push(T.x,T.y,T.z),f.push(0,y,0),A.x=ee*.5+.5,A.y=q*.5*y+.5,p.push(A.x,A.y),v++}for(let G=0;G<r;G++){const V=b+G,$=M+G;S===!0?u.push($,$+1,V):u.push($+1,$,V),P+=3}c.addGroup(d,P,S===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bd extends Xt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const _=new L,S=new L,b=new L;for(let A=0;A<t.length;A+=3)p(t[A+0],_),p(t[A+1],S),p(t[A+2],b),l(_,S,b,g)}function l(g,_,S,b){const A=b+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const X=g.clone().lerp(S,P/A),y=_.clone().lerp(S,P/A),M=A-P;for(let G=0;G<=M;G++)G===0&&P===A?T[P][G]=X:T[P][G]=X.clone().lerp(y,G/M)}for(let P=0;P<A;P++)for(let X=0;X<2*(A-P)-1;X++){const y=Math.floor(X/2);X%2===0?(f(T[P][y+1]),f(T[P+1][y]),f(T[P][y])):(f(T[P][y+1]),f(T[P+1][y+1]),f(T[P+1][y]))}}function c(g){const _=new L;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(g),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function u(){const g=new L;for(let _=0;_<s.length;_+=3){g.x=s[_+0],g.y=s[_+1],g.z=s[_+2];const S=m(g)/2/Math.PI+.5,b=d(g)/Math.PI+.5;o.push(S,1-b)}v(),h()}function h(){for(let g=0;g<o.length;g+=6){const _=o[g+0],S=o[g+2],b=o[g+4],A=Math.max(_,S,b),T=Math.min(_,S,b);A>.9&&T<.1&&(_<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),b<.2&&(o[g+4]+=1))}}function f(g){s.push(g.x,g.y,g.z)}function p(g,_){const S=g*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function v(){const g=new L,_=new L,S=new L,b=new L,A=new xe,T=new xe,P=new xe;for(let X=0,y=0;X<s.length;X+=9,y+=6){g.set(s[X+0],s[X+1],s[X+2]),_.set(s[X+3],s[X+4],s[X+5]),S.set(s[X+6],s[X+7],s[X+8]),A.set(o[y+0],o[y+1]),T.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),b.copy(g).add(_).add(S).divideScalar(3);const M=m(b);x(A,y+0,g,M),x(T,y+2,_,M),x(P,y+4,S,M)}}function x(g,_,S,b){b<0&&g.x===1&&(o[_]=g.x-1),S.x===0&&S.z===0&&(o[_]=b/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.vertices,e.indices,e.radius,e.details)}}class uc extends Bd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new uc(e.radius,e.detail)}}class Gs extends Xt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new L,f=new L,p=[],v=[],x=[],m=[];for(let d=0;d<=i;d++){const g=[],_=d/i;let S=0;d===0&&o===0?S=.5/t:d===i&&l===Math.PI&&(S=-.5/t);for(let b=0;b<=t;b++){const A=b/t;h.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),m.push(A+S,1-_),g.push(c++)}u.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){const _=u[d][g+1],S=u[d][g],b=u[d+1][g],A=u[d+1][g+1];(d!==0||o>0)&&p.push(_,S,A),(d!==i-1||l<Math.PI)&&p.push(S,b,A)}this.setIndex(p),this.setAttribute("position",new ft(v,3)),this.setAttribute("normal",new ft(x,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hc extends Xt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new L,h=new L,f=new L;for(let p=0;p<=i;p++)for(let v=0;v<=r;v++){const x=v/r*s,m=p/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(v/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let v=1;v<=r;v++){const x=(r+1)*p+v-1,m=(r+1)*(p-1)+v-1,d=(r+1)*(p-1)+v,g=(r+1)*p+v;o.push(x,m,g),o.push(m,d,g)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class st extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vv,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dc extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class OT extends Dc{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Vu=new mt,r0=new L,s0=new L;class m_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dd,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;r0.setFromMatrixPosition(e.matrixWorld),t.position.copy(r0),s0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s0),t.updateMatrixWorld(),Vu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class zT extends m_{constructor(){super(new Rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=no*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class kT extends Dc{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new zT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class BT extends m_{constructor(){super(new n_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HT extends Dc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new BT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class VT extends Dc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class GT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=o0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=o0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function o0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ed);function Dl(n,e=!1){const t=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),r=new Set(Object.keys(n[0].morphAttributes)),s={},o={},a=n[0].morphTargetsRelative,l=new Xt;let c=0;for(let u=0;u<n.length;++u){const h=n[u];let f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in h.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(h.attributes[p]),f++}if(f!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in h.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p])}if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0;const h=[];for(let f=0;f<n.length;++f){const p=n[f].index;for(let v=0;v<p.count;++v)h.push(p.getX(v)+u);u+=n[f].attributes.position.count}l.setIndex(h)}for(const u in s){const h=a0(s[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(const u in o){const h=o[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){const p=[];for(let x=0;x<o[u].length;++x)p.push(o[u][x][f]);const v=a0(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(v)}}return l}function a0(n){let e,t,i,r=-1,s=0;for(let c=0;c<n.length;++c){const u=n[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const o=new e(s),a=new Pn(o,t,i);let l=0;for(let c=0;c<n.length;++c){const u=n[c];if(u.isInterleavedBufferAttribute){const h=l/t;for(let f=0,p=u.count;f<p;f++)for(let v=0;v<t;v++){const x=u.getComponent(f,v);a.setComponent(f+h,v,x)}}else o.set(u.array,l);l+=u.count*t}return r!==void 0&&(a.gpuType=r),a}const yt=(n,e,t)=>n<e?e:n>t?t:n,WT=(n,e,t)=>n+(e-n)*t,vr=(n,e,t,i)=>WT(n,e,1-Math.exp(-t*i)),Gu=Math.PI*2;function g_(n,e){let t=(e-n)%Gu;return t>Math.PI&&(t-=Gu),t<-Math.PI&&(t+=Gu),t}function Cf(n,e,t,i){return n+g_(n,e)*(1-Math.exp(-t*i))}function Wn(n){let e=n>>>0;return()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function v_(n,e,t,i,r){const s=yt(n,i.minX,i.maxX),o=yt(e,i.minZ,i.maxZ);let a=n-s,l=e-o;const c=a*a+l*l;if(c>t*t)return r.x=0,r.z=0,!1;if(c>1e-8){const u=Math.sqrt(c);r.x=a/u*(t-u),r.z=l/u*(t-u)}else{const u=n-i.minX,h=i.maxX-n,f=e-i.minZ,p=i.maxZ-e,v=Math.min(u,h,f,p);r.x=0,r.z=0,v===u?r.x=-(u+t):v===h?r.x=h+t:v===f?r.z=-(f+t):r.z=p+t}return!0}const l0=new mt,c0=new lo,u0=new ci,h0=new L,f0=new L(1,1,1);function Ee(n,e,t,i,r=0,s=1,o=1,a=1){const l=n.clone();return u0.set(0,r,0),c0.setFromEuler(u0),h0.set(e,t,i),f0.set(s,o,a),l0.compose(h0,c0,f0),l.applyMatrix4(l0),l}function Xe(n,e,t,i=2){const r=new Nt(n,e,t),s=r.attributes.uv,o=[[t/i,e/i],[t/i,e/i],[n/i,t/i],[n/i,t/i],[n/i,e/i],[n/i,e/i]];for(let a=0;a<6;a++)for(let l=0;l<4;l++){const c=a*4+l;s.setXY(c,s.getX(c)*o[a][0],s.getY(c)*o[a][1])}return s.needsUpdate=!0,r}function XT(n,e,t,i=4,r=3.2){const s=new Nt(n,e,t),o=s.attributes.uv,a=[[Math.max(1,Math.round(t/i)),Math.max(1,Math.round(e/r))],[Math.max(1,Math.round(t/i)),Math.max(1,Math.round(e/r))],[1,1],[1,1],[Math.max(1,Math.round(n/i)),Math.max(1,Math.round(e/r))],[Math.max(1,Math.round(n/i)),Math.max(1,Math.round(e/r))]];for(let l=0;l<6;l++)for(let c=0;c<4;c++){const u=l*4+c;o.setXY(u,o.getX(u)*a[l][0],o.getY(u)*a[l][1])}return o.needsUpdate=!0,s}function Tn(n,e,t,i=1,r=1,s=2){const o=Xe(n,e,t,s),a=o.attributes.position;for(let l=0;l<a.count;l++)a.getY(l)>0&&(a.setX(l,a.getX(l)*i),a.setZ(l,a.getZ(l)*r));return a.needsUpdate=!0,o.computeVertexNormals(),o}function jT(n,e,t){const i=n/2,r=t/2,s=[],o=(...c)=>s.push(...c);o(-i,0,-r,i,0,-r,i,e,0),o(-i,0,-r,i,e,0,-i,e,0),o(i,0,r,-i,0,r,-i,e,0),o(i,0,r,-i,e,0,i,e,0),o(-i,0,r,-i,0,-r,-i,e,0),o(i,0,-r,i,0,r,i,e,0),o(-i,0,r,i,0,r,i,0,-r),o(-i,0,r,i,0,-r,-i,0,-r);const a=new Xt;a.setAttribute("position",new ft(s,3));const l=[];for(let c=0;c<s.length;c+=3)l.push(s[c]*.25,s[c+2]*.25);return a.setAttribute("uv",new ft(l,2)),a.computeVertexNormals(),a}function ui(n,e){const t=document.createElement("canvas");return t.width=n,t.height=e,{c:t,ctx:t.getContext("2d")}}function hi(n,e=!0,t=!0){const i=new MT(n);return e&&(i.wrapS=i.wrapT=ic),t&&(i.colorSpace=Fn),i.anisotropy=4,i.needsUpdate=!0,i}const Qe=new Map;function YT(){if(Qe.has("asphalt"))return Qe.get("asphalt");const{c:n,ctx:e}=ui(512,512),t=Wn(7);e.fillStyle="#34373d",e.fillRect(0,0,512,512);for(let r=0;r<9e3;r++){const s=30+Math.floor(t()*40);e.fillStyle=`rgba(${s},${s+2},${s+4},${.35+t()*.4})`;const o=1+t()*2.5;e.fillRect(t()*512,t()*512,o,o)}for(let r=0;r<9;r++)e.fillStyle=`rgba(24,25,28,${.1+t()*.12})`,e.beginPath(),e.ellipse(t()*512,t()*512,20+t()*60,14+t()*40,t()*3,0,Math.PI*2),e.fill();for(let r=0;r<5;r++)e.strokeStyle="rgba(20,20,22,0.08)",e.lineWidth=8+t()*12,e.beginPath(),e.moveTo(t()*512,0),e.bezierCurveTo(t()*512,170,t()*512,340,t()*512,512),e.stroke();const i=hi(n);return Qe.set("asphalt",i),i}function $T(){if(Qe.has("concrete"))return Qe.get("concrete");const{c:n,ctx:e}=ui(256,256),t=Wn(21);e.fillStyle="#6a6a63",e.fillRect(0,0,256,256);for(let r=0;r<5e3;r++){const s=86+Math.floor(t()*62);e.fillStyle=`rgba(${s},${s},${s-4},${.15+t()*.35})`,e.fillRect(t()*256,t()*256,1+t()*2,1+t()*2)}e.strokeStyle="rgba(48,48,46,0.85)",e.lineWidth=2,e.strokeRect(0,0,128,128),e.strokeRect(128,0,128,128),e.strokeRect(0,128,128,128),e.strokeRect(128,128,128,128),e.strokeStyle="rgba(190,190,185,0.25)",e.lineWidth=1,e.strokeRect(2,2,124,124),e.strokeRect(130,130,124,124);const i=hi(n);return Qe.set("concrete",i),i}function qT(){if(Qe.has("grass"))return Qe.get("grass");const{c:n,ctx:e}=ui(256,256),t=Wn(99);e.fillStyle="#3f5a30",e.fillRect(0,0,256,256);for(let r=0;r<6e3;r++){const s=50+t()*55;e.fillStyle=`rgba(${Math.floor(s*.7)},${Math.floor(s+25)},${Math.floor(s*.55)},${.2+t()*.5})`,e.fillRect(t()*256,t()*256,1+t()*3,1+t()*4)}for(let r=0;r<30;r++)e.fillStyle=`rgba(34,50,26,${.15+t()*.2})`,e.beginPath(),e.ellipse(t()*256,t()*256,10+t()*40,8+t()*30,t()*3,0,Math.PI*2),e.fill();const i=hi(n);return Qe.set("grass",i),i}function KT(){if(Qe.has("roof"))return Qe.get("roof");const{c:n,ctx:e}=ui(128,128),t=Wn(55);e.fillStyle="#4d4c49",e.fillRect(0,0,128,128);for(let r=0;r<2600;r++){const s=55+t()*45;e.fillStyle=`rgba(${s},${s},${s-2},${.3+t()*.4})`,e.fillRect(t()*128,t()*128,1+t()*2,1+t()*2)}const i=hi(n);return Qe.set("roof",i),i}function ZT(){if(Qe.has("wood"))return Qe.get("wood");const{c:n,ctx:e}=ui(128,128),t=Wn(77);e.fillStyle="#6b4a2c",e.fillRect(0,0,128,128);for(let r=0;r<40;r++)e.strokeStyle=`rgba(${40+t()*40},${25+t()*25},${15+t()*15},0.4)`,e.lineWidth=1+t()*2,e.beginPath(),e.moveTo(0,t()*128),e.bezierCurveTo(40,t()*128,90,t()*128,128,t()*128),e.stroke();const i=hi(n);return Qe.set("wood",i),i}const JT={stone:{wall:"#8d8579",wall2:"#7a7268",trim:"#b6ada0",glass:"#2b3742"},brick:{wall:"#7c4a3c",wall2:"#6a3d31",trim:"#c9bda9",glass:"#28323c"},glass:{wall:"#5d6f80",wall2:"#48586a",trim:"#93a3b3",glass:"#38505f"},panel:{wall:"#b9b7b0",wall2:"#a3a29c",trim:"#d5d3cc",glass:"#31414d"},residential:{wall:"#a8977f",wall2:"#93836d",trim:"#d3c7b1",glass:"#2b3742"}};function QT(n,e){const t=`facade-${n}-${e}`;if(Qe.has(t))return{map:Qe.get(t),emissive:Qe.get(t+"-e"),style:n};const{c:i,ctx:r}=ui(128,128),{c:s,ctx:o}=ui(128,128),a=Wn(e),l=JT[n];if(o.fillStyle="#000",o.fillRect(0,0,128,128),n==="brick"){r.fillStyle=l.wall,r.fillRect(0,0,128,128);for(let f=0;f<128;f+=8)for(let p=f/8%2?-8:0;p<128;p+=16)r.fillStyle=`rgba(${100+a()*45},${58+a()*30},${46+a()*22},0.9)`,r.fillRect(p+1,f+1,14,6);r.fillStyle="rgba(30,20,16,0.12)",r.fillRect(0,0,128,128)}else if(n==="glass"){r.fillStyle=l.glass,r.fillRect(0,0,128,128);const f=r.createLinearGradient(0,0,128,128);f.addColorStop(0,"rgba(190,215,235,0.30)"),f.addColorStop(.5,"rgba(120,150,175,0.05)"),f.addColorStop(1,"rgba(20,32,42,0.35)"),r.fillStyle=f,r.fillRect(0,0,128,128)}else{r.fillStyle=l.wall,r.fillRect(0,0,128,128);for(let f=0;f<900;f++){const p=120+a()*60;r.fillStyle=`rgba(${p},${p-3},${p-8},${.08+a()*.16})`,r.fillRect(a()*128,a()*128,1+a()*3,1+a()*3)}}const c=(f,p,v,x,m)=>{r.fillStyle=l.trim,r.fillRect(f-3,p-3,v+6,x+6);const d=r.createLinearGradient(f,p,f+v,p+x);if(d.addColorStop(0,"#3b4a55"),d.addColorStop(.45,l.glass),d.addColorStop(1,"#1e262e"),r.fillStyle=d,r.fillRect(f,p,v,x),r.fillStyle="rgba(210,230,245,0.16)",r.beginPath(),r.moveTo(f,p+x),r.lineTo(f+v*.55,p),r.lineTo(f+v*.8,p),r.lineTo(f+v*.2,p+x),r.fill(),r.strokeStyle="rgba(30,34,38,0.65)",r.lineWidth=1.5,r.beginPath(),r.moveTo(f+v/2,p),r.lineTo(f+v/2,p+x),r.stroke(),a()<m){const g=a()<.8?"#ffd79a":"#cfe3ff";o.fillStyle=g,o.fillRect(f,p,v,x),o.fillStyle="rgba(0,0,0,0.35)",o.fillRect(f+v*.45,p,v*.55,x)}};if(n==="glass"){for(let f=0;f<2;f++)for(let p=0;p<2;p++){const v=p*64+4,x=f*64+4;a()<.55&&(o.fillStyle=a()<.75?"#e8cf9d":"#a9c6e6",o.fillRect(v,x,56,56),o.fillStyle="rgba(0,0,0,0.4)",o.fillRect(v,x+32,56,24))}r.fillStyle=l.trim;for(let f=0;f<=128;f+=64)r.fillRect(f-2,0,4,128),r.fillRect(0,f-2,128,4);r.fillStyle="rgba(255,255,255,0.06)",r.fillRect(0,0,128,8)}else if(n==="panel"){r.fillStyle=l.wall2,r.fillRect(0,0,128,22),c(8,28,112,58,.5),r.fillStyle=l.wall2,r.fillRect(0,92,128,36),r.fillStyle="rgba(40,44,48,0.5)",r.fillRect(0,96,128,3);for(let f=4;f<128;f+=8)r.fillStyle="rgba(60,64,68,0.55)",r.fillRect(f,86,1.5,10)}else c(28,24,72,62,.55),r.fillStyle="rgba(0,0,0,0.10)",r.fillRect(0,112,128,16),r.fillStyle=l.wall2,r.fillRect(0,120,128,8),n==="residential"&&(r.fillStyle="rgba(20,16,12,0.25)",r.fillRect(22,86,84,3));const u=hi(i),h=hi(s);return Qe.set(t,u),Qe.set(t+"-e",h),{map:u,emissive:h,style:n}}function eA(n){const e=`shop-${n}`;if(Qe.has(e))return Qe.get(e);const{c:t,ctx:i}=ui(256,128),r=Wn(n);i.fillStyle="#2b2b2e",i.fillRect(0,0,256,128);for(let a=0;a<2;a++){const l=8+a*122,c=i.createLinearGradient(l,18,l,104);c.addColorStop(0,"#3f4a52"),c.addColorStop(.6,"#26313a"),c.addColorStop(1,"#151a20"),i.fillStyle=c,i.fillRect(l,18,114,92),i.fillStyle="rgba(220,235,250,0.15)",i.beginPath(),i.moveTo(l,110),i.lineTo(l+60,18),i.lineTo(l+88,18),i.lineTo(l+22,110),i.fill(),i.strokeStyle="#4a4a4d",i.lineWidth=3,i.strokeRect(l,18,114,92),r()<.7&&(i.fillStyle="rgba(255,205,140,0.35)",i.fillRect(l+6,26,102,46))}i.fillStyle="#17181b",i.fillRect(0,0,256,18);const s=Math.floor(r()*360);i.fillStyle=`hsl(${s},55%,52%)`,i.fillRect(96,4,64,10),i.fillStyle=`hsl(${(s+40)%360},60%,45%)`,i.fillRect(14,6,60,6),i.fillStyle="#3a3a3d",i.fillRect(0,112,256,16);const o=hi(t);return o.repeat.set(1,1),Qe.set(e,o),o}function __(){if(Qe.has("pool"))return Qe.get("pool");const{c:n,ctx:e}=ui(128,128),t=e.createRadialGradient(64,64,2,64,64,62);t.addColorStop(0,"rgba(255,226,170,0.85)"),t.addColorStop(.35,"rgba(255,210,140,0.35)"),t.addColorStop(1,"rgba(255,200,120,0)"),e.fillStyle=t,e.fillRect(0,0,128,128);const i=hi(n,!1,!0);return Qe.set("pool",i),i}function tA(){if(Qe.has("cloud"))return Qe.get("cloud");const{c:n,ctx:e}=ui(256,128),t=Wn(404);e.clearRect(0,0,256,128);for(let r=0;r<22;r++){const s=30+t()*196,o=40+t()*44,a=14+t()*30,l=e.createRadialGradient(s,o,1,s,o,a);l.addColorStop(0,"rgba(255,255,255,0.75)"),l.addColorStop(.6,"rgba(240,244,252,0.35)"),l.addColorStop(1,"rgba(230,238,250,0)"),e.fillStyle=l,e.beginPath(),e.arc(s,o,a,0,Math.PI*2),e.fill()}const i=hi(n,!1,!0);return Qe.set("cloud",i),i}function Wu(n,e="#ffd9a0",t="#101216"){const i=`sign-${n}-${e}`;if(Qe.has(i))return Qe.get(i);const{c:r,ctx:s}=ui(512,128);s.fillStyle=t,s.fillRect(0,0,512,128),s.strokeStyle=e,s.lineWidth=5,s.strokeRect(8,8,496,112),s.fillStyle=e,s.font="bold 52px system-ui, sans-serif",s.textAlign="center",s.textBaseline="middle",s.fillText(n,256,68);const o=hi(r,!1);return Qe.set(i,o),o}function d0(n){const e=n==="high"?8:n==="medium"?4:1;Qe.forEach(t=>{t.anisotropy=e,t.needsUpdate=!0})}const tn=7,qe=14,ht=34,vi=qe+ht,Qi=tn*vi+qe,ni=-Qi/2,an=[];for(let n=0;n<=tn;n++)an.push(ni+qe/2+n*vi);const Ri=(n,e)=>({x:ni+qe+n*vi+ht/2,z:ni+qe+e*vi+ht/2});class Ro{constructor(){B(this,"map",new Map)}add(e,t){const i=t.index?t.toNonIndexed():t;if(i.attributes.normal||i.computeVertexNormals(),!i.attributes.uv){const s=i.attributes.position.count;i.setAttribute("uv",new ft(new Float32Array(s*2),2))}let r=this.map.get(e);r||(r=[],this.map.set(e,r)),r.push(i)}flush(e,t,i,r){let s=0;this.map.forEach((o,a)=>{if(!o.length)return;const l=Dl(o,!1);if(o.forEach(u=>u.dispose()),!l)return;l.computeBoundingSphere();const c=new dt(l,a);c.name=`${r}-${s++}`,c.castShadow=t,c.receiveShadow=i,c.matrixAutoUpdate=!1,e.add(c)}),this.map.clear()}}function nA(n,e){const t=new St;t.name="city",n.add(t);const i=[],r=[],s=[],o=[],a=[];["stone","brick","glass","panel","residential"].map((R,D)=>QT(R,11+D*37)).forEach((R,D)=>{const F=new st({map:R.map,emissiveMap:R.emissive,emissive:new be(16764820),emissiveIntensity:0,roughness:R.style==="glass"?.35:.85,metalness:R.style==="glass"?.45:.05,envMapIntensity:.6});a.push(F)});const u=[0,1].map(R=>{const D=eA(100+R*13);return new st({map:D,emissiveMap:D,emissive:new be(16763277),emissiveIntensity:.12,roughness:.55,metalness:.15})}),h=new st({map:$T(),roughness:.95,metalness:0}),f=new st({map:KT(),roughness:.95}),p=new st({map:qT(),roughness:1}),v=new st({map:YT(),roughness:.92,metalness:.04}),x=new st({map:ZT(),roughness:.85}),m=new st({color:3751493,roughness:.55,metalness:.7}),d=new st({color:2237995,roughness:.6,metalness:.6}),g=new st({color:14078662,roughness:.85,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),_=new st({color:13280831,roughness:.85,metalness:0,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),S=new st({color:2764081,emissive:new be(16766880),emissiveIntensity:0,roughness:.4,metalness:.5}),b=new kn({map:__(),transparent:!0,opacity:0,depthWrite:!1,blending:ha}),A=new st({color:4944441,roughness:.95,flatShading:!0}),T=new st({color:4863526,roughness:.95}),P=new kn({color:16767392});new st({color:10470612,roughness:.15,metalness:.6,transparent:!0,opacity:.7});const X=new st({color:3102310,roughness:.12,metalness:.75,transparent:!0,opacity:.9}),y=new Ro,M=new Ro,G=new Ro,V=new Ro,$=new Ro,ee=(R,D,F,H,Q,O,le,ue=0)=>y.add(R,Ee(XT(Q,O,le),D,F,H,ue)),q=new ti(900,900,1,1),ne=q.attributes.uv;for(let R=0;R<ne.count;R++)ne.setXY(R,ne.getX(R)*90,ne.getY(R)*90);const N=new dt(q,v);N.rotation.x=-Math.PI/2,N.receiveShadow=!0,N.matrixAutoUpdate=!1,N.updateMatrix(),t.add(N);const re=(R,D)=>Wn(R*73856093^D*19349663^2654435769),te=(R,D,F,H)=>{i.push({minX:R-F/2,maxX:R+F/2,minZ:D-H/2,maxZ:D+H/2})},de=new st({color:7039846,roughness:.95}),Ne=(R,D)=>{y.add(de,Ee(Xe(ht+.6,.2,ht+.6,2),R,.1,D)),y.add(h,Ee(Xe(ht,.24,ht,2),R,.12,D))},He=(R,D,F,H,Q,O,le={})=>{if(ee(a[O],R,Q/2+.24,D,F,Q,H),r.push({x:R,z:D,w:F,d:H,h:Q}),te(R,D,F,H),le.shop){const ue=re(Math.round(R),Math.round(D)),pe=u[Math.floor(ue()*u.length)];y.add(pe,Ee(Xe(F+.25,3.6,H+.25,4),R,2.04,D));for(let he=0;he<4;he++){if(ue()>.55)continue;const Ae=(he%2===0?F:H)*(.55+ue()*.3),Be=[10238770,3103864,11043119,3107666,7028600],U=new st({color:Be[Math.floor(ue()*Be.length)],roughness:.8}),me=.75,K=4.15;if(he<2){const se=D+(he===0?H/2+me:-H/2-me);M.add(U,Ee(Xe(Ae,.16,1.5,2),R,K,se,0,1,1,1)),y.add(P,Ee(Xe(Ae*.6,.55,.12,2),R,K+.55,se+(he===0?.2:-.2)))}else{const se=R+(he===2?F/2+me:-F/2-me);M.add(U,Ee(Xe(1.5,.16,Ae,2),se,K,D)),y.add(P,Ee(Xe(.12,.55,Ae*.6,2),se+(he===2?.2:-.2),K+.55,D))}}}if(le.roofDetail&&Q>20){y.add(f,Ee(Xe(F,.7,.35,2),R,Q+.24,D+H/2-.35/2)),y.add(f,Ee(Xe(F,.7,.35,2),R,Q+.24,D-H/2+.35/2)),y.add(f,Ee(Xe(.35,.7,H,2),R+F/2-.35/2,Q+.24,D)),y.add(f,Ee(Xe(.35,.7,H,2),R-F/2+.35/2,Q+.24,D));const pe=re(Math.round(R*3),Math.round(D*3)),he=1+Math.floor(pe()*3);for(let Le=0;Le<he;Le++){const Ae=2+pe()*3,Be=2+pe()*3;M.add(d,Ee(Xe(Ae,1+pe(),Be,1),R+(pe()-.5)*(F-Ae-2),Q+.24+.5,D+(pe()-.5)*(H-Be-2)))}Q>40&&(M.add(m,Ee(new Ht(.08,.11,9,4),R,Q+4.7,D)),$.add(S,Ee(Xe(.3,.3,.3,1),R,Q+9.3,D)))}},Z=(R,D,F=1)=>{const H=Wn(Math.round(R*91+D*17));M.add(T,Ee(new Ht(.16,.24,2.4,5),R,1.2+.24,D));const Q=(1.5+H()*.7)*F,O=2.6+.24+Q*.4;M.add(A,Ee(new uc(Q,0),R,O,D,H()*3,1,.9,1)),H()<.6&&M.add(A,Ee(new uc(Q*.7,0),R+(H()-.5)*Q,O+Q*.5,D+(H()-.5)*Q,H()*3))},ae=(R,D,F=0)=>{M.add(x,Ee(Xe(2,.1,.55,1),R,.72,D,F)),M.add(x,Ee(Xe(2,.5,.1,1),R,.98,D,F));for(const H of[-1,1])M.add(m,Ee(Xe(.1,.5,.5,1),R+Math.cos(F)*.8*H,.45,D-Math.sin(F)*.8*H,F))},ve=(R,D,F)=>{const H=Math.sin(F),Q=Math.cos(F);M.add(m,Ee(new Ht(.11,.16,7.2,6),R,3.6+.24,D)),M.add(m,Ee(Xe(.14,.14,1.9,1),R+H*.9,7.1,D+Q*.9,F)),$.add(S,Ee(Xe(.55,.2,.9,1),R+H*1.75,6.98,D+Q*1.75,F));const O=new ti(11,11);O.rotateX(-Math.PI/2),V.add(b,Ee(O,R+H*2.6,.055,D+Q*2.6))},_e=(R,D,F)=>{M.add(m,Ee(new Ht(.1,.13,5.4,5),R,2.7+.24,D)),M.add(d,Ee(Xe(.44,1.15,.4,1),R,5,D,F));const H=new kn({color:Math.random()<.5?6094746:16735324});$.add(H,Ee(Xe(.24,.24,.08,1),R,5.28,D+.22,F))},Ce=(R,D,F,H,Q,O=.035)=>{const le=new ti(F,H);le.rotateX(-Math.PI/2),G.add(Q,Ee(le,R,O,D))};for(const R of an)for(let D=0;D<tn;D++){const F=an[D]+qe/2,H=an[D+1]-qe/2,Q=H-F,O=(F+H)/2;Ce(R-.18,O,.14,Q-2,_),Ce(R+.18,O,.14,Q-2,_),Ce(R-qe/2+.5,O,.12,Q,g),Ce(R+qe/2-.5,O,.12,Q,g);const le=2.2;for(let ue=-Q/2+3;ue<Q/2-3;ue+=6)Ce(R-3.4,O+ue,.12,le,g),Ce(R+3.4,O+ue,.12,le,g)}for(const R of an)for(let D=0;D<tn;D++){const F=an[D]+qe/2,H=an[D+1]-qe/2,Q=H-F,O=(F+H)/2;Ce(O,R-.18,Q-2,.14,_),Ce(O,R+.18,Q-2,.14,_),Ce(O,R-qe/2+.5,Q,.12,g),Ce(O,R+qe/2-.5,Q,.12,g);for(let le=-Q/2+3;le<Q/2-3;le+=6)Ce(O+le,R-3.4,2.2,.12,g),Ce(O+le,R+3.4,2.2,.12,g)}for(const R of an)for(const D of an)for(let F=0;F<2;F++){const H=F===0?qe/2+1.1:-qe/2-1.1;for(let O=-qe/2+1;O<qe/2-.5;O+=1.5)Ce(R+O+.3,D+H,.7,2.4,g);const Q=F===0?qe/2+1.1:-qe/2-1.1;for(let O=-qe/2+1;O<qe/2-.5;O+=1.5)Ce(R+Q,D+O+.3,2.4,.7,g)}for(let R=0;R<=tn;R++){const D=an[R];for(let F=ni+24;F<ni+Qi-12;F+=58)ve(D+qe/2+.9,F,-Math.PI/2),ve(D-qe/2-.9,F+29,Math.PI/2)}for(let R=0;R<=tn;R++){const D=an[R];for(let F=ni+24;F<ni+Qi-12;F+=58)ve(F,D-qe/2-.9,0),ve(F+29,D+qe/2+.9,Math.PI)}for(let R=1;R<tn;R+=2)for(let D=1;D<tn;D+=2){const F=an[R]+qe/2+2.2,H=an[D]+qe/2+2.2;_e(F,H,0),_e(F-qe-4.4,H,0),_e(F,H-qe-4.4,Math.PI/2),_e(F-qe-4.4,H-qe-4.4,Math.PI/2)}const ye=Ri(3,3),We=Ri(3,4),et=Ri(1,1),$e=Ri(5,5),I=Ri(2,5),Kt=Ri(5,1);{const R=new Ht(12,12,.14,28);y.add(h,Ee(R,ye.x,.31,ye.z)),M.add(h,Ee(new Ht(3.4,3.6,.75,20),ye.x,.62,ye.z)),M.add(X,Ee(new Ht(3.15,3.15,.2,20),ye.x,.98,ye.z)),M.add(h,Ee(new Ht(.6,.9,2.2,12),ye.x,1.6,ye.z)),M.add(X,Ee(new Ht(1.5,1.5,.18,14),ye.x,2.3,ye.z)),te(ye.x,ye.z,7,7);for(let F=0;F<8;F++){const H=F/8*Math.PI*2,Q=ye.x+Math.cos(H)*9,O=ye.z+Math.sin(H)*9;ae(Q,O,-H+Math.PI/2),Z(ye.x+Math.cos(H+.4)*13.5,ye.z+Math.sin(H+.4)*13.5,.9)}for(let F=0;F<6;F++){const H=F/6*Math.PI*2+.5,Q=ye.x+Math.cos(H)*6.5,O=ye.z+Math.sin(H)*6.5;M.add(h,Ee(Xe(1.8,.55,1.8,1),Q,.75,O)),Z(Q,O,.55)}const D=new dt(new ti(9,2.2),new kn({map:Wu("SHADOW CITY","#cfe6ff","#0b1016"),transparent:!1}));D.position.set(ye.x,7.6,ye.z+16.6),D.rotation.y=Math.PI,t.add(D),te(ye.x+6,ye.z+16,1.2,1.2),M.add(m,Ee(Xe(.2,8,.2,1),ye.x+6,4,ye.z+16)),M.add(m,Ee(Xe(.2,8,.2,1),ye.x-6,4,ye.z+16))}{const R=We.x,D=We.z;ee(a[0],R,4.6,D-4,26,9,14),r.push({x:R,z:D-4,w:26,d:14,h:9}),te(R,D-4,26,14),M.add(d,Ee(Xe(.7,6,.7,1),R-4,3.2,D+3.2)),M.add(d,Ee(Xe(.7,6,.7,1),R+4,3.2,D+3.2)),M.add(d,Ee(Xe(9,.7,.8,1),R,6.2,D+3.2));const F=new dt(new ti(10,1.9),new kn({map:Wu("NIGHTLINE COURIERS","#8fd3ff","#0a0f14")}));F.position.set(R,7.8,D+3.6),t.add(F);for(let H=0;H<5;H++)M.add(x,Ee(Xe(1.2,1.1,1.2,1),R+8+H*1.4,.8,D+4+H%2*1.6));s.push({x:R-9,z:D-19,heading:Math.PI,color:"#1f2a36",kind:"van"}),s.push({x:R+9,z:D-19,heading:Math.PI,color:"#4a2b2b",kind:"sedan"})}const je=(R,D,F)=>{const H=Wn(F);y.add(p,Ee(Xe(ht-1.4,.12,ht-1.4,4),R,.3,D)),Ce(R,D,ht-2,3.4,h,.365),Ce(R,D,3.4,ht-2,h,.365);for(let le=0;le<16;le++){const ue=R+(H()-.5)*(ht-8),pe=D+(H()-.5)*(ht-8);Math.abs(ue-R)<3||Math.abs(pe-D)<3||Z(ue,pe,.85+H()*.5)}for(let le=0;le<4;le++){const ue=H()*Math.PI*2;ae(R+Math.cos(ue)*8,D+Math.sin(ue)*8,-ue+Math.PI/2)}const Q=new kd(4.2,20);Q.rotateX(-Math.PI/2);const O=new dt(Q,X);O.position.set(R+8,.36,D-8),O.receiveShadow=!0,t.add(O),te(R+8,D-8,8.4,8.4);for(let le=0;le<3;le++){const ue=R+(H()-.5)*22,pe=D+(H()-.5)*22;M.add(d,Ee(new Ht(.35,.3,1,8),ue,.85,pe))}};je(et.x,et.z,313),je($e.x,$e.z,707);{const R=I.x,D=I.z;y.add(v,Ee(Xe(ht-1.6,.1,ht-1.6,8),R,.29,D));for(let F=0;F<5;F++)for(let H=0;H<2;H++){const Q=R-11+F*5.5,O=D-9+H*18;Ce(Q,O,.16,5.5,g,.355)}for(let F=0;F<6;F++)ve(R-13+F%3*13,D-13+Math.floor(F/3)*26,F%2?Math.PI:0);s.push({x:R-8.5,z:D-7,heading:0,color:"#2f3a45",kind:"sedan"}),s.push({x:R-3,z:D-7,heading:0,color:"#6d2027",kind:"suv"}),s.push({x:R+2.5,z:D-7,heading:0,color:"#c8c3b6",kind:"sedan"}),s.push({x:R+8,z:D+12,heading:Math.PI,color:"#22303b",kind:"van"}),ee(a[3],R,3.5+.24,D+13,10,6.5,8),te(R,D+13,10,8),r.push({x:R,z:D+13,w:10,d:8,h:6.5})}{let R=function(){return new st({color:14210767,roughness:.7})};const D=Kt.x,F=Kt.z;y.add(h,Ee(Xe(ht-1.6,.1,ht-1.6,4),D,.29,F)),M.add(R(),Ee(Xe(20,.7,13,3),D,6.4,F));for(const[Q,O]of[[-8,-5],[8,-5],[-8,5],[8,5]])M.add(R(),Ee(Xe(.7,6.2,.7,2),D+Q,3.4,F+O)),te(D+Q,F+O,.9,.9);for(const[Q,O]of[[-3.5,0],[3.5,0]])M.add(d,Ee(Xe(1.1,1.7,.9,1),D+Q,1.15,F+O)),te(D+Q,F+O,1.2,1);ee(a[1],D+11,2.6,F-10,8,4.4,7),te(D+11,F-10,8,7),r.push({x:D+11,z:F-10,w:8,d:7,h:4.4}),M.add(m,Ee(new Ht(.25,.25,9,6),D-13,4.7,F+9));const H=new dt(new ti(2.6,5.2),new kn({map:Wu("FUEL 2.49","#ffcf6b","#11151a")}));H.position.set(D-13,8.2,F+9.1),t.add(H),s.push({x:D-3.5,z:F+8,heading:0,color:"#2b3f52",kind:"sedan"}),s.push({x:D+3.5,z:F-8,heading:Math.PI,color:"#b8412f",kind:"suv"})}for(let R=0;R<tn;R++)for(let D=0;D<tn;D++){const F=`${R},${D}`;if(F==="3,3"||F==="3,4"||F==="1,1"||F==="5,5"||F==="2,5"||F==="5,1"){const{x:ue,z:pe}=Ri(R,D);Ne(ue,pe);continue}const{x:H,z:Q}=Ri(R,D);Ne(H,Q);const O=re(R,D),le=Math.max(Math.abs(R-3),Math.abs(D-3));if(le<=1){const ue=15+O()*8,pe=15+O()*8,he=34+O()*30,Le=H+(O()-.5)*(ht-8-ue),Ae=Q+(O()-.5)*(ht-8-pe);He(Le,Ae,ue,pe,he,2+Math.floor(O()*2),{shop:!0,roofDetail:!0});const Be=8+O()*4,U=Le+(O()<.5?-1:1)*(ue/2+Be/2+1.2),me=Ae+(O()<.5?-1:1)*(pe/2+4);Math.abs(U-H)<ht/2-Be/2-3&&Math.abs(me-Q)<ht/2-5?He(U,me,Be,8+O()*5,8+O()*10,4,{shop:!0,roofDetail:!0}):He(Le+ue/2+5,Ae-pe/2-5,9,9,12+O()*8,0,{shop:!0})}else if(le===2){const ue=O()<.5;for(let pe=0;pe<2;pe++){const he=ue?12+O()*3:24+O()*3,Le=ue?24+O()*3:12+O()*3,Ae=H+(ue?(pe===0?-1:1)*7.5:0)+(O()-.5)*2,Be=Q+(ue?0:(pe===0?-1:1)*7.5)+(O()-.5)*2,U=13+O()*14;He(Ae,Be,he,Le,U,Math.floor(O()*5),{shop:!0,roofDetail:!0})}}else if(O()<.45){const ue=22+O()*5,pe=14+O()*5,he=H+(O()-.5)*2,Le=Q+(O()-.5)*2,Ae=9+O()*6;He(he,Le,ue,pe,Ae,4,{shop:!0,roofDetail:!1}),y.add(f,Ee(Xe(ue+.4,.5,pe+.4,2),he,Ae+.5,Le))}else for(let ue=0;ue<4;ue++){if(O()<.18)continue;const pe=ue%2===0?-8:8,he=ue<2?-8:8,Le=9+O()*2.5,Ae=8+O()*2.5,Be=5.6+O()*2.6,U=H+pe+(O()-.5)*1.5,me=Q+he+(O()-.5)*1.5;y.add(p,Ee(Xe(Le+4,.08,Ae+4,4),U,.31,me)),He(U,me,Le,Ae,Be,4,{}),y.add(f,Ee(jT(Le+1.2,2.4+O()*1.4,Ae+1.2),U,Be+.24,me,O()<.5?0:Math.PI/2)),$.add(S,Ee(Xe(.3,.25,.3,1),U,Be-.6,me+Ae/2+.2))}for(let ue=0;ue<2;ue++){const pe=Math.floor(O()*4),he=(O()-.5)*(ht-10),Le=ht/2-1.5;pe===0?Z(H+he,Q+Le,.7):pe===1?Z(H+he,Q-Le,.7):Z(pe===2?H+Le:H-Le,Q+he,.7)}O()<.5&&M.add(d,Ee(new Ht(.3,.26,.9,7),H+14,.75,Q-14))}const Ke=[{x:19.5,z:9,heading:0,color:"#8a1f1f",kind:"sedan"},{x:19.5,z:-14,heading:0,color:"#26364a",kind:"suv"},{x:-19.5,z:6,heading:Math.PI,color:"#c9c4b7",kind:"sedan"},{x:28.5,z:30,heading:Math.PI/2,color:"#2b2b30",kind:"van"},{x:5,z:42,heading:0,color:"#b8a24a",kind:"sedan"},{x:-52,z:28,heading:Math.PI/2,color:"#3d5c4a",kind:"suv"},{x:76,z:5,heading:0,color:"#5a2f6b",kind:"sedan"},{x:-100,z:-4,heading:Math.PI,color:"#1e5a6b",kind:"sedan"},{x:52,z:76,heading:Math.PI/2,color:"#7a4a1f",kind:"suv"},{x:-76,z:52,heading:0,color:"#334155",kind:"sedan"}];s.push(...Ke);for(let R=0;R<tn;R+=2)for(let D=0;D<tn;D+=2){const{x:F,z:H}=Ri(R,D),Q=ht/2-1.6,O=.24;o.push([new L(F-Q,O,H-Q),new L(F+Q,O,H-Q),new L(F+Q,O,H+Q),new L(F-Q,O,H+Q)])}const Oe=h,ut=1.4,Ue=Qi/2+2,C=[[0,-Ue,Qi+8,1.6],[0,Ue,Qi+8,1.6],[-Ue,0,1.6,Qi+8],[Ue,0,1.6,Qi+8]];for(const[R,D,F,H]of C)y.add(Oe,Ee(Xe(F,ut,H,2),R,ut/2,D)),te(R,D,F,H);y.flush(t,!0,!0,"static"),M.flush(t,!0,!0,"props"),G.flush(t,!1,!0,"marks"),V.flush(t,!1,!1,"pools"),$.flush(t,!1,!1,"lamps");const E=[new L(-72,0,72),new L(96,0,-120),new L(-144,0,96),new L(48,0,144),new L(120,0,24),new L(-24,0,-120)],W=[new L(8,.4,9),new L(-33,.4,46),new L(58,.4,-33),new L(-84,.4,-20),new L(120,.4,72),new L(-120,.4,120),new L(36,.4,108),new L(-48,.4,-84)],ie=(R,D)=>{const F=R-(ni+qe),H=D-(ni+qe),Q=Math.floor(F/vi),O=Math.floor(H/vi);if(Q<0||Q>=tn||O<0||O>=tn)return 0;const le=F-Q*vi,ue=H-O*vi;return le<=ht&&ue<=ht?.24:0},oe=(R,D)=>Math.abs(R)<70&&Math.abs(D)<70?"Shadow Center":R>70?D>0?"East Docks":"Steel Row":R<-70?D>0?"West Heights":"Old Quarter":D>0?"Northline":"Southside";return{colliders:i,buildings:r,vehicleSpawns:s,pedLoops:o,trafficRoads:an,depot:new L(We.x,.24,We.z-14),deliverySpots:E,pickupSpots:W,policeSpawn:new L(96,0,0),facadeMaterials:a,lightPoolMaterial:b,lampMaterial:S,groundHeightAt:ie,zoneAt:oe,group:t}}const y_={skin:12159592,shirt:15263198,jacket:2237998,pants:3028546,shoes:1316378,hair:1513499},Ci=(n,e=.75,t=.05)=>new st({color:n,roughness:e,metalness:t});function fl(n,e){return new zd(n,e,3,8)}class x_{constructor(e=y_,t=!0){B(this,"root",new St);B(this,"hips",new St);B(this,"torso",new St);B(this,"head",new St);B(this,"armL",new St);B(this,"armR",new St);B(this,"elbowL",new St);B(this,"elbowR",new St);B(this,"legL",new St);B(this,"legR",new St);B(this,"kneeL",new St);B(this,"kneeR",new St);B(this,"phase",0);B(this,"idleTime",0);B(this,"pelvisY",.94);B(this,"meshes",[]);const i=Ci(e.skin,.62),r=Ci(e.shirt,.85),s=Ci(e.jacket,.8),o=Ci(e.pants,.9),a=Ci(e.shoes,.6,.15),l=Ci(e.hair,.9),c=(x,m,d,g=0,_=0,S=0)=>{const b=new dt(m,d);return b.position.set(g,_,S),b.castShadow=!0,b.receiveShadow=!1,x.add(b),this.meshes.push(b),b};this.root.add(this.hips),this.hips.position.y=this.pelvisY,this.torso.position.y=.04,this.hips.add(this.torso),c(this.torso,new Nt(.42,.52,.25),s,0,.3,0),c(this.torso,new Nt(.3,.3,.06),r,0,.38,.12),c(this.torso,new Nt(.44,.1,.26),s,0,.52,0),c(this.torso,new Nt(.4,.09,.24),Ci(1316378,.7),0,.06,0),c(this.torso,new Nt(.22,.08,.2),s,0,.575,0),c(this.torso,new Nt(.09,.06,.03),r,0,.56,.112),this.head.position.y=.63,this.torso.add(this.head),c(this.head,new Ht(.055,.06,.09,8),i,0,0,0),c(this.head,new Gs(.115,t?12:8,t?10:7),i,0,.11,0).scale.set(.92,1.05,.95),c(this.head,new Gs(.118,t?12:8,6,0,Math.PI*2,0,Math.PI*.52),l,0,.115,0),c(this.head,new Nt(.14,.05,.04),l,0,.16,-.09),t&&(c(this.head,new Nt(.035,.02,.01),Ci(1053206,.4),-.042,.12,.108),c(this.head,new Nt(.035,.02,.01),Ci(1053206,.4),.042,.12,.108));const h=fl(.068,.2),f=fl(.058,.2);for(const x of[-1,1]){const m=x===-1?this.armL:this.armR,d=x===-1?this.elbowL:this.elbowR;m.position.set(x*.268,.5,.005),this.torso.add(m),c(m,h,s,0,-.15,0),d.position.y=-.3,m.add(d),c(d,f,s,0,-.12,0),c(d,new Gs(.062,8,6),i,0,-.26,0)}const p=fl(.078,.26),v=fl(.065,.26);for(const x of[-1,1]){const m=x===-1?this.legL:this.legR,d=x===-1?this.kneeL:this.kneeR;m.position.set(x*.11,-.02,0),this.hips.add(m),c(m,p,o,0,-.2,0),d.position.y=-.42,m.add(d),c(d,v,o,0,-.19,0),c(d,new Nt(.13,.09,.27),a,0,-.39,.055)}this.root.traverse(x=>{x.isMesh&&(x.castShadow=!0)})}get object(){return this.root}setCastShadow(e){this.meshes.forEach(t=>t.castShadow=e)}resetPose(){this.phase=0}animate(e,t,i,r=!1){if(r){this.legL.rotation.x=Fe.damp(this.legL.rotation.x,1.35,10,e),this.legR.rotation.x=Fe.damp(this.legR.rotation.x,1.35,10,e),this.kneeL.rotation.x=Fe.damp(this.kneeL.rotation.x,-1.35,10,e),this.kneeR.rotation.x=Fe.damp(this.kneeR.rotation.x,-1.35,10,e),this.armL.rotation.x=Fe.damp(this.armL.rotation.x,1.15,10,e),this.armR.rotation.x=Fe.damp(this.armR.rotation.x,1.15,10,e),this.elbowL.rotation.x=Fe.damp(this.elbowL.rotation.x,-.75,10,e),this.elbowR.rotation.x=Fe.damp(this.elbowR.rotation.x,-.75,10,e);return}const s=t>.25,o=yt((t-2.9)/3.6,0,1);this.idleTime+=e,s&&!i?this.phase+=e*(t*1.85+o*1.2):this.phase+=e*.6;const a=.46+o*.55,l=Math.sin(this.phase);Math.cos(this.phase);const c=14;if(i){this.hips.position.y=Fe.damp(this.hips.position.y,this.pelvisY+.04,10,e),this.torso.rotation.x=Fe.damp(this.torso.rotation.x,-.08,8,e),this.torso.rotation.y=Fe.damp(this.torso.rotation.y,0,8,e),this.legL.rotation.x=Fe.damp(this.legL.rotation.x,.55,9,e),this.legR.rotation.x=Fe.damp(this.legR.rotation.x,-.35,9,e),this.kneeL.rotation.x=Fe.damp(this.kneeL.rotation.x,-.95,9,e),this.kneeR.rotation.x=Fe.damp(this.kneeR.rotation.x,-.5,9,e),this.armL.rotation.x=Fe.damp(this.armL.rotation.x,-.9,8,e),this.armR.rotation.x=Fe.damp(this.armR.rotation.x,-.7,8,e),this.elbowL.rotation.x=Fe.damp(this.elbowL.rotation.x,-.6,8,e),this.elbowR.rotation.x=Fe.damp(this.elbowR.rotation.x,-.6,8,e),this.armL.rotation.z=Fe.damp(this.armL.rotation.z,-.25,8,e),this.armR.rotation.z=Fe.damp(this.armR.rotation.z,.25,8,e);return}if(!s){const u=Math.sin(this.idleTime*1.5)*.5+.5;this.hips.position.y=Fe.damp(this.hips.position.y,this.pelvisY-.01,6,e),this.torso.rotation.x=Fe.damp(this.torso.rotation.x,.03+u*.02,6,e),this.torso.rotation.y=Fe.damp(this.torso.rotation.y,Math.sin(this.idleTime*.4)*.06,4,e),this.legL.rotation.x=Fe.damp(this.legL.rotation.x,.02,8,e),this.legR.rotation.x=Fe.damp(this.legR.rotation.x,-.02,8,e),this.kneeL.rotation.x=Fe.damp(this.kneeL.rotation.x,.03,8,e),this.kneeR.rotation.x=Fe.damp(this.kneeR.rotation.x,.05,8,e),this.armL.rotation.x=Fe.damp(this.armL.rotation.x,.05+u*.03,6,e),this.armR.rotation.x=Fe.damp(this.armR.rotation.x,.05+u*.03,6,e),this.armL.rotation.z=Fe.damp(this.armL.rotation.z,-.09,6,e),this.armR.rotation.z=Fe.damp(this.armR.rotation.z,.09,6,e),this.elbowL.rotation.x=Fe.damp(this.elbowL.rotation.x,-.22,6,e),this.elbowR.rotation.x=Fe.damp(this.elbowR.rotation.x,-.22,6,e),this.head.rotation.y=Fe.damp(this.head.rotation.y,Math.sin(this.idleTime*.31)*.25,3,e);return}this.hips.position.y=this.pelvisY+Math.sin(this.phase*2)*.012-.015,this.torso.rotation.x=Fe.damp(this.torso.rotation.x,.05+o*.2,c,e),this.torso.rotation.y=Fe.damp(this.torso.rotation.y,Math.sin(this.phase)*.06*(1-o),c,e),this.head.rotation.y=Fe.damp(this.head.rotation.y,0,6,e),this.legL.rotation.x=Fe.damp(this.legL.rotation.x,l*a,c,e),this.legR.rotation.x=Fe.damp(this.legR.rotation.x,-l*a,c,e),this.kneeL.rotation.x=Fe.damp(this.kneeL.rotation.x,-Math.max(0,-l)*(.55+o*.85)-.05,c,e),this.kneeR.rotation.x=Fe.damp(this.kneeR.rotation.x,-Math.max(0,l)*(.55+o*.85)-.05,c,e),this.armL.rotation.x=Fe.damp(this.armL.rotation.x,-l*(.42+o*.55),c,e),this.armR.rotation.x=Fe.damp(this.armR.rotation.x,l*(.42+o*.55),c,e),this.armL.rotation.z=Fe.damp(this.armL.rotation.z,-.1-o*.05,c,e),this.armR.rotation.z=Fe.damp(this.armR.rotation.z,.1+o*.05,c,e),this.elbowL.rotation.x=Fe.damp(this.elbowL.rotation.x,-.25-o*1.15,c,e),this.elbowR.rotation.x=Fe.damp(this.elbowR.rotation.x,-.25-o*1.15,c,e)}}const Co={x:0,z:0};class iA{constructor(){B(this,"rig",new x_(y_,!0));B(this,"pos",new L(0,.24,10));B(this,"velX",0);B(this,"velZ",0);B(this,"velY",0);B(this,"yaw",0);B(this,"speed",0);B(this,"grounded",!0);B(this,"radius",.36);B(this,"stepAccum",0);B(this,"onStep");B(this,"onJump");B(this,"onLand");B(this,"lean",0);this.rig.object.position.copy(this.pos)}get position(){return this.pos}get cameraTarget(){return new L(this.pos.x,this.pos.y+1.45,this.pos.z)}placeAt(e,t,i,r){this.pos.set(e,r.groundHeightAt(e,t),t),this.yaw=i,this.velX=this.velZ=this.velY=0,this.grounded=!0,this.rig.object.position.copy(this.pos),this.rig.object.rotation.y=i}update(e,t,i,r){const s=-Math.sin(r),o=-Math.cos(r),a=Math.cos(r),l=-Math.sin(r);let c=s*t.z+a*t.x,u=o*t.z+l*t.x;const h=Math.hypot(c,u),f=Math.min(1,h);h>1e-4&&(c/=h,u/=h);const p=t.run&&f>.2,v=(p?6.7:2.8)*f,x=c*v,m=u*v,d=this.grounded?p?11:13:3.5;if(this.velX=vr(this.velX,x,d,e),this.velZ=vr(this.velZ,m,d,e),h>.05){const S=Math.atan2(c,u);this.yaw=Cf(this.yaw,S,this.grounded?13:5,e)}t.jump&&this.grounded&&(this.velY=7,this.grounded=!1,this.onJump?.()),this.velY-=20*e,this.pos.y+=this.velY*e;const g=i.groundHeightAt(this.pos.x,this.pos.z);this.pos.y<=g+.001?(!this.grounded&&this.velY<-3&&this.onLand?.(),this.pos.y=g,this.velY=0,this.grounded=!0):this.pos.y>g+.08&&(this.grounded=!1),this.pos.y<g&&(this.pos.y=g),this.pos.x+=this.velX*e,this.pos.z+=this.velZ*e;for(let S=0;S<i.colliders.length;S++)v_(this.pos.x,this.pos.z,this.radius,i.colliders[S],Co)&&(this.pos.x+=Co.x,this.pos.z+=Co.z,Math.abs(Co.x)>Math.abs(Co.z)?this.velX=0:this.velZ=0);const _=172;if(this.pos.x=yt(this.pos.x,-_,_),this.pos.z=yt(this.pos.z,-_,_),this.speed=Math.hypot(this.velX,this.velZ),this.rig.object.position.copy(this.pos),this.rig.object.rotation.y=this.yaw,this.rig.animate(e,this.speed,!this.grounded),this.lean=vr(this.lean,yt(-this.velX*.01,-.06,.06),6,e),this.rig.torso.rotation.z=this.lean,this.grounded&&this.speed>.6){this.stepAccum+=this.speed*e;const S=this.speed>4?2.5:1.9;this.stepAccum>S&&(this.stepAccum=0,this.onStep?.())}else this.stepAccum=0}}const rA={sedan:{length:4.4,width:1.88,bodyH:.58,roofH:.52,wheelR:.34,clearance:.32,accel:11,maxSpeed:33},suv:{length:4.8,width:1.98,bodyH:.72,roofH:.66,wheelR:.41,clearance:.4,accel:9.5,maxSpeed:30},van:{length:5.2,width:2.05,bodyH:1,roofH:.9,wheelR:.38,clearance:.36,accel:8,maxSpeed:26},police:{length:4.5,width:1.9,bodyH:.6,roofH:.5,wheelR:.35,clearance:.33,accel:12.5,maxSpeed:35}},Xu={x:0,z:0};class Hd{constructor(e,t,i,r,s=0){B(this,"group",new St);B(this,"body",new St);B(this,"pos");B(this,"heading");B(this,"speed",0);B(this,"steer",0);B(this,"kind");B(this,"spec");B(this,"impact",0);B(this,"occupied",!1);B(this,"isPolice",!1);B(this,"headlightsOn",!1);B(this,"wheelSpin",0);B(this,"steerGroup",new St);B(this,"spinFront",new St);B(this,"spinRear",new St);B(this,"materials",[]);B(this,"lightBarMats",[]);B(this,"beamMat");B(this,"sirenTime",0);B(this,"wheelR");B(this,"damageFlash",0);this.kind=e,this.spec=rA[e],this.wheelR=this.spec.wheelR,this.pos=new L(i,0,r),this.heading=s,this.isPolice=e==="police",this.group.add(this.body),this.buildMesh(e,t),this.group.position.copy(this.pos),this.group.rotation.y=s}buildMesh(e,t){const i=this.spec,r=new st({color:t,roughness:.42,metalness:.06,envMapIntensity:1}),s=new st({color:2240570,roughness:.18,metalness:.1}),o=new st({color:1513757,roughness:.72,metalness:.35}),a=new st({color:16774874,emissive:16773320,emissiveIntensity:1.2,roughness:.3}),l=new st({color:9311252,emissive:16720152,emissiveIntensity:1.5,roughness:.4});this.materials.push(r,s,o,a,l);const c=i.clearance+i.bodyH/2,u=c+i.bodyH/2+i.roofH/2,h=[],f=[],p=[],v=[],x=[];h.push(Ee(Tn(i.width,i.bodyH,i.length,.97,.99,2),0,c,0)),h.push(Ee(Tn(i.width*.92,.14,i.length*.26,.95,1,2),0,c+i.bodyH/2,i.length*.3)),h.push(Ee(Tn(i.width*.92,.14,i.length*.18,.95,1,2),0,c+i.bodyH/2,-i.length*.37));const m=e==="van"?i.length*.52:i.length*.46,d=e==="van"?-i.length*.02:-i.length*.04;h.push(Ee(Tn(i.width*.99,.16,m*1.02,.99,1,2),0,c+i.bodyH/2-.02,d)),f.push(Ee(Tn(i.width*.86,i.roofH,m,e==="van"?.94:.8,e==="van"?.92:.72,2),0,c+i.bodyH/2+i.roofH/2-.02,d)),h.push(Ee(Tn(i.width*.76,.09,m*(e==="van"?.94:.8),1,1,2),0,u-.03,d)),p.push(Ee(Tn(i.width*1.01,.3,.34,1,1,2),0,i.clearance+.22,i.length/2-.12)),p.push(Ee(Tn(i.width*1.01,.3,.34,1,1,2),0,i.clearance+.22,-i.length/2+.12)),p.push(Ee(Tn(i.width*1.02,.16,i.length*.5,1,1,2),0,i.clearance+.12,0)),p.push(Ee(Tn(i.width*.42,.16,.06,1,1,2),0,i.clearance+.4,i.length/2-.02));for(const V of[-1,1])p.push(Ee(Tn(.17,.1,.09,1,1,2),V*(i.width/2+.06),c+.16,i.length*.16)),v.push(Ee(Tn(i.width*.2,.14,.08,1,1,2),V*i.width*.32,i.clearance+.42,i.length/2-.01)),x.push(Ee(Tn(i.width*.2,.13,.08,1,1,2),V*i.width*.32,i.clearance+.44,-i.length/2+.01));const g=(V,$,ee=!0)=>{if(!V.length)return;const q=Dl(V,!1);if(V.forEach(N=>N.dispose()),!q)return;const ne=new dt(q,$);ne.castShadow=ee,ne.receiveShadow=!1,this.body.add(ne)};if(g(h,r),g(f,s),g(p,o),g(v,a,!1),g(x,l,!1),this.isPolice){const V=new st({color:3342336,emissive:16716049,emissiveIntensity:1.2}),$=new st({color:2099,emissive:2250239,emissiveIntensity:1.2});this.materials.push(V,$),this.lightBarMats.push(V,$);const ee=u+.12,q=new dt(new Nt(i.width*.34,.14,.26),V);q.position.set(-i.width*.2,ee,d);const ne=new dt(new Nt(i.width*.34,.14,.26),$);ne.position.set(i.width*.2,ee,d),this.body.add(q,ne)}const _=V=>{const $=new Ht(this.wheelR,this.wheelR,.24,14);return $.rotateZ(Math.PI/2),$.translate(V,0,0)},S=V=>{const $=new Ht(this.wheelR*.55,this.wheelR*.55,.26,10);return $.rotateZ(Math.PI/2),$.translate(V,0,0)},b=new st({color:1184534,roughness:.9,metalness:.1}),A=new st({color:10133670,roughness:.4,metalness:.45});this.materials.push(b,A);const T=i.width/2-.1,P=Dl([_(T),_(-T)],!1),X=Dl([S(T),S(-T)],!1);this.steerGroup.position.set(0,this.wheelR,i.length*.32),this.spinFront.position.set(0,0,0),this.spinRear.position.set(0,0,-i.length*.32),this.steerGroup.add(this.spinFront),this.body.add(this.steerGroup,this.spinRear);for(const V of[this.spinFront,this.spinRear]){const $=new dt(P,b);$.castShadow=!0;const ee=new dt(X,A);V.add($,ee)}const y=new kn({map:__(),transparent:!0,opacity:0,depthWrite:!1,blending:ha});this.beamMat=y;const M=new ti(7,16);M.rotateX(-Math.PI/2);const G=new dt(M,y);G.position.set(0,.06,i.length*.95),this.group.add(G)}get speedKmh(){return Math.abs(this.speed)*3.6}get forward(){return new L(Math.sin(this.heading),0,Math.cos(this.heading))}setHeadlights(e){this.headlightsOn=e,this.beamMat&&(this.beamMat.opacity=e?.75:0)}getRadius(){return this.spec.width*.55}update(e,t,i){const r=this.spec;this.impact=0,t.throttle>0&&(this.speed+=r.accel*t.throttle*e*(1-Math.min(1,Math.abs(this.speed)/r.maxSpeed))),t.brake>0&&(this.speed>.5?this.speed-=26*t.brake*e:this.speed-=r.accel*.75*t.brake*e),this.speed-=this.speed*.5*e,t.handbrake&&(this.speed*=1-Math.min(.95,3.2*e)),this.speed=yt(this.speed,-r.maxSpeed*.34,r.maxSpeed),Math.abs(this.speed)<.06&&t.throttle===0&&(this.speed=0);const s=Math.abs(this.speed)/r.maxSpeed,o=.62*(1-yt(s,0,.72));this.steer=vr(this.steer,t.steer*o,8,e);const a=r.length*.64;Math.abs(this.speed)>.15&&(this.heading+=this.speed/a*Math.tan(this.steer)*e);const l=Math.sin(this.heading)*this.speed*e,c=Math.cos(this.heading)*this.speed*e;this.pos.x+=l,this.pos.z+=c;const u=r.width*.52,h=Math.sin(this.heading),f=Math.cos(this.heading);let p=!1;for(const d of[r.length*.36,0,-r.length*.36]){const g=this.pos.x+h*d,_=this.pos.z+f*d;for(let S=0;S<i.colliders.length;S++)v_(g,_,u,i.colliders[S],Xu)&&(this.pos.x+=Xu.x,this.pos.z+=Xu.z,p=!0)}const v=172;(this.pos.x<-v||this.pos.x>v||this.pos.z<-v||this.pos.z>v)&&(this.pos.x=yt(this.pos.x,-v,v),this.pos.z=yt(this.pos.z,-v,v),p=!0),p&&(this.impact=Math.abs(this.speed),this.speed*=-.18,this.damageFlash=.25),this.group.position.set(this.pos.x,0,this.pos.z),this.group.rotation.y=this.heading,this.wheelSpin+=this.speed/this.wheelR*e,this.spinFront.rotation.x=this.wheelSpin,this.spinRear.rotation.x=this.wheelSpin,this.steerGroup.rotation.y=this.steer;const x=-yt(this.steer*this.speed*.05,-.09,.09);this.body.rotation.z=vr(this.body.rotation.z,x,6,e);const m=yt((t.throttle-t.brake)*.012,-.02,.02);if(this.body.rotation.x=vr(this.body.rotation.x,-m,5,e),this.damageFlash>0&&(this.damageFlash=Math.max(0,this.damageFlash-e)),this.isPolice){this.sirenTime+=e;const d=Math.floor(this.sirenTime*4)%2===0;this.lightBarMats.length===2&&(this.lightBarMats[0].emissiveIntensity=d?2.4:.15,this.lightBarMats[1].emissiveIntensity=d?.15:2.4)}}dispose(){this.group.removeFromParent(),this.group.traverse(e=>{const t=e;t.isMesh&&t.geometry.dispose()}),this.materials.forEach(e=>e.dispose()),this.beamMat?.dispose()}}class sA{constructor(e){B(this,"keys",new Set);B(this,"joystick",{x:0,z:0});B(this,"joystickActive",!1);B(this,"runHeld",!1);B(this,"lookDX",0);B(this,"lookDY",0);B(this,"zoomDelta",0);B(this,"jumpQueued",!1);B(this,"interactQueued",!1);B(this,"el");B(this,"dragging",!1);B(this,"lastX",0);B(this,"lastY",0);B(this,"touchMode",!1);B(this,"onKeyDown",e=>{const t=e.code;["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t)&&e.preventDefault(),!this.keys.has(t)&&(this.keys.add(t),t==="Space"&&(this.jumpQueued=!0),(t==="KeyE"||t==="Enter")&&(this.interactQueued=!0),(t==="ShiftLeft"||t==="ShiftRight")&&(this.runHeld=!0))});B(this,"onKeyUp",e=>{this.keys.delete(e.code),(e.code==="ShiftLeft"||e.code==="ShiftRight")&&(this.runHeld=!1)});B(this,"onBlur",()=>{this.keys.clear(),this.runHeld=!1,this.joystickActive=!1,this.joystick.x=0,this.joystick.z=0});B(this,"onPointerDown",e=>{e.button!==void 0&&e.button!==0&&e.button!==2||(this.dragging=!0,this.touchMode=e.pointerType==="touch",this.lastX=e.clientX,this.lastY=e.clientY,e.target.setPointerCapture?.(e.pointerId))});B(this,"onPointerMove",e=>{if(!this.dragging)return;const t=e.clientX-this.lastX,i=e.clientY-this.lastY;this.lastX=e.clientX,this.lastY=e.clientY;const r=e.pointerType==="touch"?3.2:2.4;this.lookDX+=t*r,this.lookDY+=i*r});B(this,"onPointerUp",()=>{this.dragging=!1});B(this,"onWheel",e=>{e.preventDefault(),this.zoomDelta+=Math.sign(e.deltaY)*.6});B(this,"onContextMenu",e=>e.preventDefault());this.el=e,window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),e.addEventListener("pointerdown",this.onPointerDown),window.addEventListener("pointermove",this.onPointerMove),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("pointercancel",this.onPointerUp),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("contextmenu",this.onContextMenu)}get isTouch(){return this.touchMode}getMove(){let e=0,t=0;this.joystickActive&&(e=this.joystick.x,t=this.joystick.z);const i=this.keys;if((i.has("KeyW")||i.has("ArrowUp"))&&(t+=1),(i.has("KeyS")||i.has("ArrowDown"))&&(t-=1),(i.has("KeyA")||i.has("ArrowLeft"))&&(e-=1),(i.has("KeyD")||i.has("ArrowRight"))&&(e+=1),this.joystickActive&&(e!==0||t!==0)&&Math.hypot(e,t)>1.01){const r=Math.hypot(e,t);e/=r,t/=r}return{x:Math.max(-1,Math.min(1,e)),z:Math.max(-1,Math.min(1,t))}}get run(){return this.runHeld||this.keys.has("ShiftLeft")||this.keys.has("ShiftRight")}setJoystick(e,t,i){this.joystick.x=e,this.joystick.z=t,this.joystickActive=i}setRun(e){this.runHeld=e}queueJump(){this.jumpQueued=!0}queueInteract(){this.interactQueued=!0}consumeJump(){const e=this.jumpQueued;return this.jumpQueued=!1,e}consumeInteract(){const e=this.interactQueued;return this.interactQueued=!1,e}consumeLook(){const e=this.lookDX,t=this.lookDY;return this.lookDX=0,this.lookDY=0,{dx:e,dy:t}}consumeZoom(){const e=this.zoomDelta;return this.zoomDelta=0,e}clearActions(){this.jumpQueued=!1,this.interactQueued=!1,this.lookDX=0,this.lookDY=0}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),this.el.removeEventListener("pointerdown",this.onPointerDown),window.removeEventListener("pointermove",this.onPointerMove),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("pointercancel",this.onPointerUp),this.el.removeEventListener("wheel",this.onWheel),this.el.removeEventListener("contextmenu",this.onContextMenu)}}class oA{constructor(){B(this,"ctx",null);B(this,"master",null);B(this,"engineGain",null);B(this,"engineFilter",null);B(this,"engineOsc",null);B(this,"engineOsc2",null);B(this,"tyreGain",null);B(this,"tyreFilter",null);B(this,"ambientGain",null);B(this,"sirenGain",null);B(this,"sirenOsc",null);B(this,"noiseBuffer",null);B(this,"enabled",!0);B(this,"volume",.7)}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;this.ctx=t;const i=t.createGain();i.gain.value=this.enabled?this.volume:0,i.connect(t.destination),this.master=i;const r=Math.floor(t.sampleRate*2),s=t.createBuffer(1,r,t.sampleRate),o=s.getChannelData(0);let a=0;for(let b=0;b<r;b++){const A=Math.random()*2-1;a=(a+.02*A)/1.02,o[b]=a*3.5+A*.25}this.noiseBuffer=s;const l=t.createGain();l.gain.value=1e-4;const c=t.createBiquadFilter();c.type="lowpass",c.frequency.value=520,c.Q.value=1.2;const u=t.createOscillator();u.type="sawtooth",u.frequency.value=60;const h=t.createOscillator();h.type="square",h.frequency.value=30;const f=t.createGain();f.gain.value=.4,u.connect(l),h.connect(f),f.connect(l),l.connect(c),c.connect(i),u.start(),h.start(),this.engineGain=l,this.engineFilter=c,this.engineOsc=u,this.engineOsc2=h;const p=t.createGain();p.gain.value=1e-4;const v=t.createBiquadFilter();v.type="bandpass",v.frequency.value=2600,v.Q.value=.9;const x=t.createBufferSource();x.buffer=s,x.loop=!0,x.connect(v),v.connect(p),p.connect(i),x.start(),this.tyreGain=p,this.tyreFilter=v;const m=t.createGain();m.gain.value=.05;const d=t.createBiquadFilter();d.type="lowpass",d.frequency.value=420;const g=t.createBufferSource();g.buffer=s,g.loop=!0,g.playbackRate.value=.6,g.connect(d),d.connect(m),m.connect(i),g.start(),this.ambientGain=m;const _=t.createGain();_.gain.value=1e-4;const S=t.createOscillator();S.type="square",S.frequency.value=780,S.connect(_),_.connect(i),S.start(),this.sirenGain=_,this.sirenOsc=S}setEnabled(e){this.enabled=e,this.master&&this.ctx&&this.master.gain.setTargetAtTime(e?this.volume:0,this.ctx.currentTime,.05)}setVolume(e){this.volume=e,this.master&&this.ctx&&this.enabled&&this.master.gain.setTargetAtTime(e,this.ctx.currentTime,.05)}setEngine(e,t){if(!this.ctx||!this.engineGain||!this.engineOsc||!this.engineOsc2||!this.engineFilter)return;const i=this.ctx.currentTime,r=Math.max(0,Math.min(1,e)),s=52+r*150;this.engineOsc.frequency.setTargetAtTime(s,i,.08),this.engineOsc2.frequency.setTargetAtTime(s*.5,i,.08),this.engineFilter.frequency.setTargetAtTime(360+r*1500,i,.1),this.engineGain.gain.setTargetAtTime(t>.01?.01+t*.055:1e-4,i,.1)}setTyre(e){if(!this.ctx||!this.tyreGain||!this.tyreFilter)return;const t=this.ctx.currentTime;this.tyreGain.gain.setTargetAtTime(Math.min(.09,e*.09),t,.07),this.tyreFilter.frequency.setTargetAtTime(1800+e*2400,t,.1)}setSiren(e){if(!this.ctx||!this.sirenGain||!this.sirenOsc)return;const t=this.ctx.currentTime;this.sirenGain.gain.setTargetAtTime(e?.045:1e-4,t,.15),e&&this.sirenOsc.frequency.setTargetAtTime(760+(Math.sin(t*3.2)*.5+.5)*320,t,.25)}noiseBurst(e,t,i,r="bandpass"){if(!this.ctx||!this.noiseBuffer||!this.master)return;const s=this.ctx,o=s.createBufferSource();o.buffer=this.noiseBuffer;const a=s.createBiquadFilter();a.type=r,a.frequency.value=t;const l=s.createGain(),c=s.currentTime;l.gain.setValueAtTime(i,c),l.gain.exponentialRampToValueAtTime(1e-4,c+e),o.connect(a),a.connect(l),l.connect(this.master),o.start(c,Math.random()*1.2,e+.05),o.stop(c+e+.05)}tone(e,t,i="sine",r=.09,s){if(!this.ctx||!this.master)return;const o=this.ctx,a=o.createOscillator(),l=o.createGain(),c=o.currentTime;a.type=i,a.frequency.setValueAtTime(e,c),s&&a.frequency.exponentialRampToValueAtTime(s,c+t),l.gain.setValueAtTime(1e-4,c),l.gain.exponentialRampToValueAtTime(r,c+.015),l.gain.exponentialRampToValueAtTime(1e-4,c+t),a.connect(l),l.connect(this.master),a.start(c),a.stop(c+t+.02)}footstep(){this.noiseBurst(.12,900+Math.random()*400,.035,"lowpass")}jump(){this.noiseBurst(.1,700,.03,"lowpass")}land(){this.noiseBurst(.16,400,.05,"lowpass")}ui(){this.tone(880,.06,"sine",.05)}notification(){this.tone(660,.16,"sine",.08),setTimeout(()=>this.tone(990,.24,"sine",.07),110)}missionComplete(){this.tone(523,.18,"triangle",.08),setTimeout(()=>this.tone(659,.18,"triangle",.08),140),setTimeout(()=>this.tone(784,.4,"triangle",.08),290)}money(){this.tone(1180,.09,"sine",.06),setTimeout(()=>this.tone(1560,.14,"sine",.05),70)}pickup(){this.tone(720,.12,"sine",.05,1180)}crash(){this.noiseBurst(.3,260,.16,"lowpass"),this.tone(90,.22,"square",.05)}hurt(){this.noiseBurst(.2,320,.1,"lowpass")}door(){this.noiseBurst(.14,220,.06,"lowpass")}dispose(){try{this.ctx?.close()}catch{}this.ctx=null}}const p0=["#8f8f97","#2c3a4a","#7a1f24","#1d4b3b","#c9c2b2","#3b3b40","#5c4a2e","#22303b"];class aA{constructor(e,t,i,r,s){B(this,"vehicle");B(this,"axis");B(this,"dir");B(this,"lane");B(this,"along");B(this,"cruise");B(this,"wobble");this.axis=e,this.dir=t,this.lane=i,this.along=r,this.cruise=8+s()*5,this.wobble=s()*10;const o=s()<.2?"van":s()<.45?"suv":"sedan",a=p0[Math.floor(s()*p0.length)],l=e==="z"?t>0?0:Math.PI:t>0?Math.PI/2:-Math.PI/2,c=e==="z"?i:r,u=e==="z"?r:i;this.vehicle=new Hd(o,a,c,u,l)}setForward(){const e=this.dir*this.cruise;this.vehicle.speed=e}update(e,t,i){const r=this.vehicle;let s=this.cruise;if(i){const a=i.pos.x-r.pos.x,l=i.pos.z-r.pos.z,c=Math.hypot(a,l);c<13&&(this.axis==="z"?Math.sign(l)===this.dir&&Math.abs(a)<4:Math.sign(a)===this.dir&&Math.abs(l)<4)&&(s=c<7?0:3.5)}this.wobble+=e,this.setForward(),r.speed=Math.min(r.speed,s)*(this.dir>0?1:-1),s<.2&&(r.speed=0),r.update(e,{throttle:0,brake:0,steer:0,handbrake:!1},t);const o=166;this.axis==="z"?(r.pos.z>o&&(r.pos.z=-o),r.pos.z<-o&&(r.pos.z=o)):(r.pos.x>o&&(r.pos.x=-o),r.pos.x<-o&&(r.pos.x=o)),r.group.position.set(r.pos.x,0,r.pos.z)}}class lA{constructor(e,t){B(this,"rig");B(this,"pos",new L);B(this,"loop");B(this,"index",0);B(this,"speed",1.15+Math.random()*.5);B(this,"yaw",0);B(this,"alive",!0);B(this,"downTimer",0);B(this,"waitTimer",0);this.loop=e,this.index=t%e.length;const i={skin:[13212274,9265732,14726284,7293489][Math.floor(Math.random()*4)],shirt:[14341837,3364206,9189946,3959634][Math.floor(Math.random()*4)],jacket:[2369326,3882823,4864558,2109498][Math.floor(Math.random()*4)],pants:[2764856,3948356,2240575][Math.floor(Math.random()*3)],shoes:1382170,hair:[1710620,3811868,5917232][Math.floor(Math.random()*3)]};this.rig=new x_(i,!1);const r=this.loop[this.index];this.pos.copy(r),this.pos.x+=(Math.random()-.5)*2,this.pos.z+=(Math.random()-.5)*2,this.rig.object.position.copy(this.pos)}update(e){if(!this.alive){if(this.downTimer-=e,this.downTimer<=0){this.alive=!0,this.rig.object.rotation.z=0,this.rig.object.position.y=this.pos.y;const l=this.loop[this.index];this.pos.set(l.x,l.y,l.z)}return}if(this.waitTimer>0){this.waitTimer-=e,this.rig.animate(e,0,!1);return}const t=this.loop[(this.index+1)%this.loop.length],i=t.x-this.pos.x,r=t.z-this.pos.z,s=Math.hypot(i,r);if(s<.7){this.index=(this.index+1)%this.loop.length,Math.random()<.2&&(this.waitTimer=1+Math.random()*2.5);return}const o=i/s,a=r/s;this.pos.x+=o*this.speed*e,this.pos.z+=a*this.speed*e,this.yaw=Math.atan2(o,a),this.rig.object.position.copy(this.pos),this.rig.object.rotation.y=this.yaw,this.rig.animate(e,this.speed,!1)}knockDown(){this.alive&&(this.alive=!1,this.downTimer=9,this.rig.object.rotation.z=Math.PI/2,this.rig.object.position.y=this.pos.y-.7)}}class cA{constructor(e){B(this,"vehicle");B(this,"active",!1);B(this,"spawn",new L);this.spawn.copy(e),this.vehicle=new Hd("police","#1b1e24",e.x,e.z,0),this.vehicle.group.visible=!1}activate(e){const t=Math.atan2(e.x,e.z)+Math.PI;this.vehicle.pos.set(e.x+Math.sin(t)*70,0,e.z+Math.cos(t)*70),this.vehicle.pos.x=yt(this.vehicle.pos.x,-150,150),this.vehicle.pos.z=yt(this.vehicle.pos.z,-150,150),this.vehicle.heading=Math.atan2(e.x-this.vehicle.pos.x,e.z-this.vehicle.pos.z),this.vehicle.speed=0,this.vehicle.group.visible=!0,this.active=!0}deactivate(){this.active=!1,this.vehicle.group.visible=!1}update(e,t,i){if(!this.active)return;const r=this.vehicle,s=t.x-r.pos.x,o=t.z-r.pos.z,a=Math.hypot(s,o),l=Math.atan2(s,o),c=g_(r.heading,l),u=yt(c*1.8,-1,1),h=a>14?1:a>7?.45:0,f=Math.abs(c)>1.3&&r.speed>9?1:a<6?.7:0;r.update(e,{throttle:h,brake:f,steer:u,handbrake:!1},i)}}function uA(n,e,t){const i=Wn(2024),r=[],s=n.trafficRoads;let o=0;for(;r.length<e&&o<e*12;){o++;const c=i()<.5?"x":"z",u=s[1+Math.floor(i()*(s.length-2))],h=i()<.5?1:-1,f=u+h*3.5,p=-150+i()*300;if(Math.hypot(c==="z"?f:p,c==="z"?p:f)<45)continue;const v=new aA(c,h,f,p,i);r.push(v),t.add(v.vehicle.group)}const a=[],l=n.pedLoops;for(let c=0;c<Math.min(l.length,10);c++){const u=new lA(l[c],Math.floor(i()*4));a.push(u),t.add(u.rig.object)}return{cars:r,peds:a,playerNear:c=>{let u=null,h=1e9;for(const f of r){const p=Math.hypot(f.vehicle.pos.x-c.x,f.vehicle.pos.z-c.z);p<h&&(h=p,u=f)}return h<4?u:null}}}const S_={health:100,money:0,speed:0,inVehicle:!1,nearVehicle:!1,missionTitle:"",missionObjective:"",missionDistance:0,missionActive:!1,missionStage:"none",wanted:0,clock:"18:40",isNight:!1,paused:!1,fps:60,zone:"Downtown"},ju="shadowcity.save.v2",hA=780;class fA{constructor(e,t){B(this,"container");B(this,"renderer");B(this,"scene",new _T);B(this,"camera");B(this,"clock",new GT);B(this,"input");B(this,"audio",new oA);B(this,"city");B(this,"player");B(this,"vehicles",[]);B(this,"traffic");B(this,"police");B(this,"sun");B(this,"hemi");B(this,"ambient");B(this,"headlight");B(this,"renderScale",1);B(this,"slowFrames",0);B(this,"skyMat");B(this,"stars");B(this,"clouds",[]);B(this,"marker");B(this,"pickupMeshes",[]);B(this,"camYaw",0);B(this,"camPitch",.3);B(this,"camDist",4.9);B(this,"camPos",new L);B(this,"lookTimer",0);B(this,"driving",null);B(this,"nearVehicle",null);B(this,"timeOfDay",.66);B(this,"money",0);B(this,"health",100);B(this,"wanted",0);B(this,"heatTimer",0);B(this,"missionStage","offer");B(this,"missionTarget",null);B(this,"missionTitle","MISSION 01 · THE FIRST DELIVERY");B(this,"missionObjective","Meet the dispatcher at the Nightline depot");B(this,"missionReward",750);B(this,"completedMissions",0);B(this,"missionCooldown",0);B(this,"paused",!1);B(this,"quality");B(this,"sensitivity");B(this,"audioEnabled");B(this,"hudTimer",0);B(this,"saveTimer",0);B(this,"fpsSmooth",60);B(this,"disposed",!1);B(this,"markerTime",0);B(this,"onHud");B(this,"onNotify");B(this,"notifyId",1);B(this,"onVisibility",()=>{document.hidden&&this.save()});B(this,"resize",()=>{const e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.renderer.setSize(e,t,!1),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.camera.aspect=e/t,this.camera.updateProjectionMatrix()});B(this,"animate",()=>{if(this.disposed)return;const e=this.clock.getDelta(),t=Math.min(e,.083);t>0&&(this.fpsSmooth=this.fpsSmooth*.94+1/t*.06),t>.045?this.slowFrames++:this.slowFrames=Math.max(0,this.slowFrames-.6),this.slowFrames>120&&this.renderScale>.62&&(this.renderScale=Math.max(.6,this.renderScale-.18),this.slowFrames=0,this.applyPixelRatio()),this.paused||this.update(t),this.renderer.render(this.scene,this.camera)});B(this,"shake",0);this.container=e,this.onHud=t.onHud,this.onNotify=t.onNotify,this.quality=t.quality,this.sensitivity=t.sensitivity,this.audioEnabled=t.audio;const i=this.loadSave();this.renderer=new vT({antialias:this.quality!=="low",powerPreference:"high-performance",stencil:!1}),this.renderer.setPixelRatio(this.pixelRatioFor(this.quality)),this.renderer.setSize(e.clientWidth||window.innerWidth,e.clientHeight||window.innerHeight),this.renderer.shadowMap.enabled=this.quality!=="low",this.renderer.shadowMap.type=Cv,this.renderer.toneMapping=Pv,this.renderer.toneMappingExposure=1.12,this.renderer.outputColorSpace=Fn,this.renderer.domElement.style.display="block",this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.touchAction="none",e.appendChild(this.renderer.domElement),this.camera=new Rn(60,1,.1,900),this.camera.position.set(0,6,-8),this.input=new sA(this.renderer.domElement),d0(this.quality),this.buildWorld(),this.buildEnvironment(),this.buildVehicles(),this.buildMarker(),this.buildPickups(),i&&this.applySave(i),(!i||this.completedMissions===0)&&this.startMission01(),this.audio.setEnabled(this.audioEnabled),this.resize(),this.addListeners(),this.tick(0),this.renderer.setAnimationLoop(this.animate),this.notify("SHADOW CITY","Welcome to the city. Find the depot marker.","info"),window.__shadowCity=this}pixelRatioFor(e){const t=window.devicePixelRatio||1;return Math.min(t,e==="low"?1:e==="medium"?1.5:2)}buildWorld(){this.city=nA(this.scene,this.quality),this.player=new iA,this.player.placeAt(0,15.5,0,this.city),this.camYaw=Math.PI,this.scene.add(this.player.rig.object),this.player.onStep=()=>this.audio.footstep(),this.player.onJump=()=>this.audio.jump(),this.player.onLand=()=>{this.audio.land()},this.audio.init()}buildEnvironment(){const e={topColor:{value:new be(4157096)},horizonColor:{value:new be(13228262)},groundColor:{value:new be(1711138)},sunDir:{value:new L(.4,.7,.3)},sunColor:{value:new be(16773328)},sunPower:{value:1}};this.skyMat=new Gi({uniforms:e,side:un,depthWrite:!1,fog:!1,vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 groundColor;
        uniform vec3 sunDir;
        uniform vec3 sunColor;
        uniform float sunPower;
        varying vec3 vDir;
        void main() {
          vec3 dir = normalize(vDir);
          float h = clamp(dir.y, -1.0, 1.0);
          vec3 col = mix(horizonColor, topColor, pow(clamp(h, 0.0, 1.0), 0.62));
          col = mix(col, groundColor, smoothstep(0.02, -0.25, h));
          float sun = pow(max(dot(dir, normalize(sunDir)), 0.0), 900.0);
          float glow = pow(max(dot(dir, normalize(sunDir)), 0.0), 8.0);
          col += sunColor * sun * 3.0 * sunPower;
          col += sunColor * glow * 0.18 * sunPower;
          gl_FragColor = vec4(col, 1.0);
        }
      `});const t=new dt(new Gs(620,32,18),this.skyMat);t.frustumCulled=!1,this.scene.add(t);const i=new Xt,r=700,s=new Float32Array(r*3);for(let c=0;c<r;c++){const u=Math.random()*2-1,h=Math.random()*Math.PI*2,f=560,p=Math.sqrt(1-u*u);s[c*3]=Math.cos(h)*p*f,s[c*3+1]=Math.abs(u)*f*.9+20,s[c*3+2]=Math.sin(h)*p*f}i.setAttribute("position",new Pn(s,3));const o=new u_({color:14674175,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1});this.stars=new ST(i,o),this.stars.frustumCulled=!1,this.scene.add(this.stars);const a=tA();for(let c=0;c<16;c++){const u=new l_({map:a,transparent:!0,opacity:.55,depthWrite:!1,fog:!1}),h=new xT(u);h.position.set((Math.random()-.5)*900,130+Math.random()*90,(Math.random()-.5)*900);const f=110+Math.random()*160;h.scale.set(f,f*.42,1),this.scene.add(h),this.clouds.push(h)}this.hemi=new OT(12572912,2762274,.55),this.scene.add(this.hemi),this.ambient=new VT(9414333,.26),this.scene.add(this.ambient),this.sun=new HT(16773336,2.2),this.sun.castShadow=this.quality!=="low",this.sun.shadow.mapSize.set(this.quality==="high"?2048:1024,this.quality==="high"?2048:1024);const l=this.sun.shadow.camera;l.left=-70,l.right=70,l.top=70,l.bottom=-70,l.near=1,l.far=260,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target),this.scene.fog=new Nd(12175834,110,420),this.headlight=new kT(16773590,0,65,.52,.6,1.3),this.headlight.visible=!1,this.scene.add(this.headlight),this.scene.add(this.headlight.target)}buildVehicles(){for(const t of this.city.vehicleSpawns){const i=new Hd(t.kind,t.color,t.x,t.z,t.heading);this.vehicles.push(i),this.scene.add(i.group)}const e=this.quality==="low"?6:this.quality==="medium"?10:14;this.traffic=uA(this.city,e,this.scene),this.police=new cA(this.city.policeSpawn),this.scene.add(this.police.vehicle.group)}buildMarker(){const e=new St,t=new kn({color:16761948,transparent:!0,opacity:.9,depthWrite:!1}),i=new dt(new hc(2.6,.16,6,40),t);i.rotation.x=-Math.PI/2,i.position.y=.25,e.add(i);const r=new kn({color:16761948,transparent:!0,opacity:.16,side:gi,depthWrite:!1,blending:ha}),s=new dt(new Ht(2.4,2.4,22,18,1,!0),r);s.position.y=11,e.add(s),e.visible=!1,this.scene.add(e),this.marker=e}buildPickups(){const e=new st({color:16769162,emissive:16761402,emissiveIntensity:1.6,roughness:.4,metalness:.4});for(const t of this.city.pickupSpots){const i=new St,r=new dt(new Nt(.55,.34,.75),e);i.add(r);const s=new dt(new hc(.7,.05,6,24),new kn({color:16767354,transparent:!0,opacity:.65,depthWrite:!1}));s.rotation.x=-Math.PI/2,i.add(s),i.position.set(t.x,.75,t.z),this.scene.add(i),this.pickupMeshes.push({mesh:i,pos:t.clone(),active:!0,timer:0})}}applySave(e){this.money=e.money,this.health=e.health,this.completedMissions=e.completedMissions,typeof e.timeOfDay=="number"&&(this.timeOfDay=e.timeOfDay),e.pos&&this.player.placeAt(e.pos.x,e.pos.z,0,this.city),this.completedMissions>0&&this.startRandomDelivery(4)}addListeners(){window.addEventListener("resize",this.resize),window.addEventListener("orientationchange",this.resize),document.addEventListener("visibilitychange",this.onVisibility)}setPaused(e){this.paused=e,this.input.clearActions(),e&&this.save()}applyPixelRatio(){this.renderer.setPixelRatio(this.pixelRatioFor(this.quality)*this.renderScale),this.resize()}setQuality(e){this.quality=e,d0(e),this.renderScale=1,this.renderer.setPixelRatio(this.pixelRatioFor(e)),this.renderer.shadowMap.enabled=e!=="low",this.sun.castShadow=e!=="low";const t=e==="high"?2048:1024;this.sun.shadow.mapSize.x!==t&&(this.sun.shadow.mapSize.set(t,t),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)),this.sun.shadow.camera.updateProjectionMatrix(),this.vehicles.forEach(i=>i.group.traverse(r=>{const s=r;s.isMesh&&(s.castShadow=e!=="low")})),this.player.rig.setCastShadow(e!=="low"),this.traffic.peds.forEach(i=>i.rig.setCastShadow(e!=="low")),this.resize()}setSensitivity(e){this.sensitivity=e}setAudioEnabled(e){this.audioEnabled=e,this.audio.setEnabled(e)}startAudio(){this.audio.init()}get state(){return{money:this.money,health:this.health,timeOfDay:this.timeOfDay,inVehicle:!!this.driving,paused:this.paused}}get inputRef(){return this.input}jump(){this.input.queueJump()}interact(){this.input.queueInteract()}setJoystick(e,t,i){this.input.setJoystick(e,t,i)}setRun(e){this.input.setRun(e)}togglePause(){this.setPaused(!this.paused)}notify(e,t,i){this.onNotify({id:this.notifyId++,title:e,text:t,kind:i})}findNearestVehicle(e=4.4){let t=null,i=e;for(const r of this.vehicles){if(r.occupied)continue;const s=Math.hypot(r.pos.x-this.player.pos.x,r.pos.z-this.player.pos.z);s<i&&(i=s,t=r)}return t}enterVehicle(e){this.driving=e,e.occupied=!0,e.speed=0,this.player.velX=this.player.velZ=0,this.player.rig.object.visible=!1,this.audio.door(),this.camYaw=e.heading+Math.PI,this.notify("VEHICLE","W / joystick to drive · S to brake · E or the exit button to get out","info")}exitVehicle(){const e=this.driving;if(!e)return;e.occupied=!1,e.speed=0,this.driving=null;const t=e.heading,i=[[-Math.cos(t)*2.1,Math.sin(t)*2.1],[Math.cos(t)*2.1,-Math.sin(t)*2.1],[-Math.sin(t)*(e.spec.length/2+1.4),-Math.cos(t)*(e.spec.length/2+1.4)]];let r=!1;for(const[s,o]of i){const a=e.pos.x+s,l=e.pos.z+o;let c=!1;for(const u of this.city.colliders)if(a>u.minX-.4&&a<u.maxX+.4&&l>u.minZ-.4&&l<u.maxZ+.4){c=!0;break}if(!c){this.player.placeAt(a,l,e.heading,this.city),r=!0;break}}r||this.player.placeAt(e.pos.x,e.pos.z+2.6,e.heading,this.city),this.player.rig.object.visible=!0,this.audio.door(),this.camYaw=e.heading+Math.PI}tick(e){this.updateEnvironment()}update(e){this.timeOfDay=(this.timeOfDay+e/hA)%1,this.updateEnvironment();const t=this.input.consumeLook(),i=this.input.consumeZoom(),r=this.input.getMove();if(t.dx!==0||t.dy!==0){const o=this.sensitivity*.0024;this.camYaw-=t.dx*o,this.camPitch=yt(this.camPitch+t.dy*o*.8,.04,1.15),this.lookTimer=1.6}else this.lookTimer=Math.max(0,this.lookTimer-e);i!==0&&(this.camDist=yt(this.camDist+i*(this.driving?1.2:.7),2.6,this.driving?15:9));const s=this.input.consumeJump();this.input.consumeInteract()&&this.handleInteract(),this.driving?this.updateDriving(e,r):(this.player.update(e,{x:r.x,z:r.z,run:this.input.run,jump:s},this.city,this.camYaw),this.audio.setEngine(0,0),this.audio.setTyre(0),this.nearVehicle=this.findNearestVehicle()),this.updateTraffic(e),this.updatePolice(e),this.updateMission(e),this.updatePickups(e),this.updateCamera(e),this.updateSun(),this.hudTimer+=e,this.hudTimer>.12&&(this.hudTimer=0,this.onHud(this.getHud())),this.saveTimer+=e,this.saveTimer>15&&(this.saveTimer=0,this.save())}updateDriving(e,t){const i=this.driving,r={throttle:yt(t.z,0,1),brake:yt(-t.z,0,1),steer:yt(t.x,-1,1),handbrake:this.input.run};i.update(e,r,this.city);const s=yt(Math.abs(i.speed)/i.spec.maxSpeed,0,1);this.audio.setEngine(.12+s*.88,.35+Math.abs(r.throttle)*.6);const o=Math.abs(i.steer)*s*(r.handbrake?2.4:1.1);if(this.audio.setTyre(o>.35?Math.min(1,o):0),this.player.pos.set(i.pos.x,0,i.pos.z),i.impact>6){const a=Math.min(35,(i.impact-6)*2.2);this.health=Math.max(0,this.health-a),this.audio.crash(),this.shake=.35,this.health<=0&&this.respawn()}for(const a of this.traffic.peds){if(!a.alive)continue;Math.hypot(a.pos.x-i.pos.x,a.pos.z-i.pos.z)<2.7&&Math.abs(i.speed)>2&&(a.knockDown(),this.audio.hurt(),this.wanted=Math.min(5,this.wanted+1),this.heatTimer=0,this.notify("WANTED","Civilian down. Police are responding.","danger"))}for(const a of this.traffic.cars)if(Math.hypot(a.vehicle.pos.x-i.pos.x,a.vehicle.pos.z-i.pos.z)<2.6&&Math.abs(i.speed)>9){i.speed*=.55,this.health=Math.max(0,this.health-1.6),this.audio.crash();break}this.nearVehicle=null}updateTraffic(e){const t=this.driving;for(const i of this.traffic.cars)i.update(e,this.city,t);for(const i of this.traffic.peds)i.update(e);if(!this.driving)for(const i of this.traffic.cars){const r=this.player.pos.x-i.vehicle.pos.x,s=this.player.pos.z-i.vehicle.pos.z,o=Math.hypot(r,s);o<2.2&&o>.001&&(this.player.pos.x+=r/o*(2.2-o),this.player.pos.z+=s/o*(2.2-o))}}updatePolice(e){const t=this.driving?this.driving.pos:this.player.pos;if(this.wanted>0){this.police.active||this.police.activate(t),this.police.update(e,t,this.city);const i=Math.hypot(this.police.vehicle.pos.x-t.x,this.police.vehicle.pos.z-t.z);this.audio.setSiren(!0),i<7.5&&(this.health=Math.max(0,this.health-11*e),this.health<=0&&this.respawn()),i>45?(this.heatTimer+=e,this.heatTimer>18&&(this.heatTimer=0,this.wanted=Math.max(0,this.wanted-1))):this.heatTimer=0}else this.police.active&&this.police.deactivate(),this.audio.setSiren(!1)}updatePickups(e){for(const t of this.pickupMeshes){if(!t.active){t.timer-=e,t.timer<=0&&(t.active=!0,t.mesh.visible=!0);continue}t.mesh.rotation.y+=e*1.6,t.mesh.position.y=.75+Math.sin(performance.now()*.002+t.pos.x)*.08,Math.hypot(t.pos.x-this.player.pos.x,t.pos.z-this.player.pos.z)<2.2&&Math.abs(this.player.pos.y-t.pos.y)<2.5&&(t.active=!1,t.timer=50,t.mesh.visible=!1,this.money+=120,this.audio.pickup(),this.notify("CASH","Picked up $120","money"))}}startMission01(){this.missionStage="offer",this.missionTitle="MISSION 01 · THE FIRST DELIVERY",this.missionObjective="Meet the dispatcher at the Nightline depot",this.missionReward=750,this.missionTarget=this.city.depot.clone(),this.marker.visible=!0}startRandomDelivery(e=0){const t=this.city.deliverySpots[Math.floor(Math.random()*this.city.deliverySpots.length)];this.missionStage="deliver",this.missionTitle="DELIVERY CONTRACT",this.missionObjective="Deliver the package to the marked drop-off",this.missionReward=500+this.completedMissions*120+e,this.missionTarget=t.clone(),this.marker.visible=!0,this.marker.position.set(t.x,0,t.z)}updateMission(e){if(this.markerTime+=e,this.marker.visible){this.marker.rotation.y+=e*.4;const r=1+Math.sin(this.markerTime*2.4)*.06;this.marker.scale.set(r,1,r)}if(this.driving&&this.driving.speed,this.missionStage==="cooldown"){this.missionCooldown-=e,this.missionCooldown<=0&&this.startRandomDelivery();return}if(!this.missionTarget)return;const t=this.driving?new L(this.driving.pos.x,0,this.driving.pos.z):this.player.pos,i=Math.hypot(t.x-this.missionTarget.x,t.z-this.missionTarget.z);if(this.missionStage==="offer"&&i<5){this.missionStage="deliver",this.audio.notification(),this.notify("PACKAGE SECURED","A courier van is waiting. Take a vehicle to the drop-off.","mission"),this.missionObjective="Get a vehicle and drive the package to the drop-off";const r=this.city.deliverySpots[0];this.missionTarget=r.clone(),this.marker.position.set(r.x,0,r.z);return}if(this.missionStage==="deliver"&&i<6.5&&this.driving){this.missionStage="complete",this.completedMissions++,this.money+=this.missionReward,this.audio.missionComplete(),this.notify("MISSION COMPLETE",`Package delivered · +$${this.missionReward}`,"mission"),this.marker.visible=!1,this.missionObjective="Delivery complete",this.missionTarget=null,this.missionCooldown=10,this.missionStage="cooldown",this.save();return}this.marker.position.set(this.missionTarget.x,.24,this.missionTarget.z)}respawn(){this.health=100,this.wanted=0,this.money=Math.max(0,this.money-250),this.driving&&(this.driving.occupied=!1,this.driving.speed=0,this.driving=null,this.player.rig.object.visible=!0),this.player.placeAt(0,15.5,0,this.city),this.camYaw=Math.PI,this.audio.setSiren(!1),this.notify("WASTED","You woke up at the plaza. Medical fees: $250","danger"),this.save()}updateCamera(e){const t=this.driving;let i,r;t?(i=new L(t.pos.x,1.15,t.pos.z),r=(6.5+t.spec.length*.5+Math.min(2.4,Math.abs(t.speed)*.08))*(this.camDist/4.9),this.lookTimer<=0&&(this.camYaw=Cf(this.camYaw,t.heading+Math.PI,2.6,e)),this.camPitch=vr(this.camPitch,.24,2,e)):(i=this.player.cameraTarget,r=this.camDist,this.lookTimer<=0&&this.player.speed>1.2&&(this.camYaw=Cf(this.camYaw,this.player.yaw+Math.PI,1.9,e)));const s=Math.cos(this.camPitch),o=new L(i.x+Math.sin(this.camYaw)*s*r,i.y+Math.sin(this.camPitch)*r+.35,i.z+Math.cos(this.camYaw)*s*r),a=o.x-i.x,l=o.z-i.z,c=Math.hypot(a,l)||1,u=a/c,h=l/c;let f=c;for(const m of this.city.buildings){if(o.y>m.h+.6)continue;const d=this.rayBox(i.x,i.z,u,h,m.x-m.w/2-.5,m.x+m.w/2+.5,m.z-m.d/2-.5,m.z+m.d/2+.5,c);d>=0&&d<f&&(f=d)}if(f<c){const m=Math.max(1.4,f-.4)/c;o.x=i.x+a*m,o.z=i.z+l*m,o.y=i.y+Math.sin(this.camPitch)*r*.55+.35}const p=1-Math.exp(-11*e);this.camPos.lerp(o,p),this.camPos.lengthSq()===0&&this.camPos.copy(o),this.shake>0&&(this.shake=Math.max(0,this.shake-e*1.6),this.camPos.x+=(Math.random()-.5)*this.shake*.5,this.camPos.y+=(Math.random()-.5)*this.shake*.4),this.camera.position.copy(this.camPos);const v=t?new L(t.pos.x,1.5,t.pos.z):new L(this.player.pos.x,this.player.pos.y+1.5,this.player.pos.z);this.camera.lookAt(v);const x=t?66+Math.min(10,Math.abs(t.speed)*.22):60;Math.abs(this.camera.fov-x)>.05&&(this.camera.fov=vr(this.camera.fov,x,3,e),this.camera.updateProjectionMatrix())}rayBox(e,t,i,r,s,o,a,l,c){let u=0,h=c;if(Math.abs(i)<1e-6){if(e<s||e>o)return-1}else{let f=(s-e)/i,p=(o-e)/i;if(f>p&&([f,p]=[p,f]),u=Math.max(u,f),h=Math.min(h,p),u>h)return-1}if(Math.abs(r)<1e-6){if(t<a||t>l)return-1}else{let f=(a-t)/r,p=(l-t)/r;if(f>p&&([f,p]=[p,f]),u=Math.max(u,f),h=Math.min(h,p),u>h)return-1}return u}updateEnvironment(){const e=this.timeOfDay,t=Math.sin((e-.25)*Math.PI*2),i=yt((t+.09)/.32,0,1),r=yt((.1-t)/.28,0,1),s=yt(1-Math.abs(t)/.32,0,1),o=new be(4028605),a=new be(329487),l=new be(2764629),c=new be(12835048),u=new be(857380),h=new be(16747090),f=new be().lerpColors(a,o,i).lerp(l,s*.75),p=new be().lerpColors(u,c,i).lerp(h,s*.7),v=this.skyMat.uniforms;v.topColor.value.copy(f),v.horizonColor.value.copy(p),v.groundColor.value.lerpColors(new be(329226),new be(2829104),i);const x=(e-.25)*Math.PI*2,m=new L(Math.cos(x)*.8,Math.sin(x),Math.cos(x)*.45+.2).normalize();v.sunDir.value.copy(m),v.sunColor.value.lerpColors(new be(16742972),new be(16773848),i),v.sunPower.value=yt(t*4+.4,0,1),this.sun.color.lerpColors(new be(16752744),new be(16774370),i),this.sun.intensity=.32+i*2.6,this.hemi.intensity=.52+i*.58,this.ambient.intensity=.3+i*.1,this.hemi.color.lerpColors(new be(4281721),new be(13624052),i),this.hemi.groundColor.lerpColors(new be(1842468),new be(3814702),i);const d=this.scene.fog;d.color.copy(p).lerp(f,.35),d.near=90,d.far=300+i*140,this.stars.material.opacity=r*.9,this.clouds.forEach(_=>{_.material.opacity=.1+i*.5,_.material.color.setRGB(.35+i*.65,.35+i*.65,.4+i*.6)}),this.city.facadeMaterials.forEach(_=>{_.emissiveIntensity=r*.9}),this.city.lampMaterial.emissiveIntensity=.1+r*2.4,this.city.lightPoolMaterial.opacity=r*.85;const g=r>.35;if(this.driving&&g){const _=this.driving,S=_.forward;this.headlight.visible=!0,this.headlight.intensity=95,this.headlight.position.set(_.pos.x+S.x*_.spec.length*.45,.9,_.pos.z+S.z*_.spec.length*.45),this.headlight.target.position.set(_.pos.x+S.x*26,0,_.pos.z+S.z*26),this.headlight.target.updateMatrixWorld()}else this.headlight.visible=!1;this.driving&&this.driving.setHeadlights(g),this.vehicles.forEach(_=>_.setHeadlights(g)),this.traffic.cars.forEach(_=>_.vehicle.setHeadlights(g)),this.police.vehicle.setHeadlights(g)}updateSun(){const e=this.driving?this.driving.pos:this.player.pos,t=(this.timeOfDay-.25)*Math.PI*2,i=new L(Math.cos(t)*.8,Math.max(.12,Math.sin(t)),Math.cos(t)*.45+.2).normalize();this.sun.position.set(e.x+i.x*90,i.y*90+10,e.z+i.z*90),this.sun.target.position.set(e.x,0,e.z),this.sun.target.updateMatrixWorld(),this.stars.position.set(this.camera.position.x,0,this.camera.position.z),this.clouds.forEach(r=>{r.position.x+=.6,r.position.x>480&&(r.position.x=-480)})}getHud(){const e=this.driving,t=e?e.pos:this.player.pos,i=Math.floor(this.timeOfDay*24),r=Math.floor((this.timeOfDay*24-i)*60),s=`${String(i).padStart(2,"0")}:${String(r).padStart(2,"0")}`,o=this.missionTarget?Math.hypot(this.missionTarget.x-t.x,this.missionTarget.z-t.z):0;return{...S_,health:Math.round(this.health),money:Math.round(this.money),speed:e?e.speedKmh:0,inVehicle:!!e,nearVehicle:!!this.nearVehicle,missionTitle:this.missionTitle,missionObjective:this.missionObjective,missionDistance:o,missionActive:!!this.missionTarget,missionStage:this.missionStage,wanted:this.wanted,clock:s,isNight:this.timeOfDay<.27||this.timeOfDay>.78,paused:this.paused,fps:Math.round(this.fpsSmooth),zone:this.city.zoneAt(t.x,t.z)}}drawMinimap(e,t){const i=this.driving,r=i?i.pos.x:this.player.pos.x,s=i?i.pos.z:this.player.pos.z,o=i?i.heading:this.player.yaw,l=t/110;e.clearRect(0,0,t,t),e.save(),e.beginPath(),e.arc(t/2,t/2,t/2-1,0,Math.PI*2),e.clip(),e.fillStyle="#0a0e13",e.fillRect(0,0,t,t);const c=h=>t/2+(h-r)*l,u=h=>t/2+(h-s)*l;e.fillStyle="#1a232c";for(let h=0;h<tn;h++)for(let f=0;f<tn;f++){const p=ni+qe+h*vi,v=ni+qe+f*vi;e.fillRect(c(p),u(v),ht*l,ht*l)}e.strokeStyle="#3a4551",e.lineWidth=Math.max(2,qe*l);for(const h of an)e.beginPath(),e.moveTo(c(h),0),e.lineTo(c(h),t),e.stroke(),e.beginPath(),e.moveTo(0,u(h)),e.lineTo(t,u(h)),e.stroke();e.fillStyle="#263340";for(const h of this.city.buildings){const f=Math.max(1,h.w*l),p=Math.max(1,h.d*l);e.fillRect(c(h.x)-f/2,u(h.z)-p/2,f,p)}if(this.missionTarget){const h=c(this.missionTarget.x),f=u(this.missionTarget.z),p=3+Math.sin(performance.now()*.005)*1.4;e.fillStyle="#ffc45c",e.beginPath(),e.arc(h,f,p+3,0,Math.PI*2),e.fill(),e.fillStyle="#1a1207",e.beginPath(),e.arc(h,f,p,0,Math.PI*2),e.fill()}e.fillStyle="#8fa4b8";for(const h of this.vehicles)e.fillRect(c(h.pos.x)-1.5,u(h.pos.z)-1.5,3,3);e.fillStyle="#7bd88f";for(const h of this.pickupMeshes)h.active&&e.fillRect(c(h.pos.x)-1.5,u(h.pos.z)-1.5,3,3);this.police.active&&(e.fillStyle="#ff5a5a",e.beginPath(),e.arc(c(this.police.vehicle.pos.x),u(this.police.vehicle.pos.z),3.5,0,Math.PI*2),e.fill()),e.save(),e.translate(t/2,t/2),e.rotate(-o+Math.PI),e.fillStyle="#ffffff",e.strokeStyle="rgba(0,0,0,0.65)",e.lineWidth=1.5,e.beginPath(),e.moveTo(0,-9),e.lineTo(6.5,7.5),e.lineTo(0,4),e.lineTo(-6.5,7.5),e.closePath(),e.fill(),e.stroke(),e.restore(),e.restore(),e.strokeStyle="rgba(255,255,255,0.18)",e.lineWidth=2,e.beginPath(),e.arc(t/2,t/2,t/2-1,0,Math.PI*2),e.stroke()}save(){const e={money:this.money,health:this.health,completedMissions:this.completedMissions,quality:this.quality,sensitivity:this.sensitivity,audio:this.audioEnabled,touchControls:"auto",timeOfDay:this.timeOfDay,pos:{x:this.player.pos.x,z:this.player.pos.z}};try{localStorage.setItem(ju,JSON.stringify(e))}catch{}}loadSave(){try{const e=localStorage.getItem(ju);if(!e)return null;const t=JSON.parse(e);return typeof t.money!="number"?null:t}catch{return null}}resetProgress(){try{localStorage.removeItem(ju)}catch{}this.money=0,this.health=100,this.wanted=0,this.completedMissions=0,this.startMission01(),this.player.placeAt(0,10,0,this.city),this.notify("PROGRESS RESET","A new night in Shadow City.","info")}handleInteract(){if(this.driving){this.exitVehicle();return}const e=this.findNearestVehicle();e&&this.enterVehicle(e)}dispose(){this.disposed=!0,this.save(),this.renderer.setAnimationLoop(null),window.removeEventListener("resize",this.resize),window.removeEventListener("orientationchange",this.resize),document.removeEventListener("visibilitychange",this.onVisibility),this.input.dispose(),this.audio.dispose(),this.vehicles.forEach(e=>e.dispose()),this.traffic.cars.forEach(e=>e.vehicle.dispose()),this.player.rig.object.removeFromParent(),this.renderer.dispose(),this.renderer.domElement.remove()}}const bo=52;function dA({onChange:n}){const e=nt.useRef(null),[t,i]=nt.useState({x:0,y:0}),[r,s]=nt.useState(!1),o=nt.useRef(null),a=nt.useCallback((h,f)=>{const p=e.current;if(!p)return;const v=p.getBoundingClientRect(),x=v.left+v.width/2,m=v.top+v.height/2;let d=h-x,g=f-m;const _=Math.hypot(d,g);_>bo&&(d=d/_*bo,g=g/_*bo),i({x:d,y:g}),n(d/bo,-g/bo,!0)},[n]),l=h=>{h.preventDefault(),o.current=h.pointerId,h.currentTarget.setPointerCapture(h.pointerId),s(!0),a(h.clientX,h.clientY)},c=h=>{o.current!==h.pointerId||!r||a(h.clientX,h.clientY)},u=h=>{o.current===h.pointerId&&(o.current=null,s(!1),i({x:0,y:0}),n(0,0,!1))};return J.jsxs("div",{ref:e,className:`joystick ${r?"active":""}`,onPointerDown:l,onPointerMove:c,onPointerUp:u,onPointerCancel:u,onContextMenu:h=>h.preventDefault(),children:[J.jsx("div",{className:"joystick-ring"}),J.jsx("div",{className:"joystick-ring inner"}),J.jsx("div",{className:"joystick-knob",style:{transform:`translate(${t.x}px, ${t.y}px)`}})]})}function pA({game:n}){const e=nt.useRef(null);return nt.useEffect(()=>{const t=e.current;if(!t)return;const i=t.getContext("2d");if(!i)return;const r=Math.min(window.devicePixelRatio||1,2),s=118;t.width=s*r,t.height=s*r,t.style.width=`${s}px`,t.style.height=`${s}px`;let o=0;const a=()=>{const l=n.current;l&&l.drawMinimap(i,t.width),o=requestAnimationFrame(a)};return a(),()=>cancelAnimationFrame(o)},[n]),J.jsx("canvas",{ref:e,className:"minimap"})}function mA({hud:n,gameRef:e,showTouch:t,onPause:i,notifications:r}){const s=Array.from({length:5},(a,l)=>l<n.wanted),o=n.health>60?"#8ed08a":n.health>30?"#e5c062":"#e0685f";return J.jsxs("div",{className:"hud",children:[J.jsx("div",{className:"vignette"}),J.jsxs("div",{className:"hud-top-left",children:[J.jsxs("div",{className:"brand",children:["SHADOW",J.jsx("span",{children:"CITY"})]}),J.jsxs("div",{className:"subline",children:[J.jsx("span",{className:"zone-tag",children:n.zone}),J.jsx("span",{className:"sep"}),J.jsx("span",{className:"clock",children:n.clock}),J.jsx("span",{className:`daytag ${n.isNight?"night":""}`,children:n.isNight?"NIGHT":"DAY"})]}),J.jsxs("div",{className:"status",children:[J.jsxs("div",{className:"money",children:[J.jsx("span",{className:"money-sign",children:"$"}),n.money.toLocaleString("en-US")]}),J.jsxs("div",{className:"health",children:[J.jsx("div",{className:"health-bar",children:J.jsx("div",{className:"health-fill",style:{width:`${n.health}%`,background:o}})}),J.jsx("span",{className:"health-value",children:n.health})]})]}),n.missionActive&&J.jsxs("div",{className:"mission-card",children:[J.jsx("div",{className:"mission-eyebrow",children:"OBJECTIVE"}),J.jsx("div",{className:"mission-title",children:n.missionTitle}),J.jsx("div",{className:"mission-objective",children:n.missionObjective}),J.jsxs("div",{className:"mission-distance",children:[J.jsx("span",{className:"chev",children:"◤"}),Math.round(n.missionDistance)," m"]})]})]}),J.jsxs("div",{className:"hud-top-right",children:[J.jsxs("div",{className:"top-right-row",children:[J.jsx("div",{className:"wanted","aria-label":`wanted level ${n.wanted}`,children:s.map((a,l)=>J.jsx("span",{className:a?"star on":"star",children:"★"},l))}),J.jsx("button",{className:"icon-btn",onClick:i,"aria-label":"Pause",children:J.jsxs("span",{className:"pause-bars",children:[J.jsx("i",{}),J.jsx("i",{})]})})]}),J.jsx(pA,{game:e}),J.jsx("div",{className:"mini-meta",children:J.jsxs("span",{children:[n.fps," FPS"]})})]}),n.inVehicle&&J.jsxs("div",{className:"speedo",children:[J.jsx("div",{className:"speed-value",children:Math.round(n.speed)}),J.jsx("div",{className:"speed-unit",children:"KM/H"}),J.jsx("div",{className:"speed-bar",children:J.jsx("div",{className:"speed-bar-fill",style:{width:`${Math.min(100,n.speed/180*100)}%`}})})]}),!n.inVehicle&&n.nearVehicle&&J.jsx("div",{className:"prompt",children:t?"Press ENTER to take the car":"Press E to take the car"}),n.inVehicle&&n.speed<6&&J.jsx("div",{className:"prompt subtle",children:t?"EXIT to get out":"E — exit vehicle"}),J.jsx("div",{className:"toasts",children:r.map(a=>J.jsxs("div",{className:`toast ${a.kind}`,children:[J.jsx("div",{className:"toast-title",children:a.title}),J.jsx("div",{className:"toast-text",children:a.text})]},a.id))}),t&&J.jsxs(J.Fragment,{children:[J.jsx(dA,{onChange:(a,l,c)=>e.current?.setJoystick(a,l,c)}),J.jsxs("div",{className:"touch-actions",children:[J.jsxs("button",{className:"round-btn interact",onPointerDown:a=>{a.preventDefault(),e.current?.interact()},"aria-label":"Interact",children:[J.jsx("span",{className:"glyph",children:n.inVehicle?"↧":"↥"}),J.jsx("span",{className:"btn-label",children:n.inVehicle?"EXIT":"ENTER"})]}),J.jsxs("div",{className:"action-column",children:[J.jsx("button",{className:"round-btn jump",onPointerDown:a=>{a.preventDefault(),e.current?.jump()},"aria-label":"Jump",children:J.jsx("span",{className:"glyph",children:"⤒"})}),J.jsx("button",{className:"round-btn run",onPointerDown:a=>{a.preventDefault(),e.current?.setRun(!0)},onPointerUp:()=>e.current?.setRun(!1),onPointerCancel:()=>e.current?.setRun(!1),onPointerLeave:()=>e.current?.setRun(!1),"aria-label":"Run",children:J.jsx("span",{className:"glyph",children:"»"})})]})]})]}),!t&&J.jsxs("div",{className:"keyhint",children:[J.jsxs("span",{children:[J.jsx("b",{children:"WASD"})," move"]}),J.jsxs("span",{children:[J.jsx("b",{children:"Drag"})," look"]}),J.jsxs("span",{children:[J.jsx("b",{children:"Shift"})," run"]}),J.jsxs("span",{children:[J.jsx("b",{children:"Space"})," jump"]}),J.jsxs("span",{children:[J.jsx("b",{children:"E"})," enter / exit"]})]})]})}function gA({onStart:n,quality:e,setQuality:t}){return J.jsxs("div",{className:"start-screen",children:[J.jsx("div",{className:"start-bg"}),J.jsxs("div",{className:"start-content",children:[J.jsx("div",{className:"start-eyebrow",children:"AN OPEN WORLD ACTION EXPERIENCE"}),J.jsxs("h1",{className:"start-title",children:["SHADOW",J.jsx("span",{children:"CITY"})]}),J.jsx("p",{className:"start-tagline",children:"A living city after dark. Walk it, drive it, run deliveries for the Nightline couriers."}),J.jsxs("button",{className:"play-btn",onClick:n,children:[J.jsx("span",{className:"play-icon",children:"▶"}),"ENTER THE CITY"]}),J.jsxs("div",{className:"quality-row",children:[J.jsx("span",{className:"quality-label",children:"GRAPHICS"}),["low","medium","high"].map(i=>J.jsx("button",{className:`quality-pill ${e===i?"active":""}`,onClick:()=>t(i),children:i.toUpperCase()},i))]}),J.jsxs("div",{className:"start-controls",children:[J.jsxs("div",{children:[J.jsx("h4",{children:"TOUCH"}),J.jsx("p",{children:"Left joystick to move · drag the right side to look · buttons for run, jump and enter/exit."})]}),J.jsxs("div",{children:[J.jsx("h4",{children:"KEYBOARD"}),J.jsx("p",{children:"WASD move · mouse drag to look · Shift run · Space jump · E enter / exit · Esc pause."})]})]})]}),J.jsx("div",{className:"start-footer",children:"All geometry, textures and audio are generated in real time — no downloads."})]})}function vA({onResume:n,quality:e,setQuality:t,sensitivity:i,setSensitivity:r,audioOn:s,setAudioOn:o,touch:a,setTouch:l,onReset:c}){const[u,h]=nt.useState(!1);return J.jsx("div",{className:"overlay",children:J.jsxs("div",{className:"pause-panel",children:[J.jsxs("div",{className:"pause-header",children:[J.jsxs("div",{children:[J.jsx("div",{className:"pause-eyebrow",children:"PAUSED"}),J.jsx("h2",{children:"SHADOW CITY"})]}),J.jsx("button",{className:"close-btn",onClick:n,"aria-label":"Resume",children:"✕"})]}),J.jsx("button",{className:"resume-btn",onClick:n,children:"RESUME"}),J.jsxs("div",{className:"settings",children:[J.jsx("div",{className:"settings-title",children:"GRAPHICS"}),J.jsx("div",{className:"segmented",children:["low","medium","high"].map(f=>J.jsx("button",{className:e===f?"active":"",onClick:()=>t(f),children:f.toUpperCase()},f))}),J.jsx("p",{className:"setting-note",children:"Low removes shadows and lowers resolution — best for older Android phones."}),J.jsx("div",{className:"settings-title",children:"CAMERA SENSITIVITY"}),J.jsx("input",{className:"slider",type:"range",min:.4,max:2.2,step:.1,value:i,onChange:f=>r(parseFloat(f.target.value))}),J.jsx("div",{className:"settings-title",children:"TOUCH CONTROLS"}),J.jsx("div",{className:"segmented",children:["auto","on","off"].map(f=>J.jsx("button",{className:a===f?"active":"",onClick:()=>l(f),children:f.toUpperCase()},f))}),J.jsxs("div",{className:"row-between",children:[J.jsx("span",{className:"settings-title inline",children:"AUDIO"}),J.jsx("button",{className:`toggle ${s?"on":""}`,onClick:()=>o(!s),children:s?"ON":"OFF"})]})]}),J.jsxs("div",{className:"pause-footer",children:[J.jsx("button",{className:`reset-btn ${u?"confirm":""}`,onClick:()=>{if(!u){h(!0);return}c(),h(!1)},children:u?"TAP AGAIN TO WIPE PROGRESS":"RESET PROGRESS"}),J.jsx("span",{className:"autosave",children:"Progress saves automatically"})]})]})})}const M_="shadowcity.settings.v1";function _A(){const n={quality:"medium",sensitivity:1,audio:!0,touch:"auto"};try{const e=localStorage.getItem(M_);if(!e)return n;const t=JSON.parse(e);return{quality:t.quality==="low"||t.quality==="high"?t.quality:"medium",sensitivity:typeof t.sensitivity=="number"?t.sensitivity:1,audio:t.audio!==!1,touch:t.touch==="on"||t.touch==="off"?t.touch:"auto"}}catch{return n}}function yA(n){try{localStorage.setItem(M_,JSON.stringify(n))}catch{}}function xA(){const n=nt.useRef(null),e=nt.useRef(null),t=nt.useRef(_A()),[i,r]=nt.useState(!1),[s,o]=nt.useState(S_),[a,l]=nt.useState([]),[c,u]=nt.useState(!1),[h,f]=nt.useState(t.current.quality),[p,v]=nt.useState(t.current.sensitivity),[x,m]=nt.useState(t.current.audio),[d,g]=nt.useState(t.current.touch),[_]=nt.useState(()=>typeof window<"u"&&(window.matchMedia("(pointer: coarse)").matches||"ontouchstart"in window)),S=nt.useCallback(T=>{l(P=>[...P.slice(-3),T]),window.setTimeout(()=>{l(P=>P.filter(X=>X.id!==T.id))},4600)},[]);nt.useEffect(()=>{if(!i)return;const T=n.current;if(!T)return;const P=new fA(T,{onHud:o,onNotify:S,quality:h,sensitivity:p,audio:x});return e.current=P,P.startAudio(),()=>{P.dispose(),e.current=null}},[i]),nt.useEffect(()=>{e.current?.setPaused(c)},[c]),nt.useEffect(()=>{e.current?.setQuality(h)},[h]),nt.useEffect(()=>{e.current?.setSensitivity(p)},[p]),nt.useEffect(()=>{e.current?.setAudioEnabled(x)},[x]),nt.useEffect(()=>{yA({quality:h,sensitivity:p,audio:x,touch:d})},[h,p,x,d]),nt.useEffect(()=>{const T=P=>{i&&P.code==="Escape"&&(P.preventDefault(),u(X=>!X))};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[i]);const b=d==="on"||d==="auto"&&_,A=()=>{e.current?.startAudio(),r(!0)};return J.jsxs("div",{className:"app",children:[J.jsx("div",{ref:n,className:"canvas-host"}),i&&J.jsx(mA,{hud:s,gameRef:e,showTouch:b,onPause:()=>u(!0),notifications:a}),!i&&J.jsx(gA,{onStart:A,quality:h,setQuality:f}),i&&c&&J.jsx(vA,{onResume:()=>u(!1),quality:h,setQuality:f,sensitivity:p,setSensitivity:v,audioOn:x,setAudioOn:m,touch:d,setTouch:g,onReset:()=>{e.current?.resetProgress(),l([])}})]})}Yu.createRoot(document.getElementById("root")).render(J.jsx(X_.StrictMode,{children:J.jsx(xA,{})}));

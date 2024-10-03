(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ps(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Q={},Wt=[],we=()=>{},zc=()=>!1,br=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Os=t=>t.startsWith("onUpdate:"),ae=Object.assign,ks=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gc=Object.prototype.hasOwnProperty,W=(t,e)=>Gc.call(t,e),F=Array.isArray,Kt=t=>Er(t)==="[object Map]",Bo=t=>Er(t)==="[object Set]",$=t=>typeof t=="function",ce=t=>typeof t=="string",Ut=t=>typeof t=="symbol",ne=t=>t!==null&&typeof t=="object",$o=t=>(ne(t)||$(t))&&$(t.then)&&$(t.catch),Ho=Object.prototype.toString,Er=t=>Ho.call(t),qc=t=>Er(t).slice(8,-1),jo=t=>Er(t)==="[object Object]",Ns=t=>ce(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hn=Ps(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jc=/-(\w)/g,He=wr(t=>t.replace(Jc,(e,n)=>n?n.toUpperCase():"")),Yc=/\B([A-Z])/g,nn=wr(t=>t.replace(Yc,"-$1").toLowerCase()),Ir=wr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fr=wr(t=>t?`on${Ir(t)}`:""),_t=(t,e)=>!Object.is(t,e),Yn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ss=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ui;const Wo=()=>ui||(ui=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ls(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ce(r)?el(r):Ls(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ce(t)||ne(t))return t}const Xc=/;(?![^(]*\))/g,Qc=/:([^]+)/,Zc=/\/\*[^]*?\*\//g;function el(t){const e={};return t.replace(Zc,"").split(Xc).forEach(n=>{if(n){const r=n.split(Qc);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ds(t){let e="";if(ce(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=Ds(t[n]);r&&(e+=r+" ")}else if(ne(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const tl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",nl=Ps(tl);function Ko(t){return!!t||t===""}const um=t=>ce(t)?t:t==null?"":F(t)||ne(t)&&(t.toString===Ho||!$(t.toString))?JSON.stringify(t,zo,2):String(t),zo=(t,e)=>e&&e.__v_isRef?zo(t,e.value):Kt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Br(r,i)+" =>"]=s,n),{})}:Bo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Br(n))}:Ut(e)?Br(e):ne(e)&&!F(e)&&!jo(e)?String(e):e,Br=(t,e="")=>{var n;return Ut(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Re;class rl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Re,!e&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Re;try{return Re=this,e()}finally{Re=n}}}on(){Re=this}off(){Re=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function sl(t,e=Re){e&&e.active&&e.effects.push(t)}function il(){return Re}let kt;class Ms{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,sl(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,vt();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ol(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),yt()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ht,n=kt;try{return ht=!0,kt=this,this._runnings++,fi(this),this.fn()}finally{di(this),this._runnings--,kt=n,ht=e}}stop(){var e;this.active&&(fi(this),di(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function ol(t){return t.value}function fi(t){t._trackId++,t._depsLength=0}function di(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Go(t.deps[e],t);t.deps.length=t._depsLength}}function Go(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let ht=!0,is=0;const qo=[];function vt(){qo.push(ht),ht=!1}function yt(){const t=qo.pop();ht=t===void 0?!0:t}function xs(){is++}function Us(){for(is--;!is&&os.length;)os.shift()()}function Jo(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Go(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const os=[];function Yo(t,e,n){xs();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&os.push(r.scheduler)))}Us()}const Xo=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},as=new WeakMap,Nt=Symbol(""),cs=Symbol("");function ve(t,e,n){if(ht&&kt){let r=as.get(t);r||as.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Xo(()=>r.delete(n))),Jo(kt,s)}}function qe(t,e,n,r,s,i){const o=as.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&F(t)){const a=Number(r);o.forEach((l,f)=>{(f==="length"||!Ut(f)&&f>=a)&&c.push(l)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":F(t)?Ns(n)&&c.push(o.get("length")):(c.push(o.get(Nt)),Kt(t)&&c.push(o.get(cs)));break;case"delete":F(t)||(c.push(o.get(Nt)),Kt(t)&&c.push(o.get(cs)));break;case"set":Kt(t)&&c.push(o.get(Nt));break}xs();for(const a of c)a&&Yo(a,4);Us()}const al=Ps("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ut)),hi=cl();function cl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=G(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(G)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){vt(),xs();const r=G(this)[e].apply(this,n);return Us(),yt(),r}}),t}function ll(t){Ut(t)||(t=String(t));const e=G(this);return ve(e,"has",t),e.hasOwnProperty(t)}class Zo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?wl:ra:i?na:ta).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=F(e);if(!s){if(o&&W(hi,n))return Reflect.get(hi,n,r);if(n==="hasOwnProperty")return ll}const c=Reflect.get(e,n,r);return(Ut(n)?Qo.has(n):al(n))||(s||ve(e,"get",n),i)?c:ye(c)?o&&Ns(n)?c:c.value:ne(c)?s?ia(c):Tr(c):c}}class ea extends Zo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const a=wn(i);if(!cr(r)&&!wn(r)&&(i=G(i),r=G(r)),!F(e)&&ye(i)&&!ye(r))return a?!1:(i.value=r,!0)}const o=F(e)&&Ns(n)?Number(n)<e.length:W(e,n),c=Reflect.set(e,n,r,s);return e===G(s)&&(o?_t(r,i)&&qe(e,"set",n,r):qe(e,"add",n,r)),c}deleteProperty(e,n){const r=W(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qe(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Ut(n)||!Qo.has(n))&&ve(e,"has",n),r}ownKeys(e){return ve(e,"iterate",F(e)?"length":Nt),Reflect.ownKeys(e)}}class ul extends Zo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fl=new ea,dl=new ul,hl=new ea(!0);const Fs=t=>t,Sr=t=>Reflect.getPrototypeOf(t);function jn(t,e,n=!1,r=!1){t=t.__v_raw;const s=G(t),i=G(e);n||(_t(e,i)&&ve(s,"get",e),ve(s,"get",i));const{has:o}=Sr(s),c=r?Fs:n?Hs:In;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function Vn(t,e=!1){const n=this.__v_raw,r=G(n),s=G(t);return e||(_t(t,s)&&ve(r,"has",t),ve(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Wn(t,e=!1){return t=t.__v_raw,!e&&ve(G(t),"iterate",Nt),Reflect.get(t,"size",t)}function pi(t){t=G(t);const e=G(this);return Sr(e).has.call(e,t)||(e.add(t),qe(e,"add",t,t)),this}function gi(t,e){e=G(e);const n=G(this),{has:r,get:s}=Sr(n);let i=r.call(n,t);i||(t=G(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?_t(e,o)&&qe(n,"set",t,e):qe(n,"add",t,e),this}function mi(t){const e=G(this),{has:n,get:r}=Sr(e);let s=n.call(e,t);s||(t=G(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qe(e,"delete",t,void 0),i}function _i(){const t=G(this),e=t.size!==0,n=t.clear();return e&&qe(t,"clear",void 0,void 0),n}function Kn(t,e){return function(r,s){const i=this,o=i.__v_raw,c=G(o),a=e?Fs:t?Hs:In;return!t&&ve(c,"iterate",Nt),o.forEach((l,f)=>r.call(s,a(l),a(f),i))}}function zn(t,e,n){return function(...r){const s=this.__v_raw,i=G(s),o=Kt(i),c=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,l=s[t](...r),f=n?Fs:e?Hs:In;return!e&&ve(i,"iterate",a?cs:Nt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:c?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function tt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function pl(){const t={get(i){return jn(this,i)},get size(){return Wn(this)},has:Vn,add:pi,set:gi,delete:mi,clear:_i,forEach:Kn(!1,!1)},e={get(i){return jn(this,i,!1,!0)},get size(){return Wn(this)},has:Vn,add:pi,set:gi,delete:mi,clear:_i,forEach:Kn(!1,!0)},n={get(i){return jn(this,i,!0)},get size(){return Wn(this,!0)},has(i){return Vn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Kn(!0,!1)},r={get(i){return jn(this,i,!0,!0)},get size(){return Wn(this,!0)},has(i){return Vn.call(this,i,!0)},add:tt("add"),set:tt("set"),delete:tt("delete"),clear:tt("clear"),forEach:Kn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=zn(i,!1,!1),n[i]=zn(i,!0,!1),e[i]=zn(i,!1,!0),r[i]=zn(i,!0,!0)}),[t,n,e,r]}const[gl,ml,_l,vl]=pl();function Bs(t,e){const n=e?t?vl:_l:t?ml:gl;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(W(n,s)&&s in r?n:r,s,i)}const yl={get:Bs(!1,!1)},bl={get:Bs(!1,!0)},El={get:Bs(!0,!1)};const ta=new WeakMap,na=new WeakMap,ra=new WeakMap,wl=new WeakMap;function Il(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Sl(t){return t.__v_skip||!Object.isExtensible(t)?0:Il(qc(t))}function Tr(t){return wn(t)?t:$s(t,!1,fl,yl,ta)}function sa(t){return $s(t,!1,hl,bl,na)}function ia(t){return $s(t,!0,dl,El,ra)}function $s(t,e,n,r,s){if(!ne(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Sl(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function pn(t){return wn(t)?pn(t.__v_raw):!!(t&&t.__v_isReactive)}function wn(t){return!!(t&&t.__v_isReadonly)}function cr(t){return!!(t&&t.__v_isShallow)}function oa(t){return t?!!t.__v_raw:!1}function G(t){const e=t&&t.__v_raw;return e?G(e):t}function Tl(t){return Object.isExtensible(t)&&Vo(t,"__v_skip",!0),t}const In=t=>ne(t)?Tr(t):t,Hs=t=>ne(t)?ia(t):t;class aa{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ms(()=>e(this._value),()=>Xn(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=G(this);return(!e._cacheable||e.effect.dirty)&&_t(e._value,e._value=e.effect.run())&&Xn(e,4),ca(e),e.effect._dirtyLevel>=2&&Xn(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Rl(t,e,n=!1){let r,s;const i=$(t);return i?(r=t,s=we):(r=t.get,s=t.set),new aa(r,s,i||!s,n)}function ca(t){var e;ht&&kt&&(t=G(t),Jo(kt,(e=t.dep)!=null?e:t.dep=Xo(()=>t.dep=void 0,t instanceof aa?t:void 0)))}function Xn(t,e=4,n){t=G(t);const r=t.dep;r&&Yo(r,e)}function ye(t){return!!(t&&t.__v_isRef===!0)}function la(t){return ua(t,!1)}function Cl(t){return ua(t,!0)}function ua(t,e){return ye(t)?t:new Al(t,e)}class Al{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:G(e),this._value=n?e:In(e)}get value(){return ca(this),this._value}set value(e){const n=this.__v_isShallow||cr(e)||wn(e);e=n?e:G(e),_t(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:In(e),Xn(this,4))}}function zt(t){return ye(t)?t.value:t}const Pl={get:(t,e,n)=>zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ye(s)&&!ye(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function fa(t){return pn(t)?t:new Proxy(t,Pl)}/**
* @vue/runtime-core v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pt(t,e,n,r){try{return r?t(...r):t()}catch(s){Rr(s,e,n)}}function Oe(t,e,n,r){if($(t)){const s=pt(t,e,n,r);return s&&$o(s)&&s.catch(i=>{Rr(i,e,n)}),s}if(F(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Oe(t[i],e,n,r));return s}}function Rr(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,c)===!1)return}i=i.parent}const a=e.appContext.config.errorHandler;if(a){vt(),pt(a,null,10,[t,o,c]),yt();return}}Ol(t,n,s,r)}function Ol(t,e,n,r=!0){console.error(t)}let Sn=!1,ls=!1;const ue=[];let Fe=0;const Gt=[];let it=null,At=0;const da=Promise.resolve();let js=null;function ha(t){const e=js||da;return t?e.then(this?t.bind(this):t):e}function kl(t){let e=Fe+1,n=ue.length;for(;e<n;){const r=e+n>>>1,s=ue[r],i=Tn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Vs(t){(!ue.length||!ue.includes(t,Sn&&t.allowRecurse?Fe+1:Fe))&&(t.id==null?ue.push(t):ue.splice(kl(t.id),0,t),pa())}function pa(){!Sn&&!ls&&(ls=!0,js=da.then(ma))}function Nl(t){const e=ue.indexOf(t);e>Fe&&ue.splice(e,1)}function Ll(t){F(t)?Gt.push(...t):(!it||!it.includes(t,t.allowRecurse?At+1:At))&&Gt.push(t),pa()}function vi(t,e,n=Sn?Fe+1:0){for(;n<ue.length;n++){const r=ue[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ue.splice(n,1),n--,r()}}}function ga(t){if(Gt.length){const e=[...new Set(Gt)].sort((n,r)=>Tn(n)-Tn(r));if(Gt.length=0,it){it.push(...e);return}for(it=e,At=0;At<it.length;At++)it[At]();it=null,At=0}}const Tn=t=>t.id==null?1/0:t.id,Dl=(t,e)=>{const n=Tn(t)-Tn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ma(t){ls=!1,Sn=!0,ue.sort(Dl);try{for(Fe=0;Fe<ue.length;Fe++){const e=ue[Fe];e&&e.active!==!1&&pt(e,null,14)}}finally{Fe=0,ue.length=0,ga(),Sn=!1,js=null,(ue.length||Gt.length)&&ma()}}function Ml(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Q;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[f]||Q;p&&(s=n.map(_=>ce(_)?_.trim():_)),h&&(s=n.map(ss))}let c,a=r[c=Fr(e)]||r[c=Fr(He(e))];!a&&i&&(a=r[c=Fr(nn(e))]),a&&Oe(a,t,6,s);const l=r[c+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Oe(l,t,6,s)}}function _a(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!$(t)){const a=l=>{const f=_a(l,e,!0);f&&(c=!0,ae(o,f))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!i&&!c?(ne(t)&&r.set(t,null),null):(F(i)?i.forEach(a=>o[a]=null):ae(o,i),ne(t)&&r.set(t,o),o)}function Cr(t,e){return!t||!br(e)?!1:(e=e.slice(2).replace(/Once$/,""),W(t,e[0].toLowerCase()+e.slice(1))||W(t,nn(e))||W(t,e))}let _e=null,va=null;function lr(t){const e=_e;return _e=t,va=t&&t.type.__scopeId||null,e}function ln(t,e=_e,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Oi(-1);const i=lr(e);let o;try{o=t(...s)}finally{lr(i),r._d&&Oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function $r(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:a,render:l,renderCache:f,props:h,data:p,setupState:_,ctx:R,inheritAttrs:L}=t,H=lr(t);let O,k;try{if(n.shapeFlag&4){const V=s||r,te=V;O=Ue(l.call(te,V,f,h,_,p,R)),k=c}else{const V=e;O=Ue(V.length>1?V(h,{attrs:c,slots:o,emit:a}):V(h,null)),k=e.props?c:xl(c)}}catch(V){_n.length=0,Rr(V,t,1),O=oe(Lt)}let x=O;if(k&&L!==!1){const V=Object.keys(k),{shapeFlag:te}=x;V.length&&te&7&&(i&&V.some(Os)&&(k=Ul(k,i)),x=Qt(x,k))}return n.dirs&&(x=Qt(x),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&(x.transition=n.transition),O=x,lr(H),O}const xl=t=>{let e;for(const n in t)(n==="class"||n==="style"||br(n))&&((e||(e={}))[n]=t[n]);return e},Ul=(t,e)=>{const n={};for(const r in t)(!Os(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Fl(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:a}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return r?yi(r,o,l):!!o;if(a&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==r[p]&&!Cr(l,p))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?yi(r,o,l):!0:!!o;return!1}function yi(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Cr(n,i))return!0}return!1}function Bl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ya="components";function bi(t,e){return Hl(ya,t,!0,e)||t}const $l=Symbol.for("v-ndc");function Hl(t,e,n=!0,r=!1){const s=_e||fe;if(s){const i=s.type;if(t===ya){const c=Mu(i,!1);if(c&&(c===e||c===He(e)||c===Ir(He(e))))return i}const o=Ei(s[t]||i[t],e)||Ei(s.appContext[t],e);return!o&&r?i:o}}function Ei(t,e){return t&&(t[e]||t[He(e)]||t[Ir(He(e))])}const jl=t=>t.__isSuspense;function Vl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Ll(t)}const Wl=Symbol.for("v-scx"),Kl=()=>Be(Wl),Gn={};function Qn(t,e,n){return ba(t,e,n)}function ba(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Q){if(e&&i){const U=e;e=(...re)=>{U(...re),te()}}const a=fe,l=U=>r===!0?U:Pt(U,r===!1?1:void 0);let f,h=!1,p=!1;if(ye(t)?(f=()=>t.value,h=cr(t)):pn(t)?(f=()=>l(t),h=!0):F(t)?(p=!0,h=t.some(U=>pn(U)||cr(U)),f=()=>t.map(U=>{if(ye(U))return U.value;if(pn(U))return l(U);if($(U))return pt(U,a,2)})):$(t)?e?f=()=>pt(t,a,2):f=()=>(_&&_(),Oe(t,a,3,[R])):f=we,e&&r){const U=f;f=()=>Pt(U())}let _,R=U=>{_=x.onStop=()=>{pt(U,a,4),_=x.onStop=void 0}},L;if(Or)if(R=we,e?n&&Oe(e,a,3,[f(),p?[]:void 0,R]):f(),s==="sync"){const U=Kl();L=U.__watcherHandles||(U.__watcherHandles=[])}else return we;let H=p?new Array(t.length).fill(Gn):Gn;const O=()=>{if(!(!x.active||!x.dirty))if(e){const U=x.run();(r||h||(p?U.some((re,pe)=>_t(re,H[pe])):_t(U,H)))&&(_&&_(),Oe(e,a,3,[U,H===Gn?void 0:p&&H[0]===Gn?[]:H,R]),H=U)}else x.run()};O.allowRecurse=!!e;let k;s==="sync"?k=O:s==="post"?k=()=>me(O,a&&a.suspense):(O.pre=!0,a&&(O.id=a.uid),k=()=>Vs(O));const x=new Ms(f,we,k),V=il(),te=()=>{x.stop(),V&&ks(V.effects,x)};return e?n?O():H=x.run():s==="post"?me(x.run.bind(x),a&&a.suspense):x.run(),L&&L.push(te),te}function zl(t,e,n){const r=this.proxy,s=ce(t)?t.includes(".")?Ea(r,t):()=>r[t]:t.bind(r,r);let i;$(e)?i=e:(i=e.handler,n=e);const o=Ln(this),c=ba(s,i.bind(r),n);return o(),c}function Ea(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Pt(t,e,n=0,r){if(!ne(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),ye(t))Pt(t.value,e,n,r);else if(F(t))for(let s=0;s<t.length;s++)Pt(t[s],e,n,r);else if(Bo(t)||Kt(t))t.forEach(s=>{Pt(s,e,n,r)});else if(jo(t))for(const s in t)Pt(t[s],e,n,r);return t}function fm(t,e){if(_e===null)return t;const n=kr(_e)||_e.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,a=Q]=e[s];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&Pt(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:a}))}return t}function Tt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let a=c.dir[r];a&&(vt(),Oe(a,n,8,[t.el,c,t,e]),yt())}}/*! #__NO_SIDE_EFFECTS__ */function wa(t,e){return $(t)?ae({name:t.name},e,{setup:t}):t}const Zn=t=>!!t.type.__asyncLoader,Ia=t=>t.type.__isKeepAlive;function Gl(t,e){Sa(t,"a",e)}function ql(t,e){Sa(t,"da",e)}function Sa(t,e,n=fe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ar(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Ia(s.parent.vnode)&&Jl(r,e,n,s),s=s.parent}}function Jl(t,e,n,r){const s=Ar(e,t,r,!0);Ta(()=>{ks(r[e],s)},n)}function Ar(t,e,n=fe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;vt();const c=Ln(n),a=Oe(e,n,t,o);return c(),yt(),a});return r?s.unshift(i):s.push(i),i}}const Xe=t=>(e,n=fe)=>(!Or||t==="sp")&&Ar(t,(...r)=>e(...r),n),Yl=Xe("bm"),Xl=Xe("m"),Ql=Xe("bu"),Zl=Xe("u"),eu=Xe("bum"),Ta=Xe("um"),tu=Xe("sp"),nu=Xe("rtg"),ru=Xe("rtc");function su(t,e=fe){Ar("ec",t,e)}const us=t=>t?$a(t)?kr(t)||t.proxy:us(t.parent):null,gn=ae(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>us(t.parent),$root:t=>us(t.root),$emit:t=>t.emit,$options:t=>Ws(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Vs(t.update)}),$nextTick:t=>t.n||(t.n=ha.bind(t.proxy)),$watch:t=>zl.bind(t)}),Hr=(t,e)=>t!==Q&&!t.__isScriptSetup&&W(t,e),iu={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:a}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Hr(r,e))return o[e]=1,r[e];if(s!==Q&&W(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&W(l,e))return o[e]=3,i[e];if(n!==Q&&W(n,e))return o[e]=4,n[e];fs&&(o[e]=0)}}const f=gn[e];let h,p;if(f)return e==="$attrs"&&ve(t.attrs,"get",""),f(t);if((h=c.__cssModules)&&(h=h[e]))return h;if(n!==Q&&W(n,e))return o[e]=4,n[e];if(p=a.config.globalProperties,W(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Hr(s,e)?(s[e]=n,!0):r!==Q&&W(r,e)?(r[e]=n,!0):W(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Q&&W(t,o)||Hr(e,o)||(c=i[0])&&W(c,o)||W(r,o)||W(gn,o)||W(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:W(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function wi(t){return F(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fs=!0;function ou(t){const e=Ws(t),n=t.proxy,r=t.ctx;fs=!1,e.beforeCreate&&Ii(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:a,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:R,activated:L,deactivated:H,beforeDestroy:O,beforeUnmount:k,destroyed:x,unmounted:V,render:te,renderTracked:U,renderTriggered:re,errorCaptured:pe,serverPrefetch:Se,expose:Ee,inheritAttrs:Ze,components:St,directives:Le,filters:sn}=e;if(l&&au(l,r,null),o)for(const J in o){const K=o[J];$(K)&&(r[J]=K.bind(n))}if(s){const J=s.call(n,n);ne(J)&&(t.data=Tr(J))}if(fs=!0,i)for(const J in i){const K=i[J],je=$(K)?K.bind(n,n):$(K.get)?K.get.bind(n,n):we,et=!$(K)&&$(K.set)?K.set.bind(n):we,De=Ce({get:je,set:et});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>De.value,set:ge=>De.value=ge})}if(c)for(const J in c)Ra(c[J],r,n,J);if(a){const J=$(a)?a.call(n):a;Reflect.ownKeys(J).forEach(K=>{er(K,J[K])})}f&&Ii(f,t,"c");function se(J,K){F(K)?K.forEach(je=>J(je.bind(n))):K&&J(K.bind(n))}if(se(Yl,h),se(Xl,p),se(Ql,_),se(Zl,R),se(Gl,L),se(ql,H),se(su,pe),se(ru,U),se(nu,re),se(eu,k),se(Ta,V),se(tu,Se),F(Ee))if(Ee.length){const J=t.exposed||(t.exposed={});Ee.forEach(K=>{Object.defineProperty(J,K,{get:()=>n[K],set:je=>n[K]=je})})}else t.exposed||(t.exposed={});te&&t.render===we&&(t.render=te),Ze!=null&&(t.inheritAttrs=Ze),St&&(t.components=St),Le&&(t.directives=Le)}function au(t,e,n=we){F(t)&&(t=ds(t));for(const r in t){const s=t[r];let i;ne(s)?"default"in s?i=Be(s.from||r,s.default,!0):i=Be(s.from||r):i=Be(s),ye(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ii(t,e,n){Oe(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ra(t,e,n,r){const s=r.includes(".")?Ea(n,r):()=>n[r];if(ce(t)){const i=e[t];$(i)&&Qn(s,i)}else if($(t))Qn(s,t.bind(n));else if(ne(t))if(F(t))t.forEach(i=>Ra(i,e,n,r));else{const i=$(t.handler)?t.handler.bind(n):e[t.handler];$(i)&&Qn(s,i,t)}}function Ws(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let a;return c?a=c:!s.length&&!n&&!r?a=e:(a={},s.length&&s.forEach(l=>ur(a,l,o,!0)),ur(a,e,o)),ne(e)&&i.set(e,a),a}function ur(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ur(t,i,n,!0),s&&s.forEach(o=>ur(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=cu[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const cu={data:Si,props:Ti,emits:Ti,methods:un,computed:un,beforeCreate:he,created:he,beforeMount:he,mounted:he,beforeUpdate:he,updated:he,beforeDestroy:he,beforeUnmount:he,destroyed:he,unmounted:he,activated:he,deactivated:he,errorCaptured:he,serverPrefetch:he,components:un,directives:un,watch:uu,provide:Si,inject:lu};function Si(t,e){return e?t?function(){return ae($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function lu(t,e){return un(ds(t),ds(e))}function ds(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function he(t,e){return t?[...new Set([].concat(t,e))]:e}function un(t,e){return t?ae(Object.create(null),t,e):e}function Ti(t,e){return t?F(t)&&F(e)?[...new Set([...t,...e])]:ae(Object.create(null),wi(t),wi(e??{})):e}function uu(t,e){if(!t)return e;if(!e)return t;const n=ae(Object.create(null),t);for(const r in e)n[r]=he(t[r],e[r]);return n}function Ca(){return{app:null,config:{isNativeTag:zc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let fu=0;function du(t,e){return function(r,s=null){$(r)||(r=ae({},r)),s!=null&&!ne(s)&&(s=null);const i=Ca(),o=new WeakSet;let c=!1;const a=i.app={_uid:fu++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uu,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&$(l.install)?(o.add(l),l.install(a,...f)):$(l)&&(o.add(l),l(a,...f))),a},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),a},component(l,f){return f?(i.components[l]=f,a):i.components[l]},directive(l,f){return f?(i.directives[l]=f,a):i.directives[l]},mount(l,f,h){if(!c){const p=oe(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(p,l):t(p,l,h),c=!0,a._container=l,l.__vue_app__=a,kr(p.component)||p.component.proxy}},unmount(){c&&(t(null,a._container),delete a._container.__vue_app__)},provide(l,f){return i.provides[l]=f,a},runWithContext(l){const f=mn;mn=a;try{return l()}finally{mn=f}}};return a}}let mn=null;function er(t,e){if(fe){let n=fe.provides;const r=fe.parent&&fe.parent.provides;r===n&&(n=fe.provides=Object.create(r)),n[t]=e}}function Be(t,e,n=!1){const r=fe||_e;if(r||mn){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:mn._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&$(e)?e.call(r&&r.proxy):e}}const Aa={},Pa=()=>Object.create(Aa),Oa=t=>Object.getPrototypeOf(t)===Aa;function hu(t,e,n,r=!1){const s={},i=Pa();t.propsDefaults=Object.create(null),ka(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sa(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function pu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=G(s),[a]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Cr(t.emitsOptions,p))continue;const _=e[p];if(a)if(W(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const R=He(p);s[R]=hs(a,c,R,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{ka(t,e,s,i)&&(l=!0);let f;for(const h in c)(!e||!W(e,h)&&((f=nn(h))===h||!W(e,f)))&&(a?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=hs(a,c,h,void 0,t,!0)):delete s[h]);if(i!==c)for(const h in i)(!e||!W(e,h))&&(delete i[h],l=!0)}l&&qe(t.attrs,"set","")}function ka(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let a in e){if(hn(a))continue;const l=e[a];let f;s&&W(s,f=He(a))?!i||!i.includes(f)?n[f]=l:(c||(c={}))[f]=l:Cr(t.emitsOptions,a)||(!(a in r)||l!==r[a])&&(r[a]=l,o=!0)}if(i){const a=G(n),l=c||Q;for(let f=0;f<i.length;f++){const h=i[f];n[h]=hs(s,a,h,l[h],t,!W(l,h))}}return o}function hs(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=W(o,"default");if(c&&r===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&$(a)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Ln(s);r=l[n]=a.call(null,e),f()}}else r=a}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===nn(n))&&(r=!0))}return r}function Na(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let a=!1;if(!$(t)){const f=h=>{a=!0;const[p,_]=Na(h,e,!0);ae(o,p),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!a)return ne(t)&&r.set(t,Wt),Wt;if(F(i))for(let f=0;f<i.length;f++){const h=He(i[f]);Ri(h)&&(o[h]=Q)}else if(i)for(const f in i){const h=He(f);if(Ri(h)){const p=i[f],_=o[h]=F(p)||$(p)?{type:p}:ae({},p);if(_){const R=Pi(Boolean,_.type),L=Pi(String,_.type);_[0]=R>-1,_[1]=L<0||R<L,(R>-1||W(_,"default"))&&c.push(h)}}}const l=[o,c];return ne(t)&&r.set(t,l),l}function Ri(t){return t[0]!=="$"&&!hn(t)}function Ci(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ai(t,e){return Ci(t)===Ci(e)}function Pi(t,e){return F(e)?e.findIndex(n=>Ai(n,t)):$(e)&&Ai(e,t)?0:-1}const La=t=>t[0]==="_"||t==="$stable",Ks=t=>F(t)?t.map(Ue):[Ue(t)],gu=(t,e,n)=>{if(e._n)return e;const r=ln((...s)=>Ks(e(...s)),n);return r._c=!1,r},Da=(t,e,n)=>{const r=t._ctx;for(const s in t){if(La(s))continue;const i=t[s];if($(i))e[s]=gu(s,i,r);else if(i!=null){const o=Ks(i);e[s]=()=>o}}},Ma=(t,e)=>{const n=Ks(e);t.slots.default=()=>n},mu=(t,e)=>{const n=t.slots=Pa();if(t.vnode.shapeFlag&32){const r=e._;r?(ae(n,e),Vo(n,"_",r)):Da(e,n)}else e&&Ma(t,e)},_u=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Q;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(ae(s,e),!n&&c===1&&delete s._):(i=!e.$stable,Da(e,s)),o=e}else e&&(Ma(t,e),o={default:1});if(i)for(const c in s)!La(c)&&o[c]==null&&delete s[c]};function ps(t,e,n,r,s=!1){if(F(t)){t.forEach((p,_)=>ps(p,e&&(F(e)?e[_]:e),n,r,s));return}if(Zn(r)&&!s)return;const i=r.shapeFlag&4?kr(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:a}=t,l=e&&e.r,f=c.refs===Q?c.refs={}:c.refs,h=c.setupState;if(l!=null&&l!==a&&(ce(l)?(f[l]=null,W(h,l)&&(h[l]=null)):ye(l)&&(l.value=null)),$(a))pt(a,c,12,[o,f]);else{const p=ce(a),_=ye(a);if(p||_){const R=()=>{if(t.f){const L=p?W(h,a)?h[a]:f[a]:a.value;s?F(L)&&ks(L,i):F(L)?L.includes(i)||L.push(i):p?(f[a]=[i],W(h,a)&&(h[a]=f[a])):(a.value=[i],t.k&&(f[t.k]=a.value))}else p?(f[a]=o,W(h,a)&&(h[a]=o)):_&&(a.value=o,t.k&&(f[t.k]=o))};o?(R.id=-1,me(R,n)):R()}}}const me=Vl;function vu(t){return yu(t)}function yu(t,e){const n=Wo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:a,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=we,insertStaticContent:R}=t,L=(u,d,g,y=null,m=null,w=null,T=void 0,E=null,I=!!d.dynamicChildren)=>{if(u===d)return;u&&!an(u,d)&&(y=v(u),ge(u,m,w,!0),u=null),d.patchFlag===-2&&(I=!1,d.dynamicChildren=null);const{type:b,ref:A,shapeFlag:D}=d;switch(b){case Pr:H(u,d,g,y);break;case Lt:O(u,d,g,y);break;case Vr:u==null&&k(d,g,y,T);break;case We:St(u,d,g,y,m,w,T,E,I);break;default:D&1?te(u,d,g,y,m,w,T,E,I):D&6?Le(u,d,g,y,m,w,T,E,I):(D&64||D&128)&&b.process(u,d,g,y,m,w,T,E,I,P)}A!=null&&m&&ps(A,u&&u.ref,w,d||u,!d)},H=(u,d,g,y)=>{if(u==null)r(d.el=c(d.children),g,y);else{const m=d.el=u.el;d.children!==u.children&&l(m,d.children)}},O=(u,d,g,y)=>{u==null?r(d.el=a(d.children||""),g,y):d.el=u.el},k=(u,d,g,y)=>{[u.el,u.anchor]=R(u.children,d,g,y,u.el,u.anchor)},x=({el:u,anchor:d},g,y)=>{let m;for(;u&&u!==d;)m=p(u),r(u,g,y),u=m;r(d,g,y)},V=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),s(u),u=g;s(d)},te=(u,d,g,y,m,w,T,E,I)=>{d.type==="svg"?T="svg":d.type==="math"&&(T="mathml"),u==null?U(d,g,y,m,w,T,E,I):Se(u,d,m,w,T,E,I)},U=(u,d,g,y,m,w,T,E)=>{let I,b;const{props:A,shapeFlag:D,transition:N,dirs:B}=u;if(I=u.el=o(u.type,w,A&&A.is,A),D&8?f(I,u.children):D&16&&pe(u.children,I,null,y,m,jr(u,w),T,E),B&&Tt(u,null,y,"created"),re(I,u,u.scopeId,T,y),A){for(const Y in A)Y!=="value"&&!hn(Y)&&i(I,Y,null,A[Y],w,u.children,y,m,le);"value"in A&&i(I,"value",null,A.value,w),(b=A.onVnodeBeforeMount)&&xe(b,y,u)}B&&Tt(u,null,y,"beforeMount");const j=bu(m,N);j&&N.beforeEnter(I),r(I,d,g),((b=A&&A.onVnodeMounted)||j||B)&&me(()=>{b&&xe(b,y,u),j&&N.enter(I),B&&Tt(u,null,y,"mounted")},m)},re=(u,d,g,y,m)=>{if(g&&_(u,g),y)for(let w=0;w<y.length;w++)_(u,y[w]);if(m){let w=m.subTree;if(d===w){const T=m.vnode;re(u,T,T.scopeId,T.slotScopeIds,m.parent)}}},pe=(u,d,g,y,m,w,T,E,I=0)=>{for(let b=I;b<u.length;b++){const A=u[b]=E?ot(u[b]):Ue(u[b]);L(null,A,d,g,y,m,w,T,E)}},Se=(u,d,g,y,m,w,T)=>{const E=d.el=u.el;let{patchFlag:I,dynamicChildren:b,dirs:A}=d;I|=u.patchFlag&16;const D=u.props||Q,N=d.props||Q;let B;if(g&&Rt(g,!1),(B=N.onVnodeBeforeUpdate)&&xe(B,g,d,u),A&&Tt(d,u,g,"beforeUpdate"),g&&Rt(g,!0),b?Ee(u.dynamicChildren,b,E,g,y,jr(d,m),w):T||K(u,d,E,null,g,y,jr(d,m),w,!1),I>0){if(I&16)Ze(E,d,D,N,g,y,m);else if(I&2&&D.class!==N.class&&i(E,"class",null,N.class,m),I&4&&i(E,"style",D.style,N.style,m),I&8){const j=d.dynamicProps;for(let Y=0;Y<j.length;Y++){const ee=j[Y],ie=D[ee],Te=N[ee];(Te!==ie||ee==="value")&&i(E,ee,ie,Te,m,u.children,g,y,le)}}I&1&&u.children!==d.children&&f(E,d.children)}else!T&&b==null&&Ze(E,d,D,N,g,y,m);((B=N.onVnodeUpdated)||A)&&me(()=>{B&&xe(B,g,d,u),A&&Tt(d,u,g,"updated")},y)},Ee=(u,d,g,y,m,w,T)=>{for(let E=0;E<d.length;E++){const I=u[E],b=d[E],A=I.el&&(I.type===We||!an(I,b)||I.shapeFlag&70)?h(I.el):g;L(I,b,A,null,y,m,w,T,!0)}},Ze=(u,d,g,y,m,w,T)=>{if(g!==y){if(g!==Q)for(const E in g)!hn(E)&&!(E in y)&&i(u,E,g[E],null,T,d.children,m,w,le);for(const E in y){if(hn(E))continue;const I=y[E],b=g[E];I!==b&&E!=="value"&&i(u,E,b,I,T,d.children,m,w,le)}"value"in y&&i(u,"value",g.value,y.value,T)}},St=(u,d,g,y,m,w,T,E,I)=>{const b=d.el=u?u.el:c(""),A=d.anchor=u?u.anchor:c("");let{patchFlag:D,dynamicChildren:N,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),u==null?(r(b,g,y),r(A,g,y),pe(d.children||[],g,A,m,w,T,E,I)):D>0&&D&64&&N&&u.dynamicChildren?(Ee(u.dynamicChildren,N,g,m,w,T,E),(d.key!=null||m&&d===m.subTree)&&xa(u,d,!0)):K(u,d,g,A,m,w,T,E,I)},Le=(u,d,g,y,m,w,T,E,I)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?m.ctx.activate(d,g,y,T,I):sn(d,g,y,m,w,T,I):Ft(u,d,I)},sn=(u,d,g,y,m,w,T)=>{const E=u.component=Ou(u,y,m);if(Ia(u)&&(E.ctx.renderer=P),ku(E),E.asyncDep){if(m&&m.registerDep(E,se),!u.el){const I=E.subTree=oe(Lt);O(null,I,d,g)}}else se(E,u,d,g,m,w,T)},Ft=(u,d,g)=>{const y=d.component=u.component;if(Fl(u,d,g))if(y.asyncDep&&!y.asyncResolved){J(y,d,g);return}else y.next=d,Nl(y.update),y.effect.dirty=!0,y.update();else d.el=u.el,y.vnode=d},se=(u,d,g,y,m,w,T)=>{const E=()=>{if(u.isMounted){let{next:A,bu:D,u:N,parent:B,vnode:j}=u;{const Ht=Ua(u);if(Ht){A&&(A.el=j.el,J(u,A,T)),Ht.asyncDep.then(()=>{u.isUnmounted||E()});return}}let Y=A,ee;Rt(u,!1),A?(A.el=j.el,J(u,A,T)):A=j,D&&Yn(D),(ee=A.props&&A.props.onVnodeBeforeUpdate)&&xe(ee,B,A,j),Rt(u,!0);const ie=$r(u),Te=u.subTree;u.subTree=ie,L(Te,ie,h(Te.el),v(Te),u,m,w),A.el=ie.el,Y===null&&Bl(u,ie.el),N&&me(N,m),(ee=A.props&&A.props.onVnodeUpdated)&&me(()=>xe(ee,B,A,j),m)}else{let A;const{el:D,props:N}=d,{bm:B,m:j,parent:Y}=u,ee=Zn(d);if(Rt(u,!1),B&&Yn(B),!ee&&(A=N&&N.onVnodeBeforeMount)&&xe(A,Y,d),Rt(u,!0),D&&Z){const ie=()=>{u.subTree=$r(u),Z(D,u.subTree,u,m,null)};ee?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ie()):ie()}else{const ie=u.subTree=$r(u);L(null,ie,g,y,u,m,w),d.el=ie.el}if(j&&me(j,m),!ee&&(A=N&&N.onVnodeMounted)){const ie=d;me(()=>xe(A,Y,ie),m)}(d.shapeFlag&256||Y&&Zn(Y.vnode)&&Y.vnode.shapeFlag&256)&&u.a&&me(u.a,m),u.isMounted=!0,d=g=y=null}},I=u.effect=new Ms(E,we,()=>Vs(b),u.scope),b=u.update=()=>{I.dirty&&I.run()};b.id=u.uid,Rt(u,!0),b()},J=(u,d,g)=>{d.component=u;const y=u.vnode.props;u.vnode=d,u.next=null,pu(u,d.props,y,g),_u(u,d.children,g),vt(),vi(u),yt()},K=(u,d,g,y,m,w,T,E,I=!1)=>{const b=u&&u.children,A=u?u.shapeFlag:0,D=d.children,{patchFlag:N,shapeFlag:B}=d;if(N>0){if(N&128){et(b,D,g,y,m,w,T,E,I);return}else if(N&256){je(b,D,g,y,m,w,T,E,I);return}}B&8?(A&16&&le(b,m,w),D!==b&&f(g,D)):A&16?B&16?et(b,D,g,y,m,w,T,E,I):le(b,m,w,!0):(A&8&&f(g,""),B&16&&pe(D,g,y,m,w,T,E,I))},je=(u,d,g,y,m,w,T,E,I)=>{u=u||Wt,d=d||Wt;const b=u.length,A=d.length,D=Math.min(b,A);let N;for(N=0;N<D;N++){const B=d[N]=I?ot(d[N]):Ue(d[N]);L(u[N],B,g,null,m,w,T,E,I)}b>A?le(u,m,w,!0,!1,D):pe(d,g,y,m,w,T,E,I,D)},et=(u,d,g,y,m,w,T,E,I)=>{let b=0;const A=d.length;let D=u.length-1,N=A-1;for(;b<=D&&b<=N;){const B=u[b],j=d[b]=I?ot(d[b]):Ue(d[b]);if(an(B,j))L(B,j,g,null,m,w,T,E,I);else break;b++}for(;b<=D&&b<=N;){const B=u[D],j=d[N]=I?ot(d[N]):Ue(d[N]);if(an(B,j))L(B,j,g,null,m,w,T,E,I);else break;D--,N--}if(b>D){if(b<=N){const B=N+1,j=B<A?d[B].el:y;for(;b<=N;)L(null,d[b]=I?ot(d[b]):Ue(d[b]),g,j,m,w,T,E,I),b++}}else if(b>N)for(;b<=D;)ge(u[b],m,w,!0),b++;else{const B=b,j=b,Y=new Map;for(b=j;b<=N;b++){const be=d[b]=I?ot(d[b]):Ue(d[b]);be.key!=null&&Y.set(be.key,b)}let ee,ie=0;const Te=N-j+1;let Ht=!1,ai=0;const on=new Array(Te);for(b=0;b<Te;b++)on[b]=0;for(b=B;b<=D;b++){const be=u[b];if(ie>=Te){ge(be,m,w,!0);continue}let Me;if(be.key!=null)Me=Y.get(be.key);else for(ee=j;ee<=N;ee++)if(on[ee-j]===0&&an(be,d[ee])){Me=ee;break}Me===void 0?ge(be,m,w,!0):(on[Me-j]=b+1,Me>=ai?ai=Me:Ht=!0,L(be,d[Me],g,null,m,w,T,E,I),ie++)}const ci=Ht?Eu(on):Wt;for(ee=ci.length-1,b=Te-1;b>=0;b--){const be=j+b,Me=d[be],li=be+1<A?d[be+1].el:y;on[b]===0?L(null,Me,g,li,m,w,T,E,I):Ht&&(ee<0||b!==ci[ee]?De(Me,g,li,2):ee--)}}},De=(u,d,g,y,m=null)=>{const{el:w,type:T,transition:E,children:I,shapeFlag:b}=u;if(b&6){De(u.component.subTree,d,g,y);return}if(b&128){u.suspense.move(d,g,y);return}if(b&64){T.move(u,d,g,P);return}if(T===We){r(w,d,g);for(let D=0;D<I.length;D++)De(I[D],d,g,y);r(u.anchor,d,g);return}if(T===Vr){x(u,d,g);return}if(y!==2&&b&1&&E)if(y===0)E.beforeEnter(w),r(w,d,g),me(()=>E.enter(w),m);else{const{leave:D,delayLeave:N,afterLeave:B}=E,j=()=>r(w,d,g),Y=()=>{D(w,()=>{j(),B&&B()})};N?N(w,j,Y):Y()}else r(w,d,g)},ge=(u,d,g,y=!1,m=!1)=>{const{type:w,props:T,ref:E,children:I,dynamicChildren:b,shapeFlag:A,patchFlag:D,dirs:N}=u;if(E!=null&&ps(E,null,g,u,!0),A&256){d.ctx.deactivate(u);return}const B=A&1&&N,j=!Zn(u);let Y;if(j&&(Y=T&&T.onVnodeBeforeUnmount)&&xe(Y,d,u),A&6)Hn(u.component,g,y);else{if(A&128){u.suspense.unmount(g,y);return}B&&Tt(u,null,d,"beforeUnmount"),A&64?u.type.remove(u,d,g,m,P,y):b&&(w!==We||D>0&&D&64)?le(b,d,g,!1,!0):(w===We&&D&384||!m&&A&16)&&le(I,d,g),y&&Bt(u)}(j&&(Y=T&&T.onVnodeUnmounted)||B)&&me(()=>{Y&&xe(Y,d,u),B&&Tt(u,null,d,"unmounted")},g)},Bt=u=>{const{type:d,el:g,anchor:y,transition:m}=u;if(d===We){$t(g,y);return}if(d===Vr){V(u);return}const w=()=>{s(g),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(u.shapeFlag&1&&m&&!m.persisted){const{leave:T,delayLeave:E}=m,I=()=>T(g,w);E?E(u.el,w,I):I()}else w()},$t=(u,d)=>{let g;for(;u!==d;)g=p(u),s(u),u=g;s(d)},Hn=(u,d,g)=>{const{bum:y,scope:m,update:w,subTree:T,um:E}=u;y&&Yn(y),m.stop(),w&&(w.active=!1,ge(T,u,d,g)),E&&me(E,d),me(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},le=(u,d,g,y=!1,m=!1,w=0)=>{for(let T=w;T<u.length;T++)ge(u[T],d,g,y,m)},v=u=>u.shapeFlag&6?v(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el);let C=!1;const S=(u,d,g)=>{u==null?d._vnode&&ge(d._vnode,null,null,!0):L(d._vnode||null,u,d,null,null,null,g),C||(C=!0,vi(),ga(),C=!1),d._vnode=u},P={p:L,um:ge,m:De,r:Bt,mt:sn,mc:pe,pc:K,pbc:Ee,n:v,o:t};let z,Z;return e&&([z,Z]=e(P)),{render:S,hydrate:z,createApp:du(S,z)}}function jr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Rt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function bu(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xa(t,e,n=!1){const r=t.children,s=e.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ot(s[i]),c.el=o.el),n||xa(o,c)),c.type===Pr&&(c.el=o.el)}}function Eu(t){const e=t.slice(),n=[0];let r,s,i,o,c;const a=t.length;for(r=0;r<a;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<l?i=c+1:o=c;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ua(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ua(e)}const wu=t=>t.__isTeleport,We=Symbol.for("v-fgt"),Pr=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),Vr=Symbol.for("v-stc"),_n=[];let Ae=null;function tr(t=!1){_n.push(Ae=t?null:[])}function Iu(){_n.pop(),Ae=_n[_n.length-1]||null}let Rn=1;function Oi(t){Rn+=t}function Fa(t){return t.dynamicChildren=Rn>0?Ae||Wt:null,Iu(),Rn>0&&Ae&&Ae.push(t),t}function Wr(t,e,n,r,s,i){return Fa(vn(t,e,n,r,s,i,!0))}function Su(t,e,n,r,s){return Fa(oe(t,e,n,r,s,!0))}function gs(t){return t?t.__v_isVNode===!0:!1}function an(t,e){return t.type===e.type&&t.key===e.key}const Ba=({key:t})=>t??null,nr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ce(t)||ye(t)||$(t)?{i:_e,r:t,k:e,f:!!n}:t:null);function vn(t,e=null,n=null,r=0,s=null,i=t===We?0:1,o=!1,c=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ba(e),ref:e&&nr(e),scopeId:va,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_e};return c?(zs(a,n),i&128&&t.normalize(a)):n&&(a.shapeFlag|=ce(n)?8:16),Rn>0&&!o&&Ae&&(a.patchFlag>0||i&6)&&a.patchFlag!==32&&Ae.push(a),a}const oe=Tu;function Tu(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===$l)&&(t=Lt),gs(t)){const c=Qt(t,e,!0);return n&&zs(c,n),Rn>0&&!i&&Ae&&(c.shapeFlag&6?Ae[Ae.indexOf(t)]=c:Ae.push(c)),c.patchFlag|=-2,c}if(xu(t)&&(t=t.__vccOpts),e){e=Ru(e);let{class:c,style:a}=e;c&&!ce(c)&&(e.class=Ds(c)),ne(a)&&(oa(a)&&!F(a)&&(a=ae({},a)),e.style=Ls(a))}const o=ce(t)?1:jl(t)?128:wu(t)?64:ne(t)?4:$(t)?2:0;return vn(t,e,n,r,s,o,i,!0)}function Ru(t){return t?oa(t)||Oa(t)?ae({},t):t:null}function Qt(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,c=e?Cu(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ba(c),ref:e&&e.ref?n&&s?F(s)?s.concat(nr(e)):[s,nr(e)]:nr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==We?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qt(t.ssContent),ssFallback:t.ssFallback&&Qt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function st(t=" ",e=0){return oe(Pr,null,t,e)}function dm(t="",e=!1){return e?(tr(),Su(Lt,null,t)):oe(Lt,null,t)}function Ue(t){return t==null||typeof t=="boolean"?oe(Lt):F(t)?oe(We,null,t.slice()):typeof t=="object"?ot(t):oe(Pr,null,String(t))}function ot(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qt(t)}function zs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Oa(e)?e._ctx=_e:s===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),r&64?(n=16,e=[st(e)]):n=8);t.children=e,t.shapeFlag|=n}function Cu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ds([e.class,r.class]));else if(s==="style")e.style=Ls([e.style,r.style]);else if(br(s)){const i=e[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function xe(t,e,n,r=null){Oe(t,e,7,[n,r])}const Au=Ca();let Pu=0;function Ou(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Au,i={uid:Pu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new rl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Na(r,s),emitsOptions:_a(r,s),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ml.bind(null,i),t.ce&&t.ce(i),i}let fe=null,fr,ms;{const t=Wo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};fr=e("__VUE_INSTANCE_SETTERS__",n=>fe=n),ms=e("__VUE_SSR_SETTERS__",n=>Or=n)}const Ln=t=>{const e=fe;return fr(t),t.scope.on(),()=>{t.scope.off(),fr(e)}},ki=()=>{fe&&fe.scope.off(),fr(null)};function $a(t){return t.vnode.shapeFlag&4}let Or=!1;function ku(t,e=!1){e&&ms(e);const{props:n,children:r}=t.vnode,s=$a(t);hu(t,n,s,e),mu(t,r);const i=s?Nu(t,e):void 0;return e&&ms(!1),i}function Nu(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,iu);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?Du(t):null,i=Ln(t);vt();const o=pt(r,t,0,[t.props,s]);if(yt(),i(),$o(o)){if(o.then(ki,ki),e)return o.then(c=>{Ni(t,c,e)}).catch(c=>{Rr(c,t,0)});t.asyncDep=o}else Ni(t,o,e)}else Ha(t,e)}function Ni(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ne(e)&&(t.setupState=fa(e)),Ha(t,n)}let Li;function Ha(t,e,n){const r=t.type;if(!t.render){if(!e&&Li&&!r.render){const s=r.template||Ws(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:a}=r,l=ae(ae({isCustomElement:i,delimiters:c},o),a);r.render=Li(s,l)}}t.render=r.render||we}{const s=Ln(t);vt();try{ou(t)}finally{yt(),s()}}}const Lu={get(t,e){return ve(t,"get",""),t[e]}};function Du(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Lu),slots:t.slots,emit:t.emit,expose:e}}function kr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(fa(Tl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gn)return gn[n](t)},has(e,n){return n in e||n in gn}}))}function Mu(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function xu(t){return $(t)&&"__vccOpts"in t}const Ce=(t,e)=>Rl(t,e,Or);function ja(t,e,n){const r=arguments.length;return r===2?ne(e)&&!F(e)?gs(e)?oe(t,null,[e]):oe(t,e):oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&gs(n)&&(n=[n]),oe(t,e,n))}const Uu="3.4.25";/**
* @vue/runtime-dom v3.4.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Fu="http://www.w3.org/2000/svg",Bu="http://www.w3.org/1998/Math/MathML",at=typeof document<"u"?document:null,Di=at&&at.createElement("template"),$u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?at.createElementNS(Fu,t):e==="mathml"?at.createElementNS(Bu,t):at.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>at.createTextNode(t),createComment:t=>at.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>at.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Di.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=Di.content;if(r==="svg"||r==="mathml"){const a=c.firstChild;for(;a.firstChild;)c.appendChild(a.firstChild);c.removeChild(a)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hu=Symbol("_vtc");function ju(t,e,n){const r=t[Hu];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Mi=Symbol("_vod"),Vu=Symbol("_vsh"),Wu=Symbol(""),Ku=/(^|;)\s*display\s*:/;function zu(t,e,n){const r=t.style,s=ce(n);let i=!1;if(n&&!s){if(e)if(ce(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&rr(r,c,"")}else for(const o in e)n[o]==null&&rr(r,o,"");for(const o in n)o==="display"&&(i=!0),rr(r,o,n[o])}else if(s){if(e!==n){const o=r[Wu];o&&(n+=";"+o),r.cssText=n,i=Ku.test(n)}}else e&&t.removeAttribute("style");Mi in t&&(t[Mi]=i?r.display:"",t[Vu]&&(r.display="none"))}const xi=/\s*!important$/;function rr(t,e,n){if(F(n))n.forEach(r=>rr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Gu(t,e);xi.test(n)?t.setProperty(nn(r),n.replace(xi,""),"important"):t[r]=n}}const Ui=["Webkit","Moz","ms"],Kr={};function Gu(t,e){const n=Kr[e];if(n)return n;let r=He(e);if(r!=="filter"&&r in t)return Kr[e]=r;r=Ir(r);for(let s=0;s<Ui.length;s++){const i=Ui[s]+r;if(i in t)return Kr[e]=i}return e}const Fi="http://www.w3.org/1999/xlink";function qu(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Fi,e.slice(6,e.length)):t.setAttributeNS(Fi,e,n);else{const i=nl(e);n==null||i&&!Ko(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Ju(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const l=c==="OPTION"?t.getAttribute("value")||"":t.value,f=n??"";(l!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Ko(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function jt(t,e,n,r){t.addEventListener(e,n,r)}function Yu(t,e,n,r){t.removeEventListener(e,n,r)}const Bi=Symbol("_vei");function Xu(t,e,n,r,s=null){const i=t[Bi]||(t[Bi]={}),o=i[e];if(r&&o)o.value=r;else{const[c,a]=Qu(e);if(r){const l=i[e]=tf(r,s);jt(t,c,l,a)}else o&&(Yu(t,c,o,a),i[e]=void 0)}}const $i=/(?:Once|Passive|Capture)$/;function Qu(t){let e;if($i.test(t)){e={};let r;for(;r=t.match($i);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):nn(t.slice(2)),e]}let zr=0;const Zu=Promise.resolve(),ef=()=>zr||(Zu.then(()=>zr=0),zr=Date.now());function tf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(nf(r,n.value),e,5,[r])};return n.value=t,n.attached=ef(),n}function nf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Hi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,rf=(t,e,n,r,s,i,o,c,a)=>{const l=s==="svg";e==="class"?ju(t,r,l):e==="style"?zu(t,n,r):br(e)?Os(e)||Xu(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sf(t,e,r,l))?Ju(t,e,r,i,o,c,a):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),qu(t,e,r,l))};function sf(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hi(e)&&$(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hi(e)&&ce(n)?!1:e in t}const ji=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Yn(e,n):e};function of(t){t.target.composing=!0}function Vi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gr=Symbol("_assign"),hm={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Gr]=ji(s);const i=r||s.props&&s.props.type==="number";jt(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ss(c)),t[Gr](c)}),n&&jt(t,"change",()=>{t.value=t.value.trim()}),e||(jt(t,"compositionstart",of),jt(t,"compositionend",Vi),jt(t,"change",Vi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Gr]=ji(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?ss(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},af=ae({patchProp:rf},$u);let Wi;function cf(){return Wi||(Wi=vu(af))}const lf=(...t)=>{const e=cf().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=ff(r);if(!s)return;const i=e._component;!$(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,uf(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function uf(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ff(t){return ce(t)?document.querySelector(t):t}var Ki={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},df=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],a=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Wa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,a=s+2<t.length,l=a?t[s+2]:0,f=i>>2,h=(i&3)<<4|c>>4;let p=(c&15)<<2|l>>6,_=l&63;a||(_=64,o||(p=64)),r.push(n[f],n[h],n[p],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Va(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):df(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||h==null)throw new hf;const p=i<<2|c>>4;if(r.push(p),l!==64){const _=c<<4&240|l>>2;if(r.push(_),h!==64){const R=l<<6&192|h;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class hf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pf=function(t){const e=Va(t);return Wa.encodeByteArray(e,!0)},dr=function(t){return pf(t).replace(/\./g,"")},Ka=function(t){try{return Wa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf=()=>gf().__FIREBASE_DEFAULTS__,_f=()=>{if(typeof process>"u"||typeof Ki>"u")return;const t=Ki.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ka(t[1]);return e&&JSON.parse(e)},Gs=()=>{try{return mf()||_f()||vf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},za=t=>{var e,n;return(n=(e=Gs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},pm=t=>{const e=za(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ga=()=>{var t;return(t=Gs())===null||t===void 0?void 0:t.config},qa=t=>{var e;return(e=Gs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[dr(JSON.stringify(n)),dr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function Ef(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function If(){const t=de();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sf(){try{return typeof indexedDB=="object"}catch{return!1}}function Tf(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="FirebaseError";class bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Rf,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dn.prototype.create)}}class Dn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Cf(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new bt(s,c,r)}}function Cf(t,e){return t.replace(Af,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Af=/\{\$([^}]+)}/g;function Pf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(zi(i)&&zi(o)){if(!hr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function zi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Of(t,e){const n=new kf(t,e);return n.subscribe.bind(n)}class kf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Nf(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qr),s.error===void 0&&(s.error=qr),s.complete===void 0&&(s.complete=qr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Nf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(t){return t&&t._delegate?t._delegate:t}class Zt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new yf;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Mf(e))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ct){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ct){return this.instances.has(e)}getOptions(e=Ct){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Df(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ct){return this.component?this.component.multipleInstances?e:Ct:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Df(t){return t===Ct?void 0:t}function Mf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Lf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Uf={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},Ff=X.INFO,Bf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},$f=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ja{constructor(e){this.name=e,this._logLevel=Ff,this._logHandler=$f,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Uf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Hf=(t,e)=>e.some(n=>t instanceof n);let Gi,qi;function jf(){return Gi||(Gi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vf(){return qi||(qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ya=new WeakMap,_s=new WeakMap,Xa=new WeakMap,Jr=new WeakMap,qs=new WeakMap;function Wf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ya.set(n,t)}).catch(()=>{}),qs.set(e,t),e}function Kf(t){if(_s.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_s.set(t,e)}let vs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _s.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Xa.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zf(t){vs=t(vs)}function Gf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Yr(this),e,...n);return Xa.set(r,e.sort?e.sort():[e]),gt(r)}:Vf().includes(t)?function(...e){return t.apply(Yr(this),e),gt(Ya.get(this))}:function(...e){return gt(t.apply(Yr(this),e))}}function qf(t){return typeof t=="function"?Gf(t):(t instanceof IDBTransaction&&Kf(t),Hf(t,jf())?new Proxy(t,vs):t)}function gt(t){if(t instanceof IDBRequest)return Wf(t);if(Jr.has(t))return Jr.get(t);const e=qf(t);return e!==t&&(Jr.set(t,e),qs.set(e,t)),e}const Yr=t=>qs.get(t);function Jf(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=gt(o);return r&&o.addEventListener("upgradeneeded",a=>{r(gt(o.result),a.oldVersion,a.newVersion,gt(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{i&&a.addEventListener("close",()=>i()),s&&a.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const Yf=["get","getKey","getAll","getAllKeys","count"],Xf=["put","add","delete","clear"],Xr=new Map;function Ji(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xr.get(e))return Xr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Yf.includes(n)))return;const i=async function(o,...c){const a=this.transaction(o,s?"readwrite":"readonly");let l=a.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&a.done]))[0]};return Xr.set(e,i),i}zf(t=>({...t,get:(e,n,r)=>Ji(e,n)||t.get(e,n,r),has:(e,n)=>!!Ji(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Zf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Zf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ys="@firebase/app",Yi="0.10.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new Ja("@firebase/app"),ed="@firebase/app-compat",td="@firebase/analytics-compat",nd="@firebase/analytics",rd="@firebase/app-check-compat",sd="@firebase/app-check",id="@firebase/auth",od="@firebase/auth-compat",ad="@firebase/database",cd="@firebase/database-compat",ld="@firebase/functions",ud="@firebase/functions-compat",fd="@firebase/installations",dd="@firebase/installations-compat",hd="@firebase/messaging",pd="@firebase/messaging-compat",gd="@firebase/performance",md="@firebase/performance-compat",_d="@firebase/remote-config",vd="@firebase/remote-config-compat",yd="@firebase/storage",bd="@firebase/storage-compat",Ed="@firebase/firestore",wd="@firebase/firestore-compat",Id="firebase",Sd="10.11.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",Td={[ys]:"fire-core",[ed]:"fire-core-compat",[nd]:"fire-analytics",[td]:"fire-analytics-compat",[sd]:"fire-app-check",[rd]:"fire-app-check-compat",[id]:"fire-auth",[od]:"fire-auth-compat",[ad]:"fire-rtdb",[cd]:"fire-rtdb-compat",[ld]:"fire-fn",[ud]:"fire-fn-compat",[fd]:"fire-iid",[dd]:"fire-iid-compat",[hd]:"fire-fcm",[pd]:"fire-fcm-compat",[gd]:"fire-perf",[md]:"fire-perf-compat",[_d]:"fire-rc",[vd]:"fire-rc-compat",[yd]:"fire-gcs",[bd]:"fire-gcs-compat",[Ed]:"fire-fst",[wd]:"fire-fst-compat","fire-js":"fire-js",[Id]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=new Map,Rd=new Map,Es=new Map;function Xi(t,e){try{t.container.addComponent(e)}catch(n){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Cn(t){const e=t.name;if(Es.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;Es.set(e,t);for(const n of pr.values())Xi(n,t);for(const n of Rd.values())Xi(n,t);return!0}function Qa(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pe(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},mt=new Dn("app","Firebase",Cd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=Sd;function Za(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw mt.create("bad-app-name",{appName:String(s)});if(n||(n=Ga()),!n)throw mt.create("no-options");const i=pr.get(s);if(i){if(hr(n,i.options)&&hr(r,i.config))return i;throw mt.create("duplicate-app",{appName:s})}const o=new xf(s);for(const a of Es.values())o.addComponent(a);const c=new Ad(n,r,o);return pr.set(s,c),c}function Pd(t=bs){const e=pr.get(t);if(!e&&t===bs&&Ga())return Za();if(!e)throw mt.create("no-app",{appName:t});return e}function qt(t,e,n){var r;let s=(r=Td[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(c.join(" "));return}Cn(new Zt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="firebase-heartbeat-database",kd=1,An="firebase-heartbeat-store";let Qr=null;function ec(){return Qr||(Qr=Jf(Od,kd,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(An)}catch(n){console.warn(n)}}}}).catch(t=>{throw mt.create("idb-open",{originalErrorMessage:t.message})})),Qr}async function Nd(t){try{const n=(await ec()).transaction(An),r=await n.objectStore(An).get(tc(t));return await n.done,r}catch(e){if(e instanceof bt)Dt.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(n.message)}}}async function Qi(t,e){try{const r=(await ec()).transaction(An,"readwrite");await r.objectStore(An).put(e,tc(t)),await r.done}catch(n){if(n instanceof bt)Dt.warn(n.message);else{const r=mt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(r.message)}}}function tc(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=1024,Dd=30*24*60*60*1e3;class Md{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ud(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zi();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Dd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zi(),{heartbeatsToSend:r,unsentEntries:s}=xd(this._heartbeatsCache.heartbeats),i=dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Zi(){return new Date().toISOString().substring(0,10)}function xd(t,e=Ld){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ud{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sf()?Tf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Nd(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eo(t){return dr(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){Cn(new Zt("platform-logger",e=>new Qf(e),"PRIVATE")),Cn(new Zt("heartbeat",e=>new Md(e),"PRIVATE")),qt(ys,Yi,t),qt(ys,Yi,"esm2017"),qt("fire-js","")}Fd("");function Js(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function nc(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bd=nc,rc=new Dn("auth","Firebase",nc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new Ja("@firebase/auth");function $d(t,...e){gr.logLevel<=X.WARN&&gr.warn(`Auth (${xn}): ${t}`,...e)}function sr(t,...e){gr.logLevel<=X.ERROR&&gr.error(`Auth (${xn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(t,...e){throw Xs(t,...e)}function ke(t,...e){return Xs(t,...e)}function Ys(t,e,n){const r=Object.assign(Object.assign({},Bd()),{[e]:n});return new Dn("auth","Firebase",r).create(e,{appName:t.name})}function Je(t){return Ys(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hd(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ie(t,"argument-error"),Ys(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xs(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rc.create(t,...e)}function M(t,e,...n){if(!t)throw Xs(e,...n)}function Ke(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sr(e),new Error(e)}function Ye(t,e){t||Ke(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function jd(){return to()==="http:"||to()==="https:"}function to(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(jd()||Ef()||"connection"in navigator)?navigator.onLine:!0}function Wd(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ye(n>e,"Short delay should be less than long delay!"),this.isMobile=bf()||wf()}get(){return Vd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(t,e){Ye(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd=new Un(3e4,6e4);function Et(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function wt(t,e,n,r,s={}){return ic(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Mn(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),sc.fetch()(oc(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},i))})}async function ic(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Kd),e);try{const s=new qd(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw qn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[a,l]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw qn(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw qn(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw qn(t,"user-disabled",o);const f=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ys(t,f,l);Ie(t,f)}}catch(s){if(s instanceof bt)throw s;Ie(t,"network-request-failed",{message:String(s)})}}async function Fn(t,e,n,r,s={}){const i=await wt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ie(t,"multi-factor-auth-required",{_serverResponse:i}),i}function oc(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Qs(t.config,s):`${t.config.apiScheme}://${s}`}function Gd(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class qd{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ke(this.auth,"network-request-failed")),zd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=ke(t,e,r);return s.customData._tokenResponse=n,s}function no(t){return t!==void 0&&t.enterprise!==void 0}class Jd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Gd(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Yd(t,e){return wt(t,"GET","/v2/recaptchaConfig",Et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xd(t,e){return wt(t,"POST","/v1/accounts:delete",e)}async function ac(t,e){return wt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qd(t,e=!1){const n=Qe(t),r=await n.getIdToken(e),s=Zs(r);M(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:yn(Zr(s.auth_time)),issuedAtTime:yn(Zr(s.iat)),expirationTime:yn(Zr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zr(t){return Number(t)*1e3}function Zs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sr("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ka(n);return s?JSON.parse(s):(sr("Failed to decode base64 JWT payload"),null)}catch(s){return sr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ro(t){const e=Zs(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bt&&Zd(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Zd({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yn(this.lastLoginAt),this.creationTime=yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Pn(t,ac(n,{idToken:r}));M(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?cc(i.providerUserInfo):[],c=nh(t.providerData,o),a=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=a?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Is(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function th(t){const e=Qe(t);await mr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nh(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function cc(t){return t.map(e=>{var{providerId:n}=e,r=Js(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rh(t,e){const n=await ic(t,{},async()=>{const r=Mn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=oc(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",sc.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sh(t,e){return wt(t,"POST","/v2/accounts:revokeToken",Et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ro(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=ro(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rh(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Jt;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jt,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Js(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Is(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Pn(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qd(this,e)}reload(){return th(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(Je(this.auth));const e=await this.getIdToken();return await Pn(this,Xd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,a,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,H=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:V,isAnonymous:te,providerData:U,stsTokenManager:re}=n;M(x&&re,e,"internal-error");const pe=Jt.fromJSON(this.name,re);M(typeof x=="string",e,"internal-error"),nt(h,e.name),nt(p,e.name),M(typeof V=="boolean",e,"internal-error"),M(typeof te=="boolean",e,"internal-error"),nt(_,e.name),nt(R,e.name),nt(L,e.name),nt(H,e.name),nt(O,e.name),nt(k,e.name);const Se=new ze({uid:x,auth:e,email:p,emailVerified:V,displayName:h,isAnonymous:te,photoURL:R,phoneNumber:_,tenantId:L,stsTokenManager:pe,createdAt:O,lastLoginAt:k});return U&&Array.isArray(U)&&(Se.providerData=U.map(Ee=>Object.assign({},Ee))),H&&(Se._redirectEventId=H),Se}static async _fromIdTokenResponse(e,n,r=!1){const s=new Jt;s.updateFromServerResponse(n);const i=new ze({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?cc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Jt;c.updateFromIdToken(r);const a=new ze({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Is(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(a,l),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map;function Ge(t){Ye(t instanceof Function,"Expected a class definition");let e=so.get(t);return e?(Ye(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,so.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lc.type="NONE";const io=lc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(t,e,n){return`firebase:${t}:${e}:${n}`}class Yt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yt(Ge(io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(io);const o=ir(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const f=await l._get(o);if(f){const h=ze._fromJSON(e,f);l!==i&&(c=h),i=l;break}}catch{}const a=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!a.length?new Yt(i,e,r):(i=a[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Yt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pc(e))return"Blackberry";if(gc(e))return"Webos";if(ei(e))return"Safari";if((e.includes("chrome/")||fc(e))&&!e.includes("edge/"))return"Chrome";if(hc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uc(t=de()){return/firefox\//i.test(t)}function ei(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fc(t=de()){return/crios\//i.test(t)}function dc(t=de()){return/iemobile/i.test(t)}function hc(t=de()){return/android/i.test(t)}function pc(t=de()){return/blackberry/i.test(t)}function gc(t=de()){return/webos/i.test(t)}function Nr(t=de()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ih(t=de()){var e;return Nr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oh(){return If()&&document.documentMode===10}function mc(t=de()){return Nr(t)||hc(t)||gc(t)||pc(t)||/windows phone/i.test(t)||dc(t)}function ah(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e=[]){let n;switch(t){case"Browser":n=oo(de());break;case"Worker":n=`${oo(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const a=e(i);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(t,e={}){return wt(t,"GET","/v2/passwordPolicy",Et(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh=6;class fh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:uh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(s=a.containsLowercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsUppercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ao(this),this.idTokenSubscription=new ao(this),this.beforeStateQueue=new ch(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ac(this,{idToken:e}),r=await ze._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(s=a.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(Je(this));const n=e?Qe(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(Je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(Je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lh(this),n=new fh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await Yt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,s);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&$d(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function It(t){return Qe(t)}class ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=Of(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hh(t){Lr=t}function vc(t){return Lr.loadJS(t)}function ph(){return Lr.recaptchaEnterpriseScript}function gh(){return Lr.gapiScript}function mh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const _h="recaptcha-enterprise",vh="NO_RECAPTCHA";class yh{constructor(e){this.type=_h,this.auth=It(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{Yd(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new Jd(a);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(a=>{c(a)})})}function s(i,o,c){const a=window.grecaptcha;no(a)?a.enterprise.ready(()=>{a.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(vh)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&no(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=ph();a.length!==0&&(a+=c),vc(a).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function co(t,e,n,r=!1){const s=new yh(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ss(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await co(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await co(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(t,e){const n=Qa(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(hr(i,e??{}))return s;Ie(s,"already-initialized")}return n.initialize({options:e})}function Eh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wh(t,e,n){const r=It(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=yc(e),{host:o,port:c}=Ih(e),a=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Sh()}function yc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ih(t){const e=yc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lo(o)}}}function lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Sh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,n){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}}async function Th(t,e){return wt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rh(t,e){return Fn(t,"POST","/v1/accounts:signInWithPassword",Et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",Et(t,e))}async function Ah(t,e){return Fn(t,"POST","/v1/accounts:signInWithEmailLink",Et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ti{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new On(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new On(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ss(e,n,"signInWithPassword",Rh);case"emailLink":return Ch(e,{email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ss(e,r,"signUpPassword",Th);case"emailLink":return Ah(e,{idToken:n,email:this._email,oobCode:this._password});default:Ie(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return Fn(t,"POST","/v1/accounts:signInWithIdp",Et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="http://localhost";class Mt extends ti{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Mt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ie("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Js(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Mt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xt(e,n)}buildRequest(){const e={requestUri:Ph,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function kh(t){const e=fn(dn(t)).link,n=e?fn(dn(e)).deep_link_id:null,r=fn(dn(t)).deep_link_id;return(r?fn(dn(r)).link:null)||r||n||e||t}class ni{constructor(e){var n,r,s,i,o,c;const a=fn(dn(e)),l=(n=a.apiKey)!==null&&n!==void 0?n:null,f=(r=a.oobCode)!==null&&r!==void 0?r:null,h=Oh((s=a.mode)!==null&&s!==void 0?s:null);M(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=a.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=a.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=kh(e);try{return new ni(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(){this.providerId=rn.PROVIDER_ID}static credential(e,n){return On._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ni.parseLink(n);return M(r,"argument-error"),On._fromEmailAndCode(e,r.code,r.tenantId)}}rn.PROVIDER_ID="password";rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends ri{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Bn{constructor(){super("facebook.com")}static credential(e){return Mt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lt.credential(e.oauthAccessToken)}catch{return null}}}lt.FACEBOOK_SIGN_IN_METHOD="facebook.com";lt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut extends Bn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Mt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ut.credential(n,r)}catch{return null}}}ut.GOOGLE_SIGN_IN_METHOD="google.com";ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Bn{constructor(){super("github.com")}static credential(e){return Mt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.GITHUB_SIGN_IN_METHOD="github.com";ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt extends Bn{constructor(){super("twitter.com")}static credential(e,n){return Mt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dt.credential(n,r)}catch{return null}}}dt.TWITTER_SIGN_IN_METHOD="twitter.com";dt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t,e){return Fn(t,"POST","/v1/accounts:signUp",Et(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ze._fromIdTokenResponse(e,r,s),o=uo(r);return new xt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uo(r);return new xt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r extends bt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_r.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _r(e,n,r,s)}}function bc(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_r._fromErrorAndOperation(t,i,e,r):i})}async function Lh(t,e,n=!1){const r=await Pn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e,n=!1){const{auth:r}=t;if(Pe(r.app))return Promise.reject(Je(r));const s="reauthenticate";try{const i=await Pn(t,bc(r,s,e,t),n);M(i.idToken,r,"internal-error");const o=Zs(i.idToken);M(o,r,"internal-error");const{sub:c}=o;return M(t.uid===c,r,"user-mismatch"),xt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ie(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t,e,n=!1){if(Pe(t.app))return Promise.reject(Je(t));const r="signIn",s=await bc(t,r,e),i=await xt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Mh(t,e){return Ec(It(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wc(t){const e=It(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function mm(t,e,n){if(Pe(t.app))return Promise.reject(Je(t));const r=It(t),o=await Ss(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Nh).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&wc(t),a}),c=await xt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function _m(t,e,n){return Pe(t.app)?Promise.reject(Je(t)):Mh(Qe(t),rn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&wc(t),r})}function xh(t,e,n,r){return Qe(t).onIdTokenChanged(e,n,r)}function Uh(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function Fh(t,e,n,r){return Qe(t).onAuthStateChanged(e,n,r)}function Bh(t){return Qe(t).signOut()}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(){const t=de();return ei(t)||Nr(t)}const Hh=1e3,jh=10;class Sc extends Ic{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=$h()&&ah(),this.fallbackToPolling=mc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,a)=>{this.notifyListeners(o,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jh):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Hh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sc.type="LOCAL";const Vh=Sc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Ic{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tc.type="SESSION";const Rc=Tc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Dr(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),a=await Wh(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,a)=>{const l=si("",20);s.port1.start();const f=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(p.data.response);break;default:clearTimeout(f),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function zh(t){$e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(){return typeof $e().WorkerGlobalScope<"u"&&typeof $e().importScripts=="function"}async function Gh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qh(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Jh(){return Cc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac="firebaseLocalStorageDb",Yh=1,yr="firebaseLocalStorage",Pc="fbase_key";class $n{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mr(t,e){return t.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function Xh(){const t=indexedDB.deleteDatabase(Ac);return new $n(t).toPromise()}function Ts(){const t=indexedDB.open(Ac,Yh);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yr,{keyPath:Pc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yr)?e(r):(r.close(),await Xh(),e(await Ts()))})})}async function fo(t,e,n){const r=Mr(t,!0).put({[Pc]:e,value:n});return new $n(r).toPromise()}async function Qh(t,e){const n=Mr(t,!1).get(e),r=await new $n(n).toPromise();return r===void 0?null:r.value}function ho(t,e){const n=Mr(t,!0).delete(e);return new $n(n).toPromise()}const Zh=800,ep=3;class Oc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ts(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ep)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dr._getInstance(Jh()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Gh(),!this.activeServiceWorker)return;this.sender=new Kh(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ts();return await fo(e,vr,"1"),await ho(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qh(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ho(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Mr(s,!1).getAll();return new $n(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Oc.type="LOCAL";const tp=Oc;new Un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kc(t,e){return e?Ge(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends ti{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function np(t){return Ec(t.auth,new ii(t),t.bypassAuthState)}function rp(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Dh(n,new ii(t),t.bypassAuthState)}async function sp(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),Lh(n,new ii(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return np;case"linkViaPopup":case"linkViaRedirect":return sp;case"reauthViaPopup":case"reauthViaRedirect":return rp;default:Ie(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip=new Un(2e3,1e4);async function vm(t,e,n){if(Pe(t.app))return Promise.reject(ke(t,"operation-not-supported-in-this-environment"));const r=It(t);Hd(t,e,ri);const s=kc(r,n);return new Ot(r,"signInViaPopup",e,s).executeNotNull()}class Ot extends Nc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const e=si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ke(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ke(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ke(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ip.get())};e()}}Ot.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op="pendingRedirect",or=new Map;class ap extends Nc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=or.get(this.auth._key());if(!e){try{const r=await cp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}or.set(this.auth._key(),e)}return this.bypassAuthState||or.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cp(t,e){const n=fp(e),r=up(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lp(t,e){or.set(t._key(),e)}function up(t){return Ge(t._redirectPersistence)}function fp(t){return ir(op,t.config.apiKey,t.name)}async function dp(t,e,n=!1){if(Pe(t.app))return Promise.reject(Je(t));const r=It(t),s=kc(r,e),o=await new ap(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=10*60*1e3;class pp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ke(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hp&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mp(t,e={}){return wt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vp=/^https?/;async function yp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mp(t);for(const n of e)try{if(bp(n))return}catch{}Ie(t,"unauthorized-domain")}function bp(t){const e=ws(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vp.test(n))return!1;if(_p.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=new Un(3e4,6e4);function go(){const t=$e().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wp(t){return new Promise((e,n)=>{var r,s,i;function o(){go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{go(),n(ke(t,"network-request-failed"))},timeout:Ep.get()})}if(!((s=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=$e().gapi)===null||i===void 0)&&i.load)o();else{const c=mh("iframefcb");return $e()[c]=()=>{gapi.load?o():n(ke(t,"network-request-failed"))},vc(`${gh()}?onload=${c}`).catch(a=>n(a))}}).catch(e=>{throw ar=null,e})}let ar=null;function Ip(t){return ar=ar||wp(t),ar}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new Un(5e3,15e3),Tp="__/auth/iframe",Rp="emulator/auth/iframe",Cp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ap=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Pp(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Qs(e,Rp):`https://${t.config.authDomain}/${Tp}`,r={apiKey:e.apiKey,appName:t.name,v:xn},s=Ap.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Mn(r).slice(1)}`}async function Op(t){const e=await Ip(t),n=$e().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Pp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ke(t,"network-request-failed"),c=$e().setTimeout(()=>{i(o)},Sp.get());function a(){$e().clearTimeout(c),s(r)}r.ping(a).then(a,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Np=500,Lp=600,Dp="_blank",Mp="http://localhost";class mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xp(t,e,n,r=Np,s=Lp){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const a=Object.assign(Object.assign({},kp),{width:r.toString(),height:s.toString(),top:i,left:o}),l=de().toLowerCase();n&&(c=fc(l)?Dp:n),uc(l)&&(e=e||Mp,a.scrollbars="yes");const f=Object.entries(a).reduce((p,[_,R])=>`${p}${_}=${R},`,"");if(ih(l)&&c!=="_self")return Up(e||"",c),new mo(null);const h=window.open(e||"",c,f);M(h,t,"popup-blocked");try{h.focus()}catch{}return new mo(h)}function Up(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="__/auth/handler",Bp="emulator/auth/handler",$p=encodeURIComponent("fac");async function _o(t,e,n,r,s,i){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xn,eventId:s};if(e instanceof ri){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries(i||{}))o[f]=h}if(e instanceof Bn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const a=await t._getAppCheckToken(),l=a?`#${$p}=${encodeURIComponent(a)}`:"";return`${Hp(t)}?${Mn(c).slice(1)}${l}`}function Hp({config:t}){return t.emulator?Qs(t,Bp):`https://${t.authDomain}/${Fp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="webStorageSupport";class jp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rc,this._completeRedirectFn=dp,this._overrideRedirectResult=lp}async _openPopup(e,n,r,s){var i;Ye((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _o(e,n,r,ws(),s);return xp(e,o,si())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _o(e,n,r,ws(),s);return zh(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Ye(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Op(e),r=new pp(e);return n.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(es,{type:es},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[es];o!==void 0&&n(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return mc()||ei()||Nr()}}const Vp=jp;var vo="@firebase/auth",yo="1.7.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function zp(t){Cn(new Zt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_c(t)},l=new dh(r,s,i,a);return Eh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Cn(new Zt("auth-internal",e=>{const n=It(e.getProvider("auth").getImmediate());return(r=>new Wp(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qt(vo,yo,Kp(t)),qt(vo,yo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=5*60,qp=qa("authIdTokenMaxAge")||Gp;let bo=null;const Jp=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qp)return;const s=n==null?void 0:n.token;bo!==s&&(bo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Eo(t=Pd()){const e=Qa(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bh(t,{popupRedirectResolver:Vp,persistence:[tp,Vh,Rc]}),r=qa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Jp(i.toString());Uh(n,o,()=>o(n.currentUser)),xh(n,c=>o(c))}}const s=za("auth");return s&&wh(n,`http://${s}`),n}function Yp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=ke("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Yp().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});zp("Browser");/*!
  * vue-router v4.3.2
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Vt=typeof document<"u";function Xp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const q=Object.assign;function ts(t,e){const n={};for(const r in e){const s=e[r];n[r]=Ne(s)?s.map(t):t(s)}return n}const bn=()=>{},Ne=Array.isArray,Dc=/#/g,Qp=/&/g,Zp=/\//g,eg=/=/g,tg=/\?/g,Mc=/\+/g,ng=/%5B/g,rg=/%5D/g,xc=/%5E/g,sg=/%60/g,Uc=/%7B/g,ig=/%7C/g,Fc=/%7D/g,og=/%20/g;function oi(t){return encodeURI(""+t).replace(ig,"|").replace(ng,"[").replace(rg,"]")}function ag(t){return oi(t).replace(Uc,"{").replace(Fc,"}").replace(xc,"^")}function Rs(t){return oi(t).replace(Mc,"%2B").replace(og,"+").replace(Dc,"%23").replace(Qp,"%26").replace(sg,"`").replace(Uc,"{").replace(Fc,"}").replace(xc,"^")}function cg(t){return Rs(t).replace(eg,"%3D")}function lg(t){return oi(t).replace(Dc,"%23").replace(tg,"%3F")}function ug(t){return t==null?"":lg(t).replace(Zp,"%2F")}function kn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fg=/\/$/,dg=t=>t.replace(fg,"");function ns(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let a=e.indexOf("?");return c<a&&c>=0&&(a=-1),a>-1&&(r=e.slice(0,a),i=e.slice(a+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=mg(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:kn(o)}}function hg(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function wo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function pg(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&en(e.matched[r],n.matched[s])&&Bc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function en(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Bc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!gg(t[n],e[n]))return!1;return!0}function gg(t,e){return Ne(t)?Io(t,e):Ne(e)?Io(e,t):t===e}function Io(t,e){return Ne(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function mg(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Nn;(function(t){t.pop="pop",t.push="push"})(Nn||(Nn={}));var En;(function(t){t.back="back",t.forward="forward",t.unknown=""})(En||(En={}));function _g(t){if(!t)if(Vt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),dg(t)}const vg=/^[^#]+#/;function yg(t,e){return t.replace(vg,"#")+e}function bg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const xr=()=>({left:window.scrollX,top:window.scrollY});function Eg(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bg(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function So(t,e){return(history.state?history.state.position-e:-1)+t}const Cs=new Map;function wg(t,e){Cs.set(t,e)}function Ig(t){const e=Cs.get(t);return Cs.delete(t),e}let Sg=()=>location.protocol+"//"+location.host;function $c(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(c);return a[0]!=="/"&&(a="/"+a),wo(a,"")}return wo(n,t)+r+s}function Tg(t,e,n,r){let s=[],i=[],o=null;const c=({state:p})=>{const _=$c(t,location),R=n.value,L=e.value;let H=0;if(p){if(n.value=_,e.value=p,o&&o===R){o=null;return}H=L?p.position-L.position:0}else r(_);s.forEach(O=>{O(n.value,R,{delta:H,type:Nn.pop,direction:H?H>0?En.forward:En.back:En.unknown})})};function a(){o=n.value}function l(p){s.push(p);const _=()=>{const R=s.indexOf(p);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(q({},p.state,{scroll:xr()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:a,listen:l,destroy:h}}function To(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?xr():null}}function Rg(t){const{history:e,location:n}=window,r={value:$c(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(a,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+a:Sg()+t+a;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(a,l){const f=q({},e.state,To(s.value.back,a,s.value.forward,!0),l,{position:s.value.position});i(a,f,!0),r.value=a}function c(a,l){const f=q({},s.value,e.state,{forward:a,scroll:xr()});i(f.current,f,!0);const h=q({},To(r.value,a,null),{position:f.position+1},l);i(a,h,!1),r.value=a}return{location:r,state:s,push:c,replace:o}}function Cg(t){t=_g(t);const e=Rg(t),n=Tg(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=q({location:"",base:t,go:r,createHref:yg.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Ag(t){return typeof t=="string"||t&&typeof t=="object"}function Hc(t){return typeof t=="string"||typeof t=="symbol"}const rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jc=Symbol("");var Ro;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ro||(Ro={}));function tn(t,e){return q(new Error,{type:t,[jc]:!0},e)}function Ve(t,e){return t instanceof Error&&jc in t&&(e==null||!!(t.type&e))}const Co="[^/]+?",Pg={sensitive:!1,strict:!1,start:!0,end:!0},Og=/[.+*?^${}()[\]/\\]/g;function kg(t,e){const n=q({},Pg,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(s+="/"),s+=p.value.replace(Og,"\\$&"),_+=40;else if(p.type===1){const{value:R,repeatable:L,optional:H,regexp:O}=p;i.push({name:R,repeatable:L,optional:H});const k=O||Co;if(k!==Co){_+=10;try{new RegExp(`(${k})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${R}" (${k}): `+V.message)}}let x=L?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(x=H&&l.length<2?`(?:/${x})`:"/"+x),H&&(x+="?"),s+=x,_+=20,H&&(_+=-8),L&&(_+=-20),k===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",R=i[p-1];h[R.name]=_&&R.repeatable?_.split("/"):_}return h}function a(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:L,optional:H}=_,O=R in l?l[R]:"";if(Ne(O)&&!L)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const k=Ne(O)?O.join("/"):O;if(!k)if(H)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${R}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:a}}function Ng(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Ng(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Ao(r))return 1;if(Ao(s))return-1}return s.length-r.length}function Ao(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Dg={type:0,value:""},Mg=/[a-zA-Z0-9_]/;function xg(t){if(!t)return[[]];if(t==="/")return[[Dg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,a,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=a}for(;c<t.length;){if(a=t[c++],a==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:a==="/"?(l&&h(),o()):a===":"?(h(),n=1):p();break;case 4:p(),n=r;break;case 1:a==="("?n=2:Mg.test(a)?p():(h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--);break;case 2:a===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+a:n=3:f+=a;break;case 3:h(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function Ug(t,e,n){const r=kg(xg(t.path),n),s=q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Fg(t,e){const n=[],r=new Map;e=ko({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,h,p){const _=!p,R=Bg(f);R.aliasOf=p&&p.record;const L=ko(e,f),H=[R];if("alias"in f){const x=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of x)H.push(q({},R,{components:p?p.record.components:R.components,path:V,aliasOf:p?p.record:R}))}let O,k;for(const x of H){const{path:V}=x;if(h&&V[0]!=="/"){const te=h.record.path,U=te[te.length-1]==="/"?"":"/";x.path=h.record.path+(V&&U+V)}if(O=Ug(x,h,L),p?p.alias.push(O):(k=k||O,k!==O&&k.alias.push(O),_&&f.name&&!Oo(O)&&o(f.name)),R.children){const te=R.children;for(let U=0;U<te.length;U++)i(te[U],O,p&&p.children[U])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&a(O)}return k?()=>{o(k)}:bn}function o(f){if(Hc(f)){const h=r.get(f);h&&(r.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function a(f){let h=0;for(;h<n.length&&Lg(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Vc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Oo(f)&&r.set(f.record.name,f)}function l(f,h){let p,_={},R,L;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw tn(1,{location:f});L=p.record.name,_=q(Po(h.params,p.keys.filter(k=>!k.optional).concat(p.parent?p.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Po(f.params,p.keys.map(k=>k.name))),R=p.stringify(_)}else if(f.path!=null)R=f.path,p=n.find(k=>k.re.test(R)),p&&(_=p.parse(R),L=p.record.name);else{if(p=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!p)throw tn(1,{location:f,currentLocation:h});L=p.record.name,_=q({},h.params,f.params),R=p.stringify(_)}const H=[];let O=p;for(;O;)H.unshift(O.record),O=O.parent;return{name:L,path:R,params:_,matched:H,meta:Hg(H)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function Po(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$g(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $g(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Oo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Hg(t){return t.reduce((e,n)=>q(e,n.meta),{})}function ko(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Vc(t,e){return e.children.some(n=>n===t||Vc(t,n))}function jg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Mc," "),o=i.indexOf("="),c=kn(o<0?i:i.slice(0,o)),a=o<0?null:kn(i.slice(o+1));if(c in e){let l=e[c];Ne(l)||(l=e[c]=[l]),l.push(a)}else e[c]=a}return e}function No(t){let e="";for(let n in t){const r=t[n];if(n=cg(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ne(r)?r.map(i=>i&&Rs(i)):[r&&Rs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Vg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ne(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Wg=Symbol(""),Lo=Symbol(""),Ur=Symbol(""),Wc=Symbol(""),As=Symbol("");function cn(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ct(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,a)=>{const l=p=>{p===!1?a(tn(4,{from:n,to:e})):p instanceof Error?a(p):Ag(p)?a(tn(2,{from:e,to:p})):(o&&r.enterCallbacks[s]===o&&typeof p=="function"&&o.push(p),c())},f=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(f);t.length<3&&(h=h.then(l)),h.catch(p=>a(p))})}function rs(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let a=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Kg(a)){const f=(a.__vccOpts||a)[e];f&&i.push(ct(f,n,r,o,c,s))}else{let l=a();i.push(()=>l.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${o.path}"`));const h=Xp(f)?f.default:f;o.components[c]=h;const _=(h.__vccOpts||h)[e];return _&&ct(_,n,r,o,c,s)()}))}}return i}function Kg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Do(t){const e=Be(Ur),n=Be(Wc),r=Ce(()=>{const a=zt(t.to);return e.resolve(a)}),s=Ce(()=>{const{matched:a}=r.value,{length:l}=a,f=a[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(en.bind(null,f));if(p>-1)return p;const _=Mo(a[l-2]);return l>1&&Mo(f)===_&&h[h.length-1].path!==_?h.findIndex(en.bind(null,a[l-2])):p}),i=Ce(()=>s.value>-1&&Jg(n.params,r.value.params)),o=Ce(()=>s.value>-1&&s.value===n.matched.length-1&&Bc(n.params,r.value.params));function c(a={}){return qg(a)?e[zt(t.replace)?"replace":"push"](zt(t.to)).catch(bn):Promise.resolve()}return{route:r,href:Ce(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const zg=wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Do,setup(t,{slots:e}){const n=Tr(Do(t)),{options:r}=Be(Ur),s=Ce(()=>({[xo(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[xo(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ja("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Gg=zg;function qg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jg(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Ne(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Mo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xo=(t,e,n)=>t??e??n,Yg=wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Be(As),s=Ce(()=>t.route||r.value),i=Be(Lo,0),o=Ce(()=>{let l=zt(i);const{matched:f}=s.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),c=Ce(()=>s.value.matched[o.value]);er(Lo,Ce(()=>o.value+1)),er(Wg,c),er(As,s);const a=la();return Qn(()=>[a.value,c.value,t.name],([l,f,h],[p,_,R])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!en(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(L=>L(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,h=c.value,p=h&&h.components[f];if(!p)return Uo(n.default,{Component:p,route:l});const _=h.props[f],R=_?_===!0?l.params:typeof _=="function"?_(l):_:null,H=ja(p,q({},R,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(h.instances[f]=null)},ref:a}));return Uo(n.default,{Component:H,route:l})||H}}});function Uo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Xg=Yg;function Qg(t){const e=Fg(t.routes,t),n=t.parseQuery||jg,r=t.stringifyQuery||No,s=t.history,i=cn(),o=cn(),c=cn(),a=Cl(rt);let l=rt;Vt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ts.bind(null,v=>""+v),h=ts.bind(null,ug),p=ts.bind(null,kn);function _(v,C){let S,P;return Hc(v)?(S=e.getRecordMatcher(v),P=C):P=v,e.addRoute(P,S)}function R(v){const C=e.getRecordMatcher(v);C&&e.removeRoute(C)}function L(){return e.getRoutes().map(v=>v.record)}function H(v){return!!e.getRecordMatcher(v)}function O(v,C){if(C=q({},C||a.value),typeof v=="string"){const d=ns(n,v,C.path),g=e.resolve({path:d.path},C),y=s.createHref(d.fullPath);return q(d,g,{params:p(g.params),hash:kn(d.hash),redirectedFrom:void 0,href:y})}let S;if(v.path!=null)S=q({},v,{path:ns(n,v.path,C.path).path});else{const d=q({},v.params);for(const g in d)d[g]==null&&delete d[g];S=q({},v,{params:h(d)}),C.params=h(C.params)}const P=e.resolve(S,C),z=v.hash||"";P.params=f(p(P.params));const Z=hg(r,q({},v,{hash:ag(z),path:P.path})),u=s.createHref(Z);return q({fullPath:Z,hash:z,query:r===No?Vg(v.query):v.query||{}},P,{redirectedFrom:void 0,href:u})}function k(v){return typeof v=="string"?ns(n,v,a.value.path):q({},v)}function x(v,C){if(l!==v)return tn(8,{from:C,to:v})}function V(v){return re(v)}function te(v){return V(q(k(v),{replace:!0}))}function U(v){const C=v.matched[v.matched.length-1];if(C&&C.redirect){const{redirect:S}=C;let P=typeof S=="function"?S(v):S;return typeof P=="string"&&(P=P.includes("?")||P.includes("#")?P=k(P):{path:P},P.params={}),q({query:v.query,hash:v.hash,params:P.path!=null?{}:v.params},P)}}function re(v,C){const S=l=O(v),P=a.value,z=v.state,Z=v.force,u=v.replace===!0,d=U(S);if(d)return re(q(k(d),{state:typeof d=="object"?q({},z,d.state):z,force:Z,replace:u}),C||S);const g=S;g.redirectedFrom=C;let y;return!Z&&pg(r,P,S)&&(y=tn(16,{to:g,from:P}),De(P,P,!0,!1)),(y?Promise.resolve(y):Ee(g,P)).catch(m=>Ve(m)?Ve(m,2)?m:et(m):K(m,g,P)).then(m=>{if(m){if(Ve(m,2))return re(q({replace:u},k(m.to),{state:typeof m.to=="object"?q({},z,m.to.state):z,force:Z}),C||g)}else m=St(g,P,!0,u,z);return Ze(g,P,m),m})}function pe(v,C){const S=x(v,C);return S?Promise.reject(S):Promise.resolve()}function Se(v){const C=$t.values().next().value;return C&&typeof C.runWithContext=="function"?C.runWithContext(v):v()}function Ee(v,C){let S;const[P,z,Z]=Zg(v,C);S=rs(P.reverse(),"beforeRouteLeave",v,C);for(const d of P)d.leaveGuards.forEach(g=>{S.push(ct(g,v,C))});const u=pe.bind(null,v,C);return S.push(u),le(S).then(()=>{S=[];for(const d of i.list())S.push(ct(d,v,C));return S.push(u),le(S)}).then(()=>{S=rs(z,"beforeRouteUpdate",v,C);for(const d of z)d.updateGuards.forEach(g=>{S.push(ct(g,v,C))});return S.push(u),le(S)}).then(()=>{S=[];for(const d of Z)if(d.beforeEnter)if(Ne(d.beforeEnter))for(const g of d.beforeEnter)S.push(ct(g,v,C));else S.push(ct(d.beforeEnter,v,C));return S.push(u),le(S)}).then(()=>(v.matched.forEach(d=>d.enterCallbacks={}),S=rs(Z,"beforeRouteEnter",v,C,Se),S.push(u),le(S))).then(()=>{S=[];for(const d of o.list())S.push(ct(d,v,C));return S.push(u),le(S)}).catch(d=>Ve(d,8)?d:Promise.reject(d))}function Ze(v,C,S){c.list().forEach(P=>Se(()=>P(v,C,S)))}function St(v,C,S,P,z){const Z=x(v,C);if(Z)return Z;const u=C===rt,d=Vt?history.state:{};S&&(P||u?s.replace(v.fullPath,q({scroll:u&&d&&d.scroll},z)):s.push(v.fullPath,z)),a.value=v,De(v,C,S,u),et()}let Le;function sn(){Le||(Le=s.listen((v,C,S)=>{if(!Hn.listening)return;const P=O(v),z=U(P);if(z){re(q(z,{replace:!0}),P).catch(bn);return}l=P;const Z=a.value;Vt&&wg(So(Z.fullPath,S.delta),xr()),Ee(P,Z).catch(u=>Ve(u,12)?u:Ve(u,2)?(re(u.to,P).then(d=>{Ve(d,20)&&!S.delta&&S.type===Nn.pop&&s.go(-1,!1)}).catch(bn),Promise.reject()):(S.delta&&s.go(-S.delta,!1),K(u,P,Z))).then(u=>{u=u||St(P,Z,!1),u&&(S.delta&&!Ve(u,8)?s.go(-S.delta,!1):S.type===Nn.pop&&Ve(u,20)&&s.go(-1,!1)),Ze(P,Z,u)}).catch(bn)}))}let Ft=cn(),se=cn(),J;function K(v,C,S){et(v);const P=se.list();return P.length?P.forEach(z=>z(v,C,S)):console.error(v),Promise.reject(v)}function je(){return J&&a.value!==rt?Promise.resolve():new Promise((v,C)=>{Ft.add([v,C])})}function et(v){return J||(J=!v,sn(),Ft.list().forEach(([C,S])=>v?S(v):C()),Ft.reset()),v}function De(v,C,S,P){const{scrollBehavior:z}=t;if(!Vt||!z)return Promise.resolve();const Z=!S&&Ig(So(v.fullPath,0))||(P||!S)&&history.state&&history.state.scroll||null;return ha().then(()=>z(v,C,Z)).then(u=>u&&Eg(u)).catch(u=>K(u,v,C))}const ge=v=>s.go(v);let Bt;const $t=new Set,Hn={currentRoute:a,listening:!0,addRoute:_,removeRoute:R,hasRoute:H,getRoutes:L,resolve:O,options:t,push:V,replace:te,go:ge,back:()=>ge(-1),forward:()=>ge(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:se.add,isReady:je,install(v){const C=this;v.component("RouterLink",Gg),v.component("RouterView",Xg),v.config.globalProperties.$router=C,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(a)}),Vt&&!Bt&&a.value===rt&&(Bt=!0,V(s.location).catch(z=>{}));const S={};for(const z in rt)Object.defineProperty(S,z,{get:()=>a.value[z],enumerable:!0});v.provide(Ur,C),v.provide(Wc,sa(S)),v.provide(As,a);const P=v.unmount;$t.add(v),v.unmount=function(){$t.delete(v),$t.size<1&&(l=rt,Le&&Le(),Le=null,a.value=rt,Bt=!1,J=!1),P()}}};function le(v){return v.reduce((C,S)=>C.then(()=>Se(S)),Promise.resolve())}return Hn}function Zg(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(l=>en(l,c))?r.push(c):n.push(c));const a=t.matched[o];a&&(e.matched.find(l=>en(l,a))||s.push(a))}return[n,r,s]}function em(){return Be(Ur)}const tm={key:0},nm={key:1},rm={__name:"App",setup(t){const e=em(),n=la(!0);Fh(Eo(),function(s){s?n.value=!0:n.value=!1});const r=()=>{Bh(Eo()),e.push("/")};return(s,i)=>{const o=bi("router-link"),c=bi("router-view");return tr(),Wr("div",null,[vn("nav",null,[oe(o,{to:"/"},{default:ln(()=>[st(" Home ")]),_:1}),st(" | "),vn("span",null,[oe(o,{to:"/feed"},{default:ln(()=>[st(" Feed ")]),_:1}),st(" | ")]),n.value?(tr(),Wr("span",tm,[vn("button",{onClick:r},"Logout")])):(tr(),Wr("span",nm,[oe(o,{to:"/register"},{default:ln(()=>[st(" Register ")]),_:1}),st(" | "),oe(o,{to:"/sign-in"},{default:ln(()=>[st(" Login ")]),_:1})]))]),oe(c)])}}},sm="modulepreload",im=function(t){return"/"+t},Fo={},Jn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(n.map(a=>{if(a=im(a),a in Fo)return;Fo[a]=!0;const l=a.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!r)for(let _=i.length-1;_>=0;_--){const R=i[_];if(R.href===a&&(!l||R.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${f}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":sm,l||(p.as="script",p.crossOrigin=""),p.href=a,c&&p.setAttribute("nonce",c),document.head.appendChild(p),l)return new Promise((_,R)=>{p.addEventListener("load",_),p.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},om=Qg({history:Cg(),routes:[{path:"/",component:()=>Jn(()=>import("./Home-tWqyW9yb.js"),[])},{path:"/register",component:()=>Jn(()=>import("./Register-CbRAS7IQ.js"),[])},{path:"/sign-in",component:()=>Jn(()=>import("./SignIn-XL6z5APO.js"),[])},{path:"/feed",component:()=>Jn(()=>import("./Feed-D4-GhqRk.js"),[])}]});var am="firebase",cm="10.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qt(am,cm,"app");const lm={apiKey:"AIzaSyA9UYFfkDxbaT9vQLJ7QQ8Hol8xVXuM_4Q",authDomain:"test-project-5cd8c.firebaseapp.com",databaseURL:"https://test-project-5cd8c-default-rtdb.europe-west1.firebasedatabase.app",projectId:"test-project-5cd8c",storageBucket:"test-project-5cd8c.appspot.com",messagingSenderId:"129597675748",appId:"1:129597675748:web:db8d9719f70e3b45a534f1",measurementId:"G-PJ67PVT5SB"};Za(lm);const Kc=lf(rm);Kc.use(om);Kc.mount("#app");export{Zt as C,We as F,ut as G,Ja as L,xn as S,Cn as _,vn as a,mm as b,Wr as c,dm as d,vm as e,qt as f,Eo as g,bt as h,X as i,Qe as j,Pd as k,Qa as l,pm as m,gm as n,tr as o,Fh as p,eu as q,la as r,_m as s,um as t,em as u,hm as v,fm as w};

import { FEED_DEVICE, FEED_DEVICE_FAILURE, FEED_DEVICE_SUCCESS, FEED_LOCAL_DEVICE, FEED_LOCAL_DEVICE_FAILURE, FEED_LOCAL_DEVICE_SUCCESS, UPDATE_DEVICE, UPDATE_DEVICE_FAILURE, UPDATE_DEVICE_SIZE, UPDATE_DEVICE_SIZE_FAILURE, UPDATE_DEVICE_SIZE_SUCCESS, UPDATE_DEVICE_SUCCESS } from "./type";

export type DeviceState = {
  pin:{
    lng:string,
    lat: string,
    alt: string,
    speed: string,
    heading: string,
    ip: string
  },
  status:string,
  token:string,
  session:[{
    start:string,
    end:string
  }],
  ip:[],
  users:[],
  browser:{},
  location:[{
    lng:string,
    lat: string,
    time:string
  }],
  local_device:{},
  loading: boolean,
  size:{},
  error: object
};

  // sessions
        // os
        // ip
        // status
        // token
        // users
        // browser
        // location
        // session

// (()=>{var t={
  // 75384:(t,e,r)=>{
    // var n=r(62928)(r(25149),"DataView");
    // t.exports=n},
    // 83337:(t,e,r)=>{
      // var n=r(3080),
      // o=r(76978),
      // a=r(83894),
      // i=r(25622),
      // c=r(42119);
      // function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},30331:(t,e,r)=>{var n=r(34652),o=r(8811),a=r(27319),i=r(73388),c=r(69356);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},12333:(t,e,r)=>{var n=r(62928)(r(25149),"Map");t.exports=n},58211:(t,e,r)=>{var n=r(59132),o=r(39025),a=r(85500),i=r(59004),c=r(84404);function s(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}s.prototype.clear=n,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=i,s.prototype.set=c,t.exports=s},47710:(t,e,r)=>{var n=r(62928)(r(25149),"Promise");t.exports=n},88111:(t,e,r)=>{var n=r(62928)(r(25149),"Set");t.exports=n},70641:(t,e,r)=>{var n=r(58211),o=r(18999),a=r(27658);function i(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},55005:(t,e,r)=>{var n=r(30331),o=r(37573),a=r(4881),i=r(16182),c=r(36141),s=r(74400);function u(t){var e=this.__data__=new n(t);this.size=e.size}u.prototype.clear=o,u.prototype.delete=a,u.prototype.get=i,u.prototype.has=c,u.prototype.set=s,t.exports=u},92710:(t,e,r)=>{var n=r(25149).Symbol;t.exports=n},83635:(t,e,r)=>{var n=r(25149).Uint8Array;t.exports=n},76943:(t,e,r)=>{var n=r(62928)(r(25149),"WeakMap");t.exports=n},16673:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,a=[];++r<n;){var i=t[r];e(i,r,t)&&(a[o++]=i)}return a}},47663:(t,e,r)=>{var n=r(14246),o=r(7971),a=r(24606),i=r(17352),c=r(75280),s=r(42025),u=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=a(t),p=!r&&o(t),f=!r&&!p&&i(t),l=!r&&!p&&!f&&s(t),v=r||p||f||l,h=v?n(t.length,String):[],d=h.length;for(var y in t)!e&&!u.call(t,y)||v&&("length"==y||f&&("offset"==y||"parent"==y)||l&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||c(y,d))||h.push(y);return h}},66261:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}},87019:t=>{t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},40709:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},49102:(t,e,r)=>{var n=r(12561);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},3199:(t,e,r)=>{var n=r(16605);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},88660:(t,e,r)=>{var n=r(86781)();t.exports=n},
      // 1074:(t,e,r)=>{var n=r(88660),o=r(15943);
      // t.exports=function(t,e){return t&&n(t,e,o)}},
      // 13512:(t,e,r)=>{var n=r(40502),o=r(10258);
      // t.exports=function(t,e){for(var r=0,a=(e=n(e,t)).length;
      // null!=t&&r<a;)t=t[o(e[r++])];
      // return r&&r==a?t:void 0}},79434:(t,e,r)=>{var n=r(87019),o=r(24606);
      // t.exports=function(t,e,r){var a=e(t);return o(t)?a:n(a,r(t))}},84283:(t,e,r)=>{var n=r(92710),o=r(85109),a=r(44251),i=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},34864:t=>{t.exports=function(t,e){return null!=t&&e in Object(t)}},63988:(t,e,r)=>{var n=r(84283),o=r(82589);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},47269:(t,e,r)=>{var n=r(47189),o=r(82589);t.exports=function t(e,r,a,i,c){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,a,i,t,c))}},47189:(t,e,r)=>{var n=r(55005),o=r(48934),a=r(54879),i=r(63306),c=r(42895),s=r(24606),u=r(17352),p=r(42025),f="[object Arguments]",l="[object Array]",v="[object Object]",h=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,d,y,b){var x=s(t),_=s(e),g=x?l:c(t),j=_?l:c(e),m=(g=g==f?v:g)==v,w=(j=j==f?v:j)==v,O=g==j;if(O&&u(t)){if(!u(e))return!1;x=!0,m=!1}if(O&&!m)return b||(b=new n),x||p(t)?o(t,e,r,d,y,b):a(t,e,g,r,d,y,b);if(!(1&r)){var E=m&&h.call(t,"__wrapped__"),S=w&&h.call(e,"__wrapped__");if(E||S){var A=E?t.value():t,I=S?e.value():e;return b||(b=new n),y(A,I,r,d,b)}}return!!O&&(b||(b=new n),i(t,e,r,d,y,b))}},4066:(t,e,r)=>{var n=r(55005),o=r(47269);t.exports=function(t,e,r,a){var i=r.length,c=i,s=!a;if(null==t)return!c;for(t=Object(t);i--;){var u=r[i];if(s&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++i<c;){var p=(u=r[i])[0],f=t[p],l=u[1];if(s&&u[2]){if(void 0===f&&!(p in t))return!1}else{var v=new n;if(a)var h=a(f,l,p,t,e,v);if(!(void 0===h?o(l,f,3,a,v):h))return!1}}return!0}},22636:(t,e,r)=>{var n=r(29975),o=r(49489),a=r(43720),i=r(86158),c=/^\[object .+?Constructor\]$/,s=Function.prototype,u=Object.prototype,p=s.toString,f=u.hasOwnProperty,l=RegExp("^"+p.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(n(t)?l:c).test(i(t))}},81739:(t,e,r)=>{var n=r(84283),o=r(9045),a=r(82589),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[n(t)]}},56417:(t,e,r)=>{var n=r(86099),o=r(26532),a=r(71978),i=r(24606),c=r(40588);t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):n(t):c(t)}},91519:(t,e,r)=>{var n=r(90451),o=r(28238),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))a.call(t,r)&&"constructor"!=r&&e.push(r);return e}},86099:(t,e,r)=>{var n=r(4066),o=r(95973),a=r(2265);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},26532:(t,e,r)=>{var n=r(47269),o=r(47809),a=r(57533),i=r(1169),c=r(34799),s=r(2265),u=r(10258);t.exports=function(t,e){return i(t)&&c(e)?s(u(t),e):function(r){var i=o(r,t);return void 0===i&&i===e?a(r,t):n(e,i,3)}}},34458:t=>{t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},13030:(t,e,r)=>{var n=r(13512);t.exports=function(t){return function(e){return n(e,t)}}},14246:t=>{t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},24864:(t,e,r)=>{var n=r(92710),o=r(66261),a=r(24606),i=r(42301),c=n?n.prototype:void 0,s=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return s?s.call(e):"";var r=e+"";return"0"==r&&1/e==-1/0?"-0":r}},96098:t=>{t.exports=function(t){return function(e){return t(e)}}},56734:t=>{t.exports=function(t,e){return t.has(e)}},40502:(t,e,r)=>{var n=r(24606),o=r(1169),a=r(66562),i=r(3631);t.exports=function(t,e){return n(t)?t:o(t,e)?[t]:a(i(t))}},60026:(t,e,r)=>{var n=r(25149)["__core-js_shared__"];t.exports=n},86781:t=>{t.exports=function(t){return function(e,r,n){for(var o=-1,a=Object(e),i=n(e),c=i.length;c--;){var s=i[t?c:++o];if(!1===r(a[s],s,a))break}return e}}},16605:(t,e,r)=>{var n=r(62928),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},48934:(t,e,r)=>{var n=r(70641),o=r(40709),a=r(56734);t.exports=function(t,e,r,i,c,s){var u=1&r,p=t.length,f=e.length;if(p!=f&&!(u&&f>p))return!1;var l=s.get(t),v=s.get(e);if(l&&v)return l==e&&v==t;var h=-1,d=!0,y=2&r?new n:void 0;for(s.set(t,e),s.set(e,t);++h<p;){var b=t[h],x=e[h];if(i)var _=u?i(x,b,h,e,t,s):i(b,x,h,t,e,s);if(void 0!==_){if(_)continue;d=!1;break}if(y){if(!o(e,(function(t,e){if(!a(y,e)&&(b===t||c(b,t,r,i,s)))return y.push(e)}))){d=!1;break}}else if(b!==x&&!c(b,x,r,i,s)){d=!1;break}}return s.delete(t),s.delete(e),d}},54879:(t,e,r)=>{var n=r(92710),o=r(83635),a=r(12561),i=r(48934),c=r(13078),s=r(56320),u=n?n.prototype:void 0,p=u?u.valueOf:void 0;t.exports=function(t,e,r,n,u,f,l){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var v=c;case"[object Set]":var h=1&n;if(v||(v=s),t.size!=e.size&&!h)return!1;var d=l.get(t);if(d)return d==e;n|=2,l.set(t,e);var y=i(v(t),v(e),n,u,f,l);return l.delete(t),y;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},63306:(t,e,r)=>{var n=r(65022),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,a,i,c){var s=1&r,u=n(t),p=u.length;if(p!=n(e).length&&!s)return!1;for(var f=p;f--;){var l=u[f];if(!(s?l in e:o.call(e,l)))return!1}var v=c.get(t),h=c.get(e);if(v&&h)return v==e&&h==t;var d=!0;c.set(t,e),c.set(e,t);for(var y=s;++f<p;){var b=t[l=u[f]],x=e[l];if(a)var _=s?a(x,b,l,e,t,c):a(b,x,l,t,e,c);if(!(void 0===_?b===x||i(b,x,r,a,c):_)){d=!1;break}y||(y="constructor"==l)}if(d&&!y){var g=t.constructor,j=e.constructor;g==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof j&&j instanceof j||(d=!1)}return c.delete(t),c.delete(e),d}},10853:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},65022:(t,e,r)=>{var n=r(79434),o=r(85796),a=r(15943);t.exports=function(t){return n(t,a,o)}},90843:(t,e,r)=>{var n=r(94757);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},95973:(t,e,r)=>{var n=r(34799),o=r(15943);
      // t.exports=function(t){for(var e=o(t),r=e.length;r--;){var a=e[r],i=t[a];e[r]=[a,i,n(i)]}return e}},62928:(t,e,r)=>{var n=r(22636),o=r(45322);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},85109:(t,e,r)=>{var n=r(92710),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=n?n.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),r=t[c];try{t[c]=void 0;var n=!0}catch(t){}var o=i.call(t);return n&&(e?t[c]=r:delete t[c]),o}},85796:(t,e,r)=>{var n=r(16673),o=r(48120),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,c=i?function(t){return null==t?[]:(t=Object(t),n(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=c},42895:(t,e,r)=>{var n=r(75384),o=r(12333),a=r(47710),i=r(88111),c=r(76943),s=r(84283),u=r(86158),p="[object Map]",f="[object Promise]",l="[object Set]",v="[object WeakMap]",h="[object DataView]",d=u(n),y=u(o),b=u(a),x=u(i),_=u(c),g=s;(n&&g(new n(new ArrayBuffer(1)))!=h||o&&g(new o)!=p||a&&g(a.resolve())!=f||i&&g(new i)!=l||c&&g(new c)!=v)&&(g=function(t){var e=s(t),r="[object Object]"==e?t.constructor:void 0,n=r?u(r):"";if(n)switch(n){case d:return h;case y:return p;case b:return f;case x:return l;case _:return v}return e}),t.exports=g},45322:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},19045:(t,e,r)=>{var n=r(40502),o=r(7971),a=r(24606),i=r(75280),c=r(9045),s=r(10258);t.exports=function(t,e,r){for(var u=-1,p=(e=n(e,t)).length,f=!1;++u<p;){var l=s(e[u]);if(!(f=null!=t&&r(t,l)))break;t=t[l]}return f||++u!=p?f:!!(p=null==t?0:t.length)&&c(p)&&i(l,p)&&(a(t)||o(t))}},3080:(t,e,r)=>{var n=r(84918);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},76978:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},83894:(t,e,r)=>{var n=r(84918),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},25622:(t,e,r)=>{var n=r(84918),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},42119:(t,e,r)=>{var n=r(84918);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},75280:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<r}},1169:(t,e,r)=>{var n=r(24606),o=r(42301),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(n(t))return!1;var r=typeof t;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!o(t))||i.test(t)||!a.test(t)||null!=e&&t in Object(e)}},94757:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},49489:(t,e,r)=>{var n,o=r(60026),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!a&&a in t}},90451:t=>{var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},34799:(t,e,r)=>{var n=r(43720);t.exports=function(t){return t==t&&!n(t)}},34652:t=>{t.exports=function(){this.__data__=[],this.size=0}},8811:(t,e,r)=>{var n=r(49102),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},27319:(t,e,r)=>{var n=r(49102);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},73388:(t,e,r)=>{var n=r(49102);t.exports=function(t){return n(this.__data__,t)>-1}},69356:(t,e,r)=>{var n=r(49102);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},59132:(t,e,r)=>{var n=r(83337),o=r(30331),a=r(12333);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(a||o),string:new n}}},39025:(t,e,r)=>{var n=r(90843);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},85500:(t,e,r)=>{var n=r(90843);t.exports=function(t){return n(this,t).get(t)}},59004:(t,e,r)=>{var n=r(90843);t.exports=function(t){return n(this,t).has(t)}},84404:(t,e,r)=>{var n=r(90843);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},13078:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}},2265:t=>{t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},42176:(t,e,r)=>{var n=r(62034);t.exports=function(t){var e=n(t,(function(t){return 500===r.size&&r.clear(),t})),r=e.cache;return e}},84918:(t,e,r)=>{var n=r(62928)(Object,"create");t.exports=n},28238:(t,e,r)=>{var n=r(87125)(Object.keys,Object);t.exports=n},2221:(t,e,r)=>{t=r.nmd(t);var n=r(10853),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,i=a&&a.exports===o&&n.process,c=function(){try{return a&&a.require&&a.require("util").types||i&&i.binding&&i.binding("util")}catch(t){}}();t.exports=c},44251:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},87125:t=>{t.exports=function(t,e){return function(r){return t(e(r))}}},25149:(t,e,r)=>{var n=r(10853),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();t.exports=a},18999:t=>{t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},27658:t=>{t.exports=function(t){return this.__data__.has(t)}},56320:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},37573:(t,e,r)=>{var n=r(30331);t.exports=function(){this.__data__=new n,this.size=0}},4881:t=>{t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},16182:t=>{t.exports=function(t){return this.__data__.get(t)}},36141:t=>{t.exports=function(t){return this.__data__.has(t)}},74400:(t,e,r)=>{var n=r(30331),o=r(12333),a=r(58211);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var i=r.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++r.size,this;r=this.__data__=new a(i)}return r.set(t,e),this.size=r.size,this}},66562:(t,e,r)=>{var n=r(42176),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=n((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,r,n,o){e.push(n?o.replace(a,"$1"):r||t)})),e}));t.exports=i},10258:(t,e,r)=>{var n=r(42301);t.exports=function(t){if("string"==typeof t||n(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},86158:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},12561:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},47809:(t,e,r)=>{var n=r(13512);t.exports=function(t,e,r){var o=null==t?void 0:n(t,e);return void 0===o?r:o}},57533:(t,e,r)=>{var n=r(34864),o=r(19045);t.exports=function(t,e){return null!=t&&o(t,e,n)}},71978:t=>{t.exports=function(t){return t}},7971:(t,e,r)=>{var n=r(63988),o=r(82589),a=Object.prototype,i=a.hasOwnProperty,c=a.propertyIsEnumerable,s=n(function(){return arguments}())?n:function(t){return o(t)&&i.call(t,"callee")&&!c.call(t,"callee")};t.exports=s},24606:t=>{var e=Array.isArray;t.exports=e},75754:(t,e,r)=>{var n=r(29975),o=r(9045);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},17352:(t,e,r)=>{t=r.nmd(t);var n=r(25149),o=r(69399),a=e&&!e.nodeType&&e,i=a&&t&&!t.nodeType&&t,c=i&&i.exports===a?n.Buffer:void 0,s=(c?c.isBuffer:void 0)||o;t.exports=s},29975:(t,e,r)=>{var n=r(84283),o=r(43720);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},9045:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},43720:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},82589:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},42301:(t,e,r)=>{var n=r(84283),o=r(82589);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==n(t)}},42025:(t,e,r)=>{var n=r(81739),o=r(96098),a=r(2221),i=a&&a.isTypedArray,c=i?o(i):n;t.exports=c},15943:(t,e,r)=>{var n=r(47663),o=r(91519),a=r(75754);t.exports=function(t){return a(t)?n(t):o(t)}},91715:(t,e,r)=>{var n=r(3199),o=r(1074),a=r(56417);t.exports=function(t,e){var r={};return e=a(e,3),o(t,(function(t,o,a){n(r,o,e(t,o,a))})),r}},62034:(t,e,r)=>{var n=r(58211);function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=e?e.apply(this,n):n[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,n);return r.cache=a.set(o,i)||a,i};return r.cache=new(o.Cache||n),r}o.Cache=n,t.exports=o},40588:(t,e,r)=>{var n=r(34458),o=r(13030),a=r(1169),i=r(10258);t.exports=function(t){return a(t)?n(i(t)):o(t)}},48120:t=>{t.exports=function(){return[]}},69399:t=>{t.exports=function(){return!1}},3631:(t,e,r)=>{var n=r(24864);t.exports=function(t){return null==t?"":n(t)}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,loaded:!1,exports:{}};
      // return t[n](a,a.exports,r),a.loaded=!0,a.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{window.isElectron=window.navigator&&-1!==window.navigator.userAgent.indexOf("Electron");var t=-1!==navigator.userAgent.indexOf("Firefox");if((window.isElectron&&"/_generated_background_page.html"===location.pathname||t)&&(chrome.runtime.onConnectExternal={addListener:function(){}},chrome.runtime.onMessageExternal={addListener:function(){}},
      // window.isElectron?(chrome.notifications={onClicked:{addListener:function(){}},
      // create:function(){},
      // clear:function(){}},chrome.contextMenus={onClicked:{addListener:function(){}}}):(chrome.storage.sync=chrome.storage.local,chrome.runtime.onInstalled={addListener:function(t){return t()}})),window.isElectron){chrome.storage.local&&chrome.storage.local.remove||(chrome.storage.local={set:function(t,e){Object.keys(t).forEach((function(e){localStorage.setItem(e,t[e])})),e&&e()},get:function(t,e){var r={};Object.keys(t).forEach((function(e){r[e]=localStorage.getItem(e)||t[e]})),e&&e(r)},remove:function(t,e){Array.isArray(t)?t.forEach((function(t){localStorage.removeItem(t)})):localStorage.removeItem(t),e&&e()}});var e=chrome.runtime.sendMessage;chrome.runtime.sendMessage=function(){return"function"==typeof arguments[arguments.length-1]&&Array.prototype.pop.call(arguments),e.apply(void 0,arguments)}}(t||window.isElectron)&&(chrome.storage.sync=chrome.storage.local)})(),(()=>{"use strict";r(91715);var t,e="DO_NOT_FILTER",n="DENYLIST_SPECIFIC",o="ALLOWLIST_SPECIFIC";function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}
      // function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=function(t){return""!==t?t.split("\n").filter(Boolean).join("|"):null},u=function(r){if(r){t=i(i({},r),{},{allowlist:r.filter!==e?s(r.allowlist):r.allowlist,denylist:r.filter!==e?s(r.denylist):r.denylist});var n=document.createElement("script");n.type="text/javascript",n.appendChild(document.createTextNode("window.devToolsOptions = Object.assign(window.devToolsOptions||{},"+JSON.stringify(t)+");")),(document.head||document.documentElement).appendChild(n),n.parentNode.removeChild(n)}};function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}var f,l="@devtools-extension",v="@devtools-page",h=33554432,d=!1;function y(t){window.postMessage(t,"*")}function b(){window.removeEventListener("message",g),window.postMessage({type:"STOP",failed:!0,source:l},"*"),f=void 0}function x(t){f.postMessage(t)}function _(r){var a;d||(d=!0,(f=window.devToolsExtensionID?chrome.runtime.connect(window.devToolsExtensionID,{name:"tab"}):chrome.runtime.connect({name:"tab"})).onMessage.addListener((function(t){"action"in t?("DISPATCH"===t.type||t.type,y({type:t.type,payload:t.action,state:t.state,id:t.id,source:l})):"options"in t?u(t.options):y({type:t.type,state:t.state,id:t.id,source:l})})),f.onDisconnect.addListener(b)),"INIT_INSTANCE"===r.type?(a=function(t){u(t)},t?a(t):chrome.storage.sync.get({useEditor:0,editor:"",projectPath:"",maxAge:50,filter:e,whitelist:"",blacklist:"",allowlist:"",denylist:"",shouldCatchErrors:!1,inject:!0,urls:"^https?://localhost|0\\.0\\.0\\.0:\\d+\n^https?://.+\\.github\\.io",showContextMenus:!0},(function(r){var c;t=i(i({},c=r),{},{filter:"boolean"==typeof c.filter?c.filter&&c.whitelist.length>0?o:c.filter?n:e:"WHITELIST_SPECIFIC"===c.filter?o:"BLACKLIST_SPECIFIC"===c.filter?n:c.filter}),a(t)})),x({name:"INIT_INSTANCE",instanceId:r.instanceId})):x({name:"RELAY",message:r})}function g(e){if(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return!e||e.inject||!e.urls||location.href.match(s(e.urls))}()&&e&&e.source===window&&"object"===p(e.data)){var r=e.data;r.source===v&&("DISCONNECT"!==r.type?function(t,e){try{t(e)}catch(u){if("Message length exceeded maximum allowed length."===u.message){var r,n=e.instanceId,o={split:"start"},a=[],i=0;Object.keys(e).map((function(t){"string"==typeof(r=e[t])&&(i+=r.length)>h?a.push([t,r]):o[t]=r})),t(o);for(var c=0;c<a.length;c++)for(var s=0;s<a[c][1].length;s+=h)t({instanceId:n,source:v,split:"chunk",chunk:[a[c][0],a[c][1].substr(s,h)]});return t({instanceId:n,source:v,split:"end"})}b()}}(_,r):f&&(f.disconnect(),d=!1))}}window.addEventListener("message",g,!1)})()})();

      export const deviceState: DeviceState = {

// browser
// created_at
// id
// ip 
// location
// os
// pin
// session
// size
// status
// token
// updated_at
// users
// visits

local_device:{},
  pin:{
    lng:"string",
    lat: "string",
    alt: "string",
    speed: "string",
    heading: "string",
    ip: "string"
  },
  ip:[],
  users:[],
  browser:{},
  session:[{
    start:"",
    end:""
  }],
  status:"",
  token:"",
  location:[{
    lng:"",
    lat:"",
    time:""
  }],
  loading:false,
  size:{},
  error: {}
};

export const deviceReducer = (state = deviceState, action:any) => {
  switch (action.type) {
    case FEED_DEVICE:
      return {
        ...state,
        loading: true,

      };
      case FEED_DEVICE_SUCCESS:
        return {
          ...state,
          loading: false,
          // device: action.device
          browser:action.device.browser,
          id:action.device.id,
          ip :action.device.ip,
          location:action.device.location,
          os:action.device.os,
          pin:action.device.pin,
          session:action.device.session,
          status:action.device.status,
          token:action.device.token,
        };
        case FEED_DEVICE_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.error
          };
  
          case FEED_LOCAL_DEVICE:
            return {
              ...state,
              loading: true,
      
            };
            case FEED_LOCAL_DEVICE_SUCCESS:
              return {
                ...state,
                loading: false,
                // device: action.device
                local_device:action.local_device
              };
              case FEED_LOCAL_DEVICE_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.error
                };
  
                



          case UPDATE_DEVICE:
            return {
              ...state,
              loading: true,
      
            };
            case UPDATE_DEVICE_SUCCESS:
              return {
                ...state,
                loading: false,
                browser:action.device.browser,
                id:action.device.id,
                ip :action.device.ip,
                location:action.device.location,
                os:action.device.os,
                pin:action.device.pin,
                session:action.device.session,
                status:action.device.status,
                token:action.device.token,
              };
              case UPDATE_DEVICE_FAILURE:
                return {
                  ...state,
                  loading: false,
                  error: action.error
                };

                case UPDATE_DEVICE_SIZE:
                  return {
                    ...state,
                    loading: true,
                    // size: action.size
            
                  };
                  case UPDATE_DEVICE_SIZE_SUCCESS:
                    return {
                      ...state,
                      size: action.size,
                      loading: false,
                    };
                    case UPDATE_DEVICE_SIZE_FAILURE:
                      return {
                        ...state,
                        loading: false,
                        error: action.error
                      };
        
    default:
      return state;
  }
};

var lido;(()=>{"use strict";var e={57253:(e,r,t)=>{var _={"./bootstrap":()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa"),t.e("webpack_sharing_consume_default_sentre_senhub_sentre_senhub"),t.e("src_bootstrap_app_tsx")]).then((()=>()=>t(26244)))},o=(e,r)=>(t.R=r,r=t.o(_,e)?_[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),a=(e,r)=>{if(t.S){var _="default",o=t.S[_];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[_]=e,t.I(_,r)}};t.d(r,{get:()=>o,init:()=>a})}},r={};function t(_){var o=r[_];if(void 0!==o)return o.exports;var a=r[_]={id:_,loaded:!1,exports:{}};return e[_].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,t.c=r,t.amdO={},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},(()=>{var e,r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(_,o){if(1&o&&(_=this(_)),8&o)return _;if("object"===typeof _&&_){if(4&o&&_.__esModule)return _;if(16&o&&"function"===typeof _.then)return _}var a=Object.create(null);t.r(a);var n={};e=e||[null,r({}),r([]),r(r)];for(var s=2&o&&_;"object"==typeof s&&!~e.indexOf(s);s=r(s))Object.getOwnPropertyNames(s).forEach((e=>n[e]=()=>_[e]));return n.default=()=>_,t.d(a,n),a}})(),t.d=(e,r)=>{for(var _ in r)t.o(r,_)&&!t.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((r,_)=>(t.f[_](e,r),r)),[])),t.u=e=>"static/js/"+e+"."+{"vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js":"cee8e845","vendors-node_modules_solana_web3_js_lib_index_browser_esm_js":"5159b827","vendors-node_modules_react-router_esm_react-router_js":"2e67dbb6","vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97":"69e11d04",webpack_sharing_consume_default_react_react:"7091b082","webpack_sharing_consume_default_react-dom_react-dom":"89c5f315","webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa":"6553e136","webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a":"bc0a61dc","node_modules_react_jsx-runtime_js":"bef96891","vendors-node_modules_antd_es_index_js":"ac4a5d0c","node_modules_copy-to-clipboard_index_js-node_modules_react-is_index_js-node_modules_babel_run-43d171":"f7dc964b","vendors-node_modules_react-dom_index_js":"8a69a057","vendors-node_modules_react-redux_es_index_js":"d37705a1","node_modules_react-router-dom_esm_react-router-dom_js-_d6f00":"410e6e4f",node_modules_react_index_js:"830bcb42",webpack_sharing_consume_default_sentre_senhub_sentre_senhub:"f5ded358",src_bootstrap_app_tsx:"fe9103ae","node_modules_react-router-dom_esm_react-router-dom_js-_d6f01":"bfca36a7","_18f2-_0b7d-_25ed-_8131-_3fc0-_e4dd-_7bec-_ec71-_df0e-_887c-_c738-_9820-_7d1a-_b254-_ed1b-_d1-147343":"2a0aa544"}[e]+".chunk.js",t.miniCssF=e=>"static/css/"+e+".33d0acef.chunk.css",t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="lido:";t.l=(_,o,a,n)=>{if(e[_])e[_].push(o);else{var s,d;if(void 0!==a)for(var u=document.getElementsByTagName("script"),i=0;i<u.length;i++){var c=u[i];if(c.getAttribute("src")==_||c.getAttribute("data-webpack")==r+a){s=c;break}}s||(d=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",r+a),s.src=_),e[_]=[o];var l=(r,t)=>{s.onerror=s.onload=null,clearTimeout(m);var o=e[_];if(delete e[_],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),d&&document.head.appendChild(s)}}})(),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{t.S={};var e={},r={};t.I=(_,o)=>{o||(o=[]);var a=r[_];if(a||(a=r[_]={}),!(o.indexOf(a)>=0)){if(o.push(a),e[_])return e[_];t.o(t.S,_)||(t.S[_]={});var n=t.S[_],s="lido",d=(e,r,t,_)=>{var o=n[e]=n[e]||{},a=o[r];(!a||!a.loaded&&(!_!=!a.eager?_:s>a.from))&&(o[r]={get:t,from:s,eager:!!_})},u=[];if("default"===_)d("@reduxjs/toolkit","1.8.3",(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),d("@sentre/senhub","3.0.45",(()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa"),t.e("webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a"),t.e("node_modules_react_jsx-runtime_js")]).then((()=>()=>t(14894))))),d("antd","4.21.6",(()=>Promise.all([t.e("vendors-node_modules_antd_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("node_modules_copy-to-clipboard_index_js-node_modules_react-is_index_js-node_modules_babel_run-43d171")]).then((()=>()=>t(31108))))),d("react-dom","17.0.2",(()=>Promise.all([t.e("vendors-node_modules_react-dom_index_js"),t.e("webpack_sharing_consume_default_react_react")]).then((()=>()=>t(81108))))),d("react-redux","7.2.8",(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),d("react-router-dom","5.3.3",(()=>Promise.all([t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("webpack_sharing_consume_default_react_react"),t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f00")]).then((()=>()=>t(9402))))),d("react","17.0.2",(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276)))));return u.length?e[_]=Promise.all(u).then((()=>e[_]=1)):e[_]=1}}})(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var _=r.getElementsByTagName("script");_.length&&(e=_[_.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),_=t[1]?r(t[1]):[];return t[2]&&(_.length++,_.push.apply(_,r(t[2]))),t[3]&&(_.push([]),_.push.apply(_,r(t[3]))),_},r=(r,t)=>{r=e(r),t=e(t);for(var _=0;;){if(_>=r.length)return _<t.length&&"u"!=(typeof t[_])[0];var o=r[_],a=(typeof o)[0];if(_>=t.length)return"u"==a;var n=t[_],s=(typeof n)[0];if(a!=s)return"o"==a&&"n"==s||"s"==s||"u"==a;if("o"!=a&&"u"!=a&&o!=n)return o<n;_++}},_=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var o=1,a=1;a<e.length;a++)o--,t+="u"==(typeof(s=e[a]))[0]?"-":(o>0?".":"")+(o=2,s);return t}var n=[];for(a=1;a<e.length;a++){var s=e[a];n.push(0===s?"not("+d()+")":1===s?"("+d()+" || "+d()+")":2===s?n.pop()+" "+n.pop():_(s))}return d();function d(){return n.pop().replace(/^\((.+)\)$/,"$1")}},o=(r,t)=>{if(0 in r){t=e(t);var _=r[0],a=_<0;a&&(_=-_-1);for(var n=0,s=1,d=!0;;s++,n++){var u,i,c=s<r.length?(typeof r[s])[0]:"";if(n>=t.length||"o"==(i=(typeof(u=t[n]))[0]))return!d||("u"==c?s>_&&!a:""==c!=a);if("u"==i){if(!d||"u"!=c)return!1}else if(d)if(c==i)if(s<=_){if(u!=r[s])return!1}else{if(a?u>r[s]:u<r[s])return!1;u!=r[s]&&(d=!1)}else if("s"!=c&&"n"!=c){if(a||s<=_)return!1;d=!1,s--}else{if(s<=_||i<c!=a)return!1;d=!1}else"s"!=c&&"n"!=c&&(d=!1,s--)}}var l=[],m=l.pop.bind(l);for(n=1;n<r.length;n++){var f=r[n];l.push(1==f?m()|m():2==f?m()&m():f?o(f,t):!m())}return!!m()},a=(e,t)=>{var _=e[t];return Object.keys(_).reduce(((e,t)=>!e||!_[e].loaded&&r(e,t)?t:e),0)},n=(e,r,t,o)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+_(o)+")",s=(e,r,t,_)=>{var s=a(e,t);return o(_,s)||"undefined"!==typeof console&&console.warn&&console.warn(n(e,t,s,_)),d(e[t][s])},d=e=>(e.loaded=1,e.get()),u=e=>function(r,_,o,a){var n=t.I(r);return n&&n.then?n.then(e.bind(e,r,t.S[r],_,o,a)):e(r,t.S[r],_,o,a)},i=u(((e,r,_,o,a)=>r&&t.o(r,_)?s(r,0,_,o):a())),c={},l={92950:()=>i("default","react",[1,17,0,2],(()=>t.e("node_modules_react_index_js").then((()=>()=>t(7276))))),12181:()=>i("default","react-dom",[1,17,0,2],(()=>t.e("vendors-node_modules_react-dom_index_js").then((()=>()=>t(81108))))),55754:()=>i("default","react-redux",[1,7,2,5],(()=>Promise.all([t.e("vendors-node_modules_react-redux_es_index_js"),t.e("webpack_sharing_consume_default_react-dom_react-dom")]).then((()=>()=>t(59771))))),19289:()=>i("default","@reduxjs/toolkit",[1,1,6,2],(()=>t.e("vendors-node_modules_reduxjs_toolkit_dist_redux-toolkit_esm_js").then((()=>()=>t(57853))))),45055:()=>i("default","react-router-dom",[1,5,3,0],(()=>t.e("node_modules_react-router-dom_esm_react-router-dom_js-_d6f01").then((()=>()=>t(9402))))),94751:()=>i("default","antd",[1,4,21,0],(()=>t.e("vendors-node_modules_antd_es_index_js").then((()=>()=>t(31108))))),57545:()=>i("default","@sentre/senhub",[1,3,0,45],(()=>Promise.all([t.e("vendors-node_modules_solana_web3_js_lib_index_browser_esm_js"),t.e("vendors-node_modules_react-router_esm_react-router_js"),t.e("vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97"),t.e("webpack_sharing_consume_default_react-dom_react-dom"),t.e("webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa"),t.e("webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a"),t.e("_18f2-_0b7d-_25ed-_8131-_3fc0-_e4dd-_7bec-_ec71-_df0e-_887c-_c738-_9820-_7d1a-_b254-_ed1b-_d1-147343")]).then((()=>()=>t(14894)))))},m={webpack_sharing_consume_default_react_react:[92950],"webpack_sharing_consume_default_react-dom_react-dom":[12181],"webpack_sharing_consume_default_reduxjs_toolkit_reduxjs_toolkit-webpack_sharing_consume_defau-3cd5aa":[55754,19289],"webpack_sharing_consume_default_antd_antd-webpack_sharing_consume_default_react-router-dom_re-089d6a":[45055,94751],webpack_sharing_consume_default_sentre_senhub_sentre_senhub:[57545]};t.f.consumes=(e,r)=>{t.o(m,e)&&m[e].forEach((e=>{if(t.o(c,e))return r.push(c[e]);var _=r=>{c[e]=0,t.m[e]=_=>{delete t.c[e],_.exports=r()}},o=r=>{delete c[e],t.m[e]=_=>{throw delete t.c[e],r}};try{var a=l[e]();a.then?r.push(c[e]=a.then(_).catch(o)):_(a)}catch(n){o(n)}}))}})(),(()=>{var e=e=>new Promise(((r,_)=>{var o=t.miniCssF(e),a=t.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),_=0;_<t.length;_++){var o=(n=t[_]).getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===e||o===r))return n}var a=document.getElementsByTagName("style");for(_=0;_<a.length;_++){var n;if((o=(n=a[_]).getAttribute("data-href"))===e||o===r)return n}})(o,a))return r();((e,r,t,_)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var n=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=n,d.request=s,o.parentNode.removeChild(o),_(d)}},o.href=r,document.head.appendChild(o)})(e,a,r,_)})),r={lido:0};t.f.miniCss=(t,_)=>{r[t]?_.push(r[t]):0!==r[t]&&{"vendors-node_modules_sentre_senhub_dist_index_js-node_modules_sentre_senhub_dist_static_image-55fa97":1}[t]&&_.push(r[t]=e(t).then((()=>{r[t]=0}),(e=>{throw delete r[t],e})))}})(),(()=>{var e={lido:0};t.f.j=(r,_)=>{var o=t.o(e,r)?e[r]:void 0;if(0!==o)if(o)_.push(o[2]);else if(/^webpack_sharing_consume_default_(re(act(\-dom_react\-dom|_react)|duxjs_toolkit_reduxjs_toolkit\-webpack_sharing_consume_defau\-3cd5aa)|antd_antd\-webpack_sharing_consume_default_react\-router\-dom_re\-089d6a|sentre_senhub_sentre_senhub)$/.test(r))e[r]=0;else{var a=new Promise(((t,_)=>o=e[r]=[t,_]));_.push(o[2]=a);var n=t.p+t.u(r),s=new Error;t.l(n,(_=>{if(t.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=_&&("load"===_.type?"missing":_.type),n=_&&_.target&&_.target.src;s.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",s.name="ChunkLoadError",s.type=a,s.request=n,o[1](s)}}),"chunk-"+r,r)}};var r=(r,_)=>{var o,a,[n,s,d]=_,u=0;if(n.some((r=>0!==e[r]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)d(t)}for(r&&r(_);u<n.length;u++)a=n[u],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0},_=globalThis.webpackChunklido=globalThis.webpackChunklido||[];_.forEach(r.bind(null,0)),_.push=r.bind(null,_.push.bind(_))})();var _=t(57253);lido=_})();
//# sourceMappingURL=index.js.map
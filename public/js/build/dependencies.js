//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
(function(t){var e=typeof self=="object"&&self.self==self&&self||typeof global=="object"&&global.global==global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.2.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],h(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],h(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var o=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var h=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return u(t);if(i.isString(t))return function(e){return e.get(t)};return t};var u=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var l=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,o;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(o=i.keys(r);a<o.length;a++){e=f(t,e,o[a],r[o[a]],s)}}else if(r&&c.test(r)){for(o=r.split(c);a<o.length;a++){e=t(e,o[a],n,s)}}else{e=t(e,r,n,s)}return e};l.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};l.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:o,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,o=r.listening;if(o)o.count++;n.push({callback:i,context:s,ctx:s||a,listening:o})}return t};l.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};l.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var o=n[s[a]];if(!o)break;o.obj.off(e,r,this)}if(i.isEmpty(n))this._listeningTo=void 0;return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var o=n.context,h=n.listeners;if(!e&&!r&&!o){var u=i.keys(h);for(;s<u.length;s++){a=h[u[s]];delete h[a.id];delete a.listeningTo[a.objId]}return}var l=e?[e]:i.keys(t);for(;s<l.length;s++){e=l[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||o&&o!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete h[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}if(i.size(t))return t};l.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));return this.on(n,void 0,r)};l.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};l.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],o=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,o);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};l.bind=l.on;l.unbind=l.off;i.extend(e,l);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};r=i.defaults({},r,i.result(this,"defaults"));this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,l,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var o=[];var h=this._changing;this._changing=true;if(!h){this._previousAttributes=i.clone(this.attributes);this.changed={}}var u=this.attributes;var l=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(u[f],e))o.push(f);if(!i.isEqual(c[f],e)){l[f]=e}else{delete l[f]}s?delete u[f]:u[f]=e}this.id=this.get(this.idAttribute);if(!a){if(o.length)this._pending=r;for(var d=0;d<o.length;d++){this.trigger("change:"+o[d],this,u[o[d]],r)}}if(h)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};z(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else{if(!this._validate(n,r))return false}var a=this;var o=r.success;var h=this.attributes;r.success=function(t){a.attributes=h;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(o)o.call(r.context,a,t,r);a.trigger("sync",a,t,r)};z(this,r);if(n&&s)this.attributes=i.extend({},h,n);var u=this.isNew()?"create":r.patch?"patch":"update";if(u==="patch"&&!r.attrs)r.attrs=n;var l=this.sync(u,this,r);this.attributes=h;return l},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{z(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:true},t))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var k=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;for(var s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,l,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:i.clone(t);var n=this._removeModels(t,e);if(!e.silent&&n)this.trigger("update",this,e);return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.defaults({},e,w);if(e.parse&&!this._isModel(t))t=this.parse(t,e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n<0)n+=this.length+1;var s=[];var a=[];var o=[];var h={};var u=e.add;var l=e.merge;var c=e.remove;var f=false;var d=this.comparator&&n==null&&e.sort!==false;var v=i.isString(this.comparator)?this.comparator:null;var g;for(var p=0;p<t.length;p++){g=t[p];var m=this.get(g);if(m){if(l&&g!==m){var _=this._isModel(g)?g.attributes:g;if(e.parse)_=m.parse(_,e);m.set(_,e);if(d&&!f)f=m.hasChanged(v)}if(!h[m.cid]){h[m.cid]=true;s.push(m)}t[p]=m}else if(u){g=t[p]=this._prepareModel(g,e);if(g){a.push(g);this._addReference(g,e);h[g.cid]=true;s.push(g)}}}if(c){for(p=0;p<this.length;p++){g=this.models[p];if(!h[g.cid])o.push(g)}if(o.length)this._removeModels(o,e)}var y=false;var b=!d&&u&&c;if(s.length&&b){y=this.length!=s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;k(this.models,s,0);this.length=this.models.length}else if(a.length){if(d)f=true;k(this.models,a,n==null?this.length:n);this.length=this.models.length}if(f)this.sort({silent:true});if(!e.silent){for(p=0;p<a.length;p++){if(n!=null)e.index=n+p;g=a[p];g.trigger("add",g,this,e)}if(f||y)this.trigger("sort",this,e);if(a.length||o.length)this.trigger("update",this,e)}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};z(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i.length?i:false},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3};o(x,S,"models");var I=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(I.prototype,l,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var o=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(o)return o.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var h=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(h)h.call(n.context,t,e,i)};var u=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,u,n);return u};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,l,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var M=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;M.started=false;i.extend(M.prototype,l,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(M.started)throw new Error("Backbone.history has already been started");M.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);M.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!M.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new M;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);var s=function(){this.constructor=n};s.prototype=r.prototype;n.prototype=new s;if(t)i.extend(n.prototype,t);n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=I.extend=M.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var z=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});
//# sourceMappingURL=backbone-min.map
// Backbone.Stickit v0.9.2, MIT Licensed
// Copyright (c) 2012-2015 The New York Times, CMS Group, Matthew DeLambo <delambo@gmail.com>

(function (factory) {

  // Set up Stickit appropriately for the environment. Start with AMD.
  if (typeof define === 'function' && define.amd)
    define(['underscore', 'backbone', 'exports'], factory);

  // Next for Node.js or CommonJS.
  else if (typeof exports === 'object')
    factory(require('underscore'), require('backbone'), exports);

  // Finally, as a browser global.
  else
    factory(_, Backbone, {});

}(function (_, Backbone, Stickit) {

  // Stickit Namespace
  // --------------------------

  // Export onto Backbone object
  Backbone.Stickit = Stickit;

  Stickit._handlers = [];

  Stickit.addHandler = function(handlers) {
    // Fill-in default values.
    handlers = _.map(_.flatten([handlers]), function(handler) {
      return _.defaults({}, handler, {
        updateModel: true,
        updateView: true,
        updateMethod: 'text'
      });
    });
    this._handlers = this._handlers.concat(handlers);
  };

  // Backbone.View Mixins
  // --------------------

  Stickit.ViewMixin = {

    // Collection of model event bindings.
    //   [{model,event,fn,config}, ...]
    _modelBindings: null,

    // Unbind the model and event bindings from `this._modelBindings` and
    // `this.$el`. If the optional `model` parameter is defined, then only
    // delete bindings for the given `model` and its corresponding view events.
    unstickit: function(model, bindingSelector) {

      // Support passing a bindings hash in place of bindingSelector.
      if (_.isObject(bindingSelector)) {
        _.each(bindingSelector, function(v, selector) {
          this.unstickit(model, selector);
        }, this);
        return;
      }

      var models = [], destroyFns = [];
      this._modelBindings = _.reject(this._modelBindings, function(binding) {
        if (model && binding.model !== model) return;
        if (bindingSelector && binding.config.selector != bindingSelector) return;

        binding.model.off(binding.event, binding.fn);
        destroyFns.push(binding.config._destroy);
        models.push(binding.model);
        return true;
      });

      // Trigger an event for each model that was unbound.
      _.invoke(_.uniq(models), 'trigger', 'stickit:unstuck', this.cid);

      // Call `_destroy` on a unique list of the binding callbacks.
      _.each(_.uniq(destroyFns), function(fn) { fn.call(this); }, this);

      this.$el.off('.stickit' + (model ? '.' + model.cid : ''), bindingSelector);
    },

    // Initilize Stickit bindings for the view. Subsequent binding additions
    // can either call `stickit` with the new bindings, or add them directly
    // with `addBinding`. Both arguments to `stickit` are optional.
    stickit: function(optionalModel, optionalBindingsConfig) {
      var model = optionalModel || this.model,
          bindings = optionalBindingsConfig || _.result(this, "bindings") || {};

      this._modelBindings || (this._modelBindings = []);

      // Add bindings in bulk using `addBinding`.
      this.addBinding(model, bindings);

      // Wrap `view.remove` to unbind stickit model and dom events.
      var remove = this.remove;
      if (!remove.stickitWrapped) {
        this.remove = function() {
          var ret = this;
          this.unstickit();
          if (remove) ret = remove.apply(this, arguments);
          return ret;
        };
      }
      this.remove.stickitWrapped = true;
      return this;
    },

    // Add a single Stickit binding or a hash of bindings to the model. If
    // `optionalModel` is ommitted, will default to the view's `model` property.
    addBinding: function(optionalModel, selector, binding) {
      var model = optionalModel || this.model,
          namespace = '.stickit.' + model.cid;

      binding = binding || {};

      // Support jQuery-style {key: val} event maps.
      if (_.isObject(selector)) {
        var bindings = selector;
        _.each(bindings, function(val, key) {
          this.addBinding(model, key, val);
        }, this);
        return;
      }

      // Special case the ':el' selector to use the view's this.$el.
      var $el = selector === ':el' ? this.$el : this.$(selector);

      // Clear any previous matching bindings.
      this.unstickit(model, selector);

      // Fail fast if the selector didn't match an element.
      if (!$el.length) return;

      // Allow shorthand setting of model attributes - `'selector':'observe'`.
      if (_.isString(binding)) binding = {observe: binding};

      // Handle case where `observe` is in the form of a function.
      if (_.isFunction(binding.observe)) binding.observe = binding.observe.call(this);

      // Find all matching Stickit handlers that could apply to this element
      // and store in a config object.
      var config = getConfiguration($el, binding);

      // The attribute we're observing in our config.
      var modelAttr = config.observe;

      // Store needed properties for later.
      config.selector = selector;
      config.view = this;

      // Create the model set options with a unique `bindId` so that we
      // can avoid double-binding in the `change:attribute` event handler.
      var bindId = config.bindId = _.uniqueId();

      // Add a reference to the view for handlers of stickitChange events
      var options = _.extend({stickitChange: config}, config.setOptions);

      // Add a `_destroy` callback to the configuration, in case `destroy`
      // is a named function and we need a unique function when unsticking.
      config._destroy = function() {
        applyViewFn.call(this, config.destroy, $el, model, config);
      };

      initializeAttributes($el, config, model, modelAttr);
      initializeVisible($el, config, model, modelAttr);
      initializeClasses($el, config, model, modelAttr);

      if (modelAttr) {
        // Setup one-way (input element -> model) bindings.
        _.each(config.events, function(type) {
          var eventName = type + namespace;
          var listener = function(event) {
            var val = applyViewFn.call(this, config.getVal, $el, event, config, slice.call(arguments, 1));

            // Don't update the model if false is returned from the `updateModel` configuration.
            var currentVal = evaluateBoolean(config.updateModel, val, event, config);
            if (currentVal) setAttr(model, modelAttr, val, options, config);
          };
          var sel = selector === ':el'? '' : selector;
          this.$el.on(eventName, sel, _.bind(listener, this));
        }, this);

        // Setup a `change:modelAttr` observer to keep the view element in sync.
        // `modelAttr` may be an array of attributes or a single string value.
        _.each(_.flatten([modelAttr]), function(attr) {
          observeModelEvent(model, 'change:' + attr, config, function(m, val, options) {
            var changeId = options && options.stickitChange && options.stickitChange.bindId;
            if (changeId !== bindId) {
              var currentVal = getAttr(model, modelAttr, config);
              updateViewBindEl($el, config, currentVal, model);
            }
          });
        });

        var currentVal = getAttr(model, modelAttr, config);
        updateViewBindEl($el, config, currentVal, model, true);
      }

      // After each binding is setup, call the `initialize` callback.
      applyViewFn.call(this, config.initialize, $el, model, config);
    }
  };

  _.extend(Backbone.View.prototype, Stickit.ViewMixin);

  // Helpers
  // -------

  var slice = [].slice;

  // Evaluates the given `path` (in object/dot-notation) relative to the given
  // `obj`. If the path is null/undefined, then the given `obj` is returned.
  var evaluatePath = function(obj, path) {
    var parts = (path || '').split('.');
    var result = _.reduce(parts, function(memo, i) { return memo[i]; }, obj);
    return result == null ? obj : result;
  };

  // If the given `fn` is a string, then view[fn] is called, otherwise it is
  // a function that should be executed.
  var applyViewFn = function(fn) {
    fn = _.isString(fn) ? evaluatePath(this, fn) : fn;
    if (fn) return (fn).apply(this, slice.call(arguments, 1));
  };

  // Given a function, string (view function reference), or a boolean
  // value, returns the truthy result. Any other types evaluate as false.
  // The first argument must be `reference` and the last must be `config`, but
  // middle arguments can be variadic.
  var evaluateBoolean = function(reference, val, config) {
    if (_.isBoolean(reference)) {
      return reference;
    } else if (_.isFunction(reference) || _.isString(reference)) {
      var view = _.last(arguments).view;
      return applyViewFn.apply(view, arguments);
    }
    return false;
  };

  // Setup a model event binding with the given function, and track the event
  // in the view's _modelBindings.
  var observeModelEvent = function(model, event, config, fn) {
    var view = config.view;
    model.on(event, fn, view);
    view._modelBindings.push({model:model, event:event, fn:fn, config:config});
  };

  // Prepares the given `val`ue and sets it into the `model`.
  var setAttr = function(model, attr, val, options, config) {
    var value = {}, view = config.view;
    if (config.onSet) {
      val = applyViewFn.call(view, config.onSet, val, config);
    }

    if (config.set) {
      applyViewFn.call(view, config.set, attr, val, options, config);
    } else {
      value[attr] = val;
      // If `observe` is defined as an array and `onSet` returned
      // an array, then map attributes to their values.
      if (_.isArray(attr) && _.isArray(val)) {
        value = _.reduce(attr, function(memo, attribute, index) {
          memo[attribute] = _.has(val, index) ? val[index] : null;
          return memo;
        }, {});
      }
      model.set(value, options);
    }
  };

  // Returns the given `attr`'s value from the `model`, escaping and
  // formatting if necessary. If `attr` is an array, then an array of
  // respective values will be returned.
  var getAttr = function(model, attr, config) {
    var view = config.view;
    var retrieveVal = function(field) {
      return model[config.escape ? 'escape' : 'get'](field);
    };
    var sanitizeVal = function(val) {
      return val == null ? '' : val;
    };
    var val = _.isArray(attr) ? _.map(attr, retrieveVal) : retrieveVal(attr);
    if (config.onGet) val = applyViewFn.call(view, config.onGet, val, config);
    return _.isArray(val) ? _.map(val, sanitizeVal) : sanitizeVal(val);
  };

  // Find handlers in `Backbone.Stickit._handlers` with selectors that match
  // `$el` and generate a configuration by mixing them in the order that they
  // were found with the given `binding`.
  var getConfiguration = Stickit.getConfiguration = function($el, binding) {
    var handlers = [{
      updateModel: false,
      updateMethod: 'text',
      update: function($el, val, m, opts) { if ($el[opts.updateMethod]) $el[opts.updateMethod](val); },
      getVal: function($el, e, opts) { return $el[opts.updateMethod](); }
    }];
    handlers = handlers.concat(_.filter(Stickit._handlers, function(handler) {
      return $el.is(handler.selector);
    }));
    handlers.push(binding);

    // Merge handlers into a single config object. Last props in wins.
    var config = _.extend.apply(_, handlers);

    // `updateView` is defaulted to false for configutrations with
    // `visible`; otherwise, `updateView` is defaulted to true.
    if (!_.has(config, 'updateView')) config.updateView = !config.visible;
    return config;
  };

  // Setup the attributes configuration - a list that maps an attribute or
  // property `name`, to an `observe`d model attribute, using an optional
  // `onGet` formatter.
  //
  //     attributes: [{
  //       name: 'attributeOrPropertyName',
  //       observe: 'modelAttrName'
  //       onGet: function(modelAttrVal, modelAttrName) { ... }
  //     }, ...]
  //
  var initializeAttributes = function($el, config, model, modelAttr) {
    var props = ['autofocus', 'autoplay', 'async', 'checked', 'controls',
      'defer', 'disabled', 'hidden', 'indeterminate', 'loop', 'multiple',
      'open', 'readonly', 'required', 'scoped', 'selected'];

    var view = config.view;

    _.each(config.attributes || [], function(attrConfig) {
      attrConfig = _.clone(attrConfig);
      attrConfig.view = view;

      var lastClass = '';
      var observed = attrConfig.observe || (attrConfig.observe = modelAttr);
      var updateAttr = function() {
        var updateType = _.contains(props, attrConfig.name) ? 'prop' : 'attr',
            val = getAttr(model, observed, attrConfig);

        // If it is a class then we need to remove the last value and add the new.
        if (attrConfig.name === 'class') {
          $el.removeClass(lastClass).addClass(val);
          lastClass = val;
        } else {
          $el[updateType](attrConfig.name, val);
        }
      };

      _.each(_.flatten([observed]), function(attr) {
        observeModelEvent(model, 'change:' + attr, config, updateAttr);
      });

      // Initialize the matched element's state.
      updateAttr();
    });
  };

  var initializeClasses = function($el, config, model, modelAttr) {
    _.each(config.classes || [], function(classConfig, name) {
      if (_.isString(classConfig)) classConfig = {observe: classConfig};
      classConfig.view = config.view;

      var observed = classConfig.observe;
      var updateClass = function() {
        var val = getAttr(model, observed, classConfig);
        $el.toggleClass(name, !!val);
      };

      _.each(_.flatten([observed]), function(attr) {
        observeModelEvent(model, 'change:' + attr, config, updateClass);
      });
      updateClass();
    });
  };

  // If `visible` is configured, then the view element will be shown/hidden
  // based on the truthiness of the modelattr's value or the result of the
  // given callback. If a `visibleFn` is also supplied, then that callback
  // will be executed to manually handle showing/hiding the view element.
  //
  //     observe: 'isRight',
  //     visible: true, // or function(val, options) {}
  //     visibleFn: function($el, isVisible, options) {} // optional handler
  //
  var initializeVisible = function($el, config, model, modelAttr) {
    if (config.visible == null) return;
    var view = config.view;

    var visibleCb = function() {
      var visible = config.visible,
          visibleFn = config.visibleFn,
          val = getAttr(model, modelAttr, config),
          isVisible = !!val;

      // If `visible` is a function then it should return a boolean result to show/hide.
      if (_.isFunction(visible) || _.isString(visible)) {
        isVisible = !!applyViewFn.call(view, visible, val, config);
      }

      // Either use the custom `visibleFn`, if provided, or execute the standard show/hide.
      if (visibleFn) {
        applyViewFn.call(view, visibleFn, $el, isVisible, config);
      } else {
        $el.toggle(isVisible);
      }
    };

    _.each(_.flatten([modelAttr]), function(attr) {
      observeModelEvent(model, 'change:' + attr, config, visibleCb);
    });

    visibleCb();
  };

  // Update the value of `$el` using the given configuration and trigger the
  // `afterUpdate` callback. This action may be blocked by `config.updateView`.
  //
  //     update: function($el, val, model, options) {},  // handler for updating
  //     updateView: true, // defaults to true
  //     afterUpdate: function($el, val, options) {} // optional callback
  //
  var updateViewBindEl = function($el, config, val, model, isInitializing) {
    var view = config.view;
    if (!evaluateBoolean(config.updateView, val, config)) return;
    applyViewFn.call(view, config.update, $el, val, model, config);
    if (!isInitializing) applyViewFn.call(view, config.afterUpdate, $el, val, config);
  };

  // Default Handlers
  // ----------------

  Stickit.addHandler([{
    selector: '[contenteditable]',
    updateMethod: 'html',
    events: ['input', 'change']
  }, {
    selector: 'input',
    events: ['propertychange', 'input', 'change'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) {
      return $el.val();
    }
  }, {
    selector: 'textarea',
    events: ['propertychange', 'input', 'change'],
    update: function($el, val) { $el.val(val); },
    getVal: function($el) { return $el.val(); }
  }, {
    selector: 'input[type="radio"]',
    events: ['change'],
    update: function($el, val) {
      $el.filter('[value="'+val+'"]').prop('checked', true);
    },
    getVal: function($el) {
      return $el.filter(':checked').val();
    }
  }, {
    selector: 'input[type="checkbox"]',
    events: ['change'],
    update: function($el, val, model, options) {
      if ($el.length > 1) {
        // There are multiple checkboxes so we need to go through them and check
        // any that have value attributes that match what's in the array of `val`s.
        val || (val = []);
        $el.each(function(i, el) {
          var checkbox = Backbone.$(el);
          var checked = _.contains(val, checkbox.val());
          checkbox.prop('checked', checked);
        });
      } else {
        var checked = _.isBoolean(val) ? val : val === $el.val();
        $el.prop('checked', checked);
      }
    },
    getVal: function($el) {
      var val;
      if ($el.length > 1) {
        val = _.reduce($el, function(memo, el) {
          var checkbox = Backbone.$(el);
          if (checkbox.prop('checked')) memo.push(checkbox.val());
          return memo;
        }, []);
      } else {
        val = $el.prop('checked');
        // If the checkbox has a value attribute defined, then
        // use that value. Most browsers use "on" as a default.
        var boxval = $el.val();
        if (boxval !== 'on' && boxval != null) {
          val = val ? $el.val() : null;
        }
      }
      return val;
    }
  }, {
    selector: 'select',
    events: ['change'],
    update: function($el, val, model, options) {
      var optList,
        selectConfig = options.selectOptions,
        list = selectConfig && selectConfig.collection || undefined,
        isMultiple = $el.prop('multiple');

      // If there are no `selectOptions` then we assume that the `<select>`
      // is pre-rendered and that we need to generate the collection.
      if (!selectConfig) {
        selectConfig = {};
        var getList = function($el) {
          return $el.map(function(index, option) {
            // Retrieve the text and value of the option, preferring "stickit-bind-val"
            // data attribute over value property.
            var dataVal = Backbone.$(option).data('stickit-bind-val');
            return {
              value: dataVal !== undefined ? dataVal : option.value,
              label: option.text
            };
          }).get();
        };
        if ($el.find('optgroup').length) {
          list = {opt_labels:[]};
          // Search for options without optgroup
          if ($el.find('> option').length) {
            list.opt_labels.push(undefined);
            _.each($el.find('> option'), function(el) {
              list[undefined] = getList(Backbone.$(el));
            });
          }
          _.each($el.find('optgroup'), function(el) {
            var label = Backbone.$(el).attr('label');
            list.opt_labels.push(label);
            list[label] = getList(Backbone.$(el).find('option'));
          });
        } else {
          list = getList($el.find('option'));
        }
      }

      // Fill in default label and path values.
      selectConfig.valuePath = selectConfig.valuePath || 'value';
      selectConfig.labelPath = selectConfig.labelPath || 'label';
      selectConfig.disabledPath = selectConfig.disabledPath || 'disabled';

      var addSelectOptions = function(optList, $el, fieldVal) {
        _.each(optList, function(obj) {
          var option = Backbone.$('<option/>'), optionVal = obj;

          var fillOption = function(text, val, disabled) {
            option.text(text);
            optionVal = val;
            // Save the option value as data so that we can reference it later.
            option.data('stickit-bind-val', optionVal);
            if (!_.isArray(optionVal) && !_.isObject(optionVal)) option.val(optionVal);

            if (disabled === true) option.prop('disabled', 'disabled');
          };

          var text, val, disabled;
          if (obj === '__default__') {
            text = fieldVal.label,
            val = fieldVal.value,
            disabled = fieldVal.disabled;
          } else {
            text = evaluatePath(obj, selectConfig.labelPath),
            val = evaluatePath(obj, selectConfig.valuePath),
            disabled = evaluatePath(obj, selectConfig.disabledPath);
          }
          fillOption(text, val, disabled);

          // Determine if this option is selected.
          var isSelected = function() {
            if (!isMultiple && optionVal != null && fieldVal != null && optionVal === fieldVal) {
              return true;
            } else if (_.isObject(fieldVal) && _.isEqual(optionVal, fieldVal)) {
              return true;
            }
            return false;
          };

          if (isSelected()) {
            option.prop('selected', true);
          } else if (isMultiple && _.isArray(fieldVal)) {
            _.each(fieldVal, function(val) {
              if (_.isObject(val)) val = evaluatePath(val, selectConfig.valuePath);
              if (val === optionVal || (_.isObject(val) && _.isEqual(optionVal, val)))
                option.prop('selected', true);
            });
          }

          $el.append(option);
        });
      };

      $el.find('*').remove();

      // The `list` configuration is a function that returns the options list or a string
      // which represents the path to the list relative to `window` or the view/`this`.
      if (_.isString(list)) {
        var context = window;
        if (list.indexOf('this.') === 0) context = this;
        list = list.replace(/^[a-z]*\.(.+)$/, '$1');
        optList = evaluatePath(context, list);
      } else if (_.isFunction(list)) {
        optList = applyViewFn.call(this, list, $el, options);
      } else {
        optList = list;
      }

      // Support Backbone.Collection and deserialize.
      if (optList instanceof Backbone.Collection) {
        var collection = optList;
        var refreshSelectOptions = function() {
          var currentVal = getAttr(model, options.observe, options);
          applyViewFn.call(this, options.update, $el, currentVal, model, options);
        };
        // We need to call this function after unstickit and after an update so we don't end up
        // with multiple listeners doing the same thing
        var removeCollectionListeners = function() {
          collection.off('add remove reset sort', refreshSelectOptions);
        };
        var removeAllListeners = function() {
          removeCollectionListeners();
          collection.off('stickit:selectRefresh');
          model.off('stickit:selectRefresh');
        };
        // Remove previously set event listeners by triggering a custom event
        collection.trigger('stickit:selectRefresh');
        collection.once('stickit:selectRefresh', removeCollectionListeners, this);

        // Listen to the collection and trigger an update of the select options
        collection.on('add remove reset sort', refreshSelectOptions, this);

        // Remove the previous model event listener
        model.trigger('stickit:selectRefresh');
        model.once('stickit:selectRefresh', function() {
          model.off('stickit:unstuck', removeAllListeners);
        });
        // Remove collection event listeners once this binding is unstuck
        model.once('stickit:unstuck', removeAllListeners, this);
        optList = optList.toJSON();
      }

      if (selectConfig.defaultOption) {
        var option = _.isFunction(selectConfig.defaultOption) ?
          selectConfig.defaultOption.call(this, $el, options) :
          selectConfig.defaultOption;
        addSelectOptions(["__default__"], $el, option);
      }

      if (_.isArray(optList)) {
        addSelectOptions(optList, $el, val);
      } else if (optList.opt_labels) {
        // To define a select with optgroups, format selectOptions.collection as an object
        // with an 'opt_labels' property, as in the following:
        //
        //     {
        //       'opt_labels': ['Looney Tunes', 'Three Stooges'],
        //       'Looney Tunes': [{id: 1, name: 'Bugs Bunny'}, {id: 2, name: 'Donald Duck'}],
        //       'Three Stooges': [{id: 3, name : 'moe'}, {id: 4, name : 'larry'}, {id: 5, name : 'curly'}]
        //     }
        //
        _.each(optList.opt_labels, function(label) {
          var $group = Backbone.$('<optgroup/>').attr('label', label);
          addSelectOptions(optList[label], $group, val);
          $el.append($group);
        });
        // With no 'opt_labels' parameter, the object is assumed to be a simple value-label map.
        // Pass a selectOptions.comparator to override the default order of alphabetical by label.
      } else {
        var opts = [], opt;
        for (var i in optList) {
          opt = {};
          opt[selectConfig.valuePath] = i;
          opt[selectConfig.labelPath] = optList[i];
          opts.push(opt);
        }
        opts = _.sortBy(opts, selectConfig.comparator || selectConfig.labelPath);
        addSelectOptions(opts, $el, val);
      }
    },
    getVal: function($el) {
      var selected = $el.find('option:selected');

      if ($el.prop('multiple')) {
        return _.map(selected, function(el) {
          return Backbone.$(el).data('stickit-bind-val');
        });
      } else {
        return selected.data('stickit-bind-val');
      }
    }
  }]);

  return Stickit;

}));

// MarionetteJS (Backbone.Marionette)
// ----------------------------------
// v2.4.3
//
// Copyright (c)2015 Derick Bailey, Muted Solutions, LLC.
// Distributed under MIT license
//
// http://marionettejs.com


/*!
 * Includes BabySitter
 * https://github.com/marionettejs/backbone.babysitter/
 *
 * Includes Wreqr
 * https://github.com/marionettejs/backbone.wreqr/
 */


(function(e,t){if("function"==typeof define&&define.amd)define(["backbone","underscore"],function(i,n){return e.Marionette=e.Mn=t(e,i,n)});else if("undefined"!=typeof exports){var i=require("backbone"),n=require("underscore");module.exports=t(e,i,n)}else e.Marionette=e.Mn=t(e,e.Backbone,e._)})(this,function(e,t,i){"use strict";(function(e,t){var i=e.ChildViewContainer;return e.ChildViewContainer=function(e,t){var i=function(e){this._views={},this._indexByModel={},this._indexByCustom={},this._updateLength(),t.each(e,this.add,this)};t.extend(i.prototype,{add:function(e,t){var i=e.cid;return this._views[i]=e,e.model&&(this._indexByModel[e.model.cid]=i),t&&(this._indexByCustom[t]=i),this._updateLength(),this},findByModel:function(e){return this.findByModelCid(e.cid)},findByModelCid:function(e){var t=this._indexByModel[e];return this.findByCid(t)},findByCustom:function(e){var t=this._indexByCustom[e];return this.findByCid(t)},findByIndex:function(e){return t.values(this._views)[e]},findByCid:function(e){return this._views[e]},remove:function(e){var i=e.cid;return e.model&&delete this._indexByModel[e.model.cid],t.any(this._indexByCustom,function(e,t){return e===i?(delete this._indexByCustom[t],!0):void 0},this),delete this._views[i],this._updateLength(),this},call:function(e){this.apply(e,t.tail(arguments))},apply:function(e,i){t.each(this._views,function(n){t.isFunction(n[e])&&n[e].apply(n,i||[])})},_updateLength:function(){this.length=t.size(this._views)}});var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck","reduce"];return t.each(n,function(e){i.prototype[e]=function(){var i=t.values(this._views),n=[i].concat(t.toArray(arguments));return t[e].apply(t,n)}}),i}(e,t),e.ChildViewContainer.VERSION="0.1.10",e.ChildViewContainer.noConflict=function(){return e.ChildViewContainer=i,this},e.ChildViewContainer})(t,i),function(e,t){var i=e.Wreqr,n=e.Wreqr={};return e.Wreqr.VERSION="1.3.5",e.Wreqr.noConflict=function(){return e.Wreqr=i,this},n.Handlers=function(e,t){var i=function(e){this.options=e,this._wreqrHandlers={},t.isFunction(this.initialize)&&this.initialize(e)};return i.extend=e.Model.extend,t.extend(i.prototype,e.Events,{setHandlers:function(e){t.each(e,function(e,i){var n=null;t.isObject(e)&&!t.isFunction(e)&&(n=e.context,e=e.callback),this.setHandler(i,e,n)},this)},setHandler:function(e,t,i){var n={callback:t,context:i};this._wreqrHandlers[e]=n,this.trigger("handler:add",e,t,i)},hasHandler:function(e){return!!this._wreqrHandlers[e]},getHandler:function(e){var t=this._wreqrHandlers[e];if(t)return function(){return t.callback.apply(t.context,arguments)}},removeHandler:function(e){delete this._wreqrHandlers[e]},removeAllHandlers:function(){this._wreqrHandlers={}}}),i}(e,t),n.CommandStorage=function(){var i=function(e){this.options=e,this._commands={},t.isFunction(this.initialize)&&this.initialize(e)};return t.extend(i.prototype,e.Events,{getCommands:function(e){var t=this._commands[e];return t||(t={command:e,instances:[]},this._commands[e]=t),t},addCommand:function(e,t){var i=this.getCommands(e);i.instances.push(t)},clearCommands:function(e){var t=this.getCommands(e);t.instances=[]}}),i}(),n.Commands=function(e,t){return e.Handlers.extend({storageType:e.CommandStorage,constructor:function(t){this.options=t||{},this._initializeStorage(this.options),this.on("handler:add",this._executeCommands,this),e.Handlers.prototype.constructor.apply(this,arguments)},execute:function(e){e=arguments[0];var i=t.rest(arguments);this.hasHandler(e)?this.getHandler(e).apply(this,i):this.storage.addCommand(e,i)},_executeCommands:function(e,i,n){var r=this.storage.getCommands(e);t.each(r.instances,function(e){i.apply(n,e)}),this.storage.clearCommands(e)},_initializeStorage:function(e){var i,n=e.storageType||this.storageType;i=t.isFunction(n)?new n:n,this.storage=i}})}(n,t),n.RequestResponse=function(e,t){return e.Handlers.extend({request:function(e){return this.hasHandler(e)?this.getHandler(e).apply(this,t.rest(arguments)):void 0}})}(n,t),n.EventAggregator=function(e,t){var i=function(){};return i.extend=e.Model.extend,t.extend(i.prototype,e.Events),i}(e,t),n.Channel=function(){var i=function(t){this.vent=new e.Wreqr.EventAggregator,this.reqres=new e.Wreqr.RequestResponse,this.commands=new e.Wreqr.Commands,this.channelName=t};return t.extend(i.prototype,{reset:function(){return this.vent.off(),this.vent.stopListening(),this.reqres.removeAllHandlers(),this.commands.removeAllHandlers(),this},connectEvents:function(e,t){return this._connect("vent",e,t),this},connectCommands:function(e,t){return this._connect("commands",e,t),this},connectRequests:function(e,t){return this._connect("reqres",e,t),this},_connect:function(e,i,n){if(i){n=n||this;var r="vent"===e?"on":"setHandler";t.each(i,function(i,s){this[e][r](s,t.bind(i,n))},this)}}}),i}(n),n.radio=function(e,t){var i=function(){this._channels={},this.vent={},this.commands={},this.reqres={},this._proxyMethods()};t.extend(i.prototype,{channel:function(e){if(!e)throw Error("Channel must receive a name");return this._getChannel(e)},_getChannel:function(t){var i=this._channels[t];return i||(i=new e.Channel(t),this._channels[t]=i),i},_proxyMethods:function(){t.each(["vent","commands","reqres"],function(e){t.each(n[e],function(t){this[e][t]=r(this,e,t)},this)},this)}});var n={vent:["on","off","trigger","once","stopListening","listenTo","listenToOnce"],commands:["execute","setHandler","setHandlers","removeHandler","removeAllHandlers"],reqres:["request","setHandler","setHandlers","removeHandler","removeAllHandlers"]},r=function(e,i,n){return function(r){var s=e._getChannel(r)[i];return s[n].apply(s,t.rest(arguments))}};return new i}(n,t),e.Wreqr}(t,i);var n=e.Marionette,r=e.Mn,s=t.Marionette={};s.VERSION="2.4.3",s.noConflict=function(){return e.Marionette=n,e.Mn=r,this},t.Marionette=s,s.Deferred=t.$.Deferred,s.extend=t.Model.extend,s.isNodeAttached=function(e){return t.$.contains(document.documentElement,e)},s.mergeOptions=function(e,t){e&&i.extend(this,i.pick(e,t))},s.getOption=function(e,t){return e&&t?e.options&&void 0!==e.options[t]?e.options[t]:e[t]:void 0},s.proxyGetOption=function(e){return s.getOption(this,e)},s._getValue=function(e,t,n){return i.isFunction(e)&&(e=n?e.apply(t,n):e.call(t)),e},s.normalizeMethods=function(e){return i.reduce(e,function(e,t,n){return i.isFunction(t)||(t=this[t]),t&&(e[n]=t),e},{},this)},s.normalizeUIString=function(e,t){return e.replace(/@ui\.[a-zA-Z_$0-9]*/g,function(e){return t[e.slice(4)]})},s.normalizeUIKeys=function(e,t){return i.reduce(e,function(e,i,n){var r=s.normalizeUIString(n,t);return e[r]=i,e},{})},s.normalizeUIValues=function(e,t,n){return i.each(e,function(r,o){i.isString(r)?e[o]=s.normalizeUIString(r,t):i.isObject(r)&&i.isArray(n)&&(i.extend(r,s.normalizeUIValues(i.pick(r,n),t)),i.each(n,function(e){var n=r[e];i.isString(n)&&(r[e]=s.normalizeUIString(n,t))}))}),e},s.actAsCollection=function(e,t){var n=["forEach","each","map","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","toArray","first","initial","rest","last","without","isEmpty","pluck"];i.each(n,function(n){e[n]=function(){var e=i.values(i.result(this,t)),r=[e].concat(i.toArray(arguments));return i[n].apply(i,r)}})};var o=s.deprecate=function(e,t){i.isObject(e)&&(e=e.prev+" is going to be removed in the future. "+"Please use "+e.next+" instead."+(e.url?" See: "+e.url:"")),void 0!==t&&t||o._cache[e]||(o._warn("Deprecation warning: "+e),o._cache[e]=!0)};o._warn="undefined"!=typeof console&&(console.warn||console.log)||function(){},o._cache={},s._triggerMethod=function(){function e(e,t,i){return i.toUpperCase()}var t=/(^|:)(\w)/gi;return function(n,r,s){var o=3>arguments.length;o&&(s=r,r=s[0]);var h,a="on"+r.replace(t,e),d=n[a];return i.isFunction(d)&&(h=d.apply(n,o?i.rest(s):s)),i.isFunction(n.trigger)&&(o+s.length>1?n.trigger.apply(n,o?s:[r].concat(i.drop(s,0))):n.trigger(r)),h}}(),s.triggerMethod=function(){return s._triggerMethod(this,arguments)},s.triggerMethodOn=function(e){var t=i.isFunction(e.triggerMethod)?e.triggerMethod:s.triggerMethod;return t.apply(e,i.rest(arguments))},s.MonitorDOMRefresh=function(e){function t(){e._isShown=!0,n()}function i(){e._isRendered=!0,n()}function n(){e._isShown&&e._isRendered&&s.isNodeAttached(e.el)&&s.triggerMethodOn(e,"dom:refresh",e)}e._isDomRefreshMonitored||(e._isDomRefreshMonitored=!0,e.on({show:t,render:i}))},function(e){function t(t,n,r,s){var o=s.split(/\s+/);i.each(o,function(i){var s=t[i];if(!s)throw new e.Error('Method "'+i+'" was configured as an event handler, but does not exist.');t.listenTo(n,r,s)})}function n(e,t,i,n){e.listenTo(t,i,n)}function r(e,t,n,r){var s=r.split(/\s+/);i.each(s,function(i){var r=e[i];e.stopListening(t,n,r)})}function s(e,t,i,n){e.stopListening(t,i,n)}function o(t,n,r,s,o){if(n&&r){if(!i.isObject(r))throw new e.Error({message:"Bindings must be an object or function.",url:"marionette.functions.html#marionettebindentityevents"});r=e._getValue(r,t),i.each(r,function(e,r){i.isFunction(e)?s(t,n,r,e):o(t,n,r,e)})}}e.bindEntityEvents=function(e,i,r){o(e,i,r,n,t)},e.unbindEntityEvents=function(e,t,i){o(e,t,i,s,r)},e.proxyBindEntityEvents=function(t,i){return e.bindEntityEvents(this,t,i)},e.proxyUnbindEntityEvents=function(t,i){return e.unbindEntityEvents(this,t,i)}}(s);var h=["description","fileName","lineNumber","name","message","number"];return s.Error=s.extend.call(Error,{urlRoot:"http://marionettejs.com/docs/v"+s.VERSION+"/",constructor:function(e,t){i.isObject(e)?(t=e,e=t.message):t||(t={});var n=Error.call(this,e);i.extend(this,i.pick(n,h),i.pick(t,h)),this.captureStackTrace(),t.url&&(this.url=this.urlRoot+t.url)},captureStackTrace:function(){Error.captureStackTrace&&Error.captureStackTrace(this,s.Error)},toString:function(){return this.name+": "+this.message+(this.url?" See: "+this.url:"")}}),s.Error.extend=s.extend,s.Callbacks=function(){this._deferred=s.Deferred(),this._callbacks=[]},i.extend(s.Callbacks.prototype,{add:function(e,t){var n=i.result(this._deferred,"promise");this._callbacks.push({cb:e,ctx:t}),n.then(function(i){t&&(i.context=t),e.call(i.context,i.options)})},run:function(e,t){this._deferred.resolve({options:e,context:t})},reset:function(){var e=this._callbacks;this._deferred=s.Deferred(),this._callbacks=[],i.each(e,function(e){this.add(e.cb,e.ctx)},this)}}),s.Controller=function(e){this.options=e||{},i.isFunction(this.initialize)&&this.initialize(this.options)},s.Controller.extend=s.extend,i.extend(s.Controller.prototype,t.Events,{destroy:function(){return s._triggerMethod(this,"before:destroy",arguments),s._triggerMethod(this,"destroy",arguments),this.stopListening(),this.off(),this},triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption}),s.Object=function(e){this.options=i.extend({},i.result(this,"options"),e),this.initialize.apply(this,arguments)},s.Object.extend=s.extend,i.extend(s.Object.prototype,t.Events,{initialize:function(){},destroy:function(){return this.triggerMethod("before:destroy"),this.triggerMethod("destroy"),this.stopListening(),this},triggerMethod:s.triggerMethod,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Region=s.Object.extend({constructor:function(e){if(this.options=e||{},this.el=this.getOption("el"),this.el=this.el instanceof t.$?this.el[0]:this.el,!this.el)throw new s.Error({name:"NoElError",message:'An "el" must be specified for a region.'});this.$el=this.getEl(this.el),s.Object.call(this,e)},show:function(e,t){if(this._ensureElement()){this._ensureViewIsIntact(e),s.MonitorDOMRefresh(e);var n=t||{},r=e!==this.currentView,o=!!n.preventDestroy,h=!!n.forceShow,a=!!this.currentView,d=r&&!o,l=r||h;if(a&&this.triggerMethod("before:swapOut",this.currentView,this,t),this.currentView&&delete this.currentView._parent,d?this.empty():a&&l&&this.currentView.off("destroy",this.empty,this),l){e.once("destroy",this.empty,this),this._renderView(e),e._parent=this,a&&this.triggerMethod("before:swap",e,this,t),this.triggerMethod("before:show",e,this,t),s.triggerMethodOn(e,"before:show",e,this,t),a&&this.triggerMethod("swapOut",this.currentView,this,t);var c=s.isNodeAttached(this.el),u=[],g=i.extend({triggerBeforeAttach:this.triggerBeforeAttach,triggerAttach:this.triggerAttach},n);return c&&g.triggerBeforeAttach&&(u=this._displayedViews(e),this._triggerAttach(u,"before:")),this.attachHtml(e),this.currentView=e,c&&g.triggerAttach&&(u=this._displayedViews(e),this._triggerAttach(u)),a&&this.triggerMethod("swap",e,this,t),this.triggerMethod("show",e,this,t),s.triggerMethodOn(e,"show",e,this,t),this}return this}},triggerBeforeAttach:!0,triggerAttach:!0,_triggerAttach:function(e,t){var n=(t||"")+"attach";i.each(e,function(e){s.triggerMethodOn(e,n,e,this)},this)},_displayedViews:function(e){return i.union([e],i.result(e,"_getNestedViews")||[])},_renderView:function(e){e.supportsRenderLifecycle||s.triggerMethodOn(e,"before:render",e),e.render(),e.supportsRenderLifecycle||s.triggerMethodOn(e,"render",e)},_ensureElement:function(){if(i.isObject(this.el)||(this.$el=this.getEl(this.el),this.el=this.$el[0]),!this.$el||0===this.$el.length){if(this.getOption("allowMissingEl"))return!1;throw new s.Error('An "el" '+this.$el.selector+" must exist in DOM")}return!0},_ensureViewIsIntact:function(e){if(!e)throw new s.Error({name:"ViewNotValid",message:"The view passed is undefined and therefore invalid. You must pass a view instance to show."});if(e.isDestroyed)throw new s.Error({name:"ViewDestroyedError",message:'View (cid: "'+e.cid+'") has already been destroyed and cannot be used.'})},getEl:function(e){return t.$(e,s._getValue(this.options.parentEl,this))},attachHtml:function(e){this.$el.contents().detach(),this.el.appendChild(e.el)},empty:function(e){var t=this.currentView,i=e||{},n=!!i.preventDestroy;return t?(t.off("destroy",this.empty,this),this.triggerMethod("before:empty",t),n||this._destroyView(),this.triggerMethod("empty",t),delete this.currentView,n&&this.$el.contents().detach(),this):void 0},_destroyView:function(){var e=this.currentView;e.isDestroyed||(e.supportsDestroyLifecycle||s.triggerMethodOn(e,"before:destroy",e),e.destroy?e.destroy():(e.remove(),e.isDestroyed=!0),e.supportsDestroyLifecycle||s.triggerMethodOn(e,"destroy",e))},attachView:function(e){return this.currentView&&delete this.currentView._parent,e._parent=this,this.currentView=e,this},hasView:function(){return!!this.currentView},reset:function(){return this.empty(),this.$el&&(this.el=this.$el.selector),delete this.$el,this}},{buildRegion:function(e,t){if(i.isString(e))return this._buildRegionFromSelector(e,t);if(e.selector||e.el||e.regionClass)return this._buildRegionFromObject(e,t);if(i.isFunction(e))return this._buildRegionFromRegionClass(e);throw new s.Error({message:"Improper region configuration type.",url:"marionette.region.html#region-configuration-types"})},_buildRegionFromSelector:function(e,t){return new t({el:e})},_buildRegionFromObject:function(e,t){var n=e.regionClass||t,r=i.omit(e,"selector","regionClass");return e.selector&&!r.el&&(r.el=e.selector),new n(r)},_buildRegionFromRegionClass:function(e){return new e}}),s.RegionManager=s.Controller.extend({constructor:function(e){this._regions={},this.length=0,s.Controller.call(this,e),this.addRegions(this.getOption("regions"))},addRegions:function(e,t){return e=s._getValue(e,this,arguments),i.reduce(e,function(e,n,r){return i.isString(n)&&(n={selector:n}),n.selector&&(n=i.defaults({},n,t)),e[r]=this.addRegion(r,n),e},{},this)},addRegion:function(e,t){var i;return i=t instanceof s.Region?t:s.Region.buildRegion(t,s.Region),this.triggerMethod("before:add:region",e,i),i._parent=this,this._store(e,i),this.triggerMethod("add:region",e,i),i},get:function(e){return this._regions[e]},getRegions:function(){return i.clone(this._regions)},removeRegion:function(e){var t=this._regions[e];return this._remove(e,t),t},removeRegions:function(){var e=this.getRegions();return i.each(this._regions,function(e,t){this._remove(t,e)},this),e},emptyRegions:function(){var e=this.getRegions();return i.invoke(e,"empty"),e},destroy:function(){return this.removeRegions(),s.Controller.prototype.destroy.apply(this,arguments)},_store:function(e,t){this._regions[e]||this.length++,this._regions[e]=t},_remove:function(e,t){this.triggerMethod("before:remove:region",e,t),t.empty(),t.stopListening(),delete t._parent,delete this._regions[e],this.length--,this.triggerMethod("remove:region",e,t)}}),s.actAsCollection(s.RegionManager.prototype,"_regions"),s.TemplateCache=function(e){this.templateId=e},i.extend(s.TemplateCache,{templateCaches:{},get:function(e,t){var i=this.templateCaches[e];return i||(i=new s.TemplateCache(e),this.templateCaches[e]=i),i.load(t)},clear:function(){var e,t=i.toArray(arguments),n=t.length;if(n>0)for(e=0;n>e;e++)delete this.templateCaches[t[e]];else this.templateCaches={}}}),i.extend(s.TemplateCache.prototype,{load:function(e){if(this.compiledTemplate)return this.compiledTemplate;var t=this.loadTemplate(this.templateId,e);return this.compiledTemplate=this.compileTemplate(t,e),this.compiledTemplate},loadTemplate:function(e){var i=t.$(e);if(!i.length)throw new s.Error({name:"NoTemplateError",message:'Could not find template: "'+e+'"'});return i.html()},compileTemplate:function(e,t){return i.template(e,t)}}),s.Renderer={render:function(e,t){if(!e)throw new s.Error({name:"TemplateNotFoundError",message:"Cannot render the template since its false, null or undefined."});var n=i.isFunction(e)?e:s.TemplateCache.get(e);return n(t)}},s.View=t.View.extend({isDestroyed:!1,supportsRenderLifecycle:!0,supportsDestroyLifecycle:!0,constructor:function(e){this.render=i.bind(this.render,this),e=s._getValue(e,this),this.options=i.extend({},i.result(this,"options"),e),this._behaviors=s.Behaviors(this),t.View.call(this,this.options),s.MonitorDOMRefresh(this)},getTemplate:function(){return this.getOption("template")},serializeModel:function(e){return e.toJSON.apply(e,i.rest(arguments))},mixinTemplateHelpers:function(e){e=e||{};var t=this.getOption("templateHelpers");return t=s._getValue(t,this),i.extend(e,t)},normalizeUIKeys:function(e){var t=i.result(this,"_uiBindings");return s.normalizeUIKeys(e,t||i.result(this,"ui"))},normalizeUIValues:function(e,t){var n=i.result(this,"ui"),r=i.result(this,"_uiBindings");return s.normalizeUIValues(e,r||n,t)},configureTriggers:function(){if(this.triggers){var e=this.normalizeUIKeys(i.result(this,"triggers"));return i.reduce(e,function(e,t,i){return e[i]=this._buildViewTrigger(t),e},{},this)}},delegateEvents:function(e){return this._delegateDOMEvents(e),this.bindEntityEvents(this.model,this.getOption("modelEvents")),this.bindEntityEvents(this.collection,this.getOption("collectionEvents")),i.each(this._behaviors,function(e){e.bindEntityEvents(this.model,e.getOption("modelEvents")),e.bindEntityEvents(this.collection,e.getOption("collectionEvents"))},this),this},_delegateDOMEvents:function(e){var n=s._getValue(e||this.events,this);n=this.normalizeUIKeys(n),i.isUndefined(e)&&(this.events=n);var r={},o=i.result(this,"behaviorEvents")||{},h=this.configureTriggers(),a=i.result(this,"behaviorTriggers")||{};i.extend(r,o,n,h,a),t.View.prototype.delegateEvents.call(this,r)},undelegateEvents:function(){return t.View.prototype.undelegateEvents.apply(this,arguments),this.unbindEntityEvents(this.model,this.getOption("modelEvents")),this.unbindEntityEvents(this.collection,this.getOption("collectionEvents")),i.each(this._behaviors,function(e){e.unbindEntityEvents(this.model,e.getOption("modelEvents")),e.unbindEntityEvents(this.collection,e.getOption("collectionEvents"))},this),this},_ensureViewIsIntact:function(){if(this.isDestroyed)throw new s.Error({name:"ViewDestroyedError",message:'View (cid: "'+this.cid+'") has already been destroyed and cannot be used.'})},destroy:function(){if(this.isDestroyed)return this;var e=i.toArray(arguments);return this.triggerMethod.apply(this,["before:destroy"].concat(e)),this.isDestroyed=!0,this.triggerMethod.apply(this,["destroy"].concat(e)),this.unbindUIElements(),this.isRendered=!1,this.remove(),i.invoke(this._behaviors,"destroy",e),this},bindUIElements:function(){this._bindUIElements(),i.invoke(this._behaviors,this._bindUIElements)},_bindUIElements:function(){if(this.ui){this._uiBindings||(this._uiBindings=this.ui);var e=i.result(this,"_uiBindings");this.ui={},i.each(e,function(e,t){this.ui[t]=this.$(e)},this)}},unbindUIElements:function(){this._unbindUIElements(),i.invoke(this._behaviors,this._unbindUIElements)},_unbindUIElements:function(){this.ui&&this._uiBindings&&(i.each(this.ui,function(e,t){delete this.ui[t]},this),this.ui=this._uiBindings,delete this._uiBindings)},_buildViewTrigger:function(e){var t=i.defaults({},e,{preventDefault:!0,stopPropagation:!0}),n=i.isObject(e)?t.event:e;return function(e){e&&(e.preventDefault&&t.preventDefault&&e.preventDefault(),e.stopPropagation&&t.stopPropagation&&e.stopPropagation());var i={view:this,model:this.model,collection:this.collection};this.triggerMethod(n,i)}},setElement:function(){var e=t.View.prototype.setElement.apply(this,arguments);return i.invoke(this._behaviors,"proxyViewProperties",this),e},triggerMethod:function(){var e=s._triggerMethod(this,arguments);return this._triggerEventOnBehaviors(arguments),this._triggerEventOnParentLayout(arguments[0],i.rest(arguments)),e},_triggerEventOnBehaviors:function(e){for(var t=s._triggerMethod,i=this._behaviors,n=0,r=i&&i.length;r>n;n++)t(i[n],e)},_triggerEventOnParentLayout:function(e,t){var n=this._parentLayoutView();if(n){var r=s.getOption(n,"childViewEventPrefix"),o=r+":"+e,h=[this].concat(t);s._triggerMethod(n,o,h);var a=s.getOption(n,"childEvents"),d=n.normalizeMethods(a);d&&i.isFunction(d[e])&&d[e].apply(n,h)}},_getImmediateChildren:function(){return[]},_getNestedViews:function(){var e=this._getImmediateChildren();return e.length?i.reduce(e,function(e,t){return t._getNestedViews?e.concat(t._getNestedViews()):e},e):e},_getAncestors:function(){for(var e=[],t=this._parent;t;)e.push(t),t=t._parent;return e},_parentLayoutView:function(){var e=this._getAncestors();return i.find(e,function(e){return e instanceof s.LayoutView})},normalizeMethods:s.normalizeMethods,mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.ItemView=s.View.extend({constructor:function(){s.View.apply(this,arguments)},serializeData:function(){if(!this.model&&!this.collection)return{};var e=[this.model||this.collection];return arguments.length&&e.push.apply(e,arguments),this.model?this.serializeModel.apply(this,e):{items:this.serializeCollection.apply(this,e)}},serializeCollection:function(e){return e.toJSON.apply(e,i.rest(arguments))},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderTemplate(),this.isRendered=!0,this.bindUIElements(),this.triggerMethod("render",this),this},_renderTemplate:function(){var e=this.getTemplate();if(e!==!1){if(!e)throw new s.Error({name:"UndefinedTemplateError",message:"Cannot render the template since it is null or undefined."});var t=this.mixinTemplateHelpers(this.serializeData()),i=s.Renderer.render(e,t,this);return this.attachElContent(i),this}},attachElContent:function(e){return this.$el.html(e),this}}),s.CollectionView=s.View.extend({childViewEventPrefix:"childview",sort:!0,constructor:function(){this.once("render",this._initialEvents),this._initChildViewStorage(),s.View.apply(this,arguments),this.on({"before:show":this._onBeforeShowCalled,show:this._onShowCalled,"before:attach":this._onBeforeAttachCalled,attach:this._onAttachCalled}),this.initRenderBuffer()},initRenderBuffer:function(){this._bufferedChildren=[]},startBuffering:function(){this.initRenderBuffer(),this.isBuffering=!0},endBuffering:function(){var e,t=this._isShown&&s.isNodeAttached(this.el);this.isBuffering=!1,this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"before:show"),t&&this._triggerBeforeAttach&&(e=this._getNestedViews(),this._triggerMethodMany(e,this,"before:attach")),this.attachBuffer(this,this._createBuffer()),t&&this._triggerAttach&&(e=this._getNestedViews(),this._triggerMethodMany(e,this,"attach")),this._isShown&&this._triggerMethodMany(this._bufferedChildren,this,"show"),this.initRenderBuffer()},_triggerMethodMany:function(e,t,n){var r=i.drop(arguments,3);i.each(e,function(e){s.triggerMethodOn.apply(e,[e,n,e,t].concat(r))})},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this.render),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},_onCollectionAdd:function(e,t,n){var r=void 0!==n.at&&(n.index||t.indexOf(e));if((this.getOption("filter")||r===!1)&&(r=i.indexOf(this._filteredSortedModels(r),e)),this._shouldAddChild(e,r)){this.destroyEmptyView();var s=this.getChildView(e);this.addChild(e,s,r)}},_onCollectionRemove:function(e){var t=this.children.findByModel(e);this.removeChildView(t),this.checkEmpty()},_onBeforeShowCalled:function(){this._triggerBeforeAttach=this._triggerAttach=!1,this.children.each(function(e){s.triggerMethodOn(e,"before:show",e)})},_onShowCalled:function(){this.children.each(function(e){s.triggerMethodOn(e,"show",e)})},_onBeforeAttachCalled:function(){this._triggerBeforeAttach=!0},_onAttachCalled:function(){this._triggerAttach=!0},render:function(){return this._ensureViewIsIntact(),this.triggerMethod("before:render",this),this._renderChildren(),this.isRendered=!0,this.triggerMethod("render",this),this},reorder:function(){var e=this.children,t=this._filteredSortedModels(),n=i.find(t,function(t){return!e.findByModel(t)});if(n)this.render();else{var r=i.map(t,function(t,i){var n=e.findByModel(t);return n._index=i,n.el});this.triggerMethod("before:reorder"),this._appendReorderedChildren(r),this.triggerMethod("reorder")}},resortView:function(){s.getOption(this,"reorderOnSort")?this.reorder():this.render()},_sortViews:function(){var e=this._filteredSortedModels(),t=i.find(e,function(e,t){var i=this.children.findByModel(e);return!i||i._index!==t},this);t&&this.resortView()},_emptyViewIndex:-1,_appendReorderedChildren:function(e){this.$el.append(e)},_renderChildren:function(){this.destroyEmptyView(),this.destroyChildren({checkEmpty:!1}),this.isEmpty(this.collection)?this.showEmptyView():(this.triggerMethod("before:render:collection",this),this.startBuffering(),this.showCollection(),this.endBuffering(),this.triggerMethod("render:collection",this),this.children.isEmpty()&&this.getOption("filter")&&this.showEmptyView())},showCollection:function(){var e,t=this._filteredSortedModels();i.each(t,function(t,i){e=this.getChildView(t),this.addChild(t,e,i)},this)},_filteredSortedModels:function(e){var t=this.getViewComparator(),n=this.collection.models;if(e=Math.min(Math.max(e,0),n.length-1),t){var r;e&&(r=n[e],n=n.slice(0,e).concat(n.slice(e+1))),n=this._sortModelsBy(n,t),r&&n.splice(e,0,r)}return this.getOption("filter")&&(n=i.filter(n,function(e,t){return this._shouldAddChild(e,t)},this)),n},_sortModelsBy:function(e,t){return"string"==typeof t?i.sortBy(e,function(e){return e.get(t)},this):1===t.length?i.sortBy(e,t,this):e.sort(i.bind(t,this))},showEmptyView:function(){var e=this.getEmptyView();if(e&&!this._showingEmptyView){this.triggerMethod("before:render:empty"),this._showingEmptyView=!0;var i=new t.Model;this.addEmptyView(i,e),this.triggerMethod("render:empty")}},destroyEmptyView:function(){this._showingEmptyView&&(this.triggerMethod("before:remove:empty"),this.destroyChildren(),delete this._showingEmptyView,this.triggerMethod("remove:empty"))},getEmptyView:function(){return this.getOption("emptyView")},addEmptyView:function(e,t){var n,r=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el),o=this.getOption("emptyViewOptions")||this.getOption("childViewOptions");i.isFunction(o)&&(o=o.call(this,e,this._emptyViewIndex));var h=this.buildChildView(e,t,o);h._parent=this,this.proxyChildEvents(h),h.once("render",function(){this._isShown&&s.triggerMethodOn(h,"before:show",h),r&&this._triggerBeforeAttach&&(n=this._getViewAndNested(h),this._triggerMethodMany(n,this,"before:attach"))},this),this.children.add(h),this.renderChildView(h,this._emptyViewIndex),r&&this._triggerAttach&&(n=this._getViewAndNested(h),this._triggerMethodMany(n,this,"attach")),this._isShown&&s.triggerMethodOn(h,"show",h)},getChildView:function(){var e=this.getOption("childView");if(!e)throw new s.Error({name:"NoChildViewError",message:'A "childView" must be specified'});return e},addChild:function(e,t,i){var n=this.getOption("childViewOptions");n=s._getValue(n,this,[e,i]);var r=this.buildChildView(e,t,n);return this._updateIndices(r,!0,i),this.triggerMethod("before:add:child",r),this._addChildView(r,i),this.triggerMethod("add:child",r),r._parent=this,r},_updateIndices:function(e,t,i){this.getOption("sort")&&(t&&(e._index=i),this.children.each(function(i){i._index>=e._index&&(i._index+=t?1:-1)}))},_addChildView:function(e,t){var i,n=this._isShown&&!this.isBuffering&&s.isNodeAttached(this.el);this.proxyChildEvents(e),e.once("render",function(){this._isShown&&!this.isBuffering&&s.triggerMethodOn(e,"before:show",e),n&&this._triggerBeforeAttach&&(i=this._getViewAndNested(e),this._triggerMethodMany(i,this,"before:attach"))},this),this.children.add(e),this.renderChildView(e,t),n&&this._triggerAttach&&(i=this._getViewAndNested(e),this._triggerMethodMany(i,this,"attach")),this._isShown&&!this.isBuffering&&s.triggerMethodOn(e,"show",e)},renderChildView:function(e,t){return e.supportsRenderLifecycle||s.triggerMethodOn(e,"before:render",e),e.render(),e.supportsRenderLifecycle||s.triggerMethodOn(e,"render",e),this.attachHtml(this,e,t),e},buildChildView:function(e,t,n){var r=i.extend({model:e},n),o=new t(r);return s.MonitorDOMRefresh(o),o},removeChildView:function(e){return e?(this.triggerMethod("before:remove:child",e),e.supportsDestroyLifecycle||s.triggerMethodOn(e,"before:destroy",e),e.destroy?e.destroy():e.remove(),e.supportsDestroyLifecycle||s.triggerMethodOn(e,"destroy",e),delete e._parent,this.stopListening(e),this.children.remove(e),this.triggerMethod("remove:child",e),this._updateIndices(e,!1),e):e},isEmpty:function(){return!this.collection||0===this.collection.length},checkEmpty:function(){this.isEmpty(this.collection)&&this.showEmptyView()},attachBuffer:function(e,t){e.$el.append(t)},_createBuffer:function(){var e=document.createDocumentFragment();return i.each(this._bufferedChildren,function(t){e.appendChild(t.el)}),e},attachHtml:function(e,t,i){e.isBuffering?e._bufferedChildren.splice(i,0,t):e._insertBefore(t,i)||e._insertAfter(t)},_insertBefore:function(e,t){var i,n=this.getOption("sort")&&this.children.length-1>t;return n&&(i=this.children.find(function(e){return e._index===t+1})),i?(i.$el.before(e.el),!0):!1},_insertAfter:function(e){this.$el.append(e.el)},_initChildViewStorage:function(){this.children=new t.ChildViewContainer},destroy:function(){return this.isDestroyed?this:(this.triggerMethod("before:destroy:collection"),this.destroyChildren({checkEmpty:!1}),this.triggerMethod("destroy:collection"),s.View.prototype.destroy.apply(this,arguments))},destroyChildren:function(e){var t=e||{},n=!0,r=this.children.map(i.identity);return i.isUndefined(t.checkEmpty)||(n=t.checkEmpty),this.children.each(this.removeChildView,this),n&&this.checkEmpty(),r},_shouldAddChild:function(e,t){var n=this.getOption("filter");return!i.isFunction(n)||n.call(this,e,t,this.collection)},proxyChildEvents:function(e){var t=this.getOption("childViewEventPrefix");this.listenTo(e,"all",function(){var n=i.toArray(arguments),r=n[0],s=this.normalizeMethods(i.result(this,"childEvents"));n[0]=t+":"+r,n.splice(1,0,e),s!==void 0&&i.isFunction(s[r])&&s[r].apply(this,n.slice(1)),this.triggerMethod.apply(this,n)
})},_getImmediateChildren:function(){return i.values(this.children._views)},_getViewAndNested:function(e){return[e].concat(i.result(e,"_getNestedViews")||[])},getViewComparator:function(){return this.getOption("viewComparator")}}),s.CompositeView=s.CollectionView.extend({constructor:function(){s.CollectionView.apply(this,arguments)},_initialEvents:function(){this.collection&&(this.listenTo(this.collection,"add",this._onCollectionAdd),this.listenTo(this.collection,"remove",this._onCollectionRemove),this.listenTo(this.collection,"reset",this._renderChildren),this.getOption("sort")&&this.listenTo(this.collection,"sort",this._sortViews))},getChildView:function(){var e=this.getOption("childView")||this.constructor;return e},serializeData:function(){var e={};return this.model&&(e=i.partial(this.serializeModel,this.model).apply(this,arguments)),e},render:function(){return this._ensureViewIsIntact(),this._isRendering=!0,this.resetChildViewContainer(),this.triggerMethod("before:render",this),this._renderTemplate(),this._renderChildren(),this._isRendering=!1,this.isRendered=!0,this.triggerMethod("render",this),this},_renderChildren:function(){(this.isRendered||this._isRendering)&&s.CollectionView.prototype._renderChildren.call(this)},_renderTemplate:function(){var e={};e=this.serializeData(),e=this.mixinTemplateHelpers(e),this.triggerMethod("before:render:template");var t=this.getTemplate(),i=s.Renderer.render(t,e,this);this.attachElContent(i),this.bindUIElements(),this.triggerMethod("render:template")},attachElContent:function(e){return this.$el.html(e),this},attachBuffer:function(e,t){var i=this.getChildViewContainer(e);i.append(t)},_insertAfter:function(e){var t=this.getChildViewContainer(this,e);t.append(e.el)},_appendReorderedChildren:function(e){var t=this.getChildViewContainer(this);t.append(e)},getChildViewContainer:function(e){if(e.$childViewContainer)return e.$childViewContainer;var t,i=s.getOption(e,"childViewContainer");if(i){var n=s._getValue(i,e);if(t="@"===n.charAt(0)&&e.ui?e.ui[n.substr(4)]:e.$(n),0>=t.length)throw new s.Error({name:"ChildViewContainerMissingError",message:'The specified "childViewContainer" was not found: '+e.childViewContainer})}else t=e.$el;return e.$childViewContainer=t,t},resetChildViewContainer:function(){this.$childViewContainer&&(this.$childViewContainer=void 0)}}),s.LayoutView=s.ItemView.extend({regionClass:s.Region,options:{destroyImmediate:!1},childViewEventPrefix:"childview",constructor:function(e){e=e||{},this._firstRender=!0,this._initializeRegions(e),s.ItemView.call(this,e)},render:function(){return this._ensureViewIsIntact(),this._firstRender?this._firstRender=!1:this._reInitializeRegions(),s.ItemView.prototype.render.apply(this,arguments)},destroy:function(){return this.isDestroyed?this:(this.getOption("destroyImmediate")===!0&&this.$el.remove(),this.regionManager.destroy(),s.ItemView.prototype.destroy.apply(this,arguments))},showChildView:function(e,t){return this.getRegion(e).show(t)},getChildView:function(e){return this.getRegion(e).currentView},addRegion:function(e,t){var i={};return i[e]=t,this._buildRegions(i)[e]},addRegions:function(e){return this.regions=i.extend({},this.regions,e),this._buildRegions(e)},removeRegion:function(e){return delete this.regions[e],this.regionManager.removeRegion(e)},getRegion:function(e){return this.regionManager.get(e)},getRegions:function(){return this.regionManager.getRegions()},_buildRegions:function(e){var t={regionClass:this.getOption("regionClass"),parentEl:i.partial(i.result,this,"el")};return this.regionManager.addRegions(e,t)},_initializeRegions:function(e){var t;this._initRegionManager(),t=s._getValue(this.regions,this,[e])||{};var n=this.getOption.call(e,"regions");n=s._getValue(n,this,[e]),i.extend(t,n),t=this.normalizeUIValues(t,["selector","el"]),this.addRegions(t)},_reInitializeRegions:function(){this.regionManager.invoke("reset")},getRegionManager:function(){return new s.RegionManager},_initRegionManager:function(){this.regionManager=this.getRegionManager(),this.regionManager._parent=this,this.listenTo(this.regionManager,"before:add:region",function(e){this.triggerMethod("before:add:region",e)}),this.listenTo(this.regionManager,"add:region",function(e,t){this[e]=t,this.triggerMethod("add:region",e,t)}),this.listenTo(this.regionManager,"before:remove:region",function(e){this.triggerMethod("before:remove:region",e)}),this.listenTo(this.regionManager,"remove:region",function(e,t){delete this[e],this.triggerMethod("remove:region",e,t)})},_getImmediateChildren:function(){return i.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()}}),s.Behavior=s.Object.extend({constructor:function(e,t){this.view=t,this.defaults=i.result(this,"defaults")||{},this.options=i.extend({},this.defaults,e),this.ui=i.extend({},i.result(t,"ui"),i.result(this,"ui")),s.Object.apply(this,arguments)},$:function(){return this.view.$.apply(this.view,arguments)},destroy:function(){return this.stopListening(),this},proxyViewProperties:function(e){this.$el=e.$el,this.el=e.el}}),s.Behaviors=function(e,t){function i(e,n){return t.isObject(e.behaviors)?(n=i.parseBehaviors(e,n||t.result(e,"behaviors")),i.wrap(e,n,t.keys(o)),n):{}}function n(e,t){this._view=e,this._behaviors=t,this._triggers={}}function r(e){return e._uiBindings||e.ui}var s=/^(\S+)\s*(.*)$/,o={behaviorTriggers:function(e,t){var i=new n(this,t);return i.buildBehaviorTriggers()},behaviorEvents:function(i,n){var o={};return t.each(n,function(i,n){var h={},a=t.clone(t.result(i,"events"))||{};a=e.normalizeUIKeys(a,r(i));var d=0;t.each(a,function(e,r){var o=r.match(s),a=o[1]+"."+[this.cid,n,d++," "].join(""),l=o[2],c=a+l,u=t.isFunction(e)?e:i[e];h[c]=t.bind(u,i)},this),o=t.extend(o,h)},this),o}};return t.extend(i,{behaviorsLookup:function(){throw new e.Error({message:"You must define where your behaviors are stored.",url:"marionette.behaviors.html#behaviorslookup"})},getBehaviorClass:function(t,n){return t.behaviorClass?t.behaviorClass:e._getValue(i.behaviorsLookup,this,[t,n])[n]},parseBehaviors:function(e,n){return t.chain(n).map(function(n,r){var s=i.getBehaviorClass(n,r),o=new s(n,e),h=i.parseBehaviors(e,t.result(o,"behaviors"));return[o].concat(h)}).flatten().value()},wrap:function(e,i,n){t.each(n,function(n){e[n]=t.partial(o[n],e[n],i)})}}),t.extend(n.prototype,{buildBehaviorTriggers:function(){return t.each(this._behaviors,this._buildTriggerHandlersForBehavior,this),this._triggers},_buildTriggerHandlersForBehavior:function(i,n){var s=t.clone(t.result(i,"triggers"))||{};s=e.normalizeUIKeys(s,r(i)),t.each(s,t.bind(this._setHandlerForBehavior,this,i,n))},_setHandlerForBehavior:function(e,t,i,n){var r=n.replace(/^\S+/,function(e){return e+"."+"behaviortriggers"+t});this._triggers[r]=this._view._buildViewTrigger(i)}}),i}(s,i),s.AppRouter=t.Router.extend({constructor:function(e){this.options=e||{},t.Router.apply(this,arguments);var i=this.getOption("appRoutes"),n=this._getController();this.processAppRoutes(n,i),this.on("route",this._processOnRoute,this)},appRoute:function(e,t){var i=this._getController();this._addAppRoute(i,e,t)},_processOnRoute:function(e,t){if(i.isFunction(this.onRoute)){var n=i.invert(this.getOption("appRoutes"))[e];this.onRoute(e,n,t)}},processAppRoutes:function(e,t){if(t){var n=i.keys(t).reverse();i.each(n,function(i){this._addAppRoute(e,i,t[i])},this)}},_getController:function(){return this.getOption("controller")},_addAppRoute:function(e,t,n){var r=e[n];if(!r)throw new s.Error('Method "'+n+'" was not found on the controller');this.route(t,n,i.bind(r,e))},mergeOptions:s.mergeOptions,getOption:s.proxyGetOption,triggerMethod:s.triggerMethod,bindEntityEvents:s.proxyBindEntityEvents,unbindEntityEvents:s.proxyUnbindEntityEvents}),s.Application=s.Object.extend({constructor:function(e){this._initializeRegions(e),this._initCallbacks=new s.Callbacks,this.submodules={},i.extend(this,e),this._initChannel(),s.Object.apply(this,arguments)},execute:function(){this.commands.execute.apply(this.commands,arguments)},request:function(){return this.reqres.request.apply(this.reqres,arguments)},addInitializer:function(e){this._initCallbacks.add(e)},start:function(e){this.triggerMethod("before:start",e),this._initCallbacks.run(e,this),this.triggerMethod("start",e)},addRegions:function(e){return this._regionManager.addRegions(e)},emptyRegions:function(){return this._regionManager.emptyRegions()},removeRegion:function(e){return this._regionManager.removeRegion(e)},getRegion:function(e){return this._regionManager.get(e)},getRegions:function(){return this._regionManager.getRegions()},module:function(e,t){var n=s.Module.getClass(t),r=i.toArray(arguments);return r.unshift(this),n.create.apply(n,r)},getRegionManager:function(){return new s.RegionManager},_initializeRegions:function(e){var t=i.isFunction(this.regions)?this.regions(e):this.regions||{};this._initRegionManager();var n=s.getOption(e,"regions");return i.isFunction(n)&&(n=n.call(this,e)),i.extend(t,n),this.addRegions(t),this},_initRegionManager:function(){this._regionManager=this.getRegionManager(),this._regionManager._parent=this,this.listenTo(this._regionManager,"before:add:region",function(){s._triggerMethod(this,"before:add:region",arguments)}),this.listenTo(this._regionManager,"add:region",function(e,t){this[e]=t,s._triggerMethod(this,"add:region",arguments)}),this.listenTo(this._regionManager,"before:remove:region",function(){s._triggerMethod(this,"before:remove:region",arguments)}),this.listenTo(this._regionManager,"remove:region",function(e){delete this[e],s._triggerMethod(this,"remove:region",arguments)})},_initChannel:function(){this.channelName=i.result(this,"channelName")||"global",this.channel=i.result(this,"channel")||t.Wreqr.radio.channel(this.channelName),this.vent=i.result(this,"vent")||this.channel.vent,this.commands=i.result(this,"commands")||this.channel.commands,this.reqres=i.result(this,"reqres")||this.channel.reqres}}),s.Module=function(e,t,n){this.moduleName=e,this.options=i.extend({},this.options,n),this.initialize=n.initialize||this.initialize,this.submodules={},this._setupInitializersAndFinalizers(),this.app=t,i.isFunction(this.initialize)&&this.initialize(e,t,this.options)},s.Module.extend=s.extend,i.extend(s.Module.prototype,t.Events,{startWithParent:!0,initialize:function(){},addInitializer:function(e){this._initializerCallbacks.add(e)},addFinalizer:function(e){this._finalizerCallbacks.add(e)},start:function(e){this._isInitialized||(i.each(this.submodules,function(t){t.startWithParent&&t.start(e)}),this.triggerMethod("before:start",e),this._initializerCallbacks.run(e,this),this._isInitialized=!0,this.triggerMethod("start",e))},stop:function(){this._isInitialized&&(this._isInitialized=!1,this.triggerMethod("before:stop"),i.invoke(this.submodules,"stop"),this._finalizerCallbacks.run(void 0,this),this._initializerCallbacks.reset(),this._finalizerCallbacks.reset(),this.triggerMethod("stop"))},addDefinition:function(e,t){this._runModuleDefinition(e,t)},_runModuleDefinition:function(e,n){if(e){var r=i.flatten([this,this.app,t,s,t.$,i,n]);e.apply(this,r)}},_setupInitializersAndFinalizers:function(){this._initializerCallbacks=new s.Callbacks,this._finalizerCallbacks=new s.Callbacks},triggerMethod:s.triggerMethod}),i.extend(s.Module,{create:function(e,t,n){var r=e,s=i.drop(arguments,3);t=t.split(".");var o=t.length,h=[];return h[o-1]=n,i.each(t,function(t,i){var o=r;r=this._getModule(o,t,e,n),this._addModuleDefinition(o,r,h[i],s)},this),r},_getModule:function(e,t,n,r){var s=i.extend({},r),o=this.getClass(r),h=e[t];return h||(h=new o(t,n,s),e[t]=h,e.submodules[t]=h),h},getClass:function(e){var t=s.Module;return e?e.prototype instanceof t?e:e.moduleClass||t:t},_addModuleDefinition:function(e,t,i,n){var r=this._getDefine(i),s=this._getStartWithParent(i,t);r&&t.addDefinition(r,n),this._addStartWithParent(e,t,s)},_getStartWithParent:function(e,t){var n;return i.isFunction(e)&&e.prototype instanceof s.Module?(n=t.constructor.prototype.startWithParent,i.isUndefined(n)?!0:n):i.isObject(e)?(n=e.startWithParent,i.isUndefined(n)?!0:n):!0},_getDefine:function(e){return!i.isFunction(e)||e.prototype instanceof s.Module?i.isObject(e)?e.define:null:e},_addStartWithParent:function(e,t,i){t.startWithParent=t.startWithParent&&i,t.startWithParent&&!t.startWithParentIsConfigured&&(t.startWithParentIsConfigured=!0,e.addInitializer(function(e){t.startWithParent&&t.start(e)}))}}),s});
//@ sourceMappingURL=backbone.marionette.map
"use strict";(self.webpackChunkethberlin=self.webpackChunkethberlin||[]).push([[256],{1230:function(e,r,t){t.d(r,{o:function(){return l}});var n=t(181);function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,u=[],o=!0,i=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(u.push(n.value),!r||u.length!==r);o=!0);}catch(l){i=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(i)throw a}}return u}}(e,r)||(0,n.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=t(7294);function o(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return i(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return i(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,o=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){l=!0,u=e},f:function(){try{o||null==t.return||t.return()}finally{if(l)throw u}}}}function i(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var l=function(e){var r=A(e);return u.createElement(u.Fragment,null,r)},c=Object.defineProperty,f=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=function(e,r,t){return r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t},p=function(e,r){for(var t in r||(r={}))m.call(r,t)&&y(e,t,r[t]);if(d){var n,a=o(d(r));try{for(a.s();!(n=a.n()).done;){t=n.value;v.call(r,t)&&y(e,t,r[t])}}catch(u){a.e(u)}finally{a.f()}}return e},h=function(e,r){return f(e,s(r))},b="undefined"==typeof window?u.useEffect:u.useLayoutEffect,g={easeOutQuad:function(e,r,t,n){return-t*(e/=n)*(e-2)+r},easeInQuad:function(e,r,t,n){return t*(e/=n)*e+r},random:function(e,r,t){return Math.floor(Math.random()*(t-r+1)+r)},linear:function(e,r,t,n){return t*e/n+r}},w=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return e[Math.floor(Math.random()*e.length)]},A=function(e){var r,t=(0,u.useRef)(),n=(0,u.useRef)([]),o=function(e){var r=e.isPlaying,t=e.duration,n=e.startAt,o=void 0===n?0:n,i=e.updateInterval,l=void 0===i?0:i,c=e.onComplete,f=e.onUpdate,s=a((0,u.useState)(o),2),d=s[0],m=s[1],v=(0,u.useRef)(-1e3*o),y=(0,u.useRef)(null),g=(0,u.useRef)(null),w=(0,u.useRef)(null),R=(0,u.useRef)({elapsedTimeRef:0,startAtRef:o,durationRef:t,updateIntervalRef:l});R.current=h(p({},R.current),{durationRef:t,updateIntervalRef:l});var A=function e(r){var t=r/1e3;if(null===g.current)return g.current=t,void(y.current=requestAnimationFrame(e));var n=R.current,a=n.durationRef,u=n.elapsedTimeRef,o=n.updateIntervalRef,i=n.startAtRef,l=u+(t-g.current);g.current=t,R.current=h(p({},R.current),{elapsedTimeRef:l});var c="number"==typeof a&&i+l>=a;m(c?a:i+(0===o?l:(l/o|0)*o)),c||(y.current=requestAnimationFrame(e))},I=function(){y.current&&cancelAnimationFrame(y.current),w.current&&clearTimeout(w.current),g.current=null},E=(0,u.useCallback)((function(e){var t="number"==typeof e?e:o;I(),R.current=h(p({},R.current),{elapsedTimeRef:0,startAtRef:t}),m(t),r&&(y.current=requestAnimationFrame(A))}),[r,o]);return b((function(){if(null==f||f(d),t&&d>=t){v.current+=1e3*t;var e=(null==c?void 0:c(v.current/1e3))||{},r=e.shouldRepeat,n=void 0!==r&&r,a=e.delay,u=void 0===a?0:a,o=e.newStartAt;n&&(w.current=setTimeout((function(){return E(o)}),1e3*u))}}),[d,t]),b((function(){return r&&(y.current=requestAnimationFrame(A)),I}),[r]),{elapsedTime:d,reset:E}}({isPlaying:e.isPlaying,duration:e.duration,updateInterval:null!=(r=e.updateInterval)?r:.065,onComplete:e.onComplete}),i=o.elapsedTime;if(t.current===i)return n.current;t.current=i,n.current=[];for(var l=function(e){var r=e.characters,t=e.duration,n=e.revealDuration,u=void 0===n?.6:n,o=e.revealEasing,i=void 0===o?"linear":o,l=e.ignoreCharacterSet,c=Array.isArray(r)?r:r.split(""),f=function(e,r){if(0===r)return[e,0];var t=r>1?1:r,n=e*(t=t<0?0:t);return[e-n,n]}(t,u),s=a(f,2),d=s[0],m=s[1],v=g[i],y=function(e,r){return 1/(e.filter((function(e){return!(null==r?void 0:r.includes(e))})).length-1)}(c,l),p=0,h=function(e){if(e||0===u)return t;var r=v(p*y,0,m,1);return p+=1,d+r};return c.map((function(e){var r=!!(null==l?void 0:l.find((function(r){return r===e})));return{character:e,isIgnored:r,revealTime:h(r)}}))}(e),c=0;c<l.length;c++){var f=l[c],s=f.character,d=f.isIgnored,m=f.revealTime,v=d||i>=m?s:R(e.characterSet);n.current.push((0,u.isValidElement)(v)?(0,u.cloneElement)(v,{key:c}):v)}return n.current}},7291:function(e,r,t){t.r(r);var n=t(7294),a=t(1230);r.default=function(){return n.createElement("div",{className:"flex flex-col justify-center items-center min-h-screen font-digi text-berlin-yellow"},n.createElement("div",{className:"flex blur-text m-0 text-[96pt]"},n.createElement("div",{className:" layers","data-text":"404"},n.createElement(a.o,{isPlaying:!0,duration:1,characters:"404"}))),n.createElement("div",{className:"glitch layers font-w95","data-text":"to the power of 3"},"couldn't find the page you are looking for..."))}}}]);
//# sourceMappingURL=component---src-pages-404-jsx-8501ead6b327e4978b6c.js.map
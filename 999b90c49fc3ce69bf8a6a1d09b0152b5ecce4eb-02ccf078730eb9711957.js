"use strict";(self.webpackChunkethberlin=self.webpackChunkethberlin||[]).push([[199],{1230:function(e,t,n){n.d(t,{o:function(){return u}});var r=n(181);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(u){i=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n(7294);function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,o=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){u=!0,l=e},f:function(){try{o||null==n.return||n.return()}finally{if(u)throw l}}}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(e){var t=x(e);return l.createElement(l.Fragment,null,t)},c=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,h=function(e,t,n){return t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n},p=function(e,t){for(var n in t||(t={}))d.call(t,n)&&h(e,n,t[n]);if(f){var r,a=o(f(t));try{for(a.s();!(r=a.n()).done;){n=r.value;v.call(t,n)&&h(e,n,t[n])}}catch(l){a.e(l)}finally{a.f()}}return e},y=function(e,t){return s(e,m(t))},b="undefined"==typeof window?l.useEffect:l.useLayoutEffect,J={easeOutQuad:function(e,t,n,r){return-n*(e/=r)*(e-2)+t},easeInQuad:function(e,t,n,r){return n*(e/=r)*e+t},random:function(e,t,n){return Math.floor(Math.random()*(n-t+1)+t)},linear:function(e,t,n,r){return n*e/r+t}},E=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;return e[Math.floor(Math.random()*e.length)]},x=function(e){var t,n=(0,l.useRef)(),r=(0,l.useRef)([]),o=function(e){var t=e.isPlaying,n=e.duration,r=e.startAt,o=void 0===r?0:r,i=e.updateInterval,u=void 0===i?0:i,c=e.onComplete,s=e.onUpdate,m=a((0,l.useState)(o),2),f=m[0],d=m[1],v=(0,l.useRef)(-1e3*o),h=(0,l.useRef)(null),J=(0,l.useRef)(null),E=(0,l.useRef)(null),g=(0,l.useRef)({elapsedTimeRef:0,startAtRef:o,durationRef:n,updateIntervalRef:u});g.current=y(p({},g.current),{durationRef:n,updateIntervalRef:u});var x=function e(t){var n=t/1e3;if(null===J.current)return J.current=n,void(h.current=requestAnimationFrame(e));var r=g.current,a=r.durationRef,l=r.elapsedTimeRef,o=r.updateIntervalRef,i=r.startAtRef,u=l+(n-J.current);J.current=n,g.current=y(p({},g.current),{elapsedTimeRef:u});var c="number"==typeof a&&i+u>=a;d(c?a:i+(0===o?u:(u/o|0)*o)),c||(h.current=requestAnimationFrame(e))},w=function(){h.current&&cancelAnimationFrame(h.current),E.current&&clearTimeout(E.current),J.current=null},N=(0,l.useCallback)((function(e){var n="number"==typeof e?e:o;w(),g.current=y(p({},g.current),{elapsedTimeRef:0,startAtRef:n}),d(n),t&&(h.current=requestAnimationFrame(x))}),[t,o]);return b((function(){if(null==s||s(f),n&&f>=n){v.current+=1e3*n;var e=(null==c?void 0:c(v.current/1e3))||{},t=e.shouldRepeat,r=void 0!==t&&t,a=e.delay,l=void 0===a?0:a,o=e.newStartAt;r&&(E.current=setTimeout((function(){return N(o)}),1e3*l))}}),[f,n]),b((function(){return t&&(h.current=requestAnimationFrame(x)),w}),[t]),{elapsedTime:f,reset:N}}({isPlaying:e.isPlaying,duration:e.duration,updateInterval:null!=(t=e.updateInterval)?t:.065,onComplete:e.onComplete}),i=o.elapsedTime;if(n.current===i)return r.current;n.current=i,r.current=[];for(var u=function(e){var t=e.characters,n=e.duration,r=e.revealDuration,l=void 0===r?.6:r,o=e.revealEasing,i=void 0===o?"linear":o,u=e.ignoreCharacterSet,c=Array.isArray(t)?t:t.split(""),s=function(e,t){if(0===t)return[e,0];var n=t>1?1:t,r=e*(n=n<0?0:n);return[e-r,r]}(n,l),m=a(s,2),f=m[0],d=m[1],v=J[i],h=function(e,t){return 1/(e.filter((function(e){return!(null==t?void 0:t.includes(e))})).length-1)}(c,u),p=0,y=function(e){if(e||0===l)return n;var t=v(p*h,0,d,1);return p+=1,f+t};return c.map((function(e){var t=!!(null==u?void 0:u.find((function(t){return t===e})));return{character:e,isIgnored:t,revealTime:y(t)}}))}(e),c=0;c<u.length;c++){var s=u[c],m=s.character,f=s.isIgnored,d=s.revealTime,v=f||i>=d?m:g(e.characterSet);r.current.push((0,l.isValidElement)(v)?(0,l.cloneElement)(v,{key:c}):v)}return r.current}},8977:function(e,t,n){var r=n(7294),a=n(1230),l=r.forwardRef((function(e,t){var n=(0,r.useState)("3"),l=n[0],o=n[1];return(0,r.useEffect)((function(){setTimeout((function(){o("3"===l?"E":"3")}),1500)}),[l]),r.createElement("div",{ref:t,className:"font-digi text-berlin-yellow "+e.className},r.createElement("div",{className:"flex blur-text m-0 "+e.titleClassName},r.createElement("div",{className:"glitch  layers","data-text":"ETHB"+l+"rlin"},r.createElement(a.o,{isPlaying:!0,duration:2,characters:"ETHB3rlin"}))),r.createElement("div",{className:"glitch layers font-w95 "+e.subtitleClassName,"data-text":"to the power of 3"},"to the power of 3"))}));t.Z=l},411:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.className,n=e.isPrimaryColor;return r.createElement("div",{className:"whitespace-pre font-mono text-[6px] sticky top-16 mx-4 tracking-wider "+t,style:{color:n?"rgba(255, 210, 0, 0.5)":"rgba(158, 141, 226, 0.75)",marginTop:"60vh"}},"\n                                                 ~.                                                 \n                                                73:.                                                \n                                              .J5J::.                                               \n                                             ^333J:.::                                              \n                                            !5333J:.:::.                                            \n                                          .J53333J:.::::.                                           \n                                         :3533333J:.:::::.                                          \n                                        ~53333333J:.:::::::.                                        \n                                       ?533333333J:.::::::::.                                       \n                                     .J5333333333J:.:::::::::.                                      \n                                    ^333333333333J:.:::::::::::                                     \n                                   75333333333333J:.::::::::::::.                                   \n                                 .J53333333333333J:.:::::::::::::.                                  \n                                :3333333333333333J:.::::::::::::::.                                 \n                               !53333333333333333J:.::::::::::::::::.                               \n                             .?533333333333333333J:.:::::::::::::::::.                              \n                            :35333333333333333333J:.::::::::::::::::::.                             \n                           ~333333333333333333333J:.::::::::::::::::::::.                           \n                          75333333333333333333333J:.:::::::::::::::::::::.                          \n                        .J53333333333333333333333J:.::::::::::::::::::::::.                         \n                       ^3333333333333333333333333J:.:::::::::::::::::::::::.                        \n                      !53333333333333333333333333J:.:::::::::::::::::::::::::.                      \n                    .?533333333333333333333333333J:.::::::::::::::::::::::::::.                     \n                   :35333333333333333333333333333J:.:::::::::::::::::::::::::::.                    \n                  ~533333333333333333333333333333J:.:::::::::::::::::::::::::::::.                  \n                 75333333333333333333333333333333J:.::::::::::::::::::::::::::::::.                 \n               .J53333333333333333333333333333333J:.:::::::::::::::::::::::::::::::.                \n              ^3333333333333333333333333333333335J:::::::::::::::::::::::::::::::::::               \n             !53333333333333333333333333333333J7!^.....:::::::::::::::::::::::::::::::.             \n           .J5333333333333333333333333533J?!~^::::     .....:::::::::::::::::::::::::::.            \n          :3533333333333333333333333J?!~^:::::::::          ....::::::::::::::::::::::::.           \n         ~5333333333333333333333?7~^::::::::::::::               ....:::::::::::::::::::::.         \n        ?533333333333333533J7!^:::::::::::::::::::                    ....:::::::::::::::::.        \n      .J53333333333333J?!~^:::::::::::::::::::::::                        .....:::::::::::::.       \n     ^333333333333?7~^::::::::::::::::::::::::::::                             ....:::::::::::      \n    753333333J7~^:::::::::::::::::::::::::::::::::                                  ....:::::::.    \n  .J5533J?!~^:::::::::::::::::::::::::::::::::::::                                      .....:::.   \n ^33?!~^::::::::::::::::::::::::::::::::::::::::::                                           .....  \n:~^:::::::::::::::::::::::::::::::::::::::::::::::                                                . \n   ..:::::::::::::::::::::::::::::::::::::::::::::                                                  \n      ..::::::::::::::::::::::::::::::::::::::::::                                                  \n          ..::::::::::::::::::::::::::::::::::::::                                                  \n              .:::::::::::::::::::::::::::::::::::                                                  \n.:.              ..:::::::::::::::::::::::::::::::                                                  \n .7J!.               ..:::::::::::::::::::::::::::                                             .:.  \n   :3537^.               .::::::::::::::::::::::::                                         ..:::    \n     !5553J!:               ..::::::::::::::::::::                                      .:::::.     \n      :J533553?~.               ..::::::::::::::::                                  ..:::::::       \n        !5333335537^.              ..:::::::::::::                              ..:::::::::.        \n         :J5333333553J!:               ..:::::::::                           .::::::::::::          \n           !3333333333553?~.               .::::::                       ..:::::::::::::.           \n            .J53333333333355J7^.              ..::                   ..::::::::::::::::             \n              ~33333333333333553?~:                               .::::::::::::::::::.              \n               .J53333333333333335537^.                       ..::::::::::::::::::::                \n                 ~333333333333333333553J!:                 .::::::::::::::::::::::.                 \n                  .?53333333333333333333553?~.         ..:::::::::::::::::::::::.                   \n                    ~353333333333333333333335537^. ..::::::::::::::::::::::::::.                    \n                     .?533333333333333333333333553:::::::::::::::::::::::::::.                      \n                       ~35333333333333333333333333::::::::::::::::::::::::::.                       \n                        .?533333333333333333333333::::::::::::::::::::::::.                         \n                          ^35333333333333333333333:::::::::::::::::::::::.                          \n                           .?533333333333333333333:::::::::::::::::::::.                            \n                             ^35333333333333333333::::::::::::::::::::.                             \n                              .7533333333333333333::::::::::::::::::.                               \n                                ^35333333333333333:::::::::::::::::.                                \n                                  7533333333333333:::::::::::::::.                                  \n                                   :35333333333333::::::::::::::                                    \n                                     7533333333333::::::::::::.                                     \n                                      :35333333333:::::::::::                                       \n                                        !533333333:::::::::.                                        \n                                         :J5333333::::::::                                          \n                                           !533333::::::.                                           \n                                            :J5333:::::                                             \n                                              !553:::.                                              \n                                               .J3^:                                                \n                                                 !.                                                 \n")}},5434:function(e,t,n){var r=n(7294),a=n(411),l=n(3019),o=function(e){var t=e.children,n=e.showEthDiamond;return r.createElement("div",{className:"flex-1 flex min-h-full font-w95"},r.createElement(l.Z,null),r.createElement("div",{className:"fixed top-0 right-0 flex justify-end my-6 mr-12"},r.createElement("div",null,r.createElement("a",{style:{textDecoration:"none"},href:"https://calendar.google.com/calendar/u/0/r/eventedit?text=ETHBerlin%C2%B3&location=Lohm%C3%BChlenstra%C3%9Fe+65,+12435+Berlin&dates=20220916T080000+02:00/20220918T200000+02:00",target:"_blank",rel:"noopener"},"September 16-18, 2022")),r.createElement("div",{className:"ml-8"},r.createElement("a",{style:{textDecoration:"none"},href:"https://factoryberlin.com/",target:"_blank",rel:"noopener"},"Factory Görlitzer Park"))),r.createElement("div",{className:"fixed bottom-0 right-0 flex justify-end my-6 mr-12 z-20 text-sm"},r.createElement("a",{className:"ml-8 text-berlin-yellow",href:"/DoD"},"department of decentralization"),r.createElement("a",{className:"ml-8 text-berlin-yellow",href:"/impressum"},"impressum"),r.createElement("a",{className:"ml-8 text-berlin-yellow",href:"/code-of-conduct"},"code of conduct")),r.createElement("div",{className:"flex flex-col flex-1 ml-64 mr-8"},t&&r.createElement("div",{className:"mt-64 mb-16 w-full mr-8 p-6 text-gray-50",style:{backgroundColor:"rgba(0, 0, 0, 0.45)"}},t)),r.createElement("div",{className:"mx-4 "+(n?"block":"hidden")},r.createElement(a.Z,null)))};o.defaultProps={showEthDiamond:!0},t.Z=o},3019:function(e,t,n){var r=n(7294),a=n(8977);n(1230);t.Z=function(e){var t=e.className;return r.createElement("div",{className:"h-screen flex flex-col py-8 px-6 font-w95 fixed w-60 left-0 text-berlin-yellow "+t},r.createElement("a",{className:"",style:{textDecoration:"none"},href:"/"},r.createElement(a.Z,{titleClassName:"text-5xl",subtitleClassName:"mt-1"})),r.createElement("nav",{className:"flex flex-col mt-16 text-xl"},r.createElement("a",{className:"my-2",href:"/about"},"(a)bout"),r.createElement("a",{className:"my-2",href:"/hack"}," ","(h)ack"),r.createElement("a",{className:"my-2",href:"/contribute"},"(c)ontribute"),r.createElement("a",{className:"my-2",href:"/program"}," ","(p)rogram"),r.createElement("a",{className:"my-2",href:"/sponsors"}," ","(s)ponsors"),r.createElement("a",{className:"my-2",href:"/manifesto"},"(m)anifesto")),r.createElement("div",{className:"mt-auto"},r.createElement("div",{className:"my-2"},"join our"," ",r.createElement("a",{className:"underline",href:"https://matrix.to/#/%23ethberlin:matrix.org",target:"_blank",rel:"noopener"},"matrix space")," ","or"," ",r.createElement("a",{className:"underline",href:"mailto:henlo@ethberlin.ooo",target:"_blank",rel:"noopener"},"e-mail us"))))}}}]);
//# sourceMappingURL=999b90c49fc3ce69bf8a6a1d09b0152b5ecce4eb-02ccf078730eb9711957.js.map
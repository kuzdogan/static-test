"use strict";(self.webpackChunkethberlin=self.webpackChunkethberlin||[]).push([[230],{610:function(e,t,n){n.r(t);var a=n(7294),l=n(8977),r=n(411),o=(n(5434),n(3019));t.default=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1],i=(0,a.useRef)();return(0,a.useEffect)((function(){var e=-window.innerWidth,t=-window.innerHeight,a=1,l=0,r=0;return window.addEventListener("wheel",(function(o){o.preventDefault();var c,s,m=-o.deltaY/1e3,f=-o.deltaY*window.innerWidth/1e3,d=-o.deltaY*window.innerHeight/1e3;c=i.current,s=c.getBoundingClientRect(),console.log(s),s.bottom>=0&&s.right>=0?n(!1):n(!0),m>0?(a=Math.min(1,a+m),l=Math.min(l+f,0),r=Math.min(r+d,0)):(a=Math.max(.1,a+m),l=Math.max(l+f,e),r=Math.max(r+d,t)),console.log("Scale:"+a),console.log("TranslateX: ",l),console.log("TranslateY: ",r);var h="translateX("+l+"px) translateY("+r+"px) scale("+a+")";i.current.style.transform=h})),function(){window.removeEventListener("wheel")}}),[]),a.createElement("div",{className:"flex justify-center items-center min-h-screen"},a.createElement(o.Z,{className:"z-10 "+(t?"fade-in-left":"fade-out-left")}),a.createElement("div",{className:"z-10 "+(t?"fade-in-right":"fade-out-right")+" fixed top-0 right-0 flex justify-end my-6 mr-12 font-w95"},a.createElement("div",null,a.createElement("a",{style:{textDecoration:"none"},href:"https://calendar.google.com/calendar/u/0/r/eventedit?text=ETHBerlin%C2%B3&location=Lohm%C3%BChlenstra%C3%9Fe+65,+12435+Berlin&dates=20220916T080000+02:00/20220918T200000+02:00",target:"_blank",rel:"noopener"},"September 16-18, 2022")),a.createElement("div",{className:"ml-8"},a.createElement("a",{style:{textDecoration:"none"},href:"https://factoryberlin.com/",target:"_blank",rel:"noopener"},"Factory Görlitzer Park"))),a.createElement("div",{className:"fixed bottom-0 right-0 flex justify-end my-6 mr-12 z-20 text-sm font-w95 "+(t?"fade-in-right":"fade-out-right")+" "},a.createElement("a",{className:"ml-8 text-berlin-yellow",href:"/DoD"},"department of decentralization"),a.createElement("a",{className:"ml-8 text-berlin-yellow",href:"/impressum"},"impressum"),a.createElement("a",{className:"ml-8 text-berlin-yellow",href:"/code-of-conduct"},"code of conduct")),a.createElement(l.Z,{ref:i,className:"flex flex-col justify-center items-center",titleClassName:"text-[96pt]"}),a.createElement("div",{className:"fixed right-0 top-0 bottom-0 overflow-y-scroll w-full"},a.createElement(r.Z,{className:"flex justify-end"})))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-c6259493b40dda156034.js.map
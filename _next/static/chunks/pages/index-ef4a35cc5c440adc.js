(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9135:function(e,r,n){e.exports=n(3240)},8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3678)}])},2469:function(e,r,n){"use strict";n.d(r,{Z:function(){return c}});var t=n(5893),i=n(1664),s=n(9008),o=n(1163),a=n(9135);function c(e){var r=e.children,n=e.title,i=void 0===n?"":n;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.default,{children:[(0,t.jsx)("title",{children:"majek.dev"+(i&&" | "+i)}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1"})]}),(0,t.jsx)(l,{}),(0,t.jsx)(f,{children:r})]})}var l=function(){return(0,t.jsxs)("div",{className:"sidebar",children:[(0,t.jsx)(u,{}),(0,t.jsx)(d,{})]})},u=function(){var e=(0,o.useRouter)(),r=(0,a.useAmp)();return(0,t.jsxs)("header",{className:"container",children:[!r&&(0,t.jsx)("img",{src:"/assets/logo.png",alt:"Me"}),"/"===e.pathname?(0,t.jsx)("h1",{children:"majek.dev"}):(0,t.jsx)("h1",{children:(0,t.jsx)(i.default,{href:"/",children:"majek.dev"})}),(0,t.jsx)("p",{children:"Hey! \ud83d\udc4b"}),(0,t.jsx)("p",{children:"I'm Majek, a student from North Carolina."}),(0,t.jsx)("p",{children:"This is a personal website and domain that I use for the various open-source projects I work on."})]})},d=function(){return(0,t.jsx)("footer",{className:"container",children:(0,t.jsxs)("p",{children:["\xa9 2020-22 ",(0,t.jsx)("a",{href:"https://github.com/Majekdor",children:"Majekdor"})]})})},f=function(e){var r=e.children;return(0,t.jsx)("main",{className:"content container page",children:r})}},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var i,s=(i=n(7294))&&i.__esModule?i:{default:i},o=n(6273),a=n(387),c=n(7190);var l={};function u(e,r,n,t){if(e&&o.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,i=a.useRouter(),d=s.default.useMemo((function(){var r=t(o.resolveHref(i,e.href,!0),2),n=r[0],s=r[1];return{href:n,as:e.as?o.resolveHref(i,e.as):s||n}}),[i,e.href,e.as]),f=d.href,h=d.as,p=e.children,j=e.replace,v=e.shallow,x=e.scroll,m=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var y=(r=s.default.Children.only(p))&&"object"===typeof r&&r.ref,b=t(c.useIntersection({rootMargin:"200px"}),2),g=b[0],k=b[1],w=s.default.useCallback((function(e){g(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,g]);s.default.useEffect((function(){var e=k&&n&&o.isLocalURL(f),r="undefined"!==typeof m?m:i&&i.locale,t=l[f+"%"+h+(r?"%"+r:"")];e&&!t&&u(i,f,h,{locale:r})}),[h,f,k,m,n,i]);var M={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,i,s,a,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(n))&&(e.preventDefault(),null==a&&t.indexOf("#")>=0&&(a=!1),r[i?"replace":"push"](n,t,{shallow:s,locale:c,scroll:a}))}(e,i,f,h,j,v,x,m)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),o.isLocalURL(f)&&u(i,f,h,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var I="undefined"!==typeof m?m:i&&i.locale,L=i&&i.isLocaleDomain&&o.getDomainLocale(h,I,i&&i.locales,i&&i.domainLocales);M.href=L||o.addBasePath(o.addLocale(h,I,i&&i.defaultLocale))}return s.default.cloneElement(r,M)};r.default=d},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,i=!1,s=void 0;try{for(var o,a=e[Symbol.iterator]();!(t=(o=a.next()).done)&&(n.push(o.value),!r||n.length!==r);t=!0);}catch(c){i=!0,s=c}finally{try{t||null==a.return||a.return()}finally{if(i)throw s}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!o,c=i.useRef(),l=t(i.useState(!1),2),u=l[0],d=l[1],f=i.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||u||e&&e.tagName&&(c.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=a.get(r);if(n)return n;var t=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return a.set(r,n={id:r,observer:i,elements:t}),n}(n),i=t.id,s=t.observer,o=t.elements;return o.set(e,r),s.observe(e),function(){o.delete(e),s.unobserve(e),0===o.size&&(s.disconnect(),a.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:r}))}),[n,r,u]);return i.useEffect((function(){if(!o&&!u){var e=s.requestIdleCallback((function(){return d(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[u]),[f,u]};var i=n(7294),s=n(9311),o="undefined"!==typeof IntersectionObserver;var a=new Map},3678:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return o}});var t=n(5893),i=n(2469),s=n(1664);function o(){return(0,t.jsxs)(i.Z,{children:[(0,t.jsx)(a,{}),(0,t.jsx)(c,{}),(0,t.jsx)(l,{})]})}var a=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"About me"}),(0,t.jsxs)("p",{children:['I use the nickname "',(0,t.jsx)("b",{children:"Majekdor"}),'" or sometimes just "',(0,t.jsx)("b",{children:"Majek"}),'" for most of my accounts related to development and gaming.']}),(0,t.jsxs)("p",{children:["Among other things, I'm a ",(0,t.jsx)("b",{children:"software developer"})," and maintain/contribute to a number of ",(0,t.jsx)("b",{children:"open source"})," projects in my spare time."]}),(0,t.jsxs)("p",{children:["If you'd like to contact me, you can find how to reach me on my ",(0,t.jsx)(s.default,{href:"/contact",children:"contact page"}),"."]}),(0,t.jsxs)("p",{children:["You can find me (most actively) on GitHub, ",(0,t.jsx)("a",{href:"https://github.com/Majekdor",children:"@Majekdor"}),"."]})]})},c=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"This domain"}),(0,t.jsx)("p",{children:"There are some sites and services available under this domain."}),(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://repo.majek.dev/",children:[(0,t.jsx)("b",{children:"repo."}),"majek.dev"]})," - maven repository"]}),(0,t.jsxs)("li",{children:[(0,t.jsxs)("a",{href:"https://bytebin.majek.dev/",children:[(0,t.jsx)("b",{children:"bytebin."}),"majek.dev"]})," - content storage web service"]})]}),(0,t.jsx)("p",{children:"I try my best to keep these services available. My Maven repository has had good uptime for over a year now."})]})},l=function(){return(0,t.jsxs)("article",{children:[(0,t.jsx)("h1",{children:"My projects"}),(0,t.jsx)("p",{children:"I work on a number of open source projects in my spare time."}),(0,t.jsxs)(u,{repo:"MajekDev/HexNicks",children:[(0,t.jsxs)("li",{children:["HexNicks is a ",(0,t.jsx)("b",{children:"nickname"})," plugin for Minecraft servers, written in Java."]}),(0,t.jsx)("li",{children:"At time of writing, it has 4,000+ downloads on Spigot."}),(0,t.jsxs)("li",{children:["It supports color codes and gradients from ",(0,t.jsx)("a",{href:"https://docs.adventure.kyori.net/minimessage",children:"MiniMessage"})," as well as legacy Spigot codes if enabled."]})]}),(0,t.jsxs)(u,{repo:"MajekDev/PartyChat",children:[(0,t.jsxs)("li",{children:["PartyChat is a ",(0,t.jsx)("b",{children:"group chat"})," plugin for Minecraft servers, written in Java."]}),(0,t.jsx)("li",{children:"The project plugin allows players to create a private party to chat with a select group of people online."})]}),(0,t.jsxs)(u,{repo:"Majekdor/statbot",children:[(0,t.jsxs)("li",{children:["statbot is a ",(0,t.jsx)("b",{children:"discord bot"})," for viewing your stats from various games, written in JavaScript."]}),(0,t.jsx)("li",{children:"At the time of writing, it supports Rocket League ranks and stats as well as Valorant ranks."})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h3",{children:"Other"}),(0,t.jsx)("p",{children:"I've also created and/or made significant contributions to a number of other projects."}),(0,t.jsxs)("ul",{children:[(0,t.jsx)(d,{repo:"MajekDev/PvPToggle",desc:"pvp plugin for Bukkit Minecraft servers"}),(0,t.jsx)(d,{repo:"FarLandsMC/RegionProtection",desc:"region plugin for Bukkit Minecraft servers"}),(0,t.jsx)(d,{repo:"FarLandsMC/FarLands",desc:"custom plugin for the FarLandsMC Minecraft server"}),(0,t.jsxs)("li",{children:["... and more! You can find all of my public repositories on my ",(0,t.jsx)("a",{href:"https://github.com/Majekdor",children:"GitHub profile"}),"."]})]})]})]})},u=function(e){var r=e.repo,n=e.children;return(0,t.jsxs)("section",{children:[(0,t.jsx)("h3",{children:(0,t.jsx)("a",{href:"https://github.com/"+r,children:r})}),(0,t.jsx)("ul",{children:n})]})},d=function(e){var r=e.repo,n=e.desc;return(0,t.jsxs)("li",{children:[(0,t.jsx)("a",{href:"https://github.com/"+r,children:r})," (",n,")"]})}},9008:function(e,r,n){e.exports=n(5443)},1664:function(e,r,n){e.exports=n(8418)},1163:function(e,r,n){e.exports=n(387)}},function(e){e.O(0,[774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
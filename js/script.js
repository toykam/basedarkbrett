window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme28"]=window.wsb["Theme28"]||window.radpack("@widget/LAYOUT/bs-layout28-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,c;function s(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(c=document.getElementById(o),!c)return;n=document.createElement("div"),n.style.cssText="width:100%;",c.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),c.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",s,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i&&i.removeEventListener("click",s,{useCapture:!0}),c&&(c.removeChild(n),c.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-119730\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"archivo-black\",\"montserrat\",\"source-sans-pro\"],\"colors\":[\"#800000\"],\"locale\":\"en-GB\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"8a8cb90d-4d96-4658-80d6-f050fc1e34d8\":{\"pageId\":\"5543b1f3-b65f-422c-a49d-284a75a85fd4\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"5543b1f3-b65f-422c-a49d-284a75a85fd4\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"5543b1f3-b65f-422c-a49d-284a75a85fd4\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"59f98713-470f-40c0-b721-b38a5f524fd4\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"59f98713-470f-40c0-b721-b38a5f524fd4\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9a542cb0-8a2e-4c4a-b393-a1fa8f91b50e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9a542cb0-8a2e-4c4a-b393-a1fa8f91b50e\",\"name\":\"Dex\",\"href\":\"https://ape.store/base/0x97abd7b183eabf19acf2c40e931851ebdb5fa010\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"c6ff36d0-d256-4087-a202-007113450c9a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c6ff36d0-d256-4087-a202-007113450c9a\",\"name\":\"X\",\"href\":\"https://x.com/basedarkbrett\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"f7edfc84-a1c3-412f-8383-4661a35b8279\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f7edfc84-a1c3-412f-8383-4661a35b8279\",\"name\":\"TG\",\"href\":\" https://t.me/basedarkbrett\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#800000\",\"meta\":{\"primary\":\"rgb(128, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"archivo-black\",\"description\":\"\",\"tags\":[\"sans-serif\",\"modern\",\"clean\",\"bold\"],\"meta\":{\"order\":3,\"primary\":{\"id\":\"archivo-black\",\"name\":\"Archivo Black\",\"url\":\"//fonts.googleapis.com/css?family=Archivo+Black:400&display=swap\",\"family\":\"'Archivo Black', arial, sans-serif\",\"size\":14,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:400,700&display=swap\",\"family\":\"'Montserrat', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"languages\":[\"en\"],\"meta\":{\"primary\":{\"styles\":{\"textTransform\":\"uppercase\"}}}},{\"locales\":[\"vi-VN\"],\"meta\":{\"primary\":{\"family\":\"Arial, sans-serif\"}}}]},\"alternate\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":11,\"alternate\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:400,700&display=swap\",\"family\":\"'Montserrat', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"source-sans-pro\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":37.5,\"logo\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:600,900&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":900,\"weights\":[600,900],\"styles\":{\"textTransform\":\"none\",\"fontWeight\":900,\"letterSpacing\":\"0\"}}}}}},\"theme\":\"Theme28\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-119728-navId-mobile\",\"uniqueId\":\"n-119728\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"80aea5f3-31cb-45c4-8a20-d2d5f40a8714\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"80aea5f3-31cb-45c4-8a20-d2d5f40a8714\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"HeaderMedia\",\"groupType\":\"Fill\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":2}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
window.wsb["DynamicFontScaler"]=function(t){let e,{containerId:n,targetId:o,fontSizes:r,maxLines:i,prioritizeDefault:s}=t;if("undefined"==typeof document)return;const a=document.getElementById(n),c=document.getElementById(o);function l(t){return function(t){const e=parseInt(y(t,"padding-left")||0,10),n=parseInt(y(t,"padding-right")||0,10);return t.scrollWidth+e+n}(t)<=a.clientWidth&&function(t){const e=t.offsetHeight,n=parseInt(y(t,"line-height"),10)||1;return Math.floor(e/n)}(t)<=i}function p(t){return parseInt(y(t,"font-size")||0,10)}function d(t){if(1===t.length)return t[0];const e=t.filter(l);if(1===e.length)return e[0];if(!e.length)return function(t){return t.sort(((t,e)=>p(t)-p(e)))[0]}(t);return e.sort(((t,e)=>p(e)-p(t)))[0]}function u(){if(!a||!c||e===window.innerWidth)return;if(c.hasAttribute("data-font-scaled"))return void g();e=window.innerWidth;const t=Array.prototype.slice.call(a.querySelectorAll(`[data-scaler-id="scaler-${n}"]`)).sort(((t,e)=>r.indexOf(t.getAttribute("data-size"))-r.indexOf(e.getAttribute("data-size"))));if(a.clientWidth&&t.length){const e=a.style.width||"";a.style.width="100%",t.forEach((t=>{t.style.display="inline-block",t.style.maxWidth=`${a.clientWidth}px`}));const n=d(t);!function(t){t.forEach((t=>{t.style.display="none",t.style.maxWidth=""}))}(t),a.style.width=e;const r=y(n,"font-size"),i=c.getAttribute("data-last-size");if(r&&r!==i){if(s){const t=y(c,"font-size");if(parseInt(r,10)>=parseInt(t,10))return}c.setAttribute("data-last-size",r);let t=document.querySelector(`#${o}-style`);t||(t=document.createElement("style"),t.id=`${o}-style`,document.head.appendChild(t)),t.textContent=`#${c.id} { font-size: ${r} !important; }`}}}function g(){c&&c.removeAttribute("data-last-size");const t=document.querySelector(`#${o}-style`);t&&t.parentNode.removeChild(t)}function y(t,e){return document.defaultView.getComputedStyle(t).getPropertyValue(e)}return u(),window.addEventListener("resize",u),()=>{g(),window.removeEventListener("resize",u)}};
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-119734\",\"targetId\":\"logo-text-119735\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":3,\"prioritizeDefault\":false}"));
window.wsb["DynamicFontScaler"](JSON.parse("{\"containerId\":\"logo-container-119747\",\"targetId\":\"logo-text-119748\",\"fontSizes\":[\"xxlarge\",\"xlarge\",\"large\"],\"maxLines\":2,\"prioritizeDefault\":false}"));
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-119749\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navContainer-119740\",\"widgetId\":\"80aea5f3-31cb-45c4-8a20-d2d5f40a8714\",\"section\":\"default\",\"category\":\"accent\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"80aea5f3-31cb-45c4-8a20-d2d5f40a8714\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"accent\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":2}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateSplitNavSpacing"]=function(e){let{containerId:a,navId:n,splitNavId:i,logoImageId:l,inlineUtilitiesMenu:o,forceBreakpoint:r}=e;let c,s,g,p,d,u,y,m;const b=document.getElementById(n),v=document.getElementById(i);function h(){if(s||!b||!T(b))return;p=Array.from(b.children),g=Array.from(b.children),g.forEach(E),o&&(d=g.pop(),M(d)),u=g.pop();const e=u.querySelector("ul");y=e?Array.from(e.children):[],b.style.whiteSpace="normal",m=T(b.parentElement,"floor"),b.style.whiteSpace="nowrap",window.requestAnimationFrame(I)}function I(){const e=d&&d.querySelector("[data-ux='Pipe']");e&&R(e);const t=g,a=t.map((e=>T(e)));const n=d?T(d):0;let i=0,l=a.concat(n).findIndex((e=>{if(i+e>m)return e;i+=e}));l<0&&(l=a.length);const o=a.slice(0,l);let r,c,s=a.slice(l);if(k(s)+n<m)r=!1,c=0;else{r=!0,c=T(u);let e=0,t=c+n;s.some((a=>{if(t+=a,t>=m)return!0;e++})),s=s.slice(0,e)}for(;o.length>1&&B(o,s.concat([c,n]).filter(Boolean));)s.unshift(o.pop());const b=Array.from(v.children);if(f(b,0,o.length,M),f(t,0,o.length,R),f(y,0,o.length,R),f(b,o.length,o.length+s.length,R),f(t,o.length,o.length+s.length,M),f(y,o.length,o.length+s.length,R),f(b,o.length+s.length,t.length,R),f(t,o.length+s.length,t.length,R),f(y,o.length+s.length,t.length,M),r?M(u):R(u),function(){const e=p.filter((e=>"visible"===e.style.visibility&&e.classList.contains("nav-item"))),t=e[e.length-1];t&&t.classList.add("last-visible-nav-item")}(),e){t.find((e=>"visible"===e.style.visibility))&&M(e)}window.dispatchEvent(new Event("NavItemsResized"))}function w(){window.innerWidth<1024&&r&&r!==t.Q||(window.clearTimeout(c),c=window.setTimeout(h,50))}function f(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function E(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("last-visible-nav-item","visible")}function R(e){e.style.display="none",e.classList.remove("visible")}function M(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function k(e){return e.reduce(((e,t)=>e+t),0)}function T(e){return"ceil"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil")?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}function B(e,t){if(!t.length&&e.length>1)return!0;const a=e[e.length-1],n=k(e),i=k(t);return Math.abs(n-i)>Math.abs(n-a-(i+a))}if(w(),window.ResizeObserver){const e=new window.ResizeObserver(w);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{s=!0,e.disconnect()}}return window.addEventListener("resize",w,{passive:!0}),()=>{s=!0,window.removeEventListener("resize",w,{passive:!0})}};
window.wsb["CalculateSplitNavSpacing"](JSON.parse("{\"navId\":\"n-119728119739-navId-2\",\"inlineUtilitiesMenu\":false,\"containerId\":\"navContainer-119740\",\"splitNavId\":\"n-119728119738-navId-1\"}"));
window.wsb['context-bs-3']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"archivo-black\",\"montserrat\",\"source-sans-pro\"],\"colors\":[\"#800000\"],\"fontScale\":\"medium\",\"locale\":\"en-GB\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"8a8cb90d-4d96-4658-80d6-f050fc1e34d8\":{\"pageId\":\"5543b1f3-b65f-422c-a49d-284a75a85fd4\",\"routePath\":\"/\"}},\"isHomepage\":true,\"navigationMap\":{\"5543b1f3-b65f-422c-a49d-284a75a85fd4\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"5543b1f3-b65f-422c-a49d-284a75a85fd4\",\"name\":\"Home\",\"href\":\"/\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"59f98713-470f-40c0-b721-b38a5f524fd4\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"59f98713-470f-40c0-b721-b38a5f524fd4\",\"name\":\"404\",\"href\":\"/404\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[\"404\"],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9a542cb0-8a2e-4c4a-b393-a1fa8f91b50e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9a542cb0-8a2e-4c4a-b393-a1fa8f91b50e\",\"name\":\"Dex\",\"href\":\"https://ape.store/base/0x97abd7b183eabf19acf2c40e931851ebdb5fa010\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"c6ff36d0-d256-4087-a202-007113450c9a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c6ff36d0-d256-4087-a202-007113450c9a\",\"name\":\"X\",\"href\":\"https://x.com/basedarkbrett\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"f7edfc84-a1c3-412f-8383-4661a35b8279\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"f7edfc84-a1c3-412f-8383-4661a35b8279\",\"name\":\"TG\",\"href\":\" https://t.me/basedarkbrett\",\"target\":\"_blank\",\"visible\":true,\"isSectionLink\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#800000\",\"meta\":{\"primary\":\"rgb(128, 0, 0)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"archivo-black\",\"description\":\"\",\"tags\":[\"sans-serif\",\"modern\",\"clean\",\"bold\"],\"meta\":{\"order\":3,\"primary\":{\"id\":\"archivo-black\",\"name\":\"Archivo Black\",\"url\":\"//fonts.googleapis.com/css?family=Archivo+Black:400&display=swap\",\"family\":\"'Archivo Black', arial, sans-serif\",\"size\":14,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:400,700&display=swap\",\"family\":\"'Montserrat', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"languages\":[\"en\"],\"meta\":{\"primary\":{\"styles\":{\"textTransform\":\"uppercase\"}}}},{\"locales\":[\"vi-VN\"],\"meta\":{\"primary\":{\"family\":\"Arial, sans-serif\"}}}]},\"alternate\":{\"id\":\"montserrat\",\"description\":\"Urban, upright, fonts that offer stylish, contemporary professionalism.\",\"tags\":[\"sans-serif\",\"modern\",\"clean\"],\"meta\":{\"order\":11,\"alternate\":{\"id\":\"montserrat\",\"name\":\"Montserrat\",\"url\":\"//fonts.googleapis.com/css?family=Montserrat:400,700&display=swap\",\"family\":\"'Montserrat', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}}},\"logo\":{\"id\":\"source-sans-pro\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":37.5,\"logo\":{\"id\":\"source-sans-pro\",\"name\":\"Source Sans Pro\",\"url\":\"//fonts.googleapis.com/css?family=Source+Sans+Pro:600,900&display=swap\",\"family\":\"'Source Sans Pro', arial, sans-serif\",\"size\":16,\"weight\":900,\"weights\":[600,900],\"styles\":{\"textTransform\":\"none\",\"fontWeight\":900,\"letterSpacing\":\"0\"}}}}}},\"theme\":\"Theme28\"}");
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/HTML/bs-Component',props:JSON.parse("{\"data-aid\":\"AUTOIFRAME_RENDERED\",\"centerContent\":false,\"htmlSrc\":\"<iframe\\n  src=\\\"https://darkmagapfp.netlify.app\\\"\\n  style=\\\"border: 0px #ffffff none\\\"\\n  name=\\\"pfp\\\"\\n  sandbox=\\\"allow-scripts allow-downloads\\\"\\n  scrolling=\\\"no\\\"\\n  frameborder=\\\"1\\\"\\n  marginheight=\\\"0px\\\"\\n  marginwidth=\\\"0px\\\"\\n  height=\\\"600px\\\"\\n  width=\\\"800px\\\"\\n  allowfullscreen\\n></iframe>\\n\\n\",\"order\":0,\"widgetId\":\"21451fd9-62a3-4b7b-96c7-c88513460c49\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-GB\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"21451fd9-62a3-4b7b-96c7-c88513460c49\",\"widgetType\":\"HTML\",\"widgetPreset\":\"html1\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-3',radpack:"@widget/HTML/bs-Component"},false);
window.wsb["MarqueeScript"]=function(e){var a,t;const{marqueeId:o,contentId:n,clonesId:r,bannerId:l,speed:c,iterations:i}=e,s=!("undefined"!=typeof window&&(null===(a=(t=window).matchMedia)||void 0===a?void 0:a.call(t,"(prefers-reduced-motion: reduce)").matches)),d=document.getElementById(o);if(!1===s)return void d.setAttribute("data-scrolling","false");let g=i;let p=i,u=0,b=0;const m=document.getElementById(n),y=document.getElementById(r),f=document.getElementById(l);function E(e){let a;if(e.borderBoxSize){a=(Array.isArray(e.borderBoxSize)?e.borderBoxSize[0]:e.borderBoxSize).inlineSize}else a=e.target.getBoundingClientRect().width;return a}const w=new ResizeObserver((e=>{for(const a of e){const e=E(a),t=e>u;u=e,t&&150!==p&&R()}})),h=new ResizeObserver((e=>{for(const a of e)b=E(a),R()}));function R(){if(u&&b){const e=Math.ceil(2*u/b),a=e+e%2;if(g=Math.min(150,Math.max(i,a)),f.style.animationDuration=b*g*c+"s",p===g)return;p=g;const t=y.firstElementChild.cloneNode(!0);y.innerHTML=t.outerHTML.repeat(g-1)}}return w.observe(d),h.observe(m),()=>{w.disconnect(),h.disconnect()}};
window.wsb["MarqueeScript"](JSON.parse("{\"marqueeId\":\"marquee_119765\",\"contentId\":\"marquee_119765_content\",\"clonesId\":\"marquee_119765_clones\",\"bannerId\":\"marquee_119765_banner\",\"speed\":0.011,\"iterations\":6}"));
window.wsb["CookieBannerScript"]=function(e){let{id:t,acceptCookie:o,dismissCookie:a}=e;const n=864e5;let i,l,r;function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const o=new Date;o.setTime(o.getTime()+n*t);const a=`expires=${o.toUTCString()}`;document.cookie=`${e}=true;${a};path=/`}function c(e){return document.cookie.includes(e)}function p(){l&&l.removeEventListener("click",g),r&&r.removeEventListener("click",d),i.style.display="none"}function g(e){e.preventDefault(),u(),s(a),s(o),p()}function d(e){var t;e.preventDefault(),s(a),c(o)&&(t=o,document.cookie=`${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`),p()}function u(){window._allowCT=!0,window._allowCTListener&&window._allowCTListener.forEach((e=>e()))}c(o)?u():c(a)||setTimeout((()=>{i=document.getElementById(`${t}-banner`),l=document.getElementById(`${t}-accept`),r=document.getElementById(`${t}-decline`),l&&l.addEventListener("click",g),r&&r.addEventListener("click",d),i.style.transform="translateY(-500px)"}),200)};
window.wsb["CookieBannerScript"](JSON.parse("{\"id\":\"505fab5c-dee9-4623-9911-f458ede15e39\",\"dismissCookie\":\"cookie_warning_dismissed\",\"acceptCookie\":\"cookie_terms_accepted\"}"));
document.getElementById('page-119727').addEventListener('click', function() {}, false);
var t=document.createElement("script");t.type="text/javascript",t.addEventListener("load",()=>{window.tti.calculateTTI(({name:t,value:e}={})=>{let i={"wam_site_hasPopupWidget":false,"wam_site_hasMessagingWidget":false,"wam_site_headerTreatment":"Fill","wam_site_hasSlideshow":false,"wam_site_hasFreemiumBanner":false,"wam_site_homepageFirstWidgetType":"HTML","wam_site_homepageFirstWidgetPreset":"html1","wam_site_businessCategory":"personal_hobby","wam_site_theme":"layout28","wam_site_locale":"en-GB","wam_site_fontPack":"archivo-black","wam_site_cookieBannerEnabled":true,"wam_site_membershipEnabled":true,"wam_site_hasHomepageHTML":true,"wam_site_hasHomepageShop":false,"wam_site_hasHomepageOla":false,"wam_site_hasHomepageBlog":false,"wam_site_hasShop":false,"wam_site_hasOla":false,"wam_site_planType":"personal","wam_site_isHomepage":true,"wam_site_htmlWidget":true};window.networkInfo&&window.networkInfo.downlink&&(i=Object.assign({},i,{["wam_site_networkSpeed"]:window.networkInfo.downlink.toFixed(2)})),window.tti.setCustomProperties(i),window.tti._collectVitals({name:t,value:e})})}),t.setAttribute("src","//img1.wsimg.com/traffic-assets/js/tccl-tti.min.js"),document.body.appendChild(t);
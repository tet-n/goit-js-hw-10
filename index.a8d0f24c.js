function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,l=c||a||Function("return this")(),s=Object.prototype.toString,d=Math.max,p=Math.min,v=function(){return l.Date.now()};function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=r.test(t);return n||u.test(t)?f(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(T,e),l?b(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function T(){var t=v();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,r-(t-a)):n}(t))}function w(t){return f=void 0,g&&o?b(t):(o=i=void 0,u)}function _(){var t=v(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,e),b(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=m(e)||0,y(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(m(n.maxWait)||0,e):r,g="trailing"in n?!!n.trailing:g),_.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},_.flush=function(){return void 0===f?u:w(v())},_};new URLSearchParams({});const g=document.querySelector("#search-box"),b=document.querySelector(".country-list"),h=document.querySelector(".country-info");function j(t){if(t.length>=2){let e=t.map((({name:t,flags:e})=>`<li class="country__item"><img src="${e.svg}" class="country__img" /><h2 class="country__heading">${t.official}</h2>\n        </li>`)).join("");console.log(e),T(e)}}function T(t="",e=""){b.innerHTML=t,h.innerHTML=e}g.addEventListener("input",t(e)((function(t){const e=t.target.value.trim().toLowerCase();if(""===e)return void T();(n=e,fetch(`https://restcountries.com/v3.1/name/${n}?fields=name,capital,currencies,population,flags,languages`).then((t=>t.json()))).then(j);var n}),300));
//# sourceMappingURL=index.a8d0f24c.js.map

function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var i,r,o,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,u=setTimeout(h,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=o}function h(){var e=g();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-f);return s?m(n,o-(e-l)):n}(e))}function w(e){return u=void 0,v&&i?b(e):(i=r=void 0,a)}function O(){var e=g(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===u)return j(f);if(s)return u=setTimeout(h,t),b(f)}return void 0===u&&(u=setTimeout(h,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==u&&clearTimeout(u),l=0,i=f=r=u=void 0},O.flush=function(){return void 0===u?a:w(g())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:i,maxWait:t,trailing:r})};const b=document.querySelector(".js-feedback-form");var j;const S=null!==(j=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==j?j:{email:"",message:""},h=document.querySelector(".js-input"),w=document.querySelector(".js-text-area");h.value=S.email,w.value=S.message,b.addEventListener("input",e(t)((function(e){"email"===e.target.name&&(S.email=e.target.value);"message"===e.target.name&&(S.message=e.target.value);localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),S.email&&S.message?(console.log(S),b.reset(),localStorage.clear()):alert("Всі поля форми повинні бути заповнені!")}));
//# sourceMappingURL=03-feedback.2b1caa4c.js.map

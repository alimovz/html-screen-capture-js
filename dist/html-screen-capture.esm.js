var e,t;!function(e){e.OBJECT="object",e.STRING="string"}(e||(e={})),function(e){e.DEBUG="debug",e.INFO="info",e.WARN="warn",e.ERROR="error",e.FATAL="fatal",e.OFF="off"}(t||(t={}));let n=t.WARN;const o=(e,o)=>{const r=[t.DEBUG,t.INFO,t.WARN,t.ERROR,t.FATAL,t.OFF];r.indexOf(o)>=r.indexOf(n)&&console.log("|html-screen-capture-js|"+o+"| "+e)},r=()=>n===t.DEBUG,s=(e=t.WARN)=>{n=e},a=e=>{o(e,t.DEBUG)},l=e=>{o(e,t.INFO)},c=e=>{o(e,t.WARN)},i=e=>{o(e,t.ERROR)},d=e=>{let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";let o,r,s,a,l,c,i,d=0;for(e=(e=>{const t=e.replace(/\r\n/g,"\n");let n="";for(let e=0;e<t.length;e++){const o=t.charCodeAt(e);o<128?n+=String.fromCharCode(o):o>127&&o<2048?(n+=String.fromCharCode(o>>6|192),n+=String.fromCharCode(63&o|128)):(n+=String.fromCharCode(o>>12|224),n+=String.fromCharCode(o>>6&63|128),n+=String.fromCharCode(63&o|128))}return n})(e);d<e.length;)o=e.charCodeAt(d++),r=e.charCodeAt(d++),s=e.charCodeAt(d++),a=o>>2,l=(3&o)<<4|r>>4,c=(15&r)<<2|s>>6,i=63&s,isNaN(r)?c=i=64:isNaN(s)&&(i=64),t=t+n.charAt(a)+n.charAt(l)+n.charAt(c)+n.charAt(i);return t},u=(e,t,n)=>{(e=>{const t=(e=>{const t=e.className,n="[object SVGAnimatedString]"===t.toString()?t.baseVal:t;return"string"==typeof n?n:""})(e);return(t?t.split(" "):[]).reduce(((e,t)=>(t&&e.push(t),e)),[])})(n).length,n.getAttribute("style")},m=(e,t)=>{let n="";try{e.canvas||(e.canvas=e.doc.createElement("canvas")),e.canvas.width=t instanceof HTMLImageElement?t.naturalWidth:t.offsetWidth,e.canvas.height=t instanceof HTMLImageElement?t.naturalHeight:t.offsetHeight;const o=e.canvas.getContext("2d");o&&o.drawImage(t,0,0),n=e.canvas.toDataURL(e.options.imageFormatForDataUrl,e.options.imageQualityForDataUrl)}catch(e){c(`getCanvasDataUrl() - ${e.message}`)}return n},g=(e,t)=>{if(e.ignoredElms.includes(t))return!0;const n=Object.entries(e.options.computedStyleKeyValuePairsOfIgnoredElements);if(e.isBody&&n.length>0){const e=getComputedStyle(t);for(const[t,o]of n)if(e.getPropertyValue(t)===o)return!0}return!1},h=(e,t,n,o)=>{if(e.isBody&&(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement?((e,t)=>{t.setAttribute("value",e.value);const n=e.getAttribute("type");if(e instanceof HTMLInputElement&&("checkbox"===n||"radio"===n))e.checked?t.setAttribute("checked","checked"):t.removeAttribute("checked");else if(e instanceof HTMLTextAreaElement&&e.value)t.innerText=e.value;else if(e instanceof HTMLSelectElement&&e.value&&e.children)for(let n=e.children.length-1;n>=0;n--)e.children[n].getAttribute("value")===e.value?t.children[n].setAttribute("selected",""):t.children[n].removeAttribute("selected")})(t,n):t instanceof HTMLImageElement?((e,t,n)=>{if(e.shouldHandleImgDataUrl){const o=m(e,t);o&&n.setAttribute("src",o)}})(e,t,n):t instanceof HTMLCanvasElement&&((e,t,n)=>{const o=m(e,t);o&&n.setAttribute("src",o),n.outerHTML=n.outerHTML.replace(/<canvas/g,"<img")})(e,t,n)),o&&(u(0,0,n),e.options.tagsOfSkippedElementsForChildTreeCssHandling.includes(t.tagName.toLowerCase())&&(o=!1)),t.children)for(let r=t.children.length-1;r>=0;r--)g(e,t.children[r])?n.removeChild(n.children[r]):h(e,t.children[r],n.children[r],o)},f=e=>{e.ignoredElms=(e=>{if(!e.options.cssSelectorsOfIgnoredElements||!e.options.cssSelectorsOfIgnoredElements.length)return[];const t=[];return e.options.cssSelectorsOfIgnoredElements.forEach((n=>{e.doc.documentElement.querySelectorAll(n).forEach((e=>{t.push(e)}))})),t})(e);const t=(()=>{const t=e.doc.documentElement.cloneNode(!1);return u(0,e.doc.documentElement,t),t})();return(t=>{const n=e.doc.head.cloneNode(!0);e.isBody=!1,h(e,e.doc.head,n,!1),t.appendChild(n)})(t),(t=>{(e=>{const t=e.doc.createElement("div");t.id="html-screen-capture-dummy-div",t.style.display="none",e.doc.body.appendChild(t);const n=getComputedStyle(t);for(let t=0;t<n.length;t++){const o=n.item(t),r=n.getPropertyValue(o);e.baseClass.set(o,r)}e.baseClass.set("display","block"),t.parentNode&&t.parentNode.removeChild(t)})(e);const n=e.doc.body.cloneNode(!0);e.isBody=!0,h(e,e.doc.body,n,!0),t.appendChild(n)})(t),(t=>{const n=e.doc.createElement("style");let o=`.${e.options.prefixForNewGeneratedClasses}0{`;e.baseClass.forEach(((e,t)=>{o+=`${t}:${e};`})),o+="}",e.classMap.forEach(((e,t)=>{o+=`.${e}{${t}}`})),o+=e.pseudoStyles.join(""),o+=e.options.rulesToAddToDocStyle.join(""),n.appendChild(e.doc.createTextNode(o))})(),t},p=(t,n)=>{let o=null;if(n===e.OBJECT)o=t;else{const r=(t?t.outerHTML:"")||"";r&&(n===e.STRING?o=r:"uri"===n?o=((s=r)?encodeURI(s):"")||"":"base64"===n&&(o=d(r))),o=o||""}var s;return r()&&a(`output: ${o instanceof HTMLElement?o.outerHTML:o}`),o},C=(n,o,r)=>((n,o,r)=>{const a=(new Date).getTime();let c=null;const d={isBody:!1,baseClass:new Map,classMap:new Map,classCount:0,pseudoStyles:[],pseudoClassCount:0,shouldHandleImgDataUrl:!0,canvas:null,doc:o||document,ignoredElms:[],options:{rulesToAddToDocStyle:[],cssSelectorsOfIgnoredElements:["script","link","style"],computedStyleKeyValuePairsOfIgnoredElements:{display:"none"},tagsOfSkippedElementsForChildTreeCssHandling:["svg"],attrKeyForSavingElementOrigClass:"_class",attrKeyForSavingElementOrigStyle:"_style",prefixForNewGeneratedClasses:"c",prefixForNewGeneratedPseudoClasses:"p",imageFormatForDataUrl:"image/png",imageQualityForDataUrl:.92,logLevel:t.WARN,...r||{}}};try{s(d.options.logLevel);const t=f(d);c=p(t,n||e.OBJECT)}catch(e){i(`goCapture() - error - ${e.message}`)}finally{l(`goCapture() - end - ${(new Date).getTime()-a}ms`)}return c})(n,o,r);export{t as LogLevel,e as OutputType,C as capture};
//# sourceMappingURL=html-screen-capture.esm.js.map

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"pI8e":[function(require,module,exports) {
for(var t=$(".total-reached"),e=$(".total-cost"),o=$(".per-person"),l=0;l<t.length;l++)t[l].setAttribute("id","total-reached-"+l),console.log(t[l]),e[l].setAttribute("id","total-cost-"+l),console.log(e[l]),o[l].setAttribute("id","per-person-"+l),console.log(o[l]);var r=[],s=[];for(l=0;l<t.length;l++)r.push($("#total-reached-"+l).text()),console.log(r[l]),s.push($("#total-cost-"+l).text()),console.log(s[l]);var a=[];for(l=0;l<t.length;l++){var c=parseInt(s[l].replace(/,/g,""))/parseInt(r[l].replace(/,/g,""));console.log(c),c=(c*=100).toFixed(2),console.log(c),c="~"+c+"¢",console.log(c),a.push(c)}for(l=0;l<t.length;l++)r[l]=r[l].replace(/\B(?=(\d{3})+(?!\d))/g,","),r[l]=r[l]+"+",s[l]=s[l].replace(/\B(?=(\d{3})+(?!\d))/g,","),s[l]="$"+s[l];for(l=0;l<t.length;l++)$("#total-reached-"+l).text(r[l]),$("#total-cost-"+l).text(s[l]),$("#per-person-"+l).text(a[l]);
},{}],"v9Q8":[function(require,module,exports) {
$(".footer-link:not(.t3)").hover(function(){$(".footer-link:not(.t3)").css("opacity","0.4"),$(this).css("opacity","1")},function(){$(".footer-link:not(.t3)").css("opacity","1")});
},{}],"mpXm":[function(require,module,exports) {
$("#download-link").click(function(){var e=document.getElementById("img-to-download").src,t=document.getElementById("img-name").textContent;fetch(e).then(function(e){return e.blob()}).then(function(e){var n=URL.createObjectURL(e),c=document.createElement("a");c.href=n,c.download=t+".png",c.click(),URL.revokeObjectURL(n)}).catch(function(e){console.error("Error fetching the image:",e)})});
},{}],"N83G":[function(require,module,exports) {
var t=$("#thumb-value"),e=$(".thumb-svg-1"),o=$(".thumb-svg-2"),r=$("#range"),n=$(".range-fill"),f=$(".thumb-value-inner"),s=r.outerWidth(),a=r.offset().left,l=a+s,i=Array.from({length:9},function(t,e){return s/8*e});function u(){var r=e.position().left,a=r+e.outerWidth()/2;o.css("left",r+"px"),t.css("left",a-t.outerWidth()/2+"px"),n.css("width",r+"px");for(var l=Math.round(r/s*49e4+1e4),u=0;u<i.length;u++)if(Math.abs(r-i[u])<=10){l=Math.round(i[u]/s*49e4+1e4);break}l=l.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),f.text(l)}t.css("width",e.outerWidth()),t.css("pointer-events","none"),e.offset({left:s-e.offset().left}),o.offset({left:s-o.offset().left});var h=setInterval(u,1);e.draggable({axis:"x",containment:[a,0,l,0],drag:function(){var t=e.position().left,o=e.outerWidth();t+o/2>l/2&&e.css("left",l-t-o)}}),console.log("Total range = "+s);
},{}],"wPwk":[function(require,module,exports) {
$("[data-click='stay-open']").each(function(){$(this).click().css("pointer-events","none")});
},{}],"EQgT":[function(require,module,exports) {
if(window.innerWidth>768){function n(){$("[indent]").each(function(){var n=$(this).attr("indent");if($("#"+n).length>0){var t=$("#"+n).outerWidth();console.log("indentWidth of "+n+" is "+t),$(this).css("text-indent",t+"px")}else console.log("Element with id "+n+" does not exist.")})}$(document).ready(function(){n()}),$(window).resize(function(){n()})}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./cs-calc.js"),require("./footer.js"),require("./img-download.js"),require("./pricing-calc-min.js"),require("./stay-open.js"),require("./text-indent.js");
},{"./cs-calc.js":"pI8e","./footer.js":"v9Q8","./img-download.js":"mpXm","./pricing-calc-min.js":"N83G","./stay-open.js":"wPwk","./text-indent.js":"EQgT"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map
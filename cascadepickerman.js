!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.fastman=a():e.fastman=a()}(this,function(){return webpackJsonpfastman([26],{205:function(e,a,l){e.exports=l(81)},81:function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var u=l(31),s=function(e){return e&&e.__esModule?e:{default:e}}(u),t=function(e){for(var a=0,l=0;l<e.length;l++){0===a&&(a=1);var u=e[l].sub;if(u)for(var s=0;s<u.length;s++){1===a&&(a=2);var t=u[s].sub;if(t)for(var n=0;n<t.length;n++)return 3}}return a};a.default=function(e,a){var l=$(e);if(l.length&&a.data){var u=a.data,n=function(e,a){for(var l=[],u=0;u<e.length;u++){var s=e[u];l.push(s[a])}return l.length?l:[""]},r=function(e,a){return e.sub?n(e.sub,a):[""]},o=function(e,a){for(var l=0;l<u.length;l++)if(u[l].value===e)return r(u[l],a);return[""]},c=function(e,a,l){for(var s=0;s<u.length;s++)if(u[s].value===e)for(var t=0;t<u[s].sub.length;t++)if(u[s].sub[t].value===a)return r(u[s].sub[t],l);return[""]},v=t(u);if(0!==v){var i=[""];v>0&&(i=u.map(function(e){return e.name}));var f=[""];v>0&&(f=u.map(function(e,a){return e.value}));var p=[""];v>1&&(p=r(u[0],"name"));var d=[""];v>1&&(d=r(u[0],"value"));var h=[""],g=[""];v>2&&(u[0].sub?(h=r(u[0].sub[0],"name"),g=r(u[0].sub[0],"value")):(h=[""],g=[""]));var m,b=f[0],y=d[0],x=g[0],V={cssClass:"city-picker",rotateEffect:!1,onChange:function(e,a,l){var u,s=e.cols[0].value;if(s!==b)return clearTimeout(m),void(m=setTimeout(function(){if(v>1){var a=o(s,"name"),l=o(s,"value");u=l[0],e.cols[1].replaceValues(l,a),y=u}if(v>2){var t=c(s,u,"name"),n=c(s,u,"value");e.cols[2].replaceValues(n,t)}b=s,e.updateValue()},200));3===v&&(u=e.cols[1].value)!==y&&(e.cols[2].replaceValues(c(s,u,"value"),c(s,u,"name")),y=u,e.updateValue())},cols:[]};return 1===v?V.cols.push({textAlign:"center",displayValues:i,values:f,cssClass:"col-province"}):2===v?(V.cols.push({textAlign:"center",displayValues:i,values:f,cssClass:"col-province"}),V.cols.push({textAlign:"center",displayValues:p,values:d,cssClass:"col-city"})):3===v&&(V.cols.push({textAlign:"center",displayValues:i,values:f,cssClass:"col-province"}),V.cols.push({textAlign:"center",displayValues:p,values:d,cssClass:"col-city"}),V.cols.push({textAlign:"center",displayValues:h,values:g,cssClass:"col-district"})),l.each(function(){var l=$.extend(V,a);if(l.value)$(this).val(l.value.join(" "));else{var u=$(this).val();u&&(l.value=u.split(" "))}l.value&&(l.value[0]&&(b=l.value[0],l.cols[1].values=o(l.value[0])),l.value[1]?(y=l.value[1],l.cols[2].values=c(l.value[0],l.value[1])):l.cols[2].values=c(l.value[0],l.cols[1].values[0]),!l.value[2]&&(l.value[2]=""),x=l.value[2]),(0,s.default)(e,l)})}}}}},[205])});
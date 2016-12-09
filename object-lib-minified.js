/*
@filename:object-lib-minified.js
@author:Zia haider
@created on:12-09-2016
*/
function createObject(e,t,n){lastKeyIndex=t.length-1;for(var a=0;a<lastKeyIndex;++a)key=t[a],key in e||(e[key]={}),e=e[key];e[t[lastKeyIndex]]=n}$.fn.serializeObject=function(){var e={};return $(this).find("[name]").each(function(){var t=$(this).attr("name"),n=$(this).val(),a=t.split("->");createObject(e,a,n)}),e};

;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="0492da99ffb96c204c521bb917ed0d9e";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["6uDKnjYlt7tz"]={appId:"tkjCIVH4cxYv",scope:{}};;CloudflareApps.installs["6uDKnjYlt7tz"].options={"location":{"method":"after","selector":"body"},"placeholder-button":"立即搜索","placeholder-field":"搜点啥","styling-button":"border-top-right-radius: 10px;\nborder-bottom-right-radius: 10px;\nheight: 40px;\nborder: 0;","styling-field":"width: 200px;\nmargin-left: -10px;\nborder-top-left-radius: 10px;\nborder-bottom-left-radius: 10px;\nborder: 0;\nheight: 40px;","styling-form":"margin: 5px;"};;CloudflareApps.installs["6uDKnjYlt7tz"].selectors={"location.selector":"body"};;CloudflareApps.installs["WgQ6yBl0rdh4"]={appId:"Bqo4JBRinHeM",scope:{}};;CloudflareApps.installs["WgQ6yBl0rdh4"].options={"advanced":{"action":"like","share":true,"showFaces":false,"url":"","urlType":"automatic"},"layout":"standard","location":{"method":"after","selector":"h1"},"showAdvanced":true};;CloudflareApps.installs["WgQ6yBl0rdh4"].selectors={"location.selector":"h1"};;CloudflareApps.installs["hAVblqCQpymH"]={appId:"1tcqRqrLIaSI",scope:{}};;CloudflareApps.installs["hAVblqCQpymH"].options={"disableOrigin":false,"options":{"disableOrigin":false},"showGettingStarted":true,"siteName":"1703.site"};;CloudflareApps.installs["hAVblqCQpymH"].product={"id":"free"};;if(CloudflareApps.matchPage(CloudflareApps.installs['WgQ6yBl0rdh4'].URLPatterns)){(function(){if(!document.addEventListener)return
var options=CloudflareApps.installs['WgQ6yBl0rdh4'].options
var isPreview="WgQ6yBl0rdh4"==='preview'
var element
function fbAsyncInit(){window.FB.init({appId:'819140248140343',xfbml:false,version:'v2.9'})
window.FB.AppEvents.logPageView()
updateElement()}
function loadFacebookScript(){var rootId='fb-root'
var sdkId='facebook-jssdk'
if(document.getElementById(rootId)&&document.getElementById(sdkId))return
var root=document.createElement('div')
root.id=rootId
document.body.appendChild(root)
var script=document.createElement('script')
script.id=sdkId
script.src='//connect.facebook.net/en_US/sdk.js'
var firstScript=document.getElementsByTagName('script')[0]
firstScript.parentNode.insertBefore(script,firstScript)
window.fbAsyncInit=fbAsyncInit}
function getCanonicalURL(){var url=isPreview?CloudflareApps.proxy.originalURL.raw:document.location.href
if(!document.head)return url
var link=document.head.querySelector('link[rel="canonical"][href]')
if(!link)return url
return link.getAttribute('href')}
function updateElement(){element=CloudflareApps.createElement(options.location,element)
if(!element||!element.parentNode)return
var attributes={class:'fb-like',app:'like-button','cf-env':isPreview?'preview':'production','data-href':options.advanced.urlType==='automatic'?getCanonicalURL():options.advanced.url,'data-layout':options.layout,'data-action':options.advanced.action,'data-share':options.advanced.share,'data-show-faces':options.advanced.showFaces}
Object.keys(attributes).forEach(function(key){element.setAttribute(key,attributes[key])})
window.FB.XFBML.parse()}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',loadFacebookScript)}else{loadFacebookScript()}
window.CloudflareApps.installs['WgQ6yBl0rdh4'].scope={setOptions:function setOptions(nextOptions){options=nextOptions
if(element&&element.parentNode){element.parentNode.removeChild(element)
element=null}
updateElement()}}}())};(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter});}};__webpack_require__.r=function(exports){if(typeof Symbol!=='undefined'&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:'Module'});}
Object.defineProperty(exports,'__esModule',{value:true});};__webpack_require__.t=function(value,mode){if(mode&1)value=__webpack_require__(value);if(mode&8)return value;if((mode&4)&&typeof value==='object'&&value&&value.__esModule)return value;var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,'default',{enumerable:true,value:value});if(mode&2&&typeof value!='string')for(var key in value)__webpack_require__.d(ns,key,function(key){return value[key];}.bind(null,key));return ns;};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module['default'];}:function getModuleExports(){return module;};__webpack_require__.d(getter,'a',getter);return getter;};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property);};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s="./src/index.js");})
({"./src/index.js":(function(module,exports){function init(){if(!window.addEventListener)return
let globalHtmlTemplateCache=""
window.CloudflareApps.installs['hAVblqCQpymH'].scope={updateProduct:nextProduct=>{console.log("CloudflareApps.installs['hAVblqCQpymH'].options",CloudflareApps.installs['hAVblqCQpymH'].options)
if(nextProduct.id==="free"){globalHtmlTemplateCache=CloudflareApps.installs['hAVblqCQpymH'].options.htmlTemplate
CloudflareApps.installs['hAVblqCQpymH'].options.htmlTemplate=""}else{CloudflareApps.installs['hAVblqCQpymH'].options.htmlTemplate=""
CloudflareApps.installs['hAVblqCQpymH'].options.htmlTemplate=globalHtmlTemplateCache}},}}
init()})});;(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Y2xvdWRmbGFyZS1hcHBbYXBwPSJsaWtlLWJ1dHRvbiJdIHsKICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Cn0KCmNsb3VkZmxhcmUtYXBwW2FwcD0ibGlrZS1idXR0b24iXVtjZi1lbnY9InByZXZpZXciXSA+IHNwYW4sCmNsb3VkZmxhcmUtYXBwW2FwcD0ibGlrZS1idXR0b24iXVtjZi1lbnY9InByZXZpZXciXSA+IHNwYW4gPiBpZnJhbWUgewogIGhlaWdodDogYXV0byAhaW1wb3J0YW50OwogIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7CiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsKfQo=';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();(function(){var script = document.createElement('script');script.src = '/cdn-cgi/apps/body/kHZK8gLrgp05weYOBiN2guIAabo.js';document.head.appendChild(script);})();
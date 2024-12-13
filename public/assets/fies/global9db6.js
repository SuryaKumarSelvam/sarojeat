var Barracuda={};function prevent(event){event&&event.preventDefault()}Barracuda.createStats=function(){var stats=document.querySelector(".stats");if(stats){const vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),scrollbarWidth=window.innerWidth-document.body.clientWidth;stats.innerHTML=""+vw+" px<br>"+vh+" px<br>"+(scrollbarWidth>30?"<s>"+scrollbarWidth+"px</s>":scrollbarWidth+"px"),document.querySelector(".overlay")&&(document.querySelector(".overlay").style.width=vw+"px",document.querySelector(".overlay").style.height=vh+"px")}},Shopify.formatMoney=function(cents,format){typeof cents=="string"&&(cents=cents.replace(".",""));var value="",placeholderRegex=/{{\s*(\w+)\s*}}/,formatString=format||this.money_format;function defaultOption(opt,def){return typeof opt>"u"?def:opt}function formatWithDelimiters(number,precision,thousands,decimal){if(precision=defaultOption(precision,2),thousands=defaultOption(thousands,","),decimal=defaultOption(decimal,"."),isNaN(number)||number==null)return 0;number=(number/100).toFixed(precision);var parts=number.split("."),dollars=parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+thousands),cents2=parts[1]?decimal+parts[1]:"";return dollars+cents2}switch(formatString.match(placeholderRegex)[1]){case"amount":value=formatWithDelimiters(cents,2);break;case"amount_no_decimals":value=formatWithDelimiters(cents,0);break;case"amount_with_comma_separator":value=formatWithDelimiters(cents,2,".",",");break;case"amount_no_decimals_with_comma_separator":value=formatWithDelimiters(cents,0,".",",");break}return formatString.replace(placeholderRegex,value)};function getCookie(cname){let name=cname+"=",ca=decodeURIComponent(document.cookie).split(";");for(let i=0;i<ca.length;i++){let c=ca[i];for(;c.charAt(0)==" ";)c=c.substring(1);if(c.indexOf(name)==0)return c.substring(name.length,c.length)}return""}function setCookie(cname,cvalue,exdays){const d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1e3);let expires="expires="+d.toUTCString();document.cookie=cname+"="+cvalue+";"+expires+";path=/"}function overlayClick(event,force=!1){(force||event.target.classList&&(event.target.classList.contains("overlay")||event.target.closest("a")&&event.target.closest("a").classList.contains("overlay-closer")))&&(document.querySelector("body").classList.remove("show-overlay"),unlockBodyPosition())}function openTopbar(event,targetName){prevent(event),target=document.getElementById(targetName),target&&(target.removeAttribute("hidden"),setTimeout(function(){target.classList.add("visible"),targetName=="menu"&&(setTimeout(Barracuda.elements.mainMenu.hideMenuLinks.bind(Barracuda.elements.mainMenu),2),setTimeout(Barracuda.elements.mainMenu.showMenuLinks.bind(Barracuda.elements.mainMenu),150)),lockBodyPosition();var focusTarget=target.querySelector(".topbar-focus");focusTarget&&focusTarget.focus()},50))}function closeTopbar(event){document.querySelectorAll(".topbar.visible").forEach(el=>{el.classList.remove("visible"),setTimeout(function(){el.setAttribute("hidden",!0)},600)}),document.querySelector(".topbar #auth-form")&&(document.querySelector(".topbar #auth-form").innerHTML=""),unlockBodyPosition()}function noScroll(event){var inside=event.target.closest(".scroll-inside");inside&&event.deltaY&&(event.deltaY>0&&inside.scrollTop+inside.offsetHeight<inside.scrollHeight||event.deltaY<0&&inside.scrollTop>0||(event.preventDefault(),event.stopPropagation(),event.stopImmediatePropagation()))}function noScrollTouchMove(event){var inside=event.target.closest(".scroll-inside");if(inside){var noScrollTouchEnd=event.changedTouches[0].clientY;noScrollTouchStartClientY>noScrollTouchEnd&&inside.scrollTop+inside.offsetHeight<inside.scrollHeight||noScrollTouchStartClientY<noScrollTouchEnd&&inside.scrollTop>0||(event.preventDefault(),event.stopPropagation(),event.stopImmediatePropagation())}}function noScrollTouchStart(event){noScrollTouchStartClientY=event.touches[0].clientY}var bodyPostionY=null,noScrollTouchStartClientY=null;function lockBodyPosition(){Barracuda.setScrollBarWidth(),document.querySelector("body").classList.add("no-scroll"),document.querySelectorAll(".scroll-inside").forEach(el=>{el.addEventListener("mousewheel",noScroll,!1),el.addEventListener("touchstart",noScrollTouchStart,!1),el.addEventListener("touchmove",noScrollTouchMove,!1)})}function unlockBodyPosition(){document.querySelector("body").classList.remove("no-scroll"),window.removeEventListener("mousewheel",noScroll),window.removeEventListener("touchstart",noScrollTouchStart),window.removeEventListener("touchmove",noScrollTouchMove)}function openSubmenu(event){prevent(event);var parentLi=event.target.closest("li"),height=parentLi.querySelector("ul").style.maxHeight;parentLi.classList.toggle("open"),height==""?parentLi.querySelector("ul").style.maxHeight=parentLi.querySelector("ul").scrollHeight+"px":parentLi.querySelector("ul").style.maxHeight="";var parentUl=event.target.closest("ul");parentUl.classList.contains("child")&&(parentUl.style.maxHeight=parentUl.scrollHeight+parentLi.querySelector("ul").scrollHeight+"px")}Barracuda.duration=300,Barracuda.fadeOut=function(el,after=null,time=Barracuda.duration){(!el.dataset.animated||el.dataset.animated=="false")&&(el.dataset.animated=!0,el.style.opacity=1,function fadeOutTemp(){el.style.opacity=parseFloat(el.style.opacity)-.02,el.style.opacity<0?(el.classList.add("hide"),el.dataset.animated=!1,el.style.opacity=0,after&&after()):setTimeout(fadeOutTemp,time/50)}())},Barracuda.fadeIn=function(el,after=null,time=Barracuda.duration){(!el.dataset.animated||el.dataset.animated=="false")&&(el.dataset.animated=!0,el.style.opacity=0,el.classList.remove("hide"),function fadeInTemp(){el.style.opacity=parseFloat(el.style.opacity)+.02,el.style.opacity>1?(el.dataset.animated=!1,el.style.opacity=1,after&&after()):setTimeout(fadeInTemp,time/50)}())},Barracuda.loadSection=function(){document.querySelectorAll(".load-section:not(.initialized)").forEach(el=>{console.log("loading section"),el.classList.add("initialized"),el.addEventListener("click",e=>{prevent(e);var currentContent=document.querySelector(".overlay-content-content>form, .overlay-content-content>div");if(currentContent&&currentContent.dataset.source){var t=document.querySelector("#"+currentContent.dataset.source);t&&t.appendChild(currentContent)}var targetElement=el.dataset.target&&document.querySelector("#"+el.dataset.target)?document.querySelector("#"+el.dataset.target):!1;targetElement||(document.querySelector(".overlay-content").innerHTML="",document.querySelector(".overlay-content").classList.add("loading"),document.querySelector("body").classList.add("show-overlay"),lockBodyPosition());var url=window.location.href;if(el.dataset.url)var url=el.dataset.url;if(!el.dataset.url&&el.closest("form")||el.dataset.useform)var url=url.split("#"),url=url[0]+(url[0].includes("?")?"&":"?")+new URLSearchParams(Array.from(new FormData(el.closest("form"))));var url=url.split("#"),url_section=url[0]+(url[0].includes("?")?"&":"?")+"sections="+el.dataset.section;return el.dataset.urlset&&window.history.pushState("","",url[0]),axios.get(url_section).then(function(response){var code=response.data&&response.data[el.dataset.section]?response.data[el.dataset.section]:!1;if(code){if(code=code.replace(/__CURRENT_URL_WITH_APPEND__/g,url[0]+(url[0].includes("?")?"&":"?")),code=code.replace(/__CURRENT_URL__/g,url[0]),targetElement)if(targetElement.classList.remove("loading"),targetElement.innerHTML!="")Barracuda.fadeOut(targetElement,(()=>{if(el.dataset.part){var candidate2=document.createElement("div");candidate2.innerHTML=code,code=candidate2.querySelector("."+el.dataset.part),targetElement.innerHTML="",targetElement.appendChild(code)}else targetElement.innerHTML=code;Barracuda.init(),Barracuda.elements.init(),Barracuda.fadeIn(targetElement,Barracuda.setScrollBarWidth)}).bind(this));else{if(el.dataset.part){var candidate=document.createElement("div");candidate.innerHTML=code,code=candidate.querySelector("."+el.dataset.part),targetElement.innerHTML="",targetElement.appendChild(code)}else targetElement.innerHTML=code;Barracuda.init(),Barracuda.elements.init(),Barracuda.setScrollBarWidth()}else document.querySelector(".overlay-content").classList.remove("loading"),document.querySelector(".overlay-content").innerHTML=code,lockBodyPosition();Barracuda.init(),Barracuda.elements.init()}}).catch(function(error){targetElement||(document.querySelector("body").classList.remove("show-overlay"),document.querySelector(".overlay-content").classList.remove("loading")),console.warn(error)}),!1},!1)})},Barracuda.loadPage=function(){document.querySelectorAll(".load-page:not(.initialized)").forEach(el=>{el.classList.add("initialized"),el.addEventListener("click",e=>{prevent(e);var targetElement=el.dataset.target&&document.querySelector("#"+el.dataset.target)?document.querySelector("#"+el.dataset.target):!1,sourceId=el.dataset.source?el.dataset.source:el.dataset.target?el.dataset.target:!1,url=el.dataset.url?el.dataset.url:el.href?el.href:!1;return url=url.split("#")[0],el.dataset.urlset&&el.closest(".topbar")==null&&window.history.pushState("","",url),targetElement&&sourceId&&url&&(targetElement.classList.add("loading"),sourceId=="pagination"&&(targetElement.offsetTop-200<200?window.scrollTo({top:0,left:0,behavior:"smooth"}):window.scrollTo({top:targetElement.offsetTop-200,left:0,behavior:"smooth"})),axios.get(url).then(function(response){if(response.data){var x=document.createElement("html");x.innerHTML=response.data;var source=x.querySelector("#"+sourceId);return source&&(el.parentElement.querySelectorAll(".load-page.active").forEach(function(y){y.classList.remove("active")}),el.classList.add("active"),Barracuda.fadeOut(targetElement,(()=>{sourceId!="pagination"?(targetElement.innerHTML="",targetElement.appendChild(source)):(source.classList.add("hide","loading"),targetElement.replaceWith(source),targetElement=source),targetElement.classList.remove("loading"),Barracuda.init(),Barracuda.elements.init(),Barracuda.fadeIn(targetElement,Barracuda.setScrollBarWidth)}).bind(this))),!1}return!1}).catch(function(error){console.error(error)})),!1},!1)})},Barracuda.templateOverlay=function(){document.querySelectorAll(".template-overlay:not(.initialized)").forEach(el=>{el.classList.add("initialized"),el.addEventListener("click",e=>{prevent(e);var template=document.getElementById(el.dataset.source);if(template){document.querySelector("body").classList.add("show-overlay"),document.querySelector(".overlay-content").classList.add("loading"),lockBodyPosition();var currentContent=document.querySelector(".overlay-content-content>form, .overlay-content-content>div"),target2=document.querySelector(".overlay-content");currentContent&&currentContent.dataset.source&&document.querySelector("#"+currentContent.dataset.source)&&document.querySelector("#"+currentContent.dataset.source).appendChild(currentContent),target2.innerHTML="",setTimeout(()=>{var closer=document.createElement("a");closer.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',closer.classList.add("icon","icon-x","overlay-closer");var content=document.createElement("div");content.innerHTML=template.innerHTML,content.classList.add("overlay-content-content","quick-view","quick-view-form","scroll-inside"),template.dataset.type&&content.classList.add(template.dataset.type),target2.appendChild(closer),target2.appendChild(content),content.querySelector(".map")&&setTimeout(function(){Barracuda.loadMapsScript(content)},200),Barracuda.init(),Barracuda.elements.init(),document.querySelector(".overlay-content").classList.remove("loading")},500)}})})},Barracuda.formOverlay=function(){document.querySelectorAll(".form-overlay:not(.initialized)").forEach(el=>{el.classList.add("initialized"),el.addEventListener("click",e=>{prevent(e);var newSource=document.querySelector("#"+el.dataset.source+">form, #"+el.dataset.source+">div")?document.querySelector("#"+el.dataset.source+">form, #"+el.dataset.source+">div"):!1;if(document.querySelector("body").classList.add("show-overlay"),document.querySelector(".overlay-content").classList.add("loading"),lockBodyPosition(),newSource){newSource.querySelector(".map")&&!document.getElementById("ol-script")&&Barracuda.loadMapsScript();var currentContent=document.querySelector(".overlay-content-content>form, .overlay-content-content>div"),target2=document.querySelector(".overlay-content");if(currentContent==null||currentContent&&currentContent.dataset.source!=el.dataset.source){if(currentContent&&currentContent.dataset.source){var t=document.querySelector("#"+currentContent.dataset.source);t.appendChild(currentContent)}newSource.dataset.source=el.dataset.source,target2.innerHTML="";var closer=document.createElement("a");closer.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',closer.classList.add("icon","icon-x","overlay-closer");var content=document.createElement("div");content.classList.add("overlay-content-content","quick-view","quick-view-form","scroll-inside"),newSource.dataset.type&&content.classList.add(newSource.dataset.type),content.appendChild(newSource),content.querySelector(".map")&&setTimeout(function(){Barracuda.loadMapsScript(content)},110),target2.appendChild(closer),target2.appendChild(content),setTimeout(function(){document.querySelector(".overlay-content").classList.remove("loading")},100)}else document.querySelector(".overlay-content").classList.remove("loading")}else setTimeout(function(){document.querySelector(".overlay-content").classList.remove("loading")},100)})})},Barracuda.toggleCollapsible=function(e){prevent(e);var opener=e.target.closest(".collapse-toggle");if(opener){var element=document.getElementById(opener.dataset.target);element.classList.contains("collapsed")?(element.style.height=element.scrollHeight+"px",element.classList.remove("collapsed"),setTimeout(()=>{element.style.height="auto"},500),opener.classList.add("opened")):(element.style.height=element.scrollHeight+"px",setTimeout(()=>{element.style.height="0px"},10),element.classList.add("collapsed"),opener.classList.remove("opened"))}},Barracuda.initCollapsible=function(){document.querySelectorAll(".collapse-toggle:not(.collapse-toggle-initialized)").forEach(el=>{el.addEventListener("click",Barracuda.toggleCollapsible),el.classList.add("collapse-toggle-initialized")})},Barracuda.textareaAutoresize=function(){document.querySelectorAll("textarea.autoresize:not(.autoresize-initialized)").forEach(el=>{el.addEventListener("keyup",e=>{e.target.style.height="0px",e.target.style.height=e.target.scrollHeight-(el.dataset.correction?el.dataset.correction:26)+"px"}),el.classList.add("autoresize-initialized")})},Barracuda.cookieSection=function(){document.querySelectorAll(".hide-by-cookie-section:not(.hide-by-cookie-section-initialized)").forEach(el=>{var dataEl=el.querySelector(".hide-by-coookie-data"),respawn_time=el.dataset.respawn?parseInt(el.dataset.respawn):parseInt(dataEl&&dataEl.dataset.respawn?dataEl.dataset.respawn:0);el.classList.add("hide-by-cookie-section-initialized"),(getCookie("cookie-"+el.id+"-"+respawn_time)!="closed"||Shopify.designMode)&&(el.classList.remove("hide-by-cookie"),el.querySelectorAll(".hide-by-cookie-toggle").forEach(toggle=>{toggle.addEventListener("click",()=>{el.querySelector(".badge-section")&&Barracuda.fadeOut(el.querySelector(".badge-section"),()=>{el.classList.add("hide-by-cookies")},Barracuda.duration*2),el.classList.contains("announcement-bar-content")&&(el.style.height=parseInt(el.offsetHeight)+"px",el.style.overflow="hidden",el.style.transition="height 1s ease",el.style.height="0px",setTimeout(function(){Barracuda.initAddHeight()},10)),respawn_time>0&&setCookie("cookie-"+el.id+"-"+respawn_time,"closed",respawn_time)},!1)}))})},Barracuda.loadMapsScript=function(content=null){if(document.getElementById("ol-script"))content&&content.querySelectorAll(".map.map-initialized").forEach(element=>{element.dispatchEvent(new Event("renderMap"))}),document.querySelectorAll(".map:not(.map-initialized)").forEach(element=>{new BarracudaMap(element)});else{var tag=document.createElement("script");tag.id="ol-script",tag.src=document.querySelector(".ol-url")?document.querySelector(".ol-url").dataset.url:"",document.getElementsByTagName("head")[0].appendChild(tag),window.removeEventListener("scroll",Barracuda.elements.lazyMapsListener)}},Barracuda.checkMaps=function(){typeof BarracudaMap>"u"&&Barracuda.elements.lazyMaps.forEach((element,index)=>{!document.getElementById("ol-script")&&element.getBoundingClientRect().top<=window.innerHeight+window.scrollY&&(Barracuda.loadMapsScript(),window.removeEventListener("scroll",Barracuda.checkMaps,{passive:!0}))})},Barracuda.checkVideos=function(){Barracuda.elements.lazyVideos.forEach((element,index)=>{if(element.getBoundingClientRect().top<=window.innerHeight+window.scrollY){element.src=element.dataset.src;var video=element.closest("video");video&&video.play&&video.autoplay&&video.play(),Barracuda.elements.lazyVideos.splice(index,1),Barracuda.elements.lazyVideos.length==0&&window.removeEventListener("scroll",Barracuda.elements.lazyVideosListener)}})},Barracuda.sectionPaddingForBackgroundsTwo=function(ignoreSection=!1){var type="",first=!1;if(ignoreSection)var sections=document.querySelectorAll("#page-content>.shopify-section:not(#shopify-section-header):not(#"+ignoreSection.id+")");else var sections=document.querySelectorAll("#page-content>.shopify-section:not(#shopify-section-header)");sections.forEach((element,key,elements)=>{!first&&!element.classList.contains("out-of-structure")&&(element.classList.add("first-of-content"),first=!0);var child=element.querySelector(".section-with-padding,.section-without-padding");key==0?(element.classList.add("first-of-type"),type=child?child.dataset.background:""):child?child.dataset.background==type||type=="same"?(element.classList.remove("first-of-type"),type=child.dataset.background):(element.classList.add("first-of-type"),type=child.dataset.background):(element.classList.add("first-of-type"),type="")})},Barracuda.toSquare=function(){document.querySelectorAll(".square").forEach(element=>{var width=element.offsetWidth;element.style.height=width+"px"})},Barracuda.initAddHeight=function(){let root=document.documentElement,el=document.querySelector(".announcement-bar");if(el){var addHeight=el.offsetHeight?el.offsetHeight:0;root.style.setProperty("--announcement-bar-height",addHeight+"px")}let header=document.querySelector("#header>.header");if(header){var headerHeight=header.offsetHeight?header.offsetHeight:0;root.style.setProperty("--header-height",headerHeight+"px")}},Barracuda.setScrollBarWidth=function(){if(!document.querySelector(".topbar.visible")){const scrollbarWidth=window.innerWidth-document.body.clientWidth;scrollbarWidth<60&&document.body.style.setProperty("--scrollbar-width",scrollbarWidth+"px")}},Barracuda.init=function(){Barracuda.reInit(),window.addEventListener("resize",()=>{Barracuda.toSquare(),Barracuda.setScrollBarWidth(),Barracuda.initAddHeight()}),Barracuda.elements.lazyVideos.length>0&&(Barracuda.elements.lazyVideosListener=window.addEventListener("scroll",Barracuda.checkVideos,{passive:!0}),setTimeout(Barracuda.checkVideos,3e3)),Barracuda.elements.lazyMaps.length>0&&(Barracuda.elements.lazyMapsListener=window.addEventListener("scroll",Barracuda.checkMaps,{passive:!0}),setTimeout(Barracuda.checkMaps,3e3))},Barracuda.reInit=function(){Barracuda.cookieSection(),Barracuda.initCollapsible(),Barracuda.loadSection(),Barracuda.loadPage(),Barracuda.sectionPaddingForBackgroundsTwo(),Barracuda.textareaAutoresize(),Barracuda.toSquare(),Barracuda.initAddHeight(),Barracuda.checkVideos(),Barracuda.checkMaps(),Barracuda.formOverlay(),Barracuda.templateOverlay()};class BarracudaOverlapping{constructor(){this.setOverlaping(),window.addEventListener("scroll",this.setOverlaping.bind(this)),window.addEventListener("resize",this.setOverlaping.bind(this))}setOverlaping(){document.querySelectorAll(".sidebar .icon svg,.change-color-overlap").forEach(el=>{var overlap=!1;document.querySelectorAll(".use-inverted-colors.full-width, .control-inverted").forEach(background=>{this.isOverlapping(el,background)&&(overlap=!0)}),overlap?el.classList.add("use-inverted-colors"):el.classList.remove("use-inverted-colors")})}check(){this.setOverlaping()}isOverlapping(e1,e2){e1.length&&e1.length>1&&(e1=e1[0]),e2.length&&e2.length>1&&(e2=e2[0]);const rect1=e1 instanceof Element?e1.getBoundingClientRect():!1,rect2=e2 instanceof Element?e2.getBoundingClientRect():!1;let overlap=!1;return rect1&&rect2?(overlap=!(rect1.right<rect2.left||rect1.left>rect2.right||rect1.bottom<rect2.top||rect1.top>rect2.bottom),overlap):(console.warn("Not valid HTMLElement object"),overlap)}}class BarracudaAnimatedMenu{constructor(){this.debug=!0,this.hidden=!1,this.menu=document.querySelector(".main-menu"),this.linksInMenu=this.menu?this.menu.querySelectorAll("ul:not(.child):not(.grandchild)>li"):!1}hideMenuLinks(){this.hidden||(this.hidden=!0,this.linksInMenu.forEach(function(link){link.dataset.height=link.clientHeight+1,link.style.maxHeight="0px",link.style.overflow="hidden",link.style.transition="max-height 0.55s cubic-bezier(0.32, 0.08, 0.24, 1)"}))}showMenuLinks(i=0){i==0&&(this.hidden=!1);var link=this.linksInMenu[i];link&&(link.style.maxHeight=link.dataset.height+"px",setTimeout(function(){this.removeSettings(link)}.bind(this),1e3),setTimeout(function(){this.showMenuLinks(++i)}.bind(this),6))}removeSettings(link){link&&(link.style.transition="",link.style.maxHeight="",link.style.overflow="")}}class BarracudaRichMedia{constructor(element){this.element=element,this.mediaid=element.dataset.mediaid,this.template=document.getElementById("templateid-"+this.mediaid),this.container=document.getElementById("containerid-"+this.mediaid),this.cover=this.element,this.media=null,this.type=null,this.template&&this.container?(console.log(this.element.parentElement),this.element.parentElement.querySelector("button.media-icon").addEventListener("click",this.show.bind(this),!1)):console.error("BarracudaRichMedia: Rich media not found - container or template",this.template,this.container)}getType(){this.container.querySelector(".js-youtube")&&(this.media=this.container.querySelector(".js-youtube"),this.type="youtube"),this.container.querySelector(".js-vimeo")&&(this.media=this.container.querySelector(".js-vimeo"),this.type="vimeo"),this.container.querySelector("video")&&(this.media=this.container.querySelector("video"),this.type="video")}play(){switch(console.log("BarracudaRichMedia: play",this.mediaid),this.type){case"youtube":this.media.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");break;case"vimeo":this.media.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");break;case"video":this.media.play();break}}pause(){switch(console.log("BarracudaRichMedia: pause",this.mediaid),this.type){case"youtube":this.media.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");break;case"vimeo":this.media.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");break;case"video":this.media.pause();break}}hide(){console.log("BarracudaRichMedia: hide",this.mediaid),this.container.innerHTML="",this.cover.classList.remove("hidden"),this.container.classList.add("hidden")}show(){console.log("BarracudaRichMedia: show",this.mediaid),this.cover.classList.add("hidden"),this.container.classList.remove("hidden"),this.container.innerHTML=this.template.innerHTML,this.getType(),this.stopOthers(),this.play(),setTimeout(this.play.bind(this),100)}stopOthers(){for(const[key,value]of Object.entries(Barracuda.elements.richMedia))key!=this.mediaid&&value.pause()}}class ProductModel extends HTMLElement{constructor(){super(),Shopify.loadFeatures([{name:"model-viewer-ui",version:"1.0",onLoad:this.setupModelViewerUI.bind(this)}])}setupModelViewerUI(errors){errors||(this.modelViewerUI=new Shopify.ModelViewerUI(this.querySelector("model-viewer")))}}customElements.define("product-model",ProductModel);
//# sourceMappingURL=/cdn/shop/t/16/assets/global.js.map?v=159265925085665235561727839586
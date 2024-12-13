class BarracudaGalleryV2{constructor(element){console.log(element),this.element=element,this.content=this.element.querySelector(".content"),this.zoom=null,this.slides=this.element.querySelectorAll(".slide"),this.slides.length<=1&&this.element.classList.add("hide-controls"),this.slides.length>0&&(this.currentSlide=this.element.querySelector(".slide.current")?this.element.querySelector(".slide.current"):this.slides[0],console.log(this.element),this.currentSlide.classList.add("current"),this.currentSlide={index:Array.from(this.slides).indexOf(this.currentSlide),element:this.currentSlide},this.previousSlide=null,this.element.classList.contains("gallery-cover")||setTimeout(()=>{this.setHeight(),window.addEventListener("resize",this.setHeight.bind(this),!1)},10),this.setType(),this.dots=this.element.querySelector(".dots"),this.initDots(),this.element.querySelector(".controls .next")&&this.element.querySelector(".controls .next").addEventListener("click",this.nextSlide.bind(this)),this.element.querySelector(".controls .prev")&&this.element.querySelector(".controls .prev").addEventListener("click",this.prevSlide.bind(this)),this.element.querySelectorAll(".zoom").forEach(el=>{el.addEventListener("click",this.zoomSlide.bind(this),!1)}),typeof Swipe<"u"&&(new Swipe(this.element),this.element.addEventListener("swipe",this.swipe.bind(this))),this.richMedia=[],this.element.querySelectorAll("button.media-icon").forEach(element2=>{element2.addEventListener("click",this.play.bind(this),!1)}),this.element.classList.add("barracuda-gallery-v2-initialized"))}swipe(e){if(e.detail&&e.detail.direction)switch(e.detail.direction){case"left":this.nextSlide();break;case"right":this.prevSlide();break;default:break}}initDots(){var template=this.dots.querySelector(".dot");this.slides.length>5&&this.dots.classList.add("dots-limit");for(var i=0;i<this.slides.length;i++){let dot=template.cloneNode(!0);dot.addEventListener("click",this.setSlide.bind(this,i),!1),this.dots.appendChild(dot)}template.remove(),this.setDot(this.currentSlide.index)}setDot(){var dots=this.dots.querySelectorAll(".dot");dots.forEach((dot,index)=>{index!=this.currentSlide.index?dot.classList.remove("current"):dot.classList.add("current")});function dotsVisibility(dots2,from=null,to=null){if(dots2.length>0){if(dots2.forEach(dot=>{dot.classList.remove("end"),dot.classList.add("visible")}),from){for(let i=0;i<from;i++)dots2[i]&&dots2[i].classList.remove("visible");dots2[from]&&dots2[from].classList.add("end")}if(to){for(let i=to;i<dots2.length;i++)dots2[i]&&dots2[i].classList.remove("visible");dots2[to-1]&&to!=dots2.length&&dots2[to-1].classList.add("end")}}}var visibleDots=5,dotsCount=dots.length;dotsCount<=visibleDots?dotsVisibility(dots):this.currentSlide.index<3?dotsVisibility(dots,null,visibleDots):this.currentSlide.index+3>dotsCount?dotsVisibility(dots,dotsCount-visibleDots,null):dotsVisibility(dots,this.currentSlide.index-2,this.currentSlide.index+3)}zoomSlide(){if(console.log("Zoom"+this.zoom),this.zoom)this.zoom.classList.remove("visible"),setTimeout(()=>{this.zoom.remove(),unlockBodyPosition(),this.zoom=null},400);else{var img=this.currentSlide.element.querySelector("img"),zoomIcon=this.currentSlide.element.querySelector(".icon-zoom-out");if(img&&zoomIcon){this.zoom=document.createElement("div"),this.zoom.classList.add("fullscreen-image");var newImg=img.cloneNode(!0);newImg.removeAttribute("sizes"),newImg.removeAttribute("srcset"),newImg.setAttribute("src",newImg.dataset.mediaFullscreen);var newZoomIcon=zoomIcon.cloneNode(!0);newZoomIcon.addEventListener("click",this.zoomSlide.bind(this)),newZoomIcon.classList.remove("hidden"),this.zoom.appendChild(newImg),this.zoom.appendChild(newZoomIcon),this.zoom.classList.add("scroll-inside"),this.element.closest(".featured-product,.product-detail").appendChild(this.zoom),lockBodyPosition(),setTimeout(()=>{this.zoom.classList.add("visible")},10)}}}nextSlide(){this.currentSlide.index==this.slides.length-1?this.setSlide(0):this.setSlide(this.currentSlide.index+1)}prevSlide(){this.currentSlide.index>0?this.setSlide(this.currentSlide.index-1):this.setSlide(this.slides.length-1)}setHeight(){this.currentSlide.element.scrollHeight>100?this.content.style.height=this.currentSlide.element.scrollHeight+"px":setTimeout(this.setHeight.bind(this),20)}setType(){this.element.classList.remove("xr-active"),this.currentSlide.element.dataset.mediaType=="image"?(this.element.classList.add("current-type-image"),this.element.classList.remove("current-type-model"),this.element.classList.remove("current-type-richmedia")):this.currentSlide.element.dataset.mediaType=="model"?(this.element.classList.remove("current-type-image"),this.element.classList.add("current-type-model"),this.element.classList.remove("current-type-richmedia")):(this.element.classList.remove("current-type-image"),this.element.classList.remove("current-type-model"),this.element.classList.add("current-type-richmedia"))}show(mediaId){var slide=this.content.querySelector(".slide"+mediaId),position=Array.from(this.slides).indexOf(slide);position>=0&&this.setSlide(position)}setSlide(nth){this.previousSlide==null&&this.currentSlide.index!=nth?(this.pause(),this.previousSlide=Object.assign({},this.currentSlide),this.currentSlide={index:nth,element:this.slides[nth]},this.setDot(),this.element.classList.contains("gallery-cover")||this.setHeight(),this.setType(),this.currentSlide.element.classList.add("before-current"),setTimeout(()=>{this.previousSlide.element.classList.add("after-current"),this.previousSlide.element.classList.remove("current"),setTimeout(()=>{this.previousSlide.element.classList.remove("after-current"),this.currentSlide.element.classList.add("current"),this.currentSlide.element.classList.remove("before-current"),this.previousSlide=null},510)},10)):this.previousSlide!=null&&console.warn("Barracuda gallery: In motion. Wait.")}pause(){this.richMedia.forEach(el=>{el.classList.contains("js-youtube")||el.classList.contains("js-vimeo")?el.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*"):el.classList.contains("video")&&el.pause()})}play(){var mediaResource=this.currentSlide.element.querySelector("template");console.log(this.currentSlide.element);var mediaTarget=document.createElement("div");mediaTarget.classList.add("media-box"),mediaTarget.innerHTML=mediaResource.innerHTML,this.currentSlide.element.querySelector(".slide-media")&&this.currentSlide.element.querySelector(".slide-media").appendChild(mediaTarget),this.currentSlide.element.querySelector("button.media-icon").remove(),this.richMedia.push(mediaTarget.childNodes[0])}}
//# sourceMappingURL=/cdn/shop/t/16/assets/barracuda-gallery-v2.js.map?v=105192987152756782501723552344

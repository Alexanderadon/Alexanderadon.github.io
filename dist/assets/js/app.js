!function(){let e=document.querySelectorAll(".photo");document.querySelector("[datephoto]").innerHTML=e.length,console.log(0),e.forEach((e=>{}))}(),new Carousel(document.querySelector("#myCarousel"),{slidesPerPage:1,friction:.96,center:!1,dragFree:!0}),function(){const e=document.querySelector(".header__burger"),t=document.querySelector(".nav--list"),o=document.querySelector("#page");function n(){console.log("closed"),e.classList.remove("active"),document.body.classList.remove("active"),t.classList.remove("nav__show"),document.body.classList.remove("mask--mobile"),document.querySelector(".mask").remove()}e.addEventListener("click",(()=>{document.body.classList.contains("active")?n():function(){let r=document.createElement("div");r.classList.add("mask"),r.addEventListener("click",n),o.appendChild(r),e.classList.add("active"),l.classList.add("active"),t.classList.add("nav__show"),document.body.classList.add("mask--mobile")}()}));let r={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.Android()||r.BlackBerry()||r.iOS()||r.Opera()||r.Windows()}},l=document.querySelector("body");if(r.any()){l.classList.add("touch");let e=document.querySelectorAll(".nav__item--link");for(i=0;i<e.length;i++){let t=e[i],o=e[i].nextElementSibling,n=e[i].lastElementChild;t.classList.add("parent"),e[i].addEventListener("click",(function(){if(null===o)return!1;o.classList.toggle("open"),n.classList.toggle("activeArrow"),t.classList.toggle("activeColor")}))}}else l.classList.add("mouse")}(),window.onload=()=>{document.querySelector("#search").oninput=function(){let e=this.value.trim(),t=document.querySelectorAll(".documents__list li");console.log(t),""!=e?t.forEach((t=>{-1==t.innerText.search(e)&&t.classList.add("hide")})):t.forEach((e=>{e.classList.remove("hide")})),console.log(this.value)}},function(){const e=document.querySelectorAll(".slider .slider__line .slider__item"),t=document.querySelector(".slider__line");let o,n=0;function r(){o=document.querySelector(".slider").offsetWidth,t.style.width=o*e.length+"px",e.forEach((e=>{e.style.width=o+"px",e.style.height="auto"})),i()}function i(){t.style.transform="translate(-"+n*o+"px)"}window.addEventListener("resize",r),r(),document.querySelector(".slider__arrow__left").addEventListener("click",(function(){n--,n<0&&(n=e.length-1),i()})),document.querySelector(".slider__arrow__right").addEventListener("click",(function(){n++,n>=e.length?n=0:console.log("error"),i()}));let l=document.querySelectorAll(".rounded");document.querySelector("[datephoto]").innerHTML=l.length,console.log(0),l.forEach((e=>{console.log(e.length)}))}();
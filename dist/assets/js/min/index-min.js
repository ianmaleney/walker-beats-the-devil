var slideColumns=document.querySelectorAll(".header-slide"),slideRows=document.querySelectorAll(".slide-row"),sections=document.querySelectorAll("section"),title="Walker Beats The Devil";window.addEventListener("load",function(){var e=function(){function e(){var e,i=window.getComputedStyle(slideRows[l],null);if(i.getPropertyValue("animation-delay"))e="animation-delay";else if(i.getPropertyValue("-webkit-animation-delay"))e="-webkit-animation-delay";else{if(!i.getPropertyValue("-moz-animation-delay"))return void console.log("unable to find prop");e="-moz-animation-delay"}slideRows[l].style.setProperty(e,l+"s"),slideRows[n].style.setProperty(e,n+"s")}function i(){var e,i=window.getComputedStyle(slideRows[l],null);if(i.getPropertyValue("animation-duration"))e="animation-duration";else if(i.getPropertyValue("-webkit-animation-duration"))e="-webkit-animation-duration";else{if(!i.getPropertyValue("-moz-animation-duration"))return void console.log("unable to find prop");e="-moz-animation-duration"}slideRows[l].style.setProperty(e,l+"s"),slideRows[n].style.setProperty(e,n+"s")}function o(){var e,i,o=Math.random();i=o>=.5?"normal":"reverse";var t=window.getComputedStyle(slideRows[l],null);if(t.getPropertyValue("animation-direction"))e="animation-direction";else if(t.getPropertyValue("-webkit-animation-direction"))e="-webkit-animation-direction";else{if(!t.getPropertyValue("-moz-animation-direction"))return void console.log("unable to find prop");e="-moz-animation-direction"}slideRows[l].style.setProperty(e,i),slideRows[n].style.setProperty(e,i)}var t=Math.floor(Math.random()*slideRows.length),l=Math.floor(Math.random()*slideRows.length),n=Math.floor(Math.random()*slideRows.length);l===t&&0!==t&&(l-=1),n===t&&0!==t&&(n-=1);for(var s=0;s<slideRows.length;s++)slideRows[s].innerHTML="";slideRows[t].innerHTML=title,slideRows[l].innerHTML=title,slideRows[n].innerHTML=title,e(),i(),o()},i=setInterval(e,3e3);document.addEventListener("scroll",function(){var e=sections[0].getBoundingClientRect().top;if(250>e){var o=function(){for(var e=0;e<slideRows.length;e++)slideRows[e].classList.add("fade");var i=function(){for(;slideColumns[0].firstChild;)slideColumns[0].removeChild(slideColumns[0].firstChild);for(;slideColumns[1].firstChild;)slideColumns[1].removeChild(slideColumns[1].firstChild);for(;slideColumns[2].firstChild;)slideColumns[2].removeChild(slideColumns[2].firstChild)};setTimeout(i,2500)};if(o(),clearInterval(i),0>e)for(var t=0;t<slideColumns.length;t++)slideColumns[t].classList.add("animated");else for(var t=0;t<slideColumns.length;t++)slideColumns[t].classList.remove("animated")}})});
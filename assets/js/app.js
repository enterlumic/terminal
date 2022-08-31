
'use strict';
!function($) {
 function init(key) {
   if (document.getElementById("header-lang-img")) {
     if ("en" == key) {
       document.getElementById("header-lang-img").src = "assets/images/flags/us.jpg";
     } else {
       if ("sp" == key) {
         document.getElementById("header-lang-img").src = "assets/images/flags/spain.jpg";
       } else {
         if ("gr" == key) {
           document.getElementById("header-lang-img").src = "assets/images/flags/germany.jpg";
         } else {
           if ("it" == key) {
             document.getElementById("header-lang-img").src = "assets/images/flags/italy.jpg";
           } else {
             if ("ru" == key) {
               document.getElementById("header-lang-img").src = "assets/images/flags/russia.jpg";
             }
           }
         }
       }
     }
     localStorage.setItem("minia-language", key);
     if (null == (c = localStorage.getItem("minia-language"))) {
       init(r);
     }
     $.getJSON("assets/lang/" + c + ".json", function(t) {
       $("html").attr("lang", c);
       $.each(t, function(headType, e) {
         if ("head" === headType) {
           $(document).attr("title", e.title);
         }
         $("[data-key='" + headType + "']").text(e);
       });
     });
   }
 }
 function d() {
   var pipelets = document.querySelectorAll(".counter-value");
   pipelets.forEach(function(btn) {
     !function t() {
       var chartMessage = +btn.getAttribute("data-target");
       var nPositionX = +btn.innerText;
       var new_width = chartMessage / 250;
       if (new_width < 1) {
         new_width = 1;
       }
       if (nPositionX < chartMessage) {
         btn.innerText = (nPositionX + new_width).toFixed(0);
         setTimeout(t, 1);
       } else {
         btn.innerText = chartMessage;
       }
     }();
   });
 }
 function l() {
   var loadingElem = document.getElementById("topnav-menu-content").getElementsByTagName("a");
   var i = 0;
   var patchLen = loadingElem.length;
   for (; i < patchLen; i++) {
     if (loadingElem[i] && loadingElem[i].parentElement && "nav-item dropdown active" === loadingElem[i].parentElement.getAttribute("class")) {
       loadingElem[i].parentElement.classList.remove("active");
       if (loadingElem[i].nextElementSibling) {
         loadingElem[i].nextElementSibling.classList.remove("show");
       }
     }
   }
 }
 function getGeolocOptions(checkboxID) {
   document.getElementById(checkboxID).checked = true;
 }
 function onFullScreenChange() {
   if (!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)) {
     $("body").removeClass("fullscreen-enable");
   }
 }
 var deep;
 var conid;
 var wrapper;
 var c = localStorage.getItem("minia-language");
 var r = "en";
 $("#side-menu").metisMenu();
 d();
 deep = document.body.getAttribute("data-sidebar-size");
 $(window).on("load", function() {
   $(".switch").on("switch-change", function() {
     toggleWeather();
   });
   if (1024 <= window.innerWidth && window.innerWidth <= 1366) {
     document.body.setAttribute("data-sidebar-size", "sm");
     getGeolocOptions("sidebar-size-small");
   }
 });
 $("#vertical-menu-btn").on("click", function(event) {
   event.preventDefault();
   $("body").toggleClass("sidebar-enable");
   if (992 <= $(window).width()) {
     if (null == deep) {
       if (null == document.body.getAttribute("data-sidebar-size") || "lg" == document.body.getAttribute("data-sidebar-size")) {
         document.body.setAttribute("data-sidebar-size", "sm");
       } else {
         document.body.setAttribute("data-sidebar-size", "lg");
       }
     } else {
       if ("md" == deep) {
         if ("md" == document.body.getAttribute("data-sidebar-size")) {
           document.body.setAttribute("data-sidebar-size", "sm");
         } else {
           document.body.setAttribute("data-sidebar-size", "md");
         }
       } else {
         if ("sm" == document.body.getAttribute("data-sidebar-size")) {
           document.body.setAttribute("data-sidebar-size", "lg");
         } else {
           document.body.setAttribute("data-sidebar-size", "sm");
         }
       }
     }
   }
 });
 $("#sidebar-menu a").each(function() {
   var url = window.location.href.split(/[?#]/)[0];
   if (this.href == url) {
     $(this).addClass("active");
     $(this).parent().addClass("mm-active");
     $(this).parent().parent().addClass("mm-show");
     $(this).parent().parent().prev().addClass("mm-active");
     $(this).parent().parent().parent().addClass("mm-active");
     $(this).parent().parent().parent().parent().addClass("mm-show");
     $(this).parent().parent().parent().parent().parent().addClass("mm-active");
   }
 });
 $(document).ready(function() {
   var t;
   if (0 < $("#sidebar-menu").length && 0 < $("#sidebar-menu .mm-active .active").length && 300 < (t = $("#sidebar-menu .mm-active .active").offset().top)) {
     t = t - 300;
     $(".vertical-menu .simplebar-content-wrapper").animate({
       scrollTop : t
     }, "slow");
   }
 });
 $(".navbar-nav a").each(function() {
   var url = window.location.href.split(/[?#]/)[0];
   if (this.href == url) {
     $(this).addClass("active");
     $(this).parent().addClass("active");
     $(this).parent().parent().addClass("active");
     $(this).parent().parent().parent().addClass("active");
     $(this).parent().parent().parent().parent().addClass("active");
     $(this).parent().parent().parent().parent().parent().addClass("active");
     $(this).parent().parent().parent().parent().parent().parent().addClass("active");
   }
 });
 $('[data-toggle="fullscreen"]').on("click", function(event) {
   event.preventDefault();
   $("body").toggleClass("fullscreen-enable");
   if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
     if (document.cancelFullScreen) {
       document.cancelFullScreen();
     } else {
       if (document.mozCancelFullScreen) {
         document.mozCancelFullScreen();
       } else {
         if (document.webkitCancelFullScreen) {
           document.webkitCancelFullScreen();
         }
       }
     }
   } else {
     if (document.documentElement.requestFullscreen) {
       document.documentElement.requestFullscreen();
     } else {
       if (document.documentElement.mozRequestFullScreen) {
         document.documentElement.mozRequestFullScreen();
       } else {
         if (document.documentElement.webkitRequestFullscreen) {
           document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
         }
       }
     }
   }
 });
 document.addEventListener("fullscreenchange", onFullScreenChange);
 document.addEventListener("webkitfullscreenchange", onFullScreenChange);
 document.addEventListener("mozfullscreenchange", onFullScreenChange);
 (function() {
   if (document.getElementById("topnav-menu-content")) {
     var t = document.getElementById("topnav-menu-content").getElementsByTagName("a");
     var i = 0;
     var a = t.length;
     for (; i < a; i++) {
       t[i].onclick = function(e) {
         if (e && e.target && "#" === e.target.getAttribute("href")) {
           e.target.parentElement.classList.toggle("active");
           if (e.target.nextElementSibling) {
             e.target.nextElementSibling.classList.toggle("show");
           }
         }
       };
     }
     window.addEventListener("resize", l);
   }
 })();
 [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(button) {
   return new bootstrap.Tooltip(button);
 });
 [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(title) {
   return new bootstrap.Popover(title);
 });
 [].slice.call(document.querySelectorAll(".toast")).map(function(title) {
   return new bootstrap.Toast(title);
 });
 if (window.sessionStorage) {
   if (conid = sessionStorage.getItem("is_visited")) {
     $("#" + conid).prop("checked", true);
   } else {
     sessionStorage.setItem("is_visited", "layout-ltr");
   }
 }
 if (c && "null" != c && c !== r) {
   init(c);
 }
 $(".language").on("click", function(canCreateDiscussions) {
   init($(this).attr("data-lang"));
 });
 $(window).on("load", function() {
   $("#status").fadeOut();
   $("#preloader").delay(350).fadeOut("slow");
 });
 wrapper = document.getElementsByTagName("body")[0];
 $(".right-bar-toggle").on("click", function(canCreateDiscussions) {
   $("body").toggleClass("right-bar-enabled");
 });
 $("#mode-setting-btn").on("click", function(canCreateDiscussions) {
   if (wrapper.hasAttribute("data-layout-mode") && "dark" == wrapper.getAttribute("data-layout-mode")) {
     document.body.setAttribute("data-layout-mode", "light");
     document.body.setAttribute("data-topbar", "light");
     document.body.setAttribute("data-sidebar", "light");
     if (!(wrapper.hasAttribute("data-layout") && "horizontal" == wrapper.getAttribute("data-layout"))) {
       document.body.setAttribute("data-sidebar", "light");
     }
     getGeolocOptions("topbar-color-light");
     getGeolocOptions("sidebar-color-light");
     getGeolocOptions("topbar-color-light");
   } else {
     document.body.setAttribute("data-layout-mode", "dark");
     document.body.setAttribute("data-topbar", "dark");
     document.body.setAttribute("data-sidebar", "dark");
     if (!(wrapper.hasAttribute("data-layout") && "horizontal" == wrapper.getAttribute("data-layout"))) {
       document.body.setAttribute("data-sidebar", "dark");
     }
     getGeolocOptions("layout-mode-dark");
     getGeolocOptions("sidebar-color-dark");
     getGeolocOptions("topbar-color-dark");
   }
 });
 $(document).on("click", "body", function(t) {
   if (!(0 < $(t.target).closest(".right-bar-toggle, .right-bar").length)) {
     $("body").removeClass("right-bar-enabled");
   }
 });
 if (wrapper.hasAttribute("data-layout") && "horizontal" == wrapper.getAttribute("data-layout")) {
   getGeolocOptions("layout-horizontal");
   $(".sidebar-setting").hide();
 } else {
   getGeolocOptions("layout-vertical");
 }
 if (wrapper.hasAttribute("data-layout-mode") && "dark" == wrapper.getAttribute("data-layout-mode")) {
   getGeolocOptions("layout-mode-dark");
 } else {
   getGeolocOptions("layout-mode-light");
 }
 if (wrapper.hasAttribute("data-layout-size") && "boxed" == wrapper.getAttribute("data-layout-size")) {
   getGeolocOptions("layout-width-boxed");
 } else {
   getGeolocOptions("layout-width-fuild");
 }
 if (wrapper.hasAttribute("data-layout-scrollable") && "true" == wrapper.getAttribute("data-layout-scrollable")) {
   getGeolocOptions("layout-position-scrollable");
 } else {
   getGeolocOptions("layout-position-fixed");
 }
 if (wrapper.hasAttribute("data-topbar") && "dark" == wrapper.getAttribute("data-topbar")) {
   getGeolocOptions("topbar-color-dark");
 } else {
   getGeolocOptions("topbar-color-light");
 }
 if (wrapper.hasAttribute("data-sidebar-size") && "sm" == wrapper.getAttribute("data-sidebar-size")) {
   getGeolocOptions("sidebar-size-small");
 } else {
   if (wrapper.hasAttribute("data-sidebar-size") && "md" == wrapper.getAttribute("data-sidebar-size")) {
     getGeolocOptions("sidebar-size-compact");
   } else {
     getGeolocOptions("sidebar-size-default");
   }
 }
 if (wrapper.hasAttribute("data-sidebar") && "brand" == wrapper.getAttribute("data-sidebar")) {
   getGeolocOptions("sidebar-color-brand");
 } else {
   if (wrapper.hasAttribute("data-sidebar") && "dark" == wrapper.getAttribute("data-sidebar")) {
     getGeolocOptions("sidebar-color-dark");
   } else {
     getGeolocOptions("sidebar-color-light");
   }
 }
 if (document.getElementsByTagName("html")[0].hasAttribute("dir") && "rtl" == document.getElementsByTagName("html")[0].getAttribute("dir")) {
   getGeolocOptions("layout-direction-rtl");
 } else {
   getGeolocOptions("layout-direction-ltr");
 }
 $("input[name='layout']").on("change", function() {
   window.location.href = "vertical" == $(this).val() ? "index.html" : "layouts-horizontal.html";
 });
 $("input[name='layout-mode']").on("change", function() {
   if ("light" == $(this).val()) {
     document.body.setAttribute("data-layout-mode", "light");
     document.body.setAttribute("data-topbar", "light");
     document.body.setAttribute("data-sidebar", "light");
     if (!(wrapper.hasAttribute("data-layout") && "horizontal" == wrapper.getAttribute("data-layout"))) {
       document.body.setAttribute("data-sidebar", "light");
     }
     getGeolocOptions("topbar-color-light");
     getGeolocOptions("sidebar-color-light");
   } else {
     document.body.setAttribute("data-layout-mode", "dark");
     document.body.setAttribute("data-topbar", "dark");
     document.body.setAttribute("data-sidebar", "dark");
     if (!(wrapper.hasAttribute("data-layout") && "horizontal" == wrapper.getAttribute("data-layout"))) {
       document.body.setAttribute("data-sidebar", "dark");
     }
     getGeolocOptions("topbar-color-dark");
     getGeolocOptions("sidebar-color-dark");
   }
 });
 $("input[name='layout-direction']").on("change", function() {
   if ("ltr" == $(this).val()) {
     document.getElementsByTagName("html")[0].removeAttribute("dir");
     document.getElementById("bootstrap-style").setAttribute("href", "assets/css/bootstrap.min.css");
     document.getElementById("app-style").setAttribute("href", "assets/css/app.min.css");
   } else {
     document.getElementById("bootstrap-style").setAttribute("href", "assets/css/bootstrap-rtl.min.css");
     document.getElementById("app-style").setAttribute("href", "assets/css/app-rtl.min.css");
     document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
   }
 });
 Waves.init();
 $("#checkAll").on("change", function() {
   $(".table-check .form-check-input").prop("checked", $(this).prop("checked"));
 });
 $(".table-check .form-check-input").change(function() {
   if ($(".table-check .form-check-input:checked").length == $(".table-check .form-check-input").length) {
     $("#checkAll").prop("checked", true);
   } else {
     $("#checkAll").prop("checked", false);
   }
 });
}(jQuery), feather.replace();
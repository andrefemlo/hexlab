"use strict";AOS.init({duration:1e3,once:!0});var swiper=new Swiper(".swiper",{loop:!0,breakpoints:{0:{slidesPerView:1,spaceBetween:16},640:{slidesPerView:2,spaceBetween:48}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});function openMobileSidebar(){document.querySelector("#navigation").removeAttribute("style","display: flex;")}function closeMobileSidebar(){document.querySelector("#navigation").setAttribute("style","display: none;")}function aceitarCookies(){var e=new Date;e.setDate(e.getDate()+30),document.cookie="cookiesAceitos=true; expires="+e.toUTCString()+"; path=/",document.getElementById("cookieNotice").style.display="none"}function verificarCookiesAceitos(){var e=document.cookie.includes("cookiesAceitos=true");document.getElementById("cookieNotice").style.display=e?"none":"block"}window.addEventListener("scroll",function(){var e=document.querySelector("header"),t=window.scrollY;window.innerWidth;8<t?e.classList.add("active"):e.classList.remove("active")}),window.onload=verificarCookiesAceitos,document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion").forEach(function(e){var o=e.querySelectorAll(".accordion-item");o.forEach(function(t){t.querySelector(".accordion-header").addEventListener("click",function(){var e=t.classList.contains("active");o.forEach(function(e){e.classList.remove("active")}),e||t.classList.add("active")})})})});
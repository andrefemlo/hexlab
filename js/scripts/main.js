// AOS
AOS.init({
  duration: 1000,
  once: true,
});

// SwiperJS 
var swiper = new Swiper('.swiper', {
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },  
});

// let counter = document.querySelectorAll(".counter")

// window.addEventListener("load", function() {
//   setTimeout(function() {
//     counter.forEach(function(k, v) {
//       var start = counter[v].getAttribute('data-count-start')
//       var end = counter[v].getAttribute('data-count-end')
//       var speed = counter[v].getAttribute('data-speed')
//       var step = counter[v].getAttribute('data-step')

//       start = Number(start);
//       end = Number(end);
//       speed = Number(speed);
//       step = Number(step);

//       setInterval(function() {
//         start += step;
//         if(start > end) {
//           return false;
//         }
//         counter[v].innerText = start;
//       }, speed)
//     })
//   }, 1000); // 1000 milliseconds = 1 second
// }, false)


// Menu de navegação
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let scrollPosition = window.scrollY;
  let screenWidth = window.innerWidth;

  if (scrollPosition > 8) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});


// Menu mobile;
function openMobileSidebar() {
  var item = document.querySelector('#navigation');
  item.removeAttribute('style', 'display: none;');
}

function closeMobileSidebar() {
  var item = document.querySelector('#navigation');
  item.setAttribute('style', 'display: none;');
  // item.removeAttribute('style', 'display: flex;');
}

// Submenu Mobile
// function openSubmenu() {
//   // Selecione o elemento do menu
//   var menu = document.querySelector('#navigation .menu');

//   // Selecione todos os elementos 'menu-item-has-children'
//   var hasSubmenus = document.querySelectorAll('#navigation .menu-item-has-children');

//   // Itere sobre cada elemento 'menu-item-has-children'
//   hasSubmenus.forEach(function (hasSubmenu) {
//     // Adicione um evento de clique a cada elemento
//     hasSubmenu.addEventListener('click', function () {
//       // Selecione o submenu dentro do elemento clicado
//       var submenu = this.querySelector('.sub-menu');

//       // Verifique se o submenu existe
//       if (submenu) {
//         // Alternar a visibilidade do submenu ao clicar no 'menu-item-has-children'
//         if (submenu.style.display === 'block') {
//           submenu.style.display = 'none';
//         } else {
//           submenu.style.display = 'block';
//         }
//       }
//     });
//   });
// }

// Chame a função para configurar o comportamento do clique nos submenus
// openSubmenu();


// function aceitarCookies() {
//   var dataExpiracao = new Date();
//   dataExpiracao.setDate(dataExpiracao.getDate() + 30);
  
//   document.cookie = "cookiesAceitos=true; expires=" + dataExpiracao.toUTCString() + "; path=/";
//   document.getElementById("cookieNotice").style.display = "none";
// }

// function verificarCookiesAceitos() {
//   var cookiesAceitos = document.cookie.includes("cookiesAceitos=true");
//   if (!cookiesAceitos) {
//     document.getElementById("cookieNotice").style.display = "block";
//   } else {
//     document.getElementById("cookieNotice").style.display = "none";
//   }
// }

// window.onload = verificarCookiesAceitos

// Acordeão
// document.addEventListener("DOMContentLoaded", function () {
//   var accordion = document.querySelectorAll(".accordion");

//   accordion.forEach((el) => {
//     var accordionItems = el.querySelectorAll(".accordion-item");

//     accordionItems.forEach(function (item) {
//       var header = item.querySelector(".accordion-header");

//       header.addEventListener("click", function () {
//         var currentActiveItem = item.classList.contains("active");

//         accordionItems.forEach(function (el) {
//           el.classList.remove("active");
//         });

//         if (!currentActiveItem) {
//           item.classList.add("active");
//         }
//       });
//     });
//   });
// });
(function () {
  "use strict";

  // function selector 

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  // Função event listener 

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  // scroll event listener 

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

 
  let backtotop = select('.subir')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 400) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  // Função para botão subir lentamente

  $('#botao_subir').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 900);
    return false;
  })


  // Cardápio-isotope filtros

  window.addEventListener('load', () => {
    let cardapioContainer = select('.cardapio-container');
    if (cardapioContainer) {
      let cardapioIsotope = new Isotope(cardapioContainer, {
        itemSelector: '.cardapio-item'
      });

      let cardapioFilters = select('#cardapio-flters li', true);

      on('click', '#cardapio-flters li', function (e) {
        e.preventDefault();
        cardapioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        cardapioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        cardapioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });


  // Depoimentos carrocel

  new Swiper('.depoimento-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });


  // Animação dos blocos ao scroll - AOS

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()




// Função para botão whatsapp

var box = document.querySelector('.whatsapp');
box.addEventListener('transitionend', onTransitionEnd, false);

function onTransitionEnd() {
  // Handle the transition finishing.
}
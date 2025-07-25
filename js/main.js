document.addEventListener('DOMContentLoaded', () => {

  const modalServices = document.querySelectorAll('.service-modal');
  const openModalServicesBtnAll = document.querySelectorAll('.learn-more-btn');
  const closeModalServicesBtnAll = document.querySelectorAll('.service-close');

  const modalPortfolio = document.querySelectorAll('.portfolio-modal');
  const openModalPortfolioBtnAll = document.querySelectorAll('.img-card');
  const closeModalPortfolioBtnAll = document.querySelectorAll('.portfolio-close');

  const header = document.querySelector('.header');

  // header effect scroll

  window.addEventListener('scroll', () => {
    window.scrollY > 1 ? header.classList.add('sticky') : header.classList.remove('sticky');
  })

  // services modals

  function openModalServices(currentModalServices) {
    modalServices[currentModalServices].classList.add('active');
  }

  function closeModalServices(currentModalServices) {
    modalServices[currentModalServices].classList.remove('active');
  }

  openModalServicesBtnAll.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      openModalServices(i);
    });
  })

  closeModalServicesBtnAll.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      closeModalServices(i);
    });
  })

  modalServices.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('service-modal')) {
        item.classList.remove('active');
      }
    })
  })

  // portfolio modals
  function openModalPortfolio(currentModalServices) {
    modalPortfolio[currentModalServices].classList.add('active');
  }

  function closeModalPortfolio(currentModalServices) {
    modalPortfolio[currentModalServices].classList.remove('active');
  }

  openModalPortfolioBtnAll.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      openModalPortfolio(i);
    });
  })

  closeModalPortfolioBtnAll.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      closeModalPortfolio(i);
    });
  })

  modalPortfolio.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('portfolio-modal')) {
        console.log('port-overlay');
        item.classList.remove('active');
      }
    })
  })

  // swiper
  const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    cssMode: true,
    loop: true,
    mousewheel: true,
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
})
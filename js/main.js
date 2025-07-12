document.addEventListener('DOMContentLoaded', () => {
  const modalServices = document.querySelectorAll('.service-modal');
  const openModalServicesBtnAll = document.querySelectorAll('.learn-more-btn');
  const closeModalServicesBtnAll = document.querySelectorAll('.fa-solid.fa-xmark');

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

  modalServices.forEach(modalService => {
    modalService.addEventListener('click', (e) => {
      if (e.target.classList.contains('service-modal')) {
        modalService.classList.remove('active');
      }
    })
  })

})
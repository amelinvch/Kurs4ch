'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //Modal
  const modalTrigger = document.querySelectorAll('[data-modal]');
  const modal = document.querySelector('.modal');
  const modalCloseBtn = document.querySelector('[data-close]');
  const btnSin = document.querySelector('.btnSin');

  modalTrigger.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('show');
      modal.classList.remove('hide');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  modalCloseBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  btnSin.addEventListener('click', user);

  function user() {
    const userInfo = {
      userId: 0,
      like: [],
    };
    userInfo.userName = document.querySelector('.user_name').value;
    userInfo.userPassword = document.querySelector('.user_password').value;

    document.cookie = JSON.stringify(userInfo);
  }
});

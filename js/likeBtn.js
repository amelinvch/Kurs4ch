'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // .........Кнопка Лайка............

  const btnLike = document.querySelectorAll('.work_btn_like');
  const user = document.cookie.split('[')[1].split(']')[0];
  let like = [];
  if (user != '') {
    like = user.split(',');
  }
  btnLike.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('work_btn_like2');
      const counBtnLike = btn.querySelector('.like_btn_counter');
      const className = btn.className;
      for (let i = 0; i < btnLike.length; i++) {
        if (btnLike[i] === btn) {
          if (className === 'work_btn_like') {
            counBtnLike.textContent--;
            for (let j = 0; j < like.length; j++) {
              if (i === like[j]) {
                like.splice(j, 1);
              }
            }
          } else {
            counBtnLike.textContent++;
            const insert = (arr, index, newItem) => [
              ...arr.slice(0, index),
              newItem,
              ...arr.slice(index),
            ];
            const result = insert(like, i, i);
            like = result;
          }
          const cooc = `${document.cookie.split('[')[0]}[${like}]${
            document.cookie.split(']')[1]
          }`;
          document.cookie = cooc;
        }
      }
    });
  });
});

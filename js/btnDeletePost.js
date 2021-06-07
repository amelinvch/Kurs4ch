'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const btnSwap = document.querySelectorAll('.work_btn_delete');
  const posts = JSON.parse(localStorage.getItem('posts'));
  for (const btn of btnSwap) {
    btn.addEventListener('click', () => {
      for (let i = 0; i < btnSwap.length; i++) {
        if (btnSwap[i] === btn) {
          console.log('dss');
          posts.splice(i, 1);
          localStorage.setItem('posts', JSON.stringify(posts));
          location.reload();
        }
      }
    });
  }
});

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // .........Кнопка Лайка............
    const btnLike = document.querySelectorAll('.work_btn_like');
    btnLike.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.classList.toggle('work_btn_like2');
            const counBtnLike = btn.querySelector('.like_btn_counter');
            let className = btn.className;
            if (className == "work_btn_like") {
                counBtnLike.textContent--;
            } else {
                counBtnLike.textContent++;
            }
        });
    });
});
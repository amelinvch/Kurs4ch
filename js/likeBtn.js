'use strict';


document.addEventListener('DOMContentLoaded', () => {
    // .........Кнопка Лайка............
    const btnLike = document.querySelector('.work_btn_like');
    const counBtnLike = document.querySelector('.like_btn_counter');

    btnLike.addEventListener('click', function() {
        btnLike.classList.toggle('work_btn_like2');
        let className = btnLike.className;
        if (className == "work_btn_like") {
            btnLike.classList.add('work_btn_like');
            counBtnLike.textContent--;
        } else {
            btnLike.classList.add('work_btn_like2');
            counBtnLike.textContent++;
        }
    });
});
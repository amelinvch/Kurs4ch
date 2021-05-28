'use strict';


document.addEventListener('DOMContentLoaded', () => {
    // .........Кнопка Лайка............
    const btnLike = document.querySelectorAll('.work_btn_like');
    const counBtnLike = document.querySelector('.like_btn_counter');

    btnLike.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.classList.toggle('work_btn_like2');
            let className = btn.className;
            if (className == "work_btn_like") {
                btn.classList.add('work_btn_like');
                counBtnLike.textContent--;
            } else {
                btn.classList.add('work_btn_like2');
                counBtnLike.textContent++;
            }
        });
    });
});
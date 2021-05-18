'use strict';

const switcher = document.querySelector('.btnTheme');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    let className = document.body.className;
    className == "light-theme" ? this.textContent = "Dark" : this.textContent = "Light";
});


//Modal

const modalTrigger = document.querySelectorAll('[data-modal]');
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', function() {
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

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) {
        closeModal();
    }
});
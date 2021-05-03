'use strict';

const switcher = document.querySelector('.btnTheme');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    let className = document.body.className;
    if (className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    //console.log('current class name: ' + className);
});

//Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
    btn.addEventListener('click', function() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        // Либо вариант с toggle - но тогда назначить класс в верстке
        document.body.style.overflow = 'hidden';
    });
});

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    // Либо вариант с toggle - но тогда назначить класс в верстке
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
// const modalTrigger = document.querySelectorAll('[data-modal]'),
//     modal = document.querySelector('.modal'),
//     modalCloseBtn = document.querySelector('[dara-close]');

// modalTrigger.addEventListener('click', () => {
//     modal.classList.add('show');
//     modal.classList.remove('hide');
// });

// modalCloseBtn.addEventListener('click', () => {
//     modal.classList.add('hide');
//     modal.classList.remove('show');
// });
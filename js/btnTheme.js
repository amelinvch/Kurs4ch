'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.btnTheme');

    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        let className = document.body.className;
        className == "light-theme" ? this.textContent = "Dark" : this.textContent = "Light";
    });
});
'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const btnSwap = document.querySelectorAll('.work_btn_price');
    btnSwap.forEach(btn => {
        btn.addEventListener('click', function() {
            for (let i = 0; i < btnSwap.length; i++) {
                if (btnSwap[i] == btn) {
                    document.cookie = `${i}`;
                }
            }
        });
    });
});
'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const btnSwap = document.querySelectorAll('.work_btn_delete');
	const posts = JSON.parse(localStorage.getItem('posts'));
	btnSwap.forEach(btn => {
		btn.addEventListener('click', function() {
			for (let i = 0; i < btnSwap.length; i++) {
				if (btnSwap[i] == btn) {
					posts.splice(i, i + 1);
					localStorage.setItem('posts', JSON.stringify(posts));
					location.reload();
				}
			}
		});
	});
});
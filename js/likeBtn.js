'use strict';

document.addEventListener('DOMContentLoaded', () => {
	// .........Кнопка Лайка............

	const btnLike = document.querySelectorAll('.work_btn_like');
	const user = JSON.parse(localStorage.getItem('user'));
	let arrayLike = user[`${0}`].like;
	btnLike.forEach(btn => {
		btn.addEventListener('click', function() {
			btn.classList.toggle('work_btn_like2');
			const counBtnLike = btn.querySelector('.like_btn_counter');
			let className = btn.className;
			for (let i = 0; i < btnLike.length; i++) {
				if (btnLike[i] == btn) {
					if (className == 'work_btn_like') {
						counBtnLike.textContent--;
						for (let j = 0; j < 10; j++) {
							if (i == arrayLike[j]) { arrayLike.splice(j, 1); }
						}
					} else {
						counBtnLike.textContent++;
						const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];
						const result = insert(arrayLike, i, i);
						arrayLike = result;
					}
					user[`${0}`].like = arrayLike;
					localStorage.setItem('user', JSON.stringify(user));
				}
			}
		});
	});
});
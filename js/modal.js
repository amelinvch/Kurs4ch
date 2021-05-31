'use strict';

document.addEventListener('DOMContentLoaded', () => {
	//Modal
	const modalTrigger = document.querySelectorAll('[data-modal]');
	const modal = document.querySelector('.modal');
	const modalCloseBtn = document.querySelector('[data-close]');
	const btnSin = document.querySelector('.btnSin');


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
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	btnSin.addEventListener('click', user);

	function user() {
		const user = localStorage.getItem('user');
		let userInfo = {
			userId: 0,
			like: [0],
		};
		userInfo.userName = document.querySelector('.user_name').value;
		userInfo.userEmail = document.querySelector('.user_password').value;
		if (user) {
			let parsed = JSON.parse(user);
			userInfo.userId = parsed.length;
			parsed.push(userInfo);
			localStorage.setItem('user', JSON.stringify(parsed));
		} else {
			localStorage.setItem('user', JSON.stringify([userInfo]));
		}
	}
});
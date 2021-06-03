'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const posts = JSON.parse(localStorage.getItem('posts'));
	const container = document.querySelector('.catalog_example_ad2');
	let href = document.location.href;
	for (const post of posts) {
		if (post.postId == href.split('?id=')[1]) {
			const photos = document.createElement('div');
			photos.className = 'photo_advertisment';
			photos.innerHTML = `${post.photoPost[1]}`;

			const nameProduct = document.createElement('div');
			nameProduct.className = 'text_h3_post_add content_block';
			nameProduct.innerText = `${post.productName}`;

			const productPrice = document.createElement('div');
			productPrice.className = 'text_h3_post_add';
			productPrice.innerText = `Цена: ${post.productPrice}`;

			const productDescription = document.createElement('div');
			productDescription.className = 'text_h3_post_add content_block';
			productDescription.innerText = `Описание \n ${post.productDescription}`;

			const productContInfo = document.createElement('div');
			productContInfo.className = 'text_h3_post_add content_block';
			productContInfo.innerText = `Контактная информация
            Город: ${post.nameCity}.
            Номер телефона: ${post.namePhone}
            Почта: ${post.nameEmail}`;

			container.append(photos);
			container.append(nameProduct);
			container.append(productDescription);
			container.append(productContInfo);
			nameProduct.append(productPrice);
		}
	}
});
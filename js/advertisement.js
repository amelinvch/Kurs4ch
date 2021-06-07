'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const posts = JSON.parse(localStorage.getItem('posts'));
  const container = document.querySelector('.catalog_example_ad2');
  const href = document.location.href;
  for (const post of posts) {
    if (post.postId == href.split('?id=')[1]) {
      const photos = addNameClass('photo_advertisment');
      photos.innerHTML = `${post.photoPost[1]}`;

      const nameProduct = addNameClass('text_h3_post_add content_block');
      nameProduct.innerText = `${post.productName}`;

      const productPrice = addNameClass('text_h3_post_add');
      productPrice.innerText = `Цена: ${post.productPrice}`;

      const productDescription = addNameClass('text_h3_post_add content_block');
      productDescription.innerText = `Описание \n ${post.productDescription}`;

      const productContInfo = addNameClass('text_h3_post_add content_block');
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

  function addNameClass(nameClass) {
    const res = document.createElement('div');
    res.className = `${nameClass}`;
    return res;
  }
});

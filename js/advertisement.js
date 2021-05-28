'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const posts = JSON.parse(localStorage.getItem('posts'));
    let container = document.querySelector('.catalog_example_ad2');
    let count = '0';
    for (const post of posts) {
        if (post.postId == count) {
            const photos = document.createElement('div');
            photos.className = 'photo_advertisment';
            photos.innerHTML = post.photoPost;

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
            Почта: ${post.nameEmail}`

            ;

            container.append(photos);
            container.append(nameProduct);
            container.append(productDescription);
            container.append(productContInfo);
            nameProduct.append(productPrice);
        }
    }



    // const btnSwap = document.querySelectorAll('.work_btn_price');
    // btnSwap.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         btn.classList.toggle('work_btn_like2');
    //         const counBtnLike = btn.querySelector('.like_btn_counter');
    //         let className = btn.className;
    //         if (className == "work_btn_like") {
    //             counBtnLike.textContent--;
    //         } else {
    //             counBtnLike.textContent++;
    //         }
    //     });
    // });


});
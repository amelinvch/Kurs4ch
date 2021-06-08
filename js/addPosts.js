'use strict';

document.addEventListener('DOMContentLoaded', () => {
    //................Добавленеи поста................
    const posts = JSON.parse(localStorage.getItem('posts'));
    const like = document.cookie.split('[')[1].split(']')[0].split(',');
    const container = document.querySelector('.catalog_example_ad');

    for (const post of posts) {
        const newPost = addNameClass('work');

        const photos = addNameClass('photos hide-picture hide');
        photos.innerHTML = post.photoPost;

        const rightButton = addNameClass('right-button swap-btn');
        rightButton.innerHTML = `<button>&lt</button>`;

        const leftButton = addNameClass('left-button swap-btn');
        leftButton.innerHTML = `<button>&gt</button>`;

        const workContent = addNameClass('work_content');

        const workCategory = addNameClass('work_category');
        workCategory.innerText = `Категория: ${post.productCatalog}`;

        const workTitle = addNameClass('work_title');
        workTitle.append(post.productName);

        const workPrice = addNameClass('work_price');
        workPrice.innerText = `Цена: ${post.productPrice} грн`;

        const workButtonLike = document.createElement('div');
        workClass(workButtonLike, post);
        workButtonLike.innerHTML = `
            <button class="btn-like">
              <img src="svg/btnLike.svg"/>
            </button>
            <div class="work_counter_like">
                Like:
                <span class="like_btn_counter">${post.productLike}</span>
            </div>`;

        const workButtonMore = addNameClass('work_btn_price');
        workButtonMore.innerHTML = `
            <button class="#">
                <div class="work_counter_like">
                    <a class="more-information" href="../html/advertisement.html?id=${post.postId}">Подробнее</a>
                </div>
            </button>
        `;

        const workBinBtn = addNameClass('work_btn_delete');
        workBinBtn.innerHTML = `
            <button>
              <img src="svg/delete.svg"/>
           </button>
        `;

        workTitle.append(workPrice);

        newPost.append(photos);
        newPost.append(workContent);
        rightButton.append(leftButton);
        workContent.append(rightButton);
        workContent.append(workCategory);
        workContent.append(workTitle);
        workContent.append(workButtonLike);
        workContent.append(workButtonMore);
        workButtonMore.append(workBinBtn);

        container.append(newPost);
    }

    function addNameClass(nameClass) {
        const res = document.createElement('div');
        res.className = `${nameClass}`;
        return res;
    }

    function workClass(workButtonLike, post) {
        if (like != '') {
            for (let i = 0; i < like.length; i++) {
                if (+like[i] === post.postId) {
                    workButtonLike.className = 'work_btn_like work_btn_like2';
                    return workButtonLike;
                } else {
                    workButtonLike.className = 'work_btn_like';
                }
            }
        } else {
            workButtonLike.className = 'work_btn_like';
            return workButtonLike;
        }
    }

    let index = 0;
    const btnRight = document.querySelectorAll('.right-button');
    const btnLeft = document.querySelectorAll('.left-button');

    for (const btn of btnRight) {
        btn.addEventListener('click', () => {
            slideSwitch(-1, btn);
        });
    }
    for (const btn of btnLeft) {
        btn.addEventListener('click', () => {
            slideSwitch(2, btn);
        });
    }

    function slideSwitch(slideNumber, btn) {
        showPictures(index += slideNumber, btn);
    }

    function showPictures(slideNumber, btn) {
        for (let i = 0; i < btnRight.length; i++) {
            if (btnRight[i] === btn) {
                if (slideNumber < 0) {
                    index = posts[i].photoPost.length - 1;
                } else if (slideNumber >= posts[i].photoPost.length) {
                    index = 0;
                }
                for (let i = 0; i < posts[i].photoPost.length; i++) {
                    posts[i].photoPost[i].style.display = 'none';
                }
                posts[i].photoPost[index - 1].style.display = 'block';
            }
        }
    }
});
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //................Добавленеи поста................
  const posts = JSON.parse(localStorage.getItem('posts'));
  const container = document.querySelector('.catalog_example_ad');
  const like = document.cookie.split('[')[1].split(']')[0].split(',');

  function createBlock(j) {

    const newPost = addNameClass('work');
    const photos = addNameClass('photos');
    photos.innerHTML = posts[j].photoPost[0];

    const workContent = addNameClass('work_content');
    const workCategory = addNameClass('work_category');
    workCategory.innerText = `Категория: ${posts[j].productCatalog}`;

    const workTitle = addNameClass('work_title');
    workTitle.append(posts[j].productName);

    const workPrice = addNameClass('work_price');
    workPrice.innerText = `Цена: ${posts[j].productPrice} грн`;

    const workButtonLike = addNameClass('work_btn_like work_btn_like2');
    workButtonLike.innerHTML = `
            <button class="btn-like">
                <img src="../svg/btnLike.svg"/>
            </button>
            <div class="work_counter_like">
                Like:
                <span class="like_btn_counter">${posts[j].productLike}</span>
            </div>`;

    const workButtonMore = addNameClass('work_btn_price');
    workButtonMore.innerHTML = `
                <button class="#">
                    <div class="work_counter_like">
                        <a class="more-information" href="../html/advertisement.html">Подробнее</a>
                    </div>
                </button>
            `;

    const workBinBtn = addNameClass('work_btn_delete');

    workBinBtn.innerHTML = `
                <button>
                    <svg height="45px" width="45px" viewBox="0 0 90 90"  xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M67.305,36.442v-8.055c0-0.939-0.762-1.701-1.7-1.701H54.342v-5.524c0-0.938-0.761-1.7-1.699-1.7h-12.75   c-0.939,0-1.701,0.762-1.701,1.7v5.524H26.93c-0.939,0-1.7,0.762-1.7,1.701v8.055c0,0.938,0.761,1.699,1.7,1.699h0.488v34.021   c0,0.938,0.761,1.7,1.699,1.7h29.481c3.595,0,6.52-2.924,6.52-6.518V38.142h0.486C66.543,38.142,67.305,37.381,67.305,36.442z    M41.592,22.862h9.35v3.824h-9.35V22.862z M61.719,67.345c0,1.719-1.4,3.117-3.12,3.117h-27.78v-32.32l30.9,0.002V67.345z    M63.904,34.742H28.629v-4.655h11.264h12.75h11.262V34.742z"/>
                            <rect height="19.975" width="3.4" x="36.066" y="44.962"/>
                            <rect height="19.975" width="3.4" x="44.566" y="44.962"/>
                            <rect height="19.975" width="3.4" x="53.066" y="44.962"/>
                        </g>
                    </svg>
               </button>`;

    workTitle.append(workPrice);

    newPost.append(photos);
    newPost.append(workContent);

    workContent.append(workCategory);
    workContent.append(workTitle);
    workContent.append(workButtonLike);
    workContent.append(workButtonMore);
    workButtonMore.append(workBinBtn);

    container.append(newPost);
  }

  for (let i = 0; i < like.length; i++) {
    const j = like.length === 0 ? 0 : like[i];
    createBlock(j);
  }

  function addNameClass(nameClass) {
    const res = document.createElement('div');
    res.className = `${nameClass}`;
    return res;
  }

});

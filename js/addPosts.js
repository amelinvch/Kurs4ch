'use strict';

document.addEventListener('DOMContentLoaded', () => {
	//................Добавленеи поста................
	const posts = JSON.parse(localStorage.getItem('posts'));
	const like = document.cookie.split('[')[1].split(']')[0].split(',');
	const container = document.querySelector('.catalog_example_ad');

	for (const post of posts) {
		const newPost = document.createElement('div');
		newPost.className = 'work';

		const photos = document.createElement('div');
		photos.className = 'photos';
		photos.innerHTML = post.photoPost[0];

		const workContent = document.createElement('div');
		workContent.className = 'work_content';

		const workCategory = document.createElement('div');
		workCategory.className = 'work_category';
		workCategory.innerText = `Категория: ${post.productCatalog}`;

		const workTitle = document.createElement('div');
		workTitle.className = 'work_title';
		workTitle.append(post.productName);

		const workPrice = document.createElement('div');
		workPrice.className = 'work_price';
		workPrice.innerText = `Цена: ${post.productPrice} грн`;

		const workButtonLike = document.createElement('div');
		if (like != '') {
			for (let i = 0; i < like.length; i++) {
				if (like[i] == post.postId) {
					workButtonLike.className = 'work_btn_like work_btn_like2';
				} else {
					workButtonLike.className = 'work_btn_like';
				}
			}
		} else {
			workButtonLike.className = 'work_btn_like';
		}

		workButtonLike.innerHTML = `
            <button class="btn-like">
                <svg width="50" height="50" viewBox="0 0 25 25"  xmlns="http://www.w3.org/2000/svg">
                    <path  clip-rule="evenodd" d="M15.8498 2.50071C16.4808 2.50071 17.1108 2.58971 17.7098 2.79071C21.4008 3.99071 22.7308 8.04071 21.6198 11.5807C20.9898 13.3897 19.9598 15.0407 18.6108 16.3897C16.6798 18.2597 14.5608 19.9197 12.2798 21.3497L12.0298 21.5007L11.7698 21.3397C9.48077 19.9197 7.34977 18.2597 5.40077 16.3797C4.06077 15.0307 3.02977 13.3897 2.38977 11.5807C1.25977 8.04071 2.58977 3.99071 6.32077 2.76971C6.61077 2.66971 6.90977 2.59971 7.20977 2.56071H7.32977C7.61077 2.51971 7.88977 2.50071 8.16977 2.50071H8.27977C8.90977 2.51971 9.51977 2.62971 10.1108 2.83071H10.1698C10.2098 2.84971 10.2398 2.87071 10.2598 2.88971C10.4808 2.96071 10.6898 3.04071 10.8898 3.15071L11.2698 3.32071C11.3616 3.36968 11.4647 3.44451 11.5537 3.50918C11.6102 3.55015 11.661 3.58705 11.6998 3.61071C11.7161 3.62034 11.7327 3.63002 11.7494 3.63978C11.8351 3.68983 11.9245 3.74197 11.9998 3.79971C13.1108 2.95071 14.4598 2.49071 15.8498 2.50071ZM18.5098 9.70071C18.9198 9.68971 19.2698 9.36071 19.2998 8.93971V8.82071C19.3298 7.41971 18.4808 6.15071 17.1898 5.66071C16.7798 5.51971 16.3298 5.74071 16.1798 6.16071C16.0398 6.58071 16.2598 7.04071 16.6798 7.18971C17.3208 7.42971 17.7498 8.06071 17.7498 8.75971V8.79071C17.7308 9.01971 17.7998 9.24071 17.9398 9.41071C18.0798 9.58071 18.2898 9.67971 18.5098 9.70071Z" />
                </svg>
            </button>
            <div class="work_counter_like">
                Like:
                <span class="like_btn_counter">${post.productLike}</span>
            </div>
        `;

		const workButtonMore = document.createElement('div');
		workButtonMore.className = 'work_btn_price';
		workButtonMore.innerHTML = `
            <button class="#">
                <div class="work_counter_like">
                    <a class="more-information" href="../html/advertisement.html?id=${post.postId}">Подробнее</a>
                </div>
            </button>
        `;

		const workBinBtn = document.createElement('div');
		workBinBtn.className = 'work_btn_delete';
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
           </button>
        `;

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
});
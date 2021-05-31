'use strict';


document.addEventListener('DOMContentLoaded', () => {

    /*Category window*/

    const selected = document.querySelector('.selected');
    const optionsContainer = document.querySelector('.options-container');
    const searchBox = document.querySelector('.search-box input');
    const optionsList = document.querySelectorAll('.option');

    selected.addEventListener('click', () => {
        optionsContainer.classList.toggle('active');

        searchBox.value = '';
        filterList('');

        if (optionsContainer.classList.contains('active')) {
            searchBox.focus();
        }
    });

    optionsList.forEach(o => {
        o.addEventListener('click', () => {
            selected.innerHTML = o.querySelector('label').innerHTML;
            optionsContainer.classList.remove('active');
        });
    });

    searchBox.addEventListener('keyup', function(e) {
        filterList(e.target.value);
    });

    const filterList = searchTerm => {
        searchTerm = searchTerm.toLowerCase();
        optionsList.forEach(option => {
            const label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            label.indexOf(searchTerm) !== -1 ? option.style.display = 'block' : option.style.display = 'none';
        });
    };

    /*...........Counter of letters...........*/

    const myInput = document.getElementById('my-input');
    const myTextArea = document.getElementById('my-textarea');
    const remainingCharsInput = document.getElementById('my-input-remaining-chars');
    const remainingCharsTextArea = document.getElementById('my-textarea-remaining-chars');
    const MAX_CHARS = 500;
    const MAX_CHARS_INPUT = 70;

    myTextArea.addEventListener('input', () => {
        const remaining = myTextArea.value.length;
        remainingCharsTextArea.textContent = `${remaining}/${MAX_CHARS}`;
    });

    myInput.addEventListener('input', () => {
        const remaining = myInput.value.length;
        remainingCharsInput.textContent = `${remaining}/ ${MAX_CHARS_INPUT}`;
    });

    myTextArea.setAttribute('maxlength', MAX_CHARS);
    myInput.setAttribute('maxlength', MAX_CHARS_INPUT);

    //.........................Добавление фото..............

    const dropPhotoAdd = document.querySelector('.add_photos');
    const btnAddPhotos = document.getElementById('btn_add_photos');
    const fileInput = document.getElementById('file_input_photos');
    let filePhotos;
    let countClick = 1;


    btnAddPhotos.onclick = () => {
        fileInput.click(); //если пользователь нажимает кнопку, то ввод также нажимаеться
        const maxAddPhoto = 6;
        if (countClick < maxAddPhoto) {
            const borderPhotoAdd = document.createElement('div');
            const contantPhoto = document.querySelectorAll('.contant_photo_add');
            borderPhotoAdd.innerHTML = `
        <div class="contant_photo_add">
            <div class="add_photos">
                <button id="btn_add_photos">
                    <svg id="upload-photo-icon" width="45" height="45" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4913 7.04599C11.0775 5.98064 11.7152 5.26846 12.6614 4.89184C14.3954 4.20237 20.6055 4.20237 22.3381 4.89198C23.2839 5.2684 23.9218 5.98045 24.5084 7.04558L25.1679 8.31018C25.183 8.33523 25.1969 8.35727 25.2093 8.37623L25.2653 8.4528C25.5658 8.7802 26.0686 8.97799 26.4005 8.97799C29.5389 8.97799 32.0837 11.5222 32.0837 14.6597V23.1107C32.0837 27.1127 28.8377 30.3586 24.8357 30.3586H10.1649C6.16194 30.3586 2.91699 27.1131 2.91699 23.1107V14.6597C2.91699 11.5222 5.46175 8.97799 8.60012 8.97799C8.93083 8.97799 9.4344 8.77991 9.73534 8.4528C9.74135 8.44625 9.7492 8.43649 9.75869 8.42358L9.83368 8.30854L10.4913 7.04599ZM22.5923 8.10092C22.2278 7.43907 21.8984 7.07135 21.5292 6.92441L21.3552 6.86657C19.8543 6.44236 14.6338 6.46164 13.47 6.92441C13.101 7.07128 12.7719 7.4388 12.4079 8.10052L11.8466 9.18566L11.7085 9.43566C11.5931 9.62747 11.4778 9.78939 11.3461 9.9329C10.6075 10.7357 9.51486 11.1655 8.60012 11.1655L8.36081 11.1736C6.54205 11.2965 5.10449 12.8108 5.10449 14.6597V23.1107C5.10449 25.9051 7.37014 28.1711 10.1649 28.1711H24.8357C27.6296 28.1711 29.8962 25.9046 29.8962 23.1107V14.6597C29.8962 12.7304 28.3309 11.1655 26.4005 11.1655L26.1466 11.1549C25.2883 11.0843 24.3243 10.6626 23.6537 9.93193C23.5237 9.79032 23.409 9.62956 23.2944 9.43936C23.2779 9.41208 23.2575 9.37616 23.234 9.33366L23.0647 9.01611L22.5923 8.10092Z"/>
                        <path d="M25.5274 12.3959C26.3328 12.3959 26.9857 13.0488 26.9857 13.8542C26.9857 14.6021 26.4227 15.2185 25.6974 15.3027L25.5274 15.3125C24.7088 15.3125 24.0559 14.6596 24.0559 13.8542C24.0559 13.1063 24.6189 12.4899 25.3442 12.4057L25.5274 12.3959Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7703 19.1451C11.7703 15.9802 14.3352 13.4153 17.5001 13.4153C20.6649 13.4153 23.2298 15.9802 23.2298 19.1451C23.2298 22.31 20.6649 24.8749 17.5001 24.8749C14.3352 24.8749 11.7703 22.31 11.7703 19.1451ZM21.0423 19.1451C21.0423 17.1883 19.4568 15.6028 17.5001 15.6028C15.5433 15.6028 13.9578 17.1883 13.9578 19.1451C13.9578 21.1018 15.5433 22.6874 17.5001 22.6874C19.4568 22.6874 21.0423 21.1018 21.0423 19.1451Z" />
                    </svg>
                </button>
                <input id="file_input_photos" type="file" hidden>
            </div>
        </div>`;
            contantPhoto[contantPhoto.length - 1].append(borderPhotoAdd);
        }
    };

    fileInput.addEventListener('change', function() {
        filePhotos = this.files[0]; //если выбрали несколько файлов, то берём первый
        dropPhotoAdd.classList.add('active');
        showFile();

    });

    function showFile() {
        let fileType = filePhotos.type; //получение выбранного типа файла
        let validExtensions = ['image/jpeg', 'image/jpg', 'image/png']; //формат фото
        if (validExtensions.includes(fileType)) { //Если файл изображение
            let fileReader = new FileReader(); //созаём новый FileReader
            fileReader.onload = () => {
                let fileURL = fileReader.result; //передача источника файла пользователя в fileURL
                let imgTag = `<img src="${fileURL}" alt="">`; //создание тега img и передача в атрибута src
                dropPhotoAdd.innerHTML = imgTag; //добавление созданного тега img внутри контейнера dropPhotoAdd
            };
            fileReader.readAsDataURL(filePhotos);
        } else {
            alert('Это не изображение!');
            dropPhotoAdd.classList.remove('active');
        }
    }

    //.................Добавление поста....................

    const btnPublickPost = document.getElementById('publish_post');

    function inputText() {
        const posts = localStorage.getItem('posts');
        let postInfo = {
            postId: 0,
            productLike: 228,
        };

        let flag = true;
        const field = document.querySelectorAll('.input_post_add');
        field.forEach(function(item) {
            if (item.value) {
                document.getElementById('submit').href = '../index.html';
                flag = true;
                return flag;
            }
            item.style.borderColor = 'red';
            flag = false;
            return flag;
        });

        if (flag) {
            postInfo.productName = document.querySelector('.input_poduct_name').value;
            postInfo.productPrice = document.querySelector('.input_poduct_price').value;
            postInfo.productDescription = document.querySelector('.input_product_description').value;
            postInfo.productCatalog = document.querySelector('.input_product_catalog').value;
            postInfo.nameCity = document.querySelector('.input_name_city').value;
            postInfo.nameAccount = document.querySelector('.input_name_account').value;
            postInfo.nameEmail = document.querySelector('.input_email').value;
            postInfo.namePhone = document.querySelector('.input_phone').value;
            postInfo.photoPost = dropPhotoAdd.innerHTML;

            if (posts) {
                let parsed = JSON.parse(posts);
                postInfo.postId = parsed.length;
                parsed.push(postInfo);
                localStorage.setItem('posts', JSON.stringify(parsed));
            } else {
                localStorage.setItem('posts', JSON.stringify([postInfo]));
            }
        }

    }

    btnPublickPost.addEventListener('click', inputText);
});
'use strict';

/*Category window*/

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");

    searchBox.value = "";
    filterList("");

    if (optionsContainer.classList.contains("active")) {
        searchBox.focus();
    }
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});

searchBox.addEventListener("keyup", function(e) {
    filterList(e.target.value);
});

const filterList = searchTerm => {
    searchTerm = searchTerm.toLowerCase();
    optionsList.forEach(option => {
        const label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
        label.indexOf(searchTerm) !== -1 ? option.style.display = "block" : option.style.display = "none";
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
    remainingCharsTextArea.textContent = `${remaining}/500`;
});

myInput.addEventListener('input', () => {
    const remaining = myInput.value.length;
    remainingCharsInput.textContent = `${remaining}/70`;
});

myTextArea.setAttribute('maxlength', '500');
myInput.setAttribute('maxlength', '70');

//.........................Добавление фото..............

const dropPhotoAdd = document.querySelector(".add_photos");
const btnAddPhotos = document.getElementById("btn_add_photos");
const fileInput = document.getElementById("file_input_photos");
let filePhotos;
let countClick = 1;


btnAddPhotos.onclick = () => {
    fileInput.click(); //если пользователь нажимает кнопку, то ввод также нажимаеться
    const maxAddPhoto = 6;
    if (countClick < maxAddPhoto) {
        const borderPhotoAdd = document.createElement('borderPhotoAdd');
        const contantPhoto = document.querySelectorAll('.contant_photo_add');
        borderPhotoAdd.classList.add('add_photos');
        contantPhoto[contantPhoto.length - 1].append(borderPhotoAdd);
    }
};

fileInput.addEventListener("change", function() {
    filePhotos = this.files[0]; //если выбрали несколько файлов, то берём первый
    dropPhotoAdd.classList.add("active");
    showFile();

});

function showFile() {
    let fileType = filePhotos.type; //получение выбранного типа файла
    let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //формат фото
    if (validExtensions.includes(fileType)) { //Если файл изображение
        let fileReader = new FileReader(); //созаём новый FileReader
        fileReader.onload = () => {
            let fileURL = fileReader.result; //передача источника файла пользователя в fileURL
            let imgTag = `<img src="${fileURL}" alt="">`; //создание тега img и передача в атрибута src
            dropPhotoAdd.innerHTML = imgTag; //добавление созданного тега img внутри контейнера dropPhotoAdd
        };
        fileReader.readAsDataURL(filePhotos);
    } else {
        alert("Это не изображение!");
        dropPhotoAdd.classList.remove("active");
    }
}

//.................Добавление поста....................

const btnPublickPost = document.getElementById('publish_post');
const like = 0;

function inputText() {
    let postInfo = {};
    postInfo.productName = document.querySelector('.input_poduct_name').value;
    postInfo.productDescription = document.querySelector('.input_product_description').value;
    postInfo.productCatalog = document.querySelector('.input_product_catalog').value;
    postInfo.nameCity = document.querySelector('.input_name_city').value;
    postInfo.nameAccount = document.querySelector('.input_name_account').value;
    postInfo.nameEmail = document.querySelector('.input_email').value;
    postInfo.namePhone = document.querySelector('.input_phone').value;
    postInfo.countLike = like.innertext;
    postInfo.photoPost = dropPhotoAdd.innerHTML;

    const posts = localStorage.getItem('posts');
    if (posts) {
        let parsed = JSON.parse(posts);
        parsed.push(postInfo);
        localStorage.setItem('posts', JSON.stringify(parsed));
    } else {
        localStorage.setItem('posts', JSON.stringify([postInfo]));
    }

}

btnPublickPost.addEventListener('click', inputText);
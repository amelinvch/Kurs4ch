const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const optionsList = document.querySelectorAll(".option");
const nameP = document.querySelector(".name");
const describe = document.querySelector(".describe");
const country = document.querySelector(".country");
const personName = document.querySelector(".person-name");
const email = document.querySelector(".email");
const phoneNumber = document.querySelector(".phone-number");

nameP.setAttribute('maxlength', '50');
describe.setAttribute('maxlength', '600');
country.setAttribute('maxlength', '50');
personName.setAttribute('maxlength', '50');
email.setAttribute('maxlength', '50');
phoneNumber.setAttribute('maxlength', '50');

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
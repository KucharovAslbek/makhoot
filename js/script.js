$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });
    $('.reviews-slider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        slidesToShow: 2,
        slidesToScroll: 2,
    });
});

let tabBtn = document.querySelectorAll('.tab__btn');

let tabContent = document.querySelectorAll('.tariff-conditions');
let tabName;

tabBtn.forEach((item) => {
    item.addEventListener('click', selectedTabBtn);
});

function selectedTabBtn() {
    tabBtn.forEach((elem) => {
        elem.classList.remove('tab__btn--active');
    });
    this.classList.add('tab__btn--active');
    tabName = this.getAttribute('data-tariff');
    selectTabContent(tabName);
}

function selectTabContent(tabName) {
    tabContent.forEach((el) => {
        el.classList.contains(tabName) ? el.classList.add('tariff-conditions__active') : el.classList.remove('tariff-conditions__active');
    });
}

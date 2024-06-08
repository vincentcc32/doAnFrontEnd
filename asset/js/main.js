
// open and hide modal place bid

// list element have .js-place-bid
const buyBtns = document.querySelectorAll('.js-place-bid');

//  element have .js-modal
const modal = document.querySelector(".js-modal");
// element have .modal__container-icon-close "icon close modal"
const modaClose = document.querySelector(".modal__container-icon-close");
// element have .modal__overlay
const modalOverlay = document.querySelector(".js-modal__overlay");
// open modal
function showBuyPlaceBids() {
    modal.classList.add("modal-open");
}

// close modal
function hideBuyPlaceBids() {
    modal.classList.remove("modal-open");
}

// list place bid have .js-place-bid
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener("click", showBuyPlaceBids)
}
// close modal icon close
modaClose.addEventListener("click", hideBuyPlaceBids);

// close modal width overlay
modalOverlay.addEventListener("click", hideBuyPlaceBids);

// favorite

// list favorite

// const hearts = document.querySelectorAll(".js-product-heading-circle");
// const heartActives = document.querySelectorAll(".js-product-heading-circle--active");
// // them favorite
// hearts.forEach((heart, index) => {

//     heart.onclick = function () {
//         this.classList.add("js-product-heading-circle--active");
//     }

// });

// favorite
const hearts = document.querySelectorAll(".js-product-heading-circle");

hearts.forEach((heart, index) => {
    heart.onclick = function () {
        this.classList.toggle("js-product-heading-circle--active");
    }
});


// tab hot auction

const tabHots = document.querySelectorAll(".content__hot-auction-category-btn");
const paneHots = document.querySelectorAll(".content__hot-auction-tab");

// them active cho hot cate
tabHots.forEach((tabHot, index) => {
    const paneHot = paneHots[index];

    tabHot.onclick = function () {
        document.querySelector(".content__hot-auction-category-btn.content__hot-auction-category-btn--active").classList.remove("content__hot-auction-category-btn--active");
        document.querySelector(".content__hot-auction-tab.content__hot-auction--active").classList.remove("content__hot-auction--active");

        this.classList.add("content__hot-auction-category-btn--active");
        paneHot.classList.add("content__hot-auction--active");
    }
});

// them active cho sale cate


const tabSales = document.querySelectorAll(".content__hot-sales-category-btn");
const paneSales = document.querySelectorAll(".content__hot-sales-tab");

// them active cho hot cate
tabSales.forEach((tabSale, index) => {
    const paneSale = paneSales[index];
    tabSale.onclick = function () {
        document.querySelector(".content__hot-sales-category-btn.content__hot-sales-category-btn--active").classList.remove("content__hot-sales-category-btn--active");
        document.querySelector(".content__hot-sales-tab.content__hot-sales--active").classList.remove("content__hot-sales--active");

        this.classList.add("content__hot-sales-category-btn--active");
        paneSale.classList.add("content__hot-sales--active");
    }
});


// page tab


const tabPages = document.querySelectorAll(".header__nav-link-tab");
const panePages = document.querySelectorAll(".page-tab");

// them active cho page tab
tabPages.forEach((tabPage, index) => {
    const panePage = panePages[index];
    tabPage.onclick = function () {
        document.querySelector(".header__nav-link-tab.header__nav-link--active").classList.remove("header__nav-link--active");
        document.querySelector(".page-tab.page-tab--active").classList.remove("page-tab--active");

        this.classList.add("header__nav-link--active");
        panePage.classList.add("page-tab--active");
    }
});

// bar page tab

const tabPageBars = document.querySelectorAll(".header__bar-link-tab");
const panePageBars = document.querySelectorAll(".page-tab");

// them active cho page tab
tabPageBars.forEach((tabPagebar, index) => {
    const panePageBar = panePageBars[index];
    tabPagebar.onclick = function () {
        document.querySelector(".header__bar-link-tab.header__bar-link--active").classList.remove("header__bar-link--active");
        document.querySelector(".page-tab.page-tab--active").classList.remove("page-tab--active");

        this.classList.add("header__bar-link--active");
        panePageBar.classList.add("page-tab--active");
    }
});

// faq sub list

const faqs = document.querySelectorAll(".page-faq__content-list-item-btn");

faqs.forEach((faq, index) => {
    faq.onclick = function () {
        this.classList.toggle("page-faq__content-list-item-btn--active");
    }
});

// scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("header").style.position = "fixed";
        document.getElementById("on-top").style.display = "block";
    } else {
        document.getElementById("header").style.position = "static";
        document.getElementById("on-top").style.display = "none";
    }
}

// hiden and show pass login

const passIconP = document.querySelector(".page-sign__content-form-icon-pass");
const passInputP = document.querySelector(".page-sign__content-form-input-input-pass");


passIconP.addEventListener("click", function () {
    if (passInputP.type === "password") {
        passInputP.type = "text";
        passIconP.classList.replace("fa-eye-slash", "fa-eye");
    }
    else {
        passInputP.type = "password";
        passIconP.classList.replace("fa-eye", "fa-eye-slash");
    }
})

const passIconConfP = document.querySelector(".page-sign__content-form-icon-cof-pass");
const passInputConfP = document.querySelector(".page-sign__content-form-input-input-conf-pass");


passIconConfP.addEventListener("click", function () {
    if (passInputConfP.type === "password") {
        passInputConfP.type = "text";
        passIconConfP.classList.replace("fa-eye-slash", "fa-eye");
    }
    else {
        passInputConfP.type = "password";
        passIconConfP.classList.replace("fa-eye", "fa-eye-slash");
    }
})



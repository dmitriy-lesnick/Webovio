const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".header__link");
const navList = document.querySelector(".header__list");
const burger = document.querySelector(".header__burger");
const burgerWrp = document.querySelector(".header__burger-inner-wrp");

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        header.classList.add("header--active")
    } else {
        header.classList.remove("header--active")
    }
});

burger.addEventListener('click', () => {
    navList.classList.toggle('header__list--active');
    burgerWrp.classList.toggle('header__burger-inner-wrp--close');
    navLinksAddClass();
    if (navList.className == "header__list header__list--active") {
        navList.classList.add('header__list--transition')
    } else {
        transitionClassRemove();
    }


});

function navLinksAddClass() {
    navLinks.forEach(link => {
        if (burgerWrp.className == "header__burger-inner-wrp header__burger-inner-wrp--close") {
            link.classList.add('header__link--active')
        } else {
            link.classList.remove('header__link--active')
        }
    });
};

function transitionClassRemove() {
    setTimeout(() => {
        navList.classList.remove('header__list--transition')
    }, 400);
};

function scrollToElement(id) {
    let headerHight = header.clientHeight
    let scrollTarget = document.getElementById(id)
    let elementTarget = scrollTarget.getBoundingClientRect().top - headerHight
    window.scrollBy({
        top: elementTarget,
        behavior: "smooth"
    });

    if (window.innerWidth <= 768) {
        burgerWrp.classList.remove('header__burger-inner-wrp--close');
        navList.classList.remove('header__list--active');
        navLinksAddClass();
        transitionClassRemove();
    }
};

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let linkHref = link.getAttribute('href').substring(1);
        scrollToElement(linkHref);
    })
});



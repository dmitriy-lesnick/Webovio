const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".header__link");
const navList = document.querySelector(".header__list");
const burger = document.querySelector(".header__burger");
const burgerWrp = document.querySelector(".header__burger-inner-wrp");
const content = document.querySelectorAll("[data-content = content]");

window.addEventListener('scroll', function () {
    activationHeader()
    setActiveNavLinks()
});

function activationHeader() {
    if (scrollY > 50) {
        header.classList.add("header--active")
    } else {
        header.classList.remove("header--active")
    }
}

function setActiveNavLinks() {
    [...navLinks].forEach(e => e.classList.remove('header__link--active'))

    if (window.scrollY < content[0].clientHeight / 2) {
        let link = document.querySelector(`[href = "#${content[0].id}"]`)
        link.classList.add('header__link--active')
        return
    } else if (innerHeight + scrollY >= document.documentElement.scrollHeight - header.clientHeight) {
        let link = document.querySelector(`[href = "#${content[content.length - 1].id}"]`)
        link.classList.add('header__link--active')
        return
    }

    for (let i = content.length - 2; i > 0; --i) {
        if (window.scrollY > content[i].getBoundingClientRect().top - header.clientHeight) {
            let link = document.querySelector(`[href = "#${content[i].id}"]`)
            link.classList.add('header__link--active')
            break
        }
    }
}

burger.addEventListener('click', () => {
    navList.classList.toggle('header__list--active');
    burgerWrp.classList.toggle('header__burger-inner-wrp--close');
    navLinksAddClass();
});

function navLinksAddClass() {
    navLinks.forEach(link => {
        if (burgerWrp.className == "header__burger-inner-wrp header__burger-inner-wrp--close") {
            link.classList.add('header__link--visible')
        } else {
            link.classList.remove('header__link--visible')
        }
    });
};


function scrollToElement(id) {
    let scrollTarget = document.getElementById(id)
    let top = scrollTarget.getBoundingClientRect().top - header.clientHeight
    scrollByY(top)

    if (window.innerWidth <= 768) {
        burgerWrp.classList.remove('header__burger-inner-wrp--close');
        navList.classList.remove('header__list--active');
        navLinksAddClass();
    }
};

function scrollByY(top) {
    window.scrollBy({
        top,
        behavior: "smooth"
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        let linkHref = link.getAttribute('href').substring(1);
        scrollToElement(linkHref);
    })
});



const header = document.querySelector(".header"), navLinks = document.querySelectorAll(".header__link"), navList = document.querySelector(".header__list"), burger = document.querySelector(".header__burger"), burgerWrp = document.querySelector(".header__burger-inner-wrp"); function navLinksAddClass() { navLinks.forEach(e => { "header__burger-inner-wrp header__burger-inner-wrp--close" == burgerWrp.className ? e.classList.add("header__link--active") : e.classList.remove("header__link--active") }) } function transitionClassRemove() { setTimeout(() => { navList.classList.remove("header__list--transition") }, 400) } function scrollToElement(e) { var r = header.clientHeight; let s = document.getElementById(e); r = s.getBoundingClientRect().top - r; window.scrollBy({ top: r, behavior: "smooth" }), window.innerWidth <= 768 && (burgerWrp.classList.remove("header__burger-inner-wrp--close"), navList.classList.remove("header__list--active"), navLinksAddClass(), transitionClassRemove()) } window.addEventListener("scroll", () => { 50 < scrollY ? header.classList.add("header--active") : header.classList.remove("header--active") }), burger.addEventListener("click", () => { navList.classList.toggle("header__list--active"), burgerWrp.classList.toggle("header__burger-inner-wrp--close"), navLinksAddClass(), "header__list header__list--active" == navList.className ? navList.classList.add("header__list--transition") : transitionClassRemove() }), navLinks.forEach(r => { r.addEventListener("click", e => { e.preventDefault(), scrollToElement(r.getAttribute("href").substring(1)) }) });
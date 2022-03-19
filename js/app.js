(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    const menuButton = document.querySelectorAll(".icon-menu,.menu-icon");
    const navigation = document.querySelector(".header__navigation");
    const body = document.querySelector(".body");
    const switchTheme = document.querySelector(".label");
    navigation.classList.remove("header__navigation--no-js");
    menuButton.forEach((item => {
        item.addEventListener("click", (function() {
            if (navigation.classList.contains("header__navigation--closed")) {
                navigation.classList.remove("header__navigation--closed");
                navigation.classList.add("header__navigation--open");
            } else {
                navigation.classList.add("header__navigation--closed");
                navigation.classList.remove("header__navigation--open");
            }
        }));
    }));
    function scrollHeader() {
        const header = document.querySelector("header");
        if (this.scrollY >= 80) header.classList.add("scroll-header"); else header.classList.remove("scroll-header");
    }
    window.addEventListener("scroll", scrollHeader);
    switchTheme.addEventListener("change", (() => {
        body.classList.toggle("dark-theme");
    }));
    window["FLS"] = true;
    isWebp();
})();
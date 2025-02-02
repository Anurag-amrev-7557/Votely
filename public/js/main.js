document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("mobileMenu");
    const burger = document.querySelector(".burger");
    const hero = document.querySelector(".hero");
    const burgerCheckbox = document.querySelector("#burger-checkbox");

    burger.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
    
    hero.addEventListener("click", () => {
        if (menu.classList.contains("show")) {
            burgerCheckbox.checked = false;
            menu.classList.remove("show");
        }
    });
});
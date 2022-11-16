console.log("Hello")
const btnHamburger = document.querySelector("#btnHamburger");
const header = document.querySelector(".header")
const fadeElems = document.querySelectorAll(".has_fade")
const headerMenu = document.querySelector(".header__menu")
const body = document.querySelector("body")


btnHamburger.addEventListener("click", function () {
    // headerMenu.style.display = "none"

    // console.log(btnHamburger, "worrk")
    if (header.classList.contains("open")) {
        body.classList.remove("noscroll")
        header.classList.remove("open")
        headerMenu.style.opacity = "0"
        headerMenu.style.visibility = "hidden"


    } else {
        body.classList.add("noscroll")
        header.classList.add("open")
        headerMenu.style.opacity = "1"
        headerMenu.style.visibility = "visible"


        // fadeElems.forEach((elem) => {
        //     elem.classList.add(".fade-in")
        // })

    }

})
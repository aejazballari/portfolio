const navSlide  = () => {
    const burger = document.querySelector(".burger-container");
    const nav = document.querySelector(".nav-links")

    burger.addEventListener("click", () => {
        nav.classList.toggle("links-container");
         nav.classList.toggle("show-links");
    });
};

// const closeNav = (remove) => {
//     const close = document.querySelectorAll(".close");
//     const nav = document.querySelector(".navlinks");
    
//     close.forEach((click) => {
//         click.addEventListener("click", () => {
//             nav.classList.remove("links-container");
//         });
//         return click;
//     });
//     return remove;
//     }
// closeNav();

navSlide();
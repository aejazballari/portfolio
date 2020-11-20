const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger-container");
const navlinks = document.querySelectorAll(".nav-links");
const link = document.querySelector(".links");

const navSlide  = () => {
    burger.addEventListener("click", () => {
        nav.classList.toggle("links-container");
         nav.classList.toggle("show-links");
    });
};

navSlide();


        
 navlinks.forEach( (click) => {
     click.addEventListener("click", () => {
        console.log(click);
        click.classList.remove("links-container");
        click.classList.remove("show-links");
     })
})




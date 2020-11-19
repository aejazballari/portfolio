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

//   const shut = () => {
//     navlinks.addEventListener("click", (e) => {
//         const close = e.Target.parenetElement;
//         console.log(close);
//         close.parenetElement.classList.toggle("links-container");
//         close.classList.toggle("show-links");
//     })
//   } 
//     // console.log(shut);
    // const close = e.currentTarget.parentElement;
 
    navlinks.forEach(() => {
        link.addEventListener("click", () => {
            navlinks.classList.toggle("links-container")
        })
        
    })

    

navSlide();
// shut();



const nav = document.querySelector(".nav-container");
const burger = document.querySelector(".burger-container");
const navlinks = document.querySelectorAll(".nav-links");
const links = document.querySelectorAll(".nav-links li");

const animateLinks = () => {
     links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = "";
            } else {
                link.style.animation =  `fadelinks 0.5s ease forwards ${index / 3 + 1.2}s`;
                }
         });
    }

const navSlide  = () => {
    burger.addEventListener("click", () => {
        nav.classList.toggle("show-links");
        animateLinks();

    });
   
    };

navSlide();

const close = () =>{
    navlinks.forEach((link)=>{
        link.addEventListener("click", ()=>{
            nav.classList.toggle("show-links");
            animateLinks();
        })
    })
}

close();


 
// links.forEach((click)=>{
//     click.addEventListener("click", ()=>{
//         close();
//     })   
// })
        
//  navlinks.forEach( (click) => {
//      click.addEventListener("click", () => {
//          console.log(click);
//         // click.classList.remove("show-links");
//      })
// })




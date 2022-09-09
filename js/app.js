const header = document.querySelector ("header");

/*----sticky navegador-----*/

function stickyNavbar(){
 header.classList.toggle("scrolled", window.pageYOffset > 0);
   
}

stickyNavbar();

window.addEventListener ("scroll", stickyNavbar);

/*-----scroll revead-*/

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px"
})

sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", {origin:top,delay: 700});
sr.reveal(".about-info", {origin:top,delay: 100});


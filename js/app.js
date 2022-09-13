const header = document.querySelector ("header");
const ml_section = document.querySelectorAll(".miLestones")
const toggle_btn = document.querySelector(".toggle-btn")

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

/*------TEMA NEGRO/BLANCO----------*/
function changeTheme (){
    if (!document.body.classList.contains("dark")){
        document.body.classList.add("dark");
        toggle_btn.classList.replace("uil-moon", "uil-sun")
    }

    else {
        document.body.classList.remove("dark");
        toggle_btn.classList.replace("uil-sun", "uil-moon")

    }
}

toggle-btn.addEventListener("click", () => {
    changeTheme()
})


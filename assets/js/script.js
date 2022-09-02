// menu show
const showMenu = (toggleId,navId)=> {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
    // console.log(toggle);
    // consoe.log(nav);
    if(toggle && nav) {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');//javascript css to display nav  menu
        });
    }
};
showMenu('nav_toggle', 'nav_menu')
// Active and remove menu mobile View
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
}
navLink.forEach((n)=>n.addEventListener('click',linkAction));

// Scroll Reveal Animation
const sr = ScrollReveal({
origin:'Top',
distance:'80px',
duration:2000,
reset:true,
});

// Scroll Home
sr.reveal('.home_title',{});
sr.reveal('button',{delay:200});
sr.reveal('.home_img',{delay:400});
sr.reveal('home_social-icon',{interval:300});

// Scroll About
sr.reveal('.about_img',{});
sr.reveal('.about_subtitle',{delay:200});
sr.reveal('.about_text',{delay:400});

// scroll Skills
sr.reveal('.skills_subtitle',{});
sr.reveal('.skills_text',{delay:200});
sr.reveal('.skills_data',{interval:400});
sr.reveal('.skills_img',{delay:400});

// Scroll Work
sr.reveal('.work_img',{interval:200});

// Scroll Contact
sr.reveal('.contact_input',{interval:300});
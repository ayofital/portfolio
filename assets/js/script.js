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

const menuBtn = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
})



const menuBtn = document.querySelector('.menu-icon')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('mobile-menu')
})




let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");

function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
}



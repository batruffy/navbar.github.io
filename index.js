const mobile_btn = document.querySelector('.mobile-navbar');
const header = document.querySelector('.header');

const togglenavbar = () =>{
    header.classList.toggle('active')
}

mobile_btn.addEventListener("click", ()=> togglenavbar());
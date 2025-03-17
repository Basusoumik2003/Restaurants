let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let nevbar = document.querySelector('.nevbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
})

menu.onclick = () => {
    nevbar.classList.toggle('active')
}
window.onscroll = ()=>{
    nevbar.classList.remove('active')
}
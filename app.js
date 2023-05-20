const btn_menu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu')

btn_menu.addEventListener('click', (e) => {
    menu.classList.toggle('is-active')
    
    menu.classList.contains('is-active')
        ?btn_menu.innerHTML = '<i class="fa-solid fa-x"></i>'
        :btn_menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
})
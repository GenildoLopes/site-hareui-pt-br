// OPEN/CLOSE ASIDE

// Get Aside
const boxAside = document.querySelector('#sidebar')

// Get Navbar
const navbar = document.querySelector('.navbox')

// Get Btn
const btnAside = document.querySelector('#btn-aside')

btnAside.addEventListener('click', ()=> {
    boxAside.style.right = '0'
    navbar.style.opacity = '.2'
    btnAside.style.zIndex = '0'
})

// Function Close

boxAside.addEventListener('click', ()=> {

    boxAside.style.right = '-100%'
    navbar.style.opacity = '1'
    btnAside.style.zIndex = '600'
})

// SHOW BTN ASIDE

window.onscroll = function() {
    showBtnAside()
}

function showBtnAside() {
    btnAside.style.right = '1rem'
}
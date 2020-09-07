// MENU 2 ASIDE

// Get 'Btn Open'
const btnOpenAside = document.querySelector('#btn-menu-2')

// Get Aside
const boxAside = document.querySelector('.sidebar')

// Get Navbar
const navbar = document.querySelector('.navbox')

// Open Aside
btnOpenAside.addEventListener('click', openAside)

// Function Open Aside
function openAside() {
    boxAside.style.right = '0'
    navbar.style.opacity = '.2'
}

// Function Close

boxAside.addEventListener('click', ()=> {

    boxAside.style.right = '-100%'
    navbar.style.opacity = '1'
})
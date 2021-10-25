addEventListener('DOMContentLoaded', () => {
    const botonMenu = document.querySelector('.botonMenu')
    if (botonMenu) {
        botonMenu.addEventListener('click', () => {
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show')
        })
    }
})
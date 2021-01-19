document.addEventListener('touchstart', (event) => {
    let dropdown = document.querySelector('.dropdown-content');
    if(event.target.className.startsWith('dropdown')) {
        dropdown.style.display = "block"
    } else if(window.getComputedStyle(dropdown, null).display === "block") {
        dropdown.style.display = "none"
    }
})
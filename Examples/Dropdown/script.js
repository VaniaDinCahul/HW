let open = false
const toggleDropdown = () => {
    open = !open
    if (open) {
        document
            .querySelector('.dropdown > ul')
            .style
            .display = 'block'
    }
}


    
let dropdown = document.getElementById('dropdown');
dropdown.addEventListener('click', toggleDropdown)
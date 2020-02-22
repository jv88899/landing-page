// global variables
const sections = document.querySelectorAll('section')
const navbarList = document.querySelector('#navbar__list')
const sectionPositions = {}

// build the links for the menu
sections.forEach( (section, index) => {
    // create new li tag
    let newElement = document.createElement('li')

    // add the menu__link class to all elements
    newElement.classList = 'menu__link'
    
    // check if the new element has an index of 0
    // if so, add the 'active' class to that li
    if (index === 0) {
        newElement.classList = 'menu__link active'
    }

    // create the link for each element
    newElement.innerHTML = `
        <a href='#${section.id}'>
            ${section.getAttribute('data-nav')}
        </a>
    `

    // add the new element to the navbar
    navbarList.appendChild(newElement)
})
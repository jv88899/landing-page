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

// get the offsetTop position for each section
// and add them to the sectionPositions object
sections.forEach( section => {
    sectionPositions[section.id] = section.offsetTop
})

// create onscroll function
const onScroll = () => {
    // get the current scroll position
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop

    for (const section in sectionPositions) {
        // check if position of current section is less than or equal
        // to the position of the current scroll position
        if (sectionPositions[section] <= scrolLPosition) {
            // if true, remove the active class from the current element
            document.querySelector('.active').setAttribute('class', 'menu__link')
            // then find the new active link
            // and target the active links parent element (the li)
            // and add the active class
            document.querySelector(`a[href*='#${section}']`)
                .parentElement
                .setAttribute('class', 'menu__link acive')

        }
    }
}
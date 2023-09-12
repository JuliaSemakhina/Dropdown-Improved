const nav = document.querySelector(".primary-navigation");
const  navToggle= document.querySelector(".mobile-nav-toggle");


// Mobile nav Button
navToggle.addEventListener('click', ()=>{
  //if the nav is closed, open it
  const visibility = nav.getAttribute('data-visible');
  if(visibility === 'false'){
    nav.setAttribute('data-visible', true);
    navToggle.setAttribute("aria-expanded", true);

    navToggle.setAttribute('style','background-image: url(./images/icon-close-menu.svg)');
  } else {
    nav.setAttribute('data-visible', false);
    navToggle.setAttribute("aria-expanded", false);

     navToggle.setAttribute('style','background-image: url(./images/icon-menu.svg)');
  }
});

// Dropdown Lists

document.addEventListener("click", e=>{
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return 

    let currentDropdown
    if(isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
        const arrow = currentDropdown.querySelector(".arrow")
        arrow.classList.toggle("opened")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if( dropdown === currentDropdown) return 
        dropdown.classList.remove("active")
        dropdown.querySelector(".arrow").classList.remove("opened")
    })
})
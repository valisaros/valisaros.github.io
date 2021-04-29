
  
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const menuItem = document.querySelectorAll(".navbar-link");
    const nav = document.querySelector('.navbar-links');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        // Set the body position to fixed when burger clicked
        burger.style.position = 'fixed';

        //Burger animation
        burger.classList.toggle('toggle');
    });

    // Add an EventListener to every item/link
    Array.from(menuItem).forEach(item => {
        item.addEventListener("click", function() {
          nav.classList.toggle('nav-active');

          burger.style.position = '';
  
          //Burger animation
          burger.classList.toggle('toggle');
        });
      });

}

navSlide();


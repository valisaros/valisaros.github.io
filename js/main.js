const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;
    const link1 = document.querySelector('.link1');
    const link2 = document.querySelector('.link2');
    const link3 = document.querySelector('.link3');

    burger.addEventListener('click', () => {

        //Toggle Nav
        nav.classList.toggle('nav-active');
        // Set the body position to fixed when burger clicked
        //body.style.position = 'fixed';
        burger.style.position = 'fixed';

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });


        //Burger animation
        burger.classList.toggle('toggle');


        // Disable the fixed position when burger clicked
        // burger.style.position = '';
    });

    link1.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.style.position = '';

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });


        //Burger animation
        burger.classList.toggle('toggle');
    });

    link2.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.style.position = '';

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });


        //Burger animation
        burger.classList.toggle('toggle');
    });


    link3.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        burger.style.position = '';

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });


        //Burger animation
        burger.classList.toggle('toggle');
    });

}

navSlide();
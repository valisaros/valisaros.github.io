const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const body = document.body;

    burger.addEventListener('click', () => {
        
        //Toggle Nav
        nav.classList.toggle('nav-active');
        // Set the body position to fixed when burger clicked
        body.style.position = 'fixed';
        
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
        burger.addEventListener('click', () => {
            body.style.position = '';
        })
    });
}

navSlide();
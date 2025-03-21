document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate, #about-contact');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    elementsToAnimate.forEach(element => observer.observe(element));

    navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate, #about-contact');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    const navLinks = document.querySelectorAll('.navbar-links a');

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    });

    elementsToAnimate.forEach(element => observer.observe(element));

    navbarToggle.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            if (link.hash) {
                event.preventDefault();
                const target = document.querySelector(link.hash);
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
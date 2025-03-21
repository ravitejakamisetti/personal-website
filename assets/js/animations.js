document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate, #about');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    if (elementsToAnimate.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target); // Unobserve only after confirming intersection
                }
            });
        });

        elementsToAnimate.forEach(element => observer.observe(element));
    }

    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
            document.body.classList.toggle('no-scroll', navbarLinks.classList.contains('active'));
        });
    }
});
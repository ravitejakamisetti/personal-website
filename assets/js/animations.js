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
            const isExpanded = navbarLinks.classList.toggle('active');
            navbarToggle.setAttribute('aria-expanded', isExpanded);
            document.body.classList.toggle('no-scroll', isExpanded);
        });
    }
});
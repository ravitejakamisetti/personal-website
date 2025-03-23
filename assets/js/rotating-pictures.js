document.addEventListener('DOMContentLoaded', () => {
    const pictures = document.querySelectorAll('.rotating-pictures img');
    if (pictures.length <= 1) return; // Exit if there are 0 or 1 images

    let currentIndex = 0;

    setInterval(() => {
        if (pictures[currentIndex]) {
            pictures[currentIndex].classList.remove('active');
        }
        currentIndex = (currentIndex + 1) % pictures.length;
        if (pictures[currentIndex]) {
            pictures[currentIndex].classList.add('active');
        }
    }, 3000); // Change picture every 3 seconds
});

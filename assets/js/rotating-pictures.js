document.addEventListener('DOMContentLoaded', () => {
    const pictures = document.querySelectorAll('.rotating-pictures img');
    let currentIndex = 0;

    setInterval(() => {
        pictures[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % pictures.length;
        pictures[currentIndex].classList.add('active');
    }, 3000); // Change picture every 3 seconds
});

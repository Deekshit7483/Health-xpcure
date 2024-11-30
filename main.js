function toggleNav() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

document.addEventListener('mousemove', function(event) {
    const reviewsContainer = document.querySelector('.reviews-container');
    
    // Get the mouse position relative to the window
    const mouseX = event.clientX / window.innerWidth;
    const mouseY = event.clientY / window.innerHeight;
    
    // Calculate the amount to move the container based on mouse position
    const moveX = (mouseX - 0.5) * 100; // 100px shift to the left or right
    const moveY = (mouseY - 0.5) * 50;  // 50px shift up or down

    // Apply the calculated movement to the reviews container
    reviewsContainer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

document.addEventListener("DOMContentLoaded", function () {
    const upGoingElements = document.querySelectorAll('.hba-row.up-going');
    const downGoingElements = document.querySelectorAll('.hba-row.down-going');

    upGoingElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 100); // Stagger the animations
    });

    downGoingElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('animated');
        }, index * 100); // Stagger the animations
    });
});
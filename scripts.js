document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });

        // Hide menu when a link is clicked
        navLinks.querySelectorAll('li a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('show');
            });
        });
    } else {
        console.error('Hamburger or navLinks element not found.');
    }
});
document.addEventListener('mousemove', function(e) {
    const bubble = document.querySelector('.cursor-bubble');
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    // Position the bubble based on the cursor and scroll position
    bubble.style.left = `${e.clientX + scrollX}px`;
    bubble.style.top = `${e.clientY + scrollY}px`;
});

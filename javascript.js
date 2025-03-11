function toggleMenu() {
    let menu = document.querySelector(".hamburger-dropdown");
    let icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("show");
    icon.classList.toggle("active");
}

// Close menu when clicking outside
document.addEventListener("click", function(event) {
    let menu = document.querySelector(".hamburger-dropdown");
    let icon = document.querySelector(".hamburger-icon");
    if (!event.target.closest(".hamburger-menu")) {
        menu.classList.remove("show");
        icon.classList.remove("active");
    }
});

// Custom smooth scroll function
function scrollToFooter() {
    const footer = document.getElementById("footer");
    const startPosition = window.pageYOffset; // Current scroll position
    const targetPosition = footer.offsetTop; // Target scroll position
    const distance = targetPosition - startPosition; // Distance to scroll
    const duration = 800; // Duration of the scroll in milliseconds
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth scrolling
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}
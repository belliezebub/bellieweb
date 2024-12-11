// Function to add active class to navigation link when scrolled to corresponding section
function setActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    
    // Loop through each link
    navLinks.forEach(link => {
        // Get the corresponding section
        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);
        
        // Check if the section is in the viewport
        if (section.getBoundingClientRect().top <= 0 && section.getBoundingClientRect().bottom > 0) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            // Add active class to current link
            link.classList.add('active');
        }
    });
}

// Add event listener for scroll event
window.addEventListener('scroll', setActiveNav);

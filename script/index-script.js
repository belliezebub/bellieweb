document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    var container = document.querySelector('.home-content');

    // Get the h1 element
    var h1 = container.querySelector('h1');

    // Get the h3, p, and button elements
    var h3 = container.querySelector('h3');
    var p = container.querySelector('p');
    var btnGroup = container.querySelector('.btn-group');

    // Function to add 'show' class to elements
    function addShowClass() {
        // Add 'show' class to elements
        h3.classList.add('show');
        p.classList.add('show');
        btnGroup.classList.add('show');
    }

    // Check if the typing animation is already complete
    function checkAnimationComplete() {
        // Check if h1 is fully visible
        if (isElementInViewport(h1)) {
            addShowClass();
        }
    }

    // Check if an element is fully visible in the viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // When the typing animation ends, call the function to add 'show' class
    h1.addEventListener('animationend', function(event) {
        // Check if the animation is the typing animation
        if (event.animationName === 'typing') {
            addShowClass();
        }
    });

    // Call the function to check if the animation is already complete
    checkAnimationComplete();

    // Listen for scroll events to check if the animation is complete
    window.addEventListener('scroll', function() {
        checkAnimationComplete();
    });
});

// Function to show the About section when the link is clicked
document.querySelector('.about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.about-section').style.display = 'block';
    window.scrollTo(0, document.querySelector('#about').offsetTop); // Scroll to the About section
});

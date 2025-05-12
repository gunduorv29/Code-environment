// Get the hamburger and menu elements
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

// Toggle menu visibility on hamburger click
function toggleMenu() {
    navbar.classList.toggle('show');
}

// Add event listener to the hamburger to toggle the menu
hamburger.addEventListener('click', function(event) {
    // Prevent click from propagating to document
    event.stopPropagation();
});

// Close the menu if you click anywhere outside of the hamburger menu
document.addEventListener('click', function(event) {
    // Check if the clicked area is not the hamburger or the menu
    if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
        navbar.classList.remove('show');
    }
});

    // Initialize EmailJS when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS with your PUBLIC KEY (User ID)
    emailjs.init("1QUZtWI53luFkPgzd"); // Replace with your actual public key

    // Get the form
    const contactForm = document.getElementById('contact-form');

    // Listen for form submission
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Send the form data
        emailjs.sendForm('service_nvdt23b', 'template_ixsqscf', this)
            .then(function () {
                alert('✅ Message Sent Successfully!');
                contactForm.reset();
            }, function (error) {
                console.error('❌ Failed:', error);
                alert('❌ Failed to send message. Check console for error.');
            });
    });
});

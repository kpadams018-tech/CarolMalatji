
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });

        // Update active class
        document.querySelectorAll('nav a').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
    });
});

// Simple Form Submission Alert
const contactForm = document.querySelector('.contact-form');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you, Malatji! Your message has been sent successfully.');
        contactForm.reset();
    });
}

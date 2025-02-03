document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Here you would typically send the form data to a server
            // For now, we'll just show a confirmation and reset the form
            alert('Vielen Dank für Ihre Nachricht! Wir melden uns schnellstmöglich bei Ihnen.');
            form.reset();
        } else {
            alert('Bitte füllen Sie alle Felder aus.');
        }
    });

    // Mobile menu toggle (can be added later)
    // Add any additional interactive features here
});
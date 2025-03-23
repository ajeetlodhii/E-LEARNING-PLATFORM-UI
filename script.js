// Wait for the DOM to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1); // Get the section id
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation for the Login form
    const loginForm = document.querySelector('#login form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.querySelector('#username').value;
        const password = document.querySelector('#password').value;

        if (username === '' || password === '') {
            alert('Please fill in both fields');
        } else {
            alert('Login successful');
        }
    });

    // Form validation for the Contact form
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields');
        } else {
            alert('Message sent successfully');
        }
    });

    // Highlight active section in navigation on scroll
    const sections = document.querySelectorAll('div[id]');
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Add event listener for course "Start Learning" buttons
    const startButtons = document.querySelectorAll('.course-card button');
    startButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You have started the course!');
        });
    });

    // Add event listener for course "Enroll Now" buttons
    const enrollButtons = document.querySelectorAll('.course-item button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('You have enrolled in the course!');
        });
    });

});
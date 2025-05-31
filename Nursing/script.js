// Form submission handling
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value;

    // Basic form validation
    if (!name || !email || !phone || !date || !service) {
        alert('Please fill in all required fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Create booking confirmation message
    const confirmationMessage = `
        Thank you for your booking request!
        
        Booking Details:
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Date: ${date}
        Service: ${service}
        ${message ? `Additional Information: ${message}` : ''}
        
        We will contact you shortly to confirm your appointment.
    `;

    // Show confirmation
    alert(confirmationMessage);

    // Reset form
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add loading animation to submit button
const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', function() {
    this.innerHTML = 'Processing...';
    setTimeout(() => {
        this.innerHTML = 'Book Now';
    }, 2000);
});

// Modal handling
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const forgotPasswordModal = document.getElementById('forgotPasswordModal');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const forgotPasswordLink = document.getElementById('forgot-password-link');
const closeBtns = document.querySelectorAll('.close');
const switchFormLinks = document.querySelectorAll('.switch-form');

// Show modal functions
function showModal(modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function hideModal(modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners for buttons
loginBtn.addEventListener('click', () => showModal(loginModal));
registerBtn.addEventListener('click', () => showModal(registerModal));
forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    hideModal(loginModal);
    showModal(forgotPasswordModal);
});

// Close modals when clicking the close button or outside the modal
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        hideModal(loginModal);
        hideModal(registerModal);
        hideModal(forgotPasswordModal);
    });
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) hideModal(loginModal);
    if (e.target === registerModal) hideModal(registerModal);
    if (e.target === forgotPasswordModal) hideModal(forgotPasswordModal);
});

// Switch between forms
switchFormLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        if (target === 'login') {
            hideModal(registerModal);
            hideModal(forgotPasswordModal);
            showModal(loginModal);
        } else if (target === 'register') {
            hideModal(loginModal);
            hideModal(forgotPasswordModal);
            showModal(registerModal);
        }
    });
});

// Login form handling
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically make an API call to your backend
    // For now, we'll just show a success message
    alert('Login successful!');
    hideModal(loginModal);
    this.reset();
});

// Register form handling
document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    // Basic validation
    if (!name || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all fields');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
        alert('Please enter a valid 10-digit phone number');
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Here you would typically make an API call to your backend
    // For now, we'll just show a success message
    alert('Registration successful! Please login.');
    hideModal(registerModal);
    showModal(loginModal);
    this.reset();
});

// Forgot Password form handling
document.getElementById('forgot-password-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('reset-email').value;

    // Basic validation
    if (!email) {
        alert('Please enter your email address');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Here you would typically make an API call to your backend
    // For now, we'll just show a success message
    alert('Password reset link has been sent to your email address.');
    hideModal(forgotPasswordModal);
    showModal(loginModal);
    this.reset();
});

// Mobile menu handling
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
        navLinks.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
}); 
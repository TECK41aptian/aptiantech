// Smooth scrolling for "Shop Now" button
document.querySelector('.btn-primary').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});


// Quick View Modal (basic example)
const addToCart = document.querySelectorAll('.btn-secondary');

addToCart.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        alert("Add to Cart Feature Coming Soon!");
    });
});

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with ${emailInput}!`);
    this.reset();
});

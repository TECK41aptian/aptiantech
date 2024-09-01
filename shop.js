// Product Sorting
document.getElementById('sort').addEventListener('change', function() {
    const sortBy = this.value;
    // Implement sorting logic based on the selected value
    alert(`Sorted by: ${sortBy}`);
});

// Product Search
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(query)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
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

// Pagination (basic example)
const pageLinks = document.querySelectorAll('.page-link');

pageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Navigating to page: ${this.innerText}`);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// const productsSpinner = document.getElementById('product-spinner')

// const fetchProducts = async () => {
//     const res = await fetch('https://fakestoreapi.com/products')
//     const data = await res.json()

//     productsSpinner.style.display = 'none'
//     data.forEach(product => createProductDiv(product));
// }
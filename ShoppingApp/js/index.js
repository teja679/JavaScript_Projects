let globalProducts = []
const productSpinner = document.getElementById('products-spinner')

const fetchProducts  =  async () => {
    // const res = await fetch('https://fakestoreapi.com/products')  
    const res = await fetch('https://fakestoreapi.com/products') 
    const data = await res.json()
    // console.log(data)
    globalProducts = data
    
    productSpinner.style.display = 'none'
    data.forEach(product => createProductDiv(product))    
    // console.log(product)
    // data.forEach(product => console.log(product))
}       

/*
  const fetchProducts = () => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(err => conswole.log(err))
  }

  const fetchProducts = async () => {
    const res = await fetch(https://fakestoreapi.com/products')
    const data = res.json()
  }
*/

mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*
  https://fakestoreapi.com/products'

  const fetchData = () => {

    fetch(https://fakestoreapi.com/products').
    .then(res => res.json())
    .then(data => data.forEach(pro => pro))
    .catch(err => console.log(err))

    const fetchData = async () => {
      const res = await fetch('dh);
    }
  }
    */
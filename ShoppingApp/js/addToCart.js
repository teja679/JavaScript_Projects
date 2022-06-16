const cartItemsLength = document.getElementById('cart-items-length')
let cartItemIds = []

const addToCart = (id) =>  {
    // console.log(id)
    cartItemIds.push(id)
    cartItemsLength.innerText = cartItemIds.length
    // console.log(cartItemIds.length)
    let cartItem = globalProducts.find(product => product.id == id)
    // console.log(cartItem)
    createItemsInCart(cartItem)
}   


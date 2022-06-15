const cartItemsLength  =  document.getElementById('cart-items-length')
const cartItemsIds = []

const addToCart = (id) =>  {
    cartItemsIds.push(id)
    cartItemsLength.innerText = cartItemsIds.length
    let cartItem = globalProducts.find(product => product.id = id)
    createItemsInCart(cartItem)
}
const cartItemsLength  =  document.getElementById('cart-items-length')
let cartItemsIds = []

const addToCart = (id) =>  {
    // console.log(id)
    cartItemsIds.push(id)
    cartItemsLength.innerText = cartItemsIds.length
    // console.log(cartItemsIds.length)
    let cartItem = globalProducts.find(product => product.id = id)
    // console.log(cartItem.id)
    createItemsInCart(cartItem.id)
}   
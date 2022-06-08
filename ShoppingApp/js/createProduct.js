const productsParentDiv = document.getElementById('products')

const createProductDiv = () => {
    const colDiv = document.createElement('div')
    const productDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productBody = document.createElement('div')
    const productHeader = document.createElement('div')
    const productTitle = document.createElement('h6')
    const productPrice = document.createElement('h5')
    const ratingStar1 = document.createElement('span')
    const ratingStar2 = document.createElement('span')
    const ratingStar3 = document.createElement('span')
    const ratingStar4 = document.createElement('span')
    const ratingStar5 = document.createElement('span')
    const ratingCount = document.createElement('span')
    const productDesc = document.createElement('p')
    const cardButtonOuter = document.createElement('div')
    const addToCartButton = document.createElement('a')
    const buyNowButton = document.createElement('a')

    colDiv.classlist = 'col-md-4'
    productDiv.classlist = 'card product'
    productImg.classlist = 'card-img-top'
    productBody.classlist = 'card-body'
    productHeader.classlist = 'product-header'
    productTitle.classlist = 'card-title'
    productPrice.classlist = 'card-title product-price'
    productDesc.classlist = 'card-text'
    ratingStar1.classlist = 'fa fa-star checked'
    ratingStar3.classlist = 'fa fa-star checked'
    ratingStar2.classlist = 'fa fa-star checked'
    ratingStar4.classlist = 'fa fa-star checked'
    ratingStar5.classlist = 'fa fa-star checked'
    ratingCount.classlist = 'rating-count'
    productDesc.classlist = 'card-text'
    cardButtonOuter.classlist = 'btn-outer'
    addToCartButton.classlist = 'btn btn-primary add-to-cart-btn'
    buyNowButton.classlist = 'btn btn-primary buy-btn'

    colDiv.id = `product-${product.id}`

    productTitle.innerText = `${product.title.slice(0, 20)}...`
    productPrice.innerText = `${product.price}`
    productDesc.innerText = `${product.description.slice(0, 50)}...`
    ratingCount.innerText = `(${product.rating.count})`
    addToCartButton.innerHTML = '<i class="fa fa-cart-plus" aria-hidden="true"></i>'
    buyNowButton.innerText = 'Buy now'

    productImg.src = product.image
    productImg.alt = 'product-img'

    colDiv.appendChild(productDiv)
    productDiv.appendChild(productImg)
    productDiv.appendChild(productBody)
    productBody.appendChild(productHeader)
    productHeader.appendChild(productTitle)
    productHeader.appendChild(productPrice)
    productBody.appendChild(ratingStar1)
    productBody.appendChild(ratingStar2)
    productBody.appendChild(ratingStar3)
    productBody.appendChild(ratingStar4)
    productBody.appendChild(ratingStar5)
    productBody.appendChild(ratingCount)
    productBody.appendChild(cardButtonOuter)
    cardButtonOuter.appendChild(addToCartButton)
    cardButtonOuter.appendChild(buyNowButton)

    const ratingStars = Math.ceil(product.rating.rate)
    ratingStars >= 1 && productBody.appendChild(ratingStar1)
    ratingStars >= 2 && productBody.appendChild(ratingStar2)
    ratingStars >= 3 && productBody.appendChild(ratingStar3)
    ratingStars >= 4 && productBody.appendChild(ratingStar4)
    ratingStars >= 5 && productBody.appendChild(ratingStar5)
    productBody.appendChild(ratingCount)

    productsParentDiv.appendChild(colDiv)

    addToCartButton.addEventListener('click', function () {
        addToCart(product.id);
        this.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    })
}



{/* 
    <div class="col-md-4">
        <div class="card product">
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="product-header">
                    <h5 class="card-title">Card title</h5>
                    <h5 class="card-title">$300</h5>
                </div>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span> (102)
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div class="btn-outer">
                  <a href="#" class="btn btn-primary">Add to cart</a>
                  <a href="#" class="btn btn-primary">Buy now</a>
              </div>
            </div>
          </div>
        </div>
</div>
</div> */}
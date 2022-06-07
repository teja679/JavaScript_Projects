
const createProductDiv = () => {
    const colDiv = document.createElement('div')
    const productDiv = document.createElement('div')
    const productImg = document.createElement('img')
    const productBody = document.createElement('div')
    const productHeader = document.createElement('div')
    const productTitle = document.createElement('H5')
    const productPrice = document.createElement('H4')
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
}

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

colDiv.classlist('col-md-4')
productDiv.classlist('card product')
productBody.classlist('card-body')
productHeader.classlist('product-header')
productTitle.classlist('card-title')
productPrice.classlist('card-title')
ratingStar1.classlist('fa fa-star')
ratingStar3.classlist('fa fa-star')
ratingStar2.classlist('fa fa-star')
ratingStar4.classlist('fa fa-star')
ratingStar5.classlist('fa fa-star')
ratingCount.classlist('fa fa-star')
productDesc.classlist('')
cardButtonOuter.classlist('btn-outer')
addToCartButton.classlist('btn btn-primary')
buyNowButton.classlist('btn btn-primary')


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
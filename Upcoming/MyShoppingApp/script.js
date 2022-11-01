const fun = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    console.log(data)
}

const homePageDiv = document.getElementsByClassName('home-page')
const cardDiv = document.createElement('div')
const cardImgDiv = document.createElement('img')
const cardBodyDiv = document.createElement('div')
const cardTitleH5 = document.createElement('h5')
const cardTextPara = document.createElement('p')
const cardBtn = document.createElement('a')

homePageDiv
/*<div class="card" style="width: 18rem;">
		<img src="..." class="card-img-top" alt="...">
		<div class="card-body">
		  <h5 class="card-title">Card title</h5>
		  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
		  <a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	  </div>*/

/*  globalProducts = data
    
    productSpinner.style.display = 'none'
    data.forEach(product => createProductDiv(product)) */
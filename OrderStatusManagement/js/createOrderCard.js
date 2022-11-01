let parentDiv = document.getElementById('parent-div')

const createNewOrderColumn = (orderIdInput) => {
	let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardBodyDiv = document.createElement('div')
	let cardTitleH5 = document.createElement('h5')
	let cardTextP = document.createElement('p')
	let cardOrderStatusSpan = document.createElement('span')
	let cardButtonA = document.createElement('a')
	let cardFooterDiv = document.createElement('div')

	let cardHeaderDivText = document.createTextNode('Order ID: ' + orderIdInput)
	let cardTitleH5Text = document.createTextNode('Bill Amount: $152')
	let cardTextPText = document.createTextNode('Corn Delight Large Size Pizza - 2 Nos')
	let cardButtonAText = document.createTextNode('Cancel Order')
	let cardOrderStatusText = document.createTextNode('PIZZA BAKED')

	parentDiv.appendChild(colDiv)
	colDiv.appendChild(cardDiv)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextP)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)
	cardBodyDiv.appendChild(cardOrderStatusSpan)
	cardFooterDiv.appendChild(cardButtonA)
	cardTitleH5.appendChild(cardTitleH5Text)

	cardTextP.appendChild(cardTextPText)
	cardButtonA.appendChild(cardButtonAText)
	cardHeaderDiv.appendChild(cardHeaderDivText)
	cardOrderStatusSpan.appendChild(cardOrderStatusText)

	colDiv.classList = 'col-md-4 col-xs-12 order-block'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardFooterDiv.classList = 'card-footer'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	cardButtonA.classList = 'btn btn-danger cancel-button'
	cardOrderStatusSpan.classList = 'badge rounded-pill bg-success order-status'

	cardOrderStatusSpan.id = orderIdInput

	cardButtonA.addEventListener('click', () => {
		// parentDiv.removeChild(colDiv)
		colDiv.style.display = 'none'
	})
}

const todoBlock = document.getElementById('to-do-block')

let idCount = 1

const toDoDragStart = (event) => {
	let toDoCardIdBeingDragged =  event.target.id
	event.dataTransfer.setData('ToDoCard', toDoCardIdBeingDragged) 
}

const allowDrop = (event) => {
	event.preventDefault()
}
//ondragover="allowDrop(event)" ondrop="toDoDrop(event)"
const toDoDrop = (event) => {
	let toDoCardIdBeingDragged = event.dataTransfer.getData('ToDoCard')
	let toDoCardBeingDropped = document.getElementById(toDoCardIdBeingDragged)
	let parentElement = event.target
	parentElement.appendChild(toDoCardBeingDropped)
}

const createToDoDiv = (todoInput, todoPriorityInput, todoDeadline) => {
    const todoCardDiv = document.createElement('div')
	const cardHeaderDiv = document.createElement('div')
	const priorityDisplaySpan = document.createElement('span')
	const deadlineDisplaySpan = document.createElement('span')
	const cardBodyDiv = document.createElement('div')
	const cardTitleH5 = document.createElement('h5')
	const deleteButton = document.createElement('a')

	todoCardDiv.classList = 'card to-do-card'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardTitleH5.classList = 'card-title'
	deleteButton.classList = 'btn btn-sm btn-danger'

	todoCardDiv.id = `to-do-card-${idCount}`

	priorityDisplaySpan.innerText = `${todoPriorityInput} Priority`
	cardTitleH5.innerText = todoInput
	deadlineDisplaySpan.innerText = todoDeadline
	deleteButton.innerText = 'Delete'

	switch(todoPriorityInput) {
		case 'High':
			priorityDisplaySpan.classList = 'badge rounded-pill bg-danger'
			break;
		case 'Medium':
			priorityDisplaySpan.classList = 'badge rounded-pill bg-warning text-dark'
			break;
		case 'Low':
			priorityDisplaySpan.classList = 'badge rounded-pill bg-info text-dark'
			break;
	}

	todoCardDiv.draggable = "true"

	todoCardDiv.addEventListener('dragstart',toDoDragStart)

    deleteButton.addEventListener('click', () => todoCardDiv.style.display = 'none')
    
	todoCardDiv.appendChild(cardHeaderDiv)
	cardHeaderDiv.appendChild(priorityDisplaySpan)
	cardHeaderDiv.appendChild(deadlineDisplaySpan)
	todoCardDiv.appendChild(cardBodyDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(deleteButton)

	todoBlock.appendChild(todoCardDiv)

	
	idCount++
}

// const createToDoDiv = (toDoInput, toDoPriorityInput, toDoDeadline) => {
// 	const toDoCardDiv = document.createElement('div')
// 	const cardHeaderDiv = document.createElement('div')
// 	const priorityDisplaySpan = document.createElement('span')
// 	const deadlineDisplaySpan = document.createElement('span')
// 	const cardBodyDiv = document.createElement('div')
// 	const cardTitleH5 = document.createElement('h5')
// 	const deleteButton = document.createElement('a')

// 	toDoCardDiv.classList = 'card to-do-card'
// 	cardHeaderDiv.classList = 'card-header'
// 	cardBodyDiv.classList = 'card-body'
// 	cardTitleH5.classList = 'card-title'
// 	deleteButton.classList = 'btn btn-sm btn-danger'

// 	toDoCardDiv.id = `to-do-card-${idCount}`

// 	priorityDisplaySpan.innerText = `${toDoPriorityInput} Priority`
// 	cardTitleH5.innerText = toDoInput
// 	deadlineDisplaySpan.innerText = toDoDeadline
// 	deleteButton.innerText = 'Delete'

// 	switch(toDoPriorityInput) {
// 		case 'High':
// 			priorityDisplaySpan.classList = 'badge rounded-pill bg-danger'
// 			break;
// 		case 'Medium':
// 			priorityDisplaySpan.classList = 'badge rounded-pill bg-warning text-dark'
// 			break;
// 		case 'Low':
// 			priorityDisplaySpan.classList = 'badge rounded-pill bg-info text-dark'
// 			break;
// 	}

// 	toDoCardDiv.draggable = "true"
// 	toDoCardDiv.addEventListener('dragstart', toDoDragStart)
// 	deleteButton.addEventListener('click', () => toDoCardDiv.style.display = 'none')

// 	toDoCardDiv.appendChild(cardHeaderDiv)
// 	cardHeaderDiv.appendChild(priorityDisplaySpan)
// 	cardHeaderDiv.appendChild(deadlineDisplaySpan)
// 	toDoCardDiv.appendChild(cardBodyDiv)
// 	cardBodyDiv.appendChild(cardTitleH5)
// 	cardBodyDiv.appendChild(deleteButton)

// 	toDoBlock.appendChild(toDoCardDiv)

// 	idCount++
// }
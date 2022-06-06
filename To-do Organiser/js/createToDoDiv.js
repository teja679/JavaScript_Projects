const todoBlock = document.getElementById('to-do-block')

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

	// todoCardDiv.id = `to-do-card-${idCount}`

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

    todoCardDiv.appendChild(cardHeaderDiv)
	cardHeaderDiv.appendChild(priorityDisplaySpan)
	cardHeaderDiv.appendChild(deadlineDisplaySpan)
	todoCardDiv.appendChild(cardBodyDiv)
	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(deleteButton)

	todoBlock.appendChild(todoCardDiv)

    deleteButton.addEventListener('click', () => {
		// parentDiv.removeChild(colDiv)
		todoCardDiv.style.display = 'none'
	})
}
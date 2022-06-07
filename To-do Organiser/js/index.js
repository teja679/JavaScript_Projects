
const createToDo = () => {
    const todoInput = document.getElementById('todo-input').value
    const todoPriorityInput = document.getElementById('todo-priority-input').value
    const todoDeadline = new Date(document.getElementById('todo-deadline').value).toLocaleDateString("en-us",
    {
        year: 'numeric',
        month : 'long',
        day : 'numeric',
        hour : 'numeric',
        minute : 'numeric'
    })
    createToDoDiv(todoInput, todoPriorityInput, todoDeadline)
}


    

/* Draggable Elements --
    [draggable = "true"]
    1. ondragstart
    2. ondrag

    Parent Elemets (Where you have to drop the draggble element)
    1. ondragover
    2. ondrop
*/

// draggable="true" ondragstart="toDoDragStart(event)"
// ondragover="allowdrop()"
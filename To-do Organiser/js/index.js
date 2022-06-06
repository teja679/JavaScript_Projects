
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
    console.log(todoInput)
    console.log(todoPriorityInput)
    console.log(todoDeadline)
    if(todoInput === '' || todoDeadline.length < 20)
        alert('Enter valid details')
    else
        createToDoDiv(todoInput, todoPriorityInput, todoDeadline)
}

    const abc = () => {
        console.log("abc")
    }
    const abc2 = () => {
        console.log("abc2")
    }

    const allowdrop = (event) => {
        // event.preventDefault()
        console.log("logged")
    }
/* Draggable Elements --
    [draggable = "true"]
    1. ondragstart
    2. ondrag

    Parent Elemets (Where you have to drop the draggble element)
    1. ondragover
    2. ondrop
*/

// draggable="true" ondragstart="abc()" ondrag="abc2()"
// ondragover="allowdrop()"
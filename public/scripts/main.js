// Function to add todo
async function addTodo(name, todo) {
  // Send POST request
  const response = await fetch('/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, todo })
  });
  return response.json();
}

// Function to get todos for user
async function getTodos(name) {
  try {
    // Send POST request
    const response = await fetch(`/todos/${name}`);
    // Parse the response
    return await response.json();
  } catch(error) {
    console.error(`Could not get todos for user ${name}`, error); 
    return null; 
  }
}

async function deleteUser(user) {
  // Send DELETE request
  const response = await fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user })
  });
  return response.json();
}

// Function to delete a todo from a user
async function deleteTodo(name, todo) {
  // Delete todo
  await fetch('/update', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, todo })
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(`Successfully deleted todo ${todo} of user ${name}`, data.body);
  }).catch((error) => {
    console.error(`Error occurred while attempting to delete ${todo} of user ${name}`, error);
  })
}

// Add new todo when form is submitted
document.getElementById('todoForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  // Get form data
  const user = document.getElementById('userInput').value;
  const todo = document.getElementById('todoInput').value;
  // Check form data
  if (!user || !todo) {
    console.error("Could not add todo"); 
    return; 
  }
  // Send POST request
  const response = await addTodo(user, todo); 
  const message = response; 
  console.log("Server responded with: ", message)
  document.getElementById("status").innerText = message; 
});

// Search for user when search form is submitted
document.getElementById('searchForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  // Get form data
  const name = document.getElementById('searchInput').value;
  // Check form data
  if (!name) {
    console.error("Could not get todos"); 
    return; 
  }
  // Fetch todos for user
  const response = await getTodos(name); 
  // Check response
  if (!response || !response.todos) {
    console.error("Could not get todos"); 
    return; 
  }
  // Update todos list 
  const todos = response.todos; 
  displayTodos(name, todos); 
}); 

// Delete user if delete button is pressed
document.getElementById("deleteUser").addEventListener("click", async () => {
  // Get user 
  const name = document.getElementById('searchInput').value;
  // Delete user
  await fetch('/delete', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name })
  }).then((response) => {
    console.log(response)
    return response.json();
  }).then((data) => {
    console.log(`Successfully deleted user ${user}`, data.body);
  }).catch((error) => {
    console.error(`Error occurred while attempting to delete user ${user}`, error);
  })
}); 

// Function to display todos on the page
function displayTodos(name, todos) {
  // Clear ToDo list
  console.log("Clearing list")
  const todoList = document.getElementById("todoList"); 
  todoList.innerHTML = ""; 
  // Add each ToDo to the list
  todos.forEach(todo => {
    // Create new list item
    const listItem = document.createElement('li');
    listItem.textContent = `${todo.todo}`;
    // Add delete button
    const deleteLink = document.createElement("a");
    deleteLink.textContent = "Delete";
    deleteLink.href = "#";
    deleteLink.classList.add("delete-task");
    // Delete ToDo if the delete button is clicked
    deleteLink.addEventListener("click", async () => {
      // Delete ToDo
      await deleteTodo(name, todo.todo)
      // Fetch updated todos for user
      console.log("Fetching remaining todos...")
      const response = await getTodos(name); 
      // Check response
      if (!response || !response.todos) {
        console.error("Could not get todos"); 
        return; 
      }
      // Update todos list 
      console.log(`Updating todos...`)
      const todos = response.todos; 
      displayTodos(name, todos); 
      
    }); 
    // Add delete button to the list item
    listItem.appendChild(deleteLink); 
    // Add item to the list
    todoList.appendChild(listItem);
  }); 
}
function toggleMenu() {
  var menu = document.getElementById("pgMenu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('item');
const groceryList = document.getElementById('groceryList');

// Add event listener for the "Add Item" button
addButton.addEventListener('click', function() {
    const newItem = itemInput.value;

    // Only add item if input is not empty
    if (newItem.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;

        // Create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.style.marginLeft = '10px'; // Add spacing between the item and the button

        // Add an event listener to delete the item when the button is clicked
        deleteButton.addEventListener('click', function() {
            groceryList.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);

        // Append the list item to the grocery list
        groceryList.appendChild(listItem);

        // Clear the input field
        itemInput.value = '';
    }
});

// Add event listener to listen for "Enter" key press
itemInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addButton.click();
    }
});


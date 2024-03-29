// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuElement = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    Object.entries(menu).forEach(([category, items]) => {
        const categoryHeading = document.createElement("h2");
        categoryHeading.textContent = category;

        const itemList = document.createElement("ul");
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            itemList.appendChild(listItem);

           listItem.addEventListener("click", () => {
                addToOrder(item);
            }); 
        });

        menuElement.appendChild(categoryHeading);
        menuElement.appendChild(itemList);
    });
}

// Call the function to display the menu items
displayMenuItems(menu);


        // Create an element to represent the category



        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name



            

// Callback function for adding an item to the order
   


    function addToOrder(itemName) {            

    // Get the order items list and the order total element from the HTML

    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");


    // Create a list item for the order

    const listItem = document.createElement("li");  
    
    // Set the text content of the list item to the item name

    listItem.textContent = itemName;

    // Append the list item to the order items list

    orderItemsList.appendChild(listItem);

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);


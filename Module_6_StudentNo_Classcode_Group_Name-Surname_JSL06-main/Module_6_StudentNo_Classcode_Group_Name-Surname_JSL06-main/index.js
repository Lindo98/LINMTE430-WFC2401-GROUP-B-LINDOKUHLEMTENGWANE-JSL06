// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"],
    Drinks: ["Long Island", "Margarita", "Strawberry Daiquiri"]
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

    // I Added an event listener to remove the item when clicked
    listItem.addEventListener("click", () => {
        orderItemsList.removeChild(listItem);   // this removes the clicked item from the cart
        updateTotal();    //This is to update the total price after removing the item
    });

    // Calculate and update the total price
    const itemPrice = calculateItemPrice(itemName);
    const currentTotal = parseFloat(orderTotalElement.textContent);
    const newTotal = currentTotal + itemPrice; // Update the calculation here

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = newTotal.toFixed(2); // Update the order total text content
}

// Function to calculate the price of an item
function calculateItemPrice(itemName) {
    const itemPriceMap = {
        "Garlic Bread": 22,
        "Bruschetta": 20,
        "Margherita Pizza": 105,
        "Spaghetti Carbonara": 150,
        "Tiramisu": 65,
        "Cheesecake": 80,
        "Long Island": 100,
        "Margarita": 75,
        "Strawberry Daiquiri": 70,

    };

    return itemPriceMap[itemName] || 0;
}

// Function to update the total price after removing an item
function updateTotal() {
    const orderItemsList = document.getElementById("order-items");
    const orderTotalElement = document.getElementById("order-total");

    let newTotal = 0;
    orderItemsList.childNodes.forEach(item => {
        const itemName = item.textContent;
        newTotal += calculateItemPrice(itemName);
    });

    orderTotalElement.textContent = newTotal.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

window.onload = function() {
    // Your code that depends on the full page load
};



// Get the dropdown and all item sections
const categorySelect = document.getElementById('category-select');
const itemSections = document.querySelectorAll('.item-section');

// Function to display the selected category's section
function showSelectedCategory() {
    const selectedCategory = categorySelect.value;

    // Hide all item sections first
    itemSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected category's section
    const selectedSection = document.getElementById(selectedCategory + '-section');
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Add event listener for when the user selects a category
categorySelect.addEventListener('change', showSelectedCategory);
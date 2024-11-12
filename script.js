window.onload = function() {
    // Your code that depends on the full page load
};



// Function to show and hide item sections based on dropdown selection
function showCategory(category) {
    // Hide all item sections
    const sections = document.querySelectorAll('.item-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected category if it's not empty
    if (category) {
        const selectedCategory = document.getElementById(category);
        if (selectedCategory) {
            selectedCategory.style.display = 'block';
        }
    }
}

// Optionally, show a default category on page load
window.onload = function() {
    showCategory('plate');  // Show 'Plate' items by default
};
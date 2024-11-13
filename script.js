document.addEventListener('DOMContentLoaded', function () {
    // Get the select element and all item sections
    const categorySelect = document.getElementById('category-select');
    const sections = document.querySelectorAll('.item-section');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Add an event listener for when the user selects a category
    categorySelect.addEventListener('change', function() {
        // Hide all sections before showing the selected one
        hideAllSections();
        
        // Get the value of the selected category
        const selectedCategory = categorySelect.value;

        // Show the section that matches the selected category
        if (selectedCategory !== 'blank') {
            const selectedSection = document.getElementById(`${selectedCategory}-section`);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }
        }
    });

    // Initially hide all sections (optional, in case there's a default selection)
    hideAllSections();
});
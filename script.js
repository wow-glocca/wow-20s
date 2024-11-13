window.onload = function() {
    // Your code that depends on the full page load
};



function showSlots(selectedType) {
    // Hide all sections initially
    const allSections = document.querySelectorAll('.slot-section');
    allSections.forEach(section => section.style.display = 'none');

    // Show the relevant section based on the selected value
    if (selectedType === "") {
        return;  // Do nothing if no option is selected
    }

    // Armor Types (Cloth, Leather, etc.)
    const armorTypes = ['cloth', 'leather', 'mail', 'plate'];
    if (armorTypes.includes(selectedType)) {
        document.getElementById(selectedType + "-section").style.display = "block";
    }

    // Non-multi-level items (Cloaks, Necks, Rings, etc.)
    const nonArmorTypes = ['cloak', 'neck', 'ring', 'trinket', '2hmweapon', '1hmweapon', '2hcweapon', '1hcweapon', 'ohweapon'];
    if (nonArmorTypes.includes(selectedType)) {
        document.getElementById(selectedType + "-section").style.display = "block";
    }
}
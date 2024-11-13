function showSlots(selectedType) {
    // Hide all sections initially
    const allSections = document.querySelectorAll('.slot-section');
    allSections.forEach(section => section.style.display = 'none');

    // If no selection, do nothing
    if (selectedType === "") {
        return;
    }

    // Show the selected section based on the dropdown value
    const armorTypes = ['cloth', 'leather', 'mail', 'plate'];
    if (armorTypes.includes(selectedType)) {
        document.getElementById(selectedType + "-section").style.display = "block";
    }

    // Non-armor categories (Cloaks, Necks, Rings, etc.)
    const nonArmorTypes = ['cloak', 'neck', 'ring', 'trinket', '2hmweapon', '1hmweapon', '2hcweapon', '1hcweapon', 'ohweapon'];
    if (nonArmorTypes.includes(selectedType)) {
        document.getElementById(selectedType + "-section").style.display = "block";
    }
}
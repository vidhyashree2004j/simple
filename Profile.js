// JavaScript to enable editing of profile fields

document.addEventListener("DOMContentLoaded", function() {
    const editIcon = document.getElementById("edit-icon");
    const saveButton = document.getElementById("save-button");
    const cancelButton = document.getElementById("cancel-button");
    const profileForm = document.getElementById("profile-form");
    const inputs = profileForm.querySelectorAll("input");

    editIcon.addEventListener("click", function() {
        // Enable input fields
        inputs.forEach(input => input.removeAttribute("readonly"));

        // Show save and cancel buttons
        saveButton.style.display = "block";
        cancelButton.style.display = "block";
    });

    cancelButton.addEventListener("click", function() {
        // Revert changes and disable input fields
        profileForm.reset();
        inputs.forEach(input => input.setAttribute("readonly", true));

        // Hide save and cancel buttons
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
    });

    saveButton.addEventListener("click", function() {
        // Save changes (you can add your save logic here)

        // Disable input fields
        inputs.forEach(input => input.setAttribute("readonly", true));

        // Hide save and cancel buttons
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
    });
});
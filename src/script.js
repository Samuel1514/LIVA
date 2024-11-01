


// Function to handle choosing a plan
function choosePlan(planName, planPrice) {
    // Store plan details in local storage
    localStorage.setItem('selectedPlan', JSON.stringify({ name: planName, price: planPrice }));
    
    // Redirect to the purchase details page
    window.location.href = 'purchase-details.html';
}


// script.js

document.addEventListener("DOMContentLoaded", function () {
    const loginToggle = document.getElementById("login-toggle");
    const loginDropdown = document.getElementById("login-dropdown");

    // Toggle dropdown visibility on login link click
    loginToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Toggle the dropdown menu's visibility
        if (loginDropdown.style.display === "none" || loginDropdown.style.display === "") {
            loginDropdown.style.display = "block";
        } else {
            loginDropdown.style.display = "none";
        }
    });
});




// Toggle Dropdown Function
function toggleDropdown() {
    const dropdown = document.getElementById("login-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Hide dropdown if clicked outside
document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("login-dropdown");
    const toggle = document.getElementById("login-toggle");
    if (!toggle.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

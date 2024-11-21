function showFeature(feature) {
    const featureTitle = document.getElementById('featureTitle');
    const featureDescription = document.getElementById('featureDescription');

    if (feature === 'manageUsers') {
        featureTitle.innerText = 'Manage Users';
        featureDescription.innerHTML = `
            <div class="admin-section">
                <p>View, edit, and delete user accounts.</p>
                <button onclick="performTask('Add User')">Add User</button>
                <button onclick="performTask('Edit User')">Edit User</button>
                <button onclick="performTask('Delete User')">Delete User</button>
            </div>
        `;
        
    } else if (feature === 'viewReports') {
        featureTitle.innerText = 'View Reports';
        featureDescription.innerHTML = `
            <div class="admin-section">
                <p>Generate and view usage and system reports.</p>
                <button onclick="performTask('Generate Report')">Generate Report</button>
            </div>
        `;
    } else if (feature === 'manageContent') {
        featureTitle.innerText = 'Manage Content';
        featureDescription.innerHTML = `
            <div class="admin-section">
                <p>Add, edit, or remove content for the users.</p>
                <button onclick="performTask('Add Content')">Add Content</button>
                <button onclick="performTask('Edit Content')">Edit Content</button>
                <button onclick="performTask('Delete Content')">Delete Content</button>
            </div>
        `;
    } else if (feature === 'settings') {
        featureTitle.innerText = 'Settings';
        featureDescription.innerHTML = `
            <div class="admin-section">
                <p>Configure system and account settings.</p>
                <button onclick="performTask('Change Password')">Change Password</button>
                <button onclick="performTask('Update Preferences')">Update Preferences</button>
            </div>
        `;
    } else {
        featureTitle.innerText = 'Feature Coming Soon';
        featureDescription.innerHTML = `<p>This feature is under development. Please check back later!</p>`;
    }
}

function performTask(task) {
    alert(`${task} task is selected.`);
}

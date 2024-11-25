// Simulating real-time data fetching
async function fetchDashboardData() {
    try {
        // Simulate a fetch request to your backend API
        const response = await fetch('/api/dashboard'); // Replace with your API endpoint
        if (!response.ok) throw new Error('Failed to fetch dashboard data.');

        const data = await response.json();

        // Process and display data
        updateDashboard(data);
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        updateDashboard(null, error.message);
    }
}

// Update Dashboard UI
function updateDashboard(data, error = null) {
    const featureDescription = document.getElementById('adminFeatureDescription');

    if (error) {
        featureDescription.innerHTML = `
            <p><strong>Error:</strong> ${error}</p>
            <p>Please check your internet connection or try again later.</p>`;
        return;
    }

    featureDescription.innerHTML = `
        <h3>Activity Summary</h3>
        <ul>
            <li><strong>Meals Completed:</strong> ${data.mealsCompleted || 0}</li>
            <li><strong>Medicine Intake:</strong> ${data.medicineIntake || 0}</li>
            <li><strong>Exercise Logged:</strong> ${data.exerciseLogged || 0} sessions</li>
            <li><strong>Mood Trends:</strong> ${data.moodTrends || 'No data'}</li>
        </ul>
        <p>Last updated: ${new Date(data.lastUpdated).toLocaleString() || 'N/A'}</p>`;
}

// Handle the dashboard feature selection
function showAdminFeature(feature) {
    const featureTitle = document.getElementById('adminFeatureTitle');
    const featureDescription = document.getElementById('adminFeatureDescription');

    featureTitle.textContent = "Loading...";
    featureDescription.textContent = "Please wait while the data is being fetched...";

    if (feature === 'dashboard') {
        featureTitle.textContent = "Dashboard";
        fetchDashboardData(); // Fetch real-time data
    } else {
        // Other features (same as before)
        const features = {
            mealMedicine: {
                title: "Meal & Medicine Management",
                description: "Manage and track meal reminders and medicine schedules. Add or modify meal times and medicine details."
            },
            healthInsights: {
                title: "Health Insights",
                description: "View weekly and monthly reports on health patterns, including sleep, exercise, and mood."
            },
            notifications: {
                title: "Notifications",
                description: "Get alerts for missed activities or emergencies. Stay informed about your parent's well-being."
            },
            communicationHub: {
                title: "Communication Hub",
                description: "Send messages, interact with the avatar, or initiate video calls with your parent."
            },
            emergencyActions: {
                title: "Emergency Actions",
                description: "Monitor SOS alerts and take quick actions in case of emergencies."
            },
            communitySupport: {
                title: "Community Support",
                description: "Access resources, join support groups, and connect with other caregivers."
            },
            feedback: {
                title: "Feedback & Suggestions",
                description: "Provide feedback on the system or suggest new features to improve the experience."
            }
        };

        if (features[feature]) {
            featureTitle.textContent = features[feature].title;
            featureDescription.innerHTML = `<p>${features[feature].description}</p>`;
        } else {
            featureTitle.textContent = "Feature Not Found";
            featureDescription.innerHTML = `<p>The selected feature is currently unavailable.</p>`;
        }
    }
}

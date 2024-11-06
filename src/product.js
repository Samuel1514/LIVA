let mealCount = 3;

function showFeature(feature) {
    const featureTitle = document.getElementById('featureTitle');
    const featureDescription = document.getElementById('featureDescription');
    const avatarContainer = document.getElementById('avatarContainer');
    const video = document.getElementById('introVideo');

    // Clear the avatar container
    if (avatarContainer) avatarContainer.remove();

    if (feature === 'avatarInteraction') {
        featureTitle.innerText = 'Chat with Liva';
        featureDescription.innerHTML = `
            <p>Liva, your caring digital companion, is here to listen, help, and keep you company just like family. 
            Imagine having a friendly conversation with someone who knows and cares about you.</p>
            <div class="avatar-container" id="avatarContainer">
                <div class="avatar-display"></div>
                <p>What would you like to share or ask today? Just type below, and I'll be here to chat!</p>
                <div class="typing-bar">
                    <input type="text" placeholder="Type your message here..." id="userMessage">
                    <button onclick="sendMessage()">Send</button>
                </div>
            </div>
        `;
        document.getElementById('avatarContainer').style.display = 'block';
    } else if (feature === 'Reminder') {
        featureTitle.innerText = ' Reminder';
        featureDescription.innerHTML = `
            <p>Hi there! Let's make sure you're getting the nourishment you need. I’ll help you remember your meals throughout the day.</p>
            <div id="mealContainer">
                <div class="meal" id="meal1">
                    <h3>Meal 1</h3>
                    <label>Time: <input type="time"></label><br>
                    <label>Additional Notes:</label><br>
                    <textarea placeholder="e.g., light breakfast, fruits"></textarea>
                </div>
                <div class="meal" id="meal2">
                    <h3>Meal 2</h3>
                    <label>Time: <input type="time"></label><br>
                    <label>Additional Notes:</label><br>
                    <textarea placeholder="e.g., balanced lunch, protein"></textarea>
                </div>
                <div class="meal" id="meal3">
                    <h3>Meal 3</h3>
                    <label>Time: <input type="time"></label><br>
                    <label>Additional Notes:</label><br>
                    <textarea placeholder="e.g., light dinner, salad"></textarea>
                </div>
            </div>
            <button onclick="addMeal()">Add Another Meal</button>
            <button onclick="saveMeals()">Save Changes</button>
        `;
    } 
    } else if (feature === 'userProfile') {
        featureTitle.innerText = 'User Profile';
        featureDescription.innerHTML = `
            <p>Here are your health details. Keep them updated to get the best out of your health reminders and recommendations.</p>
            <div id="profileContainer">
                <label>Age: <input type="number" id="userAge" placeholder="e.g., 65"></label><br>
                <label>Blood Group: <input type="text" id="bloodGroup" placeholder="e.g., B+"></label><br>
                <label>BMI: <input type="number" id="bmi" placeholder="e.g., 22.5" step="0.1"></label><br>
                <label>Weight (kg): <input type="number" id="weight" placeholder="e.g., 70"></label><br>
                <label>Height (cm): <input type="number" id="height" placeholder="e.g., 170"></label><br>
                <label>Allergies: <textarea id="allergies" placeholder="e.g., penicillin, peanuts"></textarea></label><br>
                <label>Medical Conditions: <textarea id="conditions" placeholder="e.g., diabetes, hypertension"></textarea></label><br>
            </div>
            <button onclick="saveProfile()">Save Profile</button>
        `;
    }
}

function addMeal() {
    mealCount++;
    const mealContainer = document.getElementById('mealContainer');
    const newMeal = document.createElement('div');
    newMeal.className = 'meal';
    newMeal.id = `meal${mealCount}`;
    newMeal.innerHTML = `
        <h3>Meal ${mealCount}</h3>
        <label>Time: <input type="time"></label><br>
        <label>Additional Notes:</label><br>
        <textarea placeholder="e.g., evening snack"></textarea>
    `;
    mealContainer.appendChild(newMeal);
}

function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    alert(`You: ${userMessage}\nLiva: Thank you for sharing!`);
}

function playVideo() {
    const video = document.getElementById('introVideo');
    video.style.display = 'block';
    video.play();
}

function saveMeals() {
    alert("Meals have been saved successfully!");
}

function addMedicine() {
    const medicineContainer = document.getElementById('medicineContainer');
    const newMedicine = document.createElement('div');
    newMedicine.className = 'meal';
    const medicineCount = medicineContainer.children.length + 1;
    newMedicine.id = `medicine${medicineCount}`;
    newMedicine.innerHTML = `
        <h3>Medicine ${medicineCount}</h3>
        <label>Time: <input type="time"></label><br>
        <label>Additional Notes:</label><br>
        <textarea placeholder="e.g., take with water"></textarea>
    `;
    medicineContainer.appendChild(newMedicine);
}

function saveMedicines() {
    alert("Medicines have been saved successfully!");
}

function saveProfile() {
    const age = document.getElementById('userAge').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const bmi = document.getElementById('bmi').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const allergies = document.getElementById('allergies').value;
    const conditions = document.getElementById('conditions').value;
    
    alert(`Profile saved successfully!\nAge: ${age}\nBlood Group: ${bloodGroup}\nBMI: ${bmi}\nWeight: ${weight}\nHeight: ${height}\nAllergies: ${allergies}\nMedical Conditions: ${conditions}`);
}

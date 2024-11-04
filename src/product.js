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
    } else if (feature === 'mealReminder') {
        featureTitle.innerText = 'Meal Reminder';
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
    } else if (feature === 'medicineReminder') {
        featureTitle.innerText = 'Medicine Reminder';
        featureDescription.innerHTML = `
            <p>Your health is important to me. I’ll gently remind you when it’s time to take your medication to help you stay on track.</p>
            <div id="medicineContainer">
                <div class="meal" id="medicine1">
                    <h3>Medicine 1</h3>
                    <label>Time: <input type="time"></label><br>
                    <label>Additional Notes:</label><br>
                    <textarea placeholder="e.g., take with water"></textarea>
                </div>
                <div class="meal" id="medicine2">
                    <h3>Medicine 2</h3>
                    <label>Time: <input type="time"></label><br>
                    <label>Additional Notes:</label><br>
                    <textarea placeholder="e.g., after meal"></textarea>
                </div>
            </div>
            <button onclick="addMedicine()">Add Another Medicine</button>
            <button onclick="saveMedicines()">Save Changes</button>
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

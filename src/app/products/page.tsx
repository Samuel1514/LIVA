"use client";

import React, { useState } from 'react';
//import './FeatureSidebar.css';

const FeatureSidebar: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('Welcome');
  const [reminderCount, setReminderCount] = useState<number>(3);

  const showFeature = (feature: string) => {
    setSelectedFeature(feature);
  };

  const generateReminders = () => {
    const reminders = [];
    for (let i = 1; i <= reminderCount; i++) {
      reminders.push(
        <div className="meal" key={i}>
          <h3>Reminder {i}</h3>
          <label>Time: <input type="time" /></label><br />
          <label>Type: 
            <select>
              <option>Meal</option>
              <option>Medicine</option>
            </select>
          </label><br />
          <label>Additional Notes:</label><br />
          <textarea placeholder="e.g., light breakfast or medicine instructions"></textarea>
        </div>
      );
    }
    return reminders;
  };

  const addReminder = () => setReminderCount(reminderCount + 1);

  const renderFeatureContent = () => {
    switch (selectedFeature) {
      case 'Avatar Interaction':
        return (
          <div>
            <h2>Chat with Liva</h2>
            <p>Liva, your caring digital companion...</p>
            <div className="avatar-container">
              <div className="avatar-display"></div>
              <p>What would you like to share?</p>
              <div className="typing-bar">
                <input type="text" placeholder="Type your message here..." />
                <button>Send</button>
              </div>
            </div>
          </div>
        );
      case 'Reminder':
        return (
          <div>
            <h2>Reminder</h2>
            <p>Stay on track with meals and medicines!</p>
            <div>{generateReminders()}</div>
            <button onClick={addReminder}>Add Another Reminder</button>
            <button onClick={() => alert('Reminders saved successfully!')}>Save Changes</button>
          </div>
        );
      // Add more cases for other features...
      default:
        return <p>Select a feature to explore.</p>;
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Features</h2>
        <ul>
          <li onClick={() => showFeature('Avatar Interaction')}>Avatar Interaction</li>
          <li onClick={() => showFeature('Reminder')}>Reminder</li>
          {/* Add other features here */}
        </ul>
      </aside>
      <main className="content">
        {renderFeatureContent()}
      </main>
    </div>
  );
};

export default FeatureSidebar;

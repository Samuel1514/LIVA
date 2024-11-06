"use client"; // Use client-side rendering for this component
import "./product.css";
import { useState } from "react";

export default function FeaturesPage() {
  const [feature, setFeature] = useState({
    title: "Welcome",
    description: "Select a feature from the left to explore its details.",
  });

  const showFeature = (featureKey: string) => {
    const featureDetails: { [key: string]: { title: string; description: string } } = {
      avatarInteraction: {
        title: "Avatar Interaction",
        description: "Engage with a responsive avatar for companionship and support.",
      },
      mealReminder: {
        title: "Meal Reminder",
        description: "Set reminders for daily meals to maintain a balanced diet.",
      },
      medicineReminder: {
        title: "Medicine Reminder",
        description: "Receive timely reminders for medication adherence.",
      },
      medicalAssistance: {
        title: "Medical Assistance",
        description: "Access on-demand support for medical queries and emergencies.",
      },
      exerciseSuggestion: {
        title: "Exercise Suggestion",
        description: "Personalized exercise recommendations based on health data.",
      },
      healthTips: {
        title: "Health Tips",
        description: "Daily health tips for improved wellness and lifestyle.",
      },
      sleepTracker: {
        title: "Sleep Tracker",
        description: "Monitor your sleep patterns for better rest and recovery.",
      },
      moodTracker: {
        title: "Mood Tracker",
        description: "Track and analyze mood trends over time.",
      },
      userProfile: {
        title: "User Profile",
        description: "Manage your profile and preferences.",
      },
    };

    setFeature(featureDetails[featureKey]);
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Features</h2>
        <ul>
          <li onClick={() => showFeature("avatarInteraction")}>Avatar Interaction</li>
          <li onClick={() => showFeature("mealReminder")}>Meal Reminder</li>
          <li onClick={() => showFeature("medicineReminder")}>Medicine Reminder</li>
          <li onClick={() => showFeature("medicalAssistance")}>Medical Assistance</li>
          <li onClick={() => showFeature("exerciseSuggestion")}>Exercise Suggestion</li>
          <li onClick={() => showFeature("healthTips")}>Health Tips</li>
          <li onClick={() => showFeature("sleepTracker")}>Sleep Tracker</li>
          <li onClick={() => showFeature("moodTracker")}>Mood Tracker</li>
          <li onClick={() => showFeature("userProfile")}>User Profile</li>
        </ul>
      </aside>

      <main className="content">
        <h2 id="featureTitle">{feature.title}</h2>
        <div id="featureDescription">
          <p>{feature.description}</p>
        </div>
      </main>
    </div>
  );
}

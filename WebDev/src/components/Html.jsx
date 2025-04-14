import React from 'react';
import './Html.css'; // Import custom CSS for this component

function Html() {
  const exercises = [
    { id: 1, name: "Assignment Exercise", path: "https://introduction-blush.vercel.app/Css/Assignment.html" },
    { id: 2, name: "First HTML Page", path: "https://introduction-blush.vercel.app/Css/FIRST.html" },
    { id: 3, name: "Solar System Project", path: "https://introduction-blush.vercel.app/Css/SolarSystem.html" },
    { id: 4, name: "Program Structure", path: "https://introduction-blush.vercel.app/Css/Program.html" },
    { id: 5, name: "Resume Project", path: "https://introduction-blush.vercel.app/Resume/MainPage.html" }
  ];

  return (
    <div className="html-component">
      <header className="component-header">
        <h2>HTML Exercises</h2>
        <p>Select any exercise below to view it in a new tab</p>
      </header>
      
      <div className="exercise-grid">
        {exercises.map((exercise) => (
          <div className="exercise-card" key={exercise.id}>
            <h3>Exercise {exercise.id}</h3>
            <p>{exercise.name}</p>
            <a 
              href={exercise.path} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="exercise-link"
            >
              Open Exercise
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Html;
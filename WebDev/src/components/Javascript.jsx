import React from 'react';
import './Javascript.css'; // Import custom CSS for this component

function Javascript() {
  const exercises = [
    { id: 8, name: "Question 1", path: "WebD/WebDev/src/javascript/Ex8/cal.html" },
    { id: 9, name: "Question 1", path: "/src/javascript/Ex9/Q1.html" },
    { id: 10, name: "Question 1", path: "/src/javascript/Ex10/Q1.html" },
    { id: 11, name: "Question 1", path: "/src/javascript/Ex11/Q1.html" },
    { id: 12, name: "Question 1", path: "/src/javascript/Ex12/Q1.html" }
  ];

  return (
    <div className="javascript-component">
      <header className="component-header">
        <h2>JavaScript Exercises</h2>
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

export default Javascript;

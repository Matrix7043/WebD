import React from 'react';
import './Css.css'; // Import custom CSS for this component

function Css() {
    const exercises = [
        { id: 6, name: "", path: "https://introduction-blush.vercel.app/Css/CoolBox.html" },
        { id: 7, name: "", path: "https://introduction-blush.vercel.app/Css/Formatting.html" }
    ];

    return (
        <div className="css-component">
            <header className="component-header">
                <h2>CSS Exercises</h2>
                <p>Click on any exercise below to view it in a new tab</p>
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

export default Css;
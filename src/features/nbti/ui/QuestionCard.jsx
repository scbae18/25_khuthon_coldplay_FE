import React from "react";

export default function QuestionCard({ question, options, onAnswer, step, total }) {
  return (
    <div className="question-card">
      <p>{`Q${step} / ${total}`}</p>
      <h3>{question}</h3>
      <div className="options">
        {options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
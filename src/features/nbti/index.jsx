import React from "react";
import useNbtiStore from "./model/useNbtiStore";
import questions from "./config/questions";
import QuestionCard from "./ui/QuestionCard";
import ResultCard from "./ui/ResultCard";

export default function Nbti() {
  const { currentIndex, answers, addAnswer, nextQuestion } = useNbtiStore();

  const handleAnswer = (value) => {
    addAnswer(value);
    nextQuestion();
  };

  if (currentIndex >= questions.length) {
    return <ResultCard answers={answers} />;
  }

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <QuestionCard
        question={questions[currentIndex].text}
        options={questions[currentIndex].options}
        onAnswer={handleAnswer}
        step={currentIndex + 1}
        total={questions.length}
      />
    </div>
  );
}
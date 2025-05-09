import React from "react";
import useNbtiStore from "./model/useNbtiStore";
import questions from "./config/questions";
import QuestionCard from "./ui/QuestionCard";
import ResultCard from "./ui/ResultCard";

export default function Nbti() {
  const { currentIndex, answers, addAnswer, nextQuestion } = useNbtiStore();

  const handleAnswer = (value, type) => {
    addAnswer(type, value);  // type을 추가해서 답변을 각 축에 맞게 처리
    nextQuestion();
  };

  if (currentIndex >= questions.length) {
    return <ResultCard />;
  }

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <QuestionCard
        question={questions[currentIndex].text}
        options={questions[currentIndex].options}
        onAnswer={(value) => handleAnswer(value, questions[currentIndex].type)}
        step={currentIndex + 1}
        total={questions.length}
      />
    </div>
  );
}
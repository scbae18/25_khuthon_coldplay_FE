import React from "react";

export default function QuestionCard({ question, options, onAnswer, step, total }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-2">
        질문 {step} / {total}
      </h2>
      <p className="text-gray-700 mb-4">{question}</p>
      <div className="space-y-2">
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => onAnswer(idx)} // 0~4 점수로 전달
            className="w-full bg-[#32BC81] text-white py-2 rounded-xl hover:opacity-90"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
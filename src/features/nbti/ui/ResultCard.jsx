import React from "react";
import useNbtiStore from "../model/useNbtiStore";
import nbtiResultInfo from "../config/nbtiResultInfo"; // NB: 경로는 실제 파일 위치에 맞게 조정

export default function ResultCard() {
  const { answers } = useNbtiStore();

  // NBTI 코드 계산
  const resultCode =
    (answers.SP > 0 ? "S" : "P") +
    (answers.ID > 0 ? "I" : "D") +
    (answers.CX > 0 ? "C" : "X") +
    (answers.AT > 0 ? "A" : "T");

  // 결과 정보 가져오기
  const result = nbtiResultInfo[resultCode];

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
        당신의 농BTI는 <span style={{ color: "#2d6a4f" }}>{resultCode}</span>
      </h2>
      <div style={{ fontSize: "2.5rem" }}>{result.emoji}</div>
      <h3 style={{ fontSize: "1.25rem", margin: "1rem 0" }}>{result.name}</h3>
      <p style={{ fontSize: "1rem", color: "#555" }}>{result.description}</p>
    </div>
  );
}
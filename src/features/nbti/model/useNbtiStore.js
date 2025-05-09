import { create } from 'zustand';

const useNbtiStore = create((set) => ({
  currentIndex: 0, // 현재 질문 번호
  answers: [], // 유저가 선택한 답변 배열
  
  nextQuestion: () => set((state) => ({ // 다음 질문으로 이동
    currentIndex: state.currentIndex + 1
  })),

  addAnswer: (answer) => set((state) => ({ // 각 질문에 대한 응답 저장
    answers: [...state.answers, answer]
  })),

  resetTest: () => set({ // 다시 검사할 때 초기화
    currentIndex: 0,
    answers: []
  }),
}));

export default useNbtiStore;
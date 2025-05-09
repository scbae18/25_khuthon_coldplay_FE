import { create } from "zustand";

const useNbtiStore = create((set) => ({
  currentIndex: 0,
  answers: {
    SP: 0, // S-P 축
    ID: 0, // I-D 축
    CX: 0, // C-X 축
    AT: 0, // A-T 축
  },
  addAnswer: (questionType, value) => {
    set((state) => {
      const newAnswers = { ...state.answers };
      newAnswers[questionType] += value;
      return { answers: newAnswers };
    });
  },
  nextQuestion: () => set((state) => ({ currentIndex: state.currentIndex + 1 })),
  reset: () => set({ currentIndex: 0, answers: { SP: 0, ID: 0, CX: 0, AT: 0 } }),
}));

export default useNbtiStore;
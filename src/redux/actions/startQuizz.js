const startQuizz = (state) => {
  return {
    ...state,
    currentQuestion: 0,
    score: 0,
    showResult: false,
    quizzStarted: true,
  };
};

export default startQuizz;

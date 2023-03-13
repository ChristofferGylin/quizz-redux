import saveToLocal from "../../saveToLocal";

const startQuizz = (state) => {

  const newState = {
    ...state,
    currentQuestion: 0,
    score: 0,
    showResult: false,
    quizzStarted: true,
    startTime: Date.now(),
  };

  saveToLocal(newState);
  return newState;
};

export default startQuizz;

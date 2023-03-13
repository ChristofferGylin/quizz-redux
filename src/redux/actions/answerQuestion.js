import saveToLocal from "../../saveToLocal";
import { save } from "../quizzes";

const answerQuestion = (state, payload) => {

  let newScore = state.score;

  if (payload === state.questions[state.currentQuestion].correct) {
    newScore++;
  }

  let nextQuestion = state.currentQuestion + 1;
  let quizzOn = true;
  let results = false;

  const users = [...state.users];

  if (nextQuestion === state.questions.length) {
    nextQuestion = 0;
    users[state.activeUser].results.push({
      numberOfQuestions: state.questions.length,
      correctQuestions: newScore,
      percentage: (newScore / state.questions.length) * 100,
      time: Date.now() - state.startTime,

    });
    quizzOn = false;
    results = true;
  }

  const newState = {
    ...state,
    quizzStarted: quizzOn,
    score: newScore,
    showResult: results,
    currentQuestion: nextQuestion,
    users,
  };
  saveToLocal(newState);
  return newState;
};

export default answerQuestion;

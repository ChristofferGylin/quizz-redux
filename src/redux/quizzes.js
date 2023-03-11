import { createReduxModule } from "hooks-for-redux";
import answerQuestion from "./actions/answerQuestion";
import updateQuestion from "./actions/updateQuestion";
import addQuestion from "./actions/addQuestion";
import deleteQuestion from "./actions/deleteQuestion";
import startQuizz from "./actions/startQuizz";
import setQuestion from "./actions/setQuestion";
import saveResults from "./actions/saveResults";
import resetQuizz from "./actions/resetQuizz";
import newUser from "./actions/newUser";
import setActiveUser from "./actions/setActiveUser";

let state = {
  quizzStarted: false,
  showResult: false,
  currentQuizz: 0,
  currentQuestion: 0,
  score: 0,
  activeUser: 0,
  users: [
    {
      name: "Guest",
      results: [],
    },
  ],
  questions: [
    {
      title: "What is 7 + 9?",
      alt: ["16", "15", "19"],
      correct: 0,
      id: `q0-${Date.now()}`,
    },
    {
      title: "What is 8 x 8?",
      alt: ["56", "64", "82"],
      correct: 1,
      id: `q1-${Date.now()}`,
    },
    {
      title: "What is 12 / 3?",
      alt: ["6", "4", "8"],
      correct: 1,
      id: `q2-${Date.now()}`,
    },
    {
      title: "What is 36 x 3?",
      alt: ["99", "102", "108"],
      correct: 2,
      id: `q3-${Date.now()}`,
    },
    {
      title: "What is 99 / 3?",
      alt: ["30", "33", "36"],
      correct: 1,
      id: `q4-${Date.now()}`,
    },
  ],
};

const dataFromStorage = localStorage.getItem("gylin-quizz-redux");

if (dataFromStorage) {
  const json = JSON.parse(dataFromStorage);
  state = json;
}

export const [
  useQuizzes,
  { add, update, del, start, setQ, answer, resetQ, save, addUser, setUser },
] = createReduxModule("quizzes", state, {
  add: addQuestion,
  update: updateQuestion,
  del: deleteQuestion,
  start: startQuizz,
  setQ: setQuestion,
  answer: answerQuestion,
  resetQ: resetQuizz,
  save: saveResults,
  addUser: newUser,
  setUser: setActiveUser
});

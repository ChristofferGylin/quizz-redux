import saveToLocal from "../../saveToLocal";

const answerQuestion = (state, payload) => {

    let newScore = state.score;

    if (payload === state.questions[state.currentQuestion].correct) {

        newScore++;

    }

    let nextQuestion = state.currentQuestion + 1;
    let quizzOn = true;
    let results = false;

    if (nextQuestion === state.questions.length) {

        nextQuestion = 0;
        results = true;
        quizzOn = false;

    }

    const newState = {
        ...state,
        quizzStarted: quizzOn,
        score: newScore,
        showResult: results,
        currentQuestion: nextQuestion,

    }
    saveToLocal(newState);
    return newState;

}

export default answerQuestion;
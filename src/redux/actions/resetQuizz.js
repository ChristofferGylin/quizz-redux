const resetQuizz = (state) => {

    return {
        ...state,
        quizzStarted: false,
        showResult: false,
        currentQuizz: 0,
        currentQuestion: 0,
        score: 0,
    }
}

export default resetQuizz;
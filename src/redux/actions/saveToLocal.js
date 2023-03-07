import emptyFields from "./emptyFields";

const saveToLocal = (data) => {

    data = {
        ...data,
        inputFields: emptyFields,
        quizzStarted: false,
        showResult: false,
        currentQuizz: 0,
        currentQuestion: 0,
        score: 0,

    }

    localStorage.setItem('gylin-quizz-redux', JSON.stringify(data))

}

export default saveToLocal;
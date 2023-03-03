import emptyFields from "./emptyFields";

const updateQuestion = (state) => {

    if (state.selectedQuestion === null) {

        return state;

    }

    const questions = state.questions.map((question) => {

        if (question.id === state.selectedQuestion) {

            return {
                title: state.inputFields.title,
                alt: state.inputFields.alt,
                correct: state.inputFields.correct,
                id: state.selectedQuestion,
            };

        } else {

            return question;

        }

    });




    return {
        ...state,
        selectedQuestion: null,
        inputFields: emptyFields,
        questions

    }

}

export default updateQuestion;
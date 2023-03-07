import emptyFields from "./emptyFields";
import saveToLocal from "./saveToLocal";

const updateQuestion = (state) => {

    if (state.selectedQuestion === null) {

        return state;

    }

    const questions = state.questions.map((question) => {

        if (question.id === state.selectedQuestion) {

            return {
                title: state.inputFields.title,
                alt: state.inputFields.alt,
                correct: parseInt(state.inputFields.correct),
                id: state.selectedQuestion,
            };

        } else {

            return question;

        }

    });


    const newState = {
        ...state,
        selectedQuestion: null,
        inputFields: emptyFields,
        questions

    }

    saveToLocal(newState);
    return newState;

}

export default updateQuestion;
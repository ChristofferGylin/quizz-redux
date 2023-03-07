import emptyFields from "./emptyFields";
import saveToLocal from "./saveToLocal";

const updateQuestion = (state, refs) => {

    if (state.selectedQuestion === null) {

        return state;

    }

    const questions = state.questions.map((question) => {

        if (question.id === state.selectedQuestion) {

            return {
                title: refs.title.current.value,
                alt: [
                    refs.alt0.current.value, refs.alt1.current.value, refs.alt2.current.value
                ],
                correct: parseInt(refs.correct.current.value),
                id: state.selectedQuestion,
            };

        } else {

            return question;

        }

    });


    const newState = {
        ...state,
        questions,
        selectedQuestion: null

    }

    saveToLocal(newState);
    return newState;

}

export default updateQuestion;
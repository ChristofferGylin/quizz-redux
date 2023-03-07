import emptyFields from "./emptyFields";
import saveToLocal from "./saveToLocal";

const addQuestion = (state) => {



    const question = {
        title: state.inputFields.title,
        alt: state.inputFields.alt,
        correct: parseInt(state.inputFields.correct),
        id: `q${state.questions.length}-${Date.now()}`,
    };

    const newState = {
        ...state,
        questions: [
            ...state.questions,
            question
        ],
        selectedQuestion: null,
        inputFields: emptyFields,

    }

    saveToLocal(newState);

    console.log(newState);

    return newState
}

export default addQuestion;
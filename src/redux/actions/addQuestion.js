import emptyFields from "./emptyFields";

const addQuestion = (state) => {



    const question = {
        title: state.inputFields.title,
        alt: state.inputFields.alt,
        correct: state.inputFields.correct,
        id: `q${state.questions.length}-${Date.now()}`,
    };

    return {
        ...state,
        questions: [
            ...state.questions,
            question
        ],
        selectedQuestion: null,
        inputFields: emptyFields,

    }
}

export default addQuestion;
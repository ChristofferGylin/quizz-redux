import saveToLocal from "./saveToLocal";

const addQuestion = (state, refs) => {

    state.selectedQuestion = null;

    const question = {
        title: refs.title.current.value,
        alt: [
            refs.alt0.current.value, refs.alt1.current.value, refs.alt2.current.value
        ],
        correct: parseInt(refs.correct.current.value),
        id: `q${state.questions.length}-${Date.now()}`,
    };

    const newState = {
        ...state,
        questions: [
            ...state.questions,
            question
        ],

    }

    saveToLocal(newState);

    return newState
}

export default addQuestion;
import saveToLocal from "./saveToLocal";

const setQuestion = (state, payload) => {

    const newState = {
        ...state,
        inputFields: payload.inputFields,
        selectedQuestion: payload.selectedQuestion
    }

    saveToLocal(newState);
    return newState;
}

export default setQuestion;
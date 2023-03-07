import saveToLocal from "../../saveToLocal";

const setQuestion = (state, payload) => {

    const newState = {
        ...state,
        selectedQuestion: payload
    }

    saveToLocal(newState);
    return newState;
}

export default setQuestion;
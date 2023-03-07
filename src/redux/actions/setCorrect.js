import saveToLocal from "./saveToLocal";

const setCorrect = (state, payload) => {

    const newState = {
        ...state,
        inputFields: {
            ...state.inputFields,
            correct: payload
        }
    }

    saveToLocal(newState);
    return newState;

}

export default setCorrect;
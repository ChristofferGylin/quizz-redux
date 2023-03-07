import saveToLocal from "./saveToLocal";

const setTitle = (state, payload) => {

    const newState = {
        ...state,
        inputFields: {
            ...state.inputFields,
            title: payload
        }
    }

    saveToLocal(newState);
    return newState;

}

export default setTitle;
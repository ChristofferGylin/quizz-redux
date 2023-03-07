import saveToLocal from "./saveToLocal";

const setAlt = (state, payload) => {


    const alt = [...state.inputFields.alt];

    alt[payload.index] = payload.answer;

    const newState = {
        ...state,
        inputFields: {
            ...state.inputFields,
            alt: alt
        }
    }

    saveToLocal(newState);
    return newState;

}

export default setAlt;
const setAlt = (state, payload) => {


    const alt = [...state.inputFields.alt];

    alt[payload.index] = payload.answer;

    return {
        ...state,
        inputFields: {
            ...state.inputFields,
            alt: alt
        }
    }

}

export default setAlt;
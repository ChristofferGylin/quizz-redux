const setCorrect = (state, payload) => {

    return {
        ...state,
        inputFields: {
            ...state.inputFields,
            correct: payload
        }
    }

}

export default setCorrect;
const setTitle = (state, payload) => {

    return {
        ...state,
        inputFields: {
            ...state.inputFields,
            title: payload
        }
    }

}

export default setTitle;
const setQuestion = (state, payload) => {
    console.log(payload);
    return {
        ...state,
        inputFields: payload.inputFields,
        selectedQuestion: payload.selectedQuestion
    }
}

export default setQuestion;
import saveToLocal from "../../saveToLocal";

const deleteQuestion = (state, payload) => {

    const newState = {
        ...state,
        questions: state.questions.filter((question) => {
            if (question.id !== payload) {

                return true;

            } else {
                return false;
            }
        }),


    }

    saveToLocal(newState);
    return newState;

}

export default deleteQuestion;
const setActiveUser = (state, payload) => {

    return {
        ...state,
        activeUser: parseInt(payload)
    }
}

export default setActiveUser;
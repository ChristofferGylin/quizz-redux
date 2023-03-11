const newUser = (state, payload) => {

    return {
        ...state,
        activeUser: state.users.length,
        users: [
            ...state.users,
            {
                name: payload,
                results: [],
            }
        ]
    }
}

export default newUser;
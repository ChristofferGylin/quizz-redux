
const getUserBest = (user) => {

    let bestScore = 0;
    let resultIndex = 0;

    for (let i = 0; i < user.results.length; i++) {

        if (user.results[i].percentage > bestScore) {
            bestScore = user.results[i].percentage;
            resultIndex = i;
        };


    }

    return {
        ...user.results[resultIndex],
        name: user.name
    };

}

export default getUserBest;
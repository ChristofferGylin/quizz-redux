const saveResults = (state, { numberOfQuestions, correctQuestions }) => {
  const users = [...state.users];
  users[state.activeUser].results.push({
    numberOfQuestions,
    correctQuestions,
    percentage: correctQuestions / numberOfQuestions,
  });

  return {
    ...state,
    users,
  };
};

export default saveResults;

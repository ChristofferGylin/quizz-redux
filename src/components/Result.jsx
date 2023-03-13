import { useQuizzes, start } from "../redux/quizzes";
import millisToTime from "../millisToTime";

const Result = () => {
  const quizzes = useQuizzes();
  const userResult = quizzes.users[quizzes.activeUser].results[quizzes.users[quizzes.activeUser].results.length - 1];
  const time = millisToTime(userResult.time);
  const Minutes = () => {

    let s = '';

    if (time.minutes > 1) s = 's';

    return (

      <span>{time.minutes} minute{s}, </span>

    )

  }

  return (
    <div className="flex flex-col items-center justify-between border border-slate-400 bg-slate-200 rounded-lg p-8 h-3/4 w-2/3">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold ml-4 border-b border-slate-400 py-2 w-full">
        The results are in!
      </h2>
      <p className="text-3xl md:text-4xl lg:text-5xl text-center font-semibold">
        {userResult.percentage}%
      </p>
      <p className="text-2xl md:text-3xl lg:text-54xl text-center font-semibold">
        You answered {userResult.correctQuestions} out of {userResult.numberOfQuestions} questions
        correctly in {time.minutes > 0 && <Minutes />}{time.seconds} seconds and {time.millis} milliseconds.
      </p>
      <button
        onClick={start}
        className={
          "border border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 text-xl md:text-2xl lg:text-4xl font-bold rounded-xl w-full"
        }
      >
        Try Again
      </button>
    </div>
  );
};

export default Result;

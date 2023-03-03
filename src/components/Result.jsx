import { useQuizzes, start } from "../redux/quizzes";

const Result = () => {

    const quizzes = useQuizzes();

    return (
        <div className="flex flex-col items-center justify-between border border-slate-400 bg-slate-200 rounded-lg p-8 h-3/4 w-2/3">
            <h2 className="text-3xl font-semibold ml-4 border-b border-slate-400 py-2 w-full">The results are in!</h2>
            <p className="text-6xl text-center font-semibol">You answered {quizzes.score} out of {quizzes.questions.length} questions correctly</p>
            <button
                onClick={start}
                className={"border border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 text-4xl font-bold rounded-xl w-full"}>
                Try Again
            </button>
        </div>
    )

}

export default Result;
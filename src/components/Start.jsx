import { start } from "../redux/quizzes";

const Start = () => {

    return (

        <div className="flex justify-center items-center w-full h-full">
            <button
                onClick={start}
                className={"border border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 text-4xl font-bold rounded-xl w-3/4"}>
                Start Quiz
            </button>

        </div>

    )

}

export default Start;
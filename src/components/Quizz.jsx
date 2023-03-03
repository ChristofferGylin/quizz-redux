import { useQuizzes } from "../redux/quizzes";
import AnswerItem from "./AnswerItem";
const Quizz = () => {

    const quizzes = useQuizzes();

    return (

        <div className="flex flex-col items-center justify-between border border-slate-400 bg-slate-200 rounded-lg p-8 h-3/4 w-2/3">
            <h2 className="text-3xl font-semibold ml-4 border-b border-slate-400 py-2 w-full">Question {quizzes.currentQuestion + 1} of {quizzes.questions.length}</h2>
            <p className="text-5xl text-center font-semibol">{quizzes.questions[quizzes.currentQuestion].title}</p>
            <ul className="flex gap-4 flex-col overflow-y-auto p-4 text-lg text-slate-700 w-full">
                {quizzes.questions[quizzes.currentQuestion].alt.map((answer, index) => {

                    return <AnswerItem key={`answer${index}`} index={index} text={answer} />

                })}
            </ul>

        </div>
    )

}

export default Quizz;
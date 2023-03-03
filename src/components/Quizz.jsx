import { useQuizzes } from "../redux/quizzes";
import AnswerItem from "./AnswerItem";
const Quizz = () => {

    const quizzes = useQuizzes();

    return (
        <div className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg p-8 h-full w-3/4 mx-auto my-12">
            <h2 className="text-3xl font-semibold ml-4 border-b border-slate-400 py-2">Question {quizzes.currentQuestion + 1} of {quizzes.questions.length}</h2>
            <p className="text-xl font-semibold ml-10 mt-10 mb-8"><span className="bg-slate-50 px-6 py-3 rounded-lg border border-slate-300">{quizzes.questions[quizzes.currentQuestion].title}</span></p>
            <ul className="flex flex-col overflow-y-auto p-4 text-lg text-slate-700">
                {quizzes.questions[quizzes.currentQuestion].alt.map((answer, index) => {

                    return <AnswerItem key={`answer${index}`} index={index} text={answer} />

                })}
            </ul>
        </div>
    )

}

export default Quizz;
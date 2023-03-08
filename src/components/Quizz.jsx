import { useQuizzes } from "../redux/quizzes";
import AnswerItem from "./AnswerItem";
const Quizz = () => {

    const quizzes = useQuizzes();

    return (

        <div className="grid grid-rows-6 border border-slate-400 bg-slate-200 rounded-lg p-2 md:p-4 lg:p-8 h-5/6 w-5/6 md:h-4/5 md:w-4/5 lg:h-3/4 lg:w-3/4">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold ml-4 border-b border-slate-400 py-2 w-full h-fit self-start">Question {quizzes.currentQuestion + 1} of {quizzes.questions.length}</h2>
            <p className="row-span-3 w-full max-h-full p-4 overflow-auto text-2xl md:text-3xl lg:text-4xl text-center font-semibol self-center">{quizzes.questions[quizzes.currentQuestion].title}</p>
            <ul className="row-span-2 flex gap-4 flex-col overflow-y-auto p-4 text-lg text-slate-700 w-full h-fit self-end">
                {quizzes.questions[quizzes.currentQuestion].alt.map((answer, index) => {

                    return <AnswerItem key={`answer${index}`} index={index} text={answer} />

                })}
            </ul>

        </div>
    )

}

export default Quizz;


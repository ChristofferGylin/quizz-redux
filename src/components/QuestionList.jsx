
import { useQuizzes } from "../redux/quizzes";
import ListItem from "./ListItem";

const QuestionList = (props) => {
    const { refs } = props;

    const quizzes = useQuizzes();

    return (
        <div className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg h-[42rem] lg:h-[34rem] p-4">
            <h2 className="text-xl font-semibold ml-4">Questions</h2>
            <ul className="flex flex-col overflow-auto p-4 text-lg text-slate-700 h-full">
                {quizzes.questions.map((question, index) => {

                    return <ListItem key={question.id} question={question} index={index} refs={refs} />

                })}
            </ul>
        </div>


    )

}

export default QuestionList;
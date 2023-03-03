import { answer } from "../redux/quizzes";

const AnswerItem = (props) => {

    const { text, index } = props;

    return (
        <li className="flex text-xl gap-2 mb-4 p-2 border rounded-lg border-slate-400 bg-slate-300/50 hover:cursor-pointer hover:bg-slate-300 hover:text-slate-900"
            onClick={() => {
                answer(index);
            }}>
            <div className="font-semibold w-4" >{index + 1}.</div><div>{text}</div>
        </li>
    )

}

export default AnswerItem;
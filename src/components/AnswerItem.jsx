import { answer } from "../redux/quizzes";

const AnswerItem = (props) => {

    const { text, index } = props;

    return (
        <li className="w-full"
        >
            <button
                onClick={() => { answer(index) }}
                className={"flex gap-2 lg:gap-4 text-md md:text-xl lg:text-2xl border  border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 rounded-xl w-full"}>
                <div className="font-semibold ">{index + 1}.</div><div>{text}</div>
            </button>
        </li>
    )

}

export default AnswerItem;
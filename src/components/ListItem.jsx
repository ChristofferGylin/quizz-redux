import { setQ, useQuizzes, del } from "../redux/quizzes";
import { MdClose } from 'react-icons/md';
import resetForm from "./resetForm";


const ListItem = (props) => {
    const { question, index, refs } = props;

    const quizzes = useQuizzes();

    return (

        <li className="flex items-center gap-4 border-b border-slate-400 hover:bg-slate-300 hover:cursor-pointer odd:bg-slate-300/50 p-1 last:border-none">
            <div className="flex items-center gap-4 w-full" onClick={() => {

                refs.title.current.value = question.title;
                refs.alt0.current.value = question.alt[0];
                refs.alt1.current.value = question.alt[1];
                refs.alt2.current.value = question.alt[2];
                refs.correct.current.value = question.correct;
                setQ(question.id)

            }}><div className="font-semibold">{index + 1}.</div><div className="w-full">{question.title}</div></div><div className="hover:bg-red-500/80 group"
                onClick={() => {

                    del(question.id);

                    if (quizzes.selectedQuestion === question.id) {

                        resetForm(refs)

                    }

                }}>
                <MdClose className="group-hover:text-slate-900 text-xl" /></div>
        </li >

    )

}

export default ListItem;
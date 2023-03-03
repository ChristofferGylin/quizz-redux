import { setQ, useQuizzes, del } from "../redux/quizzes";
import { MdClose } from 'react-icons/md'
import { useState } from "react";

const ListItem = (props) => {
    const { question, index } = props;
    return (

        <li className="flex items-center gap-4 border-b border-slate-500 hover:bg-slate-300 hover:cursor-pointer odd:bg-slate-300/50 p-1 last:border-none">
            <div className="flex items-center gap-4 w-full" onClick={() => {



                setQ({
                    inputFields: {
                        title: question.title,
                        alt: question.alt,
                        correct: question.correct
                    },
                    selectedQuestion: question.id

                })



            }}><div className="font-semibold">{index + 1}.</div><div className="w-full">{question.title}</div></div><div className="hover:bg-red-500/80 group"
                onClick={() => {

                    del(question.id);

                }}>
                <MdClose className="group-hover:text-slate-900 text-xl" /></div>
        </li >

    )

}

export default ListItem;
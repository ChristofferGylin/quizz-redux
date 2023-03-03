import { useState } from "react";
import { useQuizzes } from "../redux/quizzes";
import ListItem from "./ListItem";

const QuestionList = () => {

    return (
        <div className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg p-4 h-full">
            <h2 className="text-xl font-semibold ml-4">Questions</h2>
            <ul className="flex flex-col overflow-y-auto p-4 text-lg text-slate-700">
                {useQuizzes().questions.map((question, index) => {

                    return <ListItem key={question.id} question={question} index={index} />

                })}
            </ul>
        </div>


    )

}

export default QuestionList;
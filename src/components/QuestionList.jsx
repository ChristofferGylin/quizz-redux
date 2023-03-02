import { useState } from "react";
import { useQuizzes } from "../redux/quizzes";
import ListItem from "./ListItem";

const QuestionList = () => {

    return (

        <ul className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg p-4">
            {useQuizzes().questions.map((question, index) => {

                return <ListItem key={question.id} question={question} index={index} />

            })}
        </ul>

    )

}

export default QuestionList;
import { setQ, useQuizzes } from "../redux/quizzes";

const ListItem = (props) => {
    const { question, index } = props;


    return (

        <li className="flex border-b border-slate-500">
            <div
                onClick={() => {
                    setQ({
                        inputFields: {
                            title: question.title,
                            alt: question.alt,
                            correct: question.correct
                        },
                        selectedQuestion: question.id

                    })
                }}>
                {index + 1}</div><div>{question.title}</div>
        </li>

    )

}

export default ListItem;
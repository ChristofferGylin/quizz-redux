import { useState } from "react";
import { useQuizzes, setT, setA, setQ, setC } from "../redux/quizzes";

const InputForm = () => {

    const getValue = (attribute) => {

        if (useQuizzes().selectedQuestion === null) {

            return '';

        } else {

            return useQuizzes().questions[useQuizzes().selectedQuestion][attribute];

        }

    }

    //const title = getValue('title');

    return (

        <form
            action=""
            className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg p-4"
        >
            <h2 className="text-lg font-semibold">Question:</h2>
            <div className="flex flex-col my-4">
                <label htmlFor="inputTitle">Title</label>
                <input
                    type="text"
                    id="inputTitle"
                    className="border border-slate-500 rounded"
                    onChange={e => setT(e.target.value)}
                    value={useQuizzes().inputFields.title}
                />
            </div>
            <h2 className="text-lg font-semibold">Answers:</h2>
            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt0">Alternative 1</label>
                <input
                    type="text"
                    id="inputAlt0"
                    className="border border-slate-500 rounded"
                    onChange={e => setA(e.target.value)}
                    value={useQuizzes().inputFields.alt[0]}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt1">Alternative 2</label>
                <input
                    type="text"
                    id="inputAlt1"
                    className="border border-slate-500 rounded"
                    onChange={e => setA(e.target.value)}
                    value={useQuizzes().inputFields.alt[1]}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt2">Alternative 3</label>
                <input
                    type="text"
                    id="inputAlt2"
                    className="border border-slate-500 rounded"
                    onChange={e => setAlt(e.target.value)}
                    value={useQuizzes().inputFields.alt[2]}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputCorrect">Correct Answer:</label>
                <select
                    id="inputCorrect"
                    className="border border-slate-500 rounded"
                    onChange={e => setC(e.target.value)}
                    value={useQuizzes().inputFields.correct}>
                    <option value={0}>1</option>
                    <option value={1}>2</option>
                    <option value={2}>3</option>
                </select>
            </div>
            <div className="flex gap-4 mx-auto">
                <button className="py-1 px-3 border text-slate-100 rounded-xl bg-slate-600 border-slate-400 hover:bg-slate-700 hover:text-slate-50">
                    Save New
                </button>
                <button className="py-1 px-3 border text-slate-100 rounded-xl bg-slate-600 border-slate-400 hover:bg-slate-700 hover:text-slate-50">
                    Update
                </button>
            </div>
        </form>

    )

}

export default InputForm;
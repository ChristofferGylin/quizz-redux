import { useState } from "react";
import { useQuizzes, setT, setA, add, setC, update } from "../redux/quizzes";

const InputForm = () => {
    const quizzes = useQuizzes();
    let updateDisabled = false;

    if (quizzes.selectedQuestion === null) {
        updateDisabled = true;
    }

    return (

        <div className="flex flex-col border border-slate-400 bg-slate-200 rounded-lg p-4 text-slate-700">
            <h2 className="text-xl font-semibold">Create New, or Update Question</h2>
            <div className="flex flex-col my-4">
                <label htmlFor="inputTitle">Title</label>
                <input
                    type="text"
                    id="inputTitle"
                    className="border border-slate-500 rounded"
                    onChange={e => setT(e.target.value)}
                    value={quizzes.inputFields.title}
                />
            </div>
            <h2 className="text-lg font-semibold">Answers:</h2>
            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt0">Alternative 1</label>
                <input
                    type="text"
                    id="inputAlt0"
                    className="border border-slate-500 rounded"
                    onChange={e => setA({ index: 0, answer: e.target.value })}
                    value={quizzes.inputFields.alt[0]}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt1">Alternative 2</label>
                <input
                    type="text"
                    id="inputAlt1"
                    className="border border-slate-500 rounded"
                    onChange={e => setA({ index: 1, answer: e.target.value })}
                    value={quizzes.inputFields.alt[1]}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt2">Alternative 3</label>
                <input
                    type="text"
                    id="inputAlt2"
                    className="border border-slate-500 rounded"
                    onChange={e => setA({ index: 2, answer: e.target.value })}
                    value={quizzes.inputFields.alt[2]}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputCorrect">Correct Answer:</label>
                <select
                    id="inputCorrect"
                    className="border border-slate-500 rounded"
                    onChange={e => setC(e.target.value)}
                    value={quizzes.inputFields.correct}>
                    <option value={0}>1</option>
                    <option value={1}>2</option>
                    <option value={2}>3</option>
                </select>
            </div>
            <div className="flex gap-4 mx-auto">
                <button onClick={add} className="py-1 px-3 border text-slate-100 rounded-xl bg-slate-600 border-slate-400 hover:bg-slate-700 hover:text-slate-50">
                    Save New
                </button>
                <button disabled={updateDisabled} onClick={update} className="py-1 px-3 border text-slate-100 rounded-xl bg-slate-600 border-slate-400 hover:bg-slate-700 hover:text-slate-50 disabled:bg-slate-400">
                    Update
                </button>
            </div>
        </div>

    )

}

export default InputForm;
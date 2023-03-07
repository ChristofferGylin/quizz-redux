import { useQuizzes, add, update } from "../redux/quizzes";
import resetForm from "../resetForm";

const InputForm = (props) => {

    const { refs } = props;
    const quizzes = useQuizzes();
    let updateDisabled = false;

    if (quizzes.selectedQuestion === null) {

        updateDisabled = true;

    } else {

        updateDisabled = false;

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
                    ref={refs.title}
                />
            </div>
            <h2 className="text-lg font-semibold">Answers:</h2>
            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt0">Alternative 1</label>
                <input
                    type="text"
                    id="inputAlt0"
                    className="border border-slate-500 rounded"
                    ref={refs.alt0}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt1">Alternative 2</label>
                <input
                    type="text"
                    id="inputAlt1"
                    className="border border-slate-500 rounded"
                    ref={refs.alt1}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputAlt2">Alternative 3</label>
                <input
                    type="text"
                    id="inputAlt2"
                    className="border border-slate-500 rounded"
                    ref={refs.alt2}
                />
            </div>

            <div className="flex flex-col my-4">
                <label htmlFor="inputCorrect">Correct Answer:</label>
                <select
                    id="inputCorrect"
                    className="border border-slate-500 rounded"
                    ref={refs.correct}
                    defaultValue={0}>
                    <option value={0}>1</option>
                    <option value={1}>2</option>
                    <option value={2}>3</option>
                </select>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full flex-grow-0">
                <button
                    onClick={() => {
                        add(refs);
                        resetForm(refs);
                    }}
                    className={"border w-full border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 text-lg font-semibold rounded-xl"}>
                    Save New
                </button>
                <button
                    disabled={updateDisabled}
                    onClick={() => {
                        update(refs);
                        resetForm(refs);
                    }}
                    className={"border w-full border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 disabled:bg-slate-300/20 disabled:text-slate-400 disabled:border-slate-400/50 text-lg font-semibold rounded-xl"}>
                    Update
                </button>
                <button

                    onClick={() => {

                        resetForm(refs);
                    }}
                    className={"border w-full border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 disabled:bg-slate-300/20 disabled:text-slate-400 disabled:border-slate-400/50 text-lg font-semibold rounded-xl"}>
                    Reset
                </button>
            </div>
        </div>

    )

}

export default InputForm;
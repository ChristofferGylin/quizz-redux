import { useQuizzes, addUser } from "../redux/quizzes";
import { useState } from "react";

const NewUser = ({ setNewUser }) => {

    const [duplicateUser, setDuplicateUser] = useState(false);
    const quizzes = useQuizzes();
    const [userNameInput, setUserNameInput] = useState('');
    let isSaveNewUserDisabled = true;

    if (userNameInput.length > 1) isSaveNewUserDisabled = false;

    return (
        <div className="flex justify-center items-center w-screen h-screen fixed top-0 left-0">
            <div onClick={() => setNewUser(false)} className="w-screen h-screen bg-slate-900/50 backdrop-blur-sm fixed top-0 left-0"></div>
            <div className="flex flex-col gap-6 border border-slate-400 bg-slate-200 rounded-lg p-6 text-slate-700 z-10 w-5/6 sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
                <h2 className="text-xl font-semibold border-b border-slate-400 pb-2">New Player</h2>
                <input className="border border-slate-500 rounded p-1" onChange={(e) => {
                    setUserNameInput(e.target.value);
                    setDuplicateUser(false);
                }} type="text" name="newUserName" id="newUserName" placeholder="Name" />
                <div className="flex flex-col gap-3">
                    <button
                        disabled={isSaveNewUserDisabled}
                        onClick={() => {

                            if (quizzes.users.filter(user => user.name === userNameInput).length > 0) {

                                setDuplicateUser(true);

                            } else {

                                addUser(userNameInput);
                                setUserNameInput('');
                                setNewUser(false);

                            }


                        }}
                        className={"border w-full border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 disabled:bg-slate-300/20 disabled:text-slate-400 disabled:border-slate-400/50 text-lg font-semibold rounded-xl"}>
                        Save
                    </button>
                    <button

                        onClick={() => setNewUser(false)}
                        className={"border w-full border-slate-400 bg-slate-300/50 py-2 px-5 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 disabled:bg-slate-300/20 disabled:text-slate-400 disabled:border-slate-400/50 text-lg font-semibold rounded-xl"}>
                        Cancel
                    </button>
                    <div className="h-4">{duplicateUser && <p className="text-red-600">Player name allready exist</p>}</div>

                </div>

            </div>
        </div>
    )

}

export default NewUser;
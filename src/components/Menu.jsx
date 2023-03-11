import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { resetQ, setUser } from "../redux/quizzes";
import { useQuizzes } from "../redux/quizzes";
import { useState } from "react";
import NewUser from "./NewUser";



const Menu = () => {

  const [newUser, setNewUser] = useState(false);
  const quizzes = useQuizzes();

  return (
    <div className="flex justify-between w-full bg-slate-700 border-b  border-slate-800 p-2 shadow shadow-slate-900/50">
      <Link to={"/"} onClick={resetQ}>
        <h1 className="text-5xl text-slate-300 hover:text-slate-200 m-3">
          Quiz Time
        </h1>
      </Link>
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <select onChange={(e) => setUser(e.target.value)} name="selectUser" id="selectUser" className="h-fit w-36 border border-slate-500 rounded" value={quizzes.activeUser}>
            {quizzes.users.map((user, index) => {
              return <option key={`user${index}`} value={index}>{user.name}</option>;
            })}
          </select>
          <button
            onClick={() => setNewUser(true)}
            className={"border w-full border-slate-400 bg-slate-200 py-1 px-3 text-slate-600 hover:text-slate-700 hover:bg-slate-300 hover:border-slate-500 disabled:bg-slate-300/20 disabled:text-slate-400 disabled:border-slate-400/50 text-md font-semibold rounded-xl"}>
            New Player
          </button>
        </div>

        <Link to={"/admin"} className='h-fit'>
          <IoMdSettings className="text-3xl text-slate-300 hover:text-slate-200" />
        </Link>
      </div>
      {newUser && <NewUser setNewUser={setNewUser} />}
    </div>
  );
};

export default Menu;

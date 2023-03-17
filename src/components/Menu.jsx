import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineUserAdd } from 'react-icons/ai';
import { GiPodium } from 'react-icons/gi';
import { BsFillPlayFill } from 'react-icons/bs';
import { resetQ, setUser } from "../redux/quizzes";
import { useQuizzes } from "../redux/quizzes";
import { useState } from "react";
import NewUser from "./NewUser";



const Menu = () => {

  const [newUser, setNewUser] = useState(false);
  const quizzes = useQuizzes();

  return (
    <div className="flex justify-between items-center bg-slate-700 border-b  border-slate-800 p-2 shadow shadow-slate-900/50">
      <Link to={"/"} onClick={resetQ}>
        <h1 className="text-5xl text-slate-300 hover:text-slate-200 m-3">
          Quiz Time
        </h1>
      </Link>
      <div className="flex flex-col gap-2">
        <div className="flex items-end h-fit gap-2">
          <Link to={"/"} onClick={resetQ}>
            <BsFillPlayFill className="text-3xl text-slate-300 hover:text-slate-200" />
          </Link>

          <Link to={"/leaderboard"}>
            <GiPodium className="text-3xl text-slate-300 hover:text-slate-200" />
          </Link>
          <AiOutlineUserAdd className="text-3xl text-slate-300 hover:text-slate-200"
            onClick={() => setNewUser(true)} />
          <Link to={"/admin"}>
            <IoMdSettings className="text-3xl text-slate-300 hover:text-slate-200" />
          </Link>
        </div>
        <select onChange={(e) => setUser(e.target.value)} name="selectUser" id="selectUser" className="h-fit w-36 border border-slate-500 rounded" value={quizzes.activeUser}>
          {quizzes.users.map((user, index) => {
            return <option key={`user${index}`} value={index}>{user.name}</option>;
          })}
        </select>
      </div>

      {newUser && <NewUser setNewUser={setNewUser} />}
    </div>
  );
};

export default Menu;

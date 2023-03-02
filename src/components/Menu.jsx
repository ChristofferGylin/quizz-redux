import { Link } from "react-router-dom";
import { IoMdSettings } from "react-icons/io";

const Menu = () => {
  return (
    <div className="flex justify-between w-full bg-slate-700 h-36 p-2">
      <Link to={"/"}>
        <h1 className="text-5xl text-slate-300">Quizz Time</h1>
      </Link>

      <Link to={"/admin"}>
        <IoMdSettings className="text-3xl text-slate-300" />
      </Link>
    </div>
  );
};

export default Menu;

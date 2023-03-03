import { useQuizzes, start } from "../redux/quizzes";
import Result from "./Result";
import Quizz from "./Quizz";

const Home = () => {

  const quizzes = useQuizzes();

  const renderApp = () => {
    if (quizzes.showResult) {
      return <Result />;
    } else if (quizzes.quizzStarted) {
      return <Quizz />;
    } else {
      return (
        <button
          onClick={start}
          className={"border border-slate-500 py-1 px-3 rounded-xl"}
        >
          Start Quizz
        </button>
      );
    }
  };

  return <div>{renderApp()}</div>;
};

export default Home;

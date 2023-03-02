import { useQuizzes } from "./redux/quizzes";
import Result from "./modules/Result";
import Quizz from "./modules/Quizz";
import { start } from "./redux/quizzes";

const Home = () => {
  const renderApp = () => {
    if (useQuizzes().showResult) {
      return <Result />;
    } else if (useQuizzes().quizzStarted) {
      return <Quizz />;
    } else {
      return (
        <button
          onClick={start}
          className={"border border-slate-500 py-1 px-3 rounded-xl"}
        >
          Starta Quizz
        </button>
      );
    }
  };

  return <div>{renderApp()}</div>;
};

export default Home;

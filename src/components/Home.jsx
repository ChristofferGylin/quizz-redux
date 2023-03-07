
import Result from "./Result";
import Quizz from "./Quizz";
import Start from "./Start";
import { useQuizzes } from "../redux/quizzes";

const Home = () => {

  const quizzes = useQuizzes();

  const renderApp = () => {
    if (quizzes.showResult) {
      return <Result />;
    } else if (quizzes.quizzStarted) {
      return <Quizz />;
    } else {
      return <Start />;
    }
  };

  return <div className="flex justify-center items-center h-full">{renderApp()}</div>;
};

export default Home;

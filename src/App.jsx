import { useQuizzes } from './redux/quizzes';
import Result from './modules/Result';
import Quizz from './modules/Quizz';

function App() {


  const renderApp = () => {

    if (useQuizzes().showResult) {
      console.log('showResult')
      return <Result />;
    } else if (useQuizzes().quizzStarted) {
      console.log('quizzStarted')
      return <Quizz />;
    } else {
      console.log(useQuizzes());
      return <button>Starta Quizz</button>
    }

  }

  return (
    <div className="App">
      {renderApp()}
    </div>
  )
}

export default App

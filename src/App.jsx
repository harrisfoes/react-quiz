import "./App.css";
import "./index.css";
import QuizApp from "./components/quizApp";
import NerdyForm from "./components/nerdyForm";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [quizTime, setQuizTime] = useState(false);

  const getQuizTime = (flag) => {
    console.log(flag, "quiz time");
    setQuizTime(flag);
  };

  return (
    <div className="flex flex-col justify-start">
      <h1 className="text-3xl font-bold mb-8">Take the Nerdy Quiz</h1>

      <div className="border-2 p-8 rounded-2xl shadow-xl max-w-3xl">
        {!quizTime ? (
          <NerdyForm
            getDifficulty={setDifficulty}
            getCategory={setCategory}
            getQuizTime={getQuizTime}
          />
        ) : (
          <QuizApp
            category={category}
            difficulty={difficulty}
            setQuizTime={setQuizTime}
          />
        )}
      </div>
    </div>
  );
}

export default App;

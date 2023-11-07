import Answer from "./answer";
import { useState } from "react";

const NerdyForm = ({ getCategory, getDifficulty, getQuizTime }) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [difficultySelected, setDifficultySelected] = useState("");

  const handleCategoryChange = (event) => {
    console.log(event.target.id, "cats");
    setCategorySelected(event.target.id);
  };

  const handleDifficultyChange = (event) => {
    console.log(event.target.id, "diffs");
    setDifficultySelected(event.target.id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(categorySelected, "insubmit");
    console.log(difficultySelected, "insubmit");
    getCategory(categorySelected);
    getDifficulty(difficultySelected);
    getQuizTime(true);
  };

  const category = [
    { name: "Books", id: 10 },
    { name: "Film", id: 11 },
    { name: "Music", id: 12 },
    { name: "TV", id: 14 },
    { name: "Video Games", id: 15 },
    { name: "Anime and Manga", id: 31 },
  ];

  const difficulty = [
    { name: "Easy", id: "easy" },
    { name: "Medium", id: "medium" },
    { name: "Hard", id: "hard" },
  ];

  return (
    <div className="nerdy-form">
      <form onSubmit={handleSubmit}>
        <h2 className="text-xl p-4">Select a Nerdy Category</h2>
        {category.map((cats) => (
          <Answer
            key={cats.id}
            answerOption={cats.name}
            id={cats.id}
            handleChange={handleCategoryChange}
            name="category-select"
          />
        ))}

        <h2 className="text-xl p-4">Select Difficulty</h2>
        {difficulty.map((diff) => (
          <Answer
            key={diff.id}
            answerOption={diff.name}
            id={diff.id}
            handleChange={handleDifficultyChange}
            name="difficulty-select"
          />
        ))}
        <button className="mt-4 inline-block rounded bg-blue-400 text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
          Submit
        </button>
      </form>
    </div>
  );
};
export default NerdyForm;

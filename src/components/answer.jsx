const Answer = ({ answerOption, id, handleChange, name }) => {
  return (
    <div className="answer-text p-1">
      <input
        type="radio"
        name={name}
        id={id}
        onChange={handleChange}
        value={answerOption}
        className="hidden peer"
      />
      <label
        htmlFor={id}
        className="text-sm inline-flex items-center justify-between w-full p-4 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        {answerOption}
      </label>
    </div>
  );
};

export default Answer;

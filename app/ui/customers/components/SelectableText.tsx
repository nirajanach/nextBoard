

interface SelectableTextOption {
  options: string[];
  correctAnswer: string;
}

const SelectableText: React.FC<SelectableTextOption> = ({ options, correctAnswer }) => {
  return (
    <select className="inline-block w-half rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 mr-2">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
      <option value="" disabled selected hidden>
        {correctAnswer}
      </option>
    </select>
  );
};

export default SelectableText;

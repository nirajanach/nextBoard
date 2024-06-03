// HighlightedText.tsx


interface HighlightedTextProps {
  text: string;
  isCorrect: boolean;
  isStrikethrough?: boolean;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({ text, isCorrect, isStrikethrough = false }) => {
  const baseClasses = 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ml-2 mr-2';
  const correctClasses = 'bg-green-50 text-green-700 ring-green-600/20';
  const incorrectClasses = 'bg-red-50 text-red-700 ring-red-600/10';
  const strikethroughClass = isStrikethrough ? 'line-through' : '';

  return (
    <span className={`${baseClasses} ${isCorrect ? correctClasses : incorrectClasses} ${strikethroughClass}`}>
      {text}
    </span>
  );
};

export default HighlightedText;

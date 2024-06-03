import React from 'react';
import { ParagraphData } from '@/app/lib/definitions';
import HighlightedText from './HighlightedText';

interface ParagraphWithSelectableTextProps {
  data: ParagraphData;
}

const ParagraphAnswers: React.FC<ParagraphWithSelectableTextProps> = ({ data }) => {
  const { paragraph, options, correctAnswers } = data;

  // Split the paragraph by the placeholder "__"
  const parts = paragraph.split("__");

  return (
    <p className="text-justify">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < options.length && (
            <>
              <HighlightedText text={correctAnswers[index]} isCorrect={true} />
              <HighlightedText text={correctAnswers[index]} isCorrect={false} isStrikethrough={true} />
            </>
          )}
        </React.Fragment>
      ))}
    </p>
  );
};

export default ParagraphAnswers;

import React from 'react';
import SelectableText from './SelectableText';
import { ParagraphData } from '@/app/lib/definitions';



interface ParagraphWithSelectableTextProps {
  data: ParagraphData;
}

const ParagraphWithSelectableText: React.FC<ParagraphWithSelectableTextProps> = ({ data }) => {
  const { paragraph, options, correctAnswers } = data;

  // Split the paragraph by the placeholder "__"
  const parts = paragraph.split("__");

  return (
    <p className="text-justify">
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < options.length && (
            <SelectableText options={options[index]} correctAnswer={correctAnswers[index]} />
          )}
        </React.Fragment>
      ))}
    <br/>
    <br/>

    </p>
  );
};

export default ParagraphWithSelectableText;

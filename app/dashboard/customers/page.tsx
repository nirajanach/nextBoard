'use strict'; // Corrected import statement

import { ParagraphData } from '@/app/lib/definitions';
import ParagraphWithSelectableText from '@/app/ui/customers/components/ParagraphWithSelectableText';
import { Button } from '@nextui-org/react';
import { paragraph1 } from '@/app/lib/paragraphData'; // Removed unused import
import React from 'react';
import ParagraphAnswers from '@/app/ui/customers/components/ParagraphAnswers';

const MainContent: React.FC = () => {
  const paragraphs: ParagraphData[] = [paragraph1];

  return (
    <div>
      {paragraphs.map((paragraph) => (
        <div key={paragraph.id}>
          <ParagraphWithSelectableText data={paragraph} />
          <ParagraphAnswers data={paragraph} />
        </div>
      ))}
      <br />
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
        Click here
      </Button>
    </div>
  );
};

export default MainContent;

'use client'
import { ParagraphData } from '@/app/lib/definitions';
import ParagraphWithSelectableText from '@/app/ui/customers/components/ParagraphWithSelectableText';
import { Button } from '@nextui-org/react';
import { paragraph1, paragraph2 } from '@/app/lib/paragraphData';
import React from 'react';


const MainContent: React.FC = () => {
  const paragraphs: ParagraphData[] = [paragraph1, paragraph2];

  return (
    <div>
      {paragraphs.map((paragraph) => (
        <ParagraphWithSelectableText key={paragraph.id} data={paragraph} />
      ))}
<br/>
  <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
    Click here
  </Button>
    </div>
  );
};

export default MainContent;

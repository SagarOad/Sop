import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';
import QuizAccordion from './QuizAccordion';
import ExamAccordion from './ExamAccordion';
import { useState } from 'react';

const MyRecords = () => {
  const initialTab = <QuizAccordion />;
  const secondTab = <ExamAccordion />;
  const [initialContent, setInitialContent] = useState(initialTab);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Records" />

      <div className="mx-3 bg-[#F4F4F4]">
        <div className="flex w-[50%] justify-between px-8 py-6">
          <button
            className={`${
              initialContent == initialTab ? 'bg-[#292A33]' : 'bg-white'
            } 
                rounded-full py-3 px-4 text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
            type="button"
            onClick={() => {
              setInitialContent(initialTab);
            }}
          >
            Program Registration
          </button>
          <button
            className={`${initialContent == secondTab ? 'bg-[#292A33]' : 'bg-white'} 
                rounded-full py-3 px-4 text-[18px] text-[#838383] focus:bg-[#292A33] focus:text-white`}
            type="button"
            onClick={() => {
              setInitialContent(secondTab);
            }}
          >
            Challan
          </button>
        </div>
        <div>{initialContent}</div>
      </div>
    </DefaultLayout>
  );
};

export default MyRecords;

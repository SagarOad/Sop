import { useState } from 'react';
import Data from '../AccordianData';

const QuizAccordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <div className=''>
      <div className="accordion px-[12px] ">
        {Data.map((item, i) => (
          <div className="bg-[#E7E7E7] dark:bg-boxdark border dark:border-strokedark">
            <div className="title flex items-center justify-between px-8 py-4">
              <h1
                onClick={() => toggle(i)}
                className="cursor-pointer rounded-md bg-[#86ACF5] p-3 text-[21px] text-white"
              >
                {item.header}
              </h1>
              <h2 className="text-[21px] text-[#AEAEAE]">{item.date}</h2>
            </div>
            <div className={selected == i ? 'content show' : 'content'}>
              <div className="flex justify-between bg-[#292A33] p-8">
                <div className="text-[18px] text-[#AEAEAE]">
                  <p className="mb-4">Project</p>
                  <p className="mb-4">A2586</p>
                </div>
                <div className="text-[18px] text-[#AEAEAE]">
                  <p className="mb-4">Project</p>
                  <p className="mb-4">A2586</p>
                </div>
                <div className="text-[18px] text-[#AEAEAE]">
                  <p className="mb-4">Project</p>
                  <p className="mb-4">A2586</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizAccordion;

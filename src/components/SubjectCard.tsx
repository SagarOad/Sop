import React from 'react';

interface Props {
    title: string;
    subject: string;
}

const SubjectCard = ({ title, subject}: Props) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-3">
      <div>
        <h1 className='font-bold text-[32px] my-3'>{subject}</h1>
        <h1 className='text-[18px]'>{title}</h1>
      </div>
    </div>
  );
};

export default SubjectCard;

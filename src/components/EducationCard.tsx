import React from 'react';

interface Props {
  heading: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
}

const EducationCard = ({ heading, title1, title2, title3, title4 }: Props) => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="bg-[#00A651] p-7.5 text-center">
        <h1 className="text-[32px] font-bold text-white dark:text-white">
          {heading}
        </h1>
        ''
      </div>

      <div className="p-7.5 text-center text-[20px] dark:text-white">
        <h3 className="my-3">{title1}</h3>
        <h3 className="my-3">{title2}</h3>
        <h3 className="my-3">{title3}</h3>
        <h3 className="my-3">{title4}</h3>
        <button className="mt-4 bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white">
          Edit
        </button>
      </div>
    </div>
  );
};

export default EducationCard;

import Breadcrumb from './Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import EducationCard from './EducationCard';
import Data from '../EducationCardData';

const EducationHistory = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Education" />
      <div className="flex justify-end">
        <button className="mt-4 bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white">
          Add
        </button>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
        {Data.map((data) => (
          <EducationCard
            key={data.id}
            heading={data.heading}
            title1={data.result}
            title2={data.obtainedMarks}
            title3={data.passingYear}
            title4={data.result}
          />
        ))}
      </div>
    </DefaultLayout>
  );
};

export default EducationHistory;

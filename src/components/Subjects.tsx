import SubjectCard from "./SubjectCard";
import SubjectsData from "../SubjectsData";

const Subjects = () => {
  return (
    <div className="mt-12">
      <div className="bg-green py-10">
        <h1 className="text-center text-white leading-[32px] text-[26px] md:text-[32px] font-medium">SUBJECTS FOR SOP COMPETETION</h1>
      </div>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
        {SubjectsData.map((data) => (
          <SubjectCard key={data.id} title={data.title} img={data.img} />
        ))}
      </div>
      {/* <Timer /> */}
    </div>
  );
};

export default Subjects;
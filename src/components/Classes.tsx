
interface Props {
  img: string;
  standard: string;
  subjects: string;
  chapter: string;
  quizes: string;
}

const Classes = ({ img, standard, subjects, chapter, quizes }: Props) => {
  return (
    <div className="col-span-12 h-[250px] pb-4 flex items-center justify-center rounded-sm border border-stroke shadow-default  xl:col-span-4">
      <div className=' flex flex-col justify-center items-center'>
        <img className='w-[150px] rounded-full bg-[#ea476f]' src={img} />
        <div>
        <h1 className="text-[30px] text-black mt-4">{standard}</h1>
        <h1 className="text-[24px] text-black mt-4">{subjects}</h1>
        <h1 className="text-[24px] text-black mt-4">{chapter}</h1>
        <h1 className="text-[24px] text-black mt-4">{quizes}</h1>
        </div>
      </div>
    </div>
  );
};

export default Classes;

interface Props {
  title: string;
  img: any;
}

const SubjectCard = ({ title, img }: Props) => {
  return (
    <div className="col-span-12 flex h-[250px] rounded-[16px] items-center justify-center border-6 border-white hover:bg-green group-hover:text-white bg-[#D9D9D9]  p-6 px-5 pt-7.5 pb-5 sm:px-7.5 xl:col-span-3">
      <div>
        <div className="bg-white mx-auto w-[100px] h-[100px] rounded-full flex justify-center items-center">
          <img src={img} alt="subject image" width={50} height={50} />
        </div>
        <h1 className="group text-center text-[20px] mt-2 font-medium text-black">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SubjectCard;
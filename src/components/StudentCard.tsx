import userImg from "../../src/assets/Rectangle 16.png"

const StudentCard = () => {
  return (
    <div className="col-span-12 bg-white shadow-default xl:col-span-4">
      <div className="scardbg bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center h-auto py-36">
        <img src={userImg} alt="user img" className="w-[100px]" />
        <h1 className="text-[18px] text-black text-center">Shahbaz Ali</h1>
       <div className="my-3">
        <h1 className="text-[18px] text-black text-center font-medium">SOP-1A-131-1170/21</h1>
        <hr className="bg-black h-[3px] my-1" />
        <h1 className="text-center font-medium">+923243219032</h1>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;

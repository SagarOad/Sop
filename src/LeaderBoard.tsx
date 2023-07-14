import Breadcrumb from '../src/components/Breadcrumb';
import DefaultLayout from '../src/layout/DefaultLayout';

const LeaderBoard = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Leaderboard" />
      <div className="py-8">
        <div className="flex pb-6">
          <div className="flex w-[250px] items-center justify-center">
            <h1 className="text-[20px] font-medium text-[#848484]">
              Program Name
            </h1>
          </div>

          <div className="w-[300px]">
            <input
              placeholder="Program Name"
              className="w-full rounded-lg border-2 border-[#CCCCCC] bg-transparent py-3 px-5 outline-none transition"
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex w-[250px] items-center justify-center">
            <h1 className="text-[20px] font-medium text-[#848484]">
              Program Name
            </h1>
          </div>

          <div className="w-[300px]">
            <select className="w-full rounded-lg border-2 border-[#CCCCCC] bg-transparent py-3 px-5 outline-none transition">
              <option value="">Phase Name</option>
              <option value="">Hacking</option>
              <option value="">Web Development</option>
              <option value="">Graphic Desgining</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-3 flex justify-between bg-[#04BE5B] py-6 px-12 text-[20px] font-medium text-white">
        <h1>Position</h1>
        <h1>Student Name</h1>
        <h1>District</h1>
      </div>

      <div className="mx-3 mb-1 flex justify-between border-b border-[#E0E0E0] px-12 py-6 text-[18px] font-medium text-black">
        <div className="text-[#848484] flex">
            <span className='bg-[#0073C6] flex justify-center items-center px-3 text-[22px] mr-5 text-white'>JA</span> 
        <div>        
          <h1 className="text-center text-[21px] text-[#0073C6]">
            Jenna Davis
          </h1>
          <p>Project Lead</p>
          </div>
        </div>
        <div>
          <div className="text-[#848484]">
            <h1 className="mr-[82px] text-[21px]">Ecommerce Website</h1>
            <p>Cost: $215</p>
          </div>
        </div>
        <div className="text-[#848484]">
          <h1 className="text-[21px]">Karachi</h1>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default LeaderBoard;

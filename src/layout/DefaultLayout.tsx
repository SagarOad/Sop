import { ReactNode, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { IoMdNotifications } from "react-icons/io";
import { HiFlag } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { MdSettings } from "react-icons/md";
import { AiOutlinePoweroff } from "react-icons/ai";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white  text-bodydark">
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className="flex h-screen overflow-hidden">
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* <!-- ===== Header Start ===== --> */}
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className="mx-auto max-w-screen-2xl ">
              {/* p-4 md:p-6 2xl:p-10 */}
              {children}
            </div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
        
          <div className="border-l-4 border-[#292A33] sm:w-[6%]">
            <div className="flex flex-col items-center justify-center">
              <IoMdNotifications className="mt-8 text-black-2 text-[28px]" />
              <HiFlag className="mt-8 text-black-2 text-[28px]" />
              <SlCalender className="mt-8 text-black-2 text-[28px]" />
              <MdSettings className="mt-8 text-black-2 text-[28px]" />
              <AiOutlinePoweroff className="mt-8 text-black-2 text-[28px]" />
            </div>
        
        </div>
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </div>
  );
};

export default DefaultLayout;

import { ReactNode, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { IoMdNotifications } from 'react-icons/io';
import { HiFlag } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';
import { MdSettings } from 'react-icons/md';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { NavLink, useLocation } from 'react-router-dom';
import NotificationBar from '../components/NotificationBar';
import NotificationPopup from '../components/NotificationPopup';

import NotificationPage from '../pages/NotificationPage';
import Calender from '../components/Calender';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationCard, setNotificationCard] = useState();

  return (
    <>
      {/* <Routes>
      <Route path='/notifications-page' element={<NotificationPage />} />
    </Routes> */}

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
              <div className="tooltip relative p-5">
                <NavLink to="/notifications-page">
                  <IoMdNotifications className="mt-8 text-[28px] text-black-2" />
                </NavLink>
                <div className="tooltiptext">
                  <NotificationPopup />
                </div>
              </div>

              <div className="relative p-5">
                <label className="relative mt-8 inline-flex cursor-pointer items-center border-black border-4 rounded-full">
                  <input type="checkbox" value="" className="peer sr-only select-none outline-none ring-0" />
                  <div className="bg-gray-200 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 after:border-gray-300 dark:border-gray-600 peer-checked:bg-blue-600 peer h-6 w-11 rounded-full after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:bg-black after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4"></div>
                </label>
              </div>

              <div className="tooltip2 relative p-5">
                <SlCalender className="mt-8 text-[28px] text-black-2" />

                <div className='tooltiptext2'>
                  <Calender />
                </div>
              </div>

              <div className="relative p-5">
                <NavLink to="/profile">
                  <MdSettings className="mt-8 text-[28px] text-black-2" />
                </NavLink>
              </div>

              <div className="relative p-5">
                <AiOutlinePoweroff className="mt-8 text-[28px] text-black-2" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ===== Page Wrapper End ===== --> */}
      </div>
    </>
  );
};

export default DefaultLayout;

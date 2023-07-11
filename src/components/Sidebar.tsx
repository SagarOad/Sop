import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/image 2.jpg';
import SidebarLinkGroup from './SidebarLinkGroup';
import userImg from '../assets/Rectangle 16.png';
import icon from '../assets/icon1.png';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-boxdark  p-2 duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex h-[83px] items-center justify-start bg-white">
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 sm:hidden"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <a href="#" className="ml-2 flex md:mr-24">
          <img src={Logo} className="mr-3 h-8" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black sm:text-2xl">
            SOP
          </span>
        </a>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="">
          {/* <!-- Menu Group --> */}
          <div>
            <div className="flex h-[83px] items-center justify-start bg-mainBlack px-2">
              <div>
                <img className="mr-2" src={userImg} alt="user image" />
              </div>
              <div>
                <h1 className="text-[24px] text-white">Shahbaz</h1>
                <p className="text-[16px] text-white">Student</p>
              </div>
            </div>

            <ul className="space-y-2 bg-white font-medium">
              <li>
                <NavLink
                  to="/mainpage"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('mainpage') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('profile') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myeducation/educationhistory"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('educationhistory') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Education
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/notifications-page"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('notifications-page') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Notifications
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myeducation/myskills"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('myskills') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Skills and Certificates
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/myeducation/mydocuments"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('mydocuments') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Documents
                </NavLink>
              </li>


              <li>
                <NavLink
                  to="/myeducation/myrecords"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('myrecords') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Records
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myeducation/myexams"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('myexams') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Exams
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myeducation/myquizes"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('myquizes') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Quizes
                </NavLink>
              </li>
              {/* <!-- Menu Item My Education --> */}

              {/* <!-- Menu Item Profile --> */}

              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Forms --> */}

              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Tables --> */}

              {/* <!-- Menu Item Settings --> */}
              <li>
                <NavLink
                  to="/settings"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white  ${
                    pathname.includes('settings') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  Settings
                </NavLink>
              </li>
              {/* <!-- Menu Item Settings --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;

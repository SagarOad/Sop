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
      <div className="flex h-[83px] items-center pl-2 pr-6 justify-between bg-white dark:bg-boxdark">
    
      <a href="#" className="ml-2 flex md:mr-24">
         <div className='bg-white p-1 mr-3'>
           <img src={Logo} className=" h-8" alt="Logo" />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white sm:text-2xl">
            SOP
          </span>
        </a>
    
      <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
        
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

            <ul className="space-y-2 bg-white dark:bg-boxdark font-medium">
              {/* <li>
                <NavLink
                  to="/mainpage"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('mainpage') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" />
                  Dashboard
                </NavLink>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('profile') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Profile
                </NavLink>
              </li> */}



<li>
                <NavLink
                  to="/mainpage"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('mainpage') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" />
                  Dashboard
                </NavLink>

                </li>

              <li>
                <NavLink
                  to="/registrationtabs"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('registrationtabs') && 'bg-[#4A4A4A] text-white '
                  }`}
                >
                  <img src={icon} alt="img" />
                  Program Registration
                </NavLink>

                </li>
                <li>
                <NavLink
                  to="/profile"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
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
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
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
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
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
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
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
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
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
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('myrecords') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Records
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/myeducation/myexams"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('myexams') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  My Exams
                </NavLink>
              </li> */}
              <li>
                <NavLink
                  to="/myeducation/myquizes"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
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
                  to="/samplepaper"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('/samplepaper') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  Sample paper
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/leaderboard"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('/leaderboard') &&
                    'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  Leaderboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('/contact') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/faq"
                  className={`group relative flex items-center gap-2.5  py-6 px-6 font-medium text-black dark:text-white duration-300 ease-in-out hover:bg-[#4A4A4A] hover:text-white dark:border-b  ${
                    pathname.includes('/faq') && 'bg-[#4A4A4A] text-white'
                  }`}
                >
                  <img src={icon} alt="img" />
                  FAQs
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

import { NavLink, useLocation } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';


interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="sticky z-99 hidden lg:block top-0 w-full drop-shadow-1 dark:drop-shadow-none px-3 border dark:border-strokedark bg-[#292A33] p-4 md:p-6 2xl:p-6  flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
     
      <h2 className='text-title-md2 font-thin text-white'>Student Profile Management</h2>
      
      <div className='flex mt-3 justify-between items-center'>
      <h2 className="text-title-md2 flex font-thin text-[#FFE00C]">
        <span className='text-green flex mr-2'><AiFillHome className="mr-2" />SOP / </span>{pageName}
      </h2>

  <div>
  <NavLink
          to="/auth/signin"
          className={`flex items-center justify-center  px-5 py-2 text-[17px] font-medium text-white
          ${
            pathname.includes('auth/signin') && 'bg-graydark dark:bg-meta-4'
          }`}
        >
          <BsFillArrowRightSquareFill className="text-[#00A651] rounded-lg bg-white text-[34px]" />
        </NavLink>
  </div>
  </div>

    </div>
  );
};

export default Breadcrumb;

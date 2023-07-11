import { NavLink, useLocation } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';

interface BreadcrumbProps {
  pageName: string;
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="mx-3 bg-[#292A33] p-4 md:p-6 2xl:p-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-white">
        {pageName}
      </h2>

  <div>
  <NavLink
          to="/auth/signin"
          className={`mt-4 flex items-center justify-center  px-5 py-2 text-[17px] font-medium text-white
          ${
            pathname.includes('auth/signin') && 'bg-graydark dark:bg-meta-4'
          }`}
        >
          <BsFillArrowRightSquareFill className="text-[#00A651] rounded-lg bg-white text-[34px]" />
        </NavLink>
  </div>

    </div>
  );
};

export default Breadcrumb;

import DefaultLayout from './layout/DefaultLayout';
import Breadcrumb from './components/Breadcrumb';
import Classes from './components/Classes';
import ClassData from './ClassData';
import { NavLink, useLocation } from 'react-router-dom';

const MyQuizes = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Quizes" />
      <div className="p-4 md:p-6 2xl:p-10">
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
          {ClassData.map((data) => (
            <Classes
              key={data.id}
              img={data.img}
              standard={data.class}
              subjects=""
              chapter=""
              quizes=''
            />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <NavLink
            to="/choosesubject"
            className={`mt-4 items-center justify-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white
          ${
            pathname.includes('choosesubject') && 'bg-graydark dark:bg-meta-4'
          }`}
          >
            Next
          </NavLink>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyQuizes;

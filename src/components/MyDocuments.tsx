import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import DocumentCard from './DocumentCard';

import { NavLink, useLocation } from 'react-router-dom';


const MyDocuments = () => {

  const location = useLocation();
  const { pathname } = location;

 
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Documents" />
      <div className="flex justify-end">
        <NavLink
          to="/documentupload"
          className={`mt-4 flex items-center justify-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white
          ${
            pathname.includes('documentupload') && 'bg-graydark dark:bg-meta-4'
          }`}
        >
          Upload
        </NavLink>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
        <DocumentCard />
      </div>
    </DefaultLayout>
  );
};

export default MyDocuments;


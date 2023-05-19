import React from 'react';
import BrandOne from '../images/brand/brand-01.svg';
import BrandTwo from '../images/brand/brand-02.svg';
import BrandThree from '../images/brand/brand-03.svg';
import BrandFour from '../images/brand/brand-04.svg';
import BrandFive from '../images/brand/brand-05.svg';
import { MdNotificationsActive } from 'react-icons/md';

const NotificationBar = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
     <div>
      <div className="flex flex-col">
        <div className="flex border-b border-stroke dark:border-strokedark">
          <div className="flex items-center gap-03 p-2.5 xl:p-5">
            <div className="flex-shrink-0">
              <MdNotificationsActive className="text-[40px] text-[#00A651]" />
            </div>
          </div>

          <div className="grid-cols-10 p-2.5 xl:p-5">
            <h2 className="text-black text-[20px] font-bold dark:text-white">IMPORTANT NOTICE</h2>
            <p className="text-black text-[18px] mt-1 dark:text-white">
              Dear Student, Learning material can be uploaded on Monday, Sorry
              for inconvenience
            </p>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default NotificationBar;

import { MdNotifications } from 'react-icons/md';

const NotificationBar = () => {
  return (
    <div className="col-span-12 rounded-sm border dark:border-strokedark dark:bg-boxdark bg-[#faebd7] p-2 shadow-default  xl:col-span-8">
      <div className="bg-green py-6">
        <h1 className="text-white text-[24px] leading-[30px] md:text-[38px] text-center">MY NOTIFICATIONS</h1>
      </div>

      <div className="mb-2 flex mt-6">
        <div className="mr-2 flex items-center justify-center text-[38px]">
          <MdNotifications className="text-green text-[38px] md:text-[48px]" />
        </div>
        <div>
          <h1 className="w-[165px] bg-meta-6 text-[14px] md:text-[16px] font-medium text-black">
            IMPORTANT NOTICE
          </h1>
          <p className="mt-1 text-[13px] md:text-[16px] text-black dark:text-white">
            Dear Student, Learning material can be uploaded on Monday, Sorry for
            inconvenience
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;

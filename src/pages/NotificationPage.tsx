import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import { MdNotificationsActive } from 'react-icons/md';
import Data from '../NotificationData';

const NotificationPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Notifications" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div className="w-full max-w-full rounded-sm shadow-default dark:border-strokedark dark:bg-boxdark">
        {Data.map((data) => (
          <div
            key={data.id}
            className="col-span-12 my-2 rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8"
          >
            <div>
              <div className="flex flex-col">
                <div className="flex border-b border-stroke dark:border-strokedark">
                  <div className="gap-03 flex items-center p-2.5 xl:p-5">
                    <div className="flex-shrink-0">
                      <MdNotificationsActive className="text-[40px] text-[#00A651]" />
                    </div>
                  </div>

                  <div className="grid-cols-10 p-2.5 xl:p-5">
                    <h2 className="text-[20px] font-bold text-black dark:text-white">
                      {data.title}
                    </h2>
                    <p className="mt-1 text-[18px] text-black dark:text-white">
                      {data.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </DefaultLayout>
  );
};

export default NotificationPage;

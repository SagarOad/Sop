import Data from '../NotificationData';
import {MdNotificationsActive} from 'react-icons/md'

const notificationPopup = () => {
  return (
    <div className='z-10'>
      <div className="notifyPopupContainer w-[500px] border-4 rounded-sm  bg-white h-[250px] overflow-scroll max-w-full p-2 shadow-default">
        {Data.map((data) => (
          <div
            key={data.id}
            className="col-span-12 rounded-sm border-b border-stroke bg-white shadow-default xl:col-span-8"
          >
            <div>
              <div className="flex flex-col">
                <div className="flex border-stroke">
                  <div className=" flex items-center p-2.5">
                    <div className="flex-shrink-0">
                      <MdNotificationsActive className="text-[32px] text-[#00A651]" />
                    </div>
                  </div>

                  <div className="grid-cols-10 text-left p-2.5">
                    <h2 className="text-[14px] font-bold text-black">
                      {data.title}
                    </h2>
                    <p className="text-[14px] text-black">
                      {data.para}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default notificationPopup;

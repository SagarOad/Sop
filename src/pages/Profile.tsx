import Breadcrumb from '../components/Breadcrumb';
import CoverOne from '../imgs/cover/cover-01.png';
import userImg from "../assets/Rectangle 123.png";
import DefaultLayout from '../layout/DefaultLayout';

const Profile = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profile" />
      <div>
      <div className="p-4 md:p-6 dark:border-strokedark dark:bg-boxdark grid grid-cols-12 gap-4 md:gap-6 2xl:gap-2">
        <div className="col-span-12 bg-white dark:border-strokedark dark:bg-boxdark  p-7.5 xl:col-span-4">
          {/* Student Card Starts Here */}
          <div className="mx-auto items-center justify-center">
            <div className="relative z-30 mx-auto h-30 w-full max-w-30 flex justify-center items-center rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <img
                  className="w-[160px] rounded-full"
                  src={userImg}
                  alt="user img"
                />
              </div>
            </div>

            <h3 className="font-medium mt-6 dark:text-white text-[22px]">PERSONAL INFO</h3>
            <div className="mt-2">
              <div className="mb-4.5">
                <label className=" block dark:text-white">Date of Birth</label>
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="w-full py-3 px-6 bg-[#EEEEEE] dark:border-white dark:bg-boxdark border-2 border-[#CCCCCC] outline-none border-l-8 border-l-red rounded-md text-[#848484]"
                />
              </div>

              <div className="mt-5">
                <label className=" block dark:text-white">Gender</label>
                <div className="mt-1 flex justify-between items-center border-2 dark:border-white dark:bg-boxdark border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <label className=" block  dark:text-white">
                  Religion
                </label>
                <div className="mt-1 flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white dark:border-white dark:bg-boxdark outline-none">
                  <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                    <option value="">Islam</option>
                    <option value="">Hinduism</option>
                    <option value="">Christian</option>
                    <option value="">Zorostian</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Student Card ends here */}
        </div>
        <div className="col-span-12 bg-white dark:border-strokedark dark:bg-boxdark p-2  xl:col-span-4">
          <div className="pb-2 px-6.5">
            <h3 className="font-medium dark:text-white text-[22px]">
              GENERAL INFO
            </h3>
          </div>
          <form action="#">
            <div className="">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-full mb-2">
                  <label className="block  dark:text-white">
                    Father Name
                  </label>
                  <div className="mt-1 border-l-8 flex justify-between dark:border-white dark:bg-boxdark items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block  dark:text-white">
                  Father Nic
                </label>
                <div className="mt-1 border-l-8 flex dark:border-white dark:bg-boxdark justify-between items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <input
                    type="text"
                    placeholder="Father Nic"
                    className="w-full  bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className=" mb-2 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2">
                  <label className="block dark:text-white">
                    Father Occupation
                  </label>
                  <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Father Ocupation"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>

                <div className="w-full xl:w-1/2">
                  <label className="block  dark:text-white">
                    Father Designation
                  </label>
                  <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center  border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Father Designation"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block dark:text-white">
                  Father's Mobile Number
                </label>
                <div className="mt-1 border-l-8 flex dark:border-white dark:bg-boxdark justify-between items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <input
                    type="text"
                    placeholder="Father's Mobile Number"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className=" block  dark:text-white">
                  Father's Department
                </label>
                <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <input
                    type="text"
                    placeholder="Father's Department"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block dark:text-white">
                  Mother Name
                </label>
                <div className="mt-1 border-l-8 flex justify-between dark:border-white dark:bg-boxdark items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <input
                    type="text"
                    placeholder="Mother Name"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block dark:text-white">
                  Mother CNIC
                </label>
                <div className="mt-1 border-l-8 flex justify-between dark:border-white dark:bg-boxdark items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <input
                    type="text"
                    placeholder="Mother Name"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2 mb-2">
                  <label className="block dark:text-white">
                    Mother's Occupation
                  </label>
                  <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Mother's Ocupation"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>

                <div className="w-full xl:w-1/2 mb-2">
                  <label className="block dark:text-white">
                    Mother's Designation
                  </label>
                  <div className="mt-1  flex justify-between dark:border-white dark:bg-boxdark items-center  border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Mother's Designation"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* form 2 starts here */}
        <div className="col-span-12 bg-white dark:border-strokedark dark:bg-boxdark p-2  xl:col-span-4">
          <div className="pb-2 px-6.5">
            <h3 className="font-medium dark:text-white text-[22px]">
              ADDRESS INFO
            </h3>
          </div>
          <form action="#">
            <div className="">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="mb-4.5">
                  <label className="block dark:text-white">
                    Village
                  </label>
                  <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Village"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>

                <div className="mb-4.5">
                  <label className="block dark:text-white">
                    Town
                  </label>
                  <div className="mt-1  flex justify-between dark:border-white dark:bg-boxdark items-center  border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                    <input
                      type="text"
                      placeholder="Town"
                      className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-4.5">
                <label className=" block dark:text-white">
                  Province
                </label>
                <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                    <option value="">Select Your Province</option>
                    <option value="">Sindh</option>
                    <option value="">Punjab</option>
                    <option value="">Balochistan</option>
                    <option value="">KPK</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4.5">
                <label className=" block dark:text-white">
                  District
                </label>
                <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                    <option value="">Select Your District</option>
                    <option value="">Sindh</option>
                    <option value="">Punjab</option>
                    <option value="">Balochistan</option>
                    <option value="">KPK</option>
                  </select>
                  <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                          fill=""
                        ></path>
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block dark:text-white">
                  Postal Code
                </label>
                <div className="mt-1 flex justify-between dark:border-white dark:bg-boxdark items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block dark:text-white">
                  Street
                </label>
                <div className="mt-1 border-l-8 flex dark:border-white dark:bg-boxdark justify-between items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <textarea
                    rows={3}
                    placeholder="Street"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>

              <div className="mb-4.5">
                <label className="block dark:text-white">
                  House No
                </label>
                <div className="mt-1 border-l-8 flex dark:border-white dark:bg-boxdark justify-between items-center border-l-red border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                  <textarea
                    rows={3}
                    placeholder="House"
                    className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* form 2 ends here */}
      </div>
      <div className="flex dark:bg-boxdark justify-center items-center pb-6">
        <button className="bg-green text-white text-[18px] py-4 px-12 rounded-xl">
          Submit
        </button>
      </div>
      </div>
    </DefaultLayout>
  );
};

export default Profile;

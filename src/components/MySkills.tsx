import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import EducationCard from './EducationCard';
import { useState } from 'react';
import Data from '../MySkillsData';

const MySkills = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Skills and Certificates" />
      <div className="p-4 md:p-6 2xl:p-10">
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 rounded-lg bg-green px-10 py-4 text-[17px] font-medium text-white"
          >
            Upload
          </button>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
          {Data.map((data) => (
            <EducationCard
              key={data.id}
              heading={data.heading}
              title1={data.duration}
              title2={data.date}
              title3={data.institute}
              title4=""
            />
          ))}
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="w-[62%] bg-white">
                <div className="w-[100%] p-4 md:p-6">
                  <h3 className="my-6 text-[22px] font-medium text-black">
                    ADD CERTIFICATE FORM
                  </h3>
                  <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-2">
                    <div className="col-span-12 bg-white p-2 xl:col-span-6">
                      {/* Student Card Starts Here */}
                      <div className="mx-auto items-center justify-center">
                        <div className="">
                          <label className="block text-black font-medium">
                            Certificate Name
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Certificate Name"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label className="block text-black font-medium dark:text-white">
                            Obtained Marks
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Obtained Marks"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label className=" block text-black font-medium">
                            Duration Of Crtificate (No.Of Months)
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Duration Of Certificate"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label className="block text-black font-medium dark:text-white">
                            Institude Name
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Institude Name"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label className=" block text-black font-medium">
                            Grade
                          </label>
                          <div className="mt-1 flex items-center justify-between rounded-lg border-2 border-[#CCCCCC] bg-white py-1 outline-none">
                            <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                              <option value="">Select Your Grade</option>
                              <option value="">Grade 1</option>
                              <option value="">Grade 2</option>
                              <option value="">Grade 3</option>
                              <option value="">Grade 4</option>
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
                      {/* Student Card ends here */}
                    </div>

                    <div className="col-span-12 bg-white p-2  xl:col-span-6">
                      <div className="mx-auto items-center justify-center">
                        <div className="mt-2">
                          <label className="block text-black font-medium dark:text-white">
                            Description
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Description"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label className="block text-black font-medium dark:text-white">
                            Total Marks
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Total Marks"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                        <div className="mt-2">
                          <label className="block text-black font-medium dark:text-white">
                             Expiry
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Expiry"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>

                   
                        <div className="mt-2">
                          <label className="block text-black font-medium dark:text-white">
                            City
                          </label>
                          <div className="mt-1 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="City"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="my-6 flex items-center justify-end">
                    <button className="mr-3 rounded-lg bg-green py-4 px-12 text-[18px] text-white">
                      Submit
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      className="rounded-lg bg-[#E72E2E] py-4 px-12 text-[18px] text-white"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    </DefaultLayout>
  );
};

export default MySkills;

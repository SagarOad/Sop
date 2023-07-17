import Breadcrumb from './Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import EducationCard from './EducationCard';
import Data from '../EducationCardData';
import { useState } from 'react';
import AddEducation from '../components/AddEducation'

const EducationHistory = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Education" />
      <div className="bg-[#F4F4F4] dark:bg-[#292A33] border dark:border-strokedark p-4 md:p-6 2xl:p-10">
        <div className="flex justify-end">
          <button
          onClick={() => setShowModal(true)}
           className="mt-4 rounded-lg bg-green px-10 py-4 text-[17px] font-medium text-white">
            Add
          </button>
        </div>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
          {Data.map((data) => (
            <EducationCard
              key={data.id}
              heading={data.heading}
              title1={data.result}
              title2={data.obtainedMarks}
              title3={data.passingYear}
              title4={data.result}
            />
          ))}
        </div>
        {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="bg-white w-[62%]">
    <div className="p-4 md:p-6 w-[100%]">
      <h3 className="font-medium my-6 text-black text-[22px]">
        ADD EDUCATION FORM
      </h3>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-2">
        <div className="col-span-12 bg-white p-2 xl:col-span-6">
          {/* Student Card Starts Here */}
          <div className="mx-auto items-center justify-center">
            <div className="">
              <label className=" block text-black">Grade</label>
              <div className="mt-1 flex py-1 justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
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

            <div className="mt-2">
              <label className="block text-black dark:text-white">
                Major Subjects
              </label>
              <div className="mt-1 flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <input
                  type="text"
                  placeholder="Please Select Major Subjects"
                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className=" block text-black">Result Type</label>
              <div className="mt-1 flex py-1 justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                  <option value="">Select Your Result Type</option>
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

            <div className="mt-2">
              <label className="block text-black dark:text-white">
                Total Marks
              </label>
              <div className="mt-1 flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <input
                  type="text"
                  placeholder="Total Marks"
                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className=" block text-black">Passing Yea</label>
              <div className="mt-1 border-l-8 py-1 border-l-red flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                  <option value="">Passing Year</option>
                  <option value="">Year 1</option>
                  <option value="">Year 2</option>
                  <option value="">Year 3</option>
                  <option value="">Year 4</option>
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
              <label className="block text-black dark:text-white">
                Institute Name
              </label>
              <div className="mt-2 border-l-8 border-l-red flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <input
                  type="text"
                  placeholder="Institute Name"
                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-black dark:text-white">
                 Minor Subjects
              </label>
              <div className="mt-1  flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <input
                  type="text"
                  placeholder="Minor Subjects"
                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-black dark:text-white">
                Result/Passing Grade
              </label>
              <div className="mt-1 border-l-8 border-l-red flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <input
                  type="text"
                  placeholder="Result/Passing Grade"
                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-black dark:text-white">
                Marks Obtained
              </label>
              <div className="mt-1  flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
                <input
                  type="text"
                  placeholder="Marks Obtained"
                  className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                />
              </div>
            </div>

            <div className="mt-2">
              <label className="block text-black dark:text-white">
                City
              </label>
              <div className="mt-1 border-l-8 border-l-red flex justify-between items-center border-2 border-[#CCCCCC] rounded-lg bg-white outline-none">
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

      <div  className="my-6 flex justify-end items-center">
        <button className="bg-green mr-3 text-white text-[18px] py-4 px-12 rounded-lg">Submit</button>
        <button
        onClick={() => setShowModal(false)}
        className="bg-[#E72E2E] text-white text-[18px] py-4 px-12 rounded-lg">Close</button>
      </div>
    </div>
    </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
 

      </div>
    </DefaultLayout>
  );
};

export default EducationHistory;

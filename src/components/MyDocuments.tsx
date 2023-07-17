import Breadcrumb from '../components/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import DocumentCard from './DocumentCard';
import { AiOutlineUpload } from 'react-icons/ai';
import { useState } from 'react';

const MyDocuments = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Documents" />
      <div className="bg-[#F4F4F4] dark:bg-[#292A33] p-4 md:p-6 2xl:p-10">
        <div className="flex justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 flex items-center justify-between rounded-lg bg-green px-10 py-4 text-[17px] font-medium text-white"
          >
            <AiOutlineUpload className="mr-2 text-[26px] font-bold" />
            Upload
          </button>
        </div>

        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-4">
          <DocumentCard />
        </div>

        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="w-[62%] bg-white">
                <div className="w-[100%] p-4 md:p-6 2xl:p-10">
                  <div className="p- col-span-12 bg-white xl:col-span-4">
                    <div className="py-4">
                      <h3 className="text-[22px] font-medium text-black">
                        DOCUMENT UPLOAD
                      </h3>
                    </div>
                    <form action="#">
                      <div className="p-2">
                        <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                          <div className="w-full xl:w-full">
                            <label className="block font-medium text-black dark:text-white">
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
                        </div>

                        <div className="mb-4.5">
                          <label className="block font-medium text-black dark:text-white">
                            Select Document{' '}
                            <span className="text-meta-1">*</span>
                          </label>

                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            placeholder="Upload file here"
                            className="w-full rounded border-2 border-[#CCCCCC] bg-transparent py-3 px-5 font-medium outline-none transition disabled:cursor-default disabled:bg-whiter"
                          />
                        </div>

                        <div className="w-full xl:w-full">
                          <label className=" block text-black">
                            Category
                          </label>
                          <div className="mt-1 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white py-1 outline-none">
                            <select className="w-full bg-transparent py-3 px-5 outline-none transition">
                              <option value="">Select category</option>
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

                        
                        <div className="flex justify-end mt-[46px]">
                          <button className="mr-3 rounded-lg bg-green py-4 px-12 text-[18px] text-white">
                            Upload
                          </button>

                          <button className="rounded-lg bg-[#E72E2E] py-4 px-12 text-[18px] text-white">
                            Close
                          </button>
                        </div>
                      </div>
                    </form>
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

export default MyDocuments;

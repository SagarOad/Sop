import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';
import { useState } from 'react';


const Contact = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Support Center / My Tickets" />

      <div>
        <div>
          <div className="flex justify-end mx-3 mt-12 mb-6">
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 rounded-lg bg-green px-10 py-4 text-[17px] font-medium text-white"
            >
              Add
            </button>
          </div>

          <span className="mx-3 flex justify-between">
            <span className="w-[5%]  border-2 border-[#D9D9D9]  py-4 px-4">
              No.
            </span>
            <span className="w-[15%] border-2 border-[#D9D9D9]  py-4 px-4">
              Subjects
            </span>
            <span className="w-[60%] border-2 border-[#D9D9D9]  py-4 px-4">
              Message
            </span>
            <span className="w-[8%]  border-2 border-[#D9D9D9] py-4 px-4">
              Status
            </span>
            <span className="w-[12%] border-2 border-[#D9D9D9]  py-4 px-4">
              Action
            </span>
          </span>
        </div>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="w-[62%] bg-white">
                <div className="w-[100%] p-4 md:p-6">
                  <h3 className="my-6 text-[22px] font-medium text-black">
                    Create Ticket
                  </h3>
                  <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-2">
                   
                    <div className="col-span-12 bg-white p-2 ">
                      <div className="mx-auto items-center justify-center">
                        <div className="mt-2">
                          <label className="block text-black dark:text-white">
                            Please Describe Your Issue
                          </label>
                          <div className="mt-2 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <input
                              type="text"
                              placeholder="Institute Name"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            />
                          </div>
                        </div>


                        <div className="mt-2">
                          <div className="mt-1 flex items-center justify-between rounded-lg border-2 border-l-8 border-[#CCCCCC] border-l-red bg-white outline-none">
                            <textarea 
                              
                              rows={3}
                              placeholder="City"
                              className="w-full bg-transparent py-3 px-5 font-medium outline-none transition"
                            ></textarea>
                          </div>
                        </div>

                        <div className='mt-4'>
                            <input type='file' />
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

export default Contact;

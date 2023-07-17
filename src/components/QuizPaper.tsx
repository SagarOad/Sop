import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';

const QuizPaper = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Quizes" />
      <div className="mx-3 flex">
        <div className="mr-2 mt-2 w-[70%] border-[3px] border-[#000000] p-4 md:p-6 2xl:p-10">
          <div className="flex items-center justify-between border-b-2 border-black py-2">
            <button className="rounded-lg bg-green p-3 px-12 font-bold text-white">
              English
            </button>
            <button className="rounded-lg bg-[#5BC8F9] p-3 px-12 font-bold text-white">
              Instruction
            </button>
          </div>

          <h1 className="border-b-2 border-black dark:border-white dark:text-white py-5 text-[21px] font-bold text-[#00A651]">
            Question No. 1 of 3
          </h1>
          <h1 className="border-b-2 border-black dark:border-white py-5 dark:text-white text-[21px] font-bold text-black">
            How many legs are there in goat
          </h1>

          <div className="my-[45px] px-6 text-[21px]">
            <div className="my-4">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium dark:text-white text-black">Four</label>
            </div>
            <div className="my-4">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium dark:text-white text-black">Four</label>
            </div>
            <div className="my-4">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium dark:text-white text-black">Four</label>
            </div>
            <div className="my-4">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium dark:text-white text-black">Four</label>
            </div>

            <div>
              <div className="my-6 flex items-center mt-14 justify-between">
                <button
                  className="mr-3 w-full rounded-lg bg-green py-4 px-12 text-[18px] text-white"
                >
                  Submit
                </button>
                <button
                  className="rounded-lg w-full bg-[#E72E2E] py-4 px-12 text-[18px] text-white"
                >
                  Close
                </button>
              </div>

              <div className='flex justify-center'>
                <button className='bg-[#5BC8F9] font-medium rounded-lg p-3 px-12 text-white'>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%]">
          <div className="flex items-center justify-between bg-[#D2EBFF] py-9 px-4">
            <h1 className="font-medium text-[#000000]">
              <span className="#04BE5B text-[32px] font-medium text-green">
                59
              </span>
              MIN
            </h1>
            <h1 className="font-medium text-[#000000]">
              <span className="#04BE5B text-[32px] font-medium text-green">
                59
              </span>
              MIN
            </h1>
          </div>

          <div className="my-3 flex flex-col justify-between bg-[#D2EBFF]">
            <div>
              <h1 className="py-6 text-center text-[22px] font-medium text-black">
                QUESTION PALLETE
              </h1>
              <div className="flex flex-col items-center justify-center">
                <div className="my-1 w-[90%] rounded-xl bg-[#EE2558] p-3 text-center text-[20px]  text-white">
                  Q1-Not Answered
                </div>
                <div className="my-1 w-[90%] rounded-xl bg-[#EE2558] p-3 text-center text-[20px] text-white">
                  Q2-Not Answered
                </div>
                <div className="my-1 w-[90%] rounded-xl bg-[#EE2558] p-3 text-center text-[20px] text-white">
                  Q3-Not Answered
                </div>
              </div>
            </div>

            <div className="mx-3 mt-28 mb-10">
              <h1 className="mb-6 mt-5 text-[26px] font-medium text-black">
                Legend :
              </h1>
              <div>
                <div className="flex justify-between">
                  <div className="flex">
                    <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-green text-[16px] font-medium text-white">
                      1
                    </div>
                    <p className="ml-2 text-[18px] font-semibold text-black">
                      {' '}
                      Answered
                    </p>
                  </div>
                  <div className="flex">
                    <div className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#EE2558] text-[16px] font-medium text-white">
                      2
                    </div>
                    <p className="ml-2 text-[18px] font-semibold text-black">
                      {' '}
                      Answered
                    </p>
                  </div>{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default QuizPaper;

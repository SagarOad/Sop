import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';

const QuizPaper = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="My Quizes" />
      <div>
        <div className="p-4 md:p-6 2xl:p-10">
          <div className="flex items-center justify-between border-b-2 border-black py-2">
            <button className="bg-[#00A651] p-3 font-bold text-[black]">
              English
            </button>
            <button className="bg-[#e12353] p-3 font-bold text-[white]">
              Instruction
            </button>
          </div>

          <h1 className="border-b-2 border-black py-5 text-[21px] font-bold text-[#00A651]">
            Question No. 1 of 3
          </h1>
          <h1 className="border-b-2 border-black py-5  text-[21px] font-bold text-black">
            How many legs are there in goat
          </h1>

          <div className="my-[50px] px-6 text-[21px]">
            <div className="my-2">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium text-black">Four</label>
            </div>
            <div className="my-2">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium text-black">Four</label>
            </div>
            <div className="my-2">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium text-black">Four</label>
            </div>
            <div className="my-2">
              <input type="radio" id="quiz-1" />
              <label className="mx-2 font-medium text-black">Four</label>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <h1>
              <span className="#04BE5B">59</span>MIN
            </h1>
            <h1>
              <span className="#04BE5B">38</span>MIN
            </h1>
          </div>
          <div>
            <h1>QUESTION PALLETE</h1>
            <div className='bg-[#EE2558] text-white'>Q1-Not Answered</div>
            <div className='bg-[#EE2558] text-white'>Q2-Not Answered</div>
            <div className='bg-[#EE2558] text-white'>Q3-Not Answered</div>
          </div>

          <div>
            <h1>Legend:</h1>
            <div>
              <div>
              <p><span className='bg-green p-1 text-[14px] rounded-full'>1</span> Answered</p>
              <p><span className='bg-[#EE2558] text-[14px] p-1 rounded-full'>1</span> Not Answered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default QuizPaper;

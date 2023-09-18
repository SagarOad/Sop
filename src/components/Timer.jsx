import React from 'react';

const Timer = () => {
  return (
    <div className="my-6 dark:bg-boxdark">
      <div className="hidden md:grid auto-cols-max grid-flow-col justify-center gap-5 py-8 text-center">
        <div className="rounded-box flex flex-col justify-center p-3 bg-[#7D7D7D] w-[80px]">
          <h1 className="countdown font-mono text-[22px] text-white md:text-[42px]">
            15
          </h1>
          <p className=" pt-2 text-[18px] text-white md:text-[16px]">days</p>
        </div>
        <div className="rounded-box flex flex-col p-3 bg-[#7D7D7D] w-[80px]">
          <h1 className="countdown font-mono text-[22px] text-white md:text-[42px]">
            10
          </h1>
          <p className="pt-2 text-[18px] text-white md:text-[16px]">hours</p>
        </div>
        <div className="rounded-box flex flex-col p-3 bg-[#7D7D7D] w-[80px]">
          <h1 className="countdown font-mono text-[22px] text-white md:text-[42px]">
            24
          </h1>
          <p className="pt-2 text-[18px] text-white md:text-[16px]">min</p>
        </div>
        <div className="rounded-box flex flex-col p-3 bg-[#7D7D7D] w-[80px]">
          <h1 className="countdown font-mono text-[22px] text-white md:text-[42px]">
            34
          </h1>
          <p className="pt-2 text-[18px] text-white md:text-[16px]">sec</p>
        </div>
      </div>

      <div className='flex md:hidden my-4 justify-center'>
        <div className="mx-2 p-3 flex w-auto items-center justify-center bg-[#7D7D7D]">
          <div>
            <p className="text-center text-[20px] text-white">15</p>
            <p className="text-center text-[18px]">days</p>
          </div>
        </div>
        <div className="mx-2 p-3 flex w-auto items-center justify-center bg-[#7D7D7D]">
          <div>
            <p className="text-center text-[20px] text-white">10</p>
            <p className="text-center text-[18px]">hours</p>
          </div>
        </div>
        <div className="mx-2 p-3 flex w-auto items-center justify-center bg-[#7D7D7D]">
          <div>
            <p className="text-center text-[20px] text-white">24</p>
            <p className="text-center text-[18px]">min</p>
          </div>
        </div>
        <div className="mx-2 p-3 flex w-auto items-center justify-center bg-[#7D7D7D]">
          <div>
            <p className="text-center text-[20px] text-white">34</p>
            <p className="text-center text-[18px]">sec</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;

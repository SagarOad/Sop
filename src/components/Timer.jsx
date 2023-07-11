import React from 'react';

const Timer = () => {
  return (
    <div className='bg-[#E6E6E6] my-6'>
      <div className="bg-green py-10">
        <h1 className="text-center text-[32px] font-medium text-white">
        LAST DATE OF STUDENT REGISTRATION
        </h1>
      </div>
      <div className="grid auto-cols-max grid-flow-col py-8 justify-center gap-5 text-center">
        <div className="bg-[#7D7D7D] rounded-box flex flex-col px-12 pt-10 py-6">
          <h1 className="countdown font-mono text-white text-[60px]">
            15
          </h1>
          <p className='text-white text-[26px] pt-8'>
          days
          </p>
        </div>
        <div className="bg-[#7D7D7D] rounded-box text-neutral-content flex flex-col px-12 pt-10 py-6">
          <h1 className="countdown font-mono text-white text-[60px]">
            10
          </h1>
          <p className='text-white text-[26px] pt-8'>
          hours
          </p>
        </div>
        <div className="bg-[#7D7D7D] rounded-box text-neutral-content flex flex-col px-12 pt-10 py-6">
          <h1 className="countdown font-mono text-white text-[60px]">
            24
          </h1>
          <p className='text-white text-[26px] pt-8'>
          min
          </p>
        </div>
        <div className="bg-[#7D7D7D] rounded-box text-neutral-content flex flex-col px-12 pt-10 py-6">
          <h1 className="countdown font-mono text-white text-[60px]">
            34
          </h1>
          <p className='text-white text-[26px] pt-8'>
          sec
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;

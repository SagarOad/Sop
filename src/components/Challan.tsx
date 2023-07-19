import meezan from "../assets/meezan.png";
import easypaisa from "../assets/easypaisa.png";
import jazzcash from "../assets/jazzcash.png";

const Challan = () => {
  return (
    <div>
       <div className="px-6">
      <h1 className="text-green my-8">you may submit challan physically at any nearest MCB branch, or pay online via ATM, jazzcash or easypaisa account. </h1>
    
    <div className="flex flex-wrap">
      <div className="w-[100%] lg:w-[300px] my-2 rounded-b-xl mx-2 pb-6 drop-shadow-lg bg-[white] dark:bg-boxdark">
        <div className="bg-green rounded-t-xl h-[100px]"></div>

        <div className="px-4">
          <div className="flex">
            <div className="rounded-full border-2 border-[#04BE5B] w-[90px] h-[90px] flex justify-center items-center bg-white mt-[-45px]">
              <img className="w-[65%]" src={meezan} alt="meezan-bank" />
            </div>
            <h1 className="px-2 font-medium dark:text-white">MCB BANK LIMITED</h1>
          </div>

          <div className="my-4">
            <h1 className="text-[13px] text-[#848484] dark:text-white">ACCOUNT:</h1>
            <p className="text-[13px] text-[#848484] dark:text-white">
              IBAN# PK86MUCB0402217501008858
            </p>
          </div>

          <div className="my-4">
            <h1 className="text-[13px] text-[#848484] dark:text-white">ACCOUNT:</h1>
            <p className="text-[13px] text-[#848484] dark:text-white">
              IBAN# PK86MUCB0402217501008858
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[300px] my-2 rounded-b-xl mx-2 pb-6 drop-shadow-lg bg-[white] dark:bg-boxdark">
        <div className="bg-green rounded-t-xl h-[100px]"></div>

        <div className="px-4">
          <div className="flex">
            <div className="rounded-full border-2 border-[#04BE5B] w-[90px] h-[90px] flex justify-center items-center bg-white mt-[-45px]">
              <img className="w-[65%]" src={easypaisa} alt="meezan-bank" />
            </div>
            <div className="rounded-full mx-2 border-2 border-[#04BE5B] w-[90px] h-[90px] flex justify-center items-center bg-white mt-[-45px]">
              <img className="w-[65%]" src={jazzcash} alt="meezan-bank" />
            </div>
          </div>

          <div className="my-4">
            <p className="text-[13px] text-[#04BE5B]">
              You may submit challan physically at any nearest MCB branch, or
              pay online via ATM, Jazzcash or easypaisa account.
            </p>
          </div>

          <div className="my-4">
            <p className="text-[13px] text-[#848484] dark:text-white">
              <span className="text-[#FD0808] dark:font-bold text-[14px]">Note:</span> Dear
              student, when you pay your fee challan then confirm your
              enrollment form.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] lg:w-[300px] my-2">
        <div className="h-[66%] rounded-xl mx-2 p-4 drop-shadow-lg bg-[white] dark:bg-boxdark">
          <h1 className="text-[20px] text-black dark:text-white">Select Payment Method</h1>
          <div className="flex flex-col my-4">
            <button className="bg-green text-white rounded-lg py-3">
              Bank Draft
            </button>
            <button className="border-4 border-green rounded-lg py-3 mt-2">
              Online Payment
            </button>
          </div>
        </div>

        <div className="h-[30%] flex flex-col mt-3 rounded-xl mx-2 p-4 drop-shadow-lg bg-[white] dark:bg-boxdark">
        <button className="bg-green mt-2 text-white rounded-lg py-3">
              Download Challan
            </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Challan;

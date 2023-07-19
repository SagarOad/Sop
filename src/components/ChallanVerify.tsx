import banner from '../assets/verifychallan.png';

const ChallanVerify = () => {
  return (
    <div className="px-6">
      <h1 className="my-8 text-green">
        you may submit challan physically at any nearest MCB branch, or pay
        online via ATM, jazzcash or easypaisa account.{' '}
      </h1>

      <div className="block lg:flex p-6">
        <div className="w-[100%] md:mb-6 rounded-lg border-2 bg-transparent p-7 shadow-lg">
          <h1 className="text-[18px] font-medium">
            kindly upload the paid challan receipt
          </h1>
          <form className="flex flex-col  justify-center">
            <input
              type="file"
              className=" relative my-1 rounded-lg border-2 border-[#cfcfcf] bg-white px-4 py-4 text-[#CCCCCC] file:absolute
             file:right-0 file:top-0
       file:rounded-none file:border-0
      file:bg-[#D9D9D9] file:py-5 file:px-4
      file:text-sm file:font-semibold
      file:text-[#4E5B63] hover:file:bg-[#D9D9D9]
      dark:bg-boxdark
            "
              placeholder="Upload Files"
            />
          </form>
          <div className="flex items-center justify-center">
            <button className="mx-auto mt-3 rounded-lg  bg-[#04BE5B] py-4 px-12 text-white">
              Submit
            </button>
          </div>
        </div>
        <div className="w-[100%]">
          <img className="mx-auto" src={banner} alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default ChallanVerify;

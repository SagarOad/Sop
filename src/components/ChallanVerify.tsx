
import banner from "../assets/verifychallan.png";


const ChallanVerify = () => {
  return (
    <div className="px-6">
      <h1 className="text-green my-8">you may submit challan physically at any nearest MCB branch, or pay online via ATM, jazzcash or easypaisa account. </h1>
    
    <div className="flex p-6">
      <div className="w-[50%] p-7 rounded-lg bg-transparent border-2 shadow-lg">
        <h1 className="font-medium text-[18px]">kindly upload the paid challan receipt</h1>
        <form className="flex justify-center  flex-col">
          <input
            type="file"
            className=" bg-white relative text-[#CCCCCC] rounded-lg border-2 px-4 py-4 my-1 border-[#cfcfcf]
             file:py-5 file:px-4
       file:border-0 file:rounded-none
      file:absolute file:right-0 file:top-0
      file:text-sm file:font-semibold
      file:bg-[#D9D9D9] file:text-[#4E5B63]
      hover:file:bg-[#D9D9D9]
            "
            placeholder="Upload Files"
          />
        </form>
        <div className="flex justify-center items-center">
          <button className="bg-[#04BE5B] py-4 px-12  rounded-lg mt-3 mx-auto text-white">
            Submit
          </button>
        </div>
      </div>
      <div className="w-[50%]">
        <img className="mx-auto" src={banner} alt="Banner" />
      </div>
    </div>
    </div>
  )
}

export default ChallanVerify
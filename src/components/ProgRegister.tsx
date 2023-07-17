
import banner from "../assets/GroupRegi.png";

const ProgRegister = () => {
  return (
    <div className="flex p-6">
      <div className="w-[50%] p-7 rounded-lg bg-[#F5F5F5]">
        <form className="flex justify-center  flex-col">
          <select
            className="bg-white text-[#CCCCCC] rounded-lg border-2 px-4 py-4 my-1 border-[#cfcfcf]"
            placeholder=""
          >
            <option value="volvo">Select Your Class</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            className="bg-white text-[#CCCCCC] rounded-lg border-2 px-4 py-4 my-1 border-[#cfcfcf]"
            placeholder=""
          >
            <option value="volvo">Select Your Batch</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            className="bg-white text-[#CCCCCC] rounded-lg border-2 px-4 py-4 my-1 border-[#cfcfcf]"
            placeholder=""
          >
            <option value="volvo">Select Your Province</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            className="bg-white text-[#CCCCCC] rounded-lg border-2 px-4 py-4 my-1 border-[#cfcfcf]"
            placeholder=""
          >
            <option value="volvo">Select Your District</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select
            className="bg-white text-[#CCCCCC] rounded-lg border-2 px-4 py-4 my-1 border-[#cfcfcf]"
            placeholder=""
          >
            <option value="volvo">Select Your Email</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </form>
        <div className="flex justify-center items-center">
          <button className="bg-[#04BE5B] py-4 px-12  rounded-lg mt-3 mx-auto text-white">Submit</button>
        </div>
      </div>
      <div className="w-[50%]">
        <img className="mx-auto" src={banner} alt="Banner" />
      </div>
    </div>

  )
}

export default ProgRegister
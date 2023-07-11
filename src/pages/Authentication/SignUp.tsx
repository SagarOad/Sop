import { Link, NavLink } from 'react-router-dom';
import Logo from "../../assets/Logo1.png";
import authBanner from "../../assets/studentofpakistan 1.png";
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineUnlock } from 'react-icons/ai';

const SignUp = () => {
 
  return (

<div className="flex h-auto py-16  md:px-16 px-6 lg:px-36 lg:pr-0">
    <div className="block lg:flex w-[100vw] items-center justify-between rounded-sm bg-white">
      <div className="w-auto lg:w-[40%] bg-[#F5F5F5] py-12 md:px-8 px-3 shadow-lg">
        <img className="mx-auto w-28" alt="Logo" src={Logo} />
        <div className='my-7'>
        <h1 className="text-center text-[28px] font-medium">Sign Up</h1>
        <p className='text-center text-[22px]'>Register a new membership</p>
        </div>
        <div className="w-[100%]">
          <label className=" block text-[18px] font-medium text-black dark:text-white">
            <div className="mt-3 border-l-8 flex justify-between items-center border-l-red rounded-lg drop-shadow-md border-stroke h-16 bg-white px-6 outline-none">
              <input
                type="text"
                placeholder="Enter Your First Name"
                id="email"
                className="w-full py-2 border-[#848484] outline-none border-r-[1px] text-[#848484]"
              ></input>
              <VscAccount className="text-[#848484] ml-5 font-thin text-[32px]" />
            </div>
          </label>

          <label className="block text-[18px] font-medium text-black dark:text-white">
            <div className="mt-3 border-l-8 flex justify-between items-center border-l-red rounded-lg drop-shadow-md border-stroke h-16 bg-white px-6 outline-none">
              <input
                type="text"
                placeholder="Enter Your Last Name"
                id="email"
                className="w-full py-2 border-[#848484] outline-none border-r-[1px] text-[#848484]"
              ></input>
              <VscAccount className="text-[#848484] ml-5 font-thin text-[32px]" />
            </div>
          </label>


          <label className=" block text-[18px] font-medium text-black dark:text-white">
            <div className="mt-3 border-l-8 flex justify-between items-center border-l-red rounded-lg drop-shadow-md border-stroke h-16 bg-white px-6 outline-none">
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                id="email"
                className="w-full py-2 border-[#848484] outline-none border-r-[1px] text-[#848484]"
              ></input>
              <AiOutlineUnlock className="text-[#848484] ml-5 font-thin text-[32px]" />
            </div>
          </label>


          <label className=" block text-[18px] font-medium text-black dark:text-white">
            <div className="mt-3 border-l-8 flex justify-between items-center border-l-red rounded-lg drop-shadow-md border-stroke h-16 bg-white px-6 outline-none">
              <input
                type="text"
                placeholder="Enter Your Password"
                id="email"
                className="w-full py-2 border-[#848484] outline-none border-r-[1px] text-[#848484]"
              ></input>
              <AiOutlineEyeInvisible className="text-[#848484] ml-5 font-thin text-[32px]" />
            </div>
          </label>
         
         <p className='font-medium text-[17px] mt-3 mx-2'>
          <span className='text-[#FD0808]'>Note: </span>
          Please Enter Minimun 8 Letters
         </p>

          <label className="block text-[18px] font-medium text-black dark:text-white">
            <div className="mt-3 border-l-8 flex justify-between items-center border-l-red rounded-lg drop-shadow-md border-stroke h-16 bg-white px-6 outline-none">
              <input
                type="text"
                placeholder="Re-Enter Your Password"
                id="email"
                className="w-full py-2 border-[#848484] outline-none border-r-[1px] text-[#848484]"
              ></input>
              <AiOutlineEyeInvisible className="text-[#848484] ml-5 font-thin text-[32px]" />
            </div>
          </label>
        </div>

     
        <NavLink to="/auth/signin" className="">
        <div className="bg-green mt-3 cursor-pointer rounded-lg border border-primary md:py-4 py-3 text-center text-[20px] text-white transition hover:bg-opacity-90">
          Sign Up
        </div>
        </NavLink>

        <div className="mt-3 text-center">
        <Link to="/auth/signin">
          <p className="text-[20px] text-[#848484]">
          Already have an account? <span className='text-green'>Login here </span>
          </p>
          </Link>
        </div>
      </div>

      <div className="hidden lg:block w-auto lg:w-[60%]">
        <img className='mx-auto md:w-[622px] w-auto' src={authBanner} alt="banner" />
      </div>
    </div>
  </div>
  );
};

export default SignUp;

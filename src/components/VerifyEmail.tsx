// @ts-nocheck


import { AiOutlineUnlock } from "react-icons/ai";
import Logo from "../assets/Logo1.png";
import authBanner from "../assets/studentofpakistan 1.png";
import { useState } from "react";

import axios from "../api/axios";

const VerifyEmail = () => {

   const [otp, setOtp] = useState('');

   const [success, setSuccess] = useState(false);

   const handleVerification = async (e) => {
    e.preventDefault();
    
      try {
        const response = await axios.post(
          '/emailverification',
          {
            otp
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        // Handle successful sign-up response, e.g., show a success message or redirect
        console.log(response.data);
        setSuccess(true);
      } catch (err) {
        // Handle sign-up error, e.g., display an error message
        if (!err?.response) {
          console.log('No Server Response');
         } else if (err.response?.status === 404) {
          console.log("It's a 404 Error");
        } else {
          console.log('Verification Failed');
        }
      }
    };


  return (

    <div className="flex h-auto py-16 lg:h-[100vh] lg:py-0 md:px-16 px-6 lg:px-36">
      <div className="block lg:flex w-[100vw] items-center justify-between rounded-sm bg-white">
        <div className="w-auto lg:w-[40%] bg-[#F5F5F5] py-8 md:px-8 px-3 shadow-lg">
          <img className="mx-auto w-28" alt="Logo" src={Logo} />
          <div className="mt-7 mb-11">
            <h1 className="text-center text-[28px]">Verify Your Email</h1>
            <p className="text-center text-[18px] text-[#848484]">
              Enter Your OTP recieved in your email
            </p>
          </div>
          <div className="w-[100%]">
            <label className=" block text-[18px] font-medium text-black dark:text-white">
              <div className="mt-3 border-l-8 flex justify-between items-center border-l-red rounded-lg drop-shadow-md border-stroke h-16 bg-white px-6 outline-none">
                <input
                  type="text"
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  id="email"
                  className="w-full py-2 outline-none border-[#848484] border-r-[1px] text-[#848484]"
                ></input>
                <AiOutlineUnlock className="text-[#848484] ml-5 font-thin text-[32px]" />
              </div>
            </label>
          </div>

          <button 
          onClick={handleVerification}
          className="bg-green w-full mt-6 md:mt-3 cursor-pointer rounded-lg border md:py-4 py-3 text-center text-[20px] text-white transition hover:bg-opacity-90">
            Submit
          </button>
        </div>

        <div className="hidden lg:block w-auto lg:w-[40%]">
          <img src={authBanner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

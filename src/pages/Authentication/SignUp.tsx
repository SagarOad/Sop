// @ts-nocheck

import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import authBanner from '../../assets/studentofpakistan 1.png';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineUnlock } from 'react-icons/ai';
import { useState } from 'react';
import VerifyEmail from '../../components/VerifyEmail';

import axios from '../../api/axios';





const SignUp = () => {

  const [name, setName] = useState('');
const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [password_confirmation, setPassword_confirmation] = useState('');

const [success, setSuccess] = useState(false);

const handleSignUp = async (e) => {
  e.preventDefault();
  
    try {
      const response = await axios.post(
        '/register',
        {
          name,
          username,
          email,
          password,
          password_confirmation
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
      } else if (err.response?.status === 409) {
        console.log('Username Taken');
      } else if (err.response?.status === 404) {
        console.log("It's a 404 Error");
      } else {
        console.log('Registration Failed');
      }
    }
  };

  return (
    <>
      {success ? (
        <div>
        <VerifyEmail />
        </div>
      ) : (
        <div className="flex h-auto py-16  px-6 md:px-16 lg:px-36 lg:pr-0">
          <div className="block w-[100vw] items-center justify-between rounded-sm bg-white lg:flex">
            <div className="w-auto bg-[#F5F5F5] py-12 px-3 shadow-lg md:px-8 lg:w-[40%]">
              <img className="mx-auto w-28" alt="Logo" src={Logo} />
              <div className="my-7">
                <h1 className="text-center text-[28px] font-medium">Sign Up</h1>
                <p className="text-center text-[22px]">
                  Register a new membership
                </p>
              </div>
              <div className="w-[100%]">
                <label className=" block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter Your Name"
                      id="name"
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484] outline-none"
                    ></input>
                    <VscAccount className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>

                <label className="block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter Your Username"
                      id="username"
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484] outline-none"
                    ></input>
                    <VscAccount className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>

                <label className=" block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Your Email"
                      id="email"
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484] outline-none"
                    ></input>
                    <AiOutlineUnlock className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>

                <label className=" block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Your Password"
                      id="password"
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484] outline-none"
                    ></input>
                    <AiOutlineEyeInvisible className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>

                <p className="mx-2 mt-3 text-[17px] font-medium">
                  <span className="text-[#FD0808]">Note: </span>
                  Please Enter Minimun 8 Letters
                </p>

                <label className="block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="password"
                      onChange={(e) => setPassword_confirmation(e.target.value)}
                      name='password_confirmation'
                      placeholder="Re-Enter Your Password"
                      id="re-enter-pass"
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484] outline-none"
                    ></input>
                    <AiOutlineEyeInvisible className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>
              </div>

              <NavLink to="/auth/signin" className="">
                <button
                  onClick={handleSignUp}
                  className="mt-3 w-full cursor-pointer rounded-lg border border-primary bg-green py-3 text-center text-[20px] text-white transition hover:bg-opacity-90 md:py-4"
                >
                  Sign Up
                </button>
              </NavLink>

              <div className="mt-3 text-center">
                <Link to="/auth/signin">
                  <p className="text-[20px] text-[#848484]">
                    Already have an account?{' '}
                    <span className="text-green">Login here </span>
                  </p>
                </Link>
              </div>
            </div>

            <div className="hidden w-auto lg:block lg:w-[60%]">
              <img
                className="mx-auto w-auto md:w-[622px]"
                src={authBanner}
                alt="banner"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;

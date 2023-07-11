import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo1.png';
import authBanner from '../../assets/Group.png';
import { VscAccount } from 'react-icons/vsc';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../../context/AuthProvider';

import axios from '../../api/axios';
const LOGIN_URL = '/login';

const SignIn = () => {
  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState();
  const [success, setSuccess] = useState();

  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.token;
      setAuth({ email, password, accessToken });
      setEmail('');
      setPassword('');
      setSuccess(true);
    } catch (err) {
      if (!err.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing email or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else if (err.response?.status === 404) {
        console.log('Server stopped working');
      } else {
        setErrMsg('Login failed');
      }
      userRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <div>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </div>
      ) : (
        <div className="flex h-auto py-16 px-6 md:px-16 lg:h-[100vh] lg:py-0 lg:px-36">
          <div className="block w-[100vw] items-center justify-between rounded-sm bg-white lg:flex">
            <div className="w-auto bg-[#F5F5F5] py-12 px-3 shadow-lg md:px-8 lg:w-[40%]">
              <img className="mx-auto w-28" a lt="Logo" src={Logo} />
              <h1 className="my-3 text-center text-[28px]">Log in</h1>

              <div className="w-[100%]">
                <label className="block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      id="email"
                      ref={userRef}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484]"
                    ></input>
                    <VscAccount className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>

                <label className="block text-[18px] font-medium text-black dark:text-white">
                  <div className="mt-3 flex h-16 items-center justify-between rounded-lg border-l-8 border-stroke border-l-red bg-white px-6 outline-none drop-shadow-md">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      id="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      className="w-full border-r-[1px] border-[#848484] py-2 text-[#848484]"
                    ></input>
                    <AiOutlineEyeInvisible className="ml-5 text-[32px] font-thin text-[#848484]" />
                  </div>
                </label>
              </div>

              <NavLink to="/mainpage" className="mt-2 ">
                <button
                  onClick={handleSubmit}
                  className="mt-6 w-full cursor-pointer rounded-lg border bg-green  py-3 text-center text-[20px] text-white transition hover:bg-opacity-90 md:mt-3 md:py-4"
                >
                  Log In
                </button>
              </NavLink>

              <Link to="/auth/signup" className="">
                <button className="mt-3 w-full cursor-pointer rounded-lg border bg-green py-3 text-center text-[20px] text-white transition hover:bg-opacity-90 md:py-4">
                  Sign Up
                </button>
              </Link>

              <div className="mt-3 text-center">
                <p className="text-[20px] text-[#848484]">
                  Forgot your password?
                </p>
              </div>
            </div>

            <div className="hidden w-auto lg:block lg:w-[40%]">
              <img src={authBanner} alt="banner" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignIn;

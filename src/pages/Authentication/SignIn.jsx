import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function signIn() {
    const item = { email, password };
    console.warn(item);

    let result = await fetch(
      'http://192.168.18.244/sopstudentnewbackend/login',
      {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    result = await result.json();
    console.warn('result', result);
  }
  return (
    <div className='flex h-[100vh]'>
      <div className="auth-banner flex w-[50%] items-center justify-center p-4 sm:p-12.5 xl:p-17.5">
        <div>
          <img
            src="https://studentofpakistan.com/images/sop.png"
            className="mb-[12px] w-[120px]"
          />
          <h1 className="font-medium text-[60px] xl:text-[100px] leading-[80px] xl:leading-[120px] text-white dark:text-white">
            Students Of{''}
            <span className="font-bold text-[#00A651]"> Pakistan</span>
          </h1>
          <img
            src="https://studentofpakistan.com/images/farsi.png"
            className="my-8 w-[180px]"
          />
          <h2 className="w-[350px] p-4 text-[30px] font-bold font-medium text-white text-black dark:text-white">
            <span className="bg-[#00A651] p-3">I HAVE TO GROW</span>
          </h2>
        </div>
      </div>
      <div className="rounded-sm border w-[50%] border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full border-stroke dark:border-strokedark xl:border-l-2">
          <div className='flex h-[100vh] justify-center items-center'>
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h1 className="mb-9 text-[18px] xl:text-[28px] font-bold text-black dark:text-white">
              Sign In
            </h1>

            <div className="w-[100%]">
              <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                Email:
                <input
                  type="text"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 xl:py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>

              <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                Password:
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 xl:py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>
            </div>

            <NavLink to="/mainpage" className="mt-2 ">
              <div className="cursor-pointer rounded-lg text-center border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90w-full text-[20px] cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90">
              Sign In
              </div>
            </NavLink>

            <div className="mt-6 text-center">
              <p className='text-[20px]'>
                Don’t have any account?{' '}
                <Link to="/auth/signup" className="text-primary">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

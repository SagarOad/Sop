import { Link, NavLink } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, SetPassword_confirmation] = useState('');

  async function signUp() {
    const item = { name, username, email, password, password_confirmation };
    console.warn(item);

    let result = await fetch(
      'http://192.168.18.244/sopstudentnewbackend/register',
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
    <div className="flex h-[100vh]">
      <div className="auth-banner flex w-[50%] items-center justify-center p-4 sm:p-12.5 xl:p-17.5">
        <div>
          <img
            src="https://studentofpakistan.com/images/sop.png"
            className="mb-[12px] w-[120px]"
          />
          <h1 className="text-[60px] font-medium leading-[80px] text-white dark:text-white xl:text-[100px] xl:leading-[120px]">
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
      <div className=" w-[50%] rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full border-stroke dark:border-strokedark xl:w-[80%] xl:border-l-2">
          <div className="flex h-[100vh] items-center justify-center">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h1 className="mb-9 text-[18px] font-bold text-black dark:text-white xl:text-[28px]">
                Register
              </h1>

              <div className="w-[100%]">
                <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                  Name:
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    id="first-name"
                    className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary xl:py-4"
                  ></input>
                </label>

                <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                  Username:
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    id="username"
                    className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary xl:py-4"
                  ></input>
                </label>

                <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                  Email:
                  <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary xl:py-4"
                  ></input>
                </label>

                <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                  Password:
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary xl:py-4"
                  ></input>
                </label>

                <label className="mb-4 block text-[18px] font-medium text-black dark:text-white">
                  Confirm Password:
                  <input
                    type="password"
                    onChange={(e) => SetPassword_confirmation(e.target.value)}
                    id="password_confirmation"
                    className="mt-2 w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary xl:py-4"
                  ></input>
                </label>
              </div>

              <NavLink to="/auth/signin" className="">
                <button
                  onClick={signUp}
                  href="#"
                  className="hover:bg-opacity-90w-full w-full cursor-pointer cursor-pointer rounded-lg rounded-lg border border border-primary border-primary bg-primary bg-primary p-4 p-4 text-center text-[20px] text-white text-white transition transition hover:bg-opacity-90"
                >
                  Register
                </button>
              </NavLink>

              <div className="mt-6 text-center">
                <p className="text-[20px]">
                  Already have an account?{' '}
                  <Link to="/auth/signin" className="text-primary">
                    Sign in
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

export default SignUp;

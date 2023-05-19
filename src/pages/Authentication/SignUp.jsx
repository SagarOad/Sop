import { Link } from 'react-router-dom';
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
    <DefaultLayout>
      <Breadcrumb pageName="Sign Up" />
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h1 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Register
            </h1>

            <div className="w-[100%]">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                First Name:
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  id="first-name"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>

              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Username:
                <input
                  type="text"
                  placeholder="Enter your Username"
                  onChange={(e) => setUsername(e.target.value)}
                  id="username"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>

              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email:
                <input
                  type="text"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>

              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Password:
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>

              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Confirm Password:
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => SetPassword_confirmation(e.target.value)}
                  id="password_confirmation"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></input>
              </label>
            </div>

            <button
              onClick={signUp}
              href="#"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            >
              Register
            </button>

            <p className="text-gray-400 m-3 text-[18px]">
              Already have an account? <a className="text-blue-500">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;

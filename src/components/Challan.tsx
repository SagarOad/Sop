import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';
import RegistrationButtons from './RegistrationButtons';

const Challan = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Student Registraion For SOP Program" />
      <RegistrationButtons />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-2">
        <div className="col-span-12 flex justify-center rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <img
            className="h-[150px] w-[200px] object-top object-cover"
            src="https://seeklogo.com/images/M/mcb-bank-logo-34F6A134AD-seeklogo.com.png"
          />
        </div>
        <div className="col-span-12 flex justify-center rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <img
            className="h-[150px] object-top w-[200px] object-cover"
            src="https://crushlogo.com/public/uploads/thumbnail/easypaisa-pay-logo-png-11664945262opncoxsn7c.png"
          />
        </div>
        <div className="col-span-12 flex justify-center rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
          <img
            className="h-[150px] object-top w-[200px] object-cover"
            src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk=w600-h300-pc0xffffff-pd"
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Challan;

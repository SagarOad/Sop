"use client";

import { useState } from "react";
import ProgRegister from "./ProgRegister";
// import Challan from "./Challan";
import ChallanVerify from "./ChallanVerify";
import DefaultLayout from "../layout/DefaultLayout";
import Breadcrumb from "./Breadcrumb";
import Challan from "./Challan";

const RegistrationTabs = () => {
  const initialTab = <ProgRegister />;
  const secondTab = <Challan />;
  const thirdTab = <ChallanVerify />;
  const [initialContent, setInitialContent] = useState(initialTab);
    
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Program Registration" />
    <div>
    <div className="flex justify-between px-8 py-6 w-[50%]">
          <button
            className={`${
              initialContent == initialTab ? "bg-[#292A33]" : "bg-white"
            } 
                text-[#838383] text-[18px] focus:bg-[#292A33] focus:text-white py-3 px-4 rounded-full`}
            type="button"
            onClick={() => {
              setInitialContent(initialTab);
            }}
          >
            Program Registration
          </button>
          <button
            className={`${initialContent == secondTab ? "bg-[#292A33]" : ""} 
                text-[#838383] text-[18px] focus:bg-[#292A33] focus:text-white py-3 px-4 rounded-full`}
            type="button"
            onClick={() => {
              setInitialContent(secondTab);
            }}
          >
            Challan
          </button>

          <button
            className={`${initialContent == thirdTab ? "bg-[#292A33]" : ""} 
                text-[#838383] text-[18px] focus:bg-[#292A33] focus:text-white py-3 px-4 rounded-full`}
            type="button"
            onClick={() => {
              setInitialContent(thirdTab);
              {initialContent == thirdTab ? console.log("Working"): console.log("Not working")}
            }}
          >
            Verification
          </button>
        </div>
      <div>{initialContent}</div>
    </div>
    </DefaultLayout>
  );
};

export default RegistrationTabs;

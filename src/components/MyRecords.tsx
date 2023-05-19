import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Breadcrumb from './Breadcrumb'


const MyRecords = () => {
  return (
    <DefaultLayout>
        <Breadcrumb pageName='My Records' />
        
    <div className="rounded-sm my-2 border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Quiz # 01
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Project
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Topic
            </h5>
          </div>
        
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Key Idea
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 border-b border-stroke dark:border-strokedark sm:grid-cols-3">
          <div className="flex items-center gap-3 p-2.5 xl:p-5">
            
            <p className=" text-[20px] font-medium dark:text-white">
              A2365
            </p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
            <p className="text-[20px] font-medium dark:text-white">Lucid Admin</p>
          </div>

          <div className="flex items-center justify-center p-2.5 xl:p-5">
          <p className="text-[20px] font-medium dark:text-white">Tim Hank</p>
          </div>
        </div>
      </div>
    </div>

    </DefaultLayout>
  )
}

export default MyRecords
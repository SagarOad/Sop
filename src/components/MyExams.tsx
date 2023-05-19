import React from 'react'
import DefaultLayout from '../layout/DefaultLayout'
import Breadcrumb from './Breadcrumb'

const MyExams = () => {
  return (
    <DefaultLayout>
    <Breadcrumb pageName='My Exams' />
    
<div className="rounded-sm my-2 border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
 
  <div className="flex flex-col">
    <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-3">
      <div className="p-2.5 xl:p-5">
        <span className="text-sm bg-[#00A651] py-2 px-4 text-white dark:text-white font-medium uppercase xsm:text-base">
          Exam - District
        </span>
      </div>
      <div className="p-2.5 text-center xl:p-5">
       
      </div>
    
      <div className="hidden p-2.5 text-center sm:block xl:p-5">
        <h5 className="text-sm font-medium uppercase xsm:text-base">
          Date: 08-may-2021
        </h5>
      </div>
    </div>

  </div>
  
</div>

</DefaultLayout>
  )
}

export default MyExams
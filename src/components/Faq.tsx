import React from 'react'
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';

const Faq = () => {
  return (
    <DefaultLayout>
        <Breadcrumb pageName='FAQ' />
    <div className='mx-3 mt-12 border-[#CCCCCC] border-t border-l border-r rounded-xl'>
       <div className='border-b rounded-xl border-[#CCCCCC] px-6 py-4'>
        How to user portal
       </div>

       <div className='border-b rounded-xl border-[#CCCCCC] px-6 py-4'>
        Last date to register
       </div>

       <div className='border-b rounded-xl border-[#CCCCCC] px-6 py-4'>
        How to register
       </div>

       <div className='border-b rounded-xl border-[#CCCCCC] px-6 py-4'>
        How to register
       </div>
       
    </div>
    </DefaultLayout>
  )
}

export default Faq;

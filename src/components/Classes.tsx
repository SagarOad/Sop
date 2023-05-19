import React from 'react'

interface Props {
    heading: string
}

const Classes = ({ heading }: Props) => {
  return (
    <div className='col-span-12 rounded-sm border flex justify-center items-center h-[200px] border-stroke shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4'>
        <div>
            <h1 className='text-[66px] font-bold'>{heading}</h1>
        </div>
    </div>
  )
}

export default Classes
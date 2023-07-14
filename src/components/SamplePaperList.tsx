
import { AiFillFolder } from 'react-icons/ai';


const SamplePaperList = () => {
  return (
    <div className='pt-8'>
        <div className='bg-[#F3F3F3] py-6 flex text-[20px] px-6 text-black font-medium justify-between'>
          <h1>Name</h1>
          <h1>Last Modified</h1>
          <h1>File Size</h1>
        </div>

        <div className=''>
            <div className='flex mb-1 bg-[#F3F3F3] text-[18px] px-6 py-6 text-black font-medium justify-between'>
           <div className='flex items-center'>
            <AiFillFolder className="mr-3 text-[32px]" />
            <h1 className='text-center'>My Projects</h1>
           </div>
           <div>
           <h1 className='mr-[82px]'>march,26,2019</h1>
           </div>
           <div>
           <h1>--</h1>
           </div>
           </div>

           <div className='flex mb-1 bg-[#F3F3F3] text-[18px] px-6 py-6 text-black font-medium justify-between'>
           <div className='flex items-center'>
            <AiFillFolder className="mr-3 text-[32px]" />
            <h1 className='text-center'>My Projects</h1>
           </div>
           <div>
           <h1 className='mr-[82px]'>march,26,2019</h1>
           </div>
           <div>
           <h1>67kb</h1>
           </div>
           </div>
        </div>
    </div>
  )
}

export default SamplePaperList
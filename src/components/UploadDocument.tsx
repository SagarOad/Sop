import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from './Breadcrumb';

const UploadDocument = () => {
  
  return (
    <DefaultLayout>
      <Breadcrumb pageName='My Documents' />
    <div>
      <div className="col-span-12 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">
            GENERAL INFO
          </h3>
        </div>
        <form action="#">
          <div className="p-2">
            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-full">
                <label className="mb-2.5 block text-black dark:text-white">
                  Document Name
                </label>
                <input
                  type="text"
                  placeholder="Document Name"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-2.5 block text-black dark:text-white">
                Select Document <span className="text-meta-1">*</span>
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                placeholder="Upload file here"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />
            </div>

            <button className="flex w-full justify-center rounded bg-[#00A651] p-3 font-medium text-gray">
             Upload
            </button>
          </div>
        </form>
      </div>
    </div>
    </DefaultLayout>
  );
};

export default UploadDocument;

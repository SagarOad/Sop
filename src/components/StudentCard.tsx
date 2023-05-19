const StudentCard = () => {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mx-auto items-center justify-center">
        <div className="mx-auto">
          <img
            className="mx-auto h-[120px] w-[128px] rounded-md border-2 object-cover object-top"
            src="https://www.bbc.co.uk/staticarchive/afbe08f01d60949b3e3c498b00a5324bfe1ba0c5.jpg"
          />
        </div>
        <h2 className="my-3 text-center text-[28px] font-bold text-black dark:text-white">
          Maaru
        </h2>
        <div className="text-center">
          <p className="mt-8 text-[18px] font-medium text-black dark:text-white">
            SOP-1A-131-1170/21
          </p>
          <hr className="bg-black-300 my-2 h-1 w-full" />
          <p className="text-[18px] font-medium text-black dark:text-white">
            +92*******
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;


const Calender = () => {
  return (
    <div>
        <div className="w-[500px] border-4 rounded-sm bg-white h-[250px] overflow-scroll max-w-full p-2 shadow-default">
        <h1 className="text-[24px] font-semibold mb-3 text-black">Select Date</h1>
        <input placeholder="MM/DD/YYYY"  className="placeholder-black p-3 border-2 border-black text-white w-full" type='date' />
        </div>
    </div>
  )
}

export default Calender
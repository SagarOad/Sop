import { NavLink, useLocation } from 'react-router-dom';

const RegistrationButtons = () => {

    const location = useLocation();
    const { pathname } = location;
  return (
    <div>
        <div className="flex justify-evenly">
        <NavLink
        to="/programregistration"
        className={`mt-4 flex rounded-[50px] items-center justify-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white
        ${
          pathname.includes('programregistration') && 'bg-graydark dark:bg-meta-4'
        }`}
        >Program Registration
        </NavLink>
        <NavLink
        to="/payment"
        className={`mt-4 flex rounded-[50px] items-center justify-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white
        ${
          pathname.includes('payment') && 'bg-graydark dark:bg-meta-4'
        }`}
        >
            Payment
        </NavLink>
        <NavLink
        to="/verification"
        className={`mt-4 flex rounded-[50px] items-center justify-center bg-[#00A651] px-5 py-2 text-[17px] font-medium text-white
        ${
          pathname.includes('verification') && 'bg-graydark dark:bg-meta-4'
        }`}
        >
            Verification
        </NavLink>
      </div>
    </div>
  )
}

export default RegistrationButtons
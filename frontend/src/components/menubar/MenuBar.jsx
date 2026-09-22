import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faPlaneUp, faCar } from "@fortawesome/free-solid-svg-icons";
const MenuBar = () => {
  return (
    <div className="flex mt-5 gap-5 ml-20 max-w-[80%] mb-1">
      <div className="flex gap-2 items-center rounded-2xl border-2 px-4 py-2 cursor-pointer text-white">
        <FontAwesomeIcon icon={faBed} />
        <span>Stays</span>
      </div>
      <div className="flex gap-2 items-center rounded-2xl hover:bg-blue-300 px-4 py-2 cursor-pointer text-white">
        <FontAwesomeIcon icon={faPlaneUp} />
        <span>Flight</span>
      </div>
      <div className="flex gap-2 items-center rounded-2xl hover:bg-blue-300 px-4 py-2 cursor-pointer text-white">
        <FontAwesomeIcon icon={faCar} />
        <span>Car Rental</span>
      </div>      
    </div>
  );
};

export default MenuBar;

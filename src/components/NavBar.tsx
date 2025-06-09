import {
  MapPin,
  Trash2,
  Truck,
  ShieldCheck,
  Calendar,
  CreditCard,
} from "lucide-react";

const NavBar = () => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap bg-gray-900 p-2 flex flex-nowrap justify-around items-center">
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none mr-4">
        <MapPin className="mr-1 text-blue-500" /> Postcode
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none mr-4">
        <Trash2 className="mr-1 text-blue-500" /> Waste Type
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none mr-4">
        <Truck className="mr-1 text-blue-500" /> Select Skip
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none mr-4">
        <ShieldCheck className="mr-1 text-blue-500" /> Permit Check
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none mr-4">
        <Calendar className="mr-1 text-blue-500" /> Choose Date
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none mr-4">
        <CreditCard className="mr-1 text-blue-500" /> Payment
      </button>
    </div>
  );
};

export default NavBar;

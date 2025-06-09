import { 
  MapPin, 
  Trash2, 
  Truck, 
  ShieldCheck, 
  Calendar, 
  CreditCard 
} from 'lucide-react';

const NavBar = () => {
  return (
    <div className="flex justify-around items-center bg-gray-900 p-2 w-full">
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none">
        <MapPin className="mr-1 text-blue-500" /> Postcode
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none">
        <Trash2 className="mr-1 text-blue-500" /> Waste Type
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none">
        <Truck className="mr-1 text-blue-500" /> Select Skip
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none">
        <ShieldCheck className="mr-1 text-blue-500" /> Permit Check
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none">
        <Calendar className="mr-1 text-blue-500" /> Choose Date
      </button>
      <button className="flex items-center text-white text-sm hover:text-blue-500 focus:outline-none">
        <CreditCard className="mr-1 text-blue-500" /> Payment
      </button>
    </div>
  );
};

export default NavBar;
import { FaShoppingCart } from 'react-icons/fa';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-12">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Good food choices are good investments.
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
          purus a odio finibus bibendum amet leo.
        </p>
        <div className="flex space-x-4">
          <Link
            to={'/catalog'}
            className="flex px-8 py-2 text-base font-medium leading-6 text-center text-white bg-orange-500 rounded shadow ripple hover:shadow-lg hover:bg-transparent hover:text-orange-500 hover:border-orange-500 hover:border-2 focus:outline-none transition-all"
          >
            Order Now <FaShoppingCart className="mt-1 ml-3" size={20} />
          </Link>

          <Link
            to={'/contact'}
            className="flex px-8 py-2 text-base font-medium leading-6 text-center text-slate-950 bg-transparent border-4 hover:border-orange-500 rounded ripple hover:bg-transparent hover:border-solid  hover:text-orange-500 hover:border-2 focus:outline-none transition-all"
          >
            Learn More{' '}
            <MdOutlineKeyboardArrowRight className="mt-1 ml-3" size={20} />
          </Link>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <img
          src="https://www.kindpng.com/picc/m/69-690010_transparent-comida-mexicana-png-spanish-rice-png-download.png"
          alt="Transparent Comida Mexicana Png - Spanish Rice, Png"
        />
      </div>
    </div>
  );
};

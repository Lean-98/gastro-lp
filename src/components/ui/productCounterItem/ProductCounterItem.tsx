import { FaPlus, FaMinus } from 'react-icons/fa';
import { useCount } from '../../../hooks/useCount';

export const ProductCounterItem = () => {
  const { count, handleDecrement, handleIncrement } = useCount();
  return (
    <div className="flex space-x-4 mt-3">
      <button
        onClick={handleDecrement}
        className="w-8 h-8 flex items-center justify-center border border-gray-800 rounded-full text-xl"
      >
        <FaMinus size={15} />
      </button>
      <input
        type="email"
        value={count}
        readOnly
        className="w-16 text-center bg-gray-300 border-none rounded-md focus:outline-none"
      />
      <button
        onClick={handleIncrement}
        className="w-8 h-8 flex items-center justify-center border border-gray-800 rounded-full text-xl"
      >
        <FaPlus size={15} />
      </button>
    </div>
  );
};

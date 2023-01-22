import { FC, useContext } from 'react';
import { CounterProps } from '..';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

// export const Counter: FC<CounterProps> = ({ qty, setQty }) => {
//   const handleAddQty = () => {
//     setQty((val) => val + 1);
//   };
//   const handleReduceQty = () => {
//     if (qty === 0) {
//       setQty(0);
//     }
//     setQty((val) => val - 1);
//   };
//   return (
//     <div className='flex justify-center items-center font-semibold'>
//       <button onClick={handleReduceQty} className='px-2  w-[30px] h-[35px] flex justify-center items-center bg-blue-500 text-white hover:bg-blue-700 transition duration-200 ease-in'>
//         -
//       </button>
//       <span className='border-y px-2  w-[50px] h-[35px] flex justify-center items-center'>{qty}</span>
//       <button onClick={handleAddQty} className='px-2  w-[30px] h-[35px] flex justify-center items-center bg-blue-500 text-white hover:bg-blue-700 transition duration-200 ease-in'>
//         +
//       </button>
//     </div>
//   );
// };
interface props {
  id: number;
}
export const Counter: FC<props> = ({ id }) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useContext(ShoppingCartContext);
  return (
    <div className='flex justify-center items-center font-semibold'>
      <button onClick={() => decreaseCartQuantity(id)} className='px-2  w-[30px] h-[35px] flex justify-center items-center bg-blue-500 text-white hover:bg-blue-700 transition duration-200 ease-in'>
        -
      </button>
      <span className='border-y px-2  w-[50px] h-[35px] flex justify-center items-center'>{getItemQuantity(id)}</span>
      <button onClick={() => increaseCartQuantity(id)} className='px-2  w-[30px] h-[35px] flex justify-center items-center bg-blue-500 text-white hover:bg-blue-700 transition duration-200 ease-in'>
        +
      </button>
    </div>
  );
};

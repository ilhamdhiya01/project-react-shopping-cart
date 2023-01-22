import { formatCurrency } from '../../utilities/formatCyrrency';
import { Counter } from './Counter';
import { StoreItemProps } from '..';
import { FC, useContext } from 'react';
import { ShoppingCartContext } from '../../context/ShoppingCartContext';
// import { useShoppingCart } from '../../context/ShoppingCartContext';

export const StoreItem: FC<StoreItemProps> = ({ id, name, price, imgUrl }) => {
  const { increaseCartQuantity, getItemQuantity } = useContext(ShoppingCartContext);
  return (
    <div className='overflow-hidden border rounded-md'>
      <img src={imgUrl} alt='' className='h-[200px] object-cover w-full' />
      <div className='p-3'>
        <div className='flex justify-between items-baseline'>
          <span className='text-xl font-semibold'>{name}</span>
          <span className='font-semibold'>{formatCurrency(price)}</span>
        </div>
        <div className='mt-8'>
          {getItemQuantity(id) === 0 ? (
            <button onClick={() => increaseCartQuantity(id)} className='bg-blue-500 hover:bg-blue-700 transition duration-200 ease-in text-white h-[35px] w-full flex justify-center items-center text-sm font-semibold gap-1 rounded-md'>
              <span>+</span>
              Add To Cart
            </button>
          ) : (
            <Counter id={id} />
          )}
        </div>
      </div>
    </div>
  );
};

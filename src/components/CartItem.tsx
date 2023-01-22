import { FC, useContext } from 'react';
import { BsXLg } from 'react-icons/bs';
import { CartItemProps } from '.';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { storeItems } from '../data/items';
import { formatCurrency } from '../utilities/formatCyrrency';

export const CartItem: FC<CartItemProps> = ({ id, quantity }) => {
  const { getItemQuantity, removeFromCart } = useContext(ShoppingCartContext);
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <div className='flex justify-between items-baseline'>
      <div className='flex gap-2'>
        <img src={item.imgUrl} className='w-[200px] object-cover h-full' alt='' />
        <div className='flex flex-col justify-center'>
          <div className='flex items-baseline gap-2'>
            <span className='text-sm lg:text-base font-semibold text-[#555]'>{item.name}</span>
            <span className='text-xs font-semibold text-gray-400'>x{quantity}</span>
          </div>
          <span className='text-xs lg:text-sm font-semibold text-gray-400'>{formatCurrency(item.price)}</span>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        <span className='font-semibold text-[#555]'>{formatCurrency(item.price * getItemQuantity(id))}</span>
        <span onClick={() => removeFromCart(id)} className='flex items-center justify-center border p-1 cursor-pointer rounded-sm border-red-400'>
          <BsXLg size={11} className='text-red-400' />
        </span>
      </div>
    </div>
  );
};

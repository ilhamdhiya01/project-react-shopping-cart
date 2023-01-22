import { useContext } from 'react';
import { BsXLg } from 'react-icons/bs';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import { Backdrop } from './Backdrop';
import { CartItem } from './CartItem';
import { storeItems } from '../data/items';
import { formatCurrency } from '../utilities/formatCyrrency';

export const ShoppingCart = () => {
  const { isOpen, handleOpenShoppingCart, cartItems } = useContext(ShoppingCartContext);
  // const totalPrice = storeItems.filter(item => item.id === )
  return (
    <Backdrop>
      <aside className={`${isOpen ? 'w-full md:w-[40%] lg:w-[35%] px-3' : 'w-0'} overflow-auto h-screen bg-white fixed top-0 right-0 py-2 z-[1] transition-all duration-300 ease-in-out`}>
        <div className='relative flex justify-between items-baseline'>
          <h1 className='text-xl font-semibold text-[#252525]'>Cart</h1>
          <BsXLg onClick={handleOpenShoppingCart} className='cursor-pointer' />
        </div>
        <div className='grid grid-cols-1 gap-3 mt-8'>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        {cartItems.length !== 0 ? (
          <div className='flex gap-2 justify-end text-xl font-bold text-[#252525] mt-8'>
            <span>Total:</span>
            <span>
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((item) => item.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </span>
          </div>
        ) : null}
      </aside>
    </Backdrop>
  );
};

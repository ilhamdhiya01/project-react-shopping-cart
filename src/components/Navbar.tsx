import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
export const Navbar = () => {
  const { cartItems, handleOpenShoppingCart } = useContext(ShoppingCartContext);
  return (
    <nav className='flex justify-center border-b min-h-[10vh] sticky top-0 bg-white'>
      <div className='flex justify-between items-center max-w-[80%] w-full'>
        <ul className='flex items-center gap-4 text-[15px] text-[#555]'>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/store`}>Store</Link>
          </li>
          <li>
            <Link to={`/about`}>About</Link>
          </li>
        </ul>
        <div onClick={handleOpenShoppingCart} className='w-[3rem] h-[3rem] border flex rounded-full relative cursor-pointer hover:border-blue-500 hover:bg-blue-500 group transition duration-150 ease-in'>
          <FaShoppingCart size={19} className='m-auto text-blue-500 group-hover:text-white group-hover:transition group-hover:duration-150 group-hover:ease-in' />
          <span className='absolute bottom-0 right-0 translate-y-[10%] translate-x-[10%] w-[18px] h-[18px] rounded-full bg-red-500 flex justify-center items-center text-white text-xs font-medium'>{cartItems.length}</span>
        </div>
      </div>
    </nav>
  );
};

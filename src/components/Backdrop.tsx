import { FC, useContext } from 'react';
import { BackdropProps } from '.';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

export const Backdrop: FC<BackdropProps> = ({ children }) => {
  const { isOpen, handleOpenShoppingCart } = useContext(ShoppingCartContext);
  return <div className={`${isOpen ? 'fixed top-0 right-0 bottom-0 left-0 bg-[rgba(37,37,37,.6)] w-full min-h-screen' : ''}`}>{children}</div>;
};

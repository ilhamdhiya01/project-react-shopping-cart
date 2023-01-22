import { createContext, FC, useState } from 'react';
import { ShoppingCartInterface, ShoppingCartProviderProps, CartItem } from '.';
// buat context yang isinya empty object
export const ShoppingCartContext = createContext<ShoppingCartInterface>({} as ShoppingCartInterface);

// buat fungsi component provider
export const ShoppingCartProvider: FC<ShoppingCartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const getItemQuantity = (id: number) => {
    // jika ada ambil quantitynya jika tidak return 0
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id: number) => {
    // ambil nilai saat ini
    setCartItems((currentItems) => {
      // jika item yang di klik tidak ada di keranjang
      if (currentItems.find((item) => item.id === id) == null) {
        // set quantity menjadi 1
        return [...currentItems, { id, quantity: 1 }];
      } else {
        // jka ada maka tambahkan 1 jika setiap mengeklik +
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== id);
    });
  };
  const handleOpenShoppingCart = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('overflow-y-hidden', !isOpen);
  };
  return <ShoppingCartContext.Provider value={{ getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartItems, isOpen, setIsOpen, handleOpenShoppingCart }}>{children}</ShoppingCartContext.Provider>;
};

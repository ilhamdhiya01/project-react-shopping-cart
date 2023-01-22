export interface ShoppingCartProviderProps {
  children: React.ReactNode;
}
export interface ShoppingCartInterface {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenShoppingCart: () => void;
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}
export interface CartItem {
  id: number;
  quantity: number;
}

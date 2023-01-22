export interface CounterProps {
  setQty: React.Dispatch<React.SetStateAction<number>>;
  qty: number;
}

export interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

import { storeItems } from '../data/items';
import { StoreItem } from './components/StoreItem';

export default function Store() {
  return (
    <>
      <h1 className='text-xl font-semibold text-[#252525]'>Store</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-4 gap-4 h-full'>
        {storeItems.map((item) => (
          <StoreItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

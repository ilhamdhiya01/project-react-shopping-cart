import { PropsContainer } from '../global-interface';
import { FC } from 'react';
export const Container: FC<PropsContainer> = ({ children }) => {
  return (
    <div className='flex justify-center w-full min-h-screen'>
      <div className='max-w-[80%] w-full mt-3'>{children}</div>
    </div>
  );
};

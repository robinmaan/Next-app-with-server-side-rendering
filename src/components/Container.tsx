import React, { ReactNode } from 'react';


const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex flex-col max-w-[1100px] mx-auto bg-white'>
      {children}
    </div>
  );
};

export default Container;

import React from 'react';
import { ModeToggle } from './toggle-mode';

const Navbar = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex justify-between items-center">
        FlexiPlaner
        <div className="flex-grow"></div>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;

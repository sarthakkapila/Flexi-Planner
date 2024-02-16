import React from 'react';
import { ModeToggle } from './toggle-mode';
import { Button } from './ui/button';
import { SignInButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex justify-between items-center ">
      <span style={{ fontFamily: 'Arial', fontSize: '30px', fontWeight: 'bold', color: 'black'}}>FlexiPlaner</span>
        <div className="flex-grow"></div>
        <div className=''>
        <SignInButton mode="modal">
              <Button size="lg">
                Sign In
              </Button>
            </SignInButton>
        </div>
        {/* <ModeToggle /> */}
      </div>
    </div>
  );
};

export default Navbar;

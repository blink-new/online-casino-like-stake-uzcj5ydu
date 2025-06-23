import React from 'react';
import { Button } from './ui/button';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  return (
    <header className="bg-dark-light text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-display text-neon-blue">BLINK CASINO</h1>
        <nav className="hidden lg:flex">
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-neon-purple transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-neon-purple transition-colors">Games</a></li>
            <li><a href="#" className="hover:text-neon-purple transition-colors">Promotions</a></li>
            <li><a href="#" className="hover:text-neon-purple transition-colors">Support</a></li>
          </ul>
        </nav>
        <div className="hidden lg:block">
          <Button variant="ghost" className="text-white hover:text-neon-green">Sign In</Button>
          <Button className="bg-neon-blue hover:bg-neon-purple text-dark font-bold">Sign Up</Button>
        </div>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
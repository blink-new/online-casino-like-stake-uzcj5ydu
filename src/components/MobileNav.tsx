import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const MobileNav: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="bg-dark-light border-dark-lighter text-white">
        <SheetHeader>
          <SheetTitle className="text-neon-blue font-display">BLINK CASINO</SheetTitle>
          <SheetDescription className="text-gray-400">
            Navigate through our exciting games.
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-8 flex flex-col space-y-4">
          <a href="#" className="text-lg hover:text-neon-purple transition-colors">Home</a>
          <a href="#" className="text-lg hover:text-neon-purple transition-colors">Games</a>
          <a href="#" className="text-lg hover:text-neon-purple transition-colors">Promotions</a>
          <a href="#" className="text-lg hover:text-neon-purple transition-colors">Support</a>
          <Button className="bg-neon-blue hover:bg-neon-purple text-dark font-bold">Sign In</Button>
          <Button className="bg-neon-purple hover:bg-neon-blue text-dark font-bold">Sign Up</Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

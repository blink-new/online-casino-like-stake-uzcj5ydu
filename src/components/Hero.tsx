import React from 'react';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="bg-dark-lighter text-white py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-display mb-4 text-neon-blue">Experience the Thrill</h2>
        <p className="text-xl mb-8">Play your favorite casino games and win big!</p>
        <Button className="bg-neon-purple hover:bg-neon-blue text-dark font-bold text-lg px-8 py-4">Join Now</Button>
      </div>
    </section>
  );
};

export default Hero;

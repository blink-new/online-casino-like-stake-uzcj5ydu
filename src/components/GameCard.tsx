import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface GameCardProps {
  title: string;
  description: string;
  image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, image }) => {
  return (
    <Card className="bg-dark-light border-dark-lighter text-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <CardHeader className="p-0">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-display mb-2 text-neon-green">{title}</CardTitle>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <Button className="w-full bg-neon-blue hover:bg-neon-purple text-dark font-bold">Play Now</Button>
      </CardContent>
    </Card>
  );
};

export default GameCard;

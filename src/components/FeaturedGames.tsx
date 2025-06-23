import React from 'react';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface FeaturedGameProps {
  title: string;
  image: string;
}

const featuredGames: FeaturedGameProps[] = [
  {
    title: "Limbo",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a68ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Hilo",
    image: "https://images.unsplash.com/photo-1579705719745-e319a0d7f8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Keno",
    image: "https://images.unsplash.com/photo-1617957689371-897bc778c292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Blackjack",
    image: "https://images.unsplash.com/photo-1608501078713-8b1646939ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Roulette",
    image: "https://images.unsplash.com/photo-1579705719745-e319a0d7f8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const FeaturedGames: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-display text-center mb-8 text-neon-purple animate-fadeIn">Featured Games</h2>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-4xl mx-auto"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4">
          {featuredGames.map((game, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-dark-light border-dark-lighter text-white rounded-lg overflow-hidden shadow-lg">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
                  </CardContent>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-display text-neon-green">{game.title}</h3>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export default FeaturedGames;

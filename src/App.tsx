import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import Footer from './components/Footer';

const games = [
  {
    title: "Crash",
    description: "Predict the crash point and cash out before it's too late!",
    image: "https://images.unsplash.com/photo-1629904853893-c2c8981a68ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Dice",
    description: "Roll the dice and test your luck!",
    image: "https://images.unsplash.com/photo-1579705719745-e319a0d7f8d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Plinko",
    description: "Drop the ball and watch it bounce to victory!",
    image: "https://images.unsplash.com/photo-1617957689371-897bc778c292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Mines",
    description: "Uncover gems and avoid the mines!",
    image: "https://images.unsplash.com/photo-1608501078713-8b1646939ad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main>
        <Hero />
        <section className="container mx-auto py-12">
          <h2 className="text-4xl font-display text-center mb-8 text-neon-blue">Our Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {games.map((game) => (
              <GameCard key={game.title} {...game} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
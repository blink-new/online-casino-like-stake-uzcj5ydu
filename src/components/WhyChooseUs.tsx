import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Gem, ShieldCheck, Zap } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-4xl font-display text-center mb-12 text-neon-blue animate-fadeIn">Why Choose BLINK CASINO?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-dark-light border-dark-lighter text-white p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <Gem className="h-12 w-12 text-neon-green mx-auto mb-4" />
            <CardTitle className="text-2xl font-display mb-2">Fair & Transparent</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Our games are provably fair, ensuring a transparent and trustworthy gaming experience.</p>
          </CardContent>
        </Card>
        <Card className="bg-dark-light border-dark-lighter text-white p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <ShieldCheck className="h-12 w-12 text-neon-purple mx-auto mb-4" />
            <CardTitle className="text-2xl font-display mb-2">Secure & Reliable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Your funds and data are protected with state-of-the-art security measures.</p>
          </CardContent>
        </Card>
        <Card className="bg-dark-light border-dark-lighter text-white p-6 text-center transform hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <Zap className="h-12 w-12 text-neon-blue mx-auto mb-4" />
            <CardTitle className="text-2xl font-display mb-2">Instant Payouts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400">Enjoy lightning-fast deposits and withdrawals, so you can access your winnings quickly.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WhyChooseUs;

import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dice6, RotateCcw, Spade, Trophy, TrendingUp, Zap, Star } from 'lucide-react'
import { motion } from 'framer-motion'

interface DashboardProps {
  balance: number
  setBalance: (balance: number) => void
}

const featuredGames = [
  {
    id: 1,
    name: 'Fortune Slots',
    path: '/games/slots',
    icon: Trophy,
    description: 'Spin your way to riches',
    multiplier: '5000x',
    players: 1247,
    hot: true,
  },
  {
    id: 2,
    name: 'Crypto Dice',
    path: '/games/dice',
    icon: Dice6,
    description: 'Roll the dice, win big',
    multiplier: '990x',
    players: 892,
    hot: false,
  },
  {
    id: 3,
    name: 'Roulette Royal',
    path: '/games/roulette',
    icon: RotateCcw,
    description: 'European roulette classic',
    multiplier: '35x',
    players: 643,
    hot: false,
  },
  {
    id: 4,
    name: 'Blackjack Pro',
    path: '/games/blackjack',
    icon: Spade,
    description: 'Beat the dealer at 21',
    multiplier: '3:2',
    players: 421,
    hot: true,
  },
]

const recentWins = [
  { player: 'Player123', game: 'Fortune Slots', amount: 12500, time: '2m ago' },
  { player: 'CryptoKing', game: 'Crypto Dice', amount: 8750, time: '5m ago' },
  { player: 'LuckyOne', game: 'Roulette Royal', amount: 15000, time: '8m ago' },
  { player: 'AceHigh', game: 'Blackjack Pro', amount: 6200, time: '12m ago' },
]

export default function Dashboard({ balance }: DashboardProps) {

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-xl p-8"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome Back, Player!
            </h1>
            <p className="text-gray-300 text-lg">
              Ready to test your luck? Your balance is looking good.
            </p>
          </div>
          <div className="text-right">
            <p className="text-gray-400 text-sm uppercase tracking-wide">Current Balance</p>
            <p className="text-4xl font-bold text-green-400">
              ${balance.toLocaleString()}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Featured Games Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Games</h2>
          <Link to="/games">
            <Button variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
              View All Games
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card className="bg-black/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <game.icon className="w-8 h-8 text-green-400 group-hover:text-green-300 transition-colors" />
                    <div className="flex items-center space-x-2">
                      {game.hot && (
                        <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                          <Zap className="w-3 h-3 mr-1" />
                          HOT
                        </Badge>
                      )}
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                        {game.multiplier}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-white group-hover:text-green-300 transition-colors">
                    {game.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {game.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1 text-sm text-gray-400">
                      <Star className="w-4 h-4" />
                      <span>{game.players} playing</span>
                    </div>
                  </div>
                  <Link to={game.path}>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold">
                      Play Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Wins */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">Recent Big Wins</h2>
        <Card className="bg-black/50 border-green-500/20">
          <CardContent className="p-6">
            <div className="space-y-4">
              {recentWins.map((win, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-green-500/5 rounded-lg border border-green-500/10"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{win.player}</p>
                      <p className="text-gray-400 text-sm">{win.game}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold text-lg">
                      +${win.amount.toLocaleString()}
                    </p>
                    <p className="text-gray-400 text-sm">{win.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
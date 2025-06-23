import { NavLink } from 'react-router-dom'
import { Home, Gamepad2, Dice6, RotateCcw, Spade, User, Trophy, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const navigationItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Gamepad2, label: 'All Games', path: '/games' },
  { icon: Dice6, label: 'Dice', path: '/games/dice' },
  { icon: RotateCcw, label: 'Roulette', path: '/games/roulette' },
  { icon: Spade, label: 'Blackjack', path: '/games/blackjack' },
  { icon: Trophy, label: 'Slots', path: '/games/slots' },
]

const secondaryItems = [
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: TrendingUp, label: 'Stats', path: '/stats' },
]

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-black/50 backdrop-blur-md border-r border-green-500/20 overflow-y-auto">
      <div className="p-4 space-y-8">
        {/* Main Navigation */}
        <div>
          <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Games
          </h3>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-green-500/10 transition-all duration-200',
                    isActive && 'text-green-400 bg-green-500/10 border border-green-500/30'
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Secondary Navigation */}
        <div>
          <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Account
          </h3>
          <nav className="space-y-1">
            {secondaryItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-green-500/10 transition-all duration-200',
                    isActive && 'text-green-400 bg-green-500/10 border border-green-500/30'
                  )
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Stats Card */}
        <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-lg p-4">
          <h4 className="text-white font-semibold mb-2">Today's Stats</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Games Played</span>
              <span className="text-green-400">12</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Winnings</span>
              <span className="text-green-400">+$2,450</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Win Rate</span>
              <span className="text-green-400">68%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
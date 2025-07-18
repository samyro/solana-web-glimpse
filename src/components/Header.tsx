import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Settings, ChevronDown } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border px-4 py-2">
      <div className="flex items-center justify-between">
        {/* Logo and Nav */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green rounded flex items-center justify-center">
              <span className="text-green-foreground font-bold text-xs">G</span>
            </div>
            <span className="font-bold text-green">GMGN</span>
          </div>
          
          <nav className="flex items-center gap-4 text-sm">
            <Button variant="ghost" size="sm" className="text-green h-8">🪖 Trenches</Button>
            <Button variant="ghost" size="sm" className="h-8">New Pair</Button>
            <Button variant="ghost" size="sm" className="h-8">Trending</Button>
            <Button variant="ghost" size="sm" className="h-8">Wallets</Button>
            <Button variant="ghost" size="sm" className="h-8">Copy Trade</Button>
            <Button variant="ghost" size="sm" className="h-8">Sniper</Button>
            <Button variant="ghost" size="sm" className="h-8">Monitor</Button>
            <Button variant="ghost" size="sm" className="h-8">Track</Button>
            <Button variant="ghost" size="sm" className="h-8">Portfolio</Button>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Chain Badge */}
          <Badge className="bg-green text-green-foreground text-xs">Coding Beta</Badge>
          
          {/* Chain Selector */}
          <Button variant="ghost" size="sm" className="h-8 text-xs">
            SOL <ChevronDown className="h-3 w-3 ml-1" />
          </Button>

          {/* Settings */}
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <Settings className="h-3 w-3" />
          </Button>

          {/* Login */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 text-xs">Sign Up</Button>
            <Button size="sm" className="bg-green hover:bg-green/90 text-green-foreground h-8 text-xs">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
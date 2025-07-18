import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Settings, User, Crown } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo and Nav */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green rounded flex items-center justify-center">
              <span className="text-green-foreground font-bold text-sm">G</span>
            </div>
            <span className="font-bold text-lg">GMGN</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Button variant="ghost" className="text-green">Trenches</Button>
            <Button variant="ghost">New Pair</Button>
            <Button variant="ghost">Trending</Button>
            <Button variant="ghost">Wallets</Button>
            <Button variant="ghost">Copy Trade</Button>
            <Button variant="ghost">Sniper</Button>
            <Button variant="ghost">Monitor</Button>
            <Button variant="ghost">Track</Button>
            <Button variant="ghost">Portfolio</Button>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search token/CA/Dev/Twitter"
              className="pl-10 w-80 bg-muted"
            />
          </div>

          {/* Chain Badge */}
          <Badge variant="secondary" className="bg-green/10 text-green border-green/20">
            SOL
          </Badge>

          {/* Coding */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Coding</span>
            <Badge className="bg-green text-green-foreground">Beta</Badge>
          </div>

          {/* Settings */}
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>

          {/* Login */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Sign Up</Button>
            <Button size="sm" className="bg-green hover:bg-green/90 text-green-foreground">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
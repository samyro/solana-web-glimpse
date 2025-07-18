import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

export const FilterSidebar = () => {
  return (
    <aside className="w-64 border-r border-border bg-background p-3 h-screen overflow-y-auto">
      <div className="space-y-4">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="font-medium text-sm">Filter</span>
          </div>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
            <X className="h-3 w-3" />
          </Button>
        </div>

        {/* Platform Buttons */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1 text-xs">
            <Button variant="outline" size="sm" className="h-7 text-xs">Pumpfun</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Believe</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Moonshot</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Bonk</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Boop</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Studio</Button>
          </div>
        </div>

        {/* DEX Filters */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1 text-xs">
            <Button variant="outline" size="sm" className="h-7 text-xs">Raydium</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Meteora</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Orca</Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">Pump AMM</Button>
          </div>
        </div>

        {/* Blacklist Section */}
        <div className="space-y-2">
          <div className="text-xs font-medium">Blacklist Devs</div>
          <Input placeholder="Add dev address" className="h-7 text-xs" />
          <div className="text-xs text-muted-foreground">0/500 Addresses</div>
        </div>

        {/* Search Token */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input 
              placeholder="Search Token" 
              className="pl-7 h-7 text-xs"
            />
          </div>
        </div>

        {/* Filter Options */}
        <div className="space-y-2">
          <Button variant="outline" size="sm" className="w-full h-7 text-xs justify-start">
            Filter Wash Traded
          </Button>
          <Button variant="outline" size="sm" className="w-full h-7 text-xs justify-start">
            Hide Token
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button variant="outline" className="w-full h-7 text-xs">
            Reset
          </Button>
          <Button className="w-full bg-green hover:bg-green/90 text-green-foreground h-7 text-xs">
            Apply
          </Button>
        </div>

        {/* Status Indicators */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green rounded-full"></div>
            <span>🌱 New</span>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary" className="text-xs h-5">P1</Badge>
            <Badge variant="secondary" className="text-xs h-5">P2</Badge>
            <Badge variant="secondary" className="text-xs h-5">P3</Badge>
          </div>
        </div>
      </div>
    </aside>
  );
};

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X, RefreshCw } from "lucide-react";
import { useTokens } from "@/contexts/TokenContext";
import { useState } from "react";

const platforms = ['Pumpfun', 'Believe', 'Moonshot', 'Bonk', 'Boop', 'Studio'];
const dexes = ['Raydium', 'Meteora', 'Orca', 'Pump AMM'];

export const FilterSidebar = () => {
  const { filters, updateFilters, resetFilters, refreshTokens, isLoading } = useTokens();
  const [blacklistAddress, setBlacklistAddress] = useState('');

  const togglePlatform = (platform: string) => {
    const platformKey = platform.toLowerCase();
    const currentPlatforms = filters.platforms || [];
    const newPlatforms = currentPlatforms.includes(platformKey)
      ? currentPlatforms.filter(p => p !== platformKey)
      : [...currentPlatforms, platformKey];
    
    updateFilters({ platforms: newPlatforms });
  };

  const toggleDex = (dex: string) => {
    const dexKey = dex.toLowerCase();
    const currentDexes = filters.dexes || [];
    const newDexes = currentDexes.includes(dexKey)
      ? currentDexes.filter(d => d !== dexKey)
      : [...currentDexes, dexKey];
    
    updateFilters({ dexes: newDexes });
  };

  const isPlatformSelected = (platform: string) => {
    return filters.platforms?.includes(platform.toLowerCase()) || false;
  };

  const isDexSelected = (dex: string) => {
    return filters.dexes?.includes(dex.toLowerCase()) || false;
  };

  return (
    <aside className="w-64 border-r border-border bg-background p-3 h-screen overflow-y-auto">
      <div className="space-y-4">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="font-medium text-sm">Filter</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-6 w-6 p-0 cursor-pointer touch-manipulation"
            onClick={resetFilters}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>

        {/* Refresh Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full h-7 text-xs cursor-pointer touch-manipulation"
          onClick={refreshTokens}
          disabled={isLoading}
        >
          <RefreshCw className={`h-3 w-3 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
          {isLoading ? 'Refreshing...' : 'Refresh Data'}
        </Button>

        {/* Platform Buttons */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1 text-xs">
            {platforms.map((platform) => (
              <Button
                key={platform}
                variant={isPlatformSelected(platform) ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs cursor-pointer touch-manipulation"
                onClick={() => togglePlatform(platform)}
              >
                {platform}
              </Button>
            ))}
          </div>
        </div>

        {/* DEX Filters */}
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-1 text-xs">
            {dexes.map((dex) => (
              <Button
                key={dex}
                variant={isDexSelected(dex) ? "default" : "outline"}
                size="sm"
                className="h-7 text-xs cursor-pointer touch-manipulation"
                onClick={() => toggleDex(dex)}
              >
                {dex}
              </Button>
            ))}
          </div>
        </div>

        {/* Blacklist Section */}
        <div className="space-y-2">
          <div className="text-xs font-medium">Blacklist Devs</div>
          <div className="flex gap-1">
            <Input 
              placeholder="Add dev address" 
              className="h-7 text-xs flex-1"
              value={blacklistAddress}
              onChange={(e) => setBlacklistAddress(e.target.value)}
            />
            <Button 
              size="sm" 
              className="h-7 px-2 text-xs cursor-pointer touch-manipulation"
              onClick={() => {
                if (blacklistAddress.trim()) {
                  // Add to blacklist logic here
                  setBlacklistAddress('');
                }
              }}
            >
              Add
            </Button>
          </div>
          <div className="text-xs text-muted-foreground">0/500 Addresses</div>
        </div>

        {/* Search Token */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
            <Input 
              placeholder="Search Token" 
              className="pl-7 h-7 text-xs"
              value={filters.searchTerm}
              onChange={(e) => updateFilters({ searchTerm: e.target.value })}
            />
          </div>
        </div>

        {/* Filter Options */}
        <div className="space-y-2">
          <Button 
            variant={filters.hideWashTraded ? "default" : "outline"}
            size="sm" 
            className="w-full h-7 text-xs justify-start cursor-pointer touch-manipulation"
            onClick={() => updateFilters({ hideWashTraded: !filters.hideWashTraded })}
          >
            Filter Wash Traded
          </Button>
          <Button 
            variant={filters.hideTokens ? "default" : "outline"}
            size="sm" 
            className="w-full h-7 text-xs justify-start cursor-pointer touch-manipulation"
            onClick={() => updateFilters({ hideTokens: !filters.hideTokens })}
          >
            Hide Token
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button 
            variant="outline" 
            className="w-full h-7 text-xs cursor-pointer touch-manipulation"
            onClick={resetFilters}
          >
            Reset
          </Button>
          <Button className="w-full bg-green hover:bg-green/90 text-green-foreground h-7 text-xs cursor-pointer touch-manipulation">
            Apply
          </Button>
        </div>

        {/* Status Indicators */}
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
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

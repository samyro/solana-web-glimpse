import { TokenRow } from "./TokenRow";
import { Button } from "@/components/ui/button";
import { Search, MoreHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockTokens = [
  {
    logo: "https://via.placeholder.com/32",
    name: "topless coin",
    symbol: "topless",
    age: "1s",
    contract: "FSZc...pump",
    platform: "pump",
    social: {},
    metrics: {
      priceChange1h: 7.3,
      priceChange24h: 3,
      txCount: 3,
      volume: "302.8",
      marketCap: "5.5K",
      price: 0.0049,
    }
  },
  {
    logo: "https://via.placeholder.com/32",
    name: "Claude Terminal",
    symbol: "Claude",
    age: "5s",
    contract: "At5Q...bonk",
    platform: "bonk",
    social: {
      twitter: "https://x.com/mckaywrigley/status/1934810851682472303"
    },
    metrics: {
      priceChange1h: 2.4,
      priceChange24h: 7,
      txCount: 1,
      volume: "360.1",
      marketCap: "5.4K",
      price: 0.000080,
    }
  },
  {
    logo: "https://via.placeholder.com/32",
    name: "microInu",
    symbol: "microInu",
    age: "16s",
    contract: "3sry...pump",
    platform: "pump",
    social: {},
    metrics: {
      priceChange1h: 16,
      priceChange24h: 13,
      txCount: 22,
      volume: "1.2K",
      marketCap: "6.5K",
      price: 0.0092,
    }
  },
  {
    logo: "https://via.placeholder.com/32",
    name: "i love you to bro <3",
    symbol: "i luh u",
    age: "19s",
    contract: "4iyN...bonk",
    platform: "bonk",
    social: {},
    metrics: {
      priceChange1h: 0,
      priceChange24h: 7,
      txCount: 4,
      volume: "710.6",
      marketCap: "5K",
      price: 0.0091,
    }
  },
  {
    logo: "https://via.placeholder.com/32",
    name: "Mask Dog Coin",
    symbol: "MASKDOG",
    age: "23s",
    contract: "2kFF...moon",
    platform: "moon",
    social: {
      website: "https://moonshot.com"
    },
    metrics: {
      priceChange1h: -2,
      priceChange24h: 15,
      txCount: 8,
      volume: "892.3",
      marketCap: "7.1K",
      price: 0.0156,
    }
  }
];

// Duplicate tokens to fill the list
const allTokens = [...mockTokens, ...mockTokens, ...mockTokens];

export const TokenGrid = () => {
  return (
    <main className="flex-1 bg-background">
      {/* Header Controls */}
      <div className="border-b border-border px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-7 text-xs">🌱 New</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">P1</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">P2</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">P3</Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-7 h-7 w-40 text-xs"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">9</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
              <MoreHorizontal className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>

      {/* Table Header */}
      <div className="border-b border-border px-4 py-2 bg-muted/20">
        <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
          <div className="w-8">#</div>
          <div className="flex-1">Token</div>
          <div className="w-16">Social</div>
          <div className="w-12 text-center">1h</div>
          <div className="w-12 text-center">24h</div>
          <div className="w-16 text-center">Metrics</div>
          <div className="w-20 text-right">Price</div>
          <div className="w-12 text-center">TX</div>
          <div className="w-20 text-right">V/MC</div>
          <div className="w-16">Action</div>
        </div>
      </div>

      {/* Token List */}
      <div className="overflow-y-auto">
        {allTokens.map((token, index) => (
          <TokenRow key={index} {...token} />
        ))}
      </div>
    </main>
  );
};
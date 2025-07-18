import { TokenCard } from "./TokenCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Flame, Sparkles } from "lucide-react";

// Mock data for demonstration
const mockTokens = [
  {
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop&crop=faces",
    name: "Billy The Bull",
    symbol: "BTB",
    age: "3s",
    contract: "AZvg...y65Y",
    social: {
      twitter: "https://twitter.com/example",
      website: "https://example.com",
      telegram: "https://t.me/example"
    },
    metrics: {
      priceChange1h: 18.8,
      priceChange24h: 2,
      txCount: 13,
      volume: "953.6",
      marketCap: "6.8K",
      price: 0.014
    }
  },
  {
    logo: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=faces",
    name: "paytie",
    symbol: "paytie",
    age: "4s",
    contract: "8m2s...bonk",
    social: {
      twitter: "https://twitter.com/example"
    },
    metrics: {
      priceChange1h: 0.1,
      priceChange24h: 7,
      txCount: 7,
      volume: "1.8K",
      marketCap: "5K",
      price: 0.047
    }
  },
  {
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=40&h=40&fit=crop&crop=faces",
    name: "Big Yellow Banana",
    symbol: "BYB",
    age: "6s",
    contract: "6BPM...bonk",
    social: {
      twitter: "https://twitter.com/example"
    },
    metrics: {
      priceChange1h: 1.7,
      priceChange24h: 3,
      txCount: 4,
      volume: "434.3",
      marketCap: "5.5K",
      price: 0.0027
    }
  },
  {
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=40&h=40&fit=crop&crop=faces",
    name: "GoonerAgent37500",
    symbol: "GoonAgent",
    age: "7s",
    contract: "g2ja...bonk",
    social: {
      twitter: "https://twitter.com/example"
    },
    metrics: {
      priceChange1h: -2.1,
      priceChange24h: 1.5,
      txCount: 8,
      volume: "712.1",
      marketCap: "3.2K",
      price: 0.0089
    }
  },
  {
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=40&h=40&fit=crop&crop=faces",
    name: "Solana Cat Token",
    symbol: "SCAT",
    age: "12s",
    contract: "SC4T...meow",
    social: {
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example"
    },
    metrics: {
      priceChange1h: 45.2,
      priceChange24h: 15.8,
      txCount: 25,
      volume: "2.1K",
      marketCap: "12.5K",
      price: 0.125
    }
  },
  {
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=40&h=40&fit=crop&crop=faces",
    name: "Moon Rocket",
    symbol: "MOON",
    age: "15s",
    contract: "M00N...rock",
    social: {
      twitter: "https://twitter.com/example",
      website: "https://example.com"
    },
    metrics: {
      priceChange1h: -5.3,
      priceChange24h: 8.9,
      txCount: 18,
      volume: "1.5K",
      marketCap: "8.7K",
      price: 0.067
    }
  }
];

export const TokenGrid = () => {
  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Trenches</h1>
          <Badge className="bg-green/20 text-green border-green/30">
            <Flame className="w-3 h-3 mr-1" />
            New
          </Badge>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              P1
            </Button>
            <Button variant="outline" size="sm">
              P2
            </Button>
            <Button variant="outline" size="sm">
              P3
            </Button>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="w-4 h-4" />
            <span>Live Updates</span>
            <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-6">
        <Button variant="outline" size="sm">🌱 New</Button>
        <Button variant="outline" size="sm">🔥 Trending</Button>
        <Button variant="outline" size="sm">⚡ Volume</Button>
        <Button variant="outline" size="sm">📈 Gainers</Button>
        <Button variant="outline" size="sm">📉 Losers</Button>
      </div>

      {/* Token Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {mockTokens.map((token, index) => (
          <TokenCard key={index} {...token} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-8">
        <Button 
          variant="outline" 
          className="hover:border-green hover:text-green"
        >
          Load More Tokens
        </Button>
      </div>
    </div>
  );
};
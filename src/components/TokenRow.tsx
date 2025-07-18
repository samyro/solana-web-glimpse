import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Twitter, Globe, MessageCircle } from "lucide-react";

interface TokenRowProps {
  logo: string;
  name: string;
  symbol: string;
  age: string;
  contract: string;
  social?: {
    twitter?: string;
    website?: string;
    telegram?: string;
  };
  metrics: {
    priceChange1h: number;
    priceChange24h: number;
    txCount: number;
    volume: string;
    marketCap: string;
    price: number;
  };
  platform?: string;
}

export const TokenRow = ({ logo, name, symbol, age, contract, social, metrics, platform }: TokenRowProps) => {
  const formatPercentage = (value: number) => {
    const isPositive = value >= 0;
    return (
      <span className={`text-xs ${isPositive ? "text-green" : "text-red"}`}>
        {isPositive ? "+" : ""}{value.toFixed(1)}%
      </span>
    );
  };

  return (
    <div className="flex items-center gap-3 px-4 py-2 border-b border-border/50 hover:bg-muted/20 text-xs">
      {/* Index/Status */}
      <div className="w-8 text-center text-muted-foreground">
        9
      </div>

      {/* Token Info */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <img 
          src={logo} 
          alt={`${name} logo`}
          className="w-8 h-8 rounded-full bg-muted flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="font-medium truncate">{symbol}</span>
            <Badge variant="secondary" className="text-xs h-4 px-1">
              {age}
            </Badge>
            {platform && (
              <Badge variant="outline" className="text-xs h-4 px-1">
                {platform}
              </Badge>
            )}
          </div>
          <div className="text-muted-foreground truncate text-xs">{name}</div>
          <div className="text-muted-foreground font-mono truncate text-xs">
            {contract}
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-1">
        {social?.twitter && (
          <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
            <Twitter className="h-3 w-3" />
          </Button>
        )}
        {social?.website && (
          <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
            <Globe className="h-3 w-3" />
          </Button>
        )}
        {social?.telegram && (
          <Button variant="ghost" size="sm" className="h-5 w-5 p-0">
            <MessageCircle className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Price Changes */}
      <div className="w-12 text-center">
        {formatPercentage(metrics.priceChange1h)}
      </div>
      <div className="w-12 text-center">
        {formatPercentage(metrics.priceChange24h)}
      </div>

      {/* Metrics */}
      <div className="w-16 text-center text-muted-foreground">
        {metrics.txCount}
      </div>
      
      {/* Price */}
      <div className="w-20 text-right font-mono">
        ${metrics.price.toFixed(6)}
      </div>

      {/* TX Count */}
      <div className="w-12 text-center text-muted-foreground">
        TX {metrics.txCount}
      </div>

      {/* Volume & Market Cap */}
      <div className="w-20 text-xs text-right">
        <div className="text-muted-foreground">V${metrics.volume}</div>
        <div className="text-muted-foreground">MC${metrics.marketCap}</div>
      </div>

      {/* Buy Button */}
      <div className="w-16">
        <Button 
          className="w-full bg-green hover:bg-green/90 text-green-foreground h-6 text-xs"
          size="sm"
        >
          Buy
        </Button>
      </div>
    </div>
  );
};
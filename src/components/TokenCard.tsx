import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Twitter, MessageCircle, Globe } from "lucide-react";

interface TokenCardProps {
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
}

export const TokenCard = ({ logo, name, symbol, age, contract, social, metrics }: TokenCardProps) => {
  const formatPercentage = (value: number) => {
    const isPositive = value >= 0;
    return (
      <span className={isPositive ? "text-green" : "text-red"}>
        {isPositive ? "+" : ""}{value.toFixed(1)}%
      </span>
    );
  };

  return (
    <Card className="bg-card border-border p-4 hover:border-primary/20 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <img 
          src={logo} 
          alt={`${name} logo`}
          className="w-10 h-10 rounded-full bg-muted"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-sm truncate">{symbol}</h3>
            <Badge variant="secondary" className="text-xs">
              {age}
            </Badge>
          </div>
          <p className="text-xs text-muted-foreground truncate">{name}</p>
          <p className="text-xs text-muted-foreground font-mono truncate">
            {contract}
          </p>
        </div>
      </div>

      {/* Social Links */}
      {social && (
        <div className="flex gap-2 mb-3">
          {social.twitter && (
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Twitter className="h-3 w-3" />
            </Button>
          )}
          {social.website && (
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <Globe className="h-3 w-3" />
            </Button>
          )}
          {social.telegram && (
            <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
              <MessageCircle className="h-3 w-3" />
            </Button>
          )}
        </div>
      )}

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
        <div>
          <div className="text-muted-foreground">1h</div>
          <div>{formatPercentage(metrics.priceChange1h)}</div>
        </div>
        <div>
          <div className="text-muted-foreground">24h</div>
          <div>{formatPercentage(metrics.priceChange24h)}</div>
        </div>
        <div>
          <div className="text-muted-foreground">TX</div>
          <div className="text-foreground">{metrics.txCount}</div>
        </div>
      </div>

      {/* Price and Volume */}
      <div className="flex items-center justify-between text-xs mb-3">
        <div>
          <div className="text-muted-foreground">V${metrics.volume}</div>
          <div className="text-muted-foreground">MC${metrics.marketCap}</div>
        </div>
        <div className="text-right">
          <div className="font-mono">${metrics.price.toFixed(6)}</div>
        </div>
      </div>

      {/* Buy Button */}
      <Button 
        className="w-full bg-green hover:bg-green/90 text-green-foreground"
        size="sm"
      >
        Buy
      </Button>
    </Card>
  );
};
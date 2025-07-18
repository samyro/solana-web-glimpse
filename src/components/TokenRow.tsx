
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Twitter, Globe, MessageCircle, ExternalLink, Copy } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

interface TokenRowProps {
  id: string;
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
  index: number;
}

export const TokenRow = ({ id, logo, name, symbol, age, contract, social, metrics, platform, index }: TokenRowProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBuying, setIsBuying] = useState(false);

  const formatPercentage = (value: number) => {
    const isPositive = value >= 0;
    return (
      <span className={`text-xs font-medium ${isPositive ? "text-green" : "text-red"}`}>
        {isPositive ? "+" : ""}{value.toFixed(1)}%
      </span>
    );
  };

  const copyContract = () => {
    navigator.clipboard.writeText(contract);
    toast({
      title: "Contract copied!",
      description: `${contract} copied to clipboard`,
    });
  };

  const handleBuy = async () => {
    setIsBuying(true);
    
    // Simulate buy action
    setTimeout(() => {
      setIsBuying(false);
      toast({
        title: "Buy order placed!",
        description: `Buying ${symbol} at $${metrics.price.toFixed(6)}`,
      });
    }, 1000);
  };

  const openSocial = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className={`flex items-center gap-3 px-4 py-2 border-b border-border/50 hover:bg-muted/20 text-xs transition-colors cursor-pointer ${
        isHovered ? 'bg-muted/10' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Index/Status */}
      <div className="w-8 text-center text-muted-foreground">
        {index}
      </div>

      {/* Token Info */}
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <img 
          src={logo} 
          alt={`${name} logo`}
          className="w-8 h-8 rounded-full bg-muted flex-shrink-0"
          onError={(e) => {
            e.currentTarget.src = `https://ui-avatars.com/api/?name=${symbol}&size=32&background=random`;
          }}
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
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground font-mono truncate text-xs">
              {contract}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-4 w-4 p-0 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                copyContract();
              }}
            >
              <Copy className="h-2 w-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-1">
        {social?.twitter && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-5 w-5 p-0 hover:text-blue-400 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              openSocial(social.twitter!);
            }}
            title="Twitter"
          >
            <Twitter className="h-3 w-3" />
          </Button>
        )}
        {social?.website && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-5 w-5 p-0 hover:text-blue-500 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              openSocial(social.website!);
            }}
            title="Website"
          >
            <Globe className="h-3 w-3" />
          </Button>
        )}
        {social?.telegram && (
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-5 w-5 p-0 hover:text-blue-400 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              openSocial(social.telegram!);
            }}
            title="Telegram"
          >
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
        <span className="text-xs">${metrics.price.toFixed(6)}</span>
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
          className="w-full bg-green hover:bg-green/90 text-green-foreground h-6 text-xs transition-all hover:scale-105 cursor-pointer touch-manipulation"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            handleBuy();
          }}
          disabled={isBuying}
        >
          {isBuying ? '...' : 'Buy'}
        </Button>
      </div>
    </div>
  );
};

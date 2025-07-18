
import React, { createContext, useContext, useState, useEffect } from 'react';

interface TokenMetrics {
  priceChange1h: number;
  priceChange24h: number;
  txCount: number;
  volume: string;
  marketCap: string;
  price: number;
}

interface Token {
  id: string;
  logo: string;
  name: string;
  symbol: string;
  age: string;
  contract: string;
  platform: string;
  social?: {
    twitter?: string;
    website?: string;
    telegram?: string;
  };
  metrics: TokenMetrics;
}

interface FilterState {
  platforms: string[];
  dexes: string[];
  searchTerm: string;
  hideWashTraded: boolean;
  hideTokens: boolean;
  sortBy: 'newest' | 'price' | 'volume' | 'marketCap';
  sortDirection: 'asc' | 'desc';
}

interface TokenContextType {
  tokens: Token[];
  filteredTokens: Token[];
  filters: FilterState;
  updateFilters: (newFilters: Partial<FilterState>) => void;
  resetFilters: () => void;
  refreshTokens: () => void;
  isLoading: boolean;
}

const TokenContext = createContext<TokenContextType | undefined>(undefined);

const initialTokens: Token[] = [
  {
    id: '1',
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
    id: '2',
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
];

const generatedTokens: Token[] = [...Array(20)].map((_, i) => ({
  id: `token-${i + 3}`,
  logo: "https://via.placeholder.com/32",
  name: `Token ${i + 3}`,
  symbol: `TK${i + 3}`,
  age: `${Math.floor(Math.random() * 60)}s`,
  contract: `${Math.random().toString(36).substring(2, 6)}...${['pump', 'bonk', 'moon'][Math.floor(Math.random() * 3)]}`,
  platform: ['pump', 'bonk', 'moon', 'believe'][Math.floor(Math.random() * 4)],
  social: Math.random() > 0.5 ? { twitter: "https://twitter.com" } : {},
  metrics: {
    priceChange1h: (Math.random() - 0.5) * 20,
    priceChange24h: (Math.random() - 0.5) * 40,
    txCount: Math.floor(Math.random() * 100),
    volume: `${(Math.random() * 10000).toFixed(1)}`,
    marketCap: `${(Math.random() * 100).toFixed(1)}K`,
    price: Math.random() * 0.1,
  }
}));

const allTokens = [...initialTokens, ...generatedTokens];

const initialFilters: FilterState = {
  platforms: [],
  dexes: [],
  searchTerm: '',
  hideWashTraded: false,
  hideTokens: false,
  sortBy: 'newest',
  sortDirection: 'desc',
};

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tokens, setTokens] = useState<Token[]>(allTokens);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens(prevTokens => 
        prevTokens.map(token => ({
          ...token,
          metrics: {
            ...token.metrics,
            price: token.metrics.price * (1 + (Math.random() - 0.5) * 0.02),
            priceChange1h: token.metrics.priceChange1h + (Math.random() - 0.5) * 0.5,
            txCount: token.metrics.txCount + Math.floor(Math.random() * 3),
          }
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const filteredTokens = React.useMemo(() => {
    let filtered = [...tokens];

    // Platform filter
    if (filters.platforms.length > 0) {
      filtered = filtered.filter(token => filters.platforms.includes(token.platform));
    }

    // Search filter
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase();
      filtered = filtered.filter(token => 
        token.name.toLowerCase().includes(searchLower) ||
        token.symbol.toLowerCase().includes(searchLower) ||
        token.contract.toLowerCase().includes(searchLower)
      );
    }

    // Sort
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (filters.sortBy) {
        case 'price':
          comparison = a.metrics.price - b.metrics.price;
          break;
        case 'volume':
          comparison = parseFloat(a.metrics.volume) - parseFloat(b.metrics.volume);
          break;
        case 'marketCap':
          comparison = parseFloat(a.metrics.marketCap) - parseFloat(b.metrics.marketCap);
          break;
        default:
          comparison = parseInt(a.age) - parseInt(b.age);
      }
      return filters.sortDirection === 'desc' ? -comparison : comparison;
    });

    return filtered;
  }, [tokens, filters]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const refreshTokens = () => {
    setIsLoading(true);
    setTimeout(() => {
      setTokens(prevTokens => 
        prevTokens.map(token => ({
          ...token,
          metrics: {
            ...token.metrics,
            price: token.metrics.price * (1 + (Math.random() - 0.5) * 0.1),
            priceChange1h: (Math.random() - 0.5) * 20,
            priceChange24h: (Math.random() - 0.5) * 40,
          }
        }))
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <TokenContext.Provider value={{
      tokens,
      filteredTokens,
      filters,
      updateFilters,
      resetFilters,
      refreshTokens,
      isLoading,
    }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokens = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error('useTokens must be used within a TokenProvider');
  }
  return context;
};

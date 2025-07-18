
import { TokenRow } from "./TokenRow";
import { Button } from "@/components/ui/button";
import { Search, MoreHorizontal, ArrowUpDown, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useTokens } from "@/contexts/TokenContext";

export const TokenGrid = () => {
  const { filteredTokens, filters, updateFilters, isLoading } = useTokens();

  const toggleSort = (sortBy: 'newest' | 'price' | 'volume' | 'marketCap') => {
    const newDirection = filters.sortBy === sortBy && filters.sortDirection === 'desc' ? 'asc' : 'desc';
    updateFilters({ sortBy, sortDirection: newDirection });
  };

  const getSortIcon = (column: string) => {
    if (filters.sortBy === column) {
      return (
        <ArrowUpDown className={`h-3 w-3 ml-1 ${filters.sortDirection === 'desc' ? 'rotate-180' : ''}`} />
      );
    }
    return <ArrowUpDown className="h-3 w-3 ml-1 opacity-50" />;
  };

  return (
    <main className="flex-1 bg-background">
      {/* Header Controls */}
      <div className="border-b border-border px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-7 text-xs">
                🌱 New ({filteredTokens.length})
              </Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">P1</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">P2</Button>
              <Button variant="outline" size="sm" className="h-7 text-xs">P3</Button>
            </div>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-7 h-7 w-40 text-xs"
                value={filters.searchTerm}
                onChange={(e) => updateFilters({ searchTerm: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {isLoading && <RefreshCw className="h-3 w-3 animate-spin text-muted-foreground" />}
            <span className="text-xs text-muted-foreground">{filteredTokens.length}</span>
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
          <Button
            variant="ghost"
            size="sm"
            className="w-12 h-6 p-0 text-center hover:bg-muted/50"
            onClick={() => toggleSort('newest')}
          >
            1h {getSortIcon('newest')}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="w-12 h-6 p-0 text-center hover:bg-muted/50"
            onClick={() => toggleSort('newest')}
          >
            24h {getSortIcon('newest')}
          </Button>
          <div className="w-16 text-center">Metrics</div>
          <Button
            variant="ghost"
            size="sm"
            className="w-20 h-6 p-0 text-right hover:bg-muted/50"
            onClick={() => toggleSort('price')}
          >
            Price {getSortIcon('price')}
          </Button>
          <div className="w-12 text-center">TX</div>
          <Button
            variant="ghost"
            size="sm"
            className="w-20 h-6 p-0 text-right hover:bg-muted/50"
            onClick={() => toggleSort('volume')}
          >
            V/MC {getSortIcon('volume')}
          </Button>
          <div className="w-16">Action</div>
        </div>
      </div>

      {/* Token List */}
      <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
        {isLoading && filteredTokens.length === 0 ? (
          <div className="flex justify-center items-center h-32">
            <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
          </div>
        ) : filteredTokens.length === 0 ? (
          <div className="flex justify-center items-center h-32 text-muted-foreground">
            No tokens found matching your filters
          </div>
        ) : (
          filteredTokens.map((token, index) => (
            <TokenRow key={token.id} {...token} index={index + 1} />
          ))
        )}
      </div>
    </main>
  );
};

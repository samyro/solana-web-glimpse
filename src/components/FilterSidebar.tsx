import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const FilterSidebar = () => {
  return (
    <div className="w-80 bg-background border-r border-border p-4 space-y-6">
      {/* Platform Filter */}
      <div>
        <h3 className="font-semibold mb-3">Platform</h3>
        <div className="grid grid-cols-3 gap-2">
          {["All", "Pumpfun", "Raydium", "Meteora", "Orca"].map((platform) => (
            <Button 
              key={platform}
              variant={platform === "All" ? "default" : "outline"}
              size="sm"
              className={platform === "All" ? "bg-green hover:bg-green/90 text-green-foreground" : ""}
            >
              {platform}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Market Cap Filter */}
      <div>
        <h3 className="font-semibold mb-3">Market Cap</h3>
        <div className="grid grid-cols-4 gap-2 mb-3">
          {["Small", "Large", "Mega"].map((size) => (
            <Button 
              key={size}
              variant="outline"
              size="sm"
            >
              {size}
            </Button>
          ))}
        </div>
        <Slider
          defaultValue={[5]}
          max={100}
          step={1}
          className="w-full"
        />
      </div>

      <Separator />

      {/* Settings */}
      <div className="space-y-4">
        <h3 className="font-semibold">Settings</h3>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">Large MC/Vol</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">Hide Search Bar</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">Square Logo</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">Spaced Tables</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">New Tab on Right Click</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">Hide Same Name Tokens</span>
          <Switch />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm">Check Chart After Buy</span>
          <Switch />
        </div>
      </div>

      <Separator />

      {/* Blacklist */}
      <div>
        <h3 className="font-semibold mb-3">Blacklist Devs</h3>
        <Card className="p-3 bg-muted/50">
          <div className="text-center text-muted-foreground mb-2">
            <div className="w-12 h-12 bg-muted rounded-full mx-auto mb-2"></div>
            <p className="text-sm">Please add Dev Addresses to block</p>
            <p className="text-xs">0/500 Addresses</p>
          </div>
        </Card>
        <Button variant="outline" size="sm" className="w-full mt-2">
          Add
        </Button>
      </div>

      <Separator />

      {/* Search and Actions */}
      <div className="space-y-2">
        <Input placeholder="Search Token" />
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Hide Token
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            Reset
          </Button>
        </div>
        <Button className="w-full bg-green hover:bg-green/90 text-green-foreground">
          Apply
        </Button>
      </div>
    </div>
  );
};
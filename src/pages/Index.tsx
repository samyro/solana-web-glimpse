
import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { TokenGrid } from "@/components/TokenGrid";
import { TokenProvider } from "@/contexts/TokenContext";

const Index = () => {
  return (
    <TokenProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <div className="flex">
          <FilterSidebar />
          <TokenGrid />
        </div>
      </div>
    </TokenProvider>
  );
};

export default Index;

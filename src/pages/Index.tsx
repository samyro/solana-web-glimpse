import { Header } from "@/components/Header";
import { FilterSidebar } from "@/components/FilterSidebar";
import { TokenGrid } from "@/components/TokenGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="flex">
        <FilterSidebar />
        <TokenGrid />
      </div>
    </div>
  );
};

export default Index;

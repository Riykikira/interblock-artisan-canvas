import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-xl">IB</span>
          </div>
          <span className="text-2xl font-bold text-primary">INTERBLOCK</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground hover:text-accent transition-colors">Início</a>
          <a href="#produtos" className="text-foreground hover:text-accent transition-colors">Produtos</a>
          <a href="#sobre" className="text-foreground hover:text-accent transition-colors">Sobre</a>
          <a href="#projetos" className="text-foreground hover:text-accent transition-colors">Projetos</a>
          <a href="#contato" className="text-foreground hover:text-accent transition-colors">Contato</a>
        </nav>
        
        <Button variant="default" className="hidden md:flex">
          Solicitar Orçamento
        </Button>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;

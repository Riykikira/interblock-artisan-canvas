import { Card, CardContent } from "@/components/ui/card";
import { Building2, Boxes, Grid3x3, Layers } from "lucide-react";
import productsImage from "@/assets/products-concrete.jpg";

const products = [
  {
    icon: Building2,
    title: "Blocos de Concreto",
    description: "Blocos estruturais e de vedação com alta resistência e acabamento perfeito."
  },
  {
    icon: Boxes,
    title: "Pavimentos",
    description: "Peças intertravadas para pisos externos com design moderno e durabilidade."
  },
  {
    icon: Grid3x3,
    title: "Elementos Vazados",
    description: "Cobogós e elementos decorativos que unem funcionalidade e estética."
  },
  {
    icon: Layers,
    title: "Pré-Moldados",
    description: "Soluções customizadas em concreto para projetos especiais."
  }
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções em concreto que atendem aos mais altos padrões de qualidade e sustentabilidade
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <product.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="relative h-96 rounded-2xl overflow-hidden">
          <img 
            src={productsImage} 
            alt="Produtos Interblock" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
            <div className="p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-2">Qualidade Certificada</h3>
              <p className="text-lg">Todos os nossos produtos seguem rigorosos padrões de qualidade e normas técnicas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;

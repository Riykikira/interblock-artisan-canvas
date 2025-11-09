import { Button } from "@/components/ui/button";
import { Check, Ruler, Shield, Zap } from "lucide-react";
import angularToolImage from "@/assets/angular-tool.jpg";

const AngularTool = () => {
  const features = [
    {
      icon: Ruler,
      title: "Precisão Absoluta",
      description: "Ângulos perfeitos em cada aplicação"
    },
    {
      icon: Shield,
      title: "Alta Durabilidade",
      description: "Resistente a desgaste e impactos"
    },
    {
      icon: Zap,
      title: "Produtividade",
      description: "Agiliza processos de construção"
    }
  ];

  const specs = [
    "Material de alta resistência",
    "Acabamento profissional",
    "Fácil manuseio",
    "Certificação de qualidade"
  ];

  return (
    <section id="angular-tool" className="py-24 bg-gradient-to-b from-background to-concrete-light/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold">
              PRODUTO DESTAQUE
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Ferramenta <span className="text-accent">Ângula</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A solução definitiva para acabamentos perfeitos em obras de alvenaria. 
            Inovação e precisão que transformam seu trabalho.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Section with 3D effect */}
          <div className="relative group animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              <img 
                src={angularToolImage} 
                alt="Ferramenta Ângula Interblock" 
                className="w-full h-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex gap-4 p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-concrete-dark/5 dark:bg-concrete-dark/20 p-6 rounded-xl border border-border">
              <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Check className="w-5 h-5 text-accent" />
                Especificações Técnicas
              </h4>
              <ul className="space-y-3">
                {specs.map((spec, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
                Solicitar Orçamento
                <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-2">
                Ver Especificações Completas
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
          {[
            { value: "100%", label: "Precisão" },
            { value: "5x", label: "Mais Rápido" },
            { value: "10 anos", label: "Garantia" },
            { value: "10k+", label: "Obras Realizadas" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AngularTool;

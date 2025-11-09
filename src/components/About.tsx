import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mais de 20 anos de experiência no mercado",
  "Tecnologia de ponta em produção",
  "Equipe altamente qualificada",
  "Compromisso com sustentabilidade",
  "Atendimento personalizado",
  "Entrega pontual garantida"
];

const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Sobre a Interblock
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Somos uma empresa especializada na fabricação de artefatos de cimento de alta qualidade, 
              atendendo desde pequenos projetos residenciais até grandes empreendimentos comerciais e industriais.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa missão é fornecer produtos que combinam durabilidade, estética e sustentabilidade, 
              sempre com foco na satisfação total de nossos clientes.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-concrete-light/20 rounded-2xl p-8 border-2 border-concrete-light">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">20+</div>
                  <div className="text-muted-foreground">Anos de Mercado</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">500+</div>
                  <div className="text-muted-foreground">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">100%</div>
                  <div className="text-muted-foreground">Clientes Satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-accent mb-2">50+</div>
                  <div className="text-muted-foreground">Colaboradores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

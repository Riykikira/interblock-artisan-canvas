import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender seu projeto. Fale conosco!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Informações de Contato</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Endereço</h4>
                  <p className="text-muted-foreground">
                    Rua Industrial, 1234<br />
                    Distrito Industrial - São Paulo, SP
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Telefone</h4>
                  <p className="text-muted-foreground">
                    (11) 1234-5678<br />
                    (11) 98765-4321
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    contato@interblock.com.br<br />
                    vendas@interblock.com.br
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h4 className="font-semibold text-primary mb-2">Horário de Atendimento</h4>
              <p className="text-muted-foreground">
                Segunda a Sexta: 8h às 18h<br />
                Sábado: 8h às 12h
              </p>
            </div>
          </div>
          
          <div className="bg-card border-2 border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">Solicite um Orçamento</h3>
            
            <form className="space-y-4">
              <div>
                <Input placeholder="Seu nome" className="h-12" />
              </div>
              <div>
                <Input type="email" placeholder="Seu email" className="h-12" />
              </div>
              <div>
                <Input type="tel" placeholder="Seu telefone" className="h-12" />
              </div>
              <div>
                <Textarea 
                  placeholder="Descreva seu projeto e necessidades" 
                  className="min-h-32 resize-none"
                />
              </div>
              <Button className="w-full h-12 text-lg" size="lg">
                Enviar Mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

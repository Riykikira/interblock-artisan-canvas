const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">IB</span>
              </div>
              <span className="text-xl font-bold">INTERBLOCK</span>
            </div>
            <p className="text-primary-foreground/80">
              Qualidade e inovação em artefatos de cimento.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Produtos</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Blocos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pavimentos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Elementos Vazados</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Pré-Moldados</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#sobre" className="hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#projetos" className="hover:text-accent transition-colors">Projetos</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Qualidade</a></li>
              <li><a href="#contato" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>(11) 1234-5678</li>
              <li>contato@interblock.com.br</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Interblock. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
